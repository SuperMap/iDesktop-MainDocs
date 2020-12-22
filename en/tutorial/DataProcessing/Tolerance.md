---
id: Tolerance
title: Tolerance
---
Tolerance is a distance value, in the range of the value, all the nodes or (and) lines are considered to be identical. In vector dataset processing, dynamic segmentation, spatial analysis and other operations, it is often necessary to set the tolerance.

The default tolerance values of different coordinate system are different. If the source dataset is the projection coordinate system, the default value is 1m; if the source dataset is the geographic coordinate system, the default value is 0.00001 degree; if the source dataset is the planar coordinate system, the default value is 1/1000000 of the larger side in the dataset and its unit is the same with the coordinate system unit.

The default tolerance value takes 1 meter as the benchmark, when the dataset is geographic coordinates, the unit is degree. The conversion between the two units can be got by the earth's circumference. The earth equator circumference is 40075.7km, with 360 degrees divided by 40075.7km is 0.0000898 degrees/m, while the higher latitude, the smaller the actual circumference, therefore, the latitude and longitude value for 1m is bigger, approximately 1m/ 0.00001 degree.

### ![](../img/read.gif)Note

  1. If the source vector datasets have node tolerance, the default tolerance value is consistent with the node tolerance.
  2. The tolerance domain is [0, +8), if the input value is beyond the tolerance range, it will prompt notice information.