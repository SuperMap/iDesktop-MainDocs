---
id: NewProCoordSys
title: Projection Coordinate System
---
### Introduction

"Coordinate System Settings" dialog box supports to create the project coordinate system.

### Base Step

1. In the **Coordinate System Settings** dialog box, click the **Create New Coordinate System** drop-down button > **Projected Coordinate System** to open the **Create Projection Coordinate System -> Set Geographic Coordinate System** dialog box.
2. In the dialog box, you need to set some parameters including the geographic coordinate system name, Datum, Reference Ellipsoid Spheroid, and prime meridian. For specific parameter settings, please refer to [Customize Geographic Coordinate System](NewGeoCoordSys).
3. Click the **Next** button and head to the **Create Projection Coordinate System - > Set Projection Parameters** dialog box. Then set the following projection parameters:
* Projection Type: set the projection parameters,
  * **System Predefined Projection** : Click the drop-down button on the right to pop up the list of projection methods, and in the drop-down list, you can select a system of predefined projection mode. If you select the projection mode provided by the system, the projection parameters are fixed and can not be edited.
  * **Customize Projection** : you can enter a name to customize a new type of projection coordinate system and parameters.
* The **False Easting** and **False Northing** in the parameter are designed to avoid negative geographical coordinates, mainly for Gauss-Kruger, Mercator and UTM projections. In a conical projection, the conical surface passes through the earth and tangent or phased with the earth weft, and these tangents or secant lines are the standard parallel. Cut cone projection users only need to specify a standard weft, and cut cone projection is required to specify two standard weft, that is, Standard Parallel 1 and Standard Parallel 2. In the case of a single standard weft, Standard Parallel 2 should be the same as the value of Standard Parallel 1. Also the origin of the weft needs to be set, that is, the southernmost latitude.
* The system provides two kinds of units including **Degrees** and **DMS (degrees: minutes: seconds)**.

* Click **OK** to complete the creation of the new projection coordinate system.
