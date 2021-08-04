---
id: Interpolation
title: 插值
---
插值是利用已知的样点去预测或者估计未知样点的数值，包括内插和外推两种插值方式。应用程序提供了三种插值方法：分别是：距离反比权重法（IDW）、克吕金插值方法（Kriging）、径向基函数插值法（RBF）。具体包括以下内容：

### [关于插值](aboutinterpolation)

详细介绍各种插值方法的基本概念及原理。

### [距离反比权重插值](IDWinterpolation)

距离反比权重插值是基于插值区域内部样本点的相似性，计算与到邻近区域样点的加权平均值来估算出单元格的值，进而插值得到一个表面。

### [样条插值](Splineinterpolation)

样条插值法是利用最小表面曲率的数学表达式来，模拟生成通过一系列样点的光滑曲面。

### [普通克吕金插值](OrdinaryKriging)

普通克吕金插值是区域化变量的线性估计，假设观测数据呈正态分布，并且认为区域化变量的期望值是未知的。

### [简单克吕金插值](SimpleKriging)

简单克吕金插值是区域化变量的线性估计，假设观测数据呈正态分布，并且认为区域化变量的期望值是固定的常数。

### [泛克吕金插值](UniversalKriging)

泛克吕金插值是当观测数据中存在某种趋势时，且该趋势可以用一个确定的函数或者多项式来拟合，可以使用泛克吕金插值法。