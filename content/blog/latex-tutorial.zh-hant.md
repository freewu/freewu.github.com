---
title: "Latex Tutorial"
date: 2023-05-09
description: "Latex Tutorial"
author: "bluefrog"
type: "post"
slug: "latex-tutorial"
---

## 上標和下標

> 上標（Powers）使用 ^ 來表示，n^2。
> 下標（Indices）使用 _ 表示，a_2

```latex
$$
{^1_2}a{^3_4} + n^2 - a_2
$$				
```
$$
{^1_2}a{^3_4} + n^2 - a_2
$$

|  輸入   | 顯示 |  輸入   | 顯示 |
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

>  要顯示大號的括號或分隔符時，要用 `\left` 和 `\right` 命令 

```latex
$$
f(x)=\left(\frac{x}{2}\right)
$$
```
$$
f(x)=\left(\frac{x}{2}\right)
$$

## 分數

>  分數使用 `\frac{numerator}{denominator}` 命令插入 

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

>  分式很複雜，亦可使用 `分子 \over 分母` 命令 
```latex
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$
```
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$

## 開方

>  使用`sqrt[根指數，省略時為2]{被開方數}`命令來輸入開方 
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$

## 省略號



>  `\ldots` 表示與文本底線對齊的省略號 
```latex
$$
1+2+\ldots+n
$$
```
$$
1+2+\ldots+n
$$

>  `\cdots` 表示與文本中線對齊的省略號 
```latex
$$
1+2+\cdots+n
$$
```
$$
1+2+\cdots+n
$$
## 向量

> 向量是一種既有大小又有方向的量，又稱為向量。一般來說，在物理學中稱作向量，例如速度、加速度、力等等就是這樣的量。捨棄實際含義，就抽象為數學中的概念──向量 
>
>  使用`\vec{向量}`來自動產生一個向量 
```latex
$$
\vec{a} \cdot \vec{b}=0
$$
```
$$
\vec{a} \cdot \vec{b}=0
$$

>  使用  `\overrightarrow` `\overleftrightarrow`  `\overleftarrow` 等命令定義字母上的符號 
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

## 積分

>  使用`\int_積分下限^積分上限{被積表示式}`來輸入一個積分 

```latex
$$
\int_0^1 {x^2dx}
$$
```


$$
\int_0^1 {x^2dx}
$$

## 極限

>  使用`\lim_{變數 \to 表示式} 表示式`來輸入一個極限。如有需求，可以更改`\to`符號至任意符號 

```latex
$$ 
\lim_{ n \to +\infty } \frac{1}{ n( n + 1) } \quad and \quad 
\lim_{ x \leftarrow { 示例 } } \frac{1}{ n( n + 1) } 
$$
```

$$
\lim_{n \to +\infty} \frac{1}{n(n+1)} \quad and \quad 
\lim_{x\leftarrow{示例}} \frac{1}{n(n+1)}
$$

##  累乘，並集，交集 

>  使用`\sum_{下標表達式}^{上標表達式}{表示式}`來輸入一個累加表示式 
>
>  使用`\prod_{下標表達式}^{上標表達式}{表示式}`來輸入一個並集
>
>  使用`\bigcup_{下標表達式}^{上標表達式}{表示式}`來輸入一個交集

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

## 希臘字母

>  輸入`\小寫希臘字母英文全稱`,`\首字母大寫希臘字母英文全稱`來分別輸入小寫和大寫希臘字母
> 對於大寫希臘字母與現有字母相同的，直接輸入大寫字母即可 

|   輸入   | 顯示 |  輸入   | 顯示 |   輸入   | 顯示 |   輸入   | 顯示 |
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

>  以 `\var-` 開頭的部分字母變數專用形式

|   小寫   |  大寫  |    變數     | 顯示  |
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

## 關係運算符

>  若需要顯示更大或更小的字元，在符號前面插入`\large`或`\small`命令 

|   輸入   | 顯示 |    輸入    | 顯示 |   輸入    | 顯示 |    輸入    | 顯示 |
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



## 集合運算子

|   輸入    | 顯示 |   輸入    | 顯示 |   輸入    | 顯示 |
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

##  對數運算子

| 輸入 | 顯示 | 輸入 | 顯示 | 輸入 | 顯示 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| \log | log  | \lg  |  lg  | \ln  |  ln  |

$$
\large\log \, \log  \, \small\log  \\
\large\ln \, \ln  \, \small\ln  \\
\large\lg \, \lg  \, \small\lg  
$$

