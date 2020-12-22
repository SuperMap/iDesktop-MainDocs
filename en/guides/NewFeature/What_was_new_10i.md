---
id: What_was_new
title: SuperMap iDesktop .NET 10i New Features
---
Based on the previous version, SuperMap iDesktop .NET 10i introduces and
optimizes the following features.

**Data management**

* Introduces Ali POLARDBGanos database engine and Huawei GaussDB200 database engine.
* Exporting contents from Workspace Manager as an Excel file is supported, so that you can count data information in the current workspace. 
* SpatiaLite (*.sqlite) files and GeoPackage (*.gpkg) files can be opened directly. 
* Datasets can be exported to a new file-based datasource which will be created at the same time.
* Selected geometrical objects can be saved as a GeoJSON file (*.json), wkt string, or a SimpleJson file.
* Any txt (*.txt) file which meets the csv format standard can be imported into iDesktop .NET 10i.
* Adds three Jordan coordinate systems which apply to Arab districts. They are Israel 1993 / Israeli TM Grid, Jordan_JTM, Palestine 1923 / Israeli CS Grid projection coordinate system.
* Adds two projection coordinate systems: Robinson for China and Van der Grinten I for China.
* Web Datasource feature can open the basic terrain map and the dark terrain map.
* The PostGIS engine supports to create GIST spatial indexes for multiple dimensional data and collection data. 
* The MongoDB engine supports to create 2dsphere spatial indexes. All MongoDB geography spatial queries are supported. 
* After joining a dataset to an external table in a PostGIS datasource, iDesktop will use quotation marks around the table name when constructing a SQL expression like a SQL query, filtering, and so on in case that the database is case-sensitive. 

**Data processing**

* Optimizes the Data Registration tool. 
* Importing a point dataset as registration and reference points and exporting registration points and reference points as a point dataset are allowed.
* The coordinate system of the registered data is the same as reference data.
* When converting complex polygons to points, you can set the inner points belong to complex objects or sub objects.
* Supports splitting one text object to several objects thoroughly, so that you can edit the style of each word. 
* You can enable the Snap feature for raster value picking, which improves the picking precision a lot. 
* When updating attributes, the application can match fields with the same name or in the same type automatically.
* Interaction of coordinate system settings in the projection transformation is enhanced. And now, operations of coordinate system settings are integrated with the form of toolbar.
* The Projection Transformation can convert a plane coordinate system of a dataset to other coordinate system through four paramters. 
* You are allowed to set the coordinate system when creating a new dataset.
* The new feature Raster Weighted Sum can overlay multiple raster datasets according to a certain weight resulting in a new raster dataset.
![](img-en/RasterWeightedSum.png)  
---  
* iDesktop can extract the minimum bounding rectangle of lines or points resulting in a new region dataset.
* The feature Point to Line supports setting a sort field which can apply to generate trace lines according to time to simulate the track of point moving. 
* Topolocal Checking allows to check the layer topologically on which a filter expression has beed set to improve the ease of use of the feature. 
* Introduces the new feature Raster Merging which can quickly merge raster data or image data in bulk.

**Mapping**

* The shortcuts Ctrl+Z and Ctrl+Y are enabled on the layer style settings and attribute modification.
* Supports to generate grids resulting in a region dataset.
* The playing of temporal data can be saved as a gif file.
* The feature Point Match Line Direction calculates the vertical direction and distance from a point to a line.
![](img-en/PointMathLine.png)  
---  
* The layer manager adds the new feature Positioning Dataset. So you can position the dataset relative to the current layer.
* iDesktop can publish Vector tiles saved in MongoDB as an iServer service.
* When generating map tiles, you can specify the tile's resolution.
* The Edge Match feature can keeps attributes of objects involved in the calculation. You can keep non-empty attributes, source attributes, or target attributes optionally. 
* The Automatic Avoiding feature adds 8-direction avoiding and surrounding-text avoiding to make labels' display applicable to more scenes. 
* The default uniform label thematic map can write label words from right to left along lines which applies to Arabic words. 
* Introduces a new feature Style Transfer. 
* The feature can change your map's colors according to the specified style image automatically.
* To improve efficiency of image processing, the feature allows you to set the compression mode and the number of color to be extracted 
* Images in multiple kinds of styles are provided. 
* The settings of brightness, contrast, and saturability can adjust colors of text, lines, polygons on a map reasonably.

