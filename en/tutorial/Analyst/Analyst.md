---
id: Analyst
title: Spatial Analysis
---
A spatial analysis is analysis techniques based on locations and shapes of
geographical objects. Its objective is to extract and transmit spatial
information. Powerful spatial analysis capability is a main feature of GIS.

There are two types of spatial data: vector data and raster data. Therefore,
spatial analysis functions can be divided into two categories: spatial
analyses applied to vector data and those applied to raster data.

### Vector Analysis

Vector analysis functions include: Buffer analysis, Overlay analysis, Dynamic
Segmentation, etc.

  * [Create Buffer Zone](Vector/bufferanalyst/Bufferanalyst)

Buffer Analysis is a process of building zones with a certain width around
point, line, or region geometric objects according to a specified buffer
distance.

  * [Overlay Analysis](Vector/overlayanalyst/Overlayanalyst)

Overlay analysis is a process of generating a new dataset by overlaying two
datasets with different themes. An overlay analysis result carries over the
attributes of the features from two or more original layers.


  * [Dynamic Segmentation](../DynamicSeg/DynamicS)

It is used to introduce the principle and concepts of dynamic segmentation.
For example, the general process, create route, calibrate route, create the
event table, manage the routes and event tables.

### Raster Analysis

Raster data structure is simple and intuitive, and thus easy to process and
operate on using computers. It is a basic data format commonly used in GIS.
Raster-based spatial analyses are basics of GIS spatial analyses.

The raster analysis functions in the application program include: settings for
raster analysis environment, surface analysis, statistic, converter, distance
raster, interpolation, histogram, hydrology, grid value and so on.


  * [Set the Raster Analysis Environment](Raster/AnalystEnvironment)

Set the environment for the raster analysis uniformly, including the
geographical range of result datasets, clip region and default output
resolution.


  * [Surface Analysis](Raster/SurfaceAnalyst/SurfaceAnalyst)

Surface analysis is a method to obtain information or generated surface based
on a surface model. Grid surface analyses include isoline extraction and
isoregion extraction.


  * [Statistcs](Raster/Statistic/RasterStatistic)

Raster statistics provides multiple methods to calculate the cell values of
raster data.


  * [Converter](VectorRasterConvert/VectorRasterConvert)

The converter is used to implement the conversion between vector and raster
data, and thin the raster.



  * [Distance Raster](Raster/Distance/RasterDistance)

The distance raster is used to calculate the distance from a cell to the
adjacent cell, including spatial and cost distance. The distance raster
provided by application can calculate the distance, shortest path and least
cost distance.


  * [Interpolation](Raster/interpolation/Interpolation)

In real GIS applications, values at un-sampled points usually need to be
predicted using values at sampled points. That can be realized by
interpolation. Interpolation generates a continuous surface and the value at
every point can be obtained from this surface.


  * [Histogram](Raster/Histograms)

How to use the histogram to do raster data statistics.


  * [Hydrology Analysis](../Hydrology/HydrologyAnalyst)

Hydrology Analysis can help us understand the hydrological characteristics of
raster data, You can calculate the fill sink, flow direction, flow length,
flow accumulation, subbasin and so on.


  * [Grid Value](Raster/SurfaceAnalyst/FindRasterVaule)

Query the grid value where the mouse is. The query information includes the
cell datasource, dataset, coordinate value, line number and grid value.
