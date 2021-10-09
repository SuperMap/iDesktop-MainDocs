---
id: AnalystEnvironment
title: Setting the Analysis Environment
---
The settings of analysis environment affect the raster analysis result in a certain extend. Analysis environment settings include Result Bounds, Clip Bounds, Default Cell Size, and whether to ignore NoData.

Currently, the settings of the raster analysis environment are worked on these analyses: Vector Converter, Distance Raster, Interpolation, Algebraic Operation, Visibility Analysis and raster situation (like raster reclassifying, resampling).

Click on "Analysis" tab > "Raster Analysis" group > "Environment Settings" button to open the "Environment Settings for Raster Analysis" dialog box where you can set parameters to proper values.

  * **Result Bounds**

In a raster analysis, when the analysis extent is a subset of an input grid dataset, the analysis extent can be set to a geographical extent that contains only the cells needed. Then all the result datasets will have the specified extent. The result bounds is in fact a rectangle determined by the coordinates of the top, bottom, left, and right corners. The default extent is the intersection of the extents of the datasets participating in the analysis.

The output geographical extent can also be set through other ways. The other methods include: setting it to the union of the extents of the datasets participating in the analysis; setting it to the extent of a specific dataset (i.e., the result dataset has the same extent as that of a specific dataset); setting it to a specified extent by manually inputting the coordinates of the top, bottom, left, and right corners.

Under the "Result Bounds", choose a mode for setting the result bounds, if you select Custom Bounds, there are three ways to set up:

 * Full Extent: Click the Full Extent radio button, set the union of all layer ranges in the current map to the output range;
 * The drop-down button provides Select Object and Draw Bounds in two ways: 
    * Select Object: Click the drop button to select the Select Object option, you can select one or more objects in the current map window through the mouse box or click, the selected object range is set to the output range.
    * Draw Bounds: Click the drop button to select the Draw Bounds option, you can draw in the current map window by clicking the mouse to determine a rectangular area for the output range.
 * Copy and Paste: Click the Copy button to copy the currently set range, click the Paste button at the list of supported patches, the left, down, right and top values are set to the current range.

### Clip Bounds

Clip Bounds defines the extent of data that participates in the raster analysis. The clip dataset must be a region dataset. The grid extent will be extracted for the analysis result according to the clip bounds defined by the clip dataset. The cells outside of the clip extent will not be reserved, or NoData will be assigned to those cells.

At "Clip Bounds" option, select the dataset and the datasource containing the clipping data.

**Note** : After specifying the extent, the result data is obtained based on it, otherwise the default range is the result bounds you set.

### Default Cell Size

The default cell size refers to the resolution of the result dataset.

The resolution or cell size of a raster analysis result can be set to any value. The default cell size is the maximum resolution of the datasets participating in the raster analysis.

There are other ways to set the Default Cell Size, including: Setting it to the maximum resolution of the datasets participating in the analysis; setting it to the resolution of the currently selected dataset; setting it to a specific resolution by inputting a value. In the Resolution item, select a setting method to set the default result dataset resolution size.

  * Max Resolution of All Datasets: Select the max resolution from all the datasets when output.
  * Min Resolution of All Datasets: Select the min resolution from all the datasets when output.
  * Specify a resolution of reference dataset as the defalt output resolution.
  * Custom Resolution: After selected the custom resolution, the text box is activated. Inputting the specified resolution as the default resolution.

Raster analysis environment settings, mainly includes setting the parameters such as geographical extent, cell size, valid region of effective analysis region, pixel format and target path. Currently, the functions of environment settings for raster analysis, are only available for vector converter, distance raster, interpolation, raster algebra, pass-through analysis, and raster profiling, such as raster re-classification and resampling.

**Note** : The various settings of the raster analysis environment are not valid for the above categories, and their specific support is shown in Table 1 below.

**Table 1: Raster Analysis Environment Parameter Settings Support For Each Analysis Function**  
Parameter Type | Vector Converter | Distance Raster | Statistics | Interpolation | Algebra Operations | Visibility Analysis  
---|---|---|---|---|---|---
Result Data Geographic Range Type | × | √① | × | × | √ | ×  
Result Data Geographic Range | × | √① | × | √ | √ | ×  
Clip Range | √ | √① | √ | √ | √ | ×  
Cell Size Type Of The Result Data Set | × | √① | × | √ | × | ×  
The Cell Size Data Of The Result Set | √ | √① | × | √ | × | ×  
  
**Note:**

  1. For distance analysis, the resulting geographic extent of the data, the geographical extent of the resulting data, the cell size type of the resulting data set, and the cell size of the resulting data set are valid only for generating the distance rasters and calculating the shortest path.
  2. In raster algebra operations, reading the raster expression and related parameters from the XML file and computing, whether or not displaying the progress bar is determined by the value of the stored XML file.
  3. If a raster analysis environment in **Table 1** is also set up in a single function, the parameter settings in a single function have a higher priority than the corresponding parameter settings in a raster analysis environment, and the parameter corresponding to the parameter in the environment setting, if set to null, reads the setting of the parameter in the raster analysis environment during analysis.