## 三角運算子

|   輸入   | 顯示 | 輸入 | 顯示 |   輸入   | 顯示 |
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

## 微積分運算子

|  輸入   | 顯示 |  輸入  | 顯示 |  輸入  | 顯示 |
| :-----: | :--: | :----: | :--: | :----: | :--: |
|  \int   |  ∫   | \iint  |  ∬   | \iiint |  ∭   |
| \iiiint |  ⨌   | \oint  |  ∮   | \prime |  ′   |
|  \lim   | lim  | \infty |  ∞   | \nabla |  ∇   |

## 邏輯運算子

|   輸入   | 顯示 |    輸入    | 顯示 |    輸入     | 顯示 |
| :------: | :--: | :--------: | :--: | :---------: | :--: |
| \because |  ∵   | \therefore |  ∴   |             |      |
| \forall  |  ∀   |  \exists   |  ∃   | \not\subset |  ⊄   |
|  \not<   |  ≮   |   \not>    |  ≯   |    \not=    |  ≠   |

## 戴帽符號

|  輸入  | 顯示 |    輸入    | 顯示 |
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

## 連線符號

|                      輸入                      |
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

## 箭頭符號

|        輸入         | 顯示 |        輸入         | 顯示 |       輸入       |        顯示         |
| :-----------------: | :--: | :-----------------: | :--: | :--------------: | :-----------------: |
|         \to         |  →   |       \mapsto       |  ↦   | \underrightarrow | 1℃/min−→−−−−1℃/min→ |
|      \implies       |  ⟹   |        \iff         |  ⟺   |    \impliedby    |          ⟸          |


|        輸入         | 顯示 |        輸入         | 顯示 |
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



## 字型轉換

>  一般情況下，公式預設為義大利體italicitalic

| 輸入 |   說明   | 輸入  |    說明    |
| :--: | :------: | :---: | :--------: |
| \rm  |  羅馬體  | \cal  |    花體    |
| \it  | 義大利體 | \Bbb  |  黑板粗體  |
| \bf  |   粗體   | \mit  |  數學斜體  |
| \sf  |   粗體   | \scr  |   手寫體   |
| \tt  | 印表機體 | \frak | 舊德式字型 |

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

## 大括號和行標

>  使用`\left`和`\right`來建立自動匹配高度的 (圓括號)，[方括號] 和 {花括號} 。
> 在每個公式末尾前使用`\tag{行標}`來實現行標 

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
\tag{行標}
$$

>  需要將行內顯示的分隔符也變大，可以使用`\middle`命令 

$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$



## 空格 & 換行

>  有四種寬度的空格可以使用:`\,`、`\;`、`\quad`和`\qquad` 

$$
ab \\ 
a \, b \\ 
a \; b \\ 
a \quad b \\
a \qquad b \\
a \text{  } b 
$$

## 顏色

> 使用`\color{顏色}{文字}`來更改特定的文字顏色。
> 更改文字顏色**需要瀏覽器支援**，如果瀏覽器不知道你所需的顏色，那麼文字將被渲染為黑色 

|  輸入  |  輸入   |
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

>  輸入`\color {#rgb} {text}`來自定義更多的顏色其中`#rgb`的`r` `g` `b`可輸入`0-9`和`a-f`來表示紅色、綠色和藍色的純度（飽和度） 