**Spatial analysis**

* The Spatial Query tool supports setting the query distance. 
* The SQL Query tool allows you to specify multiple associated fields.
* The new tool Image Analysis can extract vegetation by the NDVI function and water by the NDWI function.
* More effective thinning feature Thinning Two-value raster is provided. 
* Improves the ease of use of features Surface Measurement and Viewshed Analysis. iDesktop can determine the layer to be analyzed automatically according to your mouse picking. 
* The Overlay Analysis can perform a union operation or an intersection operation on many datasets at the same time.
* Spatial Query can be run on a map enabling the dynamic projection. iDesktop can project searching objects to the layer to be searched. The resulting coordinate system is the same as the searched layer.
* The feature of setting a join table allows you to set multiple join relations based on the same datasets to restrict the searching result further. 

**Traffic analysis**

* Develops a new feature Indoor Navigation which supports to create, load, and analyze indoor navigation data. 
* The feature can establish indoor network according to road line data, stair point data, POI data, and so on to generate network datasets, region datasets, and attribute datasets which save relationships of floors.
* Builds stair relations according to the network dataset of each floor and the stair-relationship attribute dataset and manages all floor relationships to generate 3D indoor navigation model data.
* The feature can load navigation model data and perform an indoor navigation analysis. It also can run a path guide according to the given start and end.

**Big data online analyses**

* The ability to analyze and process big data based on Spark is provided, and data from HDFS or iServer Catalog can be used for strong spatial analysis online. 
* Supports Vector Clip feature which is used for clipping vector datasets. There are two ways: Internal Clip, External Clip.
* With the new feature Overlay Analysis, analysis operations including "clip, union, erase, intersect, identity, XOR, update" can be operated on the two input datasets to extract new spatial information.
* The feature of Buffer Zone newly provided can create certain width zones for points, lines, or polygons according to a specified distance.
* Adds the feature Reconstruct Tracks Analysis which can describe moving tracks of an object according to a series of positions that the object stays at different time.
* Introduces the feature OD(Origin-Destination Line) Line Make Analysis. According to staring and ending positions, constructs an OD line to express a relation between two points.
![](img-en/ODline.png)  
---  
* Supports Simple Point Density Analysis feature to calculate the density of point features around each output raster cell.
* Supports Kernel Density Analysis feature to calculate the density of point and line feature measurement values in the neighboring range to vividly reflect the distribution of dispersed measurement values in the continuous range.
* Two ways for Point Aggregation Analysis are provided, Grid Region Aggregation and Polygon Aggregation. Point elements in a map can be partitioned by grid regions or polygons. The count of points within every region can be calculated, the degree of aggregation can be reflected by taking the calculated result as the statistics values of regions.
* Introduces the feature Join Features which can connect attributes of a dataset to another dataset based on relation conditions of spatial, time or attributes.
* Supports Single Query feature, you can construct filter conditions based on spatial position relationships between geometric objects.
* Introduces Summarize Attributes Statistics for summarizing the selected attributes of the input dataset.
* Supports Summary Region which is used for creating aggregation maps based on lines or polygons. With the feature, lines or polygons will be divided by mesh or polygons and according to a specified value, calculates statistical values of grid cells.
* Provides the feature Check Topology for checking points, lines, or polygons topologically according to a certain rule and returning invalid objects.

**Visually modeling**

* The model builder newly introduced allows you to connect a series of tools according to a certain logical relationship and execute them automatically. 
* The model builder integrates 6 classes of tools for data processing and analyzing.
* The new task management window displays the execution progress and status and history records.
* The tools in the model builder can run in the background without blocking other operations.
* Models can be imported or exported.
* The model builder allows you to add variables as data nodes. Input data can be input as a node. Hence, you can check and set data involved in the model without opening a parameter panel.
![](img-en/ModelBuilder.png)  
---  

