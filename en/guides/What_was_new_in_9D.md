---
id: What_was_new_in_9D
title: SuperMap iDesktop .NET 9D(2019) New Features
---
SuperMap iDesktop .NET 9D(2019) desktop product on the basis of the previous
version, added and optimizes data management, data editing, data processing,
mapping, attribute table, data analysis, network analysis, statistic chart,
Online, 3D module related functions, etc. Where data management supports the
creation of image mosaic datasets, optimize the related operation of the
projection settings. The Symbolic Mapping function added in the data editing
function module, effectively improve the work efficiency of user
vectorization. The mapping function adds Map Balance Colors, Map Swipe, Heat
Map, Grid Aggregation Map, and optimizes the operation method of the Map Clip
function to make the user can efficiently produce beautiful map. In the Online
module, it is supported that convenient sharing the local data and acquiring
the online map and the online source. Meanwhile the iDesktop .NET added the
statistic chart function module. The function of Statistic Chart is that can
quickly convert the attribute data into a picture, through the histogram,
sequence diagram, bar charts and scatter diagram to show the relationship
between the data.

**SuperMap iDesktop .NET 9D(2019) includes the following new features and
optimizations:**

**Data Management**

* When importing the GJB Data, supports the data according to a certain map template, automatically generate a new map, easy to users directly in the map to browse and view.
* Supports to copy the pathes of the workspace and the datasource. The workspace and datasource node right-click menus or the properties panel support to copy the pathes, the pathes can be used in other functions to quickly locate the workspace or data source.
* The new Web datasource ChinaRS  is used to open the high resolution image data service provided by China RS.
* Reopen MapWorld datasource, improving 7 pre-defined service names and addresses for users to choose from. They are: 
  * Universal Vector Map(Latitude and Longitude)
  * Universal Vector Map(Mercator)
  * Universal Vector Chinese Annotation Service(Latitude and Longitude)
  * Universal Vector Chinese Annotation Service(Mercator)
  * Universal Image Map Service(Latitude and Longitude)
  * Universal Image Map Service(Mercator)
  * Universal Terrain Relief Map Service(Latitude and Longitude)
* The settings for the connection pool are supported when opening the OraclePlus and PostgreSQL database.
* The new function of Image Convert to Block improves the image data file read efficiency, meanwhile the speed of loading and browsing the image mosaic dataset is upgraded.
* Supports to create a new Image Mosaic Dataset to manage multiple image data files in the same area and show the results that a lot of images spliced in the layers. 
  * Supports to add a single image file or add the folder to bulk add the image files of specified format.
  * Supports to create image pyramid quickly and make mosaic overview, improves the speed of browsing mosaic dataset.
  * Supports to set the displaying style that the boundary lines and outlines of the mosaic dataset are in the map.
  * Supports to browse the attribute table information of the outline data to view the source information of each source file and data range information.
  * Supports to export the mosaic dataset source files of specified range, the data format is the same as the source file data format. The function of exporting the list of source file for the mosaic dataset also is supported.
  * Supports to append and reassign the image files to the mosaic dataset, meanwhile supports to empty data and statistic information.
* Optimizes the projection settings, the specific optimization is as follows: 
  * Optimizes the speed of opening the projectiong settings and saves the users waiting time.
  * Optimizes the interaction operation between the new and modified coordinate system.
  * Supports to set EPSG Code of the projection.
  * Adds new predefined projection, such as: Albers projection
  * Simplifies the interaction of the importing and exporting projection information in the projection settings.

### Data Editing

* When objects in the map are connected and merged, if you set the properties calculation method of the result fields to Save Object, the selected reserve objects will be highlighted in the map when switching the selected object, so that the user can clearly identify the location of the selected object in the map.
* When executing the Split operation, if the selected point is the intersection of multiple objects, you can set the object which will be splited and the object will be highlighted in the map.
* Doughnut and Island Polygons supports to save the hole object, it means that you can save the result hole as a new object, it is more convenient for users to do other operations and settings.
* Adds the Symbolic Mapping function. The users only need to select the element that you want to draw in the map. After drawing the elements, the iDesktop .NET will save the objects to associated dataset and automatically give the object the appropriate display style, fill the default property value of the object, so that the efficiency of the user's vectorization can be improved. Combining with the layer style of the map, the new object is showed with this layer style, it helps users to effectively distinguish geographical elements in the vector process. 
  * Provides National Census Symbolic Mapping template, supports the users to import or predefine the template which includes the element name, dataset type, the default value of the attribute table.
  * Simplifies the drawing operation, without having to individually set the editable layer. When selecting the elements to draw, the iDesktop .NET will automatically set the layer to be editable, draw the elements in the corresponding dataset, and automatically give the default attribute value which is set by the user.
  * Supports to search the elements, if the elements are more, you can quickly locate the specified element.
  * When drawing a specific element object, you can switch the drawing methods.
  * Supports to predefine the key fields of elements. In the actual drawing, the property setting panel can be set to display only the key field, and the property setting panel can be simplified when the object field is large.

