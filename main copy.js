import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { TransformControls } from 'three/addons/controls/TransformControls.js';
//import { Flow } from 'three/addons/modifiers/CurveModifier.js';
import Stats from "three/addons/libs/stats.module.js";
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { get } from 'jquery';




const ACTION_SELECT = 1, ACTION_NONE = 0;
let action = ACTION_NONE;


let stats;

let container;

//GUI
const gui = new GUI();
const trajectoryGUI = new GUI({container: document.getElementById('trajectoryGUI'), autoPlace: false});

let trajectoriesFolder = [];
let trajectoryFolder = [];

let triggersFolder = [];


// Keep a reference to the GUI controllers
let speedFolder;
let guiControllers = [];
// Store the GUI controller in a variable
let curveControllers = [];
let curveFolder;

// Array to store the curve index for each trigger
let triggerCurveIndices = [];

let camera, scene, renderer, labelRenderer;
const splineHelperObjects = [];
let splinePointsLength = 4;
const positions = [];
const point = new THREE.Vector3();

const raycaster = new THREE.Raycaster();
const pointer = new THREE.Vector2();
const onUpPosition = new THREE.Vector2();
const onDownPosition = new THREE.Vector2();

const geometry = new THREE.BoxGeometry( 0.4, 0.4, 0.4 );
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
let speed = 0.1;
// closed spline option or open // DEFAULT: true
let closed = true;
// loop vs alternate option // DEFAULT: true
let loop = true;
// global arclenth variable // DEFAULT:0
let arcLenght = 0;
//antialias option for mobile // DEFAULT: true
let antialias = true;

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
let triggerAnimate = [];
//randomize start values for triggerPositions
for (let i = 0; i < triggerAmount; i++) {
    triggerPositions.push(Math.random());
}
let triggerPosition =  [];
// Initialize the triggerCurves array
let triggerCurves = [];

let exportPositionsArray = [];

// Curves (multiple curves)
let curves = [];
let curveAmount = 2;
let curvesPositions = [];
let curveIndex = 0;
let updatedPositions = [];

var w,h;


init();
animate(); 

