/** !
Based on ASCIIMathTeXImg.js but now part of https://github.com/obedm503/showdown-katex

Based on ASCIIMathML, Version 1.4.7 Aug 30, 2005, (c) Peter Jipsen http://www.chapman.edu/~jipsen
Modified with TeX conversion for IMG rendering Sept 6, 2006 (c) David Lippman http://www.pierce.ctc.edu/dlippman
  Updated to match ver 2.2 Mar 3, 2014
  Latest at https://github.com/mathjax/asciimathml

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the 'Software'), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

// token types
const tokens = {
  CONST: 0,
  UNARY: 1,
  BINARY: 2,
  INFIX: 3,
  LEFTBRACKET: 4,
  RIGHTBRACKET: 5,
  SPACE: 6,
  UNDEROVER: 7,
  DEFINITION: 8,
  LEFTRIGHT: 9,
  TEXT: 10,
};

const quoteSymbol = { input: '\'', tag: 'mtext', output: 'mbox', tex: null, ttype: tokens.TEXT };

const symbols = [
  // some greek symbols
  { input: 'alpha', tag: 'mi', output: '\u03B1', tex: null, ttype: tokens.CONST },
  { input: 'beta', tag: 'mi', output: '\u03B2', tex: null, ttype: tokens.CONST },
  { input: 'chi', tag: 'mi', output: '\u03C7', tex: null, ttype: tokens.CONST },
  { input: 'delta', tag: 'mi', output: '\u03B4', tex: null, ttype: tokens.CONST },
  { input: 'Delta', tag: 'mo', output: '\u0394', tex: null, ttype: tokens.CONST },
  { input: 'epsi', tag: 'mi', output: '\u03B5', tex: 'epsilon', ttype: tokens.CONST },
  { input: 'varepsilon', tag: 'mi', output: '\u025B', tex: null, ttype: tokens.CONST },
  { input: 'eta', tag: 'mi', output: '\u03B7', tex: null, ttype: tokens.CONST },
  { input: 'gamma', tag: 'mi', output: '\u03B3', tex: null, ttype: tokens.CONST },
  { input: 'Gamma', tag: 'mo', output: '\u0393', tex: null, ttype: tokens.CONST },
  { input: 'iota', tag: 'mi', output: '\u03B9', tex: null, ttype: tokens.CONST },
  { input: 'kappa', tag: 'mi', output: '\u03BA', tex: null, ttype: tokens.CONST },
  { input: 'lambda', tag: 'mi', output: '\u03BB', tex: null, ttype: tokens.CONST },
  { input: 'Lambda', tag: 'mo', output: '\u039B', tex: null, ttype: tokens.CONST },
  { input: 'lamda', tag: 'mi', output: 'lambda', tex: null, ttype: tokens.DEFINITION },
  { input: 'Lamda', tag: 'mi', output: 'Lambda', tex: null, ttype: tokens.DEFINITION },
  { input: 'mu', tag: 'mi', output: '\u03BC', tex: null, ttype: tokens.CONST },
  { input: 'nu', tag: 'mi', output: '\u03BD', tex: null, ttype: tokens.CONST },
  { input: 'omega', tag: 'mi', output: '\u03C9', tex: null, ttype: tokens.CONST },
  { input: 'Omega', tag: 'mo', output: '\u03A9', tex: null, ttype: tokens.CONST },
  { input: 'phi', tag: 'mi', output: '\u03C6', tex: null, ttype: tokens.CONST },
  { input: 'varphi', tag: 'mi', output: '\u03D5', tex: null, ttype: tokens.CONST },
  { input: 'Phi', tag: 'mo', output: '\u03A6', tex: null, ttype: tokens.CONST },
  { input: 'pi', tag: 'mi', output: '\u03C0', tex: null, ttype: tokens.CONST },
  { input: 'Pi', tag: 'mo', output: '\u03A0', tex: null, ttype: tokens.CONST },
  { input: 'psi', tag: 'mi', output: '\u03C8', tex: null, ttype: tokens.CONST },
  { input: 'Psi', tag: 'mi', output: '\u03A8', tex: null, ttype: tokens.CONST },
  { input: 'rho', tag: 'mi', output: '\u03C1', tex: null, ttype: tokens.CONST },
  { input: 'sigma', tag: 'mi', output: '\u03C3', tex: null, ttype: tokens.CONST },
  { input: 'Sigma', tag: 'mo', output: '\u03A3', tex: null, ttype: tokens.CONST },
  { input: 'tau', tag: 'mi', output: '\u03C4', tex: null, ttype: tokens.CONST },
  { input: 'theta', tag: 'mi', output: '\u03B8', tex: null, ttype: tokens.CONST },
  { input: 'vartheta', tag: 'mi', output: '\u03D1', tex: null, ttype: tokens.CONST },
  { input: 'Theta', tag: 'mo', output: '\u0398', tex: null, ttype: tokens.CONST },
  { input: 'upsilon', tag: 'mi', output: '\u03C5', tex: null, ttype: tokens.CONST },
  { input: 'xi', tag: 'mi', output: '\u03BE', tex: null, ttype: tokens.CONST },
  { input: 'Xi', tag: 'mo', output: '\u039E', tex: null, ttype: tokens.CONST },
  { input: 'zeta', tag: 'mi', output: '\u03B6', tex: null, ttype: tokens.CONST },

  // binary operation symbols
  { input: '*', tag: 'mo', output: '\u22C5', tex: 'cdot', ttype: tokens.CONST },
  { input: '**', tag: 'mo', output: '\u2217', tex: 'ast', ttype: tokens.CONST },
  { input: '***', tag: 'mo', output: '\u22C6', tex: 'star', ttype: tokens.CONST },
  { input: '// ', tag: 'mo', output: '/', tex: '/', ttype: tokens.CONST, val: true, notexcopy: true },
  { input: '\\\\', tag: 'mo', output: '\\', tex: 'backslash', ttype: tokens.CONST },
  { input: 'setminus', tag: 'mo', output: '\\', tex: null, ttype: tokens.CONST },
  { input: 'xx', tag: 'mo', output: '\u00D7', tex: 'times', ttype: tokens.CONST },
  { input: '|><', tag: 'mo', output: '\u22C9', tex: 'ltimes', ttype: tokens.CONST },
  { input: '><|', tag: 'mo', output: '\u22CA', tex: 'rtimes', ttype: tokens.CONST },
  { input: '|><|', tag: 'mo', output: '\u22C8', tex: 'bowtie', ttype: tokens.CONST },
  { input: '-:', tag: 'mo', output: '\u00F7', tex: 'div', ttype: tokens.CONST },
  { input: 'divide', tag: 'mo', output: '-:', tex: null, ttype: tokens.DEFINITION },
  { input: '@', tag: 'mo', output: '\u2218', tex: 'circ', ttype: tokens.CONST },
  { input: 'o+', tag: 'mo', output: '\u2295', tex: 'oplus', ttype: tokens.CONST },
  { input: 'ox', tag: 'mo', output: '\u2297', tex: 'otimes', ttype: tokens.CONST },
  { input: 'o.', tag: 'mo', output: '\u2299', tex: 'odot', ttype: tokens.CONST },
  { input: 'sum', tag: 'mo', output: '\u2211', tex: null, ttype: tokens.UNDEROVER },
  { input: 'prod', tag: 'mo', output: '\u220F', tex: null, ttype: tokens.UNDEROVER },
  { input: '^^', tag: 'mo', output: '\u2227', tex: 'wedge', ttype: tokens.CONST },
  { input: '^^^', tag: 'mo', output: '\u22C0', tex: 'bigwedge', ttype: tokens.UNDEROVER },
  { input: 'vv', tag: 'mo', output: '\u2228', tex: 'vee', ttype: tokens.CONST },
  { input: 'vvv', tag: 'mo', output: '\u22C1', tex: 'bigvee', ttype: tokens.UNDEROVER },
  { input: 'nn', tag: 'mo', output: '\u2229', tex: 'cap', ttype: tokens.CONST },
  { input: 'nnn', tag: 'mo', output: '\u22C2', tex: 'bigcap', ttype: tokens.UNDEROVER },
  { input: 'uu', tag: 'mo', output: '\u222A', tex: 'cup', ttype: tokens.CONST },
  { input: 'uuu', tag: 'mo', output: '\u22C3', tex: 'bigcup', ttype: tokens.UNDEROVER },
  { input: 'overset', tag: 'mover', output: 'stackrel', tex: null, ttype: tokens.BINARY },
  { input: 'underset', tag: 'munder', output: 'stackrel', tex: null, ttype: tokens.BINARY },

  // binary relation symbols
  { input: '!=', tag: 'mo', output: '\u2260', tex: 'ne', ttype: tokens.CONST },
  { input: ':=', tag: 'mo', output: ':=', tex: null, ttype: tokens.CONST },
  { input: 'lt', tag: 'mo', output: '<', tex: null, ttype: tokens.CONST },
  { input: 'gt', tag: 'mo', output: '>', tex: null, ttype: tokens.CONST },
  { input: '<=', tag: 'mo', output: '\u2264', tex: 'le', ttype: tokens.CONST },
  { input: 'lt=', tag: 'mo', output: '\u2264', tex: 'leq', ttype: tokens.CONST },
  { input: 'gt=', tag: 'mo', output: '\u2265', tex: 'geq', ttype: tokens.CONST },
  { input: '>=', tag: 'mo', output: '\u2265', tex: 'ge', ttype: tokens.CONST },
  { input: '-<', tag: 'mo', output: '\u227A', tex: 'prec', ttype: tokens.CONST },
  { input: '-lt', tag: 'mo', output: '\u227A', tex: null, ttype: tokens.CONST },
  { input: '>-', tag: 'mo', output: '\u227B', tex: 'succ', ttype: tokens.CONST },
  { input: '-<=', tag: 'mo', output: '\u2AAF', tex: 'preceq', ttype: tokens.CONST },
  { input: '>-=', tag: 'mo', output: '\u2AB0', tex: 'succeq', ttype: tokens.CONST },
  { input: 'in', tag: 'mo', output: '\u2208', tex: null, ttype: tokens.CONST },
  { input: '!in', tag: 'mo', output: '\u2209', tex: 'notin', ttype: tokens.CONST },
  { input: 'sub', tag: 'mo', output: '\u2282', tex: 'subset', ttype: tokens.CONST },
  { input: 'sup', tag: 'mo', output: '\u2283', tex: 'supset', ttype: tokens.CONST },
  { input: 'sube', tag: 'mo', output: '\u2286', tex: 'subseteq', ttype: tokens.CONST },
  { input: 'supe', tag: 'mo', output: '\u2287', tex: 'supseteq', ttype: tokens.CONST },
  { input: '-=', tag: 'mo', output: '\u2261', tex: 'equiv', ttype: tokens.CONST },
  { input: '~=', tag: 'mo', output: '\u2245', tex: 'stackrel{\\sim}{=}', ttype: tokens.CONST }, // back hack b/c mimetex doesn't support /cong
  { input: 'cong', tag: 'mo', output: '~=', tex: null, ttype: tokens.DEFINITION },
  { input: '~~', tag: 'mo', output: '\u2248', tex: 'approx', ttype: tokens.CONST },
  { input: 'prop', tag: 'mo', output: '\u221D', tex: 'propto', ttype: tokens.CONST },

  // logical symbols
  { input: 'and', tag: 'mtext', output: 'and', tex: null, ttype: tokens.SPACE },
  { input: 'or', tag: 'mtext', output: 'or', tex: null, ttype: tokens.SPACE },
  { input: 'not', tag: 'mo', output: '\u00AC', tex: 'neg', ttype: tokens.CONST },
  { input: '=>', tag: 'mo', output: '\u21D2', tex: 'Rightarrow', ttype: tokens.CONST },
  { input: 'implies', tag: 'mo', output: '=>', tex: null, ttype: tokens.DEFINITION },
  { input: 'if', tag: 'mo', output: 'if', tex: null, ttype: tokens.SPACE },
  { input: '<=>', tag: 'mo', output: '\u21D4', tex: 'Leftrightarrow', ttype: tokens.CONST },
  { input: 'iff', tag: 'mo', output: '<=>', tex: null, ttype: tokens.DEFINITION },
  { input: 'AA', tag: 'mo', output: '\u2200', tex: 'forall', ttype: tokens.CONST },
  { input: 'EE', tag: 'mo', output: '\u2203', tex: 'exists', ttype: tokens.CONST },
  { input: '_|_', tag: 'mo', output: '\u22A5', tex: 'bot', ttype: tokens.CONST },
  { input: 'TT', tag: 'mo', output: '\u22A4', tex: 'top', ttype: tokens.CONST },
  { input: '|--', tag: 'mo', output: '\u22A2', tex: 'vdash', ttype: tokens.CONST },
  { input: '|==', tag: 'mo', output: '\u22A8', tex: 'models', ttype: tokens.CONST }, // mimetex doesn't support

  // grouping brackets
  { input: '(', tag: 'mo', output: '(', tex: null, ttype: tokens.LEFTBRACKET, val: true },
  { input: ')', tag: 'mo', output: ')', tex: null, ttype: tokens.RIGHTBRACKET, val: true },
  { input: '[', tag: 'mo', output: '[', tex: null, ttype: tokens.LEFTBRACKET, val: true },
  { input: ']', tag: 'mo', output: ']', tex: null, ttype: tokens.RIGHTBRACKET, val: true },
  { input: '{', tag: 'mo', output: '{', tex: 'lbrace', ttype: tokens.LEFTBRACKET },
  { input: '}', tag: 'mo', output: '}', tex: 'rbrace', ttype: tokens.RIGHTBRACKET },
  { input: '|', tag: 'mo', output: '|', tex: null, ttype: tokens.LEFTRIGHT, val: true },
  // {input:'||', tag:'mo', output:'||', tex:null, ttype:LEFTRIGHT},
  { input: '(:', tag: 'mo', output: '\u2329', tex: 'langle', ttype: tokens.LEFTBRACKET },
  { input: ':)', tag: 'mo', output: '\u232A', tex: 'rangle', ttype: tokens.RIGHTBRACKET },
  { input: '<<', tag: 'mo', output: '\u2329', tex: 'langle', ttype: tokens.LEFTBRACKET },
  { input: '>>', tag: 'mo', output: '\u232A', tex: 'rangle', ttype: tokens.RIGHTBRACKET },
  { input: '{:', tag: 'mo', output: '{:', tex: null, ttype: tokens.LEFTBRACKET, invisible: true },
  { input: ':}', tag: 'mo', output: ':}', tex: null, ttype: tokens.RIGHTBRACKET, invisible: true },

  // miscellaneous symbols
  { input: 'int', tag: 'mo', output: '\u222B', tex: null, ttype: tokens.CONST },
  { input: 'dx', tag: 'mi', output: '{:d x:}', tex: null, ttype: tokens.DEFINITION },
  { input: 'dy', tag: 'mi', output: '{:d y:}', tex: null, ttype: tokens.DEFINITION },
  { input: 'dz', tag: 'mi', output: '{:d z:}', tex: null, ttype: tokens.DEFINITION },
  { input: 'dt', tag: 'mi', output: '{:d t:}', tex: null, ttype: tokens.DEFINITION },
  { input: 'oint', tag: 'mo', output: '\u222E', tex: null, ttype: tokens.CONST },
  { input: 'del', tag: 'mo', output: '\u2202', tex: 'partial', ttype: tokens.CONST },
  { input: 'grad', tag: 'mo', output: '\u2207', tex: 'nabla', ttype: tokens.CONST },
  { input: '+-', tag: 'mo', output: '\u00B1', tex: 'pm', ttype: tokens.CONST },
  { input: 'O/', tag: 'mo', output: '\u2205', tex: 'emptyset', ttype: tokens.CONST },
  { input: 'oo', tag: 'mo', output: '\u221E', tex: 'infty', ttype: tokens.CONST },
  { input: 'aleph', tag: 'mo', output: '\u2135', tex: null, ttype: tokens.CONST },
  { input: '...', tag: 'mo', output: '...', tex: 'ldots', ttype: tokens.CONST },
  { input: ':.', tag: 'mo', output: '\u2234', tex: 'therefore', ttype: tokens.CONST },
  { input: ':\'', tag: 'mo', output: '\u2235', tex: 'because', ttype: tokens.CONST },
  { input: '/_', tag: 'mo', output: '\u2220', tex: 'angle', ttype: tokens.CONST },
  { input: '/_\\', tag: 'mo', output: '\u25B3', tex: 'triangle', ttype: tokens.CONST },
  { input: '\\ ', tag: 'mo', output: '\u00A0', tex: null, ttype: tokens.CONST, val: true },
  { input: 'frown', tag: 'mo', output: '\u2322', tex: null, ttype: tokens.CONST },
  { input: '%', tag: 'mo', output: '%', tex: '%', ttype: tokens.CONST, notexcopy: true },
  { input: 'quad', tag: 'mo', output: '\u00A0\u00A0', tex: null, ttype: tokens.CONST },
  { input: 'qquad', tag: 'mo', output: '\u00A0\u00A0\u00A0\u00A0', tex: null, ttype: tokens.CONST },
  { input: 'cdots', tag: 'mo', output: '\u22EF', tex: null, ttype: tokens.CONST },
  { input: 'vdots', tag: 'mo', output: '\u22EE', tex: null, ttype: tokens.CONST },
  { input: 'ddots', tag: 'mo', output: '\u22F1', tex: null, ttype: tokens.CONST },
  { input: 'diamond', tag: 'mo', output: '\u22C4', tex: null, ttype: tokens.CONST },
  { input: 'square', tag: 'mo', output: '\u25A1', tex: 'boxempty', ttype: tokens.CONST },
  { input: '|__', tag: 'mo', output: '\u230A', tex: 'lfloor', ttype: tokens.CONST },
  { input: '__|', tag: 'mo', output: '\u230B', tex: 'rfloor', ttype: tokens.CONST },
  { input: '|~', tag: 'mo', output: '\u2308', tex: 'lceil', ttype: tokens.CONST },
  { input: 'lceiling', tag: 'mo', output: '|~', tex: null, ttype: tokens.DEFINITION },
  { input: '~|', tag: 'mo', output: '\u2309', tex: 'rceil', ttype: tokens.CONST },
  { input: 'rceiling', tag: 'mo', output: '~|', tex: null, ttype: tokens.DEFINITION },
  { input: 'CC', tag: 'mo', output: '\u2102', tex: 'mathbb{C}', ttype: tokens.CONST, notexcopy: true },
  { input: 'NN', tag: 'mo', output: '\u2115', tex: 'mathbb{N}', ttype: tokens.CONST, notexcopy: true },
  { input: 'QQ', tag: 'mo', output: '\u211A', tex: 'mathbb{Q}', ttype: tokens.CONST, notexcopy: true },
  { input: 'RR', tag: 'mo', output: '\u211D', tex: 'mathbb{R}', ttype: tokens.CONST, notexcopy: true },
  { input: 'ZZ', tag: 'mo', output: '\u2124', tex: 'mathbb{Z}', ttype: tokens.CONST, notexcopy: true },
  { input: 'f', tag: 'mi', output: 'f', tex: null, ttype: tokens.UNARY, func: true, val: true },
  { input: 'g', tag: 'mi', output: 'g', tex: null, ttype: tokens.UNARY, func: true, val: true },
  { input: '\'\'', tag: 'mo', output: '\'\'', tex: null, val: true },
  { input: '\'\'\'', tag: 'mo', output: '\'\'\'', tex: null, val: true },
  { input: '\'\'\'\'', tag: 'mo', output: '\'\'\'\'', tex: null, val: true },


  // standard functions
  { input: 'lim', tag: 'mo', output: 'lim', tex: null, ttype: tokens.UNDEROVER },
  { input: 'Lim', tag: 'mo', output: 'Lim', tex: null, ttype: tokens.UNDEROVER },
  { input: 'sin', tag: 'mo', output: 'sin', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'cos', tag: 'mo', output: 'cos', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'tan', tag: 'mo', output: 'tan', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'arcsin', tag: 'mo', output: 'arcsin', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'arccos', tag: 'mo', output: 'arccos', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'arctan', tag: 'mo', output: 'arctan', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'sinh', tag: 'mo', output: 'sinh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'cosh', tag: 'mo', output: 'cosh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'tanh', tag: 'mo', output: 'tanh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'cot', tag: 'mo', output: 'cot', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'coth', tag: 'mo', output: 'coth', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'sech', tag: 'mo', output: 'sech', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'csch', tag: 'mo', output: 'csch', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'sec', tag: 'mo', output: 'sec', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'csc', tag: 'mo', output: 'csc', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'log', tag: 'mo', output: 'log', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'ln', tag: 'mo', output: 'ln', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'abs', tag: 'mo', output: 'abs', tex: null, ttype: tokens.UNARY, notexcopy: true, rewriteleftright: ['|', '|'] },
  { input: 'norm', tag: 'mo', output: 'norm', tex: null, ttype: tokens.UNARY, notexcopy: true, rewriteleftright: ['\\|', '\\|'] },
  { input: 'floor', tag: 'mo', output: 'floor', tex: null, ttype: tokens.UNARY, notexcopy: true, rewriteleftright: ['\\lfloor', '\\rfloor'] },
  { input: 'ceil', tag: 'mo', output: 'ceil', tex: null, ttype: tokens.UNARY, notexcopy: true, rewriteleftright: ['\\lceil', '\\rceil'] },
  { input: 'Sin', tag: 'mo', output: 'sin', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Cos', tag: 'mo', output: 'cos', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Tan', tag: 'mo', output: 'tan', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Arcsin', tag: 'mo', output: 'arcsin', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Arccos', tag: 'mo', output: 'arccos', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Arctan', tag: 'mo', output: 'arctan', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Sinh', tag: 'mo', output: 'sinh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Sosh', tag: 'mo', output: 'cosh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Tanh', tag: 'mo', output: 'tanh', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Cot', tag: 'mo', output: 'cot', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Sec', tag: 'mo', output: 'sec', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Csc', tag: 'mo', output: 'csc', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Log', tag: 'mo', output: 'log', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Ln', tag: 'mo', output: 'ln', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'Abs', tag: 'mo', output: 'abs', tex: null, ttype: tokens.UNARY, notexcopy: true, rewriteleftright: ['|', '|'] },

  { input: 'det', tag: 'mo', output: 'det', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'exp', tag: 'mo', output: 'exp', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'dim', tag: 'mo', output: 'dim', tex: null, ttype: tokens.CONST },
  { input: 'mod', tag: 'mo', output: 'mod', tex: 'text{mod}', ttype: tokens.CONST, notexcopy: true },
  { input: 'gcd', tag: 'mo', output: 'gcd', tex: null, ttype: tokens.UNARY, func: true },
  { input: 'lcm', tag: 'mo', output: 'lcm', tex: 'text{lcm}', ttype: tokens.UNARY, func: true, notexcopy: true },
  { input: 'lub', tag: 'mo', output: 'lub', tex: null, ttype: tokens.CONST },
  { input: 'glb', tag: 'mo', output: 'glb', tex: null, ttype: tokens.CONST },
  { input: 'min', tag: 'mo', output: 'min', tex: null, ttype: tokens.UNDEROVER },
  { input: 'max', tag: 'mo', output: 'max', tex: null, ttype: tokens.UNDEROVER },

  // arrows
  { input: 'uarr', tag: 'mo', output: '\u2191', tex: 'uparrow', ttype: tokens.CONST },
  { input: 'darr', tag: 'mo', output: '\u2193', tex: 'downarrow', ttype: tokens.CONST },
  { input: 'rarr', tag: 'mo', output: '\u2192', tex: 'rightarrow', ttype: tokens.CONST },
  { input: '->', tag: 'mo', output: '\u2192', tex: 'to', ttype: tokens.CONST },
  { input: '>->', tag: 'mo', output: '\u21A3', tex: 'rightarrowtail', ttype: tokens.CONST },
  { input: '->>', tag: 'mo', output: '\u21A0', tex: 'twoheadrightarrow', ttype: tokens.CONST },
  { input: '>->>', tag: 'mo', output: '\u2916', tex: 'twoheadrightarrowtail', ttype: tokens.CONST },
  { input: '|->', tag: 'mo', output: '\u21A6', tex: 'mapsto', ttype: tokens.CONST },
  { input: 'larr', tag: 'mo', output: '\u2190', tex: 'leftarrow', ttype: tokens.CONST },
  { input: 'harr', tag: 'mo', output: '\u2194', tex: 'leftrightarrow', ttype: tokens.CONST },
  { input: 'rArr', tag: 'mo', output: '\u21D2', tex: 'Rightarrow', ttype: tokens.CONST },
  { input: 'lArr', tag: 'mo', output: '\u21D0', tex: 'Leftarrow', ttype: tokens.CONST },
  { input: 'hArr', tag: 'mo', output: '\u21D4', tex: 'Leftrightarrow', ttype: tokens.CONST },

  // commands with argument
  { input: 'sqrt', tag: 'msqrt', output: 'sqrt', tex: null, ttype: tokens.UNARY },
  { input: 'root', tag: 'mroot', output: 'root', tex: null, ttype: tokens.BINARY },
  { input: 'frac', tag: 'mfrac', output: '/', tex: null, ttype: tokens.BINARY },
  { input: '/', tag: 'mfrac', output: '/', tex: null, ttype: tokens.INFIX },
  { input: 'stackrel', tag: 'mover', output: 'stackrel', tex: null, ttype: tokens.BINARY },
  { input: '_', tag: 'msub', output: '_', tex: null, ttype: tokens.INFIX },
  { input: '^', tag: 'msup', output: '^', tex: null, ttype: tokens.INFIX },

  { input: 'cancel', tag: 'menclose', output: 'cancel', tex: null, ttype: tokens.UNARY },
  { input: 'Sqrt', tag: 'msqrt', output: 'sqrt', tex: null, ttype: tokens.UNARY },
  { input: 'hat', tag: 'mover', output: '\u005E', tex: null, ttype: tokens.UNARY, acc: true },
  { input: 'bar', tag: 'mover', output: '\u00AF', tex: 'overline', ttype: tokens.UNARY, acc: true },
  { input: 'vec', tag: 'mover', output: '\u2192', tex: null, ttype: tokens.UNARY, acc: true },
  { input: 'tilde', tag: 'mover', output: '~', tex: null, ttype: tokens.UNARY, acc: true },
  { input: 'dot', tag: 'mover', output: '.', tex: null, ttype: tokens.UNARY, acc: true },
  { input: 'ddot', tag: 'mover', output: '..', tex: null, ttype: tokens.UNARY, acc: true },
  { input: 'ul', tag: 'munder', output: '\u0332', tex: 'underline', ttype: tokens.UNARY, acc: true },
  { input: 'ubrace', tag: 'munder', output: '\u23DF', tex: 'underbrace', ttype: tokens.UNARY, acc: true },
  { input: 'obrace', tag: 'mover', output: '\u23DE', tex: 'overbrace', ttype: tokens.UNARY, acc: true },

  { input: 'text', tag: 'mtext', output: 'text', tex: null, ttype: tokens.TEXT },
  { input: 'mbox', tag: 'mtext', output: 'mbox', tex: null, ttype: tokens.TEXT },
  quoteSymbol,
  // { input: 'var', tag: 'mstyle', atname: 'fontstyle', atval: 'italic', output: 'var', tex: null, ttype: tokens.UNARY },
  { input: 'color', tag: 'mstyle', ttype: tokens.BINARY },
  { input: 'bb', tag: 'mstyle', atname: 'mathvariant', atval: 'bold', output: 'bb', tex: 'mathbf', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathbf', tag: 'mstyle', atname: 'mathvariant', atval: 'bold', output: 'mathbf', tex: null, ttype: tokens.UNARY },
  { input: 'sf', tag: 'mstyle', atname: 'mathvariant', atval: 'sans-serif', output: 'sf', tex: 'mathsf', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathsf', tag: 'mstyle', atname: 'mathvariant', atval: 'sans-serif', output: 'mathsf', tex: null, ttype: tokens.UNARY },
  { input: 'bbb', tag: 'mstyle', atname: 'mathvariant', atval: 'double-struck', output: 'bbb', tex: 'mathbb', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathbb', tag: 'mstyle', atname: 'mathvariant', atval: 'double-struck', output: 'mathbb', tex: null, ttype: tokens.UNARY },
  { input: 'cc', tag: 'mstyle', atname: 'mathvariant', atval: 'script', output: 'cc', tex: 'mathcal', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathcal', tag: 'mstyle', atname: 'mathvariant', atval: 'script', output: 'mathcal', tex: null, ttype: tokens.UNARY },
  { input: 'tt', tag: 'mstyle', atname: 'mathvariant', atval: 'monospace', output: 'tt', tex: 'mathtt', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathtt', tag: 'mstyle', atname: 'mathvariant', atval: 'monospace', output: 'mathtt', tex: null, ttype: tokens.UNARY },
  { input: 'fr', tag: 'mstyle', atname: 'mathvariant', atval: 'fraktur', output: 'fr', tex: 'mathfrak', ttype: tokens.UNARY, notexcopy: true },
  { input: 'mathfrak', tag: 'mstyle', atname: 'mathvariant', atval: 'fraktur', output: 'mathfrak', tex: null, ttype: tokens.UNARY },
];


let inputSymbols = [];

function refreshSymbols() {
  symbols.sort((s1, s2) => (s1.input > s2.input) ? 1 : -1);
  inputSymbols = symbols.map(item => item.input);
}

// function newcommand(oldstr, newstr) {
//   symbols.push({ input: oldstr, tag: 'mo', output: newstr, tex: null, ttype: tokens.DEFINITION });
//   refreshSymbols();
// }

// function newsymbol(symbolobj) {
//   symbols.push(symbolobj);
//   refreshSymbols();
// }

function removeCharsAndBlanks(str, n) {
  // remove n characters and any following blanks
  let st;
  if (str.charAt(n) === '\\' && str.charAt(n + 1) !== '\\' && str.charAt(n + 1) !== ' ') {
    st = str.slice(n + 1);
  } else {
    st = str.slice(n);
  }
  let i = 0;
  while (i < st.length && st.charCodeAt(i) <= 32) {
    i++;
  }
  return st.slice(i);
}

function position(arr, str, n) {
  // return position >=n where str appears or would be inserted
  // assumes arr is sorted
  if (n === 0) {
    let len = arr.length;
    let m;
    n = -1;
    while (n + 1 < len) {
      m = (n + len) >> 1;
      if (arr[m] < str) {
        n = m;
      } else {
        len = m;
      }
    }
    return len;
  }
  let i = n;
  while (i < arr.length && arr[i] < str) {
    i++;
  }
  return i; // i=arr.length || arr[i]>=str
}

function getSymbol(str) {
  // return maximal initial substring of str that appears in names
  // return null if there is none
  let newPos = 0; // new pos
  let oldPos = 0; // old pos
  let matchPos; // match pos
  let st;
  let tagst;
  let match = '';
  let more = true;
  for (let i = 1; i <= str.length && more; i++) {
    st = str.slice(0, i); // initial substring of length i
    oldPos = newPos;
    newPos = position(inputSymbols, st, oldPos);
    if (newPos < inputSymbols.length && str.slice(0, inputSymbols[newPos].length) === inputSymbols[newPos]) {
      match = inputSymbols[newPos];
      matchPos = newPos;
      i = match.length;
    }
    more = newPos < inputSymbols.length && str.slice(0, inputSymbols[newPos].length) >= inputSymbols[newPos];
  }
  previousSymbol = currentSymbol;
  if (match !== '') {
    currentSymbol = symbols[matchPos].ttype;
    return symbols[matchPos];
  }
  // if str[0] is a digit or - return maxsubstring of digits.digits
  currentSymbol = tokens.CONST;
  newPos = 1;
  st = str.slice(0, 1);
  let integ = true;

  while ('0' <= st && st <= '9' && newPos <= str.length) {
    st = str.slice(newPos, newPos + 1);
    newPos++;
  }
  if (st === '.') {
    st = str.slice(newPos, newPos + 1);
    if ('0' <= st && st <= '9') {
      integ = false;
      newPos++;
      while ('0' <= st && st <= '9' && newPos <= str.length) {
        st = str.slice(newPos, newPos + 1);
        newPos++;
      }
    }
  }
  if ((integ && newPos > 1) || newPos > 2) {
    st = str.slice(0, newPos - 1);
    tagst = 'mn';
  } else {
    newPos = 2;
    st = str.slice(0, 1); // take 1 character
    tagst = (('A' > st || st > 'Z') && ('a' > st || st > 'z') ? 'mo' : 'mi');
  }
  if (st === '-' && previousSymbol === tokens.INFIX) {
    currentSymbol = tokens.INFIX;
    return { input: st, tag: tagst, output: st, ttype: tokens.UNARY, func: true, val: true };
  }
  return { input: st, tag: tagst, output: st, ttype: tokens.CONST, val: true }; // added val bit
}

function removeBrackets(node) {

  let st;
  if (node.charAt(0) === '{' && node.charAt(node.length - 1) === '}') {
    let leftchop = 0;

    st = node.substr(1, 5);
    if (st === '\\left') {
      st = node.charAt(6);
      if (st === '(' || st === '[' || st === '{') {
        leftchop = 7;
      } else {
        st = node.substr(6, 7);
        if (st === '\\lbrace') {
          leftchop = 13;
        }
      }
    } else {
      st = node.charAt(1);
      if (st === '(' || st === '[') {
        leftchop = 2;
      }
    }
    if (leftchop > 0) {
      // st = node.charAt(node.length-7);
      st = node.substr(node.length - 8);
      if (st === '\\right)}' || st === '\\right]}' || st === '\\right.}') {
        node = `{${ node.substr(leftchop) }`;
        node = `${ node.substr(0, node.length - 8) }}`;
      } else if (st === '\\rbrace}') {
        node = `{${ node.substr(leftchop) }`;
        node = `${ node.substr(0, node.length - 14) }}`;
      }
    }
  }
  return node;
}

/*
  Parsing ASCII math expressions with the following grammar
  v ::= [A-Za-z] | greek letters | numbers | other constant symbols
  u ::= sqrt | text | bb | other unary symbols for font commands
  b ::= frac | root | stackrel         binary symbols
  l ::= ( | [ | { | (: | {:            left brackets
  r ::= ) | ] | } | :) | :}            right brackets
  S ::= v | lEr | uS | bSS             Simple expression
  I ::= S_S | S^S | S_S^S | S          Intermediate expression
  E ::= IE | I/I                       Expression
  Each terminal symbol is translated into a corresponding mathml node.
*/

