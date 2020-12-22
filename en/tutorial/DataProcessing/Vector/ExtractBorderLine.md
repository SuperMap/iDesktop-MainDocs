---
id: ExtractBorderLine
title: Extract Border Line
---
### ![](../../img/read.gif)Introduction

This function is used to get the borders of region objects and save them as a line dataset. If a border line has both left and right region polygon, then the border will be a common border for the two region features and will be extract only once; if a border line has either left or right region polygon, then the border line will be the outline of the region outline.

### ![](../../img/read.gif)Basic Steps

  1. In the Topology group of the Data tab, click the Extract Border Line button. 
  2. You can add or remove any dataset for the operation. There are a number of buttons on the toolbar: 
  * ![](../../img/AddDataButton1.png) Button: Click the Add button, and select any region dataset to extract border line from.
  * ![](../../img/SelectAll.png) Button: Click Select All, and all the available datasets will be selected.
  * ![](../../img/SelectInvert.png) Button: Click Select Reverse and all the unselected datasets will be selected, and all the selected will be unselected.
  * ![](../../img/RemoveButton.png) Button: Click Delete to remove one or more selected items from the list.
  * ![](../../img/SettingButton.png) Button: When you select one or more items, you can click the Batch Setting button, and specify the same datasource to save the result datasets to, as well as check whether to do topology preprocessing for all of them.
  3. If you check the option "Topology Processing", topology operations, such as splitting by intersection, adjusting polygon directions, inserting nodes between nodes and line segments, and snapping to nodes, will be done on the the region dataset. This will prevent errors like pseudo-nodes, duplicated node, dangling line segments, duplicated lines, etc.

Note that, topology will change the source dataset, as prompted by the button ![](../Topology/img/TipButton.png), so make sure you data is backed up if you don't want to change the original dataset.

### ![](../../img/note.png)Note

  * The function is only available for region datasets, not for CAD datasets.
  * It is strongly advised you check the option "Topology Processing", to guarantee the quality of result data. 