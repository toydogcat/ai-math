---
title: "深度講堂：彩虹與霓的數學原理——微積分的極值應用"
author: Antigravity
date: 2026-04-24 14:00:00 +0800
categories: [深度講堂, 物理與數學]
tags: [牛頓, 彩虹, 微積分應用, 極值]
math: true
image:
  path: /assets/img/calculus-novel/extra/rainbow/real_rainbow.webp
  alt: 美麗的彩虹與霓
---

在牛頓的故事中，我們提到他在「奇蹟之年」揭開了彩虹的秘密。這不只是物理現象，更是一個優美的數學極值問題。為什麼彩虹總是在約 42 度的位置最明亮？為什麼「霓」的顏色是反過來的？

本篇將帶領有興趣的同學，從一滴水開始，推導出彩虹的幾何奧秘。

![真實的彩虹與霓](/assets/img/calculus-novel/extra/rainbow/real_rainbow.webp)

### 1. 從一滴水開始：斯乃耳定律

當太陽光射入水滴時，會發生折射。根據 **斯乃耳定律 (Snell's Law)**：

$$ \sin(\alpha) = k \sin(\beta) $$

其中 $\alpha$ 是入射角，$\beta$ 是折射角，$k$ 是水的折射率（約為 $4/3$）。我們可以將 $\beta$ 表示為 $\alpha$ 的函數：

$$ \beta(\alpha) = \arcsin\left(\frac{\sin(\alpha)}{k}\right) $$

![折射原理圖](/assets/img/calculus-novel/extra/rainbow/snell_law_diagram.webp)

### 2. 偏差角的計算

光線進入水滴，經過一次反射（彩虹）或兩次反射（霓），最後離開水滴。光線轉過的角度稱為**偏差角 (Angle of Deviation)** $D(\alpha)$。

對於**主虹 (Primary Rainbow)**，光線在水滴內反射 1 次：

$$ D(\alpha) = (\alpha - \beta) + (\pi - 2\beta) + (\alpha - \beta) = \pi + 2\alpha - 4\beta $$

對於**副虹 (Secondary Rainbow，即「霓」)**，光線在水滴內反射 2 次：

$$ D_{secondary}(\alpha) = 2\pi + 2\alpha - 6\beta $$

![彩虹與霓的路徑比較](/assets/img/calculus-novel/extra/rainbow/rainbow_comparison.webp)

### 3. 微積分的關鍵：為什麼是 42 度？

光線是均勻射入水滴的，但為什麼我們只在特定的角度看到彩虹？這是因為光線在某個角度附近會產生「聚集」現象。

在數學上，這意味著偏差角對入射角的變化率為零，即**駐點 (Stationary Point)**：

$$ \frac{dD}{d\alpha} = 2 - 4 \frac{d\beta}{d\alpha} = 0 $$

透過微分運算，我們可以求出最亮的角度。對於主虹，這個角度大約是 $180^\circ - D \approx 42^\circ$；對於副虹，則約為 $51^\circ$。

![偏差角與強度分布圖](/assets/img/calculus-novel/extra/rainbow/intensity_dist.webp)
*圖：當導數為零時，光強度達到極大值，形成了我們看到的明亮條紋。*

### 4. 模擬與驗證

透過 Python 程式模擬大量光線進入水滴的路徑，我們可以清楚看到角度的分布規律：

```python
import math
import numpy as np
import matplotlib.pyplot as plt

def get_deviation(a_deg, k=4/3):
    a = math.radians(a_deg)
    b = math.asin(math.sin(a) / k)
    return (math.pi + 2*a - 4*b) * 180 / math.pi

angles = np.linspace(0, 90, 100000)
deviations = [get_deviation(a) for a in angles]

plt.hist(deviations, bins=100)
plt.title("Rainbow Intensity Distribution")
plt.show()
```

![模擬結果](/assets/img/calculus-novel/extra/rainbow/simulation_results_2.webp)

---

### 結語

牛頓不僅僅是看見了彩虹，他更用微積分這把「手術刀」，切開了光的層次，精確地預言了自然界的美麗。這就是數學的力量——將感性的美，轉化為理性的真。

如果你對推導過程還有疑問，歡迎在下方留言討論！
