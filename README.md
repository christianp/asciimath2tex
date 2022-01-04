# asciimath2tex
JavaScript library to convert AsciiMath to TeX.

I wrote this so I could use KaTeX to render AsciiMath.

## Usage

The library is written as an ECMAScript module but is also distributed as CommonJS and UMD modules.

The file `asciimath2tex.js` is an ES6 module which can be used in browsers that support it.

### In a browser

If you can use ES6 modules, use `asciimath2tex.js` as-is:

```js
import AsciiMathParser from 'asciimath2tex';

const parser = new AsciiMathParser();
const tex = parser.parse("int_(i=1)^10 x^2/2 dx");
```

`parser.parse` returns a string of TeX.

If you can't use ES6 modules, there is a UMD version.
You can load it from unpkg.com, or create it yourself.

#### To load from unpkg

```html
<script src="https://unpkg.com/asciimath2tex@1.2.1/dist/asciimath2tex.umd.js"></script>
```

#### To create the file locally

Clone this repository, and run:

```
npm install
npm run-script build
```

Copy the file `dist/asciimath2tex.umd.js` into your project.

### Node.js / CommonJS

Install the package using npm:

```
npm install asciimath2tex
```

You can then load the package in your script:

```js
const AsciiMathParser = require('asciimath2tex');

const parser = new AsciiMathParser();
const tex = parser.parse("int_(i=1)^10 x^2/2 dx");
```

## Tests

There are some unit tests in `test.html`, copied from [the asciimath repository](https://github.com/asciimath/asciimathml/blob/master/test/unittests.js). 

All of the tests are rendered correctly by KaTeX, apart from `\twoheadrightarrowtail`, which it apparently doesn't support.
