---
id: Identitybutton
title: Identity  
---  
Layer identity is a process of performing an Intersect operation on a source
dataset and an overlay dataset. For details about the Identity operator,
please see [Overlay Analysis Operators](Overlayoperation).

### Instructions

If the source dataset is a point or line dataset, all the objects in the
source dataset will be reserved in the result dataset; if the source dataset
is a region dataset, all the region objects in the source dataset are reserved
in the result dataset.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Identity**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** **Identity**.

### Parameter Description

  * **Source Data** : Select the source dataset for the Identity operation.
  * **Overlay Data** : Select the source dataset for the Identity operation.
  * **Result Settings** : Select the datasource of the result dataset and specify the name of the result dataset.
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

  * **Compare Results** : If the check box is checked, the erased dataset, the erasing dataset, and the result dataset will be displayed in a new map window for the user to compare.

  * **Single Object** : If a line falls into multiple region objects or the borders of multiple region objects, check this box to allow the application to return one object only. Otherwise, the application will return multiple objects. Please refer to the page [Intersection](Intersectbutton) for an instance.

###  Notes

Before overlay analysis, please make sure that the data is consistent with the
projection information.

### Related Topics

[Introduction to Overlay
Analysis](AboutOverlay)

[Overlay Analysis
Operators](Overlayoperation)