function init() {


    container = document.getElementById( 'container' );
    let containerDimensions = container.getBoundingClientRect();
    w = container.clientWidth;
    h = container.clientHeight;

    //Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color( 0xf0f0f0 );
    //Camera
    camera = new THREE.PerspectiveCamera( 70, window.innerWidth / window.innerHeight, 1, 10000 );
    camera.position.set( 30, 16, 0 );
    scene.add( camera );

    //Light
    scene.add( new THREE.AmbientLight( 0xf0f0f0, 3 ) );
    const light = new THREE.DirectionalLight( 0xffffff, 4.5 );
    light.position.set( 0, 30, 4 );
    light.angle = Math.PI * 0.2;
    light.decay = 0;
    light.castShadow = true;
    light.shadow.camera.near = 4;
    light.shadow.camera.far = 40;
    light.shadow.bias = - 0.000222;
    light.shadow.mapSize.width = 1024;
    light.shadow.mapSize.height = 1024;
    scene.add( light );

    //PlaneGeometry
    const planeGeometry = new THREE.PlaneGeometry( 20, 20 );
    planeGeometry.rotateX( - Math.PI / 2 );
    const planeMaterial = new THREE.ShadowMaterial( { color: 0x000000, opacity: 1.0 } );

    const plane = new THREE.Mesh( planeGeometry, planeMaterial );
    plane.position.y = 0;
    //plane.receiveShadow = true;
    scene.add( plane );

    //PlaneGridHelper
    const helper = new THREE.GridHelper( 20, 20 );
    helper.position.y = 0;
    helper.material.opacity = 1;
    helper.material.transparent = true;
    scene.add( helper );

    renderer = new THREE.WebGLRenderer( { antialias: antialias } );
    renderer.setPixelRatio( window.devicePixelRatio ); //changed because of poor mobile performance
    renderer.setSize( window.innerWidth, window.innerHeight );
    //renderer.shadowMap.enabled = true;
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
        //render();

    } );
    // Create a new folder for the curves
    curveFolder = gui.addFolder('Curves');
    //updateCurveController();

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
    // Add a button to add a random trajectory
    gui.add({ addTrajectory }, 'addTrajectory');

    // Add a button to delete the last trajectory
    gui.add({ deleteTrajectory }, 'deleteTrajectory');

    //closed spline option
    gui.add({ closed: closed }, 'closed').onChange(function(value) {
        if (value === true) {
            curves[curveIndex].closed = true;
        }
        else {
            curves[curveIndex].closed = false;
        }
        //render();
      });

    //loop vs alternate option
    gui.add({ loop: loop }, 'loop').onChange(function(value) {
        if (value === true) {
            loop = true;
        } else {
            loop = false;
        }
    });
    
    // Add the antialias option to the GUI
    gui.add({ Mobile: false }, 'Mobile').onChange(function(value) {
        // Remove the old renderer from the DOM
        renderer.domElement.parentNode.removeChild(renderer.domElement);

        // Create a new renderer with the new antialias value
        renderer = new THREE.WebGLRenderer({ antialias: !value });
        renderer.setPixelRatio( window.devicePixelRatio * 0.95 ); //changed because of poor mobile performance
        renderer.setSize( window.innerWidth, window.innerHeight );
        // Add the new renderer to the DOM
        document.body.appendChild(renderer.domElement);
        // Re-attach the controls to the new renderer's DOM element
        const controls = new OrbitControls( camera, renderer.domElement );
        controls.damping = 0.2;
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
    const GlobAxesHelper = new THREE.AxesHelper( 20 );
    scene.add( GlobAxesHelper );
    GlobAxesHelper.position.set(0, 0, 0);
    GlobAxesHelper.lineWidth = 10;


    /*******
     * Curves
     *********/

    // Define the positions for each curve // Default: 2 curves
    curvesPositions = [
        [
            new THREE.Vector3(-10, 1, -10),
            new THREE.Vector3(10, 1, -10),
            new THREE.Vector3(10, 1, 10),
            new THREE.Vector3(-10, 1, 10)
        ],
        [
            new THREE.Vector3(-10, 4, -10),
            new THREE.Vector3(10, 4, -10),
            new THREE.Vector3(10, 4, 10),
            new THREE.Vector3(-10, 4, 10)
        ]
    ];

    trajectoriesFolder = trajectoryGUI.addFolder('Trajectories' );

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

        //TrajectoryGUI

        trajectoryFolder = trajectoriesFolder.addFolder('Trajectory ' + (j + 1) ).close();
        for (let i = 0; i < positions.length; i++) {
            let controlpointFolder = trajectoryFolder.addFolder('Control Point ' + (i + 1)).close();
            controlpointFolder.add(positions[i], 'x').name('X').listen();
            controlpointFolder.add(positions[i], 'y').name('Y').listen();
            controlpointFolder.add(positions[i], 'z').name('Z').listen();
        }

        updateCurveController();
    }

    //TrajectoryGUI
    //trajectoryFolder = trajectoryGUI.addFolder('Trajectory');
    

    /*******
     * Triggers
     *********/
    //Create Triggers (multiple cubes possible) DEFAULT 1 
    // Cube geometry and material
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

    triggersFolder = gui.addFolder('Triggers');

    for (let i = 0; i < triggerAmount; i++) {
        // Create a Trigger-Cube
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
        triggerSpeeds.push(Math.random() * 0.2);  // Random speed between 0 and 10
    
        let triggerFolder = triggersFolder.addFolder('Trigger ' + (i + 1));
        // Keep a reference to the GUI controllers
        let guiControllers = [];
        // Add a GUI controller for the cube's speed
        let index = triggers.indexOf(cube);
        let controller = triggerFolder.add({ ['Speed T' + (index +1)]: speed  }, ['Speed T' + (index +1)] , 0.02, 0.2).step(0.004).onChange(function(value) {
            // Update the cube's speed
            triggerSpeeds[index] = Math.abs(value);
        });
        
        
        // Store the controller
        guiControllers.push(controller);

        //set triggerAnimate  DEFAULT:true
        triggerAnimate.push(true);
        
        // Add triggerAnimate option to the GUI
        triggerFolder.add({ ['Animate T' + (index + 1)]: triggerAnimate[index] }, ['Animate T' + (index + 1)]).onChange(function(value) {
            // Update the trigger's animate state
            triggerAnimate[index] = value;
        });

        // Initialize triggerCurveIndices[index] with a default value
        triggerCurveIndices[i] = 0; // default: curve 1

        // Add a dropdown to the GUI to select the curve for the trigger
        triggerCurves.push(triggerCurveIndices[i]);  // Assign the current curve to the trigger
        
        // Add a slider to the GUI folder
        triggerFolder.add({ ['Position T' + (i + 1)]: triggerPositions[i] }, ['Position T' + (i + 1)], 0, 1).onChange(function(value) {
            // When the slider value changes, update the trigger's position on the curve
            TrigPos = curves[triggerCurves[i]].getPointAt(value);

            // Push the value to the CurPosition array
            triggerPosition[i] = value;
        });

        // Initialize triggerPosition[i] with the initial slider value: ensures that triggerPosition[i] is always defined
        triggerPosition[i] = triggerPositions[i];


        
        // Add a dropdown to the GUI to select the curve for the trigger
        let curveOptions = curves.map((_, i) => 'Curve ' + (i + 1));
        triggerFolder.add({ ['Curve T' + (index + 1)]: curveOptions[curveIndex] }, ['Curve T' + (index + 1)], curveOptions).onChange(function(value) {
            // Get the index of the selected curve
            let selectedCurveIndex = curveOptions.indexOf(value);
        
            // Assign the selected curve index to triggerCurveIndices
            triggerCurveIndices[index] = selectedCurveIndex;
            console.log(triggerCurveIndices[0]);
        });

        triggerFolder.open();
        

    }

    // General stats HTML STYLING IN HERE. maybe later in a div?
    stats = new Stats();
    stats.dom.style.position = 'absolute';
    stats.dom.style.left = '50%';
    stats.dom.style.top = '0';
    stats.dom.style.transform = 'translateX(-50%)';
    document.body.appendChild(stats.dom);

    render();
}

