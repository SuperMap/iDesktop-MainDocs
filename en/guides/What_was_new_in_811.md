---
id: What_was_new_in_811
title: SuperMap iDesktop .NET 8C(2017) Service Pack 1 New Features
---
SuperMap iDesktop .NET 8C(2017) Service Pack 1 (The following is called SP2
for short) desktop product adds and optimizes these modules: Data Management,
Mapping, Data Processing, 3D, ease of use. For Data Management, importing and
exporting GeoJson, converting EPS data are supported for helping users manage
the data better. For Mapping, the function Location is added for positioning
sub-item of unique and range thematic map, saving an object to a point symbol
is supported, and optimizes the performance and operation Mapping for Scale.
At the same time, the stability and ease of use of the application has been
further improved.

**SuperMap iDesktop .NET 8C(2017) SP1 includes following changes.**

**Data Management**

* Supporting [Importing GeoJson Data](../Features/DataProcessing/DataConversion/GeoFormates.htm) while supporting for exporting the vector data (point, line, region, etc.) as a GeoJson file.
* Optimizes the settings of the parameters for [Importing CSV file](../Features/DataProcessing/DataConversion/CSVimport.htm), supporting data preview to make it easier to further set WKT string fields, coordinate fields.
* Supporting [modifying the field type of the dataset property](../Features/DataProcessing/DataManagement/DTgroupDiaVector.htm), supporting five engines: Oracle, SQLServer, MySQL, PostgreSQL, KingBase , it is not supported for UDB datasource that modifying fields type.

**Mapping**

