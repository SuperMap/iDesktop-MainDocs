---
id: ExtractBorderLine
title: Extract Border Line
---
### Introduction

Gets the borders of region objects and saves them as a line dataset. If a
border line has both left and right region polygon, then the border will be a
common border for the two region features and will be extract only once; if a
border line has either left or right region polygon, then the border line will
be the outline of the region outline.

### Function Entrances

* **Data** tab > **Topology** > **Extract Border**.
* **Toolbox** > **Data Processing** > **Vector** > **Extract Border**. (iDesktopX)

### Parameter Specification

Set the following parameters in the **Extract Border** dialog box.

* With the tool bar, you can add or remove source datasets involved in the operation.
* **Pre-process Data** : check the option to allow the application to pre-process your region datasets topologically before extracting borders. Such as splitting by intersection, adjusting polygon directions, inserting nodes between nodes and line segments, and snapping to nodes, will be done on the the region dataset. This will prevent errors like pseudo-nodes, duplicated node, dangling line segments, duplicated lines, etc.

The operation will change the source dataset. Therefore, please make sure that your data has been backed up if you don't want to change the original dataset.

### Note

* The function is only available for region datasets, not for CAD datasets.
* It is strongly advised you check the option "Topology Processing", to guarantee the quality of result data. 
