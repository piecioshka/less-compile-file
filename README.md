# less-compile-file

[![node version](https://img.shields.io/node/v/less-compile-file.svg)](https://www.npmjs.com/package/less-compile-file)
[![npm version](https://badge.fury.io/js/less-compile-file.svg)](https://badge.fury.io/js/less-compile-file)
[![downloads count](https://img.shields.io/npm/dt/less-compile-file.svg)](https://www.npmjs.com/package/less-compile-file)
[![license](https://img.shields.io/npm/l/less-compile-file.svg)](https://piecioshka.mit-license.org)
[![github-ci](https://github.com/piecioshka/less-compile-file/actions/workflows/testing.yml/badge.svg)](https://github.com/piecioshka/less-compile-file/actions/workflows/testing.yml)

🔨 Compiling LESS file to CSS

## Usage

```bash
npm install less-compile-file
```

```javascript
const compiler = require('less-compile-file');

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
for compiling LESS file, but I have an error:

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

```bash
npm install
npm test
```

Try run file (which compile CSS files) with [debug](https://www.npmjs.com/package/debug)
flag in example:

```bash
DEBUG=* node style-compiler.js
```

## License

[The MIT License](https://piecioshka.mit-license.org) @ 2017
