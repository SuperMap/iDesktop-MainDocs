---
id: what_was_new_in_60_SP1
title: SuperMap Deskpro .NET 6R Service Pack 1 新特性
---
SuperMap GIS 6R 桌面产品是一套运行在桌面端的专业 GIS 软件。这套软件包括三个级别的产品：SuperMap Viewer .NET
6R、SuperMap Express .NET 6R 和 SuperMap Deskpro .NET 6R。其中 SuperMap Deskpro
.NET 6R 软件是可编程、可扩展、可定制的，二三维一体化的桌面 GIS
产品，提供了数据管理功能、地图相关功能、布局排版功能、三维功能以及数据处理和类型转换的功能，能满足用户的多样化需求。

SuperMap GIS 6R Service Pack 1
桌面产品在继续秉承上个版本的特色亮点的基础上，在数据转换、对象绘制和编辑、地图操作、布局输出、三维场景等方面都实现了功能的增强和完善，使桌面系列产品的性能更强、用户体验更好。

* * *

# 新增功能

### 地图

    * 在地图窗口的右键菜单中，新增了[另存为数据集](../Features/Visualization/Interaction/ExportData.htm)功能，将选中的对象输出为一个新的数据集。
    * 在地图窗口的右键菜单中，新增了漫游地图时[局部刷新](../Features/Visualization/Interaction/LocalRefresh.htm)地图的功能，提升地图浏览速度。
    * 在图层管理器中，新增了[图层控制](../Features/Visualization/LayerManagement/LayerControl.htm)功能，方便用户对地图窗口中的图层统一进行管理。
    * 在图层管理器中，新增了[专题图编辑](../Features/Mapping/EditingMap/EditingMap.htm)功能，方便用户直接对制作好的专题图中的对象进行编辑。支持对单值专题图、分段专题图和自定义专题图进行编辑。

### 布局

    * 布局窗口右键菜单，新增了[局部刷新](../Features/Layout/DrawingObjects/Layout_LocalRefresh.htm)功能，使布局浏览更流畅。
    * 将布局中的地图[输出为图片](../Features/Layout/Export/ExportAsPicbutton.htm)时，新增了分页输出的功能，方便用户对大幅地图分页输出。

### 场景

    * 场景操作的[量算功能](../Features/SceneOperation/SceneIneteraction/Measuregroup.htm)新增了对模型对象以及对地下三维对象进行距离量算和高度量算的功能，方便用户在场景中进行量算操作。
    * 新增地下三维功能，提供相对地下模式，支持对地下模型的可见以及对地表透明度的设置。
    * 地下三维新增了[地表开挖](../Features/SceneOperation/AdvancedSceneSetting/Underground.htm)功能，用于实现对地下场景的开挖效果。
    * 新增了对[统计专题图](../Features/SceneOperation/SceneVisualization/GraphMap3Dgroup.htm)的支持，同时提供了一些统计专题图常用的模板。
    * 单值、分段专题图以及矢量图层支持二三维符号显示，可以对[图层风格](../Features/SceneOperation/SceneVisualization/Style3DTab.htm)进行设置，其中点图层支持三维模型符号。
    * 新增[点符号选择器](../Features/SceneOperation/SceneVisualization/Symbol3Dgroup.htm)，支持三维模型符号。
    * 新增了[ CAD 模型数据集](../Features/DataProcessing/DataManagement/DataFormats/CADModelDataset.htm)，将模型转化为数据集保存，极大地提升场景浏览速度，并且支持对模型进行编辑。
    * 新增了一种场景操作方式，实现360度旋转相机，即[第一人称视角](../Features/SceneOperation/AdvancedSceneSetting/AngelAdjustment.htm)。
    * 新增了对 iServer 服务的支持。支持打开 iServer 发布的[iServer 服务场景](../Features/SceneOperation/iServerService/Scenes_OpenIServer.htm)、[iServer 服务图层](../Features/SceneOperation/iServerService/ComLy_OpenIServer.htm)和[iServer 服务地形图层](../Features/SceneOperation/iServerService/TerrLy_OpenIServerTer.htm)。

### 其他新增功能

    * 类型转换新增了对[CAD 模型缓存数据集(*.scv)](../Features/DataProcessing/DataManagement/DataFormats/CADModelDataset.htm)导入的支持。
    * 新建数据集新增了[新建三维点、线、面数据集](../Features/SceneOperation/Create3DDataset.htm)功能。
    * 对象绘制新增了[自动连接线对象](../Features/DataProcessing/Objects/CreateObjects/AutoConect.htm)功能，支持将多个线对象连接为一个新对象。

### 示范数据

    * 在 SampleData\3D\MODEL\OlympicGreenDataset\ 文件夹下新增了鸟巢五期的 CAD 模型数据集，为用户浏览场景带来新的体验。
    * 在 SampleData\3D\MakerLibrary 文件夹下新增了模型符号库。此符号库文件不仅包含大量的常用符号，而且也包含了许多精美的模型符号，可以加载到场景中浏览。
    * 在安装路径 SampleData\3D\Model 新增了鸟巢一览.fpf 飞行路线数据，去除了原有的飞行路线数据，使用户有更加顺畅的飞行体验。

### 许可管理

    * 新增对试用许可的控制，如果使用的是试用许可，则在窗口的左上角会出现“SuperMap Unregistered”字样，推荐用户购买和使用正版软件。

* * *

# 增强功能

    * 完善了[画线分割](../Features/DataProcessing/Objects/EditObjects/CutPolygon.htm)功能，支持对线和面几何对象进行分割。
    * 优化了[三维标签专题图](../Features/SceneOperation/SceneVisualization/LabelMap3DGroupDia.htm)功能，支持设置多种文字效果。
    * 完善了[影像缓存](../Features/Optimization/Cache/ImageCache.htm)功能，支持 JPG_PNG 混合类型的切片文件，优化数据下载速度。
    * 对[飞行管理](../Features/SceneOperation/FlyManager/CreateRoute.htm)功能进行了改善，优化飞行减速转弯效果；改进时间控制方式，能更加精确的计算飞行时间。
    * 解决了在对大数据量 UDB 数据集的属性表进行更新列操作时速度慢的问题，大大减少了用户等待时间。
    * 修复当数据集的记录数较多（比如大于3000），选中属性表中的某一列（字段）程序崩溃或者无响应的问题。
    * 修复当数据集的记录数较多（比如大于3000），通过使用 Shift 键选中多行（或者多条记录），然后删除选中行时，程序崩溃或者无响应的问题。

返回首页

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 1
新特性](what_was_new_in_2012_SP1.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012)
新特性](what_was_new_in_2012.htm)


