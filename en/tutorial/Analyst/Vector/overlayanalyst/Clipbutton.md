---
id: Clipbutton
title: Clip  
---  
Layer clipping is a process of extracting feature parts (points, lines, or regions) from a source dataset (the clipped dataset) using an overlay dataset (the clip dataset). For details about the Clip operator, please see [Overlay Analysis Operators](Overlayoperation).

### Instructions

  * The clip dataset must be a region dataset. The clipped dataset can be a point, line, or region dataset.
  * In the clipped dataset, only the objects falling within polygons in the clip dataset will be output to the result dataset.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Clip**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** > **Clip**.

### Parameter Description

  * **Source Data** : Select the clipped dataset.
  * **Overlay Dataset** : Select the clip dataset.
  * **Result Settings** : Select the datasource of the result dataset and specify the name of the result dataset.
  * **Set Fields** : Select fields from the source dataset and the overlay dataset to save the resulting attributes. 
  * **Tolerance** : After an overlay analysis, if the distance between two nodes is less than this value, the two nodes will be snapped together. The default value of this tolerance is the node tolerance value of the clipped dataset (this value is set in the node tolerance item in the dataset tolerance setting under the Vector Dataset tab in the Dataset Attributes dialog box). 

The default tolerance value is related to the coordinate system of the
dataset. For details, please see [Tolerance
Introduction](../../../DataProcessing/Tolerance).

  * **Compare Results** : If the check box is checked, the clipped dataset, the clip dataset, and the result dataset will all be displayed in a new map window for the user to compare.

  * **Single Object** : If a line falls into multiple region objects or the borders of multiple region objects, check this box to allow the application to return one object only. Otherwise, the application will return multiple objects. Please refer to the page [Intersection](Intersectbutton#1) for an instance.

###  Notes

Before overlay analysis, please make sure that the data is consistent with the
projection information.

### Related Topics

[Introduction to Overlay
Analysis](AboutOverlay)

[Overlay Analysis
Operators](Overlayoperation)


