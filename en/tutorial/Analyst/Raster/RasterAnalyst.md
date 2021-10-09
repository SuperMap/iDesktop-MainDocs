---
id: RasterAnalyst
title: Raster Analysis
---
In terms of the structure type of the spatial data to be processed, GIS spatial analyses can be categorized into two modes: raster data analyses and vector data analyses. The raster data structure is simple and intuitive, and thus easy to process and operate on using computers. It is a basic data format commonly used in GIS. Raster-based spatial analyses are basics of GIS spatial analyses.

The raster analysis functions in the application program include: settings for raster analysis environment, surface analysis, statistic, converter, distance raster, interpolation, histogram, hydrology, grid value and so on.



### [Set the Raster Analysis Environment](AnalystEnvironment)

Set the environment for the raster analysis uniformly, including the geographical range of result datasets, clip region and default output resolution.



### [Surface Analysis](SurfaceAnalyst/SurfaceAnalyst)

Surface analysis is a method to obtain information or generated surface based on a surface model. Grid surface analyses include isoline extraction and isoregion extraction.



### [Statistcs](Statistic/RasterStatistic)

Raster statistics provides multiple methods to calculate the cell values of raster data.



### [Converter](../VectorRasterConvert/VectorRasterConvert)

The converter is used to implement the conversion between vector and raster data, and thin the raster.

### [Distance Raster](Distance/RasterDistance)

The distance raster is used to calculate the distance from a cell to the adjacent cell, including spatial and cost distance. The distance raster provided by application can calculate the distance, shortest path and least cost distance.

### [Interpolation](interpolation/Interpolation)

In real GIS applications, values at un-sampled points usually need to be predicted using values at sampled points. That can be realized by interpolation. Interpolation generates a continuous surface and the value at every point can be obtained from this surface.

### [Histogram](Histograms)

How to use the histogram to do raster data statistics.

### [Hydrology Analysis](../../Hydrology/HydrologyAnalyst)

Hydrology Analysis can help us understand the hydrological characteristics of raster data, You can calculate the fill sink, flow direction, flow length, flow accumulation, subbasin and so on.

### [Grid Value](SurfaceAnalyst/FindRasterVaule)

Query the grid value where the mouse is. The query information includes the cell datasource, dataset, coordinate value, line number and grid value.

