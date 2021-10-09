---
id: ConvertPrjCoordSysSingle
title: Projection Transformation
---
### Introduction

Transforming the coordinate system for a dataset, the vector data result will
be saved as another dataset, or transform the original dataset projection
directly; Raster, image or model dataset result will be saved as a new
dataset.

### Function Entrances

* Click **Start** > **Data Processing** > **Projection Transformation** > **Dataset Projection Transformation** to open the Dataset Projection Transform dialog.
* Or, right-click on your dataset and select **Properties**. In the **Properties** Panel, click **Coordinate** tab and select **Projection Transformation...**

### Basic Steps

In the **Dataset Projection Transformation** dialog set the following parameters.

1. **Source Data** : specify your datasource and the dataset you want. The **Source Coordinate System** area shows the specific coordinate information of your dataset
2. **Method** : The method drop-down menu list shows more than ten kinds of projection conversion methods, you can choose a suitable projection conversion method. For the description of the conversion method, please refer to [the reference system conversion method](PrjConvertMethods). 

**Note** : The conversion can happen between any two plane coordinate systems
(including planar coordinate systems and projection coordinate systems) with
the four-parameter method. The transformation between a planar coordinate
system and a geographic coordinate system is not allowed.

3. **Projection Transformation Parameter** : different conversion methods requires different parameters. 
* The three method including Geocentric Translation, Molodensky, or Molodensky Abridged requires three parameters (ΔX, ΔY, ΔZ). Such transformation is essentially a kind of earth center transformation, from a datum center (0,0,0) to another datum center (ΔX, ΔY, ΔZ). The three-parameter transformation is linear. Unit is meter. 
* The seven-parameter transformation method (Position Vector, Coordinate Frame, or Bursa-wolf) requires seven parameters: three linear translation parameters (X, Y, Z) in meter, three rotation angle parameters around axis (Rx, Ry and Rz) in arc sec, and the scale difference (s). The scale difference is 1/1000000 (PPM).
4. **Import/Export Coordinate System** : click the **Import Coordinate System...** icon to import a *.ctp projection conversion parameters file as the required coordinate system. Click the **Export Coordinate System** icon to export the current conversion parameters as a file. 
5. In the Result Save As area, specify the resulting dataset's name and a datasource to save it.
6. The settings of the target coordinate system support three ways: 
* **Reset Coordinate System...** : Click on the icon and select More... from the drop-down list to open the Coordinate System Settings dialog box where you can specify a target coordinate system. For more detail operations, please refer to [Projection Settings](PrjCoordSysSettingWin).
* **Copy Coordinate System** : click on this icon to set the coordinate system the same as the selected datasource or dataset.
* **Import Coordinate System** : Click on the icon button and browse to the projection information file to import it. It supports to import shape projection information file (*.shp; Prj), MapInfo exchange format (*.mif) MapInfo TAB file (*.tab), image format projection information file (*.tif; *.img; *.sit), projection information file (*.xml). 
7. **Model Convert Vertex** : It is available when the source data is a model dataset. For a model dataset, iDesktop checks the checkbox by default to avoid mismatch. 

* Click Convert to finish. You can view the result in the output window.

### Note

1. Any projection has a projection distortion, so the transformation of different projection process is usually not completely reversible, that is, the map data from its original projection to some other projection, but not always very accurate to convert it back, so the original data should be kept. To reduce the number of projection transformation, the accuracy of the results is also reduced. 
2. Each projection is designed to reduce the deformation of a given area in a given characteristic, so it is not suitable for all areas. It is needed to choose the suitable transformation method. For example, from Mercator projection to Gauss projection, the result's accuracy can only be guaranteed in the region near the central meridian, and the areas far from the central meridian will lead to great deformation.
3. In the actual work, what kind of methods should be used depends on the specific circumstances. For the determination of all parameters, please buy the correct mapping data, or verify the correctness of the parameters with the coordinates of the known control points in the two coordinate system.
4. After converting the text object, the height and angle will be converted. If you don't need these changes, you could modify the height and angle.
