# qrand-www

__qrand-www__ is a fun project to create a website that visualizes quantum random numbers generated at the [Australian National University's Department of Quantum Science](http://photonics.anu.edu.au/qoptics/Research/qrng.php). It builds on the node.js [qrand](https://github.com/cbumgard/node-qrand) module I developed for fun to retrieve the quantum random numbers as hex octets from the ANU lab. The web site is based on [node-boot](https://github.com/cbumgard/node-qrand), another node.js project I have built as a means to bootstrap a node.js website quickly.

## Live Demo

Please check out the live demo running here: [http://qrand-6081.onmodulus.net](http://qrand-6081.onmodulus.net)

## How To Start

Clone or fork __qrand-www__ at https://github.com/cbumgard/qrand-www

Make sure you have the latest stable version of node.js and npm installed. Here are full instructions if you want to clone it and run it locally:

    $ git clone https://github.com/cbumgard/qrand-www
    $ cd qrand-www/
    $ npm install
    $ node app.js

You should now be able to connect to http://localhost:8000/.

Please feel free to submit pull requests and contact me at [cbumgard@gmail.com](mailto:cbumgard@gmail.com)

## License

This software is licensed via the [MIT License](https://github.com/cbumgard/qrand-www/blob/master/LICENSE). It is for fun and educational :-)