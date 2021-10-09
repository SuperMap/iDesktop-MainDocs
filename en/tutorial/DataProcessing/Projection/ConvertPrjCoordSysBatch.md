---
id: ConvertPrjCoordSysBatch
title: Batch projection Transformation
---
### Introduction

iDesktop supports converting/transforming the coordinate system of multiple datasets in bulk. The coordinate systems of the specified datasets are converted to the coordinates of the target datasource.

### Function Entrances

* Click **Start** > **Data Processing** > **Projection Transformation** > **Batch Projection Transformation**.
* Or, right-click on your datasource and select **Batch Projection Transformation**.

### Basic Steps

1. **Source Data** : 
* Datasource: click the drop-down button and select the datasource which stores the datasets to be converted.
* Projection Information: Displays the specific information of the coordinate system of the datasource.
2. **Target Data** : 
* Datasource: click the drop-down button and select the datasource to save the result datasets.
* Projection Information: Displays the specific information of the coordinate system of the datasource.
3. On the coordinate systems of original and target datasources, you should pay attention to: 
* Planar coordinate systems can not be converted. The system will filter all datasets using other kinds of coordinate systems.
* Generally, it is recommended that the coordinate systems separately used by a datasource and a dataset in the datasource are consistent. If they are not the same, the coordinate system used by the dataset will be as the source coordinate system in a real conversion. 
* The datasets using plane coordinate systems will not be displayed in the target datasource list. 

* **Projection Transformation Parameter** settings: 

* Method: click the drop-down list and select a proper projection conversion method. For the specific information on the conversion method, please refer to [the reference system conversion method](PrjConvertMethods).
* Transform Parameter: different conversion methods require different parameters. For more specific descriptions, please refer to [Transform dataset projection](ConvertPrjCoordSysSingle). 
* Select the datasets to be converted in Dataset List. You can modify the dataset name in Target Dataset of the table.
* Click Convert to finish. Users can view the result in the output window.

### Note

1. Any projection has a projection distortion, so the transformation of different projection process is usually not completely reversible, that is, the map data from its original projection to some other projection, but not always very accurate to convert it back, so the original data should be kept. To reduce the number of projection transformation, the accuracy of the results is also reduced. 
2. Each projection is designed to reduce the deformation of a given area in a given characteristic, so it is not suitable for all areas. It is needed to choose the suitable transformation method. For example, from Mercator projection to Gauss projection, the result's accuracy can only be guaranteed in the region near the central meridian, and the areas far from the central meridian will lead to great deformation.
3. In the actual work, what kind of method to use depends on the specific circumstances. For the determination of all parameters, please buy the correct mapping data, or verify the correctness of the parameters with the coordinates of the known control points in the two coordinate system.
4. After converting the text object, the height and angle will be converted. If users don't need these changes, they should modify the height and angle.



