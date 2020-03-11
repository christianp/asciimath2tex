# asciimath2tex
JavaScript library to convert AsciiMath to TeX.

I wrote this so I could use KaTeX to render AsciiMath.

## Usage

The library is written as an ECMAScript module but is also distributed as CommonJS and UMD modules.

```js
import AsciiMathParser from 'asciimath2tex';

// Or, in older versions of Node.js, when not using a compiler 
// like Typescript or Babel.
const AsciiMathParser = require('asciimath2tex')

const parser = new AsciiMathParser();
const tex = parser.parse("int_(i=1)^10 x^2/2 dx");
```

`parser.parse` returns a string of TeX.

## Tests

There are some unit tests in `test.html`, copied from [the asciimath repository](https://github.com/asciimath/asciimathml/blob/master/test/unittests.js). 

All of the tests are rendered correctly by KaTeX, apart from `\twoheadrightarrowtail`, which it apparently doesn't support.
