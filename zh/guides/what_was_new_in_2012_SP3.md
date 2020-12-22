---
id: what_was_new_in_2012_SP3
title: SuperMap Deskpro .NET 6R(2012) Service Pack 3 新特性
---
SuperMap GIS 6R 桌面产品是一套运行在桌面端的专业 GIS 软件。这套软件包括三个级别的产品：SuperMap Viewer .NET
6R、SuperMap Express .NET 6R 和 SuperMap Deskpro .NET 6R。其中 SuperMap Deskpro
.NET 6R 软件是可编程、可扩展、可定制的，二三维一体化的桌面 GIS
产品，提供了数据管理功能、地图相关功能、布局排版功能、三维功能以及数据处理和类型转换的功能，能满足用户的多样化需求。

SuperMap GIS 6R(2012) SP3
桌面产品致力于提供大量丰富好用的高级分析功能，为各行各业的的分析决策带来参考。分析是地理信息系统的核心组成部分，也是 GIS
区别与其他信息系统的显著标志。在 SP3 版本，日益完善的栅格分析，全新的动态分段、水文分析和网络分析功能，为 GIS
分析提供强有力的支撑。同时继续提供更加实用的数据处理、制图等功能，持续改进桌面产品的完整性和易用性。

SuperMap Deskpro .NET 6R(2012) Service Pack 3 包含以下新增功能以及增强之处：

# 新增功能

### 数据操作

* 新增[百度地图](../Features/DataProcessing/DataManagement/OpenDatasource.htm)、[OpenStreetMap](../Features/DataProcessing/DataManagement/OpenDatasource.htm)数据引擎，支持在线地图服务的在线读取和显示。
* 新增 [外部矢量文件引擎](../Features/DataProcessing/DataManagement/OpenSDXForFile.htm)，可直接将多种外部矢量格式文件打开，以矢量数据集的形式保存在数据源中。
* 支持将 CAD 数据中的参数化对象、简单数据集或复杂数据集中的对象导入到复合线、复合面数据集中。
* 支持对 UDB、SQLServer 和 Oracle 数据源中的复合线、复合面数据集进行 [SQL 查询](../Features/Query/SQLQueryDia.htm)。
* 支持[导入 MapInfo 工作空间](../Features/DataProcessing/DataConversion/ImportWor.htm)功能，在导入数据集的同时，会将工作空间中的地图、符号一起导入，方便用户直接使用。
* 支持对 CAD 数据进行[空间查询](../Features/Query/SpatialQueryDia.htm)，方便对多种类型的数据进行空间查询操作。
* 新增[创建影像数据集集合](../Features/DataProcessing/DataManagement/CreateImageCollection.htm)的功能，支持将多个影像文件加载到影像数据集集合中，并作为一个影像图层进行操作。
* 支持对以数据源形式打开的栅格文件（*.tiff、*.tif、*.img）[创建影像金字塔](../Features/DataProcessing/DataManagement/DTr_CreatePyromid.htm)。
* 支持将 [OSGB 模型导入](../Features/DataProcessing/DataConversion/ImportOSG&OSGB.htm)为 CAD 模型数据集，导入后的模型可在场景中显示。
* 支持对影像/栅格数据进行[交互式半自动化矢量化](../Features/DataProcessing/Objects/Trace/AboutTrace.htm)功能，提高用户矢量化的效率。

### 地图制图与浏览

* 新增[压盖设置](../Features/Optimization/MapOptimization/OverlaySetting.htm)功能，当地图中的点、文本、专题图符号元素相互之间存在叠置时，可以对不同对象的显示进行控制，保证地图显示效果更加美观。
* 新增[滚轮延迟刷新](../Features/Visualization/Interaction/DelayRefresh.html)功能，启用滚轮延迟刷新功能时，在鼠标滚轮发生滚动0.4秒后地图才重新加载数据显示，对于加快大数据地图显示速度非常有效。
* 支持 PNG 8格式的[地图缓存](../Features/Optimization/Cache/2DCache.htm)图片类型，支持背景透明、图片存储空间更小，多种图片类型可以满足不同地图出图的要求。
* 新增设置[对象显示顺序字段](../Features/Visualization/LayerManagement/LayerControl.htm)的功能，地图中的对象会依据显示顺序字段数值的顺序（升序或者降序）进行显示。
* 支持以[续传/恢复的方式生成地图缓存](../Features/Optimization/Cache/2DCache.htm)，重新按照上次操作的进度，继续生成地图缓存文件。

