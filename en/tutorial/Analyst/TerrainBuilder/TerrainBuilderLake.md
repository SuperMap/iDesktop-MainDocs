---
id: TerrainBuilderLake
title: Dig Lakes on DEM
---
### Introduction

The traditional method of building DEM only can build the large-scale terrain
in a region. It can't display the micro-terrain in a local area such as lakes,
depressions and glaciers. Digging lakes can make the DEM built by users better
display these topographic features. You can get the elevation information of
region data such as lakes and depressions during digging lakes, and then
assign the elevation values of the region data to the corresponding cells of
DEM so as to regain a DEM dataset. For more information, please see [Building
DEM Overview](AboutTerrainBuilder).

There are two methods to dig lakes: One is achieving digging lakes during
building DEM, and the final generated DEM data has lakes; the other is to dig
lakes after finishing the creation of DEM. Please see [Building
DEM](TerrainBuilderDia) for the introduction of the first method. The
second method will be introduced in this page.

### Function Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Build DEM** > **DEM Dig Lake**.
  * **Toolbox** > **Raster Analysis** > **Build DEM** > **DEM Dig Lake**. (iDesktopX)

### Parameter Description

  * **DEM Data** : Set the DEM data for digging lakes. Select the datasource and dataset where the DEM data exists. 
  * **Lake Data** : Set the lake data. Select the datasource and dataset where the lake data exists.
  * Sets the altitude. There are two ways to set the altitude. 
    * **Altitude Field** : select a field of the region dataset as the altitude field to get the altitude information of the lake data. 
    * **Elevation** : manually input a value in the text box as the altitude information of the lake data.

  


