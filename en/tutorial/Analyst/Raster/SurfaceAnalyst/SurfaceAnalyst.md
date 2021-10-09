---
id: SurfaceAnalyst
title: Surface Analysis
---
Surface analysis is a process of obtaining more information about spatial characteristics and spatial patterns embedded in the original dataset by generating new datasets such as contours, slopes, and aspects.

The surface analysis functions obtain information or generated surface based on surface model. The content includes:

### [Introduction to Surface Analysis](AoubtSurfaceAnalyst)

It contains the basic knowledge about the surface analysis functions provided in the application program.

### [Extract Isolines](DriveContour)

An isoline is a smooth curve formed by connecting adjacent points with the same values. Commonly-used isolines include: contours, depth contours, isotherms, isobars, and isohyet lines. Locations with the same elevations, temperatures, precipitations, etc., can be found through isoline extraction. At the same time, the distribution of isolines also reflects the steep and flat areas of change.


### [Extract Isoregions](DriveRegion)

An isoregion is a region formed by closing proximate isolines. The change in isoregions intuitively reflects the change in adjacent isolines. Variables such as elevation, temperature, precipitation, pollution, and air pressure can be represented by isoregions intuitively and effectively. Locations with the same elevations, temperatures, precipitations, pollutions, air pressures, etc., can be found through isoregion extraction. At the same time, the distribution of isoregions also reflects the steep and flat areas of change on the surface.

### [Visibility Analysis](ViewAnalyst)

SuperMap visibility analysis includes two functions: visibility analysis and viewshed analysis. A viewshed analysis can generate a grid dataset containing viewshed(s). A visibility analysis determines whether two or more points are visible to each other and creates visibility line(s).

### [Slope](Slope)

Calculate the slope of the raster dataset.

### [Aspect](Aspect)

Calculate the aspect of the raster dataset.

### [Cut and Fill](CutFill)

Calculate the area and volume changes between the two raster datasets (before and after).

### [Cut and Fill with Regions](CutFillRegion)

Conduct the cut and fill with the region specified by users.

### [Inverse Cut/Fill](InverseCutFill)

Given the cut/fill extent and volume, calculate the altitude of the cut/fill.

### [Surface Measure](SurfaceMeasure)

It is used to measure the surface distance, area and volume of raster.

### [Profile Analysis](Profile)

The profile is used to show the elevation changes along the given route, which has important reference values in studying regional terrain and implementation of the project. Profile analysis is to create the profile along a line, and get the profile line and sampling point collection.

### [DEM Split](../../TerrainBuilder/TerrainBuilderClip)

Split the original raster dataset into two new raster datasets by the cutting line drawn, and remain the spatial extent of the original raster data unchanged.

### [DEM Curvature](CalculateCurvature)

Calculates the curvatures for DEM data, including Average Curvature, Profile Curvature, and Plane Curvature.

### [Find Extremum](../Statistic/FindExtreme)

The Find Extremum is used to find the extremum points in the specified region, including the minimum and maximum extremum points.

###  [Orthoimage](OrthoImage)

With digital differential rectification, the Orthoimage function firstly gets proper sunlight intensity through the elevations of the surrounding neighboring grid cells. And then the function will do the orthophoto rectification and finally get an orthophoto image.

###  [Hillshade](HillShade)

Hillshade is a raster map that simulates the shadow of the practical surface so as to show ups-and-downs of the terrain. By using an imaginary light source map and the aspect and slope information generated from the raster data, you can get the grayscale value of each cell. The hill facing the light has higher grayscale values, while the hill back to the light has lower gray values which is called the shaded area. This mountain shadow map generated from raster calculation has a very realistic 3D effect, so it is also called hillshade.