**Layout**

* Supports to record recently used layout margin and page size. 
* Enhances the drawing of layout grids. 
* You can draw more than one grid (square grid or coordinates).
* You can add corner labels to provide specific reference point for a map.
* Drawing a corner extension line is supported to make your layout more beautiful.
* The visibility of each label in different directions can be controlled. iDesktop can display each label vertically.
* iDesktop 10i can import or export a map grid template (*.xml) for further use or sharing.
* Drawing a table in a layout is allowed. You can show complicated statistical data in the table. 
* Provides a series of data edit controls for modifying styles of items, merging items, filling data in items. 
* Supports importing Microsoft Excel data.
* The table objects in a layout can be split into polygons and text objects.
* Drawing statistical diagrams in a layout is enabled to enrich layout information.
* Achieves the exchange between maps and layouts. 
* Copying a legend in a layout then pasting to a layer are allowed. The legend layout and style are kept as well.
* Points, lines, polygons, and words can be copied and pasted into a layout.
* Map series: 
* Allows you to create a grid index for identifying and positioning map sheet. 
* The tool calculates neighbor sheet identification of a sheet in 8 directions. 
* Based on the range of every grid in the index layer, the tool can switch and update spatial range of maps in a layout and other information.
* A locator can be drawn. The range of map displayed in a locator is larger than the main map, which can help you position and recognize the spatial position of the current map.
* Supports to create dynamic text which can change over the changes of map attributes.
* 8-direction text can be created. Combining with the feature of calculating neighbor fields, you can label neighbor sheets of the current map sheet quickly. 
* The generated map series pages can be exported as single PDF files.  

![](img-en/MapSeries.gif)  

* A compass with three different Norths (True North, Grid North and Magnetic North) can be drawn.
* The right-to-left alignment functionality allows words in a legend to be written from right to left such as writing Arabic. 
* A scale in a map layout also can display words from right to left. A scale can be split into multiple layout elements. 

**Streaming Data**

* iDesktop 10i can access vector streaming data to display and refresh data instantly and reflect spatial positions of data dynamically. 
* Renders data by many ways to represent data-changing trend. Such as creating thematic maps, heat maps, grid aggregation maps, diagrams, and so on based on vector streaming data.
* iDesktop 10i can access video data. Such as playing your local videos or online videos which are accessed by RTSP.

**Attribute operations**

* Summarizing multiple fields in different types at the same time are served. The statistical result is an attribute table which can be exported. 
* Attribute values of vector data can be turned into hyperlinks. When you enable the feature, you can open the hyperlink attribute (images, websites, and so on) corresponding with the clicked object.
* The new feature Add Attribute allows you to add the result of calculating spatial or geometric attributes of vector objects into an attribute table.
* If your data attribute table has a huge amount of records (up to 100 million), iDesktop 10i can page your attribute table to enhance the speed of loading and browsing attributes.
* Improves the performance of hiding rows.

**License Management**

* The newly added private cloud license supports you to configure a private cloud license server within a local area network. Different machines can obtain specified license modules by accessing the server address.

**Sample map**

* New sample maps:Map Series DLG, Illinois Election in 2016, America Weather (temperature, rainfall, light, air speed), Google-style Electronic Map - London.

**Ease of use**

* Enhances the performance of searching functionalists.
* The way of prompting information in the Output Window is improved. A pop-up window will appear when there is new information in the Output Window. 
* Hyperlinks in Output Window are provided to facilitate positioning your datasource, dataset, and result files. 
* The switching efficiency among tabs in Ribbon is increased.
* When starting up iDesktop, the application monitors log files size and prompts you to clear them if required. 
* Icons in the SVG format are supported in Ribbon. Solves the problem that icons in Ribbon are fuzzy on the SXGA screen. 

