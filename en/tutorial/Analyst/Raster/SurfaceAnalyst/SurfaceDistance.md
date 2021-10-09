---
id: SurfaceDistance
title: Surface Distance
---
### Introduction

Calculates the surface distance on the raster, that is to calculate the curved surface distance on the fitting 3D curved surface along the given line segment or polyline. The distance measured is on the curved surface, so the value is larger than that on the plane.

The application provides 2 types of calculating: Measure the surface distance by drawing object; or select one or more objects in other datasets to measure the distance.

### Basic Steps

**Draw Line**

  1. Open the raster dataset to calculate surface distance in the map window. Note that this functionality is enabled only when there is raster data opened in the current workspace.
  2. Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Surface Distance**.
  3. Draw a line or polyline on the map, and right click to finish the operation.
  4. The surface distance will be displayed in the map window and the output window. The default unit is meters. You can clear the temporary line in the map window by pressing the Esc key.

**Select Line Distance**

  1. If there are both raster data and line data opened in the map window, select one or more lines (you can press and hold the Shift key to select multiple line objects).
  2. Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Select Line Distance**.
  3. The size of the surface distance will be displayed in the map window and the output window.

Or you can:

  1. Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Select Line Distance**.
  2. Select one or more lines you want to calculate, and right click to finish the selection.
  3. The size of the surface distance will be displayed in the map window and the output window.

Note: If you have selected multiple lines, the result value will be the sum of all of them. The default unit is meter. You can press the Esc key to clear the selected state of the line(s) in the map window.
