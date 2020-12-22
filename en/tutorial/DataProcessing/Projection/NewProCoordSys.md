---
id: NewProCoordSys
title: Projection Coordinate System
---
### ![](../../img/read.gif)Introduction

"Coordinate System Settings" dialog box supports to create the project coordinate system.

### ![](../../img/read.gif)Base Step

  1. In the "Coordinate System Settings" dialog box, click the "Create New Coordinate System" drop-down button and select "Projected Coordinate System" to bring up the " Create The Project Coordinate System->Set the Geographic Coordinate System " dialog box.
  2. In the " Create The Project Coordinate System->Set the Geographic Coordinate System " dialog box, you need to set the parameters such as the geographic coordinate system name, Datum, Reference Ellipsoid Spheroid and prime meridian. Refer to the detailed parameter setting["Custom Geographic Coordinate System](NewGeoCoordSys.htm#1)"
  3. After completing the above parameters, click the "Next" button, jump to the "Create the Projection Coordinate System -> Set the Projected Parameters" dialog box, and set the following projection parameters:
    * Projection Type: set the projection parameters,
      * System Predefined Projection: Click the drop-down button on the right to pop up the list of projection methods, and in the drop-down list, you can select a system of predefined projection mode. If you select the projection mode provided by the system, the projection parameters are fixed and can not be edited.
      * None Projection: When the user in the "Projection Type" tab on the right side of the combo box to select None Projection, or enter a new projection name, you can set the current custom projection program parameters.
    * The False Easting and False Northing in the parameter are designed to avoid negative geographical coordinates, mainly for Gauss-Kruger, Mercator and UTM projections. In a conical projection, the conical surface passes through the earth and tangent or phased with the earth weft, and these tangents or secant lines are the standard parallel. Cut cone projection users only need to specify a standard weft, and cut cone projection is required to specify two standard weft, that is, Standard Parallel 1 and Standard Parallel 2. In the case of a single standard weft, Standard Parallel 2 should be the same as the value of Standard Parallel 1. Also the origin of the weft needs to be set, that is, the southernmost latitude.
    * The system provides the "Degrees" and "degrees: minutes: seconds" two parameters for you to select the unit, check the "Display as DMS" check box, you can switch the unit to DMS form.


* After Completing the above parameters set, click "OK" button to complete creating new projected coordinate system.

