---
id: ConvertPointPrjCoordSys
title: Transform Coordinates
---
### ![](../../img/read.gif)Introduction

It can be used to convert the coordinates between two geographical coordinate systems, or two projected coordinate systems, or a geographical coordinate system and a projected coordinate system.

### ![](../../img/read.gif)Basic Steps

  1. Click Start>Data>Data Processing, and select Projection>Transform Coordinates to prompt the Transform Coordinates dialog. 
  2. In Source Coordinate Point, input the point's longitude and latitude or X and Y. If the source point uses a geographical coordinate system, you can check Display as DMS to enter the related values.
  3. Source Coordinate System: it's used to set the coordinate system of the source data. Planar coordinate system is not supported. The settings support three ways:
   * From Datasource: set the datasource coordinate system as the source point coordinate system. Note: only the datasources with projected coordinate system or geographical coordinate system are displayed to be selected. 
   * Projection setting: click the Setting button to prompt the Projection Settings dialog, choose a type in it. For details please see [Projection Settings dialog](PrjCoordSysSettingWin.htm).
   * Import Projection: click the ![](img-en/select.png) button, select the projection file to import.
  4. Target Coordinate System: set the target point coordinate system. 
  5. Reference Transformation Settings: click the "Method" tab, and the drop-down menu list shows projection conversion methods provided by system, you can choose a suitable projection conversion method. For the description of the conversion method, please refer to [the reference system conversion method](PrjConvertMethods.htm). 
  6. Transform Parameter: different conversion methods correspond to different customized parameters. 
    * The three parameter conversion method, such as Geocentric Translation, Molodensky or Molodensky Abridged, The "Projection" dialog box needs to set the "offset" parameter in the X, Y, and Z directions. 

You need to set three translation parameters, namely (ΔX, ΔY, ΔZ). Such conversion is essentially a kind of earth center transformation, from a datum center (0,0,0) to another datum center (ΔX, ΔY, ΔZ). The three parameter transformation is linear transformation, the unit is meter.

  * The seven parameter conversion method, such as Position Vector, Coordinate Frame or Bursa-wolf, you need to set the ratio of the difference, rotation angle, offset several parameters. 

Seven parameters are required including three linear translation parameters
(ΔX, ΔY, ΔZ), three rotation angle parameters around axis (Rx, Ry and Rz) and
the scale difference (S). The linear translation parameters take meter as the
unit; the rotation parameter takes the arc seconds as the unit and the scale
difference is 1/1000000 (PPM).

For different projection conversion methods, for details please see [Reference
system conversion method](PrjConvertMethods.htm).

  7. Import/export the projection conversion parameters file: click the Import icon to import a *.ctp projection conversion parameters file for the conversion use. Click the Export icon to export the current conversion parameters to a file. 
  8. After the completion of the projection conversion parameter settings, click the "Transform" button, you can complete the conversion of the coordinates. Users can view the result on Result Coordinate Point. If the target coordinate system is a geographic coordinate system, you can check Display as DMS to display the coordinates in degrees, minutes, seconds form.

### ![](../../img/read.gif)Note

  1. If the source coordinate system is the same as the target coordinate system, it does not convert, and it will notify it fails to be converted.
  2. In the actual work, what kind of method to use depends on the specific circumstances. For the determination of all parameters, please buy the correct mapping data, or verify the correctness of the parameters with the coordinates of the known control points in the two coordinate system.