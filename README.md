# WeSp - Real-time collaborative trajectory editing for spatialization

![Example Image](images/wesp_teaser.png 'Example Image Title')

WeSp is a web interface providing real-time collaborative control
of spatial audio scenes via object-spatialization. It allows the creation and editing of 3D-trajectories and objects moving along these
curves which can be manipulated in real-time with a control interface. Multiuser features allow editing and modification of shared
trajectories and visual feedback of all objects created by individual
users.

Via the OSC-module WeSp sends positional data via the webserver to the spatial rendering software (e.g. Ambisonics Plugins).

# How to run WeSp:

1. Clone/Copy the repository from Github.

2. Navigate to the Server-Folder. Here you find two executables for the server: **server-macos** for Mac and **server-win** for Windows. \
   You can run the server by doubleclicking the designated file for your system.

3. A terminal-window will start displaying the following messages:

```
Serving static files from C:\Users\Lennart\Documents\CODE\Javascript\WeSp\dist
Log into WeSp as client with IP address 192.168.0.173:8081
The server is listening on port: 8081

```

The first line shows the relative path from where the frontend is served. This is an individual path, depending where the WeSp-Repository is located after the clone/download.\
The second line displays the address where other clients in the same local network can connect to the webserver. It consists of the individual IP address of the device and the port where the server is listening.

Running the frontend on the same machine as the webserver, you can also simply use `localhost:8081` in your browser.

Other devices in the same local network can connect to the WeSp-scene via the address shown in the terminal window.

**FOR MAC USERS**: If you run the server on a mac and have problems with other devices trying to connect via the address: Disable the firewall while running the WeSp-webserver. Do not forget to enable again after usage!

4. If you successfully connected to the webserver via the address you should see the WeSp-scene running in your browser window.

The webserver terminal will show a message like:

```
a user connected uKcnI3Db-zIgXxvvAAAB

```

5. If more than one client is connected you can check in the Settings-module. Each client has a unique color, which will also be the color of the objects by that user.

6. Feel free to report any bugs or open issues.
   Happy you try it out!
