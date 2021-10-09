---
id: What_was_new
title: SuperMap iDesktop 10i(2021) New Features
---

**Based on the previous version, SuperMap iDesktop 10i(2021) creates and
improves the following features**

### Data Management

  * When creating a new datasource, the default coordinate system is CGS2000. You are allowed to change it through a configuration file. 
  * When creating or opening a PostGIS-based datasource, the default pool size is 50. While for other database-based datasource, the default pool size is 1.
  * When creating or opening an OracleSpatial-based datasource, you can specify the max pool size.
  * Introduces two Japanese geographic coordinate systems: JGD2000 and JGD2011.
  * The mosaic dataset supports managing image data in the format of sid.

### Data Processing

  * The version can re-calculate the length of the vector line dataset and the perimeter and area of the vector range dataset.
  * The feature **Extract Border** can work on 3D line datasets and 3D region datasets.

**Spatial Analysis**

  * Optimizes the feature **Overlay Analysis**. And now, you can set self-intersection parameters to save the self intersection areas as multiple overlap objects. 

**Network Analysis**

  * Optimizes the display of results of **Connectivity Analysis**. The analysis result will be shown on the map intuitively.

**Mapping**

  * Optimizes the tool **Diagnose Performance** : 
    * Improves the interactive way of the tool interface. It is a float window and docks on the right side of the map window. And so, you can do settings and check diagnosed results without affecting your interaction with your map.
    * The feature can diagnose the performance of your maps im multiple scales. 
  * Newly adds multiple color scheme applicable to DEM and aggregation maps to rich the display of data.
  * Newly introduces 142 symbols. Among them, there are 49 linear symbols, 12 filling symbols, and 81 SVG marker symbols to meet more industrial requirements.
  * The new feature **GeoSOT Grid** feature can generate grid data based on the GeoSOT grid division standard.

**Map Tiles**

  * Optimizes the feature **Map Tiles (Multi-task)**. 
    * You are allowed to adjust the priority of the generation of tiles in a scale and pause all related tasks.
    * For the global-subdivision tiling mode, to generate map tiles through multiple tasks, you can specify a base scale, which can improve the efficiency of generating map tiles from mosaic datasets.
    * The tile-generating progress and log information are refreshed and shown instantly.
  * Supports setting a border dataset when merging map tiles to MongoDB. The feature will merge tiles intersecting each other at borders to improve the operation efficiency.

**3D**

**Data Processing**

  * Optimize "Create Spatial Index" to support the creation of nested spatial index.
  * Optimize "Map generation 3D cache", support setting scene type.
  * Optimize the model "Generate Cache". When the single-slice cache is larger than 5M, the output window will output a prompt message; the default parameters of the LOD setting are changed to 75%, 50%, 25%; support setting the attribute storage type, material association file, and S3M version The filter threshold unit is changed to meters; the shortest side parameter of the triangle in the vertex weight mode is changed to height; the model generation S3MBlock cache supports checking the "Instantiate" option.
  * Optimize the vector "Generation Cache", support setting attributes storage type, S3M version and other parameters.
  * Optimize the scene "Generate Cache" to support the S3M version.
  * Optimize Voxel Grid "Generate Cache" to support S3M version.

**3D Data**

  * Optimized the "vector region stretch generated model cache", support setting the attribute storage type, S3M version and other parameters; optimized the model cache border line effect.
  * Optimize the "Point Set Generation Cache Plug-in Model", support setting the attribute storage type, S3M version and other parameters; support setting the game engine asset path.
  * Optimize the "Model Cache Merge Root Node": the default pyramid level is 2; the default parameters of the LOD reduction rate are 75%.
  * New feature: "Tile Management", support for storing data in the MongoDB database; after the data is stored in the MongoDB database, a configuration file will be generated in the specified path; support for connecting to the MongoDB database to add, delete, and query data.
  * New feature: "3DTiles to S3M", which supports the conversion of 3dtiles 3D model data, Oblique Photogrammetric Model Data, to S3M.
  * New feature: Model "Texture Re-mapping", which supports re-splicing the texture of Oblique Photogrammetric Model.
  * Optimize "Generate Configuration File", abolish the target coordinate system, and adjust the target coordinate system to "ObliqueBuilder".
  * Optimize "ObliqueBuilder" to support batch storage; support to set the center point coordinate unit, target coordinate system, S3M version and other parameters.
  * Optimize "Generate Cache" (point cloud), support setting attribute storage type parameters; support generating cache for point cloud data with a space character as the separator.

**Scene**

  * Optimize the "Export Model", and support the export of four data formats: OBJ, FBX, KML+S3MB, and KML+FBX.
  * Support setting camera field of view mode, support custom horizontal or vertical field of view angle.
  * Support setting speed and magnification parameters to control the speed of HTC handles.

**3D Designer**

  * Optimize "Triangulation Simplification" and support setting vertex threshold parameters.
  * New feature: "Model Check" to view the maximum number of vertices and maximum triangle data information of model objects and sub-objects.
  * Optimize "stakeout", support the use of cube, plane and other texture methods to map the model.
  * New feature: "3D Polar Coordinate Modeling", which supports the construction of 3D region models based on UV parameters and mathematical expressions.
  * Optimize the model "Boolean Operation", the calculation time is shorter.
  * New feature: "Remove Suspended Solids", support to remove suspended solids in Oblique Photogrammetric Data.

**3D Analysis**

  * Optimize "Video Releasing" and support setting roll angle parameters.
  * Optimize "Slope and Aspect Analysis" to support obtaining the slope and aspect values ​​of the specified location in degrees.