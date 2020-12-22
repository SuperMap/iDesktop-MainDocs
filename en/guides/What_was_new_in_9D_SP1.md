---
id: What_was_new_in_9D_SP1
title: SuperMap iDesktop .NET 9D SP1 New Features
---
SuperMap iDesktop .NET 9D Service Pack 1 desktop product on the basis of the
previous version, adds and optimizes these modules: Data Management, Data
Processing, Mapping, Traffic analysis, Network Analysis, Diagram, Online, 3D.
For Data Management , supports SinoDB database engines and MongoDB
datasources, Optimizes reassign dataset function, etc. For Data Processing,
adds fill gap function, and supports text dataset dissolve. For Mapping,
supports generates vector tile formats when generating a map cache, and the
color scheme is added and optimized, which makes the color scheme richer and
easier to use; The traffic analysis adds route object editing, extract
M-values, query M-values function; In the Diagram module, adds the donut
diagram ,area diagram and bar diagram 3 types, and provide diagram templates,
while optimizes the interaction of diagrams; For Online, the new personal
center manages personal account "My service" and "My Data" resources, and
supports the real-time data query traffic, and supports the path navigation
analysis based on Supermap online service.

**SuperMap iDesktop .NET 9D SP1 includes the following new features and
optimizations:**

### Data Management

* Supports for SinoDB database engine to manage massive spatial data.
* Supports for new and open MongoDB datasources, supports for managing MongoDB database point, line, region and other spatial datasets, can be used SuperMap and Geojson two storage methods.
* When the map dynamic projection is enabled, the conversion parameters of projection are supported, so that the data in different projection coordinate systems can be displayed more accurately.
* Optimizes reassign dataset function to reassign the associated datasource or dataset to the current map. 
* Optimizes the operation results of renaming datasources and datasets, and automatically modifies the datasets associated with the layers in the associated map, reducing the amount of user manual modification of the map.
* When importing GJB data, supports for setting the configuration file of text size, the user can preset the conversion between font size and font type to reduce the further adjustment and editing of the text style in the imported dataset.
* Optimizes export VCT data function, supports exporting multiple datasets to one VCT file.
* Supports for saving and opening MySQL, PostgreSQL, DM, MongoDB workspace.
* Adds and optimizes the relevant function of the Mosaic dataset to make the mosaic dataset more fully usable, as follows:
  * In the Workspace Manager Mosaic Dataset node to add outline and boundary datasets, you can directly click to view the range data and their properties.
  * Supports clipping range by the (.shp) file ,It is supported to deal with the none-value region of the image data caused by the projection transformation.
  * Supports rebuilding mosaic dataset ranges, including rebuilding footprints, rebuilding boundarys, and rebuilding clip ranges.

### Data Processing

* Adds fill gap function, user can expands the current region object to fill the gap between the object and the object around it.
* In the dataset dissolve function, supports the dissolve of the text dataset.
* Optimizes the display of enumeration fields and supports the setting of descriptive information for the display domain. It is easy to help the user to identify the actual meaning of the field value by describing the information.

### Mapping

* Suppors for setting up a raster ranges thematic map special value style and transparency, optimizes the raster ranges thematic map display.
* When generating a map cache, supports generates vector tile formats. Vector tiles occupy less server resources, transfer more convenient and more flexible display.
* Adds a number of color schemes, and optimizes the existing color scheme, make the color scheme richer:
  * Adds 16 color schemes for unique values map, Graph thematic map, unique label thematic map and the range label thematic map, all of which are composed of more than 8 key colors.
  * Optimizes the random colors of the map, the map will only appear in the color scheme of the key color, making the color effect becomes more controllable, and truly achieve "what you see is what you get."
  * Optimizes color scheme grouping, and split "For point, line and label" into "For Lable Unique Value Map" and "For label ranges map" to suit different usage scenarios.

### Traffic Analysis

