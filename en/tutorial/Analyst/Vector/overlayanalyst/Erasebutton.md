---
id: Erasebutton
title: Erase  
---  
Layer erasing is a process of erasing the feature parts in the source dataset
(the erased dataset) using the overlay dataset (the erase dataset). The erased
parts are the overlapped parts of the two datasets. For details about the
Erase operator, please see [Overlay Analysis
Operators](Overlayoperation).

### Instructions

  * The erase dataset must be a region dataset. The erased dataset can be a point, line, or region dataset.
  * In the erased dataset, only the objects falling outside of the polygons in the erase dataset will be output to the result dataset.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Overlay Analysis** > **Erase**.
  * **Toolbox** > **Vector Analysis** > **Overlay Analysis** > **Erase**.

### Parameter Description

  * **Source Data** : Select the erased dataset.
  * **Overlay Dataset** : Select the erasing dataset.
  * **Result Settings** : Select the datasource of the result dataset and specify the name of the result dataset.
  * **Set Fields** : Select fields from the source dataset and the overlay dataset to save the resulting attributes. 
  * **Tolerance** : The application will calculate the tolerance automatically according to the involved datasets. 

After an overlay analysis, if the distance between two nodes is less than this
value, the two nodes will be snapped together. The default value of this
tolerance is the node tolerance value of the clipped dataset (this value is
set in the node tolerance item in the dataset tolerance setting under the
Vector Dataset tab in the Dataset Attributes dialog box).

  * **Compare Results** : If the check box is checked, all involved datasets including the result dataset will be displayed in a new map window for the user to compare.

###  Notes

Before overlay analysis, please make sure that the data is consistent with the
projection information.

### Related Topics

[Introduction to Overlay
Analysis](AboutOverlay)

[Overlay Analysis
Operators](Overlayoperation)


