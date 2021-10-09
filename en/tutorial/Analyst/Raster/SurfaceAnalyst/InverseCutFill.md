---
id: InverseCutFill
title: Inverse Fill and Cut
---
### Introduction

Inverse Fill and Cut is used to get the elevation after cut/fill based on the specified cut/fill dataset extent and cut/fill volume.

The Inverse Fill and Cut function is used to solve this kind of practical problems: given the cut and fill raster data and the volume of the fill or cut. In this case, calculate the elevation after fill and cut. For example, a place provides V volume, if you fill all to the area, what's the elevation you will get. And you can judge whether it meets the construction standard.

### Functional Entrances

  * Click the **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Terrain Calculate** > **Inverse Cut and Fill**. 
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Terrain Calculate** > **Inverse Cut and Fill**. (iDesktopX)

### Main Parameters

  * Set the source data to cut/fill. 
    * **Datasource** : It lists all the datasources in the current workspace. You can select the datasource that contains the dataset to cut/fill.
    * **Dataset** : It lists all the datasets (GRID) in the current workspace. You can select the dataset to cut/fill. It will automatically locate the selected dataset in the **Workspace Manager**.
  * Set whether to cut or to fill the raster, and also the volume accordingly. 
    * **Fill:** Select Fill if you want to calculate the altitude of filled volume.
    * **Cut:** Select Cut if you want to calculate the altitude of cut volume.
    * **Volume:** Set the volume to cut/fill. The unit is determined by multiplying square meters with the unit of the grid value.
    * **Custom Locale:** When this option is checked, you can define the extent of the raster that will be taken into calculation. SuperMap supports drawing polygons and selecting objects to define the area. Note that, if the option is not checked, it means all the raster dataset is considered in the calculation. 
      * **Draw Region:** Click to draw a polygon in the map window to define the extent of the raster that will be taken into calculation. 
      * **Select:** if there is any vector dataset opened in the current map window(region or CAD dataset that have polygons), this option is available. Then you can select objects to define the area. 
  * The calculation result will be displayed in the Altitude text box. If the calculation type is Fill, then the value is the minimum altitude for the Filled volume and the maximum altitude for the Cut volume. The unit is the same with that of the grid value.

###  Related Topics

 [Fill/Cut](CutFill)

 [About Surface Analysis](AoubtSurfaceAnalyst)
