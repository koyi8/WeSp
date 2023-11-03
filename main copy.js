import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
//import { Flow } from 'three/addons/modifiers/CurveModifier.js';
import Stats from "three/addons/libs/stats.module.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';




const ACTION_SELECT = 1, ACTION_NONE = 0;
let action = ACTION_NONE;


let stats;

let container;
let camera, scene, renderer, labelRenderer;
const splineHelperObjects = [];
let splinePointsLength = 4;
const positions = [];
const point = new THREE.Vector3();

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const onUpPosition = new THREE.Vector2();
const onDownPosition = new THREE.Vector2();

const geometry = new THREE.BoxGeometry( 20, 20, 20 );
let transformControl;

const ARC_SEGMENTS = 200;

const splines = {};

const params = {
    uniform: true,
    tension: 0.5,
    centripetal: false,
    chordal: false,
    addPoint: addPoint,
    removePoint: removePoint,
    exportSpline: exportSpline
};


//speed control for GUI
let speed = 3;
// closed spline option or open // DEFAULT: true
let closed = true;
// loop vs alternate option // DEFAULT: true
let loop = true;
// global arclenth variable // DEFAULT:0
let arcLenght = 0;


// Initialize animation parameters

var currentPosition = 0; // Initial position along the spline   
let TrigPos;
let cube;
const clock = new THREE.Clock();
let delta;
let cubeP;





init();
animate(); 

