import AsciiMathParser from './asciimath2tex.js';
window.AsciiMathParser = AsciiMathParser;

const p = new AsciiMathParser();

const inp = document.getElementById('asciimath');
const output = document.getElementById('tex');
const display = document.getElementById('display');
inp.value = "|x|";
function go() {
    const tex = p.parse(inp.value);
    output.textContent = tex;
    katex.render(tex, display, {displayMode:true});
}
inp.addEventListener('input',go);
go();


const unittests = [
    {
        "input": "!=",
        "tex": "\\ne",
        "mathml": "<mo>≠</mo>"
    },
    {
        "input": "!in",
        "tex": "\\notin",
        "mathml": "<mo>∉</mo>"
    },
    {
        "input": "'",
        "tex": "'",
        "mathml": "<mo>′</mo>"
    },
    {
        "input": "(",
        "tex": "(",
        "mathml": "<mrow><mo>(</mo><mo></mo></mrow>"
    },
    {
        "input": "(:",
        "tex": "\\langle",
        "mathml": "<mrow><mo>〈</mo><mo></mo></mrow>"
    },
    {
        "input": ")",
        "tex": ")",
        "mathml": "<mo>)</mo>"
    },
    {
        "input": "*",
        "tex": "\\cdot",
        "mathml": "<mo>⋅</mo>"
    },
    {
        "input": "**",
        "tex": "\\ast",
        "mathml": "<mo>∗</mo>"
    },
    {
        "input": "***",
        "tex": "\\star",
        "mathml": "<mo>⋆</mo>"
    },
    {
        "input": "+-",
        "tex": "\\pm",
        "mathml": "<mo>±</mo>"
    },
    {
        "input": "-",
        "tex": "-",
        "mathml": "<mo>-</mo>"
    },
    {
        "input": "-:",
        "tex": "\\div",
        "mathml": "<mo>÷</mo>"
    },
    {
        "input": "-<",
        "tex": "\\prec",
        "mathml": "<mo>≺</mo>"
    },
    {
        "input": "-<=",
        "tex": "\\preceq",
        "mathml": "<mo>⪯</mo>"
    },
    {
        "input": "-=",
        "tex": "\\equiv",
        "mathml": "<mo>≡</mo>"
    },
    {
        "input": "->",
        "tex": "\\to",
        "mathml": "<mo>→</mo>"
    },
    {
        "input": "->>",
        "tex": "\\twoheadrightarrow",
        "mathml": "<mo>↠</mo>"
    },
    {
        "input": "-lt",
        "tex": "\\prec",
        "mathml": "<mo>≺</mo>"
    },
    {
        "input": "...",
        "tex": "\\ldots",
        "mathml": "<mo>...</mo>"
    },
    {
        "input": "/",
        "tex": "/",
        "mathml": "<mo>/</mo>"
    },
    {
        "input": "//",
        "tex": "/",
        "mathml": "<mo>/</mo>"
    },
    {
        "input": "/_",
        "tex": "\\angle",
        "mathml": "<mo>∠</mo>"
    },
    {
        "input": "/_\\",
        "tex": "\\triangle",
        "mathml": "<mo>△</mo>"
    },
    {
        "input": ":)",
        "tex": "\\rangle",
        "mathml": "<mo>〉</mo>"
    },
    {
        "input": ":.",
        "tex": "\\therefore",
        "mathml": "<mo>∴</mo>"
    },
    {
        "input": ":=",
        "tex": ":=",
        "mathml": "<mo>:=</mo>"
    },
    {
        "input": ":}",
        "tex": ":\\}",
        "mathml": "<mo>:}</mo>"
    },
    {
        "input": "<<",
        "tex": "\\langle",
        "mathml": "<mrow><mo>〈</mo><mo></mo></mrow>"
    },
    {
        "input": "<=",
        "tex": "\\le",
        "mathml": "<mo>≤</mo>"
    },
    {
        "input": "<=>",
        "tex": "\\Leftrightarrow",
        "mathml": "<mo>⇔</mo>"
    },
    {
        "input": "=>",
        "tex": "\\Rightarrow",
        "mathml": "<mo>⇒</mo>"
    },
    {
        "input": ">-",
        "tex": "\\succ",
        "mathml": "<mo>≻</mo>"
    },
    {
        "input": ">-=",
        "tex": "\\succeq",
        "mathml": "<mo>⪰</mo>"
    },
    {
        "input": ">->",
        "tex": "\\rightarrowtail",
        "mathml": "<mo>↣</mo>"
    },
    {
        "input": ">->>",
        "tex": "\\twoheadrightarrowtail",
        "mathml": "<mo>⤖</mo>"
    },
    {
        "input": "><|",
        "tex": "\\rtimes",
        "mathml": "<mo>⋊</mo>"
    },
    {
        "input": ">=",
        "tex": "\\ge",
        "mathml": "<mo>≥</mo>"
    },
    {
        "input": ">>",
        "tex": "\\rangle",
        "mathml": "<mo>〉</mo>"
    },
    {
        "input": "@",
        "tex": "\\circ",
        "mathml": "<mo>∘</mo>"
    },
    {
        "input": "AA",
        "tex": "\\forall",
        "mathml": "<mo>∀</mo>"
    },
    {
        "input": "CC",
        "tex": "\\mathbb{C}",
        "mathml": "<mo>ℂ</mo>"
    },
    {
        "input": "Delta",
        "tex": "\\Delta",
        "mathml": "<mo>Δ</mo>"
    },
    {
        "input": "EE",
        "tex": "\\exists",
        "mathml": "<mo>∃</mo>"
    },
    {
        "input": "Gamma",
        "tex": "\\Gamma",
        "mathml": "<mo>Γ</mo>"
    },
    {
        "input": "Lambda",
        "tex": "\\Lambda",
        "mathml": "<mo>Λ</mo>"
    },
    {
        "input": "Lamda",
        "tex": "\\Lambda",
        "mathml": "<mo>Λ</mo>"
    },
    {
        "input": "Leftarrow",
        "tex": "\\Leftarrow",
        "mathml": "<mo>⇐</mo>"
    },
    {
        "input": "Leftrightarrow",
        "tex": "\\Leftrightarrow",
        "mathml": "<mo>⇔</mo>"
    },
    {
        "input": "Lim",
        "tex": "\\operatorname{Lim}",
        "mathml": "<mo>Lim</mo>"
    },
    {
        "input": "NN",
        "tex": "\\mathbb{N}",
        "mathml": "<mo>ℕ</mo>"
    },
    {
        "input": "O/",
        "tex": "\\emptyset",
        "mathml": "<mo>∅</mo>"
    },
    {
        "input": "Omega",
        "tex": "\\Omega",
        "mathml": "<mo>Ω</mo>"
    },
    {
        "input": "Phi",
        "tex": "\\Phi",
        "mathml": "<mo>Φ</mo>"
    },
    {
        "input": "Pi",
        "tex": "\\Pi",
        "mathml": "<mo>Π</mo>"
    },
    {
        "input": "Psi",
        "tex": "\\Psi",
        "mathml": "<mi>Ψ</mi>"
    },
    {
        "input": "QQ",
        "tex": "\\mathbb{Q}",
        "mathml": "<mo>ℚ</mo>"
    },
    {
        "input": "RR",
        "tex": "\\mathbb{R}",
        "mathml": "<mo>ℝ</mo>"
    },
    {
        "input": "Rightarrow",
        "tex": "\\Rightarrow",
        "mathml": "<mo>⇒</mo>"
    },
    {
        "input": "Sigma",
        "tex": "\\Sigma",
        "mathml": "<mo>Σ</mo>"
    },
    {
        "input": "TT",
        "tex": "\\top",
        "mathml": "<mo>⊤</mo>"
    },
    {
        "input": "Theta",
        "tex": "\\Theta",
        "mathml": "<mo>Θ</mo>"
    },
    {
        "input": "Xi",
        "tex": "\\Xi",
        "mathml": "<mo>Ξ</mo>"
    },
    {
        "input": "ZZ",
        "tex": "\\mathbb{Z}",
        "mathml": "<mo>ℤ</mo>"
    },
    {
        "input": "[",
        "tex": "[",
        "mathml": "<mrow><mo>[</mo><mo></mo></mrow>"
    },
    {
        "input": "\\ ",
        "tex": "",
        "mathml": "<mo>&nbsp;</mo>"
    },
    {
        "input": "\\ ",
        "tex": "",
        "mathml": "<mo>&nbsp;</mo>"
    },
    {
        "input": "\\\\",
        "tex": "\\backslash",
        "mathml": "<mo>\\</mo>"
    },
    {
        "input": "]",
        "tex": "]",
        "mathml": "<mo>]</mo>"
    },
    {
        "input": "^",
        "tex": "\\hat{}",
        "mathml": "<mo>^</mo>"
    },
    {
        "input": "^^",
        "tex": "\\wedge",
        "mathml": "<mo>∧</mo>"
    },
    {
        "input": "^^^",
        "tex": "\\bigwedge",
        "mathml": "<mo>⋀</mo>"
    },
    {
        "input": "_",
        "tex": "\\_",
        "mathml": "<mo>_</mo>"
    },
    {
        "input": "__|",
        "tex": "\\rfloor",
        "mathml": "<mo>⌋</mo>"
    },
    {
        "input": "_|_",
        "tex": "\\bot",
        "mathml": "<mo>⊥</mo>"
    },
    {
        "input": "abs",
        "tex": "\\left | \\right | ",
        "mathml": "<mrow><mo>|</mo><mo></mo><mo>|</mo></mrow>"
    },
    {
        "input": "aleph",
        "tex": "\\aleph",
        "mathml": "<mo>ℵ</mo>"
    },
    {
        "input": "alpha",
        "tex": "\\alpha",
        "mathml": "<mi>α</mi>"
    },
    {
        "input": "and",
        "tex": "\\quad\\text{and}\\quad",
        "mathml": "<mrow><mspace width=\"1ex\"></mspace><mtext>and</mtext><mspace width=\"1ex\"></mspace></mrow>"
    },
    {
        "input": "angle",
        "tex": "\\angle",
        "mathml": "<mo>∠</mo>"
    },
    {
        "input": "approx",
        "tex": "\\approx",
        "mathml": "<mo>≈</mo>"
    },
    {
        "input": "arccos",
        "tex": "\\arccos{}",
        "mathml": "<mrow><mo>arccos</mo><mo></mo></mrow>"
    },
    {
        "input": "arcsin",
        "tex": "\\arcsin{}",
        "mathml": "<mrow><mo>arcsin</mo><mo></mo></mrow>"
    },
    {
        "input": "arctan",
        "tex": "\\arctan{}",
        "mathml": "<mrow><mo>arctan</mo><mo></mo></mrow>"
    },
    {
        "input": "ast",
        "tex": "\\ast",
        "mathml": "<mo>∗</mo>"
    },
    {
        "input": "backslash",
        "tex": "\\backslash",
        "mathml": "<mo>\\</mo>"
    },
    {
        "input": "bar",
        "tex": "\\overline{}",
        "mathml": "<mover><mo></mo><mo>¯</mo></mover>"
    },
    {
        "input": "bb",
        "tex": "\\mathbf{}",
        "mathml": "<mstyle mathvariant=\"bold\"><mo></mo></mstyle>"
    },
    {
        "input": "bbb",
        "tex": "\\mathbb{}",
        "mathml": "<mstyle mathvariant=\"double-struck\"><mo></mo></mstyle>"
    },
    {
        "input": "beta",
        "tex": "\\beta",
        "mathml": "<mi>β</mi>"
    },
    {
        "input": "bigcap",
        "tex": "\\bigcap",
        "mathml": "<mo>⋂</mo>"
    },
    {
        "input": "bigcup",
        "tex": "\\bigcup",
        "mathml": "<mo>⋃</mo>"
    },
    {
        "input": "bigvee",
        "tex": "\\bigvee",
        "mathml": "<mo>⋁</mo>"
    },
    {
        "input": "bigwedge",
        "tex": "\\bigwedge",
        "mathml": "<mo>⋀</mo>"
    },
    {
        "input": "bot",
        "tex": "\\bot",
        "mathml": "<mo>⊥</mo>"
    },
    {
        "input": "bowtie",
        "tex": "\\bowtie",
        "mathml": "<mo>⋈</mo>"
    },
    {
        "input": "cap",
        "tex": "\\cap",
        "mathml": "<mo>∩</mo>"
    },
    {
        "input": "cdot",
        "tex": "\\cdot",
        "mathml": "<mo>⋅</mo>"
    },
    {
        "input": "cdots",
        "tex": "\\cdots",
        "mathml": "<mo>⋯</mo>"
    },
    {
        "input": "ceil",
        "tex": "\\left \\lceil \\right \\rceil ",
        "mathml": "<mrow><mo>⌈</mo><mo></mo><mo>⌉</mo></mrow>"
    },
    {
        "input": "chi",
        "tex": "\\chi",
        "mathml": "<mi>χ</mi>"
    },
    {
        "input": "circ",
        "tex": "\\circ",
        "mathml": "<mo>∘</mo>"
    },
    {
        "input": "cong",
        "tex": "\\cong",
        "mathml": "<mo>≅</mo>"
    },
    {
        "input": "cos",
        "tex": "\\cos{}",
        "mathml": "<mrow><mo>cos</mo><mo></mo></mrow>"
    },
    {
        "input": "cosh",
        "tex": "\\cosh{}",
        "mathml": "<mrow><mo>cosh</mo><mo></mo></mrow>"
    },
    {
        "input": "cot",
        "tex": "\\cot{}",
        "mathml": "<mrow><mo>cot</mo><mo></mo></mrow>"
    },
    {
        "input": "coth",
        "tex": "\\coth{}",
        "mathml": "<mrow><mo>coth</mo><mo></mo></mrow>"
    },
    {
        "input": "csc",
        "tex": "\\csc{}",
        "mathml": "<mrow><mo>csc</mo><mo></mo></mrow>"
    },
    {
        "input": "csch",
        "tex": "\\operatorname{csch}{}",
        "mathml": "<mrow><mo>csch</mo><mo></mo></mrow>"
    },
    {
        "input": "cup",
        "tex": "\\cup",
        "mathml": "<mo>∪</mo>"
    },
    {
        "input": "darr",
        "tex": "\\downarrow",
        "mathml": "<mo>↓</mo>"
    },
    {
        "input": "ddot",
        "tex": "\\ddot{}",
        "mathml": "<mover><mo></mo><mo>..</mo></mover>"
    },
    {
        "input": "ddots",
        "tex": "\\ddots",
        "mathml": "<mo>⋱</mo>"
    },
    {
        "input": "del",
        "tex": "\\partial",
        "mathml": "<mo>∂</mo>"
    },
    {
        "input": "delta",
        "tex": "\\delta",
        "mathml": "<mi>δ</mi>"
    },
    {
        "input": "det",
        "tex": "\\det{}",
        "mathml": "<mrow><mo>det</mo><mo></mo></mrow>"
    },
    {
        "input": "diamond",
        "tex": "\\diamond",
        "mathml": "<mo>⋄</mo>"
    },
    {
        "input": "dim",
        "tex": "\\dim",
        "mathml": "<mo>dim</mo>"
    },
    {
        "input": "div",
        "tex": "\\div",
        "mathml": "<mo>÷</mo>"
    },
    {
        "input": "divide",
        "tex": "\\div",
        "mathml": "<mo>÷</mo>"
    },
    {
        "input": "dot",
        "tex": "\\dot{}",
        "mathml": "<mover><mo></mo><mo>.</mo></mover>"
    },
    {
        "input": "downarrow",
        "tex": "\\downarrow",
        "mathml": "<mo>↓</mo>"
    },
    {
        "input": "dt",
        "tex": "dt",
        "mathml": "<mrow><mi>d</mi><mi>t</mi></mrow>"
    },
    {
        "input": "dx",
        "tex": "dx",
        "mathml": "<mrow><mi>d</mi><mi>x</mi></mrow>"
    },
    {
        "input": "dy",
        "tex": "dy",
        "mathml": "<mrow><mi>d</mi><mi>y</mi></mrow>"
    },
    {
        "input": "dz",
        "tex": "dz",
        "mathml": "<mrow><mi>d</mi><mi>z</mi></mrow>"
    },
    {
        "input": "emptyset",
        "tex": "\\emptyset",
        "mathml": "<mo>∅</mo>"
    },
    {
        "input": "epsi",
        "tex": "\\epsilon",
        "mathml": "<mi>ε</mi>"
    },
    {
        "input": "epsilon",
        "tex": "\\epsilon",
        "mathml": "<mi>ε</mi>"
    },
    {
        "input": "equiv",
        "tex": "\\equiv",
        "mathml": "<mo>≡</mo>"
    },
    {
        "input": "eta",
        "tex": "\\eta",
        "mathml": "<mi>η</mi>"
    },
    {
        "input": "exists",
        "tex": "\\exists",
        "mathml": "<mo>∃</mo>"
    },
    {
        "input": "exp",
        "tex": "\\exp{}",
        "mathml": "<mrow><mo>exp</mo><mo></mo></mrow>"
    },
    {
        "input": "f",
        "tex": "f",
        "mathml": "<mi>f</mi>"
    },
    {
        "input": "floor",
        "tex": "\\left \\lfloor \\right \\rfloor ",
        "mathml": "<mrow><mo>⌊</mo><mo></mo><mo>⌋</mo></mrow>"
    },
    {
        "input": "forall",
        "tex": "\\forall",
        "mathml": "<mo>∀</mo>"
    },
    {
        "input": "frown",
        "tex": "\\frown",
        "mathml": "<mo>⌢</mo>"
    },
    {
        "input": "g",
        "tex": "g",
        "mathml": "<mi>g</mi>"
    },
    {
        "input": "gamma",
        "tex": "\\gamma",
        "mathml": "<mi>γ</mi>"
    },
    {
        "input": "gcd",
        "tex": "\\gcd{}",
        "mathml": "<mrow><mo>gcd</mo><mo></mo></mrow>"
    },
    {
        "input": "ge",
        "tex": "\\ge",
        "mathml": "<mo>≥</mo>"
    },
    {
        "input": "geq",
        "tex": "\\geq",
        "mathml": "<mo>≥</mo>"
    },
    {
        "input": "glb",
        "tex": "\\operatorname{glb}",
        "mathml": "<mo>glb</mo>"
    },
    {
        "input": "grad",
        "tex": "\\nabla",
        "mathml": "<mo>∇</mo>"
    },
    {
        "input": "gt",
        "tex": "\\gt",
        "mathml": "<mo>&gt;</mo>"
    },
    {
        "input": "gt=",
        "tex": "\\geq",
        "mathml": "<mo>≥</mo>"
    },
    {
        "input": "hArr",
        "tex": "\\Leftrightarrow",
        "mathml": "<mo>⇔</mo>"
    },
    {
        "input": "harr",
        "tex": "\\leftrightarrow",
        "mathml": "<mo>↔</mo>"
    },
    {
        "input": "hat",
        "tex": "\\hat{}",
        "mathml": "<mover><mo></mo><mo>^</mo></mover>"
    },
    {
        "input": "if",
        "tex": "\\quad\\text{if}\\quad",
        "mathml": "<mrow><mspace width=\"1ex\"></mspace><mo>if</mo><mspace width=\"1ex\"></mspace></mrow>"
    },
    {
        "input": "iff",
        "tex": "\\iff",
        "mathml": "<mo>⇔</mo>"
    },
    {
        "input": "implies",
        "tex": "\\implies",
        "mathml": "<mo>⇒</mo>"
    },
    {
        "input": "in",
        "tex": "\\in",
        "mathml": "<mo>∈</mo>"
    },
    {
        "input": "infty",
        "tex": "\\infty",
        "mathml": "<mo>∞</mo>"
    },
    {
        "input": "int",
        "tex": "\\int",
        "mathml": "<mo>∫</mo>"
    },
    {
        "input": "iota",
        "tex": "\\iota",
        "mathml": "<mi>ι</mi>"
    },
    {
        "input": "kappa",
        "tex": "\\kappa",
        "mathml": "<mi>κ</mi>"
    },
    {
        "input": "lArr",
        "tex": "\\Leftarrow",
        "mathml": "<mo>⇐</mo>"
    },
    {
        "input": "lambda",
        "tex": "\\lambda",
        "mathml": "<mi>λ</mi>"
    },
    {
        "input": "lamda",
        "tex": "\\lambda",
        "mathml": "<mi>λ</mi>"
    },
    {
        "input": "langle",
        "tex": "\\langle",
        "mathml": "<mrow><mo>〈</mo><mo></mo></mrow>"
    },
    {
        "input": "larr",
        "tex": "\\leftarrow",
        "mathml": "<mo>←</mo>"
    },
    {
        "input": "lceiling",
        "tex": "\\lceil",
        "mathml": "<mo>⌈</mo>"
    },
    {
        "input": "lcm",
        "tex": "\\operatorname{lcm}{}",
        "mathml": "<mrow><mo>lcm</mo><mo></mo></mrow>"
    },
    {
        "input": "ldots",
        "tex": "\\ldots",
        "mathml": "<mo>...</mo>"
    },
    {
        "input": "le",
        "tex": "\\le",
        "mathml": "<mo>≤</mo>"
    },
    {
        "input": "leftarrow",
        "tex": "\\leftarrow",
        "mathml": "<mo>←</mo>"
    },
    {
        "input": "leftrightarrow",
        "tex": "\\leftrightarrow",
        "mathml": "<mo>↔</mo>"
    },
    {
        "input": "leq",
        "tex": "\\leq",
        "mathml": "<mo>≤</mo>"
    },
    {
        "input": "lfloor",
        "tex": "\\lfloor",
        "mathml": "<mo>⌊</mo>"
    },
    {
        "input": "lim",
        "tex": "\\lim",
        "mathml": "<mo>lim</mo>"
    },
    {
        "input": "ln",
        "tex": "\\ln{}",
        "mathml": "<mrow><mo>ln</mo><mo></mo></mrow>"
    },
    {
        "input": "log",
        "tex": "\\log{}",
        "mathml": "<mrow><mo>log</mo><mo></mo></mrow>"
    },
    {
        "input": "lt",
        "tex": "\\lt",
        "mathml": "<mo>&lt;</mo>"
    },
    {
        "input": "lt=",
        "tex": "\\leq",
        "mathml": "<mo>≤</mo>"
    },
    {
        "input": "ltimes",
        "tex": "\\ltimes",
        "mathml": "<mo>⋉</mo>"
    },
    {
        "input": "lub",
        "tex": "\\operatorname{lub}",
        "mathml": "<mo>lub</mo>"
    },
    {
        "input": "mapsto",
        "tex": "\\mapsto",
        "mathml": "<mo>↦</mo>"
    },
    {
        "input": "max",
        "tex": "\\max",
        "mathml": "<mo>max</mo>"
    },
    {
        "input": "min",
        "tex": "\\min",
        "mathml": "<mo>min</mo>"
    },
    {
        "input": "mod",
        "tex": "\\operatorname{mod}",
        "mathml": "<mo>mod</mo>"
    },
    {
        "input": "models",
        "tex": "\\models",
        "mathml": "<mo>⊨</mo>"
    },
    {
        "input": "mu",
        "tex": "\\mu",
        "mathml": "<mi>μ</mi>"
    },
    {
        "input": "nabla",
        "tex": "\\nabla",
        "mathml": "<mo>∇</mo>"
    },
    {
        "input": "ne",
        "tex": "\\ne",
        "mathml": "<mo>≠</mo>"
    },
    {
        "input": "neg",
        "tex": "\\neg",
        "mathml": "<mo>¬</mo>"
    },
    {
        "input": "nn",
        "tex": "\\cap",
        "mathml": "<mo>∩</mo>"
    },
    {
        "input": "nnn",
        "tex": "\\bigcap",
        "mathml": "<mo>⋂</mo>"
    },
    {
        "input": "norm",
        "tex": "\\left \\| \\right \\| ",
        "mathml": "<mrow><mo>∥</mo><mo></mo><mo>∥</mo></mrow>"
    },
    {
        "input": "not",
        "tex": "\\neg",
        "mathml": "<mo>¬</mo>"
    },
    {
        "input": "notin",
        "tex": "\\notin",
        "mathml": "<mo>∉</mo>"
    },
    {
        "input": "nu",
        "tex": "\\nu",
        "mathml": "<mi>ν</mi>"
    },
    {
        "input": "o+",
        "tex": "\\oplus",
        "mathml": "<mo>⊕</mo>"
    },
    {
        "input": "o.",
        "tex": "\\odot",
        "mathml": "<mo>⊙</mo>"
    },
    {
        "input": "obrace",
        "tex": "\\overbrace{}",
        "mathml": "<mover><mo></mo><mo>⏞</mo></mover>"
    },
    {
        "input": "odot",
        "tex": "\\odot",
        "mathml": "<mo>⊙</mo>"
    },
    {
        "input": "oint",
        "tex": "\\oint",
        "mathml": "<mo>∮</mo>"
    },
    {
        "input": "omega",
        "tex": "\\omega",
        "mathml": "<mi>ω</mi>"
    },
    {
        "input": "oo",
        "tex": "\\infty",
        "mathml": "<mo>∞</mo>"
    },
    {
        "input": "oplus",
        "tex": "\\oplus",
        "mathml": "<mo>⊕</mo>"
    },
    {
        "input": "or",
        "tex": "\\quad\\text{or}\\quad",
        "mathml": "<mrow><mspace width=\"1ex\"></mspace><mtext>or</mtext><mspace width=\"1ex\"></mspace></mrow>"
    },
    {
        "input": "otimes",
        "tex": "\\otimes",
        "mathml": "<mo>⊗</mo>"
    },
    {
        "input": "overbrace",
        "tex": "\\overbrace{}",
        "mathml": "<mover><mo></mo><mo>⏞</mo></mover>"
    },
    {
        "input": "overline",
        "tex": "\\overline{}",
        "mathml": "<mover><mo></mo><mo>¯</mo></mover>"
    },
    {
        "input": "ox",
        "tex": "\\otimes",
        "mathml": "<mo>⊗</mo>"
    },
    {
        "input": "partial",
        "tex": "\\partial",
        "mathml": "<mo>∂</mo>"
    },
    {
        "input": "phi",
        "tex": "\\phi",
        "mathml": "<mi>ϕ</mi>"
    },
    {
        "input": "pi",
        "tex": "\\pi",
        "mathml": "<mi>π</mi>"
    },
    {
        "input": "pm",
        "tex": "\\pm",
        "mathml": "<mo>±</mo>"
    },
    {
        "input": "prec",
        "tex": "\\prec",
        "mathml": "<mo>≺</mo>"
    },
    {
        "input": "preceq",
        "tex": "\\preceq",
        "mathml": "<mo>⪯</mo>"
    },
    {
        "input": "prime",
        "tex": "'",
        "mathml": "<mo>′</mo>"
    },
    {
        "input": "prod",
        "tex": "\\prod",
        "mathml": "<mo>∏</mo>"
    },
    {
        "input": "prop",
        "tex": "\\propto",
        "mathml": "<mo>∝</mo>"
    },
    {
        "input": "propto",
        "tex": "\\propto",
        "mathml": "<mo>∝</mo>"
    },
    {
        "input": "psi",
        "tex": "\\psi",
        "mathml": "<mi>ψ</mi>"
    },
    {
        "input": "qquad",
        "tex": "\\qquad",
        "mathml": "<mo>&nbsp;&nbsp;&nbsp;&nbsp;</mo>"
    },
    {
        "input": "quad",
        "tex": "\\quad",
        "mathml": "<mo>&nbsp;&nbsp;</mo>"
    },
    {
        "input": "rArr",
        "tex": "\\Rightarrow",
        "mathml": "<mo>⇒</mo>"
    },
    {
        "input": "rangle",
        "tex": "\\rangle",
        "mathml": "<mo>〉</mo>"
    },
    {
        "input": "rarr",
        "tex": "\\rightarrow",
        "mathml": "<mo>→</mo>"
    },
    {
        "input": "rceiling",
        "tex": "\\rceil",
        "mathml": "<mo>⌉</mo>"
    },
    {
        "input": "rfloor",
        "tex": "\\rfloor",
        "mathml": "<mo>⌋</mo>"
    },
    {
        "input": "rho",
        "tex": "\\rho",
        "mathml": "<mi>ρ</mi>"
    },
    {
        "input": "rightarrow",
        "tex": "\\rightarrow",
        "mathml": "<mo>→</mo>"
    },
    {
        "input": "rightarrowtail",
        "tex": "\\rightarrowtail",
        "mathml": "<mo>↣</mo>"
    },
    {
        "input": "root",
        "tex": "\\sqrt[]{}",
        "mathml": "<mroot><mo></mo><mo></mo></mroot>"
    },
    {
        "input": "rtimes",
        "tex": "\\rtimes",
        "mathml": "<mo>⋊</mo>"
    },
    {
        "input": "sec",
        "tex": "\\sec{}",
        "mathml": "<mrow><mo>sec</mo><mo></mo></mrow>"
    },
    {
        "input": "sech",
        "tex": "\\operatorname{sech}{}",
        "mathml": "<mrow><mo>sech</mo><mo></mo></mrow>"
    },
    {
        "input": "setminus",
        "tex": "\\setminus",
        "mathml": "<mo>\\</mo>"
    },
    {
        "input": "sigma",
        "tex": "\\sigma",
        "mathml": "<mi>σ</mi>"
    },
    {
        "input": "sin",
        "tex": "\\sin{}",
        "mathml": "<mrow><mo>sin</mo><mo></mo></mrow>"
    },
    {
        "input": "sinh",
        "tex": "\\sinh{}",
        "mathml": "<mrow><mo>sinh</mo><mo></mo></mrow>"
    },
    {
        "input": "sqrt",
        "tex": "\\sqrt{}",
        "mathml": "<msqrt><mo></mo></msqrt>"
    },
    {
        "input": "square",
        "tex": "\\square",
        "mathml": "<mo>□</mo>"
    },
    {
        "input": "stackrel",
        "tex": "\\stackrel{}{}",
        "mathml": "<mover><mo></mo><mo></mo></mover>"
    },
    {
        "input": "star",
        "tex": "\\star",
        "mathml": "<mo>⋆</mo>"
    },
    {
        "input": "sub",
        "tex": "\\subset",
        "mathml": "<mo>⊂</mo>"
    },
    {
        "input": "sube",
        "tex": "\\subseteq",
        "mathml": "<mo>⊆</mo>"
    },
    {
        "input": "subset",
        "tex": "\\subset",
        "mathml": "<mo>⊂</mo>"
    },
    {
        "input": "subseteq",
        "tex": "\\subseteq",
        "mathml": "<mo>⊆</mo>"
    },
    {
        "input": "succ",
        "tex": "\\succ",
        "mathml": "<mo>≻</mo>"
    },
    {
        "input": "succeq",
        "tex": "\\succeq",
        "mathml": "<mo>⪰</mo>"
    },
    {
        "input": "sum",
        "tex": "\\sum",
        "mathml": "<mo>∑</mo>"
    },
    {
        "input": "sup",
        "tex": "\\supset",
        "mathml": "<mo>⊃</mo>"
    },
    {
        "input": "supe",
        "tex": "\\supseteq",
        "mathml": "<mo>⊇</mo>"
    },
    {
        "input": "supset",
        "tex": "\\supset",
        "mathml": "<mo>⊃</mo>"
    },
    {
        "input": "supseteq",
        "tex": "\\supseteq",
        "mathml": "<mo>⊇</mo>"
    },
    {
        "input": "tan",
        "tex": "\\tan{}",
        "mathml": "<mrow><mo>tan</mo><mo></mo></mrow>"
    },
    {
        "input": "tanh",
        "tex": "\\tanh{}",
        "mathml": "<mrow><mo>tanh</mo><mo></mo></mrow>"
    },
    {
        "input": "tau",
        "tex": "\\tau",
        "mathml": "<mi>τ</mi>"
    },
    {
        "input": "therefore",
        "tex": "\\therefore",
        "mathml": "<mo>∴</mo>"
    },
    {
        "input": "theta",
        "tex": "\\theta",
        "mathml": "<mi>θ</mi>"
    },
    {
        "input": "tilde",
        "tex": "\\tilde{}",
        "mathml": "<mover><mo></mo><mo>~</mo></mover>"
    },
    {
        "input": "times",
        "tex": "\\times",
        "mathml": "<mo>×</mo>"
    },
    {
        "input": "to",
        "tex": "\\to",
        "mathml": "<mo>→</mo>"
    },
    {
        "input": "top",
        "tex": "\\top",
        "mathml": "<mo>⊤</mo>"
    },
    {
        "input": "triangle",
        "tex": "\\triangle",
        "mathml": "<mo>△</mo>"
    },
    {
        "input": "twoheadrightarrow",
        "tex": "\\twoheadrightarrow",
        "mathml": "<mo>↠</mo>"
    },
    {
        "input": "twoheadrightarrowtail",
        "tex": "\\twoheadrightarrowtail",
        "mathml": "<mo>⤖</mo>"
    },
    {
        "input": "uarr",
        "tex": "\\uparrow",
        "mathml": "<mo>↑</mo>"
    },
    {
        "input": "ubrace",
        "tex": "\\underbrace{}",
        "mathml": "<munder><mo></mo><mo>⏟</mo></munder>"
    },
    {
        "input": "ul",
        "tex": "\\underline{}",
        "mathml": "<munder><mo></mo><mo>̲</mo></munder>"
    },
    {
        "input": "underbrace",
        "tex": "\\underbrace{}",
        "mathml": "<munder><mo></mo><mo>⏟</mo></munder>"
    },
    {
        "input": "underline",
        "tex": "\\underline{}",
        "mathml": "<munder><mo></mo><mo>̲</mo></munder>"
    },
    {
        "input": "underset",
        "tex": "\\underset{}{}",
        "mathml": "<munder><mo></mo><mo></mo></munder>"
    },
    {
        "input": "uparrow",
        "tex": "\\uparrow",
        "mathml": "<mo>↑</mo>"
    },
    {
        "input": "upsilon",
        "tex": "\\upsilon",
        "mathml": "<mi>υ</mi>"
    },
    {
        "input": "uu",
        "tex": "\\cup",
        "mathml": "<mo>∪</mo>"
    },
    {
        "input": "uuu",
        "tex": "\\bigcup",
        "mathml": "<mo>⋃</mo>"
    },
    {
        "input": "varepsilon",
        "tex": "\\varepsilon",
        "mathml": "<mi>ɛ</mi>"
    },
    {
        "input": "varphi",
        "tex": "\\varphi",
        "mathml": "<mi>φ</mi>"
    },
    {
        "input": "vartheta",
        "tex": "\\vartheta",
        "mathml": "<mi>ϑ</mi>"
    },
    {
        "input": "vdash",
        "tex": "\\vdash",
        "mathml": "<mo>⊢</mo>"
    },
    {
        "input": "vdots",
        "tex": "\\vdots",
        "mathml": "<mo>⋮</mo>"
    },
    {
        "input": "vec",
        "tex": "\\vec{}",
        "mathml": "<mover><mo></mo><mo>→</mo></mover>"
    },
    {
        "input": "vee",
        "tex": "\\vee",
        "mathml": "<mo>∨</mo>"
    },
    {
        "input": "vv",
        "tex": "\\vee",
        "mathml": "<mo>∨</mo>"
    },
    {
        "input": "vvv",
        "tex": "\\bigvee",
        "mathml": "<mo>⋁</mo>"
    },
    {
        "input": "wedge",
        "tex": "\\wedge",
        "mathml": "<mo>∧</mo>"
    },
    {
        "input": "xi",
        "tex": "\\xi",
        "mathml": "<mi>ξ</mi>"
    },
    {
        "input": "xx",
        "tex": "\\times",
        "mathml": "<mo>×</mo>"
    },
    {
        "input": "zeta",
        "tex": "\\zeta",
        "mathml": "<mi>ζ</mi>"
    },
    {
        "input": "{",
        "tex": "\\lbrace",
        "mathml": "<mrow><mo>{</mo><mo></mo></mrow>"
    },
    {
        "input": "|",
        "tex": "|",
        "mathml": "<mrow><mo>∣</mo></mrow>"
    },
    {
        "input": "|--",
        "tex": "\\vdash",
        "mathml": "<mo>⊢</mo>"
    },
    {
        "input": "|->",
        "tex": "\\mapsto",
        "mathml": "<mo>↦</mo>"
    },
    {
        "input": "|==",
        "tex": "\\models",
        "mathml": "<mo>⊨</mo>"
    },
    {
        "input": "|><",
        "tex": "\\ltimes",
        "mathml": "<mo>⋉</mo>"
    },
    {
        "input": "|><|",
        "tex": "\\bowtie",
        "mathml": "<mo>⋈</mo>"
    },
    {
        "input": "|__",
        "tex": "\\lfloor",
        "mathml": "<mo>⌊</mo>"
    },
    {
        "input": "|~",
        "tex": "\\lceil",
        "mathml": "<mo>⌈</mo>"
    },
    {
        "input": "}",
        "tex": "\\rbrace",
        "mathml": "<mo>}</mo>"
    },
    {
        "input": "~=",
        "tex": "\\cong",
        "mathml": "<mo>≅</mo>"
    },
    {
        "input": "~|",
        "tex": "\\rceil",
        "mathml": "<mo>⌉</mo>"
    },
    {
        "input": "~~",
        "tex": "\\approx",
        "mathml": "<mo>≈</mo>"
    },
    {
        "input": "f(x)/g(x)",
        "tex": "\\frac{f{\\left( x \\right )}}{g{\\left( x \\right )}}",
        "mathml": "<mfrac><mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mrow><mi>g</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mfrac>"
    },
    {
        "input": "sin(x)/2",
        "tex": "\\frac{\\sin{\\left( x \\right )}}{2}",
        "mathml": "<mfrac><mrow><mo>sin</mo><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mn>2</mn></mfrac>"
    },
    {
        "input": "cosx/2",
        "tex": "\\frac{\\cos{x}}{2}",
        "mathml": "<mfrac><mrow><mo>cos</mo><mi>x</mi></mrow><mn>2</mn></mfrac>"
    },
    {
        "input": "absx",
        "tex": "\\left | x \\right | ",
        "mathml": "<mrow><mo>|</mo><mi>x</mi><mo>|</mo></mrow>"
    },
    {
        "input": "norm x",
        "tex": "\\left \\| x \\right \\| ",
        "mathml": "<mrow><mo>∥</mo><mi>x</mi><mo>∥</mo></mrow>"
    },
    {
        "input": "floor x/2",
        "tex": "\\frac{\\left \\lfloor x \\right \\rfloor }{2}",
        "mathml": "<mfrac><mrow><mo>⌊</mo><mi>x</mi><mo>⌋</mo></mrow><mn>2</mn></mfrac>"
    },
    {
        "input": "ceil 5.2",
        "tex": "\\left \\lceil 5.2 \\right \\rceil ",
        "mathml": "<mrow><mo>⌈</mo><mn>5.2</mn><mo>⌉</mo></mrow>"
    },
    {
        "input": "min_x 3",
        "tex": "\\min_{x} 3",
        "mathml": "<munder><mo>min</mo><mi>x</mi></munder><mn>3</mn>"
    },
    {
        "input": "sqrt4",
        "tex": "\\sqrt{4}",
        "mathml": "<msqrt><mn>4</mn></msqrt>"
    },
    {
        "input": "sqrt(x+1)",
        "tex": "\\sqrt{x + 1}",
        "mathml": "<msqrt><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow></msqrt>"
    },
    {
        "input": "root(3)(x)",
        "tex": "\\sqrt[3]{x}",
        "mathml": "<mroot><mrow><mi>x</mi></mrow><mrow><mn>3</mn></mrow></mroot>"
    },
    {
        "input": "root3x",
        "tex": "\\sqrt[3]{x}",
        "mathml": "<mroot><mi>x</mi><mn>3</mn></mroot>"
    },
    {
        "input": "stackrel3=",
        "tex": "\\stackrel{3}{=}",
        "mathml": "<mover><mo>=</mo><mn>3</mn></mover>"
    },
    {
        "input": "stackrel(3)(=)",
        "tex": "\\stackrel{3}{=}",
        "mathml": "<mover><mrow><mo>=</mo></mrow><mrow><mn>3</mn></mrow></mover>"
    },
    {
        "input": "overset(k)(=)",
        "tex": "\\overset{k}{=}",
        "mathml": "<mover><mrow><mo>=</mo></mrow><mrow><mi>k</mi></mrow></mover>"
    },
    {
        "input": "underset(k)(=)",
        "tex": "\\underset{k}{=}",
        "mathml": "<munder><mrow><mo>=</mo></mrow><mrow><mi>k</mi></mrow></munder>"
    },
    {
        "input": "tilde x",
        "tex": "\\tilde{x}",
        "mathml": "<mover><mi>x</mi><mo>~</mo></mover>"
    },
    {
        "input": "hat x",
        "tex": "\\hat{x}",
        "mathml": "<mover><mi>x</mi><mo>^</mo></mover>"
    },
    {
        "input": "bar x",
        "tex": "\\overline{x}",
        "mathml": "<mover><mi>x</mi><mo>¯</mo></mover>"
    },
    {
        "input": "vec x",
        "tex": "\\vec{x}",
        "mathml": "<mover><mi>x</mi><mo stretchy=\"false\">→</mo></mover>"
    },
    {
        "input": "vec(xy)",
        "tex": "\\vec{x y}",
        "mathml": "<mover><mrow><mi>x</mi><mi>y</mi></mrow><mo>→</mo></mover>"
    },
    {
        "input": "dot x",
        "tex": "\\dot{x}",
        "mathml": "<mover><mi>x</mi><mo>.</mo></mover>"
    },
    {
        "input": "ddot x",
        "tex": "\\ddot{x}",
        "mathml": "<mover><mi>x</mi><mo>..</mo></mover>"
    },
    {
        "input": "ul x",
        "tex": "\\underline{x}",
        "mathml": "<munder><mi>x</mi><mo>̲</mo></munder>"
    },
    {
        "input": "ubrace(x+1)",
        "tex": "\\underbrace{x + 1}",
        "mathml": "<munder><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>⏟</mo></munder>"
    },
    {
        "input": "obrace(x+1)",
        "tex": "\\overbrace{x + 1}",
        "mathml": "<mover><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mo>⏞</mo></mover>"
    },
    {
        "input": "mbox(hi)",
        "tex": "\\text{hi}",
        "mathml": "<mrow><mtext>hi</mtext></mrow>"
    },
    {
        "input": "text(hi)",
        "tex": "\\text{hi}",
        "mathml": "<mrow><mtext>hi</mtext></mrow>"
    },
    {
        "input": "\"hi\"",
        "tex": "\\text{hi}",
        "mathml": "<mrow><mtext>hi</mtext></mrow>"
    },
    {
        "input": "cancel(x)",
        "tex": "\\cancel{x}",
        "mathml": "<menclose notation=\"updiagonalstrike\"><mrow><mi>x</mi></mrow></menclose>"
    },
    {
        "input": "color(red)(x)",
        "tex": "\\color{red}{x}",
        "mathml": "<mstyle mathcolor=\"red\"><mrow><mi>x</mi></mrow></mstyle>"
    },
    {
        "input": "color(red)(x)",
        "tex": "\\color{red}{x}",
        "mathml": "<mstyle mathcolor=\"red\"><mrow><mi>x</mi></mrow></mstyle>"
    },
    {
        "input": "bb(x)",
        "tex": "\\mathbf{x}",
        "mathml": "<mstyle mathvariant=\"bold\"><mrow><mi>x</mi></mrow></mstyle>"
    },
    {
        "input": "sf(x)",
        "tex": "\\mathsf{x}",
        "mathml": "<mstyle mathvariant=\"sans-serif\"><mrow><mi>x</mi></mrow></mstyle>"
    },
    {
        "input": "bbb(x)",
        "tex": "\\mathbb{x}",
        "mathml": "<mstyle mathvariant=\"double-struck\"><mrow>������</mrow></mstyle>"
    },
    {
        "input": "cc(x)",
        "tex": "\\mathcal{x}",
        "mathml": "<mstyle mathvariant=\"script\"><mrow>������</mrow></mstyle>"
    },
    {
        "input": "tt(x)",
        "tex": "\\mathtt{x}",
        "mathml": "<mstyle mathvariant=\"monospace\"><mrow><mi>x</mi></mrow></mstyle>"
    },
    {
        "input": "fr(x)",
        "tex": "\\mathfrak{x}",
        "mathml": "<mstyle mathvariant=\"fraktur\"><mrow>������</mrow></mstyle>"
    },
    {
        "input": "x",
        "tex": "x",
        "mathml": "<mi>x</mi>"
    },
    {
        "input": "2",
        "tex": "2",
        "mathml": "<mn>2</mn>"
    },
    {
        "input": "x^2",
        "tex": "x^{2}",
        "mathml": "<msup><mi>x</mi><mn>2</mn></msup>"
    },
    {
        "input": "x_2",
        "tex": "x_{2}",
        "mathml": "<msub><mi>x</mi><mn>2</mn></msub>"
    },
    {
        "input": "x_2^3",
        "tex": "x_{2}^{3}",
        "mathml": "<mrow><msubsup><mi>x</mi><mn>2</mn><mn>3</mn></msubsup></mrow>"
    },
    {
        "input": "2/3",
        "tex": "\\frac{2}{3}",
        "mathml": "<mfrac><mn>2</mn><mn>3</mn></mfrac>"
    },
    {
        "input": "-2/3",
        "tex": "- \\frac{2}{3}",
        "mathml": "<mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac>"
    },
    {
        "input": "2-3",
        "tex": "2 - 3",
        "mathml": "<mn>2</mn><mo>-</mo><mn>3</mn>"
    },
    {
        "input": "(2+3)",
        "tex": "\\left( 2 + 3 \\right )",
        "mathml": "<mrow><mo>(</mo><mn>2</mn><mo>+</mo><mn>3</mn><mo>)</mo></mrow>"
    },
    {
        "input": "2+(3/4+1)",
        "tex": "2 + \\left( \\frac{3}{4} + 1 \\right )",
        "mathml": "<mn>2</mn><mo>+</mo><mrow><mo>(</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>+</mo><mn>1</mn><mo>)</mo></mrow>"
    },
    {
        "input": "2+[3/4+1]",
        "tex": "2 + \\left[ \\frac{3}{4} + 1 \\right ]",
        "mathml": "<mn>2</mn><mo>+</mo><mrow><mo>[</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>+</mo><mn>1</mn><mo>]</mo></mrow>"
    },
    {
        "input": "2+|3/4+1|",
        "tex": "2 + \\left \\lvert \\frac{3}{4} + 1 \\right \\rvert",
        "mathml": "<mn>2</mn><mo>+</mo><mrow><mo>|</mo><mfrac><mn>3</mn><mn>4</mn></mfrac><mo>+</mo><mn>1</mn><mo>|</mo></mrow>"
    },
    {
        "input": "[2/3,4)",
        "tex": "\\left[ \\frac{2}{3} , 4 \\right )",
        "mathml": "<mrow><mo>[</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>,</mo><mn>4</mn><mo>)</mo></mrow>"
    },
    {
        "input": "{:2,3:}",
        "tex": "\\left. 2 , 3 \\right .",
        "mathml": "<mrow><mn>2</mn><mo>,</mo><mn>3</mn></mrow>"
    },
    {
        "input": "<<2,3>>",
        "tex": "\\left\\langle 2 , 3 \\right \\rangle",
        "mathml": "<mrow><mo>〈</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>〉</mo></mrow>"
    },
    {
        "input": "(:2,3:)",
        "tex": "\\left\\langle 2 , 3 \\right \\rangle",
        "mathml": "<mrow><mo>〈</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>〉</mo></mrow>"
    },
    {
        "input": "[(2,3),(4,5)]",
        "tex": "\\left [ \\begin{matrix} 2 & 3 \\\\ 4 & 5 \\end{matrix} \\right ]",
        "mathml": "<mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr><mtr><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd></mtr></mtable><mo>]</mo></mrow>"
    },
    {
        "input": "[(2,3,4,5)]",
        "tex": "\\left [ \\begin{matrix} 2 & 3 & 4 & 5 \\end{matrix} \\right ]",
        "mathml": "<mrow><mo>[</mo><mtable><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd><mtd><mn>4</mn></mtd><mtd><mn>5</mn></mtd></mtr></mtable><mo>]</mo></mrow>"
    },
    {
        "input": "((1),(2))",
        "tex": "\\left ( \\begin{matrix} 1 \\\\ 2 \\end{matrix} \\right )",
        "mathml": "<mrow><mo>(</mo><mtable><mtr><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd></mtr></mtable><mo>)</mo></mrow>"
    },
    {
        "input": "{(1,if,x ge 3),(2,if,x gt 3):}",
        "tex": "\\left \\lbrace \\begin{matrix} 1 & \\quad\\text{if}\\quad & x \\ge 3 \\\\ 2 & \\quad\\text{if}\\quad & x \\gt 3 \\end{matrix} \\right .",
        "mathml": "<mrow><mo>{</mo><mtable columnalign=\"left\"><mtr><mtd><mn>1</mn></mtd><mtd><mrow><mspace width=\"1ex\"></mspace><mo>if</mo><mspace width=\"1ex\"></mspace></mrow></mtd><mtd><mi>x</mi><mo>≥</mo><mn>3</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mrow><mspace width=\"1ex\"></mspace><mo>if</mo><mspace width=\"1ex\"></mspace></mrow></mtd><mtd><mi>x</mi><mo>&gt;</mo><mn>3</mn></mtd></mtr></mtable></mrow>"
    },
    {
        "input": "int_2^3 3dx",
        "tex": "\\int_{2}^{3} 3 dx",
        "mathml": "<mrow><msubsup><mo>∫</mo><mn>2</mn><mn>3</mn></msubsup></mrow><mn>3</mn><mrow><mi>d</mi><mi>x</mi></mrow>"
    },
    {
        "input": "sum_(n=1)^3 n",
        "tex": "\\sum_{n = 1}^{3} n",
        "mathml": "<mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>1</mn></mrow><mn>3</mn></munderover></mrow><mi>n</mi>"
    },
    {
        "input": "lim_(h->0)(f(x+h)-f(x))/h",
        "tex": "\\lim_{h \\to 0} \\frac{f{\\left( x + h \\right )} - f{\\left( x \\right )}}{h}",
        "mathml": "<munder><mo>lim</mo><mrow><mi>h</mi><mo>→</mo><mn>0</mn></mrow></munder><mfrac><mrow><mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mi>h</mi><mo>)</mo></mrow></mrow><mo>-</mo><mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow></mrow><mi>h</mi></mfrac>"
    },
    {
        "input": "sin^-1(x)",
        "tex": "\\sin^{- 1}{\\left( x \\right )}",
        "mathml": "<mrow><msup><mo>sin</mo><mrow><mo>-</mo><mn>1</mn></mrow></msup><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow>"
    },
    {
        "input": "f(x)=sum_(n=0)^oo(f^((n))(a))/(n!)(x-a)^n",
        "tex": "f{\\left( x \\right )} = \\sum_{n = 0}^{\\infty} \\frac{f^{\\left( n \\right )}{\\left( a \\right )}}{n !} \\left( x - a \\right )^{n}",
        "mathml": "<mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mo>=</mo><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo>∞</mo></munderover></mrow><mfrac><mrow><mrow><msup><mi>f</mi><mrow><mrow><mo>(</mo><mi>n</mi><mo>)</mo></mrow></mrow></msup><mrow><mo>(</mo><mi>a</mi><mo>)</mo></mrow></mrow></mrow><mrow><mi>n</mi><mo>!</mo></mrow></mfrac><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>a</mi><mo>)</mo></mrow><mi>n</mi></msup>"
    },
    {
        "input": "f(x)=\\sum_{n=0}^\\infty\\frac{f^{(n)}(a)}{n!}(x-a)^n",
        "tex": "f{\\left( x \\right )} = \\sum_{n = 0}^{\\infty} \\frac{f^{\\left( n \\right )}{\\left( a \\right )}}{n !} \\left( x - a \\right )^{n}",
        "mathml": "<mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mo>=</mo><mrow><munderover><mo>∑</mo><mrow><mi>n</mi><mo>=</mo><mn>0</mn></mrow><mo>∞</mo></munderover></mrow><mfrac><mrow><mrow><msup><mi>f</mi><mrow><mrow><mo>(</mo><mi>n</mi><mo>)</mo></mrow></mrow></msup><mrow><mo>(</mo><mi>a</mi><mo>)</mo></mrow></mrow></mrow><mrow><mi>n</mi><mo>!</mo></mrow></mfrac><msup><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mi>a</mi><mo>)</mo></mrow><mi>n</mi></msup>"
    },
    {
        "input": "(a,b]={x in RR | a < x <= b}",
        "tex": "\\left( a , b \\right ] = \\lbrace x \\in \\mathbb{R} | a < x \\le b \\rbrace",
        "mathml": "<mrow><mo>(</mo><mi>a</mi><mo>,</mo><mi>b</mi><mo>]</mo></mrow><mo>=</mo><mrow><mo>{</mo><mi>x</mi><mo>∈</mo><mo>ℝ</mo><mrow><mo>∣</mo></mrow><mi>a</mi><mo>&lt;</mo><mi>x</mi><mo>≤</mo><mi>b</mi><mo>}</mo></mrow>"
    },
    {
        "input": "abc-123.45^-1.1",
        "tex": "a b c - 123.45^{- 1.1}",
        "mathml": "<mi>a</mi><mi>b</mi><mi>c</mi><mo>-</mo><msup><mn>123.45</mn><mrow><mo>-</mo><mn>1.1</mn></mrow></msup>"
    },
    {
        "input": "stackrel\"def\"= or \\stackrel{\\Delta}{=}",
        "tex": "\\stackrel{\\text{def}}{=} \\quad\\text{or}\\quad \\stackrel{\\Delta}{=}",
        "mathml": "<mover><mo>=</mo><mrow><mtext>def</mtext></mrow></mover><mrow><mspace width=\"1ex\"></mspace><mtext>or</mtext><mspace width=\"1ex\"></mspace></mrow><mover><mrow><mo>=</mo></mrow><mrow><mo>Δ</mo></mrow></mover>"
    },
    {
        "input": "{::}_(\\ 92)^238U",
        "tex": "\\left . \\right ._{92}^{238} U",
        "mathml": "<mrow><msubsup><mrow></mrow><mrow><mo>&nbsp;</mo><mn>92</mn></mrow><mn>238</mn></msubsup></mrow><mi>U</mi>"
    },
    {
        "input": "{::}_(\\ 92)^238U",
        "tex": "\\left . \\right ._{92}^{238} U",
        "mathml": "<mrow><msubsup><mrow></mrow><mrow><mo>&nbsp;</mo><mn>92</mn></mrow><mn>238</mn></msubsup></mrow><mi>U</mi>"
    },
    {
        "input": "(cancel((x+1))(x-2))/(cancel((x+1))(x+3))",
        "tex": "\\frac{\\cancel{\\left( x + 1 \\right )} \\left( x - 2 \\right )}{\\cancel{\\left( x + 1 \\right )} \\left( x + 3 \\right )}",
        "mathml": "<mfrac><mrow><menclose notation=\"updiagonalstrike\"><mrow><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></mrow></menclose><mrow><mo>(</mo><mi>x</mi><mo>-</mo><mn>2</mn><mo>)</mo></mrow></mrow><mrow><menclose notation=\"updiagonalstrike\"><mrow><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>1</mn><mo>)</mo></mrow></mrow></menclose><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow></mrow></mfrac>"
    },
    {
        "input": "a//b",
        "tex": "a / b",
        "mathml": "<mi>a</mi><mo>/</mo><mi>b</mi>"
    },
    {
        "input": "int_1^3 2x dx = x^2|_1^3",
        "tex": "\\int_{1}^{3} 2 x dx = x^{2} |_{1}^{3}",
        "mathml": "<mrow><msubsup><mo>∫</mo><mn>1</mn><mn>3</mn></msubsup></mrow><mn>2</mn><mi>x</mi><mrow><mi>d</mi><mi>x</mi></mrow><mo>=</mo><msup><mi>x</mi><mn>2</mn></msup><mrow><msubsup><mrow><mo>∣</mo></mrow><mn>1</mn><mn>3</mn></msubsup></mrow>"
    },
    {
        "input": "log_2(x)/5",
        "tex": "\\frac{\\log_{2}{\\left( x \\right )}}{5}",
        "mathml": "<mfrac><mrow><msub><mo>log</mo><mn>2</mn></msub><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "log_2(x)+5",
        "tex": "\\log_{2}{\\left( x \\right )} + 5",
        "mathml": "<mrow><msub><mo>log</mo><mn>2</mn></msub><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mo>+</mo><mn>5</mn>"
    },
    {
        "input": "log_sqrt(5)3/5",
        "tex": "\\frac{\\log_{\\sqrt{5}}{3}}{5}",
        "mathml": "<mfrac><mrow><msub><mo>log</mo><msqrt><mrow><mn>5</mn></mrow></msqrt></msub><mn>3</mn></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "log_2^5(x)+5",
        "tex": "\\log_{2}^{5}{\\left( x \\right )} + 5",
        "mathml": "<mrow><mrow><msubsup><mo>log</mo><mn>2</mn><mn>5</mn></msubsup></mrow><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mo>+</mo><mn>5</mn>"
    },
    {
        "input": "2^f_2-3",
        "tex": "2^{f_{2}{- 3}}",
        "mathml": "<msup><mn>2</mn><mi>f</mi></msup><mo>_</mo><mn>2</mn><mo>-</mo><mn>3</mn>"
    },
    {
        "input": "f_3(x)/5",
        "tex": "\\frac{f_{3}{\\left( x \\right )}}{5}",
        "mathml": "<mfrac><mrow><msub><mi>f</mi><mn>3</mn></msub><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "2^(f_3(x)/5)",
        "tex": "2^{\\frac{f_{3}{\\left( x \\right )}}{5}}",
        "mathml": "<msup><mn>2</mn><mrow><mfrac><mrow><msub><mi>f</mi><mn>3</mn></msub><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mn>5</mn></mfrac></mrow></msup>"
    },
    {
        "input": "log_3x^2/5",
        "tex": "\\frac{\\log_{3}{x}^{2}}{5}",
        "mathml": "<mfrac><mrow><msub><mo>log</mo><mn>3</mn></msub><msup><mi>x</mi><mn>2</mn></msup></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "log_3x_0/5",
        "tex": "\\frac{\\log_{3}{x}_{0}}{5}",
        "mathml": "<mfrac><mrow><msub><mo>log</mo><mn>3</mn></msub><msub><mi>x</mi><mn>0</mn></msub></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "sin^2(x)/5",
        "tex": "\\frac{\\sin^{2}{\\left( x \\right )}}{5}",
        "mathml": "<mfrac><mrow><msup><mo>sin</mo><mn>2</mn></msup><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow><mn>5</mn></mfrac>"
    },
    {
        "input": "3+ -4",
        "tex": "3 + - 4",
        "mathml": "<mn>3</mn><mo>+</mo><mo>-</mo><mn>4</mn>"
    },
    {
        "input": "3+-4",
        "tex": "3 \\pm 4",
        "mathml": "<mn>3</mn><mo>±</mo><mn>4</mn>"
    },
    {
        "input": "3^5.234",
        "tex": "3^{5.234}",
        "mathml": "<msup><mn>3</mn><mn>5.234</mn></msup>"
    },
    {
        "input": "3^5,233",
        "tex": "3^{5} , 233",
        "mathml": "<msup><mn>3</mn><mn>5</mn></msup><mo>,</mo><mn>233</mn>"
    },
    {
        "input": "(x+1)/4",
        "tex": "\\frac{x + 1}{4}",
        "mathml": "<mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mn>4</mn></mfrac>"
    },
    {
        "input": "sqrtx/4",
        "tex": "\\frac{\\sqrt{x}}{4}",
        "mathml": "<mfrac><msqrt><mi>x</mi></msqrt><mn>4</mn></mfrac>"
    },
    {
        "input": "root(3)(5)/4",
        "tex": "\\frac{\\sqrt[3]{5}}{4}",
        "mathml": "<mfrac><mroot><mrow><mn>5</mn></mrow><mrow><mn>3</mn></mrow></mroot><mn>4</mn></mfrac>"
    },
    {
        "input": "3^2/4^2",
        "tex": "\\frac{3^{2}}{4^{2}}",
        "mathml": "<mfrac><msup><mn>3</mn><mn>2</mn></msup><msup><mn>4</mn><mn>2</mn></msup></mfrac>"
    },
    {
        "input": "3_2/4_2",
        "tex": "\\frac{3_{2}}{4_{2}}",
        "mathml": "<mfrac><msub><mn>3</mn><mn>2</mn></msub><msub><mn>4</mn><mn>2</mn></msub></mfrac>"
    },
    {
        "input": "3^2/4^2",
        "tex": "\\frac{3^{2}}{4^{2}}",
        "mathml": "<mfrac><msup><mn>3</mn><mn>2</mn></msup><msup><mn>4</mn><mn>2</mn></msup></mfrac>"
    },
    {
        "input": "3_2/4_2",
        "tex": "\\frac{3_{2}}{4_{2}}",
        "mathml": "<mfrac><msub><mn>3</mn><mn>2</mn></msub><msub><mn>4</mn><mn>2</mn></msub></mfrac>"
    },
    {
        "input": "3_2^3/4_2",
        "tex": "\\frac{3_{2}^{3}}{4_{2}}",
        "mathml": "<mfrac><mrow><msubsup><mn>3</mn><mn>2</mn><mn>3</mn></msubsup></mrow><msub><mn>4</mn><mn>2</mn></msub></mfrac>"
    },
    {
        "input": "vecx/hat3+vecx^2+(vec x)^2 + vec(x^2)",
        "tex": "\\frac{\\vec{x}}{\\hat{3}} + \\vec{x}^{2} + \\left( \\vec{x} \\right )^{2} + \\vec{x^{2}}",
        "mathml": "<mfrac><mover><mi>x</mi><mo stretchy=\"false\">→</mo></mover><mover><mn>3</mn><mo>^</mo></mover></mfrac><mo>+</mo><msup><mover><mi>x</mi><mo stretchy=\"false\">→</mo></mover><mn>2</mn></msup><mo>+</mo><msup><mrow><mo>(</mo><mover><mi>x</mi><mo stretchy=\"false\">→</mo></mover><mo>)</mo></mrow><mn>2</mn></msup><mo>+</mo><mover><mrow><msup><mi>x</mi><mn>2</mn></msup></mrow><mo>→</mo></mover>"
    },
    {
        "input": "-3-4",
        "tex": "- 3 - 4",
        "mathml": "<mo>-</mo><mn>3</mn><mo>-</mo><mn>4</mn>"
    },
    {
        "input": "(-3,-4)",
        "tex": "\\left( - 3 , - 4 \\right )",
        "mathml": "<mrow><mo>(</mo><mo>-</mo><mn>3</mn><mo>,</mo><mo>-</mo><mn>4</mn><mo>)</mo></mrow>"
    },
    {
        "input": "-(-2-4)-5",
        "tex": "- \\left( - 2 - 4 \\right ) - 5",
        "mathml": "<mo>-</mo><mrow><mo>(</mo><mo>-</mo><mn>2</mn><mo>-</mo><mn>4</mn><mo>)</mo></mrow><mo>-</mo><mn>5</mn>"
    },
    {
        "input": "2_-4^-5",
        "tex": "2_{- 4}^{- 5}",
        "mathml": "<mrow><msubsup><mn>2</mn><mrow><mo>-</mo><mn>4</mn></mrow><mrow><mo>-</mo><mn>5</mn></mrow></msubsup></mrow>"
    },
    {
        "input": "int_-sqrt(3)^4",
        "tex": "\\int_{- \\sqrt{3}}^{4}",
        "mathml": "<mrow><msubsup><mo>∫</mo><mrow><mo>-</mo><msqrt><mrow><mn>3</mn></mrow></msqrt></mrow><mn>4</mn></msubsup></mrow>"
    },
    {
        "input": "-2/-3",
        "tex": "- \\frac{2}{- 3}",
        "mathml": "<mo>-</mo><mfrac><mn>2</mn><mrow><mo>-</mo><mn>3</mn></mrow></mfrac>"
    },
    {
        "input": "(-2)/-3",
        "tex": "\\frac{- 2}{- 3}",
        "mathml": "<mfrac><mrow><mo>-</mo><mn>2</mn></mrow><mrow><mo>-</mo><mn>3</mn></mrow></mfrac>"
    },
    {
        "input": "-2/3-3/4",
        "tex": "- \\frac{2}{3} - \\frac{3}{4}",
        "mathml": "<mo>-</mo><mfrac><mn>2</mn><mn>3</mn></mfrac><mo>-</mo><mfrac><mn>3</mn><mn>4</mn></mfrac>"
    },
    {
        "input": "-2^2",
        "tex": "- 2^{2}",
        "mathml": "<mo>-</mo><msup><mn>2</mn><mn>2</mn></msup>"
    },
    {
        "input": "-(x+1)/-(x+3)",
        "tex": "- \\frac{x + 1}{- \\left( x + 3 \\right )}",
        "mathml": "<mo>-</mo><mfrac><mrow><mi>x</mi><mo>+</mo><mn>1</mn></mrow><mrow><mo>-</mo><mrow><mo>(</mo><mi>x</mi><mo>+</mo><mn>3</mn><mo>)</mo></mrow></mrow></mfrac>"
    },
    {
        "input": "{:{:x:}:}",
        "tex": "\\left. \\left. x \\right . \\right .",
        "mathml": "<mrow><mrow><mi>x</mi></mrow></mrow>"
    },
    {
        "input": "{:1+{:x:}+3:}",
        "tex": "\\left. 1 + \\left. x \\right . + 3 \\right .",
        "mathml": "<mrow><mn>1</mn><mo>+</mo><mrow><mi>x</mi></mrow><mo>+</mo><mn>3</mn></mrow>"
    },
    {
        "input": "(:2,3]",
        "tex": "\\left\\langle 2 , 3 \\right ]",
        "mathml": "<mrow><mo>〈</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>]</mo></mrow>"
    },
    {
        "input": "[2,3rangle",
        "tex": "\\left[ 2 , 3 \\right \\rangle",
        "mathml": "<mrow><mo>[</mo><mn>2</mn><mo>,</mo><mn>3</mn><mo>〉</mo></mrow>"
    },
    {
        "input": "2,3)",
        "tex": "2 , 3 )",
        "mathml": "<mn>2</mn><mo>,</mo><mn>3</mn><mo>)</mo>"
    },
    {
        "input": "(2,3",
        "tex": "\\left( 2 , 3 \\right.",
        "mathml": "<mrow><mo>(</mo><mn>2</mn><mo>,</mo><mn>3</mn></mrow>"
    },
    {
        "input": "3/",
        "tex": "\\frac{3}{}",
        "mathml": "<mfrac><mn>3</mn><mo></mo></mfrac>"
    },
    {
        "input": "2^",
        "tex": "2^{}",
        "mathml": "<msup><mn>2</mn><mo></mo></msup>"
    },
    {
        "input": "2^+3",
        "tex": "2^{+} 3",
        "mathml": "<msup><mn>2</mn><mo>+</mo></msup><mn>3</mn>"
    },
    {
        "input": "/4",
        "tex": "/ 4",
        "mathml": "<mo>/</mo><mn>4</mn>"
    },
    {
        "input": "2^- +3",
        "tex": "2^{- +} 3",
        "mathml": "<msup><mn>2</mn><mrow><mo>-</mo><mo>+</mo></mrow></msup><mn>3</mn>"
    },
    {
        "input": "lim_(x rarr 2^-) f(x)",
        "tex": "\\lim_{x \\rightarrow 2^{-}} f{\\left( x \\right )}",
        "mathml": "<munder><mo>lim</mo><mrow><mi>x</mi><mo>→</mo><msup><mn>2</mn><mo>-</mo></msup></mrow></munder><mrow><mi>f</mi><mrow><mo>(</mo><mi>x</mi><mo>)</mo></mrow></mrow>"
    },
    {
        "input": "|(x,1),(2,3)|",
        "tex": "\\left \\lvert \\begin{matrix} x & 1 \\\\ 2 & 3 \\end{matrix} \\right \\rvert",
        "mathml": "<math xmlns=\"http://www.w3.org/1998/Math/MathML\"><mrow><mo>|</mo><mtable rowspacing=\"4pt\" columnspacing=\"1em\"><mtr><mtd><mi>x</mi></mtd><mtd><mn>1</mn></mtd></mtr><mtr><mtd><mn>2</mn></mtd><mtd><mn>3</mn></mtd></mtr></mtable><mo>|</mo></mrow></math>"
    }
]

