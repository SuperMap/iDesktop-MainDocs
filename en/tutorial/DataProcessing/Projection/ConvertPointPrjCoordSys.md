---
id: ConvertPointPrjCoordSys
title: Transform Coordinates
---
### Introduction

It can be used to convert the coordinates between two geographical coordinate systems, or two projected coordinate systems, or a geographical coordinate system and a projected coordinate system.

### Function Entrances

* Click **Start** > **Data** > **Data Processing** > **Projection Transformation** > **Coordinate Transformation** to open the Coordinate Transformation dialog box.

### Basic Steps
1. **Source Coordinate Point** : input the point's longitude and latitude or X and Y. If the source point uses a geographical coordinate system, you can check Display as DMS to enter the related values.
2. **Source Coordinate System** : it's used to set the coordinate system of the source data. Planar coordinate system is not supported. The settings support three ways: 
* **Reset Coordinate System** : click on this icon to specify the coordinate system that the given coordinate point uses. On the specific steps of coordinate settings, please refer to [Projection Settings](PrjCoordSysSettingWin).
* **Copy Coordinate System** : click on this icon to set the coordinate system of the given point the same as the selected datasource or dataset.
* **Import Coordinate System <**: click the icon to import a coordinate system by specifying a projection file.
3. **Target Coordinate System** : set the target point coordinate system. 
4. **Reference Transformation Settings** : click the **Method** drop-down menu list to choose a proper projection conversion method. For the description of the conversion method, please refer to [the reference system conversion method](PrjConvertMethods). 
5. **Transform Parameter** : different conversion methods correspond to different customized parameters. For a specific methods introduction, please refer to [the reference system conversion method](PrjConvertMethods). 
* The three parameter conversion method, such as Geocentric Translation, Molodensky or Molodensky Abridged, The "Projection" dialog box needs to set the "offset" parameter in the X, Y, and Z directions. 

You need to set three translation parameters, namely (ΔX, ΔY, ΔZ). Such
conversion is essentially a kind of earth center transformation, from a datum
center (0,0,0) to another datum center (ΔX, ΔY, ΔZ). The three parameter
transformation is linear transformation, the unit is meter.

* The seven parameter conversion method, such as Position Vector, Coordinate Frame or Bursa-wolf needs to set the ratio of the difference, rotation angles, and offsets. 

Seven parameters contains three linear translation parameters (ΔX, ΔY, ΔZ),
three rotation angle parameters around axis (Rx, Ry and Rz), and the scale
difference (S). The linear translation parameters take meter as the unit; the
rotation parameter takes the arc seconds as the unit and the scale difference
is 1/1000000 (PPM).

6. **Import/Export Coordinate System** : click the **Import Coordinate System** icon to import a *.ctp projection conversion parameters file as the required coordinate system. Click the **Export Coordinate System** icon to export the current conversion parameters as a file. 
7. After completing the projection conversion parameter settings, click the **Convert** button. You can view the result on Result Coordinate Point. If the target coordinate system is a geographic coordinate system, you can check Display as DMS to display the coordinates in degrees, minutes, seconds form.

### Note

1. If the source coordinate system is the same as the target coordinate system, it does not convert, and it will notify it fails to be converted.
2. In the actual work, what kind of method to use depends on the specific circumstances. For the determination of all parameters, please buy the correct mapping data, or verify the correctness of the parameters with the coordinates of the known control points in the two coordinate system.