$$
\color{#000fff}{\frac{a-1}{b-1}} \,|\,
\color{#fff000}{\frac{a-1}{b-1}} \,|\,
\color{#00ff00}{\frac{a-1}{b-1}} \,|\,
\color{#ffffff}{\frac{a-1}{b-1}} \,|\,
\color{#000000}{\frac{a-1}{b-1}} \,|\,
\color{#FFC0CB}{\frac{a-1}{b-1}}
$$

## 刪除線

>  在公式內使用`\require{cancel}`來允許**片段刪除線**的顯示。
> 宣告片段刪除線後，使用`\cancel{字元}`、`\bcancel{字元}`、`\xcancel{字元}`和`\cancelto{字元}`來實現各種片段刪除線效果 

$$
\require{cancel}
\verb|y+\cancel{x}|  \qquad y+\cancel{x} \\
\verb|\cancel{y+x}|  \qquad \cancel{y+x} \\
\verb|y+\bcancel{x}| \qquad y+\bcancel{x} \\
\verb|y+\xcancel{x}| \qquad y+\xcancel{x} \\
\verb|y+\cancelto{0}{x}| \qquad y+\cancelto{0}{x} \\
\verb+\frac{1\cancel9}{\cancel95} = \frac15+ \qquad \frac{1\cancel9}{\cancel95} = \frac15 \\
$$

> 使用`\enclose{刪除線效果}{字元}`來實現各種整段刪除線效果。
> 其中，刪除線效果有`horizontalstrike`、`verticalstrike`、`updiagonalstrike`和`downdiagonalstrike`，可疊加使用 

$$
\require{enclose}
\verb|\enclose{horizontalstrike}{x+y}| \qquad \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{\frac xy}| \qquad \enclose{verticalstrike}{\frac xy}\\
\verb|\enclose{updiagonalstrike}{x+y}| \qquad \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| \qquad \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{horizontalstrike,updiagonalstrike}{x+y}| \qquad \enclose{horizontalstrike,updiagonalstrike}{x+y}\\
$$

>  `\enclose{}{}`命令還可以產生包圍的邊框和圓 

|                            |                              |
| :------------------------: | :--------------------------: |
|            輸入            |             輸入             |
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

## 矩陣

> 在開頭使用`begin{matrix}`，
>
> 在結尾使用`end{matrix}`，
>
> 在中間插入矩陣元素，每個元素之間插入`&`，也可以說是空格，
>
> 並在每行結尾處使用`\\`。 

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

> 使用`\cdots`,`\ddots`,`\vdots`來輸入省略符號
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

>  `cc|c`代表在一個三列矩陣中的第二和第三列之間插入分割線 

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

## 方程式序列

> 使用`\begin{align}…\end{align}`來創造一列方程式，其中在每行結尾處使用`\\`
> 請注意 {align} 語句是 自動編號 的，使用 {align*} 宣告停止自動編號 

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

>  在`{align}`中靈活組合`\text`和`\tag`語句
>
> `\tag`語句編號優先順序高於自動編號 

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

## 條件表示式

>  用`begin{cases}`來創造一組條件表示式，
>
> **在每一行條件中插入`&`來指定需要對齊的內容**，並在每一行結尾處使用`\\`，
>
> 以`end{cases}`結束 

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

> 左對齊

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

>  使用`\\[2ex]`語句代替該行末尾的`\\`來讓編輯器適配行高 
>
>  **一個`[ex]`指一個 "X-Height"，即x字母高度。可以根據情況指定多個`[ex]`，如`[3ex]`、`[4ex]`** 

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

## 表格

>  陣列和表格均以`begin{array}`開頭，
>
> 其後定義列數及每一列的文本對齊屬性，`c`,`l`,`r`分別代表居中、左對齊及右對齊
>
> 若需要插入垂直分割線，在定義式中插入`|`，若要插入水平分割線，在下一行輸入前插入`\hline`
>
> 與矩陣相似，每行元素間均須要插入`&`，每行元素以`\\`結尾
>
> 最後以`end{array}`結束陣列 

```latex
$$
\begin{array}{c|lcr}
	n & \text{左對齊} & \text{居中對齊} & \text{右對齊} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$
```

$$
\begin{array}{c|lcr}
	n & \text{左對齊} & \text{居中對齊} & \text{右對齊} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$

## 方程組

>  使用`\begin{array}…\end{array}`和`\left\{…\right.`來建立一個方程組 

```latex
$$
\text{ 使用陣列來實現 }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right. 
\\\text{ 使用條件表示式來實現 }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$
```

$$
\text{ 使用陣列來實現 }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right.
\\\text{ 使用條件表示式來實現 }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$

##  連分數

>  使用`\cfrac`來建立一個連分數 

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

## 交換圖表

> 使用一行`\require{AMScd}`語句來允許交換圖表的顯示
>
> 在開頭使用`begin{CD}`
>
> 在中間插入圖表元素，每個元素之間插入`&`，並在每行結尾處使用`\\` 
>
> 在結尾使用`end{CD}`

| 符號    | 說明         |
| ------ | ----------  |
| @>>>   | 右箭頭    	 |
| @<<<   | 左箭頭     	 |
| @VVV   | 下箭頭     	 |
| @AAA   | 代表上箭頭 	|
| @=     | 水平雙實線 	|
| @\| | 垂直雙實線 |
| @.     | 沒有箭頭   	 |

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
@>>{右箭頭}> \\
@<<{左箭頭}< \\
@VV{下箭頭}V \\
@AA{上箭頭}A \\
@={水平雙實線} \\
@|{垂直雙實線} \\
@.{沒有箭頭} \\
\end{CD}
$$