### 三维操作

* 新增[降雨、降雪](../Features/SceneOperation/GeoParticle/GeoParticle.htm)两种粒子特效，逼真的模拟真实的降雨和降雪的情景。
* 新增将 [CAD 三维模型数据集导出为*.X 模型文件](../Features/DataProcessing/DataConversion/ExportXFile.htm)，方便用户在其他应用程序中使用这些模型。
* 支持在场景中设置是否[显示帧率](../Features/SceneOperation/AdvancedSceneSetting/Option.htm)信息，并且此属性可以保存到场景中。
* 支持设置是否[始终渲染](../Features/SceneOperation/AdvancedSceneSetting/Option.htm)，始终渲染是指场景失去焦点后依然进行实时渲染。
* 新增[地下绝对高度模式](../Features/SceneOperation/AdvancedLayserSetting/AboutAltitudeMode.htm)，与地下相对高度模式对应，计算高程时，以地球表面为基准，不受地形影响。
* 支持对[场景中的栅格/影像图层设置透明度](../Features/SceneOperation/AdvancedLayserSetting/LayerTransparent.htm)，以达到透明显示的效果。
* 支持对场景中的矢量模型缓存设置[精细显示距离](../Features/SceneOperation/AdvancedLayserSetting/LODDistance.htm)。按照设置的距离，对近处的模型采取精细模型显示，对远处的模型采取简单模型显示，非常有利于模型渲染时的资源分配，从而提升场景显示效果。
* 新增[设置预加载范围](../Features/SceneOperation/AdvancedLayserSetting/PreLoadRange.htm)的功能，用来对矢量模型缓存显示的加载范围行设置。这样可以增大模型缓存的显示范围，从而使其在场景中的浏览更加流畅。
* 三维飞行管理增加了[加速/减速播放](../Features/SceneOperation/FlyManager/ControlFlying.htm)的功能，帮助用户更好的控制飞行过程。
* 生成整个场景缓存时，支持对[纹理进行压缩](../Features/Optimization/Cache/WScene_CacheBuilder.htm)，支持两种压缩类型 PC 纹理压缩格式和 PAD 纹理压缩格式。当纹理压缩类型为 PAD 纹理压缩格式时，支持生成可在 iOS 设备上使用的离线地图包。
* 新增三维[自定义专题图](../Features/SceneOperation/SceneVisualization/CustomizeMap3Dgroup.htm)，支持在场景中制作自定义专题图，操作方式与二维自定义专题图类似。

### 空间分析

* 新增[构建 DEM ](../Features/Analyst/TerrainBuilder/TerrainBuilder.htm)功能。根据已知的等高线和高程点数据模拟构建地形，得到栅格数据集。
* 新增[ DEM 挖湖](../Features/Analyst/TerrainBuilder/TerrainBuilderLake.htm)功能，可以在构建 DEM 过程中或者构建 DEM 完成后进行挖湖操作，更好地模拟局部微地形效果。
* 新增[ DEM 切割](../Features/Analyst/TerrainBuilder/TerrainBuilderClip.htm)功能，在不改变数据范围的情况下，根据给定的切割线，对 DEM 数据进行切割，得到两个新的栅格数据集。
* 新增[表面量算](../Features/Analyst/Raster/SurfaceAnalyst/SurfaceMeasure.htm)功能，支持对栅格表面距离、表面面积以及表面体积进行量算。
* 新增[距离栅格](../Features/Analyst/Raster/Distance/RasterDistance.htm)功能，对每个栅格像元距离其邻近像元的空间距离进行分析。有三种计算方式：[生成（直线）距离栅格](../Features/Analyst/Raster/Distance/StraightLine.htm)、[计算最短路径](../Features/Analyst/Raster/Distance/ShortPath.htm)和[两点间最短路径](../Features/Analyst/Raster/Distance/TwoPointDis.htm)。
* 新增[栅格统计](../Features/Analyst/Raster/Statistic/RasterStatistic.htm)功能，提供多种统计方式对栅格数据的信息进行统计，包括基本统计、区域统计、常用统计、高程统计、邻域统计共五种统计方式。
* 新增[栅格细化](../Features/Analyst/VectorRasterConvert/ThinRaster.htm)功能，在进行栅格矢量化时对栅格数据进行细化处理，适用于栅格数据转线数据的过程。
* 新增[剖面分析](../Features/Analyst/Raster/SurfaceAnalyst/Profile.htm)功能，根据指定的线分析栅格表面沿该条线截面的变化，帮助了解剖面地形的起伏以及计算剖面面积，为工程设计和量算提供参考。
* 新增[查找极值](../Features/Analyst/Raster/Statistic/FindExtreme.htm)功能，查找指定区域内栅格表面的极值信息，包括极值点的数目以及极值大小。
* 新增[正射三维影像](Features/Analyst/Raster/SurfaceAnalyst/OrthoImage.htm)功能，对栅格数据生成正射影像。
* 新增[三维晕渲图](Features/Analyst/Raster/SurfaceAnalyst/HillShade.htm)功能，通过栅格表面的光源角度和阴影等参数，生成具有立体效果的三维晕渲效果图。

