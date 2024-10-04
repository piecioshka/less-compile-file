'use strict';

let path = require('path');
let fs = require('fs-extra');
let less = require('less');
let debug = {
    log: require('debug')('less-compile-file')
};

function mergeObjects(src, dst) {
    let result = Object.create(src);
    Object.getOwnPropertyNames(dst).forEach((key) => {
        result[key] = dst[key];
    });
    return result;
}

function read(src) {
    debug.log('Read file content', src);
    return new Promise((resolve, reject) => {
        fs.readFile(src, 'utf8', (err, data) => {
            if (err) {
                return void reject(err);
            }
            resolve(data);
        });
    });
}

function render(data, settings) {
    debug.log('Compiling start');
    return new Promise((resolve, reject) => {
        less.render(data, settings, (err, data) => {
            if (err) {
                return void reject(err);
            }
            debug.log('Compiling finish');
            resolve(data.css);
        });
    })
}

function save(dst, data) {
    debug.log('Try to save file', dst);
    return new Promise((resolve, reject) => {
        fs.outputFile(dst, data, (err) => {
            if (err) {
                return void reject(err);
            }
            debug.log('Save file', dst);
            resolve(data);
        });
    });
}

/**
 * @param {string} src
 * @param {string} dst
 * @param {Object} [options]
 * @returns {Promise}
 */
function compileFile(src, dst, options = {}) {
    let settings = mergeObjects({
        filename: path.resolve(src)
    }, options);

    return Promise.resolve()
        .then(() => {
            return read(src);
        })
        .then((data) => {
            return render(data, settings);
        })
        .then((output) => {
            return save(dst, output);
        })
        .then((output) => {
            return {
                source: src,
                destination: dst,
                code: output
            };
        });
}

module.exports = compileFile;
