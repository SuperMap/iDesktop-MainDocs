---
id: CutFillRegion
title: Area Cut and Fill
---
### Introduction

It can be applied when a region with ridges and valleys is to be flattened. The user can specify the region to be flattened and the target elevation. This method can be used to calculate the filled area, the cut area, the fill volume, and the cut volume. This function can support both the 2D map data and the 3D scene data. For more information about principles and methods of area cut and fill, see About Surface Analysis[Surface Cut and Fill](AoubtSurfaceAnalyst).

### Functional Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Cut Fill with Regions**.
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Terrain Calculate** > **Cut Fill with Regions**. (iDesktopX)

Note:Only the grid dataset exists in the map window, the area cut and fill function is available.

### Main Parameters

  * Set the source data, namely the grid dataset before area cut and fill. 
    * Datasource: List all the datasources in current workspace and select the datasource that the grid dataset belong to before area cut and fill.
    * Dataset: List all the grid datasets (GRID) in the current datasource. Select the grid dataset in area cut and fill in the list. Here it will locate to the opened datasets in the map window automatically.
  * Get the reference object. Because the area cut and fill is the cut and fill calculation that the grid dataset and the specified planar. It needs to get the specified planar area. SuperMap provides two specified methods. One is to select the existing vector dataset in current map; the other one is to draw region or line based on the source dataset. For the region object, it can be the specified flat to join the area cut and fill; For the line object, system will be buffer analysis firstly and take the buffer result as the specified flat to join the area cut and fill.
    * Select: When the map window has the opened vector dataset (it should be line and region dataset), the "select" tab is available. Clicking "Select" can get the vector object in the current map window and take it as the reference object of area cut and fill. 
    * Draw area: Check the "Draw Region". You can draw the region object through mouse on the current source dataset and take it as the reference object of area cut and fill.
    * Draw line: Check the "Draw Line". You can draw the line object through mouse on the current source dataset and take it as the reference object of area cut and fill after buffer analysis.
  * Append Height: The elevation of flat. The default is 0, namely, the reference object elevation is 0.
  * Buffer setting. It is used when the got reference object is line object. 
    * Buffer type: Users can choose different buffer types according to the needs, including flat and round. The flat represents that both the ends and nodes are bevels. The round represents that both the ends and nodes are round.
    * Buffer Radius: Determine the buffer range by buffer radius, and create buffer for line objects to form the area to be cut and filled.
  * Set the result data. 
    * Datasource: List all the datasources in current workspace and select the datasource that contains the result datasets. It is the same with source datasource by default.
    * Dataset: Set the name of the result dataset.
  * Display results in the map: Open the result dataset in a new map window after the operation. It is only available in the map window. The cut is represented by red and the fill is represented by green. White means the unchanged region.
  * Display results in the scene: Open the result dataset in a new scene window after the operation. It is only available in the scene window. 
  * Click "OK" button and perform the cut and fill operation. After conducted this operation, it will display the cut and fill result in the output window, including the fill volume, cut volume, fill area, cut area, and the no-cut and fill area five contents. The volume unit is cubic meter, and the area unit is square meter?

### Related Topics

[About Surface Analysis](AoubtSurfaceAnalyst)
