---
id: FunctionContract
title: Introductions to Cut and Fill, Match Terrain and Dig Lake
---
Cut and Fill, Match Terrain and Dig Lake are the common functions of raster
analysis. There are similarities and differences among the tree functions. All
the three functions are to operate the DEM terrain data, and all their results
will have a new raster dataset. However, they are different raster operations.
Cut and Fill and Match Terrain involve the algebraic operation between the
raster data whereas Dig Lake is equivalent to the raster update.

Introductions of these three functions:

### [Cut and Fill](Raster/SurfaceAnalyst/CutFill)

Cut and Fill is used to compute the amount of soil that needs to be cut and
filled. It has two ways. One is to cut and fill by computing the variation of
volumes and areas between two raster data (source data and cut and fill data).
The other one is to cut and fill with region by drawing a region on the raster
surface or drawing a line to generate a buffer zone as a reference region,
then specifying an expected altitude (append altitude) after the Cut and Fill
operation, finally calculating the cut-and-fill volume and area.

The result is a new raster dataset which is the result to do map algebra
between source dataset and cut and fill data, and then to do statistical
analysis on the varied region. The result can be shown in the 2D map and 3D
scene.

### [Match Terrain](Raster/SurfaceAnalyst/TerrainMatch)

Match Terrain is used to solve the problem that the model cannot match the
terrain. When the model overlays the terrain data is displayed in the scene,
due to the ups and downs of the terrain, an inevitable problem occurs: Since
the bottom of the model is flat (same altitude) whereas the real terrain may
be uneven (different altitude), the model cannot match the terrain so that a
part of the model is buried in the terrain or floating over the terrain. The
Match Terrain function can solve this problem quite well. The model will
perfectly math the terrain by trimming the terrain region into a plane.

It mainly includes two steps: **Cut and Fill** and **Smooth**.

  1. **Cut and Fill** : According to the bottom elevation of the specified model, cuts and fills the terrain region covered by the model to keep the elevations of the two consistent.
  2. **Smooth** : After the cut-and-fill operation, the border of the terrain suddenly rises or falls which is relatively unexpected, so it needs to be smoothed using the bottom plane as the reference and the specified transition region as the radius of the buffer area.

### [Dig Lake](TerrainBuilder/TerrainBuilderLake)

For the topography in the real world, besides the ups and downs of the
terrain, the depressions such as lakes and reservoirs need to be realistically
represented. The Dig Lake function can achieve this. You can specify the
region data as the lake data and determine the altitude information of the
lake surface by selecting an altitude field or input an altitude number. This
process is equivalent to updating the altitude value of the terrain whose
location is corresponding to the built DEM as the specified altitude value.

There are two methods to dig lakes: One is to directly dig lakes on DEM during
building DEM; the other is to dig lakes on the existing DEM data.


