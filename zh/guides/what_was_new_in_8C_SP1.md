---
id: what_was_new_in_8C_SP1
title: SuperMap iDesktop 8C SP1 新特性
---
SuperMap iDesktop 8C Service Pack 1 桌面产品在上一版本基础上，新增并优化了地图制图、数据处理、数据分析、三维场景等模块的相关功能。其中，地图制图模块新增了影像图层颜色设置功能，优化了统计和标签专题图，提供了开启动态投影的提示等功能；数据处理模块新增了合成
RGB
数据、新建模型数据集等功能，新支持了多种模型数据格式的导入，同时优化了投影转换、模型数据导入、数据导出、捕捉设置、选中子数据集等功能；属性表模块新增了隐藏行功能，优化了更新列和删除行等功能；三维场景模块新增了生成
DSM、DOM 数据、纹理压缩、模型单体化、OSGB 转 S3M、OBJ 转 OSGB
等倾斜摄影模型相关的功能，同时新增了场景分屏功能，支持设置地下表面颜色，等等；同时提供了快捷键管理功能，并新增了两个示范代码。

**SuperMap iDesktop 8C SP1 包含以下新增功能和优化之处：**

### 地图制图

* 支持设置标签专题图[背景边距](../Features/Mapping/LabelMap/PropertiesDia.htm)，即设置文本与标签背景边框的距离，单位为像素。
* 新增了[影像图层颜色设置](../Features/Visualization/VisualSetting/Imagegroup.htm)功能，可将容限范围内颜色替换为其他颜色，同时支持指定特殊值的颜色。
* [地图量算](../Features/Visualization/Interaction/Measuregroup.htm)支持在量算过程中使用 Ctrl+Z 按键，撤销上一步的量算记录。
* 投影坐标系不同的数据添加到同一个地图窗口中时，应用程序会弹出提示框，提示用户是否[开启动态投影](../Features/Visualization/MapSetting/DynamicProjection.htm)。
* 优化了[地图输出为图片](../Features/Visualization/Basic/WinMap_OutputPic.htm)功能，可记录前一次操作设置的图片保存路径，并支持设置地图的输出范围。

### 数据转换

* 新增了[多种格式模型数据的导入](../Features/DataProcessing/DataConversion/GeoFormates.htm)，包括 *.obj、*.dae、*.ifc、*.fbx、*.osg 等格式的模型数据。
* 新增了[两种 ArcGIS 格式数据的导入](../Features/DataProcessing/DataConversion/GeoFormates.htm)，即 *.asc、*.dbf 格式文件。
* 支持[导入 *.bin 格式的栅格数据](../Features/DataProcessing/DataConversion/GeoFormates.htm)。
* 新增了[两种矢量数据导入](../Features/DataProcessing/DataConversion/GeoFormates.htm)，即*.dgn、*.vct格式数据。
* 支持[新建模型数据集](../Features/DataProcessing/DataManagement/CreateDataset.htm)功能，可追加导入模型文件到新建数据集中。
* 支持[点加模型导入](../Features/DataProcessing/DataConversion/ImportModelAndPoint.htm)，在导入模型文件时，可指定相关的点数据集，根据点的位置关联模型的坐标。
* 新增了[合成 RGB 影像数据](../Features/DataProcessing/Raster/CombineBand.htm)功能，可将三个单波段的影像数据合成RGB彩色影像，突出显示某些地理要素特征。
* [导入 DWG 数据](../Features/DataProcessing/DataConversion/ImportCAD.htm)时，支持设置数据的 X、Y、Z 方向的缩放因子。
* [导出数据集](../Features/DataProcessing/DataConversion/ExportData.htm)支持设置 SQL 表达式和字符集，并优化了导出栅格和矢量数据的参数设置面板。

### 数据处理

