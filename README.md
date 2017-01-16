# less-compile-file ([npm](https://www.npmjs.com/package/less-compile-file))

[![npm version](https://badge.fury.io/js/less-compile-file.svg)](https://badge.fury.io/js/less-compile-file)
![](https://img.shields.io/npm/dt/less-compile-file.svg)

> :hammer: Compiling CSS file to LESS.

## Usage

```
$ npm install less-compile-file
```

```javascript
let compiler = require('less-compile-file');

compiler('file.less', 'file.css')
    .catch((err) => {
        console.error(err);
    })
    .then((results) => {
        console.log('Compiling completed.');
        console.log(results.source);
        console.log(results.destination);
        console.log(results.code);
    });
```

## History

I use [`less-compiler`](https://www.npmjs.com/package/less-compiler) package 
for compiling CSS file, but I have an error: 

```
node_modules/less/lib/less/parser/parser.js:117
            imports.contents[fileInfo.filename] = str;
                   ^

TypeError: Cannot read property 'contents' of undefined
    at Object.parse (node_modules/less/lib/less/parser/parser.js:117:20)
    at Object.fromSource (node_modules/less-compiler/less-compiler.js:36:19)
    at node_modules/less-compiler/less-compiler.js:53:23
    at tryToString (fs.js:426:3)
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:413:12)
```

## Development

```
$ npm install
$ npm test
```

Try run file (which compile CSS files) with [debug](https://www.npmjs.com/package/debug)
flag in example:

```
$ DEBUG=* node style-compiler.js
```

## License

[The MIT License](http://piecioshka.mit-license.org) @ 2017