* Adds the function of sub-item positioning for [Unique Thematic Map](../Features/Mapping/UniqueValueMap/PropertiesDia.htm#1), [Range Thematic Map](../Features/Mapping/RangesMap/RangesMapGroupDia.htm#1), selecting the sub-item and then highlighting the corresponding object through the function Location.
* Optimizes the performance of [Mapping for Scales](../Features/Visualization/MapSetting/MapScaleGrading.htm), and supports batch setting of the maximum and minimum visible scales of the layer to improve the work efficiency for users.
* The coordinate value can be entered in degress minute second for the functions of [Location](../Features/Visualization/BrowseMap/MapLocation.htm), [Map Grid](../Features/Visualization/MapSetting/MapGride.htm), etc., you can switch the display mode for coordinate value in degree or degree minute second according to the actual demand.
* Optimizes the setting for [Font Size, Font Height](../Features/Mapping/LabelMap/UniformStyleDia.htm) of text label, adjust its numerical precision to 0.5.
* Supports for [converting a label thematic map to text a text dataset](../Features/Mapping/EditingMap/ThematicToCAD.htm), and the font style (including these propertie: font, font size, color, etc.) of the label will be retained by text dataset.
* Supports for [exporting one or more vector objects in map as point symbols](../Features/SymManager/SaveAsSymMarker.htm), and the object is directly converted to the point symbol editor to modify.
* Adds the function [Traffic Line Correction](../Features/ApplicationTheme/TrafficCondition/TrafficLineRevise.htm) for NAVINFO data, regulating the direction of road according to digitizing to ensure the correctness of road offset direction
* Adds the settings of [Traffic Sistuation](../Features/Mapping/UniqueValueMap/AdvancedDia.htm) for Unique Thematic Map to resolve the problem that two-lane road of the Road Thematic Map made by NAVINFO overlap in small scale map.
* Optimizes the way for pasting layer in Layer Manger, adds the function of [inserting the copied layer](../Features/Visualization/LayerManagement/DTv2_Copy.htm), you can insert the copied layer in any position of layer.
* Optimizes the management interface and ease of use for [Text Style Template](../Features/Visualization/LayerStyle/TextStyleTemplategroup.htm), the text style template panel supports right docking, and the style templates in the panel are grouped by template.

**Editing Data**

* Optimizes the algorithm for [Connect Neighborhood](../Features/DataProcessing/Objects/EditObjects/JoinLine.htm), According to the spatial distance between the end of the line object to do the judge, connecting the line objects that the distance between endpoints is shortest.
* Supports for [merging](../Features/DataProcessing/Objects/EditObjects/Merge.htm) line objects. If there are overlapping endpoints or line segments between the line objects, they can be merged into a line object.
* When selecting multi-objects to do the operation of [Group](../Features/DataProcessing/Objects/EditObjects/Group.htm), [Merge](../Features/DataProcessing/Objects/EditObjects/Merge.htm), etc., setting the result property through reserving objects, all the property fields information of the result objects are the specific information of objects.

**Data Processing and Analysis**

* Saving result data for [resampling vector data](../Features/DataProcessing/Vector/VectorResample.htm) is supported, you can reserve the source data, in the same time adding the way to set the resampling distance based on the display scale.
* Optimizes the operation of [highlighting selected object](../Features/DataProcessing/EditTabular/CheckColumn.htm), you can set whether to highlight all objects when selecting whole column according to the demand for associated browse.
* The "Object Operation" tab adds the operation of [switching current layer](../Features/DataProcessing/Objects/CreateObjects/DTv2_Editable.htm). The operation can set the selected layer editable which makes users explicitly and quickly switch the current editing layer.
* Supports for displaying the value of the attribute table cell and scale in thousands which makes it easier for users to identify the size of the value.
* Supports for [generating orthophoto three-dimensional images in batches](../Features/Analyst/Raster/SurfaceAnalyst/OrthoImage.htm), multiple raster datasets can be operated in the same time to improve the user's work efficiency.
* Supports [generating 3D hillshade images in batches](../Features/Analyst/Raster/SurfaceAnalyst/HillShade.htm), multiple raster datasets can be operated in the same time to improve the user's work efficiency.

**3D Scene**

* New oblique photogrammetric model data with ENU coordinate system.
* JPG and PNG formats are supported for processing the [ texture compression ](../Features/SceneOperation/OSGB/TextureCompression.htm) for the oblique photogrammetric model. 
* Drawing for 3D objects, be able to draw cubes, cones, cylinders, spheres and other 3D objects.
* [ Multiple viewshed analysis ](../Features/SceneOperation/RealspaceSpatialAnalyst/MultiViewshed3D.html), use for simulating the safety monitoring for the emphasis areas. 
[ Conversion between model datasets and 2D plane datasets
](../Features/SceneOperation/DataProcessing/ModelToPolygon.html)，be able to
generate the top-view as a model.

* Model datasets can be set [ polygon shift ](../Features/SceneOperation/AdvancedLayserSetting/PolygonOffset.html)， use for solving the twinkling problem when polygon overlaying.
* 3D objects can be exported as KML and OSGB file, KML stores parameter information, OSGB stores model data.
* [ Check information for 3D model objects ](../Features/SceneOperation/DataProcessing/ModelPropertyIntro.html)， including triangular plane number, vertex number, volume, area, skeleton.
* [ Color setting for the light ](../Features/SceneOperation/DataProcessing/ModelPropertyIntro.html)， for simulating real illumination effect by adjusting the color of ambient and scattered lights.

**Performance and stability**

* Investigating and handling the questions which affects iDesktop .NET performance due to leak the number of user objects.
* Optimizes the performance of [saving all record datasets in attribute table as a dataset](../Features/DataProcessing/EditTabular/DatasetButton.htm). 
* Optimizes the performance of [converting a point dataset into a line dataset](../Features/DataProcessing/ConvertDataType/PointToLine.htm) in the type conversion.

**User Interface**

* The display contents of "SampleData" in "File" tab are richer. The contents has been divided into 5 kinds: Map, Chart, Scene, Layout, Dynamic Plotting, which makes users can quickly locate the corresponding category of SampleData.
* Optimizes the layout of "Option" in "File" tab.
* Optimizes the "Open" function in "File" tab, integrates the "Recently Use" workspace and datasource into the "Open" interface to make it easier for users to open files.
* Adds "License" in "File" tab to make users know about the function modules and permissiong of current product. 
* Adjusts the Dockbar panels (including Workspace Property, Datasource Property, Dataset Property and Object Property) to dock to right to resolve the question that panel blocks the map window area.
* Some parameters of the Dockbar panels (including Workspace Property, Datasource Property, Dataset Property and Object Property) are added the function of applying immediately.