### Data Processing

* When setting the SQL Expression, it is supported that acquiring the only value of the specified field, the text box will display the only value. The users can conveniently enter the only-value to the expression edit box by double clicking the only-value.
* If the data amount of the saving result after the operation of SQL Query is large, supports to display the progress information of the result saved.
* The SQL Query hides the system field information by default, supports to set whether or to hide the system field information.
* Supports batch resampling the raster image in the datasource, improves the processing data efficiency.
* The Attribute updating function supports to set the filtering expression of the target data, the users can update the target data objectively.

### Mapping

* Adds the Grid Corlor Balance function. The multiple raster layers which are added to the map window are displayed with a uniform color table and a uniform value field to . To achieve the effect of the entire map color display evenly.
* Adds the Map Swipe function. The specified layer can be hidden in a way of swiping, so that the users can compare the data of different periods intuitively.
* Adds the Map Blink function. For the swipping layer, according to the set time interval, the swipping layer alternately hide and display. The function can be used for historical data and current data comparison display.
* Adds the Snapshot Layer grouping function. The layer added to the snapshot layer group can be used as a base map, if the map range doesn't change, the layer will not be refreshed to improve the map browsing effiency.
* When generating the Map Cache, supports multiple processes operating simultaneously. Reasonable use of computer resources, effectively shortening the time to generate map cache. 
  * Before generating the cache, splits the task, so that each process can obtain the task to generate map cache.
  * Supports one computer to perform multiple processes opration, while also supporting multiple computers to perform multiple processes operations at the same time.
  * In the process of generating the map cache, you can increase or reduce the numbers of processes to facilitate the rational use of computer resources.
  * Supports to view the overall progress and every process's progress.
* Adds the Cache Checking function and the Cache Supplementing function. You can check if there are missing tiles or white blocks in the cache and regenerate the missing cache.
* Adds the Multi-Version Cache function. Supports splitting different maps into multiple cache versions and saving them to MongoDB. Also supports loading the cache into a map and playing it dynamically, the user can compare and view the data changes of different periods. 
  * Supports setting the cache version number according to the different tense of the map, and saves the map cache to the corresponding version.
  * Supports checking whether the MongoDB database connection is successful, so that the user can be sure that the database connection is successful before generating the map cache.
  * Supports adding the specified muli-version cache in MongoDB into the map to dynamically play and browse.
  * Supports setting the cache version displayed by the current map.
  * The multi version cache playing management supports playing, pausing, stopping the cache.
  * Supports setting the cache version which will participate in playback and the playing time interval between the version, whether gradient play.
* Supports to make a heat map for the event point data. Through a certain radius and color table, intuitively display point data heat distribution in the map. Such as making the microblogging login user's distribution map
* Supports to make a Grid Aggregation Map for the event point data. Uses the grid of different colors to represent the aggregation degree of the point data, it can be used to indicate the incidence of crime and traffic accidents in a region.
* Optimizes the Map Clip function, redesigned the parametes settings mode to simplify the user operation. 
  * The settings of clipping mode, erasing, and exact clipping have been adjusted to the layer list. The users set the clipping parameters for every layer easily, the different result will be shown in the window when using the different clipping modes.
  * Adjusted the setting mode about the layers, the layers in the list are involved in clipping, and the other layers are not involved in clipping.
  * Supports batch clipping multi objects, you can get the data of the regions that every object corresponds to at a time.
* Optimizes the operation mode of Percent Clip. Supports setting the stretch for the every band of the multi band image datas, you can easily and intuitively adjust the maximum and minimum clipping percentage pixel values to increase the image display contrast and sharpness.
* Optimizes the display effect of Raster and Image Data and improve the display performance. 
  * Multi-band images support the use of a single band for stretching, or color table display.
  * The raster data supports the settings of no-value, background value and transparent color.
  * The image data can set the color table after being stretched.
  * For the image datesets that the single-band pixel formats are 8-bit and 16-bit, supports to modify the Color Scheme displayed by the layer .
