---
id: What_was_new_in_810
title: SuperMap iDesktop .NET 8C (2017) New Features
---
SuperMap iDesktop .NET 8C(2017)desktop product on the basis of the previous
version, adds and optimizes the data management, map mapping and other modules
related functions.Among them, the data management adds start page, workspace
management window, function search and other functions, to be designed to help
users more easily use the desktop products;In the map mapping, the color
scheme manager, the color scheme selected, and the parameter setting of the
histogram are optimized to achieve the better mapping effect. At the same
time, the stability and ease of use of the application of 8C(2017) version has
been further improved than previous version.

**SuperMap iDesktop .NET 8C(2017) includes the following new features and
optimizations:**

**Engine Optimization**

* Database datasource adds [create and open K-DB ](../Features/DataProcessing/DataManagement/CreateDatasource.htm)database

**Data Management**

* Adds [start page](../Features/DataProcessing/DataManagement/GettingStarted.htm). In the start page, you can easily create new datasource, open datasource, open dataset and other operations, support the opening of the recently used workspace, data source and the recent path, and support access to product video, demo code and other related help resources.
* Adds [Workspace Manager View](../Features/DataProcessing/DataManagement/WorkSpaceView.htm). Displays and manages the contents of the current workspace in the form of icons, including data sources, maps, scenes, layouts, resources, and so on. You can manipulate the various resources under the current workspace, like the folders in the explorer, for example, you can delete datasets, maps, and sort the data sets in the datasource. 
* Adds [function search](../Features/DataProcessing/DataManagement/FeatureSearch.htm). In the search box, entering the keyword to search for the function, you can list the search criteria to meet the function, and after clicking the selected function, in accordance with the functional conditions of use, you can directly perform the function.
* Adds pre-defined projection: Improved Oblique Orthographic Projection.
* Supports 10 parameters conversion method: Molokinski-Pakistan tokas projection method.
* Supports the data source which has been opened, opening by re-read-only way, to facilitate the same data in a number of desktop for comparison operations at the same time.
* Supports [Create Workspace by Template](../Features/DataProcessing/DataManagement/CreateWokspace.htm), and you can choose to create a local workspace as a template, or you can select a workspace template created in the desktop.
* Supports [Create Datasource by Template](../Features/DataProcessing/DataManagement/CreateDatasource.htm), and you can create datasource based on a template provided by SuperMap or datasource in the current workspace. The number, name, and type of dataset in the result datasource are consistent with those in the template data source.
* Supports [Create Dataset by Template](../Features/DataProcessing/DataManagement/CreateDataset.htm), the newly created dataset will keep the same attribute structure, projection information, character set, etc. as the template dataset.

**Data Management**

