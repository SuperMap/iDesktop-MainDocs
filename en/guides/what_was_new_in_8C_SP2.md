---
id: what_was_new_in_8C_SP2
title: SuperMap iDesktop .NET 8C SP2 New Features
---
SuperMap iDesktop .NET 8C Service Pack 2 (The following is called SP2 for
short) desktop products add and optimize the map mapping, data management, 3D
scenes and other modules related functions on the basis of the previous
version. The map mapping module adds custom label function, and optimizes the
adjustment of the symbol library, the data management module adds business
table management, CAD to model data and other functions, which supports saving
and loading the link information of the database data source, and also
optimize the data import function of the point plus model, 3D scene module
adds scene shutter, BOX cut and other functions to support multi-viewport
spatial analysis, optimize node animation and way of KML layer adding landmark
model, support the set of flight path style, 3D line X and Y zoom ratio, and
so on. At the same time, the stability of the application and product
performance of SP2 has been further improved compared to the previous version.

**SuperMap iDesktop .NET 8C SP2 includes the following new features and
optimizations:**

### Data Management

* Adds [Service Table Management](../Features/DataProcessing/DataManagement/ExternalTableManage.htm) function, and the tables created in the database can be added to the desktop product in the form of a property table dataset, applied to SQL queries, data set additions, thematic map authoring, and so on.
* Open Database Datasource adds [saving and loading the database connection information](../Features/DataProcessing/DataManagement/OpenDatasource.htm) function, and you can store the database information which is opened previously as the *.dcf file, and it is easy to reload for the user using.
* Adds the CAD data to convert the model objects, and it can convert model object of the CAD composite dataset into model dataset.
* Optimizes the point plus the model import function, and the imported model dataset will retain all the field information of the point dataset.

### Map Mapping

* Uniform style label of mapping, the font type, size, rotation angle and font color of the label can be set by selecting the attribute field to implement the custom label setting to meet the different label display requirements.
* Unique Values Map of point dataset, supports symbol size, rotation angle settings by selected field, to achieve the custom effect display of Unique Values Map.
* An optimized adjustment is proposed for the point, line, fill the symbol library, and the default symbol library provides grid symbols, linear and fill color of producing electronic map commonly used, and external symbol library provides a richer symbol, line, fill Resources.
* Adds [Same Type Text Style](../Features/DataProcessing/Objects/SelectObjects/SameTypeTextStyle.htm) function, and style can be batch set for the same style of text, so that it is unified replacement of text style.

### 3D Scene

* Adds [Scene Roller](../Features/SceneOperation/SceneIneteraction/SwipeTool.htm) function, that is, in the same scene window, the designated layer of the curtains is hidden, which can be used to compare the different periods or ground and underground scenes.
* Adds [Box Clip](../Features/SceneOperation/SceneIneteraction/ClipByBox.htm) function, according to the specified box cropping area, the scene in the Box area or outside the area is displayed in 3D.
* Optimizes the adding ways of the placemark and model in the KML layer, and you can add placemark and model by clicking the left mouse button in the appropriate location.
* Optimizes the node animation function, and it supports the preservation of the animation trajectory, and the path will be stored in the form of line data in the KML layer.
* 3D spatial analysis supports multi-view mode analysis, that is, in multi-view mode, can do 3D spatial analysis in different viewport.
* Supports for setting the foreground color and transparency of the OSGB cache layer.
* Supports setting the scaling ratio in the X and Y directions of the 3D pipeline data and scales the line according to the specified field value.
* Scene flight path supports set style, including height mode, line style, width and so on.

### Performance Optimization

* Supports setting whether to release the hidden layer of memory in the layer properties, and reduces the application's memory footprint.
* SP2 Version investigates and deals with problems of the impact of desktop performance, and effectively enhances the stability of the desktop.

### User Interface

* SP2 Version optimizes the adjusts the organization of the function of the desktop, and most of the functional icons are replaced with large icon mode. Meanwhile some of the functions are reorganized, for example, the production of various features of the map function are separatly extracted as a tab, and graphics related functions are placed in the map tab, thereby gradually meet the user's habits, and being convenient for the consumer to use.