* Adds the setting of Grid Function to the layer properties, supports setting the raster layer as the display effect of 3D hillshade map and the ortho image. You can quickly preview the different display effect of the raster layer.
* Optimizes the default range in the window when opening a empty map, the default range is the drawing range, and avoids the situation that the objects can't be drawn in the default range of the window.
* Optimizes the function of Overview Map. Resolves the question that the overview map range isn't inaccurate after setting the scale, and optimizes the display effect of the overview map in a big scale.
* Supports to copy and paste the center point in the map, you can directly copy and paste the center point in the map status bar.
* Optimizes the snapping effect of maps. Snapping Settings function does not support setting the maximum number of objects in the current map view, and resolves the question that the object can't be snapped in some scales.
* When setting the fixed scale of the map, it is supported that adding the map scale. The user can set the commonly used scale as a fixed scale.
* In the Bounds tab of the map properties pannel, you can right-click to cancle the drawing status of the mouse, after selecting Clip Visible Bounds, Lock Maximum Display Range or Custom Full Extent.
* Optimizes the appraoch for projection setting in the map property panel. Supports to copy the projection information from the datasource, the dataset or files, so that the users can quickly set the coordinate system.
* Enriches the Color Schemes, adds the group of For Point Line and Label. The group is mainly used to the unique values map and the label thematic map which is made from point and line. Also add the group of For Aggregation Map which is applied for the heat map and the grid aggregation map.
* Optimizes the function for Associated Browse. Adjusted the window layout for the attribute table and the map, and Optimizes display effect for the map. 
  * Optimizes window layout of Associated Browse. When using the function of Associated Browse, the map and the scene window will display side by side. If the attribute table window also involved in the association browsing, it will be displayed in the lower part of the window by default.
  * System Optimizes the linkage effect of the associated browse map, the view range of the map shall not be changed when the most or all areas of the selected associated object are displaying in the current view range, the associated object will be merely highlighted, and minimizes the refresh times of map.
  * When the attribute table window also involved in the association browsing, all the objects will not be highlighted in the map if you select whole column of the attribute table by default. If you want to highlight all objects, you can set the related parameters in the right-click menu of the attribute table.
* When drawing a text object, the initial default text style is adjusted. The default font type is to take the operating system default font, the font size is 14, which is consistent with Word's default font size.
* Supports to set the shadow color of the text in the label thematic map and enriches the settings for text display effect.

### Attribute Table

* Optimizes the performance for the attribute table. About the attribute table which has millions of columns, Optimizes the efficency selecting the whole columns.
* Optimizes the Update Columns operation for the attribute table. Only the filtered record field values are updated when updating the columns after filtering the columns.
* Optimizes the result of the connection operation when there is a null character.

### Network Analyst

* Optimizes the function for Customize 3D Network.
* Supports to build the navigation model data. You can simulate navigation in the application to verify and analyze the navigation data, and produce the navigation data for iMobile. 
* Supports to simulate the route planning analysis. You can use the route data which is got through the Route Data Compilation function to simulate the route planning, ao that you can verify and analyze the route data.

### Statistic Chart

* Supports to convert the dataset attribute information into a picture, through the histogram, sequence diagram, bar charts and scatter diagram to intuitively display the relationship, structure and trend between the datas.
* Supports the linkage display between the chart and map, so that the users can analyze the geographical distribution of data.
* Supports the direct conversion between the chart and the thematic map and quickly display the data information in different way.
* Supports to set the display effect for the statistic chart, you can adjust the color so that the icon display more beautiful.
* Supports to output the statistic chart as a image which can be used in the document tool, such as: Word, PPT and so on.

### Online

* Optimizes the interface of cloud license, resolved the question that the license information wasn't incorrect when the local license and the cloud license both were used.
* Optimizes the interactive operation for Online, supports to directly browse the online map in the iDesktop, also supports the map preview and operation.
* Supports to download the shared data related with the map.
* Supports to access to iPortal private cloud, in the LAN environment to achieve rapid sharing internal resources within the organization.
* Supports to upload the color scheme, so that the user can share the custom color scheme. And supports to retrieve and download the online color scheme.
* Supports to upload the symbol library, so that the user can share the custom map symbol. And supports retrieve and download the online symbol library.
* Supports to acquire and manage the iPortal and SuperMap Online resources, enriches the source of online data.
* Supports to directly manage the online data for Online and iPortal in the iDesktop. The functions include: Repulish the service, delete the online data, modify the description information for online data, and create subdirectories, etc.
* Adds "My Data" node in the workspace manager, so that the user can manage the uploaded workspace, datasource, symbol library and color scheme.
* Optimizes the interactive operation between shared data and service through the iDesktop.