// ANIMATION - LOOP
function animate() {
    //requestAnimationFrame(animate);

    
    if (triggers.length > 0) {
        for (let i = 0; i < triggers.length; i++) {
            let cube = triggers[i];

            // Initialize the sub-array for this trigger
            exportPositionsArray[i] = [];
            // You can now use the cube variable here
            arcLenght = curves[triggerCurveIndices[i]].getLength();
            delta = clock.getDelta();
            
            //let speed = triggerSpeeds[i];
            
            //speed is controlled by the GUI !! Actually the increment of the position
            triggerPositions[i] += triggerSpeeds[i] / arcLenght;

            // trigger Animation condition

            if (triggerAnimate[i]) {
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
                TrigPos = curves[triggerCurveIndices[i]].getPointAt(triggerPositions[i]); 
            }
            else {  
                TrigPos = curves[triggerCurveIndices[i]].getPointAt(triggerPosition[i]);
            }


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
            
            curves[triggerCurveIndices[i]].updateArcLengths(); //this is nice!
        }
    
    }
    
    updateSplineOutline();
    labelRenderer.render( scene, camera );

    render();
    stats.update();
    //curves[curveIndex].updateArcLengths(); //this is nice!
    requestAnimationFrame(animate);
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
    //curve.mesh.castShadow = true;
    //splines.uniform = curve;

    return curve;
}

//Add a random Trajectory

function addTrajectory() {
    let randomPositions = [];

    for (let i = 0; i < splinePointsLength; i++) {
        randomPositions.push(new THREE.Vector3(
            getRandomArbitrary(-10, 10),
            getRandomArbitrary(1, 1),
            getRandomArbitrary(-10, 10)
        ));
    }
    
    for (let i = 0; i < splinePointsLength; i++) {
        addSplineObject(randomPositions[i]);
    }

    randomPositions.length  = 0

    let start = splineHelperObjects.length - splinePointsLength;
    for (let i = start; i < splineHelperObjects.length; i++) {
        randomPositions.push(splineHelperObjects[i].position);
    }

    let curve = createCurve(randomPositions); 
    curves.push(curve); // Store the curve in the array
    // Push the new points to curvePositions
    curvesPositions.push(randomPositions);
    scene.add(curve.mesh);

    // Add the new trajectory to the GUI
    trajectoryFolder = trajectoriesFolder.addFolder('Trajectory ' + curves.length).close();
    for (let i = 0; i < randomPositions.length; i++) {
        let controlpointFolder = trajectoryFolder.addFolder('Control Point ' + (i + 1)).close();
        controlpointFolder.add(randomPositions[i], 'x').name('X').listen();
        controlpointFolder.add(randomPositions[i], 'y').name('Y').listen();
        controlpointFolder.add(randomPositions[i], 'z').name('Z').listen();
    }
    
    updateCurveController();

        // Get the names of the folders
    let folderNames = Object.keys(triggersFolder.folders);

    // Iterate over the folder names
    for (let i = 0; i < folderNames.length; i++) {
        // Get the current folder
        let currentFolder = triggersFolder.folders[folderNames[i]];

        // Get the curve controller
    let curveController = currentFolder.controllers[currentFolder.controllers.length - 1]; // Get the last controller

        // Call the updateCurveController function
        setTrajectoryForTrigger(currentFolder, [curveController], i);
    }


    //setTrajectoryForTrigger();
    updateSplineOutline();
    
}

