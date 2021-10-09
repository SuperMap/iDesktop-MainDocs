---
id: UniversalKriging
title: Universal Kriging Interpolation
---
### Instructions

* The assumption is that the data used in the universal Kriging method have a normal distribution.
* The simple Kriging method is another one of the most commonly-used Kriging methods. It assumes that the expected value (mean) of the interpolation field is an unknown variable.
* The universal Kriging method assumes that there is a certain dominant trend existing in the sample point data and this trend can be fitted using a determinate function or polynomial. In order to apply a universal Kriging interpolation, the trend in the interpolation data must be definitive.

### Function Entrance

- Click **Spatial Analysis** > **Raster Analysis** > **Interpolation** > **Universal Kriging**.
- **Toolbox** > **Raster Analysis** > **Interpolation** > **Universal Kriging**. (iDesktopX) 

### Parameter Description

* Set the common parameters for interpolation analyses, including the source data, the interpolation bonds, the result data and environment settings. For details about setting the source data, the interpolation bounds, and the result data, please see: [Description of common parameters for interpolation](CommonPara).
* Set the mode to search for sample points. There are two modes: Fixed Count and Fixed Radius. For details about these two modes, please see: [Kriging](aboutinterpolation).
  - **Fixed Count** : indicates that a fixed number of sample points within the maximum radius extent will be used for interpolation.
     - **Max Radius** : input the radius for the Fixed Count search. The default value is 0, indicating that the maximum radius is used.
     - **Point Count** : input the point count for the Fixed Count search. The default value is 12.
  - **Fixed Radius** : indicates that all the sample points within the search radius extent will be used for interpolation.
     * **Search Radius** : input the size of the search radius. The default value is 1/5 of the greater value between the length and width of the extent of the dataset in the interpolation. All the sample points within this radius extent will be used in the interpolation.
     * **Minimum Points** : input the minimum count of points for the Fixed Radius search. The default value is 5. When the point count in the neighboring area is less than the specified minimum value, the search radius will increase until it contains the minimum number of points. The maximum value is 12.
* **Other parameters** : include Semivariogram, Rotation, Exponent, Sill, Range, and Nugget Effect.
  - **Semivariogram:** Click the drop-down arrow to the right of "Semivariogram" and select a function type. SuperMap supports the Spherical type, the Exponential type, and the Gaussian type. Which model to choose depends on the spatial autocorrelation of the data and the prior knowledge about the phenomenon. Exponential function is used by default.
  - **Rotation:** The anti-clockwise angle of each searching neighborhood relative to the horizontal direction. The default is 0 degree.
  - **Exponent:** The order of the equation representing the trend surface in the sample point data. Options include First-order and Second-order.
  - **Sill:** Sill is the top value of the semivariogram, i.e., the value at the intersection of the semivariogram and the Y axis when the distance (the value on the X axis) is 0. The default value is 0.
  - **Range:** The distance (the value on the X axis) at which the semivariogram reaches the Sill. The default value is 0.
  - **Nugget Effect:** The value at the intersection of the semivariogram and the Y axis when h=0 (the X axis). The default value is 0.

For relationships between Sill, Range, and Nugget Effect, please see: [Kriging](aboutinterpolation).