* 支持选中网络数据集的子数据集，可对其点数据集进行[生成场景缓存](../Features/Optimization/Cache/VectorCache.htm)等操作。
* 提升了对象绘制的稳定性，解决了 A 键漫游时连续绘制会导致 GDI 增长的问题。
* [捕捉设置](../Features/DataProcessing/Objects/Snapping/Snapping.htm)支持设置捕捉项的优先级，设置优先级后，即可按照各项的优先级高低进行捕捉和提示。
* [生成整个场景缓存](../Features/Optimization/Cache/WScene_CacheBuilder.htm)时，支持三维网络数据集生成 OSGB 类型的缓存。

### 属性表

* 提升了大数据量属性表中，批量删除选中记录的效率。
* 属性表[更新列](../Features/DataProcessing/EditTabular/UpdateButton.htm)功能支持通过表达式设置更新条件，用户可自定义构建 SQL 表达式进行更新。
* 新增了[隐藏行](../Features/DataProcessing/EditTabular/HiddenRows.htm)和[取消行隐藏](../Features/DataProcessing/EditTabular/CancelHideRows.htm)功能，可隐藏属性表中的某一行或多行记录，并可通过取消行隐藏功能显示隐藏的行。

### 数据分析

* 网络分析中的[环境设置](../Features/Network/NetAnalystEnvironmentWIN.htm)不支持设置结点容限，应用程序会根据用户数据自动调整合理容限值。

### 三维场景

* 新增了[生成DSM数据](../Features/SceneOperation/OSGB/CreatDSM.htm)功能，可根据 *.scp 文件索引的 OSGB 数据，生成数字地表模型数据(DSM)。
* 新增了[生成DOM数据](../Features/SceneOperation/OSGB/CreatDOM.htm)功能，可根据 *.scp 文件索引的 OSGB 数据，生成数字正射影像(DOM)。
* 新增了[模型单体化](../Features/SceneOperation/OSGB/OsgbDiscret.htm)功能，根据空间位置将矢量面数据叠加到 OSGB 数据中，可实现模型的选择和属性查询。
* 新增了[纹理压缩](../Features/SceneOperation/OSGB/TextureCompression.htm)功能，可对原始 OSGB 数据的纹理进行压缩，提升 OSGB 数据的浏览数率。
* 新增了[生成 S3M 数据](../Features/SceneOperation/OSGB/OSGBToS3M.htm)功能，可将指定的 OSGB 数据转换为 SuperMap 3D Model 数据。
* 新增了[OBJ数据转换成OSGB数据](../Features/SceneOperation/OSGB/OBJToOSGB.htm)的功能，可将指定的 OBJ 数据转换为 OSGB 数据。
* 新增了[场景分屏显示](../Features/SceneOperation/BrowseScene/ViewportManage.htm)功能，可将不同时期的数据放到同一个场景中，以多个视口分别显示进行关联浏览。
* 支持设置 OSGB 图层的旋转角度，可在 OSGB 数据图层属性中设置 X、Y、Z 方向的旋转角度。
* 支持在场景中查看 Web 型数据，目前支持打开 iServer 服务图层、OGC 服务图层、天地图服务图层三种。
* 生成[整个场景缓存](../Features/Optimization/Cache/WScene_CacheBuilder.htm)，支持批量设置数据的缓存类型。
* 高度模式为贴对象时，支持图层的底部高度和拉伸高度。
* 场景开启地下模式后，支持[设置地下的颜色风格](../Features/SceneOperation/AdvancedSceneSetting/Underground.htm)，设置透明度后即可看到地下颜色。
* 支持在 KML 图层中直接[添加 *.obj、*.dae、*.x 、*.osg、*.osgb 等模型文件](../Features/SceneOperation/LayersManagement/ModelButton.htm)。

### 其他

* 新增了[快捷键管理](ShortcutKeyManagement.htm)功能，可直接修改或设置功能的快捷键。
* 优化组合框 UI 的显示效果，优化了下拉选项中字体的间距，提高了用户体验。
* 增加两个SampleCode，即[鼠标拾取绘制地图范围](../SampleCode/MouseSelectBounds.htm)和[关联浏览](../SampleCode/BindGroupForm.htm)。
* 解决了浏览器下载的绿色包需通过右键解除锁定才可正常使用的问题。




