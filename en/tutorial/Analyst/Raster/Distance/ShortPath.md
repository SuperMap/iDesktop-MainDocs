---
id: ShortPath
title: Compute Shortest Path
---
### Introduction

Calculate the shortest path from each target point to its nearest source based on the distance raster dataset, for example, the shortest path from the points in the suburbs to their nearest markets (source).

  * About source data, distance data and direction data: The distance raster and direction raster input must match with each other, that is, they must be created with the Generate distance raster functionality.

  * Path types:
    * Cell path: A path is generated for each grid cell, connecting that cell with the closest source.
    * Zone path: A path is generated for each cell zone. A cell zone is composed of contiguous cells with equal values. A path for a target zone is the least-cost path from the zone to the closest source.
    * Single path: Only one path is generated for all grid cells. This path is the one with the least cost among all the paths connecting the entire target area dataset.

###  Functional Entrances

  * **Spatial Analysis** > **Raster Analysis** > **Distance Raster** > **Compute Shortest Path**.

### Parameter Description

  * **Target data** : Specify the dataset. It can be point, line, region or raster dataset.
  * **Distance data** : Select the datasource and dataset. It is the distance dataset created by the Create Distance Raster function. 
  * **Direction data** : Select the datasource and dataset. It is the direction dataset created by the Create Distance Raster function.
  * **Path type** : cell path, single path or zone path.
  * **Result data** : Select the datasource and input the name of the result dataset.
  * Click "Environment Settings" button to open the "Environment Setting for Raster Analysis" where you can set the analysis parameters to values as needed. For detail operations, please refer to [Setting the Analysis Environment](../../Raster/AnalystEnvironment). 

Note: you are allowed to specify the environment parameters as global variables, then you do not need to set the parameters again in other operations. Also the system can read parameter values specified in the raster analysis environment if you do not set parameters here.

### Related Topics

For the introduction of the result dataset, distance raster, direction raster, and allocation raster, see [Distance Raster Overview](RasterDistance).

[Distance raster](RasterDistance)

[Direction raster](RasterDistance)

[Allocation raster](RasterDistance)

[Path type](RasterDistance)
