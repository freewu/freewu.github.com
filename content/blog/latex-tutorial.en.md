---
title: "LaTeX Tutorial"
date: 2023-05-09
description: "A LaTeX cheat sheet: superscripts, fractions, roots, matrices, cases, tables, commutative diagrams and more."
author: "bluefrog"
type: "post"
slug: "latex-tutorial"
---


## Superscripts and subscripts

> Superscripts (Powers) are written with `^`, e.g. n^2.
> Subscripts (Indices) are written with `_`, e.g. a_2

```latex
$$
{^1_2}a{^3_4} + n^2 - a_2
$$				
```
$$
{^1_2}a{^3_4} + n^2 - a_2
$$

|  Input   | Display |  Input   | Display |
| :-----: | :--: | :-----: | :--: |
| \langle |  ⟨⟨  | \rangle |  ⟩⟩  |
| \lceil  |  ⌈⌈  | \rceil  |  ⌉⌉  |
| \lfloor |  ⌊⌊  | \rfloor |  ⌋⌋  |
| \lbrace |  {{  | \rbrace |  }   |

$$
\langle	⟨	\rangle	⟩   
\lceil	⌈	\rceil	⌉   
\lfloor	⌊	\rfloor	⌋   
\lbrace	{	\rbrace	}
$$

> Use the `\left` and `\right` commands to render large brackets or delimiters

```latex
$$
f(x)=\left(\frac{x}{2}\right)
$$
```
$$
f(x)=\left(\frac{x}{2}\right)
$$

## Fractions

> Insert a fraction with `\frac{numerator}{denominator}`

```latex
$$
{a-1}\over{b-1}
$$
```
$$
{a-1}\over{b-1}
$$

```latex
$$
\frac{y}{\frac{3}{x}+b}
$$
```
$$
\frac{y}{\frac{3}{x}+b}
$$

> Complex fractions can also be written as `numerator \over denominator`
```latex
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$
```
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$

## Roots

> Use `sqrt[index, defaults to 2]{radicand}` to enter a root
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$

## Ellipsis



> `\ldots` is an ellipsis aligned with the text baseline
```latex
$$
1+2+\ldots+n
$$
```
$$
1+2+\ldots+n
$$

> `\cdots` is an ellipsis aligned with the middle of the text line
```latex
$$
1+2+\cdots+n
$$
```
$$
1+2+\cdots+n
$$
## Vectors

> A vector is a quantity that has both magnitude and direction, also called a vector. In physics it is called a vector, e.g. velocity, acceleration, force. Dropping the physical meaning, it becomes the mathematical concept of a vector.
>
> Use `\vec{vector}` to render a vector automatically
```latex
$$
\vec{a} \cdot \vec{b}=0
$$
```
$$
\vec{a} \cdot \vec{b}=0
$$

> Use the `\overrightarrow`, `\overleftrightarrow`, `\overleftarrow` commands to put symbols above letters
```latex
$$
\overleftarrow{xy} \quad and \quad 
\overleftrightarrow{xy} \quad and \quad 
\overrightarrow{xy}
$$
```
$$
\overleftarrow{xy} \quad and \quad 
\overleftrightarrow{xy} \quad and \quad 
\overrightarrow{xy}
$$

## Integrals

> Use `\int_{lower}^{upper}{integrand}` to enter an integral

```latex
$$
\int_0^1 {x^2dx}
$$
```


$$
\int_0^1 {x^2dx}
$$

## Limits

> Use `\lim_{variable \to expression} expression` to enter a limit. The `\to` symbol can be replaced by any other symbol if needed

```latex
$$ 
\lim_{ n \to +\infty } \frac{1}{ n( n + 1) } \quad and \quad 
\lim_{ x \leftarrow { example } } \frac{1}{ n( n + 1) } 
$$
```

$$
\lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad 
\lim_{x\leftarrow{example}} \frac{1}{n(n+1)}
$$

## Products, unions and intersections

> Use `\sum_{lower}^{upper}{expression}` to enter a summation
>
> Use `\prod_{lower}^{upper}{expression}` to enter a product
>
> Use `\bigcup_{lower}^{upper}{expression}` to enter a union

```latex
$$
\sum_{i=1}^n \frac{1}{i^2} \quad and \quad 
\prod_{i=1}^n \frac{1}{i^2} \quad and \quad 
\bigcup_{i=1}^{2} R
$$
```

$$
\sum_{i=1}^n \frac{1}{i^2} \quad and \quad 
\prod_{i=1}^n \frac{1}{i^2} \quad and \quad 
\bigcup_{i=1}^{2} R
$$

## Greek letters

> Enter `\lowercase-name` or `\Capitalized-name` to get the lowercase or uppercase Greek letter
> When the uppercase Greek letter is identical to a Latin letter, just type the capital letter

|   Input   | Display |  Input   | Display |   Input   | Display |   Input   | Display |
| :------: | :--: | :-----: | :--: | :------: | :--: | :------: | :--: |
|  \alpha  |  α   |    A    |  A   |  \beta   |  β   |    B     |  B   |
|  \gamma  |  γ   | \Gamma  |  Γ   |  \delta  |  δ   |  \Delta  |  Δ   |
| \epsilon |  ϵ   |    E    |  E   |  \zeta   |  ζ   |    Z     |  Z   |
|   \eta   |  η   |    H    |  H   |  \theta  |  θ   |  \Theta  |  Θ   |
|  \iota   |  ιι  |   \I    |  I   |  \kappa  |  κ   |    K     |  K   |
| \lambda  |  λ   | \Lambda |  Λ   |   \mu    |  μ   |    M     |  M   |
|   \nu    |  ν   |    N    |  N   |   \xi    |  ξ   |   \Xi    |  Ξ   |
|    o     |  o   |    O    |  O   |   \pi    |  π   |   \Pi    |  Π   |
|   \rho   |  ρ   |    P    |  P   |  \sigma  |  σ   |  \Sigma  |  Σ   |
|   \tau   |  τ   |    T    |  T   | \upsilon |  υ   | \Upsilon |  Υ   |
|   \phi   |  ϕ   |  \Phi   |  Φ   |   \chi   |  χ   |    X     |  X   |
|   \psi   |  ψ   |  \Psi   |  Ψ   |  \omega  |  ω   |  \Omega  |  Ω   |

$$
\alpha \quad 
A \quad 

\beta \quad 
B \quad 

\gamma \quad
\Gamma \quad

\delta \quad
\Delta \quad

\phi \quad
\Phi \quad

\pi \quad
\Pi \quad

\omega \quad
\Omega \quad
$$

> Some letters have dedicated variant forms starting with `\var`

|   Lowercase   |  Uppercase  |    Variant     | Display  |
| :------: | :----: | :---------: | :---: |
| \epsilon |   E    | \varepsilon | ϵ E ε |
|  \theta  | \Theta |  \vartheta  | θ Θ ϑ |
|   \rho   |   P    |   \varrho   | ρ P ϱ |
|  \sigma  | \Sigma |  \varsigma  | σ Σ ς |
|   \phi   |  \Phi  |   \varphi   | ϕ Φ φ |

$$
\epsilon \quad 
\varepsilon \quad

| \quad

\theta  \quad 
\vartheta  \quad 

| \quad

\rho  \quad 
\varrho  \quad 

| \quad

\sigma  \quad 
\varsigma  \quad

| \quad

\phi  \quad 
\varphi  \quad
$$

## Relational operators

> To render a symbol larger or smaller, prefix it with `\large` or `\small`

|   Input   | Display |    Input    | Display |   Input    | Display |    Input    | Display |
| :------: | :--: | :--------: | :--: | :-------: | :--: | :--------: | :--: |
|   \pm    |  ±   |   \times   |  ×   |   \div    |  ÷   |    \mid    |  ∣   |
|  \nmid   |  ∤   |   \cdot    |  ⋅   |   \circ   |  ∘   |    \ast    |  ∗   |
| \bigodot |  ⨀   | \bigotimes |  ⨂   | \bigoplus |  ⨁   |    \leq    |  ≤   |
|   \geq   |  ≥   |    \neq    |  ≠   |  \approx  |  ≈   |   \equiv   |  ≡   |
|   \sum   |  ∑   |   \prod    |  ∏   |  \coprod  |  ∐   | \backslash |  ∖   |

$$
\pm \,
\times \,
\div \,
\mid \,
\nmid \,
\cdot \,
\circ \,
\ast \,
\bigodot \,
\bigotimes \,
\bigoplus \,

\leq \,
\geq \,
\neq \,
\approx \,


\equiv \,
\sum \,
\prod \,
\coprod \,
\backslash \,

\large\bigodot \,
\bigodot \,
\small\bigodot \,
$$



## Set operators

|   Input    | Display |   Input    | Display |   Input    | Display |
| :-------: | :--: | :-------: | :--: | :-------: | :--: |
| \emptyset |  ∅   |    \in    |  ∈   |  \notin   |  ∉   |
|  \subset  |  ⊂   |  \supset  |  ⊃   | \subseteq |  ⊆   |
| \supseteq |  ⊇   |  \bigcap  |  ⋂   |  \bigcup  |  ⋃   |
|  \bigvee  |  ⋁   | \bigwedge |  ⋀   | \biguplus |  ⨄   |

$$
\emptyset \,
\in \,
\notin \,

\subset \,
\subseteq \,
\supset \,
\supseteq \,

\bigcap \,
\bigcup \,
\bigvee \,
\bigwedge \,
\biguplus \,
$$

## Logarithmic operators

| Input | Display | Input | Display | Input | Display |
| :--: | :--: | :--: | :--: | :--: | :--: |
| \log | log  | \lg  |  lg  | \ln  |  ln  |

$$
\large\log \, \log  \, \small\log  \\
\large\ln \, \ln  \, \small\ln  \\
\large\lg \, \lg  \, \small\lg  
$$

## Trigonometric operators

|   Input   | Display | Input | Display |   Input   | Display |
| :------: | :--: | :--: | :--: | :------: | :--: |
| 30^\circ | 30∘  | \bot |  ⊥   | \angle A |  ∠A  |
|   \sin   | sin  | \cos | cos  |   \tan   | tan  |
|   \csc   | csc  | \sec | sec  |   \cot   | cot  |

$$
\angle \, 30^\circ  \\
\sin \, \large\sin , \small\sin \\
\cos \, \large\cos , \small\cos \\
\tan \, \large\tan , \small\tan \\
\csc \, \large\csc , \small\csc \\
\sec \, \large\sec , \small\sec \\
\cot \, \large\cot , \small\cot
$$

## Calculus operators

|  Input   | Display |  Input  | Display |  Input  | Display |
| :-----: | :--: | :----: | :--: | :----: | :--: |
|  \int   |  ∫   | \iint  |  ∬   | \iiint |  ∭   |
| \iiiint |  ⨌   | \oint  |  ∮   | \prime |  ′   |
|  \lim   | lim  | \infty |  ∞   | \nabla |  ∇   |

## Logic operators

|   Input   | Display |    Input    | Display |    Input     | Display |
| :------: | :--: | :--------: | :--: | :---------: | :--: |
| \because |  ∵   | \therefore |  ∴   |             |      |
| \forall  |  ∀   |  \exists   |  ∃   | \not\subset |  ⊄   |
|  \not<   |  ≮   |   \not>    |  ≯   |    \not=    |  ≠   |

## Accents (hat symbols)

|  Input  | Display |    Input    | Display |
| :----: | :--: | :--------: | :--: |
|  \hat  |      |  \widehat  |      |
| \tilde |      | \widetilde |      |
| \check |      |   \breve   |      |
| \grave |      |   \acute   |      |

$$
\hat{xy} \, | \,
\widehat{xyz}

\\

\tilde{xy} \, | \,
\widetilde{xyz}

\\

\check{x} \, | \,
\breve{x} \, | \,
\grave{x} \, | \,
\acute{x} \,
$$

## Lines and connectives

|                      Input                      |
| :--------------------------------------------: |
|                     \fbox                      |
|                 \overleftarrow                 |
|                \overrightarrow                 |
|              \overleftrightarrow               |
|                \underleftarrow                 |
|                \underrightarrow                |
|              \underleftrightarrow              |
|                   \overline                    |
|                   \underline                   |
|              \overbrace{a+b+c+d}^              |
|             \underbrace{a+b+c+d}_              |
|    \overbrace{a+\underbrace{b+c}_{1.0}+d}^     |
| \underbrace{a\cdot a\cdots a}_{b\text{ times}} |


$$
\fbox{a + b + c} \, |  \,
\overline{a + b + c} \, |  \,
\underline{a + b + c} \, |  \,

\overleftarrow{ a + b + c} \, |  \,
\overrightarrow{ a + b + c} \, |  \,
\overleftrightarrow{ a + b + c} \, |  \,

\underleftarrow{ a + b + c} \, |  \,
\underrightarrow{ a + b + c} \, |  \,
\underleftrightarrow{ a + b + c} \, |  \,
$$

$$
\overbrace{a+b+c+d} \\
\overbrace{a+b+c+d}^{sample} \\
\overbrace{a+b+c+d}_{sample} \\
\overbrace{a + \underbrace{ b + c}_{1.0} + d}^ 
\underbrace{a \cdot a \cdots a}_{b \text{ times}}
$$

## Arrow symbols

|        Input         | Display |        Input         | Display |       Input       |        Display         |
| :-----------------: | :--: | :-----------------: | :--: | :--------------: | :-----------------: |
|         \to         |  →   |       \mapsto       |  ↦   | \underrightarrow | 1℃/min−→−−−−1℃/min→ |
|      \implies       |  ⟹   |        \iff         |  ⟺   |    \impliedby    |          ⟸          |


|        Input         | Display |        Input         | Display |
|        :----:      | :-:  |   :------:         | :-:  |
|      \uparrow       |  ↑  |      \Uparrow       |  ⇑  |
|     \downarrow      |  ↓  |     \Downarrow      |  ⇓  |
|     \leftarrow      |  ←  |     \Leftarrow      |  ⇐  |
|     \rightarrow     |  →  |     \Rightarrow     |  ⇒  |
|   \leftrightarrow   |  ↔  |   \Leftrightarrow   |  ⇔  |
|   \longleftarrow    |  ⟵  |   \Longleftarrow    |  ⟸  |
|   \longrightarrow   |  ⟶  |   \Longrightarrow   |  ⟹  |
| \longleftrightarrow |  ⟷  | \Longleftrightarrow |  ⟺  |

$$
\uparrow \, | \,
\downarrow \, | \,
\leftarrow \, | \,
\rightarrow \, | \,
\leftrightarrow \, | \,
\longleftarrow \, | \,
\longrightarrow \, | \,
\longleftrightarrow

\\

\Uparrow \, | \,
\Downarrow \, | \,
\Leftarrow \, | \,
\Rightarrow \, | \,
\Leftrightarrow \, | \,
\Longleftarrow \, | \,
\Longrightarrow \, | \,
\Longleftrightarrow
$$



## Font styles

> By default, formulas are typeset in italic

| Input |   Description   | Input |    Description    |
| :---: | :-------------: | :---: | :---------------: |
| \rm   |      Roman      | \cal  |      Script       |
| \it   |     Italic      | \Bbb  | Blackboard bold   |
| \bf   |      Bold       | \mit  |   Math italic     |
| \sf   |   Sans-serif    | \scr  |   Calligraphic    |
| \tt   |   Typewriter    | \frak | Old German (Fraktur) |

$$
\rm{sample} \,|\, 
\it{sample} \,|\,
\cal{sample} \,|\,
\Bbb{sample} \,|\,
\bf{sample} \,|\,
\mit{sample} \,|\,
\sf{sample} \,|\,
\scr{sample} \,|\,
\tt{sample} \,|\,
\frak{sample} \,
$$

## Braces and equation tags

> Use `\left` and `\right` to create parentheses ( ), brackets [ ] and braces { } that automatically match the content height.
> Put `\tag{tag}` before the end of a formula to number it

$$
f\left(
   \left[ 
     \frac{
       1+\left\{x,y\right\}
     }{
       \left(
          \frac{x}{y}+\frac{y}{x}
       \right)
       \left(u+1\right)
     }+a
   \right]^{3/2}
\right)
\tag{tag}
$$

> Use the `\middle` command to enlarge inline delimiters as well

$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$



## Spaces & line breaks

> Four widths of space are available: `\,`, `\;`, `\quad` and `\qquad`

$$
ab \\ 
a \, b \\ 
a \; b \\ 
a \quad b \\
a \qquad b \\
a \text{  } b 
$$

## Colors

> Use `\color{color}{text}` to change the color of a piece of text.
> Changing text color **requires browser support**; if the browser does not know the color you asked for, the text is rendered in black

|  Input  |  Input   |
| :----: | :-----: |
| black  |  grey   |
| silver |  white  |
| maroon |   red   |
| yellow |  lime   |
| olive  |  green  |
|  teal  |  auqa   |
|  blue  |  navy   |
| purple | fuchsia |

$$
\color{black}{\frac{a-1}{b-1}} \,|\,
\color{grey}{\frac{a-1}{b-1}}  \,|\,
\color{silver}{\frac{a-1}{b-1}}  \,|\,
\color{blue}{\frac{a-1}{b-1}}  \,|\,
\color{purple}{\frac{a-1}{b-1}}  \,|\,
\color{navy}{\frac{a-1}{b-1}}  \,|\,
\color{auqa}{\frac{a-1}{b-1}}  \,|\,
\color{fuchsia}{\frac{a-1}{b-1}}  \,|\,
\color{lime}{\frac{a-1}{b-1}}  \,|\,
\color{olive}{\frac{a-1}{b-1}}  \,|\,
\color{teal}{\frac{a-1}{b-1}}
$$

> Enter `\color{#rgb}{text}` to define more colors; `r` `g` `b` accept `0-9` and `a-f` and express the intensity (saturation) of red, green and blue

$$
\color{#000fff}{\frac{a-1}{b-1}} \,|\,
\color{#fff000}{\frac{a-1}{b-1}} \,|\,
\color{#00ff00}{\frac{a-1}{b-1}} \,|\,
\color{#ffffff}{\frac{a-1}{b-1}} \,|\,
\color{#000000}{\frac{a-1}{b-1}} \,|\,
\color{#FFC0CB}{\frac{a-1}{b-1}}
$$

## Strike-through

> Use `\require{cancel}` inside a formula to enable **partial strike-through**.
> Once declared, use `\cancel{chars}`, `\bcancel{chars}`, `\xcancel{chars}` and `\cancelto{chars}` for various partial strike-through effects

$$
\require{cancel}
\verb|y+\cancel{x}|  \qquad y+\cancel{x} \\
\verb|\cancel{y+x}|  \qquad \cancel{y+x} \\
\verb|y+\bcancel{x}| \qquad y+\bcancel{x} \\
\verb|y+\xcancel{x}| \qquad y+\xcancel{x} \\
\verb|y+\cancelto{0}{x}| \qquad y+\cancelto{0}{x} \\
\verb+\frac{1\cancel9}{\cancel95} = \frac15+ \qquad \frac{1\cancel9}{\cancel95} = \frac15 \\
$$

> Use `\enclose{effect}{chars}` for full-width strike-through effects.
> The effects are `horizontalstrike`, `verticalstrike`, `updiagonalstrike` and `downdiagonalstrike`, and they can be combined

$$
\require{enclose}
\verb|\enclose{horizontalstrike}{x+y}| \qquad \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{\frac xy}| \qquad \enclose{verticalstrike}{\frac xy}\\
\verb|\enclose{updiagonalstrike}{x+y}| \qquad \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| \qquad \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{horizontalstrike,updiagonalstrike}{x+y}| \qquad \enclose{horizontalstrike,updiagonalstrike}{x+y}\\
$$

> The `\enclose{}{}` command can also draw a frame or a circle around the content

|                            |                              |
| :------------------------: | :--------------------------: |
|            Input            |             Input             |
|     \enclose{longdiv}      |     \enclose{actuarial}      |
|     \enclose{radical}      |        \enclose{box}         |
|    \enclose{roundedbox}    |       \enclose{circle}       |
|       \enclose{left}       |       \enclose{right}        |
|       \enclose{top}        |       \enclose{bottom}       |
| \enclose{updiagonalstrike} | \enclose{downdiagonalstrike} |
|  \enclose{verticalstrike}  |  \enclose{horizontalstrike}  |
|     \enclose{madruwb}      |  \enclose{updiagonalarrow}   |
|   \enclose{phasorangle}    |                              |

$$
\verb|\enclose{longdiv}{x+y}| \qquad \enclose{longdiv}{x+y}\\
\verb|\enclose{radical}{x+y}| \qquad \enclose{radical}{x+y}\\
\verb|\enclose{roundedbox}{x+y}| \qquad \enclose{roundedbox}{x+y}\\
\verb|\enclose{left}{x+y}| \qquad \enclose{left}{x+y}\\
\verb|\enclose{top}{x+y}| \qquad \enclose{top}{x+y}\\
\verb|\enclose{actuarial}{x+y}| \qquad \enclose{actuarial}{x+y}\\
\verb|\enclose{box}{x+y}| \qquad \enclose{box}{x+y}\\
\verb|\enclose{circle}{x+y}| \qquad \enclose{circle}{x+y}\\
\verb|\enclose{right}{x+y}| \qquad \enclose{right}{x+y}\\
\verb|\enclose{bottom}{x+y}| \qquad \enclose{bottom}{x+y}\\
\verb|\enclose{updiagonalstrike}{x+y}| \qquad \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| \qquad \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{x+y}| \qquad \enclose{verticalstrike}{x+y}\\
\verb|\enclose{horizontalstrike}{x+y}| \qquad \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{madruwb}{x+y}| \qquad \enclose{madruwb}{x+y}\\
\verb|\enclose{updiagonalarrow}{x+y}| \qquad \enclose{updiagonalarrow}{x+y}\\
\verb|\enclose{phasorangle}{x+y}| \qquad \enclose{phasorangle}{x+y}\\
$$

## Matrices

> Start with `begin{matrix}`,
>
> end with `end{matrix}`,
>
> put the matrix elements in between, separated by `&` (i.e. columns),
>
> and end each row with `\\`.

```
$$
    \begin{matrix}
    1 & x & x^2 \\
    1 & y & y^2 \\
    1 & z & z^2 \\
    \end{matrix}
$$
```

$$
\begin{matrix}
1 & x & x^2 \\
1 & y & y^2 \\
1 & z & z^2 \\
\end{matrix}
$$

$$
\qquad \text{matrix : } \,
\begin{matrix} 
    1 & 2 \\ 
    3 & 4 \\ 
\end{matrix} 
\qquad \text{pmatrix : } \,
\begin{pmatrix} 
    1 & 2 \\ 
    3 & 4 \\
\end{pmatrix}
\\
\qquad \text{bmatrix : } \,
\begin{bmatrix} 
    1 & 2 \\ 
    3 & 4 \\ 
\end{bmatrix}
\qquad \text{Bmatrix : } \,
\begin{Bmatrix} 
	1 & 2 \\ 
	3 & 4 \\ 
\end{Bmatrix}
\qquad \text{vmatrix : } \,
\begin{vmatrix} 
	1 & 2 \\ 
	3 & 4 \\ 
\end{vmatrix}
\qquad \text{Vmatrix : } \,
\begin{Vmatrix} 
	1 & 2 \\ 
	3 & 4 \\ 
\end{Vmatrix}
$$

```latex
$$
    \begin{pmatrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
    \end{pmatrix}
$$
```

> Use `\cdots`, `\ddots`, `\vdots` to enter ellipses
```latex
$$	
    \begin{pmatrix}    
    1 & a_1 & a_1^2 & \cdots & a_1^n \\    
    1 & a_2 & a_2^2 & \cdots & a_2^n \\    
    \vdots & \vdots & \vdots & \ddots & \vdots \\    
    1 & a_m & a_m^2 & \cdots & a_m^n \\    
    \end{pmatrix}
$$

```


$$
\begin{pmatrix}
    1 & a_1 & a_1^2 & \cdots & a_1^n \\
    1 & a_2 & a_2^2 & \cdots & a_2^n \\
    \vdots & \vdots & \vdots & \ddots & \vdots \\
    1 & a_m & a_m^2 & \cdots & a_m^n \\
    \end{pmatrix}
$$

> `cc|c` inserts a divider between the second and third column of a three-column matrix

```
$$
\left[
    \begin{array}{cc|c}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{array}
\right]
\\
\left[
    \begin{array}{c|c|c}
      1 & 2 & 3 \\
      4 & 5 & 6
    \end{array}
\right]
$$
```

$$
\left[
    \begin{array}{cc|c}
      1&2&3\\
      4&5&6
    \end{array}
\right]
\\
\left[
    \begin{array}{c|c|c}
      1&2&3\\
      4&5&6
    \end{array}
\right]
$$

## Aligned equations

> Use `\begin{align}…\end{align}` to create a column of equations, ending each row with `\\`
> Note that {align} numbers the equations automatically; use {align*} to stop the automatic numbering

```latex
$$
\begin{align*}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
 & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
 & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
 & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
 & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align*}
$$
```

$$
\begin{align*}
\sqrt{37} & = \sqrt{\frac{73^2-1}{12^2}} \\
 & = \sqrt{\frac{73^2}{12^2}\cdot\frac{73^2-1}{73^2}} \\ 
 & = \sqrt{\frac{73^2}{12^2}}\sqrt{\frac{73^2-1}{73^2}} \\
 & = \frac{73}{12}\sqrt{1 - \frac{1}{73^2}} \\ 
 & \approx \frac{73}{12}\left(1 - \frac{1}{2\cdot73^2}\right)
\end{align*}
$$

> `\text` and `\tag` can be freely combined inside `{align}`
>
> A `\tag` takes precedence over the automatic number

```latex
$$
\begin{align}
   v + w & = 0  &\text{Given} \tag 1\\
   -w & = -w + 0 & \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) & \text{equations $(1)$ and $(2)$ } \tag 3
\end{align}
$$
```

$$
\begin{align}
   v + w & = 0  &\text{Given} \tag 1\\
   -w & = -w + 0 & \text{additive identity} \tag 2\\
   -w + 0 & = -w + (v + w) & \text{equations $(1)$ and $(2)$} \tag 3
\end{align}
$$

## Conditional expressions

> Use `begin{cases}` to create a set of conditional expressions,
>
> **put `&` in each row to mark what should be aligned**, and end each row with `\\`,
>
> finishing with `end{cases}`

```latex
$$
    f(n) =
    \begin{cases}
    n/2,  & \text{if $n$ is even} \\
    3n+1, & \text{if $n$ is odd}
    \end{cases}
$$
```

$$
f(n) =
    \begin{cases}
    n/2,  & \text{if $n$ is even} \\
    3n+1, & \text{if $n$ is odd}
    \end{cases}
$$

> Left-aligned

```latex
$$
\left.
    \begin{array}{l}
    \text{if $n$ is even:} & n / 2 \\
    \text{if $n$ is odd:} & 3n + 1
    \end{array}
\right\}
=f(n)
$$
```

$$
\left.
    \begin{array}{l}
    \text{if $n$ is even:} & n / 2 \\
    \text{if $n$ is odd:} & 3n + 1
    \end{array}
\right\}
=f(n)
$$

> Use `\\[2ex]` instead of `\\` at the end of a row to give the editor more row height
>
> **One `[ex]` is one "X-Height", i.e. the height of the letter x. Use as many as needed, e.g. `[3ex]`, `[4ex]`**

```latex
$$
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\
	3n + 1, & \text{if $n$ is odd}
\end{cases}
\qquad 
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
	3n + 1, & \text{if $n$ is odd}
\end{cases}
\qquad 
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[4ex]
	3n + 1, & \text{if $n$ is odd}
\end{cases}
$$
```

$$
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\
	3n + 1, & \text{if $n$ is odd}
\end{cases}
\qquad 
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[2ex]
	3n + 1, & \text{if $n$ is odd}
\end{cases}
\qquad 
f(n) = 
\begin{cases}
	\frac{n}{2},  & \text{if $n$ is even} \\[4ex]
	3n + 1, & \text{if $n$ is odd}
\end{cases}
$$

## Tables

> Arrays and tables both start with `begin{array}`,
>
> followed by the number of columns and the text alignment of each column; `c`, `l`, `r` mean center, left and right
>
> For a vertical divider insert `|` in the column spec; for a horizontal divider insert `\hline` before the next row
>
> As with matrices, each element must be separated by `&` and each row ends with `\\`
>
> Finally finish the array with `end{array}`

```latex
$$
\begin{array}{c|lcr}
	n & \text{left} & \text{center} & \text{right} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$
```

$$
\begin{array}{c|lcr}
	n & \text{left} & \text{center} & \text{right} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$

## Systems of equations

> Use `\begin{array}…\end{array}` and `\left\{…\right.` to create a system of equations

```latex
$$
\text{ using an array }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right. 
\\\text{ using cases }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$
```

$$
\text{ using an array }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right.
\\\text{ using cases }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$

## Continued fractions

> Use `\cfrac` to create a continued fraction

```latex
$$
x = a_0   + \cfrac{ 1^2 }{ a_1 + 
				\cfrac{ 2^2 }{a_2 + 
					\cfrac{ 3^2 }{a_3 + 
						\cfrac{ 4^4 }{ a_4 + \cdots }
					}
         		}
         	}
$$
```

$$
x = a_0   + \cfrac{ 1^2 }{a_1
              	+ \cfrac{ 2^2 }{a_2
          			+ \cfrac{ 3^2 }{a_3 + \cfrac{ 4^4 }{a_4 + \cdots}}
         		}
         	}
$$

## Commutative diagrams

> Use a `\require{AMScd}` line to enable commutative diagrams
>
> Start with `begin{CD}`
>
> Put the diagram elements in between, separated by `&`, ending each row with `\\`
>
> Finish with `end{CD}`

| Symbol | Description         |
| ------ | ------------------- |
| @>>>   | right arrow    	 |
| @<<<   | left arrow     	 |
| @VVV   | down arrow     	 |
| @AAA   | up arrow       	|
| @=     | horizontal double line 	|
| @\| | vertical double line |
| @.     | no arrow   	 |

```latex
$$
\require{AMScd}
\begin{CD}
    A @> a >> B\\
    @V b V V\# @VV c V\\
    C @>> d > D
\end{CD}
\\ 
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @. @AAA @| \\
    D @= E @<<< F
\end{CD}
$$
```

$$
\require{AMScd}
\begin{CD}
    A 		@>{a}>>   B \\
    @V{b}VV \# 		  @VV{c}V \\
    C 		@>>{d}>   D
\end{CD}
\\ 
\begin{CD}
    A @>>> B @>{\text{very long label}}>> C \\
    @.     @AAA                          @| \\
    D @=   E @<<<                         F
\end{CD}
\\
\\
\begin{CD}
@>>{right arrow}> \\
@<<{left arrow}< \\
@VV{down arrow}V \\
@AA{up arrow}A \\
@={horizontal double line} \\
@|{vertical double line} \\
@.{no arrow} \\
\end{CD}
$$
