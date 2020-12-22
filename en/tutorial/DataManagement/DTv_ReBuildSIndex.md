---
id: DTv_ReBuildSIndex
title: Rebuilding Spatial Indexes
---
### ![](../../img/read.gif)Instructions

Rebuilds the spatial index for a vector dataset. A data set can only use one
index in one moment, but the index can be switched. For example, the data set
in the early editing operation more, you can create a dynamic index of the
data set, at the end of the editing, only to static display, you can rebuild
the spatial index R-tree index.

When the data set is in the edit state, the system automatically maintains the
current index. In particular, when the data has been edited several times, the
efficiency of the index will be affected to varying degrees, the need to re-
establish the spatial index.

### ![](../../img/read.gif)Basic Steps

      1. Right click on a vector dataset node in the workspace manager, and select Rebuild Spatial Index, the Spatial Index Manager dialog box is displayed.
      2. In the "index type to be built", select the appropriate spatial index type to rebuild the spatial index for the dataset.

### ![](../../img/read.gif)Related Topic

![](../../img/smalltitle.png) [Spatial Index](ManageSpatialIndex-en.htm)

![](../../img/smalltitle.png) [Manage Spatial Index](SpatialIndexManagement-en.htm)

