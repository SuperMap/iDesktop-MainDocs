---
id: AnalysisArea
title: Analysis Area Settings
---
### Introduction

Used for setting analysis area for network analysis, with bounds of the dataset being the analysis area. Two methods are provided: Select Region and Draw Region. After setting the analysis area, only network dataset within the specified bounds will be loaded for analysis, which enhances the analysis performance.

### Basic Steps

1. Click the **Analysis Area Settings** button in the **Environment** window to open the **Analysis Area Settings** dialog box.
2. Analysis Area Settings window provides three ways to set analysis area including Dataset Bounds, Current Window, and User Define. 
  * **Dataset Bounds** : set the dataset bounds to the analysis scope.
  * **Current Window** : set the map size of the current window to the analysis range
  * **User Define** : you can define an analysis range through selecting object, drawing range, or copying and pasting. 
    * Select Object: In the current map window through the mouse frame or click the way to select one or more objects, the selected object range is set to the output range.
    * Range: In the current map window, draw by clicking the mouse to determine a rectangular area for the output range.
    * Copy and Paste: Click Copy button to copy the currently set range, and click the Paste button to set the left, lower, right, and upper values of the replication range to the current range at the range of settings that support pasting.
3. In the dialog box, select User Define to use either Draw Region or Select Region to set analysis bounds. 
  * Draw Region: Click the drop down arrow on the right to select Draw Region, move the mouse to the current map window, draw an area in the window to set it as analysis area.
  * Select Region: If there are region layers in the current map window, users can activate the Select Region option, select one region object to set the bounding box of the region as the analysis area.
4. The Range section is used to display and set analysis area. If the User Define method is selected to specify the bounds, users can directly specify left, top, right, bottom coordinates in the boxes. If Default Range is selected, the values here cannot be modified.
5. Click OK to finish the operation. Click Cancel to exit.

###  Note

Analysis Area Settings area is suitable for transportation analysis. After setting the analysis area, failure may be caused if analysis stops are not in the analysis area. Then analysis area can be set again or set analysis stops in the analysis area for another analysis.
