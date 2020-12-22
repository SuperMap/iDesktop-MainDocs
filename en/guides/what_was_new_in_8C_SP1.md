---
id: what_was_new_in_8C_SP1
title: SuperMap iDesktop .NET 8C SP1 New Features
---
SuperMap iDesktop .NET 8C Service Pack 1 desktop products add and optimize the
map mapping, data processing, data analysis,3D scene and other modules related
functions on the basis of the previous version.Among them,the map mapping
module adds the image layer color setting function,and optimizes the
statistical and label thematic map,and provides the function to open the
dynamic projection prompts;The data processing module adds the functions of
synthesizing RGB data,creats new model dataset and so on,and supports the
import of various model data formats,and also optimizes the functions of
projection conversion,model data import,data export,capture setting, selection
of sub-data sets;Attribute module has added the hidden line function,optimizes
the update column and deletes the line and other functions;3D scene module
adds generating DSM, DOM data,texture compression, model monomer,OSGB to
S3M,OBJ to OSGB and other oblique photogrametry Model-related functions,while
adding a scene split-screen function to support the setting of the surface
color,and so on;And it provids shortcut key management functions, and adds two
demonstration code.

**SuperMap iDesktop .NET 8C SP1 includes the following new features and
optimizations:**

### Map Mapping

* Supports setting the label map [background margin](../Features/Mapping/LabelMap/PropertiesDia.htm), that is, setting the distance between the text and the label background border, in pixels.
* Adds [image layer color settings](../Features/Visualization/VisualSetting/Imagegroup.htm) function, and you can replace the colors within the tolerance range with other colors, while supporting colors that specify special values.
* [Map Measurement](../Features/Visualization/Interaction/Measuregroup.htm) supports the use of Ctrl + Z key in the calculation process, and revokes the previous step of the measurement records.
* When the different data of the projection coordinate system is added to the same map window, the application will pop up a prompt box to prompt the user whether to [open the dynamic projection](../Features/Visualization/MapSetting/DynamicProjection.htm).
* Optimizates [Export to Picture](../Features/Visualization/Basic/WinMap_OutputPic.htm) function, and it can record the image save the path of the previous operation setting, and support the map to set the output range.

### Data Conversion

* Adds [importing multiple format model data](../Features/DataProcessing/DataConversion/GeoFormates.htm), including *.obj, *.dae, *.ifc, *.fbx, *.osg and other format of the model data.
* Adds [importing of two ArcGIS format data](../Features/DataProcessing/DataConversion/GeoFormates.htm), ie * .asc, *. dbf format files.
* Supports [importing raster data in * .bin format](../Features/DataProcessing/DataConversion/GeoFormates.htm).
* Adds [importing two kinds of vector data](../Features/DataProcessing/DataConversion/GeoFormates.htm), ie * .dgn, * .vct format data.
* Supports [New Dataset](../Features/DataProcessing/DataManagement/CreateDataset.htm) function, and you can add the import model file to the new dataset.
* Supports [importing model of plus points](../Features/DataProcessing/DataConversion/ImportModelAndPoint.htm), when importing a model file, you can specify the associated point dataset, and associate the coordinates of the model based on the location of the point.
* Adds [Combining Bands](../Features/DataProcessing/Raster/CombineBand.htm) function, and three single-band image data can be combined to produce RGB color images, highlighting certain geographic features.
* [When importing DWG data](../Features/DataProcessing/DataConversion/ImportCAD.htm), the scaling factor in the X, Y and Z directions of the setting data is supported.
* [When exporting dataset](../Features/DataProcessing/DataConversion/ExportData.htm) supports setting SQL expressions and character sets and optimizes the parameter settings panel for exporting raster and vector data.

### Data Processing

