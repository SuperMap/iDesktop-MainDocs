---
id: Intersectbutton
title: Intersect  
---  
Layer intersecting is a process of finding the intersection of a source
dataset (intersected dataset) and an overlay dataset (intersect dataset). For
details about the Intersect operator, please see [Overlay Analysis
Operators](Overlayoperation).

### Instructions

  * The intersect dataset must be a region dataset. The intersected dataset can be a point, line, or region dataset.
  * The overlapped parts of the two datasets are reserved in the result dataset.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Intersect**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** > **Intersect**.

### Parameter Description

  * **Source Data** : Specify one or more datasets to perform the intersection operation.
  * **Overlay Data** : Select the intersect dataset and the datasource that contains it.
  * **Result Data** : Select the datasource of the result dataset and specify the name of the result dataset.
  * **Set Fields** : Select fields from the source dataset and the overlay dataset to save the resulting attributes. 
  * **Tolerance** : The application will calculate the tolerance automatically according to the involved datasets. 

After an overlay analysis, if the distance between two nodes is less than this
value, the two nodes will be snapped together. The default value of this
tolerance is the node tolerance value of the clipped dataset (this value is
set in the node tolerance item in the dataset tolerance setting under the
Vector Dataset tab in the Dataset Attributes dialog box).

The default tolerance value is related to the coordinate system of the
dataset. For details, please see [Tolerance
Introduction](../../../DataProcessing/Tolerance).

  * **Compare Results** : if the check box is checked, the intersected dataset, the intersect dataset, and the result dataset will all be displayed in a new map window for the user to compare.
  * **Single Object**: If a line falls into multiple region objects or the borders of multiple region objects, check this box to allow the application to return one object only. Otherwise, the application will return multiple objects. 

###  Notes

Before overlay analysis, please make sure that data is consistent with the
projection information.

### Related Topics

[Introduction to Overlay
Analysis](AboutOverlay)

[Overlay Analysis
Operators](Overlayoperation)