### 3D

* **Object Operation**
  * Supports to save the oblique photograph model as a model dataset, so that the user can edit and update the model data.
  * Supports the "Linear Stretch" operation for 2D and 3D layers of geographic coordinate system. According to the specified streching height and texture mapping, the region object can be stretched and constructed into a closed model.
  * Supports the "Straight Skeleton" operation for 2D and 3D layers of geographic coordinate system. According to the specified slope, contours, skeleton edges, and region object, constructs models. For example, used to build roof of a house.
  * Supports the "Lofting" operation for 3D line layers of geographic coordinate system. Lofts through drawing multiple cross sections and 3D lines. Creates a 3D model based on the arc region of specified smoothness degree.
  * Supports to construct the houses model for the polygon in the 2D or 3D region layers of geographic coordinate system. Through setting the related parameters (Wall, Cornice, Roof, Map Real Size, etc.), quickly constructs the house model according to the region object.
  * Adds the projection region function. You can project the 3D model object onto 2D plane to generate the corresponding 2D region object, equivalent to the top view of the model.
  * Adds the projection extruding body function, according to the acquired projection region and buffer radium of extruding body, extrudes the projection region that the model object is in the minimum height to acquire the model that completely envelops the original model object.
  * Adds the getting model dataset convex hull. The convex hull is a shell that the model surface area is the smallest. The acquired convex hull is closed model object. 
  * Adds the function for extracting model boundary, you can extract the projection boundary of the model object or TIN boundary of model. The extracted region dataset can be used for tin terrain mosaic operations.
  * Adds the function for extracting profile, through selecting the intersecting surface and longitudinal section, according to a certain type to show the internal structure of the model, extracts the 2D and 3D profile map on the intersection between the extracted region and the model.
  * Adds the function for simplifing BIM model. According to the specified simplified algorithms and simplified rates, you can simplify the redundancy triangle regions in the BIM model, and the scene will show the comparison picture before and after simplifying the BIM.
  * Adds the function for operating the sum object of BIM. It means that each sub object of BIM model can be simplified to varying degrees to make up for the lack of BIM simplification in simplifying a single model.
  * Adds the function for spliting the BIM sub objects. You can spilt the sub object in the model dataset onto a lot of sub objects.
  * Adds the function for operating the vertex. You can remove the repeated points or redundant points in the BIM model object.
  * Adds the function for recalculating normal lines. When the repeated points have been removed, the triangle regions in some models will change and the model normals need to be recalculated to correct the shadows display effect of the model.
  * Supports to construct the shadow volume based on the sun light source. Through setting the time and date of the local time zone, you can construct the shadow volume of the model at that time under the sun's light.
  * Supports to construct the shadow volume based on the point light source. By current camera view point, drawing point or picking up point as point light source, constructs the shadow volume of the model under the specified point light source.
  * Adds the function for building geologic body. Geological body model is generated based on multi - layer 3D geological point data.
  * Adds the function for analyzing geological profile. According to the profile dataset and parameter, analyzes the geologic body model dataset.
  * Adds the function for analyzing geological drilling. According to the point dataset and the drilling parameter, analyzes the geologic body model dataset for the drilling.
  * Adds the function for clipping the TIN terrain. When existing the TIN terrain in the scene window, you can clip the TIN terrain through drawing rectangles, circles, polygons or selected region objects.
  * Adds the function for digging TIN terrain. When existing the TIN terrain in the scene window, you can dig the TIN terrain through drawing rectangles, circles, polygons or selected region objects. Terrain for the TIN terrain, digging layer must be a region layer.
  * Adds the function for mosaicing TIN terrain. When existing the TIN terrain in the scene window, through the selected polygon you can mosaic the specified terrain in the spherical scene. The mosaic terrain is TIN terrain, the mosaicing layer could be the 2D or 3D region layers.
  * Adds the function for boolean operation. In the scene, the TIN terrain and the model do union and difference operation to get a new TIN terrain data.
  * Adds the function for modifying terrain. You can modify the current terrain by editing the 3D region object in the scene, and the result will be shown in the scene window real-time.
  * Supports to modify the model information for the model attribute.
  * Supports to break up the model for the TIN terrain data. The model in the model dataset will be broken up.
