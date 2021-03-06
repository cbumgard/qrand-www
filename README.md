# qrand-www


### Overview

__qrand-www__ is a fun project to create a website that visualizes quantum random numbers generated at the [Australian National University's Department of Quantum Science](http://photonics.anu.edu.au/qoptics/Research/qrng.php). It builds on the [qrand](https://github.com/cbumgard/node-qrand) module I developed for fun to retrieve the quantum random numbers as hex octets from the ANU lab. The web site is based on [node-boot](https://github.com/cbumgard/node-boot), another node.js project I have built as a means to kickstart a node.js website quickly. The core technologies used are [Node.js](http://nodejs.org/), [Socket.IO](http://socket.io/), [Express](http://expressjs.com/), and [Bootstrap](http://twitter.github.com/bootstrap/).

### Live Demo

Please check out the live demo running here: [http://quantumrandom.com/](http://quantumrandom.com/). Thanks to [modulus.io](https://modulus.io/) for the free hosting!

![Demo Screenshot](http://content.screencast.com/users/cbumgard/folders/Jing/media/f21564bc-5c90-4dc6-a40a-1ed30a57d8e5/00000089.png)

### How To Start

Clone or fork __qrand-www__ at https://github.com/cbumgard/qrand-www

Make sure you have the latest stable version of node.js and npm installed. Here are full instructions if you want to clone it and run it locally:

    $ git clone https://github.com/cbumgard/qrand-www
    $ cd qrand-www/
    $ npm install
    $ node app.js

You should now be able to connect to http://localhost:8000/.

Please feel free to submit pull requests and contact me at [cbumgard@gmail.com](mailto:cbumgard@gmail.com)

### License

This software is licensed via the [MIT License](https://github.com/cbumgard/qrand-www/blob/master/LICENSE). It is for fun and educational purposes :-)