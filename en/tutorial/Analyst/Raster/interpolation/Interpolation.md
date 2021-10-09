---
id: Interpolation
title: Interpolating
---
Interpolation is a process of predicting or estimating values at unmeasured points using sample points with known values. An interpolation is either performed within a region or across regions. The application program provides three interpolation methods: Inverse Distance Weighted (IDW), Kriging, and Radial Basis Function (RBF). Below are the links to their specific descriptions:

### [Introduction to Interpolation](aboutinterpolation)

The basic concepts and principles of the supported methods are described in
details here.

### [Inverse Distance Weighted Interpolation](IDWinterpolation)

The Inverse Distance Weighted (IDW) interpolation method estimates the value of a cell using the weighted average of sample points around that cell based on the similarity between the points within the region. A surface is then generated.

### [Spline Interpolation](Splineinterpolation)

The spline interpolation method uses a mathematical expression with the minimum surface curvature to simulate a smooth curved surface that passes through a series of sample points.

### [Ordinary Kriging Interpolation](OrdinaryKriging)

The ordinary Kriging method performs a linear estimation on a regional variable. It assumes that the observation data are normally distributed and the expected value of the regional variable is unknown.

### [Simple Kriging Interpolation](SimpleKriging)

The simple Kriging method performs a linear estimation on a regional variable. It assumes that the observation data are normally distributed and the expected value of the regional variable is a fixed constant.

### [Universal Kriging Interpolation](UniversalKriging)

The universal Kriging method is applied when a certain trend exists in the observation data and this trend can be simulated using a determinate function or polynomial.
