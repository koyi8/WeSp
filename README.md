# How to run WeSp:

1. We need to install [Node.js](https://nodejs.org/de) on the local machine.

2. Clone the repository to the local machine via git.

3. Open a terminal (in VS-CODE) and move to the Repository.

4. With Node installed we can use <code>npm install</code> to install the required packages, which are saved in the package.json - File.

5. NOTE: We have to run <code>npm install</code> TWICE! Once inside the parent directory, where the package.json looks like this:

```javascript
{
  "dependencies": {
    "normalize.css": "^8.0.1",
    "osc": "2.4.4",
    "three": "^0.156.1"
  },
  "devDependencies": {
    "autoprefixer": "^10.4.17",
    "postcss": "^8.4.35",
    "sass": "^1.70.0",
    "vite": "^4.4.9"
  },
  "scripts": {
    "dev": "vite --host",
    "build": "vite build",
    "preview": "vite preview"
  }
}

```

6. Secondly inside the Server Subfolder (which will be used as a node based local server bridging the messages from the Web-App to the OSC-Receiver).
   So we direct to the server folder via <code>cd Server</code> and then run <code>npm install</code>. This should install all the dependencies for the server!

7. We then need to start the server in a terminal tab with the command <code>node .</code>
   If everything works correctly we should see the following message in the terminal window:

```
the server is listening on port: 8081
```

The Server is running now bridging between the Spat_App via websockets and send the OSC-Data via the Port 7500.

8. We then open a NEW terminal! Navigate back into the parent folder and run the command
   <code>npm run dev</code><br>
   This should give us the following in the terminal:

```
  VITE v4.4.9  ready in 181 ms

  ➜  Local:   http://localhost:5173/
  ➜  Network: http://192.168.0.140:5173/
  ➜  press h to show help
```

With ctrl+click we can run the Link. This should open a new tab in your preferenced Browser (I used Firefox thus far).

NOTE: If you want to connect to the App from another device in the same local network, you can do that by entering the adress shown in the network tab above. In this case for example:

```
 ➜  Network: http://192.168.0.140:5173/
```

If everything is running correctly you should see WeSp running. At this state on default two circular trajectories are visible.

9. Inside the Server-Terminal we should see the message like this:

```
a user connectedwBj4dhKxvNHdgriuAAAB
```

The Browser Web-App and the server are now connected!

10. NOTE: Using Vite is only for development.

In the finalversion starting the server will be sufficient to launch the app.