### 动态分段

新增[动态分段](../Features/DynamicSeg/DynamicS.htm)功能。应用程序提供了完整的动态分段流程，包含生成路由、校准路由，到生成事件表、叠加事件表和融合事件表、事件表关系管理等多个功能，可通过路由数据集和事件表生成对应的空间数据，实现基于动态分段关系的高效联动修改，帮助用户快捷地解决实际动态定位问题。

### 水文分析

新增[水文分析](../Features/Hydrology/HydrologyAnalyst.htm)功能，帮助用户研究流域水文特征和模拟地表水文流程。应用程序提供的水文分析主要包括填充伪洼地、计算流向、计算流长、计算累积汇水量、河流分级、连接水系和水系矢量化等系列水文分析功能。

### 网络分析

新增[网络分析](../Features/Network/Network.htm)功能，可以在网络模型中通过多种分析解决实际问题，目前提供了最佳路径、最近设施查找、旅行商分析、服务区分析、物流配送等多种交通网络分析功能，追踪分析、邻接要素分析、通达要素分析等多种设施网络分析功能。

### 示范数据及符号资源

* 新增 CBD 场景缓存数据，用于展示北京 CBD 附近场景。
* 同时 CBD 数据中新增符号化建模数据。这是基于二维地图数据制作的符号化建模场景，可以与二维地图联动查看场景模型。
* 符号选择器支持同时加载更多符号库，方便用户在更大范围内浏览和应用符号资源。

# 增强功能

* 对三维高度模式统一进行调整，调整后的方式可以更好地区分地上或者地下数据。进行优化的功能包括：[设置高度模式](../Features/SceneOperation/AdvancedLayserSetting/AltitudeModeSetting.htm)、[专题图子项扩展属性设置](../Features/SceneOperation/SceneVisualization/Thematic3DTexture.htm)、[粒子对象管理窗口](../Features/SceneOperation/GeoParticle/GeoParticleSettingManage.htm)等。
* 优化直方图功能。应用程序提供了两种形式的直方图，[采样点直方图](../Features/Analyst/Raster/Histograms.htm)直观地显示了采样点数据的某一个字段频率分布情况，[栅格直方图](../Features/Analyst/Raster/Statistic/Histogram.htm)对栅格数据中所有像元取值分布情况进行统计。
* 重新设计了[颜色库管理按钮](../Features/ColorManage/AboutColorManage.htm)。新的颜色按钮功能更全面、更强大，支持添加色板、导入/导出颜色库文件、从图片文件中拾取颜色，为颜色添加标签等。
* 对[连接线](../Features/DataProcessing/Objects/EditObjects/JoinLine.htm)功能进行了完善，提供了两种连接方式：首尾相连和临近点相连，并定义了连接后线对象的方向。

返回首页

### ![](img/read.gif)[新增接口列表](Interface_list_SP3.htm)


