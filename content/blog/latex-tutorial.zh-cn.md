---
title: "Latex Tutorial"
date: 2023-05-09
description: "Latex Tutorial"
author: "bluefrog"
type: "post"
slug: "latex-tutorial"
---

## 上标和下标

> 上标（Powers）使用 ^ 来表示，n^2。
> 下标（Indices）使用 _ 表示，a_2

```latex
$$
{^1_2}a{^3_4} + n^2 - a_2
$$				
```
$$
{^1_2}a{^3_4} + n^2 - a_2
$$

|  输入   | 显示 |  输入   | 显示 |
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

>  要显示大号的括号或分隔符时，要用 `\left` 和 `\right` 命令 

```latex
$$
f(x)=\left(\frac{x}{2}\right)
$$
```
$$
f(x)=\left(\frac{x}{2}\right)
$$

## 分数

>  分数使用 `\frac{numerator}{denominator}` 命令插入 

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

>  分式很复杂，亦可使用 `分子 \over 分母` 命令 
```latex
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$
```
$$
\frac{a-1}{b-1} and {a+1\over b+1}
$$

## 开方

>  使用`sqrt[根指数，省略时为2]{被开方数}`命令来输入开方 
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$
```
$$
\sqrt{2} \quad and \quad \sqrt[n]{3}
$$

## 省略号



>  `\ldots` 表示与文本底线对齐的省略号 
```latex
$$
1+2+\ldots+n
$$
```
$$
1+2+\ldots+n
$$

>  `\cdots` 表示与文本中线对齐的省略号 
```latex
$$
1+2+\cdots+n
$$
```
$$
1+2+\cdots+n
$$
## 矢量

> 矢量是一种既有大小又有方向的量，又称为向量。一般来说，在物理学中称作矢量，例如速度、加速度、力等等就是这样的量。舍弃实际含义，就抽象为数学中的概念──向量 
>
>  使用`\vec{矢量}`来自动产生一个矢量 
```latex
$$
\vec{a} \cdot \vec{b}=0
$$
```
$$
\vec{a} \cdot \vec{b}=0
$$

>  使用  `\overrightarrow` `\overleftrightarrow`  `\overleftarrow` 等命令定义字母上的符号 
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

## 积分

>  使用`\int_积分下限^积分上限{被积表达式}`来输入一个积分 

```latex
$$
\int_0^1 {x^2dx}
$$
```


$$
\int_0^1 {x^2dx}
$$

## 极限

>  使用`\lim_{变量 \to 表达式} 表达式`来输入一个极限。如有需求，可以更改`\to`符号至任意符号 

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

##  累乘，并集，交集 

>  使用`\sum_{下标表达式}^{上标表达式}{表达式}`来输入一个累加表达式 
>
>  使用`\prod_{下标表达式}^{上标表达式}{表达式}`来输入一个并集
>
>  使用`\bigcup_{下标表达式}^{上标表达式}{表达式}`来输入一个交集

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

## 希腊字母

>  输入`\小写希腊字母英文全称`,`\首字母大写希腊字母英文全称`来分别输入小写和大写希腊字母
> 对于大写希腊字母与现有字母相同的，直接输入大写字母即可 

|   输入   | 显示 |  输入   | 显示 |   输入   | 显示 |   输入   | 显示 |
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

>  以 `\var-` 开头的部分字母变量专用形式

|   小写   |  大写  |    变量     | 显示  |
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

## 关系运算符

>  若需要显示更大或更小的字符，在符号前面插入`\large`或`\small`命令 

|   输入   | 显示 |    输入    | 显示 |   输入    | 显示 |    输入    | 显示 |
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



## 集合运算符

|   输入    | 显示 |   输入    | 显示 |   输入    | 显示 |
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

##  对数运算符

| 输入 | 显示 | 输入 | 显示 | 输入 | 显示 |
| :--: | :--: | :--: | :--: | :--: | :--: |
| \log | log  | \lg  |  lg  | \ln  |  ln  |

$$
\large\log \, \log  \, \small\log  \\
\large\ln \, \ln  \, \small\ln  \\
\large\lg \, \lg  \, \small\lg  
$$

## 三角运算符

|   输入   | 显示 | 输入 | 显示 |   输入   | 显示 |
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

## 微积分运算符

|  输入   | 显示 |  输入  | 显示 |  输入  | 显示 |
| :-----: | :--: | :----: | :--: | :----: | :--: |
|  \int   |  ∫   | \iint  |  ∬   | \iiint |  ∭   |
| \iiiint |  ⨌   | \oint  |  ∮   | \prime |  ′   |
|  \lim   | lim  | \infty |  ∞   | \nabla |  ∇   |

## 逻辑运算符

|   输入   | 显示 |    输入    | 显示 |    输入     | 显示 |
| :------: | :--: | :--------: | :--: | :---------: | :--: |
| \because |  ∵   | \therefore |  ∴   |             |      |
| \forall  |  ∀   |  \exists   |  ∃   | \not\subset |  ⊄   |
|  \not<   |  ≮   |   \not>    |  ≯   |    \not=    |  ≠   |

## 戴帽符号

|  输入  | 显示 |    输入    | 显示 |
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

## 连线符号

|                      输入                      |
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

## 箭头符号

|        输入         | 显示 |        输入         | 显示 |       输入       |        显示         |
| :-----------------: | :--: | :-----------------: | :--: | :--------------: | :-----------------: |
|         \to         |  →   |       \mapsto       |  ↦   | \underrightarrow | 1℃/min−→−−−−1℃/min→ |
|      \implies       |  ⟹   |        \iff         |  ⟺   |    \impliedby    |          ⟸          |


|        输入         | 显示 |        输入         | 显示 |
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



## 字体转换

>  一般情况下，公式默认为意大利体italicitalic

| 输入 |   说明   | 输入  |    说明    |
| :--: | :------: | :---: | :--------: |
| \rm  |  罗马体  | \cal  |    花体    |
| \it  | 意大利体 | \Bbb  |  黑板粗体  |
| \bf  |   粗体   | \mit  |  数学斜体  |
| \sf  |   粗体   | \scr  |   手写体   |
| \tt  | 打印机体 | \frak | 旧德式字体 |

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

## 大括号和行标

>  使用`\left`和`\right`来创建自动匹配高度的 (圆括号)，[方括号] 和 {花括号} 。
> 在每个公式末尾前使用`\tag{行标}`来实现行标 

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
\tag{行标}
$$

>  需要将行内显示的分隔符也变大，可以使用`\middle`命令 

$$
\left\langle  
  q
\middle\|
  \frac{\frac{x}{y}}{\frac{u}{v}}
\middle| 
   p 
\right\rangle
$$



## 空格 & 换行

>  有四种宽度的空格可以使用:`\,`、`\;`、`\quad`和`\qquad` 

$$
ab \\ 
a \, b \\ 
a \; b \\ 
a \quad b \\
a \qquad b \\
a \text{  } b 
$$

## 颜色

> 使用`\color{颜色}{文字}`来更改特定的文字颜色。
> 更改文字颜色**需要浏览器支持**，如果浏览器不知道你所需的颜色，那么文字将被渲染为黑色 

|  输入  |  输入   |
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

>  输入`\color {#rgb} {text}`来自定义更多的颜色其中`#rgb`的`r` `g` `b`可输入`0-9`和`a-f`来表示红色、绿色和蓝色的纯度（饱和度） 

$$
\color{#000fff}{\frac{a-1}{b-1}} \,|\,
\color{#fff000}{\frac{a-1}{b-1}} \,|\,
\color{#00ff00}{\frac{a-1}{b-1}} \,|\,
\color{#ffffff}{\frac{a-1}{b-1}} \,|\,
\color{#000000}{\frac{a-1}{b-1}} \,|\,
\color{#FFC0CB}{\frac{a-1}{b-1}}
$$

## 删除线

>  在公式内使用`\require{cancel}`来允许**片段删除线**的显示。
> 声明片段删除线后，使用`\cancel{字符}`、`\bcancel{字符}`、`\xcancel{字符}`和`\cancelto{字符}`来实现各种片段删除线效果 

$$
\require{cancel}
\verb|y+\cancel{x}|  \qquad y+\cancel{x} \\
\verb|\cancel{y+x}|  \qquad \cancel{y+x} \\
\verb|y+\bcancel{x}| \qquad y+\bcancel{x} \\
\verb|y+\xcancel{x}| \qquad y+\xcancel{x} \\
\verb|y+\cancelto{0}{x}| \qquad y+\cancelto{0}{x} \\
\verb+\frac{1\cancel9}{\cancel95} = \frac15+ \qquad \frac{1\cancel9}{\cancel95} = \frac15 \\
$$

> 使用`\enclose{删除线效果}{字符}`来实现各种整段删除线效果。
> 其中，删除线效果有`horizontalstrike`、`verticalstrike`、`updiagonalstrike`和`downdiagonalstrike`，可叠加使用 

$$
\require{enclose}
\verb|\enclose{horizontalstrike}{x+y}| \qquad \enclose{horizontalstrike}{x+y}\\
\verb|\enclose{verticalstrike}{\frac xy}| \qquad \enclose{verticalstrike}{\frac xy}\\
\verb|\enclose{updiagonalstrike}{x+y}| \qquad \enclose{updiagonalstrike}{x+y}\\
\verb|\enclose{downdiagonalstrike}{x+y}| \qquad \enclose{downdiagonalstrike}{x+y}\\
\verb|\enclose{horizontalstrike,updiagonalstrike}{x+y}| \qquad \enclose{horizontalstrike,updiagonalstrike}{x+y}\\
$$

>  `\enclose{}{}`命令还可以产生包围的边框和圆 

|                            |                              |
| :------------------------: | :--------------------------: |
|            输入            |             输入             |
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

## 矩阵

> 在开头使用`begin{matrix}`，
>
> 在结尾使用`end{matrix}`，
>
> 在中间插入矩阵元素，每个元素之间插入`&`，也可以说是空格，
>
> 并在每行结尾处使用`\\`。 

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

> 使用`\cdots`,`\ddots`,`\vdots`来输入省略符号
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

>  `cc|c`代表在一个三列矩阵中的第二和第三列之间插入分割线 

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

> 使用`\begin{align}…\end{align}`来创造一列方程式，其中在每行结尾处使用`\\`
> 请注意 {align} 语句是 自动编号 的，使用 {align*} 声明停止自动编号 

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

>  在`{align}`中灵活组合`\text`和`\tag`语句
>
> `\tag`语句编号优先级高于自动编号 

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

## 条件表达式

>  用`begin{cases}`来创造一组条件表达式，
>
> **在每一行条件中插入`&`来指定需要对齐的内容**，并在每一行结尾处使用`\\`，
>
> 以`end{cases}`结束 

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

> 左对齐

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

>  使用`\\[2ex]`语句代替该行末尾的`\\`来让编辑器适配行高 
>
>  **一个`[ex]`指一个 "X-Height"，即x字母高度。可以根据情况指定多个`[ex]`，如`[3ex]`、`[4ex]`** 

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

>  数组和表格均以`begin{array}`开头，
>
> 其后定义列数及每一列的文本对齐属性，`c`,`l`,`r`分别代表居中、左对齐及右对齐
>
> 若需要插入垂直分割线，在定义式中插入`|`，若要插入水平分割线，在下一行输入前插入`\hline`
>
> 与矩阵相似，每行元素间均须要插入`&`，每行元素以`\\`结尾
>
> 最后以`end{array}`结束数组 

```latex
$$
\begin{array}{c|lcr}
	n & \text{左对齐} & \text{居中对齐} & \text{右对齐} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$
```

$$
\begin{array}{c|lcr}
	n & \text{左对齐} & \text{居中对齐} & \text{右对齐} \\
	\hline
	1 & 0.24 & 1 & 125 \\
	2 & -1 & 189 & -8 \\
	3 & -20 & 2000 & 1+10i
\end{array}
$$

## 方程组

>  使用`\begin{array}…\end{array}`和`\left\{…\right.`来创建一个方程组 

```latex
$$
\text{ 使用数组来实现 }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right. 
\\\text{ 使用条件表达式来实现 }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$
```

$$
\text{ 使用数组来实现 }
\left\{ 
    \begin{array}{c}
        a_1x + b_1y + c_1z=d_1 \\ 
        a_2x + b_2y + c_2z=d_2 \\ 
        a_3x + b_3y + c_3z=d_3
    \end{array}
\right.
\\\text{ 使用条件表达式来实现 }
\begin{cases}
    a_1x + b_1y + c_1z=d_1 \\ 
    a_2x + b_2y + c_2z=d_2 \\ 
    a_3x + b_3y + c_3z=d_3
\end{cases}
$$

##  连分数

>  使用`\cfrac`来创建一个连分数 

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

## 交换图表

> 使用一行`\require{AMScd}`语句来允许交换图表的显示
>
> 在开头使用`begin{CD}`
>
> 在中间插入图表元素，每个元素之间插入`&`，并在每行结尾处使用`\\` 
>
> 在结尾使用`end{CD}`

| 符号    | 说明         |
| ------ | ----------  |
| @>>>   | 右箭头    	 |
| @<<<   | 左箭头     	 |
| @VVV   | 下箭头     	 |
| @AAA   | 代表上箭头 	|
| @=     | 水平双实线 	|
| @\| | 垂直双实线 |
| @.     | 没有箭头   	 |

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
@>>{右箭头}> \\
@<<{左箭头}< \\
@VV{下箭头}V \\
@AA{上箭头}A \\
@={水平双实线} \\
@|{垂直双实线} \\
@.{没有箭头} \\
\end{CD}
$$
