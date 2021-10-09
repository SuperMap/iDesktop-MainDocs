---
id: Unionbutton
title: Union  
---  
Layer union is a process of performing a Union operation on a source dataset
and an overlay dataset. For details about the Union operator, please see
[Overlay Analysis Operators](Overlayoperation).

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Merge**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** > **Merge**.

### Parameter Description

  * **Source Data** : Select the source dataset for the operation.
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

  * **Compare Results** : if the check box is checked, all involved datasets including the result dataset will be displayed in a new map window for the user to compare.

###  Notes

Before overlay analysis, please make sure that the data is consistent with the
projection information.

###  Related Topics

[Introduction to Overlay
Analysis](AboutOverlay)

[Overlay Analysis
Operators](Overlayoperation)

