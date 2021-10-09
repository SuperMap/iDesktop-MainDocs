---
id: CommonStatistic
title: Common Statistics
---
### Introduction

Common Statistics compares an input raster with a fixed value or other raster
datasets, there are two kinds of common statistics according to the compare
mode:

    * Compare the input raster dataset with the corresponding cells in one or more raster datasets. The resulting cell values are the times of the result "true" in the comparison.
    * Or compare each cell in a raster dataset with a fix value by row and column. If true, the cell value is 1; if false, the cell value is 0.

### Function Entrance

    * Click **Spatial Analysis** > **Raster Analysis** > **Raster Statistics** > **Common Statistics**.
    * **Toolbox** > **Raster Analysis** > **Raster Statistics** > **Common Statistics**. (iDesktopX) 

### Parameter Description

    * **Source Data** : Select the raster data for statistics, including the datasource and dataset that contains the raster data.
    * Set statistics parameters. 
      * Compare with fixed value: Select compare type, including ==, >, <, >= and <=. Select Fixed Value and input the value to compare.
      * Compare with other raster data: Select compare type, including ==, >, <, >= and <=. Select Raster Dataset, and click Select... to select the other raster dataset(s). 
    * Whether to ignore NoValue data. It is checked by default, which means NoValue data will not be calculated in the statistics.
    * Click OK to perform the operation, or click Cancel to exit the dialog box.