let nestingDepth;
let previousSymbol;
let currentSymbol;

function getTeXsymbol(symb) {
  let pre;
  if (typeof symb.val === 'boolean' && symb.val) {
    pre = '';
  } else {
    pre = '\\';
  }
  if (!symb.tex) {
    // can't remember why this was here.  Breaks /delta /Delta to removed
    // return (pre + (pre == '' ? symb.input : symb.input.toLowerCase()));
    return (pre + symb.input);
  } else {
    return (pre + symb.tex);
  }
}

function parseSexpr(str) { // parses str and returns [node,tailstr]
  let symbol;
  let node;
  let result;
  let i;
  // const rightvert = false,
  let newFrag = '';
  str = removeCharsAndBlanks(str, 0);
  symbol = getSymbol(str);             // either a token or a bracket or empty
  if (!symbol || symbol.ttype === tokens.RIGHTBRACKET && nestingDepth > 0) {
    return [null, str];
  }
  if (symbol.ttype === tokens.DEFINITION) {
    str = symbol.output + removeCharsAndBlanks(str, symbol.input.length);
    symbol = getSymbol(str);
  }
  switch (symbol.ttype) {
    case tokens.UNDEROVER:
    case tokens.CONST:
      str = removeCharsAndBlanks(str, symbol.input.length);
      var texsymbol = getTeXsymbol(symbol);
      if (texsymbol.charAt(0) === '\\' || symbol.tag === 'mo') {
        return [texsymbol, str];
      } else {
        return [`{${ texsymbol }}`, str];
      }

    case tokens.LEFTBRACKET:   // read (expr+)
      nestingDepth++;
      str = removeCharsAndBlanks(str, symbol.input.length);

      result = parseExpr(str, true);
      nestingDepth--;
      var leftchop = 0;
      if (result[0].substr(0, 6) === '\\right') {
        st = result[0].charAt(6);
        if (st === ')' || st === ']' || st === '}') {
          leftchop = 6;
        } else if (st === '.') {
          leftchop = 7;
        } else {
          st = result[0].substr(6, 7);
          if (st === '\\rbrace') {
            leftchop = 13;
          }
        }
      }
      if (leftchop > 0) {
        result[0] = result[0].substr(leftchop);
        if (symbol.invisible) {
          node = `{${ result[0] }}`;
        } else {
          node = `{${ getTeXsymbol(symbol) }${ result[0] }}`;
        }
      } else {
        if (symbol.invisible) {
          node = `{\\left.${ result[0] }}`;
        } else {
          node = `{\\left${ getTeXsymbol(symbol) }${ result[0] }}`;
        }
      }
      return [node, result[1]];
    case tokens.TEXT:
      if (symbol !== quoteSymbol) {
        str = removeCharsAndBlanks(str, symbol.input.length);
      }
      if (str.charAt(0) === '{') {
        i = str.indexOf('}');
      } else if (str.charAt(0) === '(') {
        i = str.indexOf(')');
      } else if (str.charAt(0) === '[') {
        i = str.indexOf(']');
      } else if (symbol === quoteSymbol) {
        i = str.slice(1).indexOf('\'') + 1;
      } else {
        i = 0;
      }
      if (i === -1) {
        i = str.length;
      }
      st = str.slice(1, i);
      if (st.charAt(0) === ' ') {
        newFrag = '\\ ';
      }
      newFrag += `\\text{${ st }}`;
      if (st.charAt(st.length - 1) === ' ') {
        newFrag += '\\ ';
      }
      str = removeCharsAndBlanks(str, i + 1);
      return [newFrag, str];
    case tokens.UNARY:
      str = removeCharsAndBlanks(str, symbol.input.length);
      result = parseSexpr(str);
      if (result[0] === null) {
        return [`{${ getTeXsymbol(symbol) }}`, str];
      }
      if (symbol.func === true) { // functions hack
        st = str.charAt(0);
        if (st === '^' || st === '_' || st === '/' || st === '|' || st === ',' || (symbol.input.length === 1 && symbol.input.match(/\w/) && st !== '(')) {
          return [`{${ getTeXsymbol(symbol) }}`, str];
        } else {
          node = `{${ getTeXsymbol(symbol) }{${ result[0] }}}`;
          return [node, result[1]];
        }
      }
      result[0] = removeBrackets(result[0]);
      if (symbol.input === 'sqrt') {           // sqrt
        return [`\\sqrt{${ result[0] }}`, result[1]];
      } else if (symbol.input === 'cancel') {           // cancel
        return [`\\cancel{${ result[0] }}`, result[1]];
      } else if (typeof symbol.rewriteleftright !== 'undefined') {  // abs, floor, ceil
        return [`{\\left${ symbol.rewriteleftright[0] }${ result[0] }\\right${ symbol.rewriteleftright[1] }}`, result[1]];
      } else if (symbol.acc === true) {   // accent
        // return ['{'+getTeXsymbol(symbol)+'{'+result[0]+'}}',result[1]];
        return [`${ getTeXsymbol(symbol) }{${ result[0] }}`, result[1]];
      } else {                        // font change command
        return [`{${ getTeXsymbol(symbol) }{${ result[0] }}}`, result[1]];
      }
    case tokens.BINARY:
      str = removeCharsAndBlanks(str, symbol.input.length);
      result = parseSexpr(str);
      if (result[0] === null) {
        return [`{${ getTeXsymbol(symbol) }}`, str];
      }
      result[0] = removeBrackets(result[0]);
      var result2 = parseSexpr(result[1]);
      if (result2[0] === null) {
        return [`{${ getTeXsymbol(symbol) }}`, str];
      }
      result2[0] = removeBrackets(result2[0]);
      if (symbol.input === 'color') {
        newFrag = `{\\color{${ result[0].replace(/[{}]/g, '') }}${ result2[0] }}`;
      } else if (symbol.input === 'root') {
        newFrag = `{\\sqrt[${ result[0] }]{${ result2[0] }}}`;
      } else {
        newFrag = `{${ getTeXsymbol(symbol) }{${ result[0] }}{${ result2[0] }}}`;
      }
      return [newFrag, result2[1]];
    case tokens.INFIX:
      str = removeCharsAndBlanks(str, symbol.input.length);
      return [symbol.output, str];
    case tokens.SPACE:
      str = removeCharsAndBlanks(str, symbol.input.length);
      return [`{\\quad\\text{${ symbol.input }}\\quad}`, str];
    case tokens.LEFTRIGHT:
      //    if (rightvert) return [null,str]; else rightvert = true;
      nestingDepth++;
      str = removeCharsAndBlanks(str, symbol.input.length);
      result = parseExpr(str, false);
      nestingDepth--;
      var st = '';
      st = result[0].charAt(result[0].length - 1);
      // alert(result[0].lastChild+'***'+st);
      if (st === '|') { // its an absolute value subterm
        node = `{\\left|${ result[0] }}`;
        return [node, result[1]];
      } else { // the '|' is a \mid
        node = '{\\mid}';
        return [node, str];
      }

    default:
      // alert('default');
      str = removeCharsAndBlanks(str, symbol.input.length);
      return [`{${ getTeXsymbol(symbol) }}`, str];
  }
}