function run_tests() {
    console.clear();
    const tests_table = document.getElementById('tests');
    const tbody = tests_table.querySelector('tbody');
    tbody.innerHTML = '';
    const new_tests = [];
    unittests.forEach(function(test) {
        const tr = document.createElement('tr');
        tbody.appendChild(tr);
        const input_td = document.createElement('td');
        const expected_td = document.createElement('td');
        const output_td = document.createElement('td');
        const katex_td = document.createElement('td');
        const mathml_td = document.createElement('td');
        tr.appendChild(input_td);
        tr.appendChild(expected_td);
        tr.appendChild(output_td);
        tr.appendChild(katex_td);
        tr.appendChild(mathml_td);

        input_td.textContent = test.input;
        expected_td.textContent = test.tex;
        mathml_td.innerHTML = `<math>${test.mathml}</math>`;

        try {
            const tex = p.parse(test.input);
            output_td.textContent = tex;
            new_tests.push({input:test.input, tex: tex, mathml: test.mathml});
            katex.render(tex,katex_td,{displayMode:true});
            if(tex!=test.tex) {
                tr.classList.add('mismatch');
            }
        } catch(e) {
            console.warn('Failed: '+test.input);
            console.log(e);
            new_tests.push({input:test.input, tex: test.tex, mathml: test.mathml});
            tr.classList.add('failed');
        }
    });
    MathJax.Hub.Queue(['Typeset',MathJax.Hub,tbody]);
    const ta = document.createElement('textarea');
    ta.value= 'const unittests = '+JSON.stringify(new_tests,null,'    ');
    document.body.appendChild(ta);
}
const run_tests_button = document.getElementById('run-tests');
run_tests_button.addEventListener('click',run_tests);

