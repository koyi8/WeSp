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
//GUI
const gui = new GUI();
// Keep a reference to the GUI controllers
let speedFolder;
let guiControllers = [];

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
    exportSpline: exportSpline,
    addTrigger: addTrigger,
    removeTrigger: removeTrigger
};


//speed control for GUI
let speed = 3;
// closed spline option or open // DEFAULT: true
let closed = true;
// loop vs alternate option // DEFAULT: true
let loop = true;
// global arclenth variable // DEFAULT:0
let arcLenght = 0;

// Define an object to hold the GUI parameters
let guiParams = {
    curve: 'curve1'
};


// Initialize animation parameters

var currentPosition = 0; // Initial position along the spline   
let TrigPos;
let cube;
const clock = new THREE.Clock();
let delta;
let cubeP;

// Triggers (multiple cubes) and indivudual trigger speeds
let triggers = [];
let triggerAmount = 1;
let triggerSpeeds = [];
let triggerPositions = [];
//randomize start values for triggerPositions
for (let i = 0; i < triggerAmount; i++) {
    triggerPositions.push(Math.random());
}

let exportPositionsArray = [];

// Curves (multiple curves)
let curves = [];
let curveAmount = 2;
let curvesPositions = [];
let curveIndex = 0;
let updatedPositions = [];




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
    
    //GUI
    gui.add( params, 'uniform' ).onChange( render );
    gui.add( params, 'tension', 0, 1 ).step( 0.01 ).onChange( function ( value ) {

        curves[curveIndex].tension = value;
        updateSplineOutline();
        render();

    } );

    // Switch between curves
    gui.add(guiParams, 'curve', ['curve1', 'curve2']).onChange(function(value) {
        // Update the curveIndex variable based on the selected curve
        curveIndex = value === 'curve1' ? 0 : 1;
    });

    // AddRandomPoint-GUI
    gui.add({ addPointRandom: function() {
        addPoint(undefined, curveIndex);
    }}, 'addPointRandom');

    // RemoveRandomPoint-GUI
    gui.add({ removePointRandom: function() {
        removePoint(curveIndex);
    }}, 'removePointRandom');
    
    //gui.add( params, 'exportSpline' );
    gui.add(params, 'addTrigger');
    gui.add(params, 'removeTrigger');

    //closed spline option
    gui.add({ closed: closed }, 'closed').onChange(function(value) {
        if (value === true) {
            curves[curveIndex].closed = true;
        }
        else {
            curves[curveIndex].closed = false;
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

    gui.open();

    // Controls
    const controls = new OrbitControls( camera, renderer.domElement );
    controls.damping = 0.2;
    //controls.addEventListener( 'change', render ); // cahnged because of poor mobile performance

    transformControl = new TransformControls( camera, renderer.domElement );
    transformControl.addEventListener( 'change', function (event){
        if ( ! event.value ) {
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

    // Event-Handler Keyboard buttons
    document.addEventListener('keydown', onKeyDownP);
    document.addEventListener('keydown', onKeyDownR);

    // Event-Handler for doubleclick (AddPoint)
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

    // Define the positions for each curve // Default: 2 curves
    curvesPositions = [
        [
            new THREE.Vector3(-500, 50, -500),
            new THREE.Vector3(500, 50, -500),
            new THREE.Vector3(500, 50, 500),
            new THREE.Vector3(-500, 50, 500)
        ],
        [
            new THREE.Vector3(-500, 200, -500),
            new THREE.Vector3(500, 200, -500),
            new THREE.Vector3(500, 200, 500),
            new THREE.Vector3(-500, 400, 500)
        ]
    ];

    // Create multiple curves
    for (let j = 0; j < curveAmount; j++) {
        let positions = curvesPositions[j];  
    
        for (let i = 0; i < splinePointsLength; i++) {
            addSplineObject(positions[i]);
        }

        positions.length  = 0
    
        for (let i = j * splinePointsLength; i < (j + 1) * splinePointsLength; i++) {
            positions.push(splineHelperObjects[i].position);
        }
    
        let curve = createCurve(positions); 
        curves.push(curve); // Store the curve in the array
        scene.add(curve.mesh);
    }

    /*******
     * Triggers
     *********/
    //Create Triggers (multiple cubes possible) DEFAULT 1 
    for (let i = 0; i < triggerAmount; i++) {
        // Create a cube
        const cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
        const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
        let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        cube.geometry.rotateX(Math.PI);
    
        // Add the cube to the scene
        scene.add(cube);
    
        // Create a label for this cube
        let cubeP = document.createElement('p');
        cubeP.style.fontSize = '10px'; // Set the font size to 20 pixels
        let cubeLabel = new CSS2DObject(cubeP);
        cubeLabel.position.set(0, 3, 0);

        cube.add(cubeLabel);

        // Store the cube in the array
        triggers.push(cube);
    
        // Store the cube's speed
        triggerSpeeds.push(Math.random() * 10);  // Random speed between 0 and 10
        speedFolder = gui.addFolder('Speed');

        // Keep a reference to the GUI controllers
        let guiControllers = [];
        // Add a GUI controller for the cube's speed
        let index = triggers.indexOf(cube);
        let controller = speedFolder.add({ ['Speed T' + (index +1)]: speed  }, ['Speed T' + (index +1)] , 1, 10).step(0.2).onChange(function(value) {
            // Update the cube's speed
            triggerSpeeds[index] = Math.abs(value);
        });
        // Store the controller
        guiControllers.push(controller);

    }

    // General 
    stats = new Stats();
    container.appendChild( stats.dom );

    render();
}

// ANIMATION - LOOP
function animate() {
    requestAnimationFrame(animate);

    
    if (triggers.length > 0) {
        for (let i = 0; i < triggers.length; i++) {
            let cube = triggers[i];

            // Initialize the sub-array for this trigger
            exportPositionsArray[i] = [];
            // You can now use the cube variable here
            arcLenght = curves[curveIndex].getLength();
            delta = clock.getDelta();
            
            //let speed = triggerSpeeds[i];
            
            //speed is controlled by the GUI !! Actually the increment of the position
            triggerPositions[i] += triggerSpeeds[i] / arcLenght;
            
            // loop alternate option
            if (loop === true) {
                triggerSpeeds[i] = Math.abs(triggerSpeeds[i]);
                triggerPositions[i] %= 1;
            } else  {
                //currentPosition += speed / arcLenght;
                if (triggerPositions[i] >= 0.99) {
                    triggerSpeeds[i] *= -1;
                } else if (triggerPositions[i] <= 0.01) {
                    triggerSpeeds[i] *= -1;
                }
            }    
    
            
            TrigPos = curves[curveIndex].getPointAt(triggerPositions[i]);

            //store the trigger positions in an array for export
            exportPositionsArray[i].push(TrigPos);
            
            // Update label position and text
            let cubeLabel = cube.children[0]; // Assuming the label is the first child of the cube
            let cubeP = cubeLabel.element; // Access the DOM element associated with the label
      
            //log the position of the triggers with SourceNumber
            cubeP.innerHTML = 
                  '<span style="font-size: 20px;">' + (i+1) + '</span> ' + 
                  '<span style="font-size: 10px;">' + TrigPos.x.toFixed(2) + ', ' + TrigPos.y.toFixed(2) + ', ' + TrigPos.z.toFixed(2) + '</span>';

            cube.position.copy(TrigPos);
            
        }
    
    }
    
    updateSplineOutline();
    labelRenderer.render( scene, camera );

    render();
    stats.update();
    curves[curveIndex].updateArcLengths(); //this is nice!
  }



/*******
 * Functions
 *********/



// Create a curve
function createCurve(positions) {
    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(ARC_SEGMENTS * 3), 3));

    let curve = new THREE.CatmullRomCurve3(positions, closed);
    curve.curveType = 'catmullrom';

    const colors = [0x000000, 0xff0000, 0x0000ff, 0x808080]; // black, red, blue, grey
    const randomColor = colors[Math.floor(Math.random() * colors.length)];


    curve.mesh = new THREE.Line(geometry.clone(), new THREE.LineBasicMaterial({
        color: randomColor,
        opacity: 0.35
    }));
    curve.mesh.castShadow = true;
    //splines.uniform = curve;

    return curve;
}

// Create a spline object
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
    console.log(splineHelperObjects);
    return object;

}

// Add a trigger
function addTrigger() {

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry(50, 50, 50);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    let cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
    cube.geometry.rotateX(Math.PI);

    // Add the cube to the scene
    scene.add(cube);

    // Add a label to the cube
    let cubeP = document.createElement('p');
    cubeP.style.fontSize = '10px';
    let cubeLabel = new CSS2DObject(cubeP);
    cubeLabel.position.set(0, 3, 0);

    cube.add(cubeLabel);

    // Store the cube in the array
    triggers.push(cube);

    // initial position
    triggerPositions.push(0);

    triggerSpeeds.push(Math.random() * 10);  // Random speed between 0 and 10
    
    // Add a GUI controller for the cube's speed
    let index = triggers.indexOf(cube);
    let controller = speedFolder.add({ ['Speed T' + (index +1)]: speed  }, ['Speed T' + (index +1)] , 1, 10).step(0.2).onChange(function(value) {
        // Update the cube's speed
        triggerSpeeds[index] = value;
    });

    // Store the controller
    guiControllers.push(controller);

    updateSplineOutline();

    // Update the scene
    render();
    
}

// Remove a trigger
function removeTrigger() {
    if (triggerAmount <= 0) {
        return;
    }
    // Hide the last cube's GUI controller // NOT THE PREFERED OPTION BUT REMOVE IS NOT WORKING 
    if (guiControllers.length > 0) {
        let controller = guiControllers.pop();
        controller.domElement.style.display = 'none';
    }

    // Remove the cube from the scene
    let cube = triggers.pop();

    // Remove the cube's label
    let cubeLabel = cube.children[0]; // Assuming the label is the first child of the cube
    cube.remove(cubeLabel);

    scene.remove(cube);

    // Remove the cube's speed
    triggerSpeeds.pop();

    // Remove the last element from the exportPositionsArray
    exportPositionsArray.pop();

    // Update Outline
    updateSplineOutline();

    // Update the scene
    render();
}


// multiple spline add and remove functions: 

function addPoint(position, curveIndex) {

    // Get the positions array for the specified curve
    let positions = curvesPositions[curveIndex];

    console.log(positions);

    positions.push( addSplineObject(position).position );

    // Update the spline outline
    updateSplineOutline();

    // Render the scene
    render();
}


function removePoint(curveIndex) {
    // Get the positions array for the specified curve
    let positions = curvesPositions[curveIndex];

    if (positions.length <= 4) {
        return;
    }

    const point = splineHelperObjects.pop();
    positions.pop();

    if (transformControl.object === point) transformControl.detach();
    scene.remove(point);

    updateSplineOutline();

    render();
}

// doubleclick function add point at clicked space
function onDoubleClick(event) {
    if (event.button === 0) { // Überprüfe, ob die linke Maustaste (button 0) gedrückt wurde
        const mouseX = (event.clientX / window.innerWidth) * 2 - 1;
        const mouseY = - (event.clientY / window.innerHeight) * 2 + 1;

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
            addPoint(pointPosition, curveIndex);
        }
    }
}

// Update the spline outline
function updateSplineOutline() {
    for (let k = 0; k < curves.length; k++) {
        const spline = curves[k];

        const splineMesh = spline.mesh;
        const position = splineMesh.geometry.attributes.position;

        for (let i = 0; i < ARC_SEGMENTS; i++) {
            const t = i / (ARC_SEGMENTS - 1);
            spline.getPoint(t, point);
            position.setXYZ(i, point.x, point.y, point.z);
        }

        position.needsUpdate = true;
    }
}

function render() {

    // Loop over the curves array and make each curve's mesh visible
    for (let i = 0; i < curves.length; i++) {
        curves[i].mesh.visible = true;
    }
    //deleted other curve functions
    renderer.render( scene, camera );

}

//Pointer functions
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
        // Call updateSplineOutline when a control point is moved
        updateSplineOutline();

}



function onPointerMove( event ) {

    pointer.x = ( event.clientX / window.innerWidth ) * 2 - 1;
    pointer.y = - ( event.clientY / window.innerHeight ) * 2 + 1;

    raycaster.setFromCamera( pointer, camera );

    const intersects = raycaster.intersectObjects( splineHelperObjects.flat(), false );

    if ( intersects.length > 0 ) {

        const object = intersects[ 0 ].object;

        if ( object !== transformControl.object ) {

            transformControl.attach( object );

        }

    }

}

// Keyboard functions
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

// Window Resize function
function onWindowResize() {

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight);
    labelRenderer.setSize( window.innerWidth, window.innerHeight );

    render();

}


// functions: UNUSED

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



function load(new_positions, curveIndex) {
    // Get the positions array for the specified curve
    let positions = curvesPositions[curveIndex];

    while (new_positions.length > positions.length) {
        addPoint(undefined, curveIndex);
    }

    while (new_positions.length < positions.length) {
        removePoint(curveIndex);
    }

    for (let i = 0; i < positions.length; i++) {
        positions[i].copy(new_positions[i]);
    }

    updateSplineOutline();
}


/*******
 * Export
 *********/
// export the trigPos_function to the html //
export {exportPositionsArray};