* Supports browsing EPS data,and supports for the layer set style.
* Support for editing EPS geometry object nodes.
* Supports saving views added when browsing a map so that you can use the saved view to perform a map tour the next time you open it.
* Adds [Global Pan](../Features/Visualization/BrowseMap/Pan.htm). By opening Global Pan under the premise of opening the global roaming, you can achieve the global from east to west or from west to east,across the east and west hemisphere coherent roaming, global data seamless browsing effect.
* Supports copying\pasting map layer across the workspace through the layer manager, in order to achieve multiple workspace results reuse. 
* When you adjust the object node edit, select the size of the node to make it more visible.
* Adds [Draw Curve](../Features/DataProcessing/Objects/CreateObjects/DrawCurve.htm) function, and you can use this feature to enable the drawing of aircraft routes worldwide for example.
* Adds [Measuregroup](../Features/Visualization/Interaction/Measuregroup.htm) function.
* Supports displaying raster data color table in the layer manager, and it is convenient to compare the view for users .
* Supports the production and preservation of solid fill symbols.
* The Bar of Create Thematic Map,supports setting [Bar Width Factor, Bar Space Factor](../Features/Mapping/GraphMap/AdvancedDia.htm), and through the factor adjustment, making the histogram display better, to meet the different mapping needs.
* Supports [Thematic Map Save as CAD Dataset](../Features/Mapping/EditingMap/ThematicToCAD.htm).
* Supports setting the display format of coordinates on the map status bar and supports copying the mouse's current position coordinate values.
* Supports setting [Non-Value Transparency of Grid Unique Values Map](../Features/Mapping/GridUniqueValuesMap/GridUniqueValuesMapGroupDia.htm) and so on.
* Supports empty data thematic mapping.
* When the modifying expression of the thematic map is optimized,the current single value or segmentation is processed.
* Optimizes [Color Scheme Manager](../Features/Visualization/LayerStyle/ColorRampManager.htm), and you can use tree sorting to manage all ribbons, adding 235 different styles of ribbons.
* In Color Scheme Manager, it provides the default ribbon in accordance with for DEM, for Hill Shade, for Hill Shade, for Applicable Grade Symbol, for Graph Map, for Ranges Map, for Unique Values Map, Defalt Gradient Color, Default Random Color, those eight kinds of uses for classification management, thereby it is convenient for users to use according to their needs when mapping.
* In Color Scheme Manager, it supports for creating, editing color ramp, and supports color ramp searching, copying, exported, collected and other operations.
* In the production of Unique Values Map, Range Segmentation Map, Graph Map, the default value is automatically matched with the corresponding color ramp classification, such as the production of Unique Values Map, the color scheme will be preferred to read out color ramp of For Unique Values Map for the user's choice, and supports the color ramp search, different classification between color ramp classification switch. 
* Optimizes Unique Values Map, Range Segmentation Map, Graph Map display of color scheme options, adjust the spacing between color ramp, and the default display of color ramp name, to enhance the user's ease of use in the selection of color ramp.
* Optimizes the display method of the color scheme is selected when the grid set the color table, adjusts the spacing between color ramp, and displays the ribbon name by default.
* Optimizes the mapping entrance, makes the thematic map as a separate tab, and all the thematic types are open, thereby you can directly click to create a corresponding type of thematic map.
* Supports label line feed for pretreatment. According to the expected label line feed effect, the contents of the data field are processed, and you can add line breaks in the appropriate location.

**Data Processing**

* Supports batch recalculation of the data set range, and you can select multiple dataset through the right-click menu batch option.
* Adds [Batch Add to Row](../Features/DataProcessing/Vector/BatchAddtoRow.htm), and you can perform adding to row operations on multiple datasets in the target data source at the same time.
* Supports for copying and pasting dataset range.
* Supports for creating federated field indexes.
* Supports opening the CSV file directly by draging, load it into the workspace by the way of read-only datasource.
* Supports the merging operation of line objects. If the line objects have overlapping nodes or lines, they can be merged into one object.
* Supports opening Excel by draging, and you can choose to open "before browsing 1000" and "browse all". For large amounts of Excel data, you can choose to quickly browse the first 1000 rows of data.
* Adds node coordination editing,and in the node editing automatically maintain the topological relationship between objects. For example, the two faces of adjacencies, after editing one of the nodes of a face object,the other surface object can be automatically modified to maintain the adjacency between such faces.
* Repairs the problem when broken polygon merge function sets the margin too large to lead the polygon lost probably.
* Optimizes the SQL query interface, which operation is set for the associated attribute table.
* Optimizes the map and editing options settings.
* Optimizes [Update Column](../Features/DataProcessing/EditTabular/UpdateButton.htm) modifying the expression in the function.
* Supports the automatic preservation of the workspace,and when the user operats the workspace for 10 minutes but not being saved, it will automatically save the current changes maked by the user.
* Supports automatic recovery of the workspace, that is, when the desktop quits unexpectedly, it will start again when trying to restore the workspace, and it try to restore the user's map results.

**Analyze**

