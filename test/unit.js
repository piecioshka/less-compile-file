'use strict';

let compiler = require('../index');
let path = require('path');

const SOURCE = path.join(__dirname, '..', 'demo', 'src', 'main.less');
const DESTINATION = path.join(__dirname, '..', 'demo', 'dist', 'main.css');

compiler(SOURCE, DESTINATION)
    .then(({ source }) => {
        console.log('Compiling completed: ' + source);
    })
    .catch((err) => {
        console.error(err);
    });
