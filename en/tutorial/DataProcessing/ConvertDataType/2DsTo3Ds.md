---
id: 2DsTo3Ds
title: 2D and 3D
---
### ![](../../img-en/read.gif)Instructions

  * Convert a 2D dataset (point, line, region) into a 3D dataset (point, line, region).
  * The fields and attributes will be retained when converting a 2D Dataset to 3D Dataset, A Z field (altitude information) will be added to the data object, or the corresponding node information. Check the node information of the selected information, see [Properties Window for Objects in Vector Datasets](../../Visualization/Interaction/PropertyWinIntro.htm).
  * A Z field will be added to the node information of the data object when converting a 2D Dataset to 3D Dataset, A elevation field (SMZ) will also be added to the dataset attribute table .
  * Add the 3D data to the scene. In the "Layer Properties" tab, set the "Altitude Mode" as not Clamp to Ground, the 3D data object will display the altitude with the Z coordinate.

### ![](../../img-en/read.gif)Basic Steps

Here we take converting a 2D line dataset into a 3D line dataset as an
example.

  1. In the Data Processing group on the Data tab, click the Conversion dropdown arrow and select 2D Line to 3D Line.
  2. In the 2D Line -> 3D Line dialog box that shows up, specify the 2D Line dataset to be converted, the target dataset name and set a datasource for saving the result.
  3. Select the the altitude field, or click the z coordinate form, and input the altitude value. Line data have Start Z and End Z two values; only one altitude value is needed for point data or region data.
  4. Click "Convert" to complete the operation.