function init() {


    container = document.getElementById( 'container' );

    //Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    //Camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 1500, 800, 0 );
    scene.add( camera );

    //Light
    scene.add( new THREE.AmbientLight( 0xf0f0f0, 3 ) );
    const light = new THREE.SpotLight( 0xffffff, 4.5 );
    light.position.set( 0, 1500, 200 );
    light.angle = Math.PI * 0.2;
    light.decay = 0;
    light.castShadow = true;
    light.shadow.camera.near = 200;
    light.shadow.camera.far = 2000;
    light.shadow.bias = - 0.000222;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add( light );
    //PlaneGeometry
    const planeGeometry = new THREE.PlaneGeometry( 2000, 2000 );
    planeGeometry.rotateX( - Math.PI / 2 );
    const planeMaterial = new THREE.ShadowMaterial( { color: 0x000000, opacity: 0.2 } );

    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y = 0;
    plane.receiveShadow = true;
    scene.add( plane );
    //PlaneGridHelper
    const helper = new THREE.GridHelper( 2000, 100 );
    helper.position.y = 0;
    helper.material.opacity = 1;
    helper.material.transparent = true;
    scene.add( helper );

    renderer = new THREE.WebGLRenderer( { antialias: true } );
    renderer.setPixelRatio( window.devicePixelRatio );
    renderer.setSize( window.innerWidth, window.innerHeight );
    renderer.shadowMap.enabled = true;
    container.appendChild( renderer.domElement );

    // LabelRenderer
    labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize( window.innerWidth, window.innerHeight );
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0px';
    labelRenderer.domElement.style.pointerEvents = 'none';
    document.body.appendChild( labelRenderer.domElement );
    
    //CubeLabel
    cubeP = document.createElement( 'p' );
    const cubeLabel = new CSS2DObject(cubeP );
    cubeLabel.position.set( 0, 3, 0);


    //GUI
    const gui = new GUI();

    gui.add( params, 'uniform' ).onChange( render );
    gui.add( params, 'tension', 0, 1 ).step( 0.01 ).onChange( function ( value ) {

        splines.uniform.tension = value;
        updateSplineOutline();
        render();

    } );

    gui.add( params, 'addPoint' );
    gui.add( params, 'removePoint' );
    gui.add( params, 'exportSpline' );

    //speed control
    gui.add({ speed: speed }, 'speed', 1, 10).step(0.2).onChange(function(value) {
        speed = value;
        render();
      });
    //closed spline option
    gui.add({ closed: closed }, 'closed').onChange(function(value) {
        if (value === true) {
            splines.uniform.closed = true;
        }
        else {
            splines.uniform.closed = false;
        }
        
        render();
      });
    //loop vs alternate option
    gui.add({ loop: loop }, 'loop').onChange(function(value) {
        if (value === true) {
            loop = true;
        } else {
            loop = false;
        }
    });

    console.log('loop:', loop);

    gui.open();

    // Controls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.damping = 0.2;
    controls.addEventListener( 'change', render );

    transformControl = new TransformControls( camera, renderer.domElement );
    //transformControl.addEventListener( 'change', render );
    transformControl.addEventListener( 'change', function (event){
        if ( ! event.value ) {

            //flow.updateCurve( 0, curve );
            render();
        }
    } );
    transformControl.addEventListener( 'dragging-changed', function ( event ) {

        controls.enabled = ! event.value;

    } );
    scene.add( transformControl );
    

    transformControl.addEventListener( 'objectChange', function () {

        updateSplineOutline();

    } );

    // Event-Handler für Tastatureingabe registrieren
    document.addEventListener('keydown', onKeyDownP);
    document.addEventListener('keydown', onKeyDownR);

    // Event-Handler für Doppelklick registrieren
    document.addEventListener('dblclick', onDoubleClick);

    document.addEventListener( 'pointerdown', onPointerDown );
    document.addEventListener( 'pointerup', onPointerUp );
    document.addEventListener( 'pointermove', onPointerMove );
    window.addEventListener( 'resize', onWindowResize );

    //Global AXES-HELPER: 

    const GlobAxesHelper = new THREE.AxesHelper( 1500 );
    scene.add( GlobAxesHelper );
    GlobAxesHelper.position.set(0, 0, 0);
    GlobAxesHelper.lineWidth = 10;


    /*******
     * Curves
     *********/

    for ( let i = 0; i < splinePointsLength; i ++ ) {

        addSplineObject(positions[ i ] );

    }

    positions.length = 0;

    for ( let i = 0; i < splinePointsLength; i ++ ) {

        positions.push( splineHelperObjects[ i ].position );

    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute( 'position', new THREE.BufferAttribute( new Float32Array( ARC_SEGMENTS * 3 ), 3 ) );

    //curve uniform
    let curve = new THREE.CatmullRomCurve3( positions, closed);
    curve.curveType = 'catmullrom';
    curve.mesh = new THREE.Line( geometry.clone(), new THREE.LineBasicMaterial( {
        color: 0xff0000,
        opacity: 0.35
    } ) );
    curve.mesh.castShadow = true;
    splines.uniform = curve;

    for ( const k in splines ) {

        const spline = splines[ k ];
        scene.add( spline.mesh );

    }
    
    // Preset the Splines Default-Position
    load([
        new THREE.Vector3(-500, 50, -500), // Bottom left corner
        new THREE.Vector3(500, 50, -500), // Bottom right corner
        new THREE.Vector3(500, 50, 500), // Top right corner
        new THREE.Vector3(-500, 50, 500) // Top left corner
        ]);
        // Erstelle einen Cube
	const cubeGeometry = new THREE.BoxGeometry( 50, 50, 50 );
	const cubeMaterial = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
	cube = new THREE.Mesh( cubeGeometry, cubeMaterial );
    cube.geometry.rotateX(Math.PI);
    //new approach
    scene.add(cube);
    cube.add(cubeLabel);


    stats = new Stats();
    container.appendChild( stats.dom );

    render();


}

function addSplineObject( position ) {

    const material = new THREE.MeshLambertMaterial( { color: Math.random() * 0xffffff } );
    const object = new THREE.Mesh( geometry, material );

    if ( position ) {

        object.position.copy( position );

    } else {
        
        object.position.x = Math.random() * 1000 - 500;
        object.position.y = Math.random() * 600;
        object.position.z = Math.random() * 800 - 400;
        
       
    }

    object.castShadow = true;
    object.receiveShadow = true;
    scene.add( object );
    splineHelperObjects.push( object );
    return object;

}



function addPoint(position) {

    splinePointsLength ++;

    positions.push( addSplineObject(position).position );

    updateSplineOutline();

    action = ACTION_SELECT;

    render();

}

function onDoubleClick(event) {
    if (event.button === 0) { // Überprüfe, ob die linke Maustaste (button 0) gedrückt wurde
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = - (event.clientY / window.innerHeight) * 2 + 1;

        // Logge die berechneten Werte


        //console.log('mouseX:', mouseX);
        //console.log('mouseY:', mouseY);

        // Erstelle einen Raycaster, um die Mausposition in der Szene zu verfolgen
        const raycaster = new THREE.Raycaster();
        raycaster.setFromCamera(new THREE.Vector2(mouseX, mouseY), camera);

        // Finde den Schnittpunkt des Raycasters mit der Szene
        const intersects = raycaster.intersectObjects(scene.children, true);

        if (intersects.length > 0) {
            // Der Schnittpunkt mit der Szene wurde gefunden
            const pointPosition = intersects[0].point; // Position des Schnittpunkts
            
            // Logge die Position des Schnittpunkts
            console.log('pointPosition:', pointPosition);

            // Füge das Spline-Objekt an der gefundenen Position hinzu
            addPoint(pointPosition);
        }
    }
}


function removePoint() {

    if ( splinePointsLength <= 4 ) {

        return;

    }

    const point = splineHelperObjects.pop();
    splinePointsLength --;
    positions.pop();

    if ( transformControl.object === point ) transformControl.detach();
    scene.remove( point );

    updateSplineOutline();

    render();

}

function updateSplineOutline() {

    for ( const k in splines ) {

        const spline = splines[ k ];

        const splineMesh = spline.mesh;
        const position = splineMesh.geometry.attributes.position;

        for ( let i = 0; i < ARC_SEGMENTS; i ++ ) {

            const t = i / ( ARC_SEGMENTS - 1 );
            spline.getPoint( t, point );
            position.setXYZ( i, point.x, point.y, point.z );

        }

        position.needsUpdate = true;
    

    }


}

function exportSpline() {

    const strplace = [];

    for ( let i = 0; i < splinePointsLength; i ++ ) {

        const p = splineHelperObjects[ i ].position;
        strplace.push( `new THREE.Vector3(${p.x}, ${p.y}, ${p.z})` );

    }

    console.log( strplace.join( ',\n' ) );
    const code = '[' + ( strplace.join( ',\n\t' ) ) + ']';
    prompt( 'copy and paste code', code );

}



function load( new_positions ) {

    while ( new_positions.length > positions.length ) {

        addPoint();

    }

    while ( new_positions.length < positions.length ) {

        removePoint();

    }

    for ( let i = 0; i < positions.length; i ++ ) {

        positions[ i ].copy( new_positions[ i ] );

    }

    updateSplineOutline();

}

function render() {

    splines.uniform.mesh.visible = params.uniform;

    //deleted other curve functions
    renderer.render( scene, camera );
    
    

}

function onPointerDown( event ) {

    //action ACTION_SELECT;
    onDownPosition.x = event.clientX;
    onDownPosition.y = event.clientY;

}

function onPointerUp( event ) {

    onUpPosition.x = event.clientX;
    onUpPosition.y = event.clientY;

    if ( onDownPosition.distanceTo( onUpPosition ) === 0 ) {

        transformControl.detach();
        render();

    }

}

function onPointerMove( event ) {

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( pointer, camera );

    const intersects = raycaster.intersectObjects( splineHelperObjects, false );

    if ( intersects.length > 0 ) {

        const object = intersects[ 0 ].object;

        if ( object !== transformControl.object ) {

            transformControl.attach( object );

        }

    }

}

function animate() {
    requestAnimationFrame(animate);

    if ( action === ACTION_SELECT ) {

        raycaster.setFromCamera( pointer, camera );
        action = ACTION_NONE;
        const intersects = raycaster.intersectObjects( splineHelperObjects,false );
        if ( intersects.length > 0 ) {

            const object = intersects[ 0 ].object;
    
            if ( object !== transformControl.object ) {
    
                transformControl.attach( object );
                scene.add(transformControl);
            }
        }

    }

    if (cube) {
        // You can now use the cube variable here
        arcLenght = splines.uniform.getLength();
        delta = clock.getDelta();
        //speed is controlled by the GUI !! Actually the increment of the position
        currentPosition += speed / arcLenght;
        // loop alternate option
        if (loop === true) {
            //currentPosition += speed / arcLenght;
            currentPosition %= 1;
        } else  {
            //currentPosition += speed / arcLenght;
            if (currentPosition >= 0.99) {
                speed *= -1;
            } else if (currentPosition <= 0.01) {
                speed *= -1;
            }
        }    
        //currentPosition %= 1;
        //console.log('Current Position:', currentPosition);
    
        TrigPos = splines.uniform.getPointAt(currentPosition);
        cubeP.textContent = 'CP: ' + TrigPos.x.toFixed(2) + ', ' + TrigPos.y.toFixed(2) + ', ' + TrigPos.z.toFixed(2);
        //exportthecubesposition:
        //export {TrigPos};
        // Log the cube's position
        //console.log('Cube Position:', TrigPos);
        cube.position.copy(TrigPos);
    }

    /*
    if (flow) {
        //flow.updateCurve(0, curve);

        
        flow.moveAlongCurve(0.001);
        //console.log( flow.object3D.position );
        //cube.object3D.updateMatrixWorld();
        //trackTrigger(curve, 0.001)
      // + / - geben bewegungsrichtung an ! 
      // Du kannst die Geschwindigkeit oder andere Animationseigenschaften hier anpassen.
    }
    */

    
    updateSplineOutline();
    labelRenderer.render( scene, camera );
    render();
    stats.update();
    splines.uniform.updateArcLengths(); //this is nice!

  }
  

function onKeyDownP(event) {
    if (event.key === 'p') { // Prüfe, ob die Taste 'p' gedrückt wurde
        addPoint(); // Rufe die addPoint-Funktion auf, um ein neues Spline-Objekt hinzuzufügen
    }
}


function onKeyDownR(event) {
    if (event.key === 'r') { // Prüfe, ob die Taste 'r' gedrückt wurde
        removePoint(); // Rufe die addPoint-Funktion auf, um ein neues Spline-Objekt hinzuzufügen
    }
}

function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight);
    labelRenderer.setSize( window.innerWidth, window.innerHeight );

    render();

}

// export the trigPos_function to the html //
export {TrigPos};