* Optimizes overlay analysis for large memory mode performance.
* Optimizes the display effect of the 3D line buffer results model.
* Optimizes the path analysis results of turning to the prohibited area in the network data.

**3D**

* In Oblique Photogrametry, adds new oblique photogrametry model [Combine Root Node](../Features/SceneOperation/OSGB/CombineOSGB.html), and the number of root nodes after combine is greatly reduced, which is helpful to improve the efficiency of model loading.
* In Oblique Photogrametry, adds [Generate Agent Node](../Features/SceneOperation/OSGB/GenerateProxy.html) function, and it generates new index files to enhance model browsing performance.
* In Oblique Photogrametry, adds [Modify Center Point](../Features/SceneOperation/OSGB/ModifyCenter.html) function, and it solves the problem of multiple center points of the oblique photogrametry data in the same survey area.
* Oblique Photogrametry adds [Generate Large File](../Features/SceneOperation/OSGB/GenerateBigfile.html) cache, and further enhance the loading efficiency of the oblique photogrametry model.
* Adds [Combine Tin Cache](../Features/SceneOperation/3DTools/CombineTin.html), and you can combine two Tin caches with different resolutions (block sizes) to load a wider range of Tin terrain data.
* Adds reading txt, las, xyz and other formats point cloud data, and supports [Point Cloud Data Generate Cache(osgb format)](../Features/SceneOperation/3DTools/PointCloud_GenerateCache.html).
* Adds [Collision Detection](../Features/SceneOperation/RealspaceSpatialAnalyst/CollisionAnalysis.html) anlaysis function, and you can dynamically see if the detected model collides with the environment model during the move.
* Adds [Extract BIM Shell](../Features/SceneOperation/RealspaceSpatialAnalyst/BIMShell_Extracting.html) function, and it is Based on the Viewshed Analasis to achieve BIM, the internal and external model of separation, storage, by setting respectively the internal and external model of the display program to optimize the scene performance.
* Adds supporting for HTC Vive virtual reality helmet to browse virtual 3D scene.
* Adds supporting for terrain images under projected coordinate system to generate TIN cache.
* Supports for selecting and viewing the Oblique Photogrametry model file, thereby it is easy to update and maintenance for the Oblique Photogrametry model.
* Supports for adding TiandiTu, OpenStreetMaps, Microsoft BingMaps and STK World Terrain's various online map services.
* Supports for raster dataset [Volumn 3D Build](../Features/SceneOperation/3DTools/Volumn3D_Build.html), and generates a cache, while browsing to support volumn 3D data display baked to other model data surface.
* Scene opens receiveing 3D dataset, and achieves volumn 3D rendering display.
* Supports for opening Tin Terrain Skirt, when the TIN terrain cracks, the display skirt can avoid the display of terrain cracks, thereby enhancing the TIN terrain display.
* The Earth and 3D slice cache layers support setting polygon offsets to solve problems that occur when polygons overlap.
* Support for setting the zoom to the surface whether the implementation of pitching operation, thereby enhancing the user browsing experience.
* The 3D layer supports opening the vertex capture function, making the measurement more accurate.
* Volumn 3D data, Oblique Photogrametry model, point cloud data and TIN terrain support hierarchical color rendering, and express and distinguish the object height/strength size through a certain color change order or tone depth.
* The 3D slice cache layer can control the display of objects, including maximum/minimum visible distance, rotation model, transparent and filter selection, and set of selected object colors.
* 3D slice cache (osgb format) layer and TIN terrain cache layer support the set of water color, water level elevation to achieve flooding effect, thereby it can quickly show the city waterlogging scene.
* Supports for editing KML layers on the model to achieve [PlantTees](../Features/SceneOperation/PlantTees/PlantTees.html), thereby it quickly render 3D space.
* Support for BIM model dataset to generate 3D slice cache (osgb), which helps improve BIM model performance.
* Support for CAD dataset to generate three-dimensional slice cache (osgb).
* Texture Compression of Oblique Photogrametry model supports multithreading,improving processing efficiency.
* Optimizes contour analysis, supports for setting maximum/minimum visible elevation, and can be selected in the scene to set the size of the value.
* The dataset appends supporting for the model dataset to facilitate updating the maintenance model dataset.
* Adds adaptive valve symbols,the valve can be based on the pipeline to "adapt" to adjust the angle to ensure the correct connection between valve and the pipeline.
* The Oblique Photogrametry model supports associating attributes table to quickly view the model object properties.
* The model dataset supports opening editable.