* Adds route object editing, supports line split, region split, object split, split, acurate split, smooth, resample, union, join and so on.
* Adds extracting M-values of routes function, extracting scale value of route data according to the interval, which can be used to mark the M value of route data in the map so that users can know the route value of each route.
* Adds querying M-value of the route function to check the value of the route M in the specified route layer and the location of the mouse so that the user can know the M value at the specific route of the route data.
* Adds sample data in SampleData\ExerciseData\LinearReferencing. Shows how to display the route scale in the map.

### Network Analysis

* Supports for generating detailed region during service area analysis, so that users get more accurate analysis results.

### Diagram

* Adds diagram templates that allows users to create diagram directly according to the template.
* Supports exporting a diagram style as a template for reuse, or you can save your own diagram as a template in the diagram template library for reuse.
* Enrich the diagram type, adds donut diagram 、 area diagram and bar diagram 3 types.
* The scatter diagram supports the use of linear regression to add a best-fit line to the diagram, It can use regression analysis to estimate the strength and direction of the relationship between dependent and independent variables. 
* Supports by setting up SQL filter expressions or by selecting interest objects in the map window as a filter, only the filtered objects are create diagram.
* Optimizes the interaction between diagrams, maps, and Attributes, support shift to select multiple statistic results, and highlight the same objects in the map.

### Online

* Adds Personal Center node in Workspace manager users can manage "My services" and "My Data" in the personal center, support to view and modify descriptive information for personal services, and support users to manage uploaded workspaces, data sources, color schemes, and other data.
* Supports to view the real-time traffic data provided by Tencent on iDesktop, and quickly check the traffic status information.
* Supports for bus interchange query based on SuperMap Online map service.
* Adds path navigation analysis function:
  * Supports path navigation analysis based on Supermap Online map service.
  * Supports path navigation analysis to set up the passing point for analysis.
  * Supports sharing analysis results for other iDesktop .NET user.

### 3D

* **Model Operation**
* New feature of building linear extrude, realize to build entity model for region data structure.
* New feature of model panning, panning operation for specified model or positions among models within a wide range, support for large quantity of models and operation withdraw.
* New feature of model rotation, process rotation operation for specified model or positions among models within a wide range, support for large quantity of models.
* **Operation of Oblique Photogrammetry**
* New feature of hollowing, process hollowing for photogrammetric data, shape of hollow can be set Rectangle, circle, polygon or selected region object. Support to preview the result. 
* New feature of model monomerizing, be able to check attribute and highlight selection. 
* **3D Analysis**
* Optimize the sunshine analysis feature, withdraw the layer shadow for enabling model data before process analysis. 
* **Oblique Photogrammetry**
* New feature of linear extrude, extract the extreme value for photogrammetric data within specified range, build linear extrude based on extreme value.
* New feature of extracting point data, for extracting elevation value from a specified point of TIN terrain, be able to convert 2D point to 3D point. 
* New feature of viewing historical record, realize the unified control for photogrammetric file in different steps, support to playback.
* **3D Data**
* New feature of TIN terrain generates mixed large file, improve efficiency of loading TIN terrain.
* New feature of extracting point data, for extracting elevation value from a specified point of TIN terrain, be able to convert 2D point to 3D point. 
* New feature of model break-up, dismember model into single, editable model while remaining its size.
* **Scene Property**
* New feature of accepting shadow, displaying elevation and multiple options. 
* **Layer Property**
* 3D clipping cache, model provides three rendering mode: double sides, clockwise counterclockwise.
* New filling mode: filling and outlining for TIN terrain property. 
* **Spatial Analysis**
* 3D space querying feature, support for point and model objects. 
* **Scene**
* Polygon querying feature, drawing polygon in the scene, stretching height and bottom elevation, realize 3D querying for model objects.

### Ease of Use

* Optimizes the speed of switching the Ribbon tab and improves the user's operating experience.
* Resolved some cases when the desktop is minimized to the operating system task bar, the restore to the maximized interface window has the carton problem, which improves the user experience's fluency.


