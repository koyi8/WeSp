# How to run the WebSpatApp:

1. We need to install [Node.js](https://nodejs.org/de) on the local machine.

2. Clone the repository to the local machine via git. 

3. Open a terminal (in VS-CODE) and move to the Repository.

4. With Node installed we can use <code>npm install</code> to install the required packages, which are saved in the package.json - File. 

5. NOTE: We have to run <code>npm install</code> twice! Once inside the parent directory, where the package.json looks like this: 

```javascript{
  "dependencies": {
    "three": "^0.156.1",
    "osc": "2.4.4",
    "jquery": "3.6.4"
  },
  "devDependencies": {
    "vite": "^4.4.9"
  }
} 
```

6. Second inside the Node_Server Subfolder (which will be used as a node based local server bridging the messages from the Web-App to the OSC-Receiver). 
So we direct to the server folder via <code>cd Node_Server</code> and then run <code>npm install</code>. This should install all the dependencies for the server. 

7. We then need to start the server in a terminal tab with the command <code>node .</code>
If everything works correctly we should see the following message in the terminal window:
```
Listening for OSC over UDP.
 Host: 192.168.0.173, Port: 7400
Broadcasting OSC over UDP to 127.0.0.1, Port: 7500
```
The Server is running now bridging between the Spat_App via websockets and send the OSC-Data via the Port 7500. 

8. We then open a NEW terminal! Navigate back into the parent folder and run the command 
<code>npx vite</code><br>
This should give us the following in the terminal: 
```
  VITE v4.4.9  ready in 510 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: use --host to expose
  ➜  press h to show help
```

With ctrl+click we can run the Link. This should open a new tab in your preferenced Browser (I used Firefox thus far). 

If everything is running correctly you should see the THREE.js app running with a green cube marking the trigger. If something is not working you can check in the DevTools of the browser insider the console for errors. At this state it should print out the cube's position data via the console as well. 

9. Inside the Server-Terminal we should see the message: 
```
"A Web Socket connection has been established!"
``` 
The Browser Web-App and the server are now connected! 

10. As for the receiving OSC and rendering the sound source based on the position data of the cube, we use Reaper with the IEM-Plugins. Open the Reaper-Project located in the directory. 
Inside the project we have 3 Tracks: STEREOENCODER, ROOMENCODER, BINAURALDECODER. 
For positioning the sound sources we use the IEM-ROOMENCODER Plugin. 
Here we can check if the OSC is already connected and listening on Port 7500. <br>

The Web_Spat_App and the Roomencoder should now be connected and move in the same way. 


NOTE: It will only work if the browser tab of the Web_Spat_App is opened and visible on your screen. Otherwise the execution of the js will be blocked automatically to save resources. This is another bug to fix! 

Inside the Web_Spat_App you can move the control points freely or add a new node via doubleclicking on the screen. For navigation you can use mouse handlers like zoom,drag, etc. to change the view. 
There is a (not yet so much visible) coordinate axes helper indicating the directions inside the 3D-world. The color codes are: orange X, green Y and Z blue. 

As you can see to match the usual x,y,z coordinate system with z-Axes being pointed to the "sky", the y and z values have to be switched before sending to the Roomencoder. This is this far hardcoded. 

Please feel free to use your (maybe less anoying) own samples to test. 








