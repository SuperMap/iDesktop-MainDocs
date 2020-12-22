---
id: ConvertPrjCoordSysBatch
title: Batch projection Transformation
---
### ![](../../img/read.gif)Introduction

The coordinate system of multiple datasets are converted in batch. The coordinates of the specified datasets are converted to the coordinates of the target datasource.

### ![](../../img/read.gif)Basic Steps

  1. Click Start>Data>Transform Projection>Batch Projection Transformation to start it, or right click a datasource, point to Batch Transform in the context menu to prompt the Batch Projection Transformation dialog as follows. 
  2. Source Data: 
    * Datasource: click the "Datasource" combo box drop-down button, select the datasource which stores the datasets to be converted.
    * Projection Information: Display the detailed information of the coordinate system of the datasource.
  3. Target Data: 
    * Datasource: click the "Datasource" combo box drop-down button, select the datasource which is used to store the result datasets.
    * On the coordinate systems of origianal and target datasources, you should pay attention to: 
      * Planar coordinate systems can not be converted. The system will filter all datasets using other kinds of coordinate systems.
      * Generally, it is recommended that the coordinate systems separately used by a datasource and a dataset in the datasource are consistent. If they are not the same, the coordinate system used by the dataset will be as the source coordinate system in a real conversion. 
      * The datasets using plane coordinate systems will not be displayed in the target datasource list. 
  4. Method: click the "Method" tab, and the drop-down menu list shows the six kinds of projection conversion methods, the user can choose a suitable projection conversion method. For the description of the conversion method, please refer to [the reference system conversion method](PrjConvertMethods.htm).
  5. Transform Parameter: different conversion methods correspond to different customized parameters. For more specific descriptions, please refer to [Transform dataset projection](ConvertPrjCoordSysSingle.htm#1). 
  6. Select the datasets to be converted in Dataset List. You can modify the dataset name in Target Dataset of the table.
  7. Click Convert to finish. Users can view the result in the output window.

### ![](../../img/read.gif)Note

  1. Any projection has a projection distortion, so the transformation of different projection process is usually not completely reversible, that is, the map data from its original projection to some other projection, but not always very accurate to convert it back, so the original data should be kept. To reduce the number of projection transformation, the accuracy of the results is also reduced. 
  2. Each projection is designed to reduce the deformation of a given area in a given characteristic, so it is not suitable for all areas. It is needed to choose the suitable transformation method. For example, from Mercator projection to Gauss projection, the result's accuracy can only be guaranteed in the region near the central meridian, and the areas far from the central meridian will lead to great deformation.
  3. In the actual work, what kind of method to use depends on the specific circumstances. For the determination of all parameters, please buy the correct mapping data, or verify the correctness of the parameters with the coordinates of the known control points in the two coordinate system.
  4. After converting the text object, the height and angle will be converted. If users don't need these changes, they should modify the height and angle.


