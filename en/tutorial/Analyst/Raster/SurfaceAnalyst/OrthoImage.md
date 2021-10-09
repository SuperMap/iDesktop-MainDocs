---
id: OrthoImage
title: Create an Orthophoto Image
---
### Introduction

According to the specified color table and the color of NoValue, an orthoimage can be made by rendering DEM brightness values which are obtained by computing the brightness of each points through the changes of grid altitudes.

### Functional Entrances

  * Click the **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Orthoimage**. 
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Terrain Calculate** > **Orthoimage**. (iDesktopX)

### Main Parameters

  * **NoValue Color** : The display color of no value data in the generated image dataset. 
  * **Color Table** : Set the color table for the generated orthophoto image. For more information, see [Color Table](OrthoColorTable).
  * **Color Scheme** : choose a color scheme to set the colors of your raster data. (iDesktopX)
  * Result Settings
    * **Datasource** : It list all the datasources in the current workspace. You can select the datasource which the result dataset exists in. It is same with the datasource in **Source Dataset** by default.
    * **Dataset** : Set the name of the result dataset. A new generated orthophoto image dataset has the same size and resolution with the source dataset.

### Related Topics

[Orthophoto Image](AboutHillShade)