* Supports sub-datasets of network datasets selected to [Create Scene Cache](../Features/Optimization/Cache/VectorCache.htm) and other operation for their point datasets.
* Enhances the stability of the object rendering, solving the A key roaming when continuous drawing will lead to GDI growth problems.
* [Snapping](../Features/DataProcessing/Objects/Snapping/Snapping.htm) supports set the priority of the snapping item,and after set the priority, you can follow the priority of the level of capture and prompt.
* [When creating scene cache ](../Features/Optimization/Cache/WScene_CacheBuilder.htm), it supports for 3D network datasets generates OSGB-type caches.

### Attributes Table

* Enhances the efficiency of the selected records in the large data volume attribute table.
* Attributes table [Update Column](../Features/DataProcessing/EditTabular/UpdateButton.htm) function supports set update conditions through the expression, and the user can customize the construction of SQL expressions to update.
* Adds [Hide Row](../Features/DataProcessing/EditTabular/HiddenRows.htm) and [Show Hidden Rows](../Features/DataProcessing/EditTabular/CancelHideRows.htm) function, and you can hide a row or multiple rows in attributes table and display hidden rows by Show Hidden Rows function.

### Data Analyze

* Network analysis [Set Environment](../Features/Network/NetAnalystEnvironmentWIN.htm) does not support setting node tolerance, and the application will automatically adjust the reasonable value according to user data.

### 3D Scene

* Adds [Generating DSM](../Features/SceneOperation/OSGB/CreatDSM.htm) funtcion, and you can generate digital surface model data (DSM) based on OSGB data indexed by the *.scp file.
* Adds [Generating DOM](../Features/SceneOperation/OSGB/CreatDOM.htm) funtcion, and you can generate digital orthoimage (DOM) based on the OSGB data indexed by the *.scp file.
* Adds [Model Monomer](../Features/SceneOperation/OSGB/OsgbDiscret.htm) function, and the vector surface data is superimposed on the OSGB data according to the spatial position,and the model selection and attribute query can be realized.
* Adds [Texture Compression](../Features/SceneOperation/OSGB/TextureCompression.htm) function, and you can achieve the original OSGB data texture compression, and enhance the OSGB data browsing rate.
* Adds [Generate S3M Data](../Features/SceneOperation/OSGB/OSGBToS3M.htm) function, and you can convert the specified OSGB data to SuperMap 3D Model data.
* Adds [OBJ->OSGB](../Features/SceneOperation/OSGB/OBJToOSGB.htm) function, and the specified OBJ data can be converted to OSGB data.
* Adds [View Mode](../Features/SceneOperation/BrowseScene/ViewportManage.htm) function, can set different periods of data to the same scene, and multiple viewport were displayed for association browsing.
* Supports setting the rotation angle of the OSGB layer to set the rotation angle in the X, Y and Z directions in the OSGB data layer properties.
* Supports view Web-type data in the scene, and currently supports open three layers including iServer service layer, OGC service layer and TiandiTu service layer.
* Generates [Create Scene Cache](../Features/Optimization/Cache/WScene_CacheBuilder.htm), and it supports batch sets the cache type of the data.
* When the height pattern is a paste object, the bottom height and the stretch height of the layer are supported.
* After the scene opens the underground mode, it supports [setting the underground color style](../Features/SceneOperation/AdvancedSceneSetting/Underground.htm), and after set the transparency,you can see the underground color.
* Supports in the KML layer directly [add *.obj, *.dae, *.x, *.osg, *.osgb and other model files](../Features/SceneOperation/LayersManagement/ModelButton.htm).

### Else

* Adds [Shortcut Key Management](ShortcutKeyManagement.htm) function, and you can directly modify or set the shortcut keys of the function.
* Optimizes the display of the combo box UI, and optimizes the drop-down options in the font spacing, improving the user experience.
* Adds two SampleCode, ie [Mouse Select Bounds](../SampleCode/MouseSelectBounds.htm) and [Associated Browse](../SampleCode/BindGroupForm.htm).
* Solves the problem of the green package which is download through the browser when being unlocked by right click to normally use.
