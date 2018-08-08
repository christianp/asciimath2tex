# asciimath2tex
JavaScript library to convert AsciiMath to TeX.

I wrote this so I could use KaTeX to render AsciiMath.

## Usage

The library is written as an ECMAScript module. As of the end of 2017, support for those in browsers is limited, so I plan to run it through [babel](https://babeljs.io/) to get a browser-usable version.

However, in environments where modules are supported, usage goes like this:

```
import AsciiMathParser from './asciimath2tex.js';

const parser = new AsciiMathParser();
const tex = parser.parse("int_(i=1)^10 x^2/2 dx");
```

`parser.parse` returns a string of TeX.

## Tests

There are some unit tests in `test.html`, copied from [the asciimath repository](https://github.com/asciimath/asciimathml/blob/master/test/unittests.js). 

All of the tests are rendered correctly by KaTeX, apart from `\twoheadrightarrowtail`, which it apparently doesn't support.
