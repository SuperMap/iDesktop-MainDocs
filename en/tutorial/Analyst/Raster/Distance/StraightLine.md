---
id: StraightLine
title: Generating Distance Raster
---
### Introduction

Generate distance raster is used to calculate the distances between every cell to the nearest sources (the interesting features or objects, such as well, road or school), and assign the values to the cells to create distance dataset. Then create direction dataset according to the direction to the nearest source; then identify the service coverage of each source and create the allocation dataset.

When creating distance raster, you can specify the cost data to get the cost distance raster. The source data of the cost distance raster analysis can be vector data (point, line, and region) or raster data. Similar to straight-line distance raster analysis, the result of cost distance raster analysis includes a cost distance raster dataset, a cost direction raster dataset, and a cost allocation raster dataset. The cost distance raster contains the least accumulated cost value form each cell to the nearest source. The nearest source of a cell is the source that the cell can travel to with the least cost. The cell value is the least accumulated cost of the many paths to the source. Cost data is optional, and so you will get the straight-line distance raster result without setting it.

### Functional Entrances

  * **Spatial Analysis** > **Raster Analysis** > **Distance Raster** > **Generate Distance Raster**.

### Parameter Description

  * **Source Data** : To set the datasource of source data and select the dataset to store the source data. The source data is the interested feature or object, such as well, road or school. it can be vector data or raster data.
  * **Cost Data** : To set a datasource to store cost data, and choose a cost-raster-dataset from the datasource, the dataset can be empty, but a negative value is not allowed, and the system will prompt "The cost grid can not have a negative value.".

The cost dataset contains the cost of each cell, such as height, slope, etc.

  * **Parameter Settings** : To set parameters of the distance raster, including maximum distance and resolution. 
    - **Max Distance** : The maximum distance of the distance raster created, the cells larger than the distance will be assigned as no value in the result dataset. The default value is 0, this means the result is not restricted by distance. This is an optional parameter.

    - **Resolution** : Set the resolution of the result dataset. The default value is 1/500 of the diagonal line of the source dataset. This parameter is optional.

  * Set result data. Select the data source to save the result data, the names of distance raster dataset, direction raster dataset and allocation raster dataset. The default names are DistanceGird, DirectionGrid and AllocationGrid respectively. Note that the direction dataset and allocation dataset will not be created if their names are null. The name of the distance dataset is required.
  * Click "Environment Settings" button to open the "Environment Setting for Raster Analysis" where you can set the analysis parameters to values as needed. For detail operations, please refer to [Setting the Analysis Environment](../../Raster/AnalystEnvironment). 

Note: you are allowed to specify the environment parameters as global variables, then you do not need to set the parameters again in other operations. Also the system can read parameter values specified in the raster analysis environment if you do not set parameters here.

### Note

When creating distance raster, to save store space, the application will determine the pixel format of the dataset according to the range or the result dataset raster value, thus the direction dataset and the empty values in the allocation dataset is influenced. 
* **Create distance raster without cost data**

The range of the direction data is [0,360], and stored in double byte, the empty value is -9999. What pixel format the allocation dataset will use is determined by the number of objects in the source data used to create distance raster. For instance, if the source data has 3 objects, the pixel format of the direction dataset will be 4 bytes and the empty will be 15.

* **Create distance raster with cost data**

The range of the direction data is [0,7], and stored in 4 byte, the empty value is 15. What pixel format the allocation dataset will use is determined by the number of objects in the source data used to create distance raster. For instance, if the source data has 16 objects, the pixel format of the allocation result dataset will be single byte and the empty will be 255.

### Related Topics

For the introduction of the result dataset, distance raster, direction raster and allocation raster, see [Distance Raster Overview](RasterDistance).

[Distance raster](RasterDistance#11)

[Direction raster](RasterDistance#12)

[Allocation raster](RasterDistance#13)
