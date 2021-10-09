---
id: What_was_new_10i(2020)SP1
title: SuperMap iDesktop 10i(2020) SP1 New Features
---
**Based on the last version, SuperMap iDesktop 10i(2020) SP1 introduces and
optimizes the following features:**

**Data Management**

  * Database-based datasources including supports modifying field names, types, lengths, required items, and default values of datasets. The operation won't generate backup data or change table names. 
  * Improves the performance of PostgreSQL-based datasources and PostGIS-based datasources importing.
  * The new feature Refresh Dataset allows you to refresh your dataset instantly when parallelly operating on it.

**Data Processing**

  * The registration of a CAD dataset supports the linear registration mode and the quadratic polynomial registration mode.
  * When importing data as a TIFF file  you can set its compression mode.

**Spatial Analysis**

  * Optimizes the **Overlay Analysis** function . When performing operations like clipping, identical on line datasets and region datasets, the **Keep Single Object** parameter can keep single object only. If you don't check it, the application will keep multiple objects. 

**Mapping**

  * When saving your map as an image, the application can estimate the resulting image size (for reference), which can help you set the related parameters. 
  * Girds supports setting resolution. If the grid field is double precision, the feature can help adjust the beauty of labels.
  * You are allowed to set the stretching mode of image layers in bulk  for their displays. 
  * The feature Multi-task supports generating map tiles from an encrypted file-based workspace.

**3D Data**

  * Vector region data caching: support vertex compression, support to set texture picture on top and sides, texturing methods and UV texture coordinate settings and other parameters.
  * Import rvt file: newly support polygon mesh and triangle mesh; support texture rotation; optimize attributes and remove fields with repeated name.
  * Optimize the oblique photogrammetry in library, support Draco compression; automatically calculate the pyramid level of the root node merging. 

**Scene**

  * Local scene: Support touch operation.
  * Scene output picture: support setting DPI and width and height.
  * Optimize the height deviation of scene-related browsing.

**3D Designer**

  * Material editor: supports texture material editing on model dataset, support editing, creating, and deleting materials.

**Layer Properties**

  * 3D model cache properties: newly added the option to optimize the rendering of semi-transparent models, and optimize the display effect of models with semi-transparent materials.
  * 3D model dataset layer properties: set the quadrilateral wireframe threshold of the model.

**3D Analysis**

  * The scene generates DOM, the default camera height is the maximum height of the layer.



