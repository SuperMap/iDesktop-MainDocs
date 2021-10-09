---
id: FindExtreme
title: Find Extremum
---
### Introduction

The finding extremum function is used to find the extreme points (highest and lowest point) within a region, and determine the location and extremum information of these extreme points. The application provides 2 ways to find the range of the region, one is to find by selecting the zonal data, and the other is to find by drawing a region on the raster data as the search range.

### Find Extremum in Region

#### Function Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Region Find Extremum Value**.
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Region Find Extremum Value**. (iDesktopX) 

#### Parameter Description

  * **Raster Data** : Sets the grid data to be looked up including the datasource and dataset where the grid data exist.
  * **Region Data** : Selects zonal data as well as the datasource and dataset where the zonal data exist. It successively performs the extremum statistics on all the regions of zonal data when the zonal data is not selected. 

If you select a specific object (one or more objects) of zonal data, then it only does statistics on the regions where the selected objects exist. And now the **Statistics for selected object only** check box is active. If you uncheck the check box, then it will do statistics using all the objects of zonal data.

  * **Parameter Settings** : Sets the parameters of finding extremum, including the maximum and minimum extremum count in the region to be looked up. Both the maximum extremum count and the minimum extremum count are 256 by default. 
  * **Result Data** : Sets the result data, then the statistical results will be saved as a 3D point dataset. The attribute field of the dataset saves the elevation information of the extreme point and its type (maximum value or minimum value).
  * Sets whether to display on the map. Selects the **Display on Map** check box, then after the operation is completed, the search results will be automatically loaded into the current window; otherwise it will not be loaded into the current window. 
  * After the operation is completed, it will automatically label the highest points within the drawing region with red highlights, and label the lowest points with blue highlights in the current map. The output window will display the information of finding extremum, including the count of extremum and its corresponding extreme value. Press the **Esc** key to clear the highlighted extreme points.

### Draw Polygon to Find Extremum Value

#### Function Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Draw Polygon to Find Extremum Value**.

#### Operating Instructions

  * The **Output Window** prompts that "Draw a region where you want to do statistics, and then right click to do statistics". According to the prompt, you draw a temporary polygon as the statistical region. See [Drawing Polygon](../../../DataProcessing/Objects/CreateObjects/DrawPolygon) for the drawing method of the polygon. 
  * After the drawing operation is finished, the **Find Extremum Value** dialog box opens in the current map window. 
  * Sets the parameters of finding extremum, including the maximum and minimum extremum count in the drawing region to be looked up. Both the maximum extremum count and the minimum extremum count are 256 by default.
  * Sets the result data, then the statistical results will be saved as a 3D point dataset. The attribute field of the dataset saves the elevation information of the extreme point and its type (i.e., maximum value or minimum value).
  * After the operation is completed, it will automatically label the highest points within the drawing region with red highlights, and label the lowest points with blue highlights in the current map. The output window will display the information of finding extremum, including the count of extremum and its corresponding extreme value. Press the **Esc** key to clear the temporary drawing region and the highlighted extreme points.

### Note

Both **Zonal Statistics and Find Extremum** are to do statistics on the region. The two have similarities and differences.

  * **Zonal Statistics** is to do statistics on the raster data (value data) within the zonal region (zonal data, which can be vector data or raster data). According to the partition of raster data in zonal data, it successively does statistics on the raster data covered by each region. The statistic mode includes Average, Standard Deviation, Sum, Variety, Majority, Minority, Median, Min, Max and Range. The statistical results include a raster dataset and a tabular dataset.
  * **Find Extremum** is used to find extreme points (maximum and minimum extreme point) of cells within a region, and to determine the locations of these extreme points and the information of the extreme values. The zonal data can be generated by selecting the zonal objects or drawing a region. Its statistical result is a 3D point dataset, whose attribute field saves the elevation information of the extreme point and its type (maximum value or minimum value).