// Delete the last trajectory
function deleteTrajectory() {
    if (curves.length <= 0) {  // Check if there are any curves to delete
        return;
    }

    // Get the last curve
    let lastCurve = curves[curves.length - 1];

    // Remove the last curve from the scene
    scene.remove(lastCurve.mesh);

    // Remove the last curve from the array
    curves.pop();

    // Remove the corresponding spline helper objects
    for (let i = 0; i < splinePointsLength; i++) {
        let lastSplineHelperObject = splineHelperObjects[splineHelperObjects.length - 1];
        scene.remove(lastSplineHelperObject);
        splineHelperObjects.pop();
    }
    

    // Get the names of the folders
    let folderNames = Object.keys(trajectoriesFolder.folders);
    // Check if there are any folders to delete
    if (folderNames.length <= 0) {
    return;
    }
    // Get the name of the last folder
    let lastFolderName = folderNames[folderNames.length - 1];
    // Get the last folder
    let lastFolder = trajectoriesFolder.folders[lastFolderName];
    // Destroy the last folder
    lastFolder.destroy();

    updateCurveController();
    
}


// Function to update the curve controller
function updateCurveController() {
    // Hide the last curve's GUI controller
    if (curveControllers.length > 0) {
        let controller = curveControllers.pop();
        controller.domElement.style.display = 'none';
    }

    // Generate curve names
    let curveNames = curves.map((_, index) => 'curve' + (index + 1));

    // Add a new controller with the updated options
    let newController = curveFolder.add(guiParams, 'curve', curveNames).onChange(function(value) {
        // Update the curveIndex variable based on the selected curve
        curveIndex = parseInt(value.replace('curve', '')) - 1;
    });

    // Push the new controller to the curveControllers array
    curveControllers.push(newController);
}


// Function to update the curve controller
function setTrajectoryForTrigger(folder, controller, triggerIndex) {
    // Hide the last curve's GUI controller
    if (controller.length > 0) {
        let lastController = controller.pop();
        lastController.domElement.style.display = 'none';
    }

    // Generate curve names
    let curveNames = curves.map((_, triggerIndex) => 'Curve ' + (triggerIndex + 1));

    // Add a new controller with the updated options
    let newController = folder.add(guiParams, 'Curve ', curveNames).onChange(function(value) {
        // Update the curveIndex variable for this trigger based on the selected curve
        triggerCurveIndices[triggerIndex] = parseInt(value.replace('Curve ', '')) - 1;
        console.log(triggerCurveIndices[triggerIndex]);
    });

    // Push the new controller to the controller array
    controller.push(newController);
}



// Create a spline object
function addSplineObject( position ) {

    const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0xffffff });
    const object = new THREE.Mesh( geometry, material );

    if ( position ) {

        object.position.copy( position );

    } else {
        
        object.position.x = Math.random() * 20 - 10;
        object.position.y = Math.random() * 12;
        object.position.z = Math.random() * 16 - 8;
        
       
    }

    //object.castShadow = true;
    //object.receiveShadow = true;
    scene.add( object );
    splineHelperObjects.push( object );
    console.log(splineHelperObjects);
    return object;

}