**2D and 3D Plotting**

* Desktop products, integrated 2D and 3D plotting function, thereby you can easily and flexibly map 2D, 3D point label, line and polygon label, provide3D situation deduction function, mainly used in military operations program, emergency response program, public security round-the-clock program and other command and dispatch program.
* Supports [2D plotting](../Features/TechDocument/Plotting/2DPlotting/2DPlotting.html), [2D Plotting Panel](../Features/TechDocument/Plotting/2DPlotting/Introduce2DPlottingPanel.html) is used to display common labels, police labels and primitives, and when CAD layer is editable, you can directly select a label or element to draw and edit.
* [2D Plotting Property Panel](../Features/TechDocument/Plotting/2DPlotting/PropertyPanel_2D.html), supports for modifying the attribute information of the commonly used label, police labels, elements and other attributes plotted on the map.
* Supports [3D Plotting](../Features/TechDocument/Plotting/3DPlotting/3DPlotting.html), and in the scene you can use [3D Plotting Panel](../Features/TechDocument/Plotting/3DPlotting/Introduce3DPlottingPanel.html), to plot and edit elements such as common labels, police labels, and primitives.
* [3D Plotting Property Panel](../Features/TechDocument/Plotting/3DPlotting/PropertyPanel_3D.html)Support for modifying the attribute information of the commonly used label, police labels, elements and others plotted in the scene.
* Supports creating [Path Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, in the specified time, you can make the point label in accordance with the set path to move.
* Supports creating [Flashing Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, in the specified time, you can make the label in accordance with the frequency or frequency to flash.
* Supports creating [Attribute Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, the specified attributes (line width, line color, etc.) of the label can be changed according to the set value within the specified time.
* Supports creating [Proportional Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, in the specified time, let the point label in accordance with the set proportion of the zoom.
* Supports creating [Rotating Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, in the specified time, let the point label in accordance with the set angle rotate.
* Supports creating [Explicit Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, within the specified time, let the label change according to the set starting state and effect.
* Supports creating [Growth Animation](../Features/TechDocument/Plotting/AnimationManager.html), that is, in the specified time, let the line label in accordance with the set ratio grow.

**Performance and Stability**

* Dramatically increases the performance of UDB and Oracle data projection conversion to new dataset operations.
* Raises the performance of opening large volume UDB data sources.
* Memory leak problems on the impact of desktop performance are investigated and handled,thereby effectively enhance the stability of the desktop.
* GDI leak problems on the impact of desktop performance are investigated and dealt with,theryby effectively enhance the stability of the desktop.

**Demonstration Data**

* The world map,the Chinese map are revised.
* Adds Chongqing Hill Shade map.
* Adds maps/scenes for 2D plotting, 3D plotting, and provids corresponding situation evolution script files.
* Adds a different scale 4D map, namely: DOM(digital orthophoto), DEM(Digital Elevation Model), DRG(Digital Raster Map), DLG(Digital Line Map).
* Adds EPS sample data.
* Adds land use, precipitation distribution, China's population and economic distribution and other types of thematic maps.

**User Interface**

* In this version, the desktop uses a new interface library, the interface style is more fresh, the Ribbon part of the tab function has been adjusted,and gradually meet the user's habits user-friendly.
* Adds the toolbar to quick access, achieving the preservation, roaming, zoom, zoom and other fast operation of the map or layout.
