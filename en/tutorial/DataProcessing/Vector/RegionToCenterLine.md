---
id: RegionToCenterLine
title: Extract Center Line from Area
---
### ![](../../img/read.gif)Introduction

This function is to extract all the centerlines for the region objects in the region dataset, and save the result as a line dataset. This function is often used to extract centerlines for street polygons.

### ![](../../img/read.gif)Basic Steps

  1. Open the datasource where the target dataset is in.
  2. In the Vector group of the Data tab, click the Center Line of Region button to open the dialog box.
  3. In the section of Source Data, specify the datasource and dataset. 

If you don't check the option of "Extract selected regions only", then the center lines of all the regions will be extracted. You can re-specify the region dataset and datasource.

If you check the option of "Extract selected regions only", then only the center lines of the selected regions will be extracted. When this option is checked, you cannot respecify the region dataset and datasource.

  4. In the section of Target Data, specify the result datasource and dataset name.
  5. In the section of Parameter Settings, specify the max and min distance between the double lines.

  * Maximum: the maximum distance between the two border lines of the region. If the distance between them is larger than the max width, then the boundaries line of regions will be extracted. The unit of this parameter is the same with the source dataset. You can use the Measure Distance tool to calculate the widest part of the region for the max width. 

Suggest: it is advised that the max width a bit larger than the measured distance value.

  * Minimum: the minimum distance between the two border lines of the region. If the distance between them is less than the min width, then no center line will be extracted for that part of the region. The unit of this parameter is the same with the source dataset.

Note that: Center lines will only be extracted from regions with border distances between Max and Min Width. If the distance between them is larger than the max width, the border line will be extracted; If the distance between them is less than the min width, then no center line will be extracted.

  6. Click OK to complete. The new center line dataset attribute table will reserve the attribute information of the source region object.  

### ![](../../img/note.png)Note

* The value of the min/max width is important. You need to set an accurate value.
* The extraction may not be satisfying when there are intersecting streets.