// Add a trigger
function addTrigger() {

    // Create a cube
    const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
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

    triggerSpeeds.push(Math.random() * 0.2);  // Random speed between 0 and 10

   
    
    // Add a GUI controller for the cube's speed
    let index = triggers.indexOf(cube);
    let triggerFolder = triggersFolder.addFolder('Trigger ' + (index + 1));

    let controller = triggerFolder.add({ ['Speed T' + (index +1)]: speed  }, ['Speed T' + (index +1)] , 0.02, 0.2).step(0.004).onChange(function(value) {
        // Update the cube's speed
        triggerSpeeds[index] = value;
    });

    // Store the controller
    guiControllers.push(controller);


    // Initialize triggerCurveIndices[index] with a default value
    triggerCurveIndices[index] = 0; // default: curve 1
    // Initialize the triggerCurves array with the default curve for the trigger
    triggerCurves.push(curveIndex);

    triggerAnimate.push(true);
    // Add triggerAnimate option to the GUI
    triggerFolder.add({ ['Animate T' + (index + 1)]: triggerAnimate[index] }, ['Animate T' + (index + 1)]).onChange(function(value) {
        // Update the trigger's animate state
        triggerAnimate[index] = value;
    });

    // Add a slider to the GUI folder
    triggerFolder.add({ ['Position T' + (index + 1)]: triggerPositions[index] }, ['Position T' + (index + 1)], 0, 1).onChange(function(value) {
        // When the slider value changes, update the trigger's position on the curve
        TrigPos = curves[triggerCurves[index]].getPointAt(value);

        // Push the value to the CurPosition array
        triggerPosition[index] = value;
    });

    
    // Add a dropdown to the GUI to select the curve for the trigger
    let curveOptions = curves.map((_, index) => 'Curve ' + (index + 1));
    triggerFolder.add({ ['Curve T' + (index + 1)]: curveOptions[curveIndex] }, ['Curve T' + (index + 1)], curveOptions).onChange(function(value) {
        // Get the index of the selected curve
        let selectedCurveIndex = curveOptions.indexOf(value);
    
        // Assign the selected curve index to triggerCurveIndices
        triggerCurveIndices[index] = selectedCurveIndex;
        console.log(triggerCurveIndices[0]);
    });

    // Initialize triggerPosition[i] with the initial slider value: ensures that triggerPosition[i] is always defined
    triggerPosition[index] = triggerPositions[index];





    updateSplineOutline();

    // Update the scene
    //render();
    
}

// Remove a trigger
function removeTrigger() {
    if (triggerAmount <= 0) {
        return;
    }
    /*
    // Hide the last cube's GUI controller // NOT THE PREFERED OPTION BUT REMOVE IS NOT WORKING 
    if (guiControllers.length > 0) {
        let controller = guiControllers.pop();
        controller.domElement.style.display = 'none';
    }
    */

    // Remove the Trigger from the TriggersFolder
    let folderNames = Object.keys(triggersFolder.folders);
    // Check if there are any folders to delete
    if (folderNames.length <= 0) {
        return;
    }
    // Get the name of the last folder
    let lastFolderName = folderNames[folderNames.length - 1];
    // Get the last folder  
    let lastFolder = triggersFolder.folders[lastFolderName];
    // Destroy the last folder
    lastFolder.destroy();


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
    //render();
}


// multiple spline add and remove functions: 

function addPoint(position, curveIndex) {


    // Get the positions array for the specified curve
    let positions = curvesPositions[curveIndex];

    // Add a new point to the positions array
    let newPoint = addSplineObject(position).position;
    positions.push( newPoint );

    // Add a new controller for the new point in the GUI
    // Get the names of the folders
    let folderNames = Object.keys(trajectoriesFolder.folders);
    // Get the name of the folder at curveIndex
    let indexFolderName = folderNames[curveIndex ];
    // Get the last folder
    let indexFolder = trajectoriesFolder.folders[indexFolderName];

    let controlpointFolder = indexFolder.addFolder('Control Point ' + positions.length).close();
    controlpointFolder.add(newPoint, 'x').name('X').listen();
    controlpointFolder.add(newPoint, 'y').name('Y').listen();
    controlpointFolder.add(newPoint, 'z').name('Z').listen();
    

    // Update the spline outline
    updateSplineOutline();

    

    // Render the scene
    //render();
}


function removePoint(curveIndex) {
    // Get the positions array for the specified curve
    let positions = curvesPositions[curveIndex];

    if (positions.length <= 2) {
        return;
    }

    const point = splineHelperObjects.pop();
    positions.pop();

    if (transformControl.object === point) transformControl.detach();
    scene.remove(point);


    // Remove the last controller from the GUI
    // Get the names of the folders
    let folderNames = Object.keys(trajectoriesFolder.folders);
    // Get the name of the folder at curveIndex
    let indexFolderName = folderNames[curveIndex];
    // Get the indexfolders
    let indexFolder = trajectoriesFolder.folders[indexFolderName];
    // Get the names of the controlpointFolders
    let controlPointfolderNames = Object.keys(indexFolder.folders);
    // Check if there are any subfolders
    if (controlPointfolderNames.length > 0) {
        // Get the name of the last subfolder
        let lastcontrolPointfolderName = controlPointfolderNames[controlPointfolderNames.length - 1];

        // Get the last subfolder
        let lastSubfolder = indexFolder.folders[lastcontrolPointfolderName];

        // Remove the last subfolder
        lastSubfolder.destroy();
    }


    updateSplineOutline();

    //render();
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
           // console.log('pointPosition:', pointPosition);

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
        //render();

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

// Randomizer function
function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
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
