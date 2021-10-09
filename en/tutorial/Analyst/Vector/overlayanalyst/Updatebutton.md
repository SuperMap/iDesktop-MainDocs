---
id: Updatebutton
title: Update  
---  
Layer updating is a process of replacing object parts in a source dataset
(updated dataset) with those in an overlay dataset (update dataset) where they
overlap. For more information about the Update operator, please see [Overlay
Analysis Operators](Overlayoperation).

### Instructions

  * The source dataset and the overlay dataset of an Update operation must be region datasets.
  * In the updated dataset, the object parts that overlay with the update dataset are replaced and saved in the result dataset.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Update**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** > **Update**.

### Parameter Description

  * **Source Data** : Select the updated dataset.
  * **Overlay Data** : Select the updating dataset.
  * **Result Data** : Select the datasource of the result dataset and specify the name of the result dataset.
  * **Set Fields** : Select fields from the source dataset and the overlay dataset to save the resulting attributes. 
  * **Tolerance** : After an overlay analysis, if the distance between two nodes is less than this value, the two nodes will be snapped together. The default value of this tolerance is the node tolerance value of the clipped dataset (this value is set in the node tolerance item in the dataset tolerance setting under the Vector Dataset tab in the Dataset Attributes dialog box). 

The default tolerance value is related to the coordinate system of the
dataset. For details, please see [Tolerance
Introduction](../../../DataProcessing/Tolerance).

  * **Compare Results** : if the check box is checked,the updated dataset, the update dataset, and the result dataset will all be displayed in a new map window for the user to compare.

###  Notes

Before overlay analysis, please make sure that the data is consistent with the projection information.

### Related Topics

[Introduction to Overlay Analysis](AboutOverlay)

[Overlay Analysis Operators](Overlayoperation)


