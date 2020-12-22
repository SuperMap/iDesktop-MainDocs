---
id: PrjConvertMethods
title: Coordinate System Transformation Methods
---  

In every country (or region), the geodetic coordinate system has experienced a long process of development. In different periods, the reference spheroids and positioning means are different, which are constantly progressing as time goes by. The geodetic coordinate systems established with different reference spheroids and positioning systems are reference-ellipsoid-centric coordinate systems that are different from the geocentric coordinate system with the geocentric as the origin. Therefore, problems exist when transforming between geodetic coordinate systems.

![](img-en/GTransform1.Png) | ![](img-en/GTransform2.Png)  
---|---  
Figure 1: Three-parameter | Figure 2: Seven-parameter

11 transformation methods are provided for the projection transformation. These methods are: Geocentric Transalation(3-para), Molodensky(3-para), MolodenskyAbridged(3-para), Position Vector(7-para), Coordinate Frame(7-para), Bursa-wolf(7-para), MolodenskyBadekas(10-para), China_3D_7P(7-para), China_3D_7P(7-para), China_2D_4P(4-para), PROJ4 Transmethod. 

Projection conversion methods  

**Name** | **Description**  
---|--- 
GeocentricTranslation | Three-parameter transformation based on the Earth's core  
Molodensky | Molodensky transformation  
MolodenskyAbridged | Simplified Molodensky transformation  
PositionVector | Position vector transformation  
CoordinateFrame | Seven-parameter transformation based on the Earth's core  
BursaWolf | Bursa-Wolf transformation  
MolodenskyBadekas | Molodensky-Badekas transformation which is a 10 parameter geometric transformation.  
China_3D_7P | Three dimensional seven-parameter transformation which is used for the conversions between CGS2000 and other coordinate system.  
China_2D_7P | Two dimensional seven-parameter transformation which is used for the conversions between CGS2000 and other coordinate system.  
China_2D_4P | Two dimensional four-parameter transformation which is used for the conversions between CGS2000 and other coordinate systems.  
PROJ4 Transmethod | The PROJ4 Transmethod transformation which is based on the third-part projection transformation tool "PROJ4" only supports the conversions between projections with EPSG Code.  

The commonly used transformations are classified as three-parameter and seven-
parameter transformations:

  1. **3-parameter Methods(Geocentric Translation)**

The Geocentric Translation method is a simple transformation method because it considers only the origin shift. The geocentric transformation models the differences between two datums in the X,Y,Z coordinate system. One datum is defined with its center at 0,0,0. The center of the other datum is defined at some distance (ΔX，ΔY，ΔZ) away. Please refer to the left of the figure below. The Geocentric Translation method is rather simple, but with lower precision, so it is always used in the transformation between different geocentric coordinate systems.

  2. **7-parameter Method (Coordinate Frame)**

A more complex and accurate datum transformation is possible by adding four more parameters to a geocentric transformation. The Coordinate Frame method considers not only the linear shifts, but also the angular rotations and the scale factor. Please refer to the right of the figure below.

  3. The Geocentric Translation, Molodensky and Abridged Molodensky are translation methods with low accuracy. They need only three translation parameters: ΔX，ΔY and ΔZ. The three methods can be applied in situations without high accuracy demand. 
  4. The Position Vector, Coordinate Frame and Bursa Wolf methods are high-accuracy translation methods. The seven parameters are three linear shifts (ΔX，ΔY，ΔZ), three angular rotations around each axis, and a scale factor. Except the names, the three methods are essentially the same.

### ![](../../img/read.gif)Note

  * Different situations may need different translation methods. The results are decided by the settings of the translation parameters. You can get the translation parameters from the survey agencies, data providers, or calculation based on practical measurement. The suitability of the parameters depends on the common control points in two reference systems.