function parseIexpr(str) {
  let sym2
  let node
  let result;
  str = removeCharsAndBlanks(str, 0);
  const sym1 = getSymbol(str);
  result = parseSexpr(str);
  node = result[0];
  str = result[1];
  const symbol = getSymbol(str);
  if (symbol.ttype === tokens.INFIX && symbol.input !== '/') {
    str = removeCharsAndBlanks(str, symbol.input.length);
    // if (symbol.input === '/') result = parseIexpr(str); else
    result = parseSexpr(str);
    // show box in place of missing argument
    if (result[0] === null) {
      result[0] = '{}';
    } else {
      result[0] = removeBrackets(result[0]);
    }
    str = result[1];
    //    if (symbol.input === '/') removeBrackets(node);
    if (symbol.input === '_') {
      sym2 = getSymbol(str);
      if (sym2.input === '^') {
        str = removeCharsAndBlanks(str, sym2.input.length);
        const res2 = parseSexpr(str);
        res2[0] = removeBrackets(res2[0]);
        str = res2[1];
        node = `{${ node }`;
        node += `_{${ result[0] }}`;
        node += `^{${ res2[0] }}`;
        node += '}';
      } else {
        node += `_{${ result[0] }}`;
      }
    } else { // must be ^
      // node = '{'+node+'}^{'+result[0]+'}';
      node = `${ node }^{${ result[0] }}`;
    }
    if (typeof sym1.func !== 'undefined' && sym1.func) {
      sym2 = getSymbol(str);
      if (sym2.ttype !== tokens.INFIX && sym2.ttype !== tokens.RIGHTBRACKET) {
        result = parseIexpr(str);
        node = `{${ node }${ result[0] }}`;
        str = result[1];
      }
    }
  }

  return [node, str];
}