* **Oblique Photograph**
  * Adds the function for clipping the oblique photograph model. When an oblique OSGB layer has been selected, you can clip the oblique data through drawing rectangles, circles, polygons or selected region objects. If the oblique data is OSGB, the clipping layer must be a region layer.
  * Adds the function for mosaicing the oblique photograph model. When an oblique OSGB layer has been selected, through the selected polygon you can mosaic the specified oblique data in the spherical scene. If the oblique data is OSGB, the mosaicing layer could be the 2D or 3D region layers.
  * Adds the function for streching the closed body. The oblique photography model is drawn down to the specified elevation to form a closed body. The function can be used for 3D printing, etc.
* **3D Analysis**
  * Adds the function for slope aspect analysis, that is whether or not the slope arrows are turned on the flow effect.
  * Supports to export the results as a 2D line dataset for the skyline analysis function.
  * Supports to match the same name for video projection function.
  * Supports to generate DSM and DOM for the spherical scene, adds the function of generating 2.5-dimensional images.
  * Adds slope aspect analysis for TIN terrain, supports to hierarchically set the color based on slope values.
* **Drawing Object**
  * Adds the function of drawing 3D parameterize objects. The parameterize objects include cuboids, cylinders, cones, spheres. Supports to draw the parameterize objects into the model dataset layer and kml layer.
  * Optimized the known 3D sketch for small objects.
  * Create billboard on the KML layer by adding word and image,billboard anchor is bottom central point, image anchor is left-upper corner. 
* **3D Data**
  * 3D data are supported including TIN terrain and ocean, generate TIN cache with ocean boundary, TIN terrain region is consistent with specific vector range. 
  * New feature of geologic body dataset generate cache.
  * Model dataset can be saved in instantiation way. 
  * Terrain model can fix navigation point of model based on terrain raster value; choose model and raster dataset, executes new model dataset. 
  * Support to extract the texture picture from a vector region based on image and vector dataset,location path of texture is located on the corresponding string from vector dataset. 
  * Multiple models generate cache which is multi-model dataset in OSGB format. 
  * New feature of oblique photographic data is saved in model dataset.
  * Optimized selection feature of oblique photographic model.
* **Model Object**
  * Add model information in the object attribute table of model dataset, be able to view detailed information of model object.
  * Edit geometric and its sub-object information in the editing feature of model dataset object.
  * Model dataset object supports to export model file.
* **Scene Properties**
  * Geologic Borehole feature supports oblique photographic and TIN data
  * Scene properties support scene color, be able to adjust brightness, contrast, saturability, tinge and gamma.
  * Delete the parameter settings for whether accept or not raster data.
* **Layer Properties**
  * Property of label thematic map added word offset mode.
  * Property of vector dataset layer supports LOD setting of zooming in.
  * New feature of historical record feature that support to review the record of TIN terrain and OSGB layer.
  * Add filling and wireframe mode for model and OSGB layer.
  * oSupport 3D editing of point,line and region
  * Wireframe mode of model dataset layer supports triangle and quadrangle.

### Ease of Use

* Optimizes the workspace, the datasource, and the controls effect of the path on the Recent Use list in the Start Tab to make the user more comfortable operation.
* Supports to delete the history records for the Recent Use list in the "File" tab, so that user can manage the history records.

### iDesktop .NET UI

* Supports to set the interface font display style which includes font type, font size and whether it is bold and so on.
* Optimizes the tree node icons of the workspace and layer manager, so that user can more easily and quickly identify the category of the tree nodes and the entrance of related functions.
* Optimizes the layout of Ribbon function entrance, resolves the problem that the function entrance will be hidden when the screen size is 1366*768.

### Extended Development

* Upgrades the DEVExpress interface library, upgrade from 16.1.4 to 17.1.3.0 version, and resolves the efficiency and effectiveness issues about opening Gallery.
* Optimizes the working environment designer, resolves the question that some special controls can't see the corresponding nodes in the working environment designer. 
  * Adds the setting of **size** property for the Gallery in the ButtonDropDown.
  * Supports to adjust the display effect of **item** picture for the Gallery control.

### Sample Data

* Adds the 3D map, world hillshade map, heat map, grid map, A0 to A4 layout map and so on, enriches the map type in SampleData, and adds the related documentation for the sample data to provide some reference for the user mapping.

