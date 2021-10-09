---
id: 2DsTo3Ds
title: Conversion between 2D Data and 3D Data
---
### 2D to 3D

* Convert a 2D dataset (point, line, region) to a 3D dataset (point, line, region).
* The fields and attributes will be retained when converting a 2D Dataset to 3D Dataset, A Z field (altitude information) will be added to the data object, or the corresponding node information. Check the node information of the selected information, see [Properties Window for Objects in Vector Datasets](../../Visualization/Interaction/PropertyWinIntro).
* A Z field will be added to the node information of the data object when converting a 2D Dataset to 3D Dataset, A elevation field (SMZ) will also be added to the dataset attribute table .
* Add the 3D data to the scene. In the "Layer Properties" tab, set the "Altitude Mode" as not Clamp to Ground, the 3D data object will display the altitude with the Z coordinate.

We take the conversion between 2D line data to 3D line data as an example to introduce the conversion operation.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **2D Line to 3D Line**.
* **Toolbox** > **Conversion** > **Conversion between 2D and 3D Data** 2D Line to 3D Line. (iDesktopX) 

**Operating Instructions**

1. In the 2D Line->3D Line dialog box, specify the 2D Line dataset to be converted, the target dataset name and set a datasource for saving the result.
2. Select the altitude field, or click the z coordinate form, and input the altitude value. Line data have Start Z and End Z two values; only one altitude value is needed for point data or region data.
3. Click **Convert** to start the operation.

### 3D Data to 2D Data

* Convert a 3D dataset (point, line, region) to a 2D dataset (point, line, region).
* After conversion, the SMZ field will be deleted from the attribute table. Meanwhile, the Z value information will be removed from the node information. The Z value information will be removed from the node information for 3D line and 3D region datasets.

Here we take the conversion between a 3D point dataset and a 2D point dataset as an example to introduce the conversion operation.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **3D Point to 2D Point**.
* **Toolbox** > **Conversion** > **Conversion between 2D and 3D Data** 3D Point to 2D Point. (iDesktopX) 

**Operating Instructions**

1. In the 3D Point -> 2D Point dialog box, specify the dataset to be converted and select a datasource to save the result dataset.
2. Click **Convert** to start the operation.