function parseExpr(str, rightbracket) {
  let symbol;
  let node;
  let result;
  let i;
  // const nodeList = [];
  let newFrag = '';
  let addedright = false;
  do {
    str = removeCharsAndBlanks(str, 0);
    result = parseIexpr(str);
    node = result[0];
    str = result[1];
    symbol = getSymbol(str);
    if (symbol.ttype === tokens.INFIX && symbol.input === '/') {
      str = removeCharsAndBlanks(str, symbol.input.length);
      result = parseIexpr(str);

      // show box in place of missing argument
      if (result[0] === null) {
        result[0] = '{}';
      } else {
        result[0] = removeBrackets(result[0]);
      }
      str = result[1];
      node = removeBrackets(node);
      node = `${ '\\frac' + '{' }${ node }}`;
      node += `{${ result[0] }}`;
      newFrag += node;
      symbol = getSymbol(str);
    } else if (node) {
      newFrag += node;
    }
  } while (
    (
      symbol.ttype !== tokens.RIGHTBRACKET &&
      (
        symbol.ttype !== tokens.LEFTRIGHT ||
        rightbracket
      ) ||
      nestingDepth === 0
    ) &&
    symbol &&
    symbol.output
  );
  if (symbol.ttype === tokens.RIGHTBRACKET || symbol.ttype === tokens.LEFTRIGHT) {
    //    if (nestingDepth > 0) nestingDepth--;
    const len = newFrag.length;
    if (len > 2 && newFrag.charAt(0) === '{' && newFrag.indexOf(',') > 0) { // could be matrix (total rewrite from .js)
      const right = newFrag.charAt(len - 2);
      if (right === ')' || right === ']') {
        const left = newFrag.charAt(6);
        if ((left === '(' && right === ')' && symbol.output !== '}') || (left === '[' && right === ']')) {
          let mxout = '\\matrix{';
          const pos = new Array(); // position of commas
          pos.push(0);
          let matrix = true;
          let mxnestingd = 0;
          const subpos = [];
          subpos[0] = [0];
          let lastsubposstart = 0;
          let mxanynestingd = 0;
          for (i = 1; i < len - 1; i++) {
            if (newFrag.charAt(i) === left) {
              mxnestingd++;
            }
            if (newFrag.charAt(i) === right) {
              mxnestingd--;
              if (mxnestingd === 0 && newFrag.charAt(i + 2) === ',' && newFrag.charAt(i + 3) === '{') {
                pos.push(i + 2);
                lastsubposstart = i + 2;
                subpos[lastsubposstart] = [i + 2];
              }
            }
            if (newFrag.charAt(i) === '[' || newFrag.charAt(i) === '(' || newFrag.charAt(i) === '{') {
              mxanynestingd++;
            }
            if (newFrag.charAt(i) === ']' || newFrag.charAt(i) === ')' || newFrag.charAt(i) === '}') {
              mxanynestingd--;
            }
            if (newFrag.charAt(i) === ',' && mxanynestingd === 1) {
              subpos[lastsubposstart].push(i);
            }
            if (mxanynestingd < 0) {  // happens at the end of the row
              if (lastsubposstart === i + 1) { // if at end of row, skip to next row
                i++;
              } else { // misformed something - abandon treating as a matrix
                matrix = false;
              }
            }
          }

          pos.push(len);
          let lastmxsubcnt = -1;
          if (mxnestingd === 0 && pos.length > 0 && matrix) {
            for (i = 0; i < pos.length - 1; i++) {
              if (i > 0) {
                mxout += '\\\\';
              }
              let subarr;
              if (i === 0) {
                // subarr = newFrag.substr(pos[i]+7,pos[i+1]-pos[i]-15).split(',');
                if (subpos[pos[i]].length === 1) {
                  subarr = [newFrag.substr(pos[i] + 7, pos[i + 1] - pos[i] - 15)];
                } else {
                  const subarr = [newFrag.substring(pos[i] + 7, subpos[pos[i]][1])];
                  for (let j = 2; j < subpos[pos[i]].length; j++) {
                    subarr.push(newFrag.substring(subpos[pos[i]][j - 1] + 1, subpos[pos[i]][j]));
                  }
                  subarr.push(newFrag.substring(subpos[pos[i]][subpos[pos[i]].length - 1] + 1, pos[i + 1] - 8));
                }
              } else {
                // const subarr = newFrag.substr(pos[i]+8,pos[i+1]-pos[i]-16).split(',');
                if (subpos[pos[i]].length === 1) {
                  subarr = [newFrag.substr(pos[i] + 8, pos[i + 1] - pos[i] - 16)];
                } else {
                  subarr = [newFrag.substring(pos[i] + 8, subpos[pos[i]][1])];
                  for (let j = 2; j < subpos[pos[i]].length; j++) {
                    subarr.push(newFrag.substring(subpos[pos[i]][j - 1] + 1, subpos[pos[i]][j]));
                  }
                  subarr.push(newFrag.substring(subpos[pos[i]][subpos[pos[i]].length - 1] + 1, pos[i + 1] - 8));
                }
              }
              if (lastmxsubcnt > 0 && subarr.length !== lastmxsubcnt) {
                matrix = false;
              } else if (lastmxsubcnt === -1) {
                lastmxsubcnt = subarr.length;
              }
              mxout += subarr.join('&');
            }
          }
          mxout += '}';

          if (matrix) {
            newFrag = mxout;
          }
        }
      }
    }

    str = removeCharsAndBlanks(str, symbol.input.length);
    if (typeof symbol.invisible !== 'boolean' || !symbol.invisible) {
      node = `\\right${ getTeXsymbol(symbol) }`; // AMcreateMmlNode('mo',document.createTextNode(symbol.output));
      newFrag += node;
      addedright = true;
    } else {
      newFrag += '\\right.';
      addedright = true;
    }

  }
  if (nestingDepth > 0 && !addedright) {
    newFrag += '\\right.'; // adjust for non-matching left brackets
    // todo: adjust for non-matching right brackets
  }

  return [newFrag, str];
}

/** @param {string} str */
export default function asciimathToTex(str) {
  nestingDepth = 0;
  str = str
    .replace(/(&nbsp;|\u00a0|&#160;)/g, '')
    .replace(/&gt;/g, '>')
    .replace(/&lt;/g, '<');
  if (!str.match(/\S/)) {
    return '';
  }
  return parseExpr(str.replace(/^\s+/g, ''), false)[0];
}

{
  const otherSymbols = symbols
    .filter(item => item.tex && item.notexcopy !== true)
    .map(item => ({
      input: item.tex,
      tag: item.tag,
      output: item.output,
      ttype: item.ttype,
      acc: item.acc || false,
    }));
  symbols.push(...otherSymbols);

  refreshSymbols();
}
