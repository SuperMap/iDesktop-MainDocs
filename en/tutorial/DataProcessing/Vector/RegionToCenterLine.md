---
id: RegionToCenterLine
title: Extract Center Line from Area
---
### Introduction

This function is to extract all the center lines of the region objects in the
region dataset, and save the result as a line dataset. This function is often
used to extract center lines for street polygons.

### Function Entrances

* **Data** tab > **Data Processing** > **Vector** > **Extract Center Line of Region**.
* **Toolbox** > **Data Processing** > **Vector** > **Extract Center Line of Region** (iDesktopX)

### Parameter Specification

In the **Extract Center Line from Region** dialog box set the following parameters.

* **Source Data** : specify the datasource and dataset. 

If you don't check the option **Select Regions** , the application will
extract the center lines of all regions. You can re-specify a region dataset.

If you check the option **Select Regions** , the application will extract the
center lines of the selected regions will be extracted. You are not allowed to
re-specify a region dataset.

* **Result Data** : Specify a datasource to save the resulting dataset. The default dataset name is CenterLineResult.
* In the **Parameter Settings** area specify the max and min widths.

  * **Max Width** : the maximum width between two border lines of a region. If the width of a region is larger than the value, the boundaries of the region will be extracted. The unit of this parameter is the same as the source dataset. You can use the **Measure Distance** tool to calculate the widest part of the region to get the max width. 

**Suggest** : it is advised that the max width a bit larger than the measured
distance value.

  * **Min Width** : the minimum width between two border lines of a region. If the distance between them is less than the min width, then no center line will be extracted for that part of the region. The unit of this parameter is the same with the source dataset.

**Note** : Center lines will only be extracted from regions with border
distances between Max and Min Width. If the distance between them is larger
than the max width, the border line will be extracted; If the distance between
them is less than the min width, then no center line will be extracted.

* Click OK to complete. The new center line dataset attribute table will reserve the attribute information of the source region object. 

### Note

* The value of the min/max width is important. You need to set an accurate value.
* The extraction may not be satisfying when there are intersecting streets.