---
id: What_was_new_in_9D
title: SuperMap iDesktop 9D 新特性
---
SuperMap iDesktop 9D 桌面产品在上一版本基础上，新增并优化了数据管理、数据编辑、数据处理、地图制图、属性表、数据分析、网络分析、统计图表、Online、三维等模块的相关功能。其中数据管理支持创建影像镶嵌数据集，优化了投影设置的相关操作；数据编辑功能模块中，新增了符号化制图功能，有效的提高了用户矢量化的工作效率；地图制图新增了地形匀色、地图卷帘、热力图、网格聚合图等功能，并优化了地图裁剪、标准图幅图框等功能的操作方式，旨在让用户高效的配制出美观的地图；地图缓存支持了多进程切图、缓存检查，提升了地图切图的效率；在
Online
模块中，支持了便捷的数据共享、在线资源获取，包括地图、数据、颜色方案、符号库等资源，丰富了用户间的数据来源；同时，桌面新增了统计图表的功能模块，可快速的将属性数据图形化，通过直方图、时序图、柱状图、散点图的方式展示数据的关系等等。

**SuperMap iDesktop 9D 包含以下新增功能和优化之处：**

**数据管理**

  * [导入 GJB 数据](../Features/DataProcessing/DataConversion/ImportGJB.htm)时，支持将数据按照一定的地图模板，自动生成一幅新地图，便于用户直接在地图中进行浏览和查看。
  * 支持将 GPS 数据导入为点数据集，即 *.gpx 文件，提高了应用程序的数据兼容性，并支持将有 SmX、SmY、ele、time 属性字段的点数据集导出为 GPS 数据。
  * 64位版本支持浏览有风格的 EPS 地图，便于用户发布服务、分享 EPS 地图等出图的操作。
  * 新增了[SimpleJson数据的导入和导出](../Features/DataProcessing/DataConversion/ImportSimpleJson.htm)，即 *.json格式文件。同时支持单文件和文件夹的两种形式导入。
  * 支持[复制工作空间](../Features/DataProcessing/DataManagement/AboutWorkspace.htm)和[数据源](../Features/DataProcessing/DataManagement/AboutDatasource.htm)的路径，工作空间和数据源节点右键菜单和属性面板都支持复制路径，可在其他功能使用中快速定位到工作空间或数据源。
  * 新增 Web 数据源[ ChinaRS ](../Features/TechDocument/WebDatasets/AboutWebDataset.htm)用于打开中科遥感提供的高分辨率影像数据服务。
  * 重新开放了天地图 [Web 型数据源](../Features/DataProcessing/DataManagement/OpenDatasource.htm)，即 [MapWorld 数据源](../Features/DataProcessing/DataManagement/OpenDatasource.htm#div11)，提供了七种预定义的服务名称和地址供用户选择，支持选择的服务有以下七种： 
    * 全球矢量地图服务(经纬度)；
    * 全球矢量地图服务(墨卡托)；
    * 全球矢量中文注记服务(经纬度)；
    * 全球矢量中文注记服务(墨卡托)；
    * 全球影像地图服务(经纬度)；
    * 全球影像地图服务(墨卡托)；
    * 全球地形晕渲地图服务(经纬度)。
  * 打开 OraclePlus 和 PostgreSQL [数据库型数据源](../Features/DataProcessing/DataManagement/OpenDatasource.htm#222)时，支持设置数据源的连接池，即访问数据库连接通道的条数。
  * 提供了[影像数据转换为块存储](../Features/DataProcessing/DataManagement/ImageConvertToBlock.htm)的功能，提高了影像数据文件的读取效率，同时提升了影像镶嵌数据集的加载和浏览速度。
  * 支持创建[影像镶嵌数据集](../Features/DataProcessing/DataManagement/MosaicDataset.htm)，便于管理同一区域的多幅影像数据文件，并以图层的方式显示多幅影像的拼接效果。 
    * 支持添加单个影像文件，也支持通过文件夹方式，批量[添加指定格式的影像文件](../Features/DataProcessing/DataManagement/MosaicDatasetManage.htm#1)；
    * 支持快速[创建影像金字塔和构建概视图](../Features/DataProcessing/DataManagement/MosaicDatasetManage.htm#4)，提高镶嵌数据集的浏览效率；
    * 支持设置镶嵌数据集的[边界线和轮廓线](../Features/DataProcessing/DataManagement/MosaicDataset.htm)在地图中的显示风格；
    * 支持[浏览轮廓数据的属性表信息](../Features/DataProcessing/DataManagement/MosaicDatasetManage.htm#2)，便于查看每个源文件的来源和数据范围等信息；
    * 支持[导出指定范围的镶嵌数据集源文件](../Features/DataProcessing/DataManagement/MosaicDatasetManage.htm#9)，数据格式与源文件相同，也支持导出镶嵌数据集的源文件清单；
    * 支持[追加、重新指定影像文件](../Features/DataProcessing/DataManagement/MosaicDatasetManage.htm#7)到镶嵌数据集中，同时支持清空数据和统计信息等操作。
  * 支持在 UDB、OraclePlus、PostgreSQL 数据源中[创建矢量数据集集合](../Features/DataProcessing/DataManagement/CreateVectorCollection%20.htm)，可将非 UDB 数据源中的同一类型的矢量数据集，添加到矢量数据集集合中统一管理，适用于将大数据量的数据分多个子数据集进行管理，以解决大数据量数据处理、查询等性能问题。
  * 优化了[投影设置](../Features/DataProcessing/Projection/PrjCoordSysSettingWin.htm)的操作，使投影设置更易用，具体优化如下： 
    * 优化了投影设置的窗口打开速度，节约了用户等待的时间；
    * 优化了新建和修改坐标系的交互操作，使用户操作更简单、易用；
    * 支持设置投影的 EPSG Code；
    * 增加了新的预定义投影，如 Albers 投影；
    * 简化了投影设置中的导入导出投影信息的交互操作。

### 数据编辑

  * 地图中的对象在进行连接和合并时，若结果字段的属性计算方式设置为[保存对象](../Features/DataProcessing/Objects/EditObjects/AttributeDiag.htm)，则在切换选择的对象时，地图上会高亮显示所选择的保留对象，使得用户可清晰的辨别所选对象在地图中的位置。
  * 执行[打断](../Features/DataProcessing/Objects/EditObjects/split.htm)对象操作时，若选择的断点是多个对象的交点，支持设置参与打断的对象，并且地图中会高亮显示列表中的选中对象。
  * [岛洞多边形](../Features/DataProcessing/Objects/EditObjects/PolygonWithHole.htm)支持设置保留洞对象，即将进行导洞多边形操作结果中的洞区，单独保存为一个面对象，便于用户对该对象进行其他操作和设置。
  * 支持设置最大编辑对象数目，若用户批量编辑的的对象个数大于默认值1万时，可调整最大编辑对象数目。
  * 新增了[符号化制图功能](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicDrawing.htm)，用户只需选择待绘制的要素，在地图上绘制后会自动将对象存储到要素关联的数据集中，自动赋予对象的默认属性值，可有效提高用户矢量化的工作效率。结合地图的图层风格，新绘制的对象以该图层风格进行显示，可帮助用户在矢量过程中有效区分地理要素。 
    * 提供了[国情普查符号化制图模板](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicMappingExample.htm)，支持用户导入或预定义模板，包括待绘制要素的名称、数据集类型、属性字段默认值等；
    * 简化了[绘制操作](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicMappingPropertySettings.htm)，无需单独设置图层的可编辑，选择要素进行绘制时，桌面程序将自动设置图层为可编辑，且将该要素绘制在对应数据集中，并自动赋予用户设置的默认属性值；
    * 支持[搜索](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicMappingExample.htm)待绘制要素，当要素较多时可快速定位到指定要素；
    * 绘制某个具体要素对象时，支持[切换绘制方式](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicMappingExample.htm)，例如绘制房屋面对象时，可以采用多边形、正交多边形、矩形等绘制方式；
    * 支持[预定义要素的关键字段](../Features/DataProcessing/Objects/FeatureSignifying/SymbolicMappingPropertySettings.htm)，在实际绘制时属性设置面板上可设置为仅显示关键字段，当对象字段比较多时可简化属性设置面板。
  * 对象编辑中的[组合](../Features/DataProcessing/Objects/EditObjects/Group.htm)、[分解](../Features/DataProcessing/Objects/EditObjects/UnGroup.htm)、[延伸](../Features/DataProcessing/Objects/EditObjects/extend.htm)、[线转点](../Features/DataProcessing/Objects/EditObjects/LineToPoint.htm)、[线转面](../Features/DataProcessing/Objects/EditObjects/LineToRegion.htm)，支持对路由数据进行操作。

### 数据处理

  * 设置 [SQL 表达式](../Features/Query/SQLDia.htm)时支持获取指定字段的唯一值，文本框中会显示该字段中的所有唯一值，用户双击任意一个唯一值，即可便捷的将该值输入表达式编辑框中。
  * 当[ SQL 查询](../Features/Query/SQLQueryDia.htm)保存结果数据量较大时，支持显示结果保存的进度信息。
  * [SQL 查询](../Features/Query/SQLQueryDia.htm)默认隐藏系统字段信息，支持设置是否隐藏系统字段。
  * 支持对数据源中的栅格影像进行[批量重采样](../Features/DataProcessing/Raster/RasterResample.htm)，提高了数据处理的效率。
  * [属性更新](../Features/DataProcessing/Vector/Attributeupdate.htm)支持设置目标数据的过滤表达式，用户可以有针对性地更新目标数据。
  * [点抽稀](../Features/DataProcessing/Vector/RarefyPoints.htm)支持设置点抽稀半径及抽稀后字段属性的统计方式（如：求和、平均值等），并支持抽稀后的结果数据集中要保留的源数据集属性字段。

### 地图制图

  * 新增了[地形匀色](../Features/Visualization/MapSetting/GridCorlorBalance.htm)的功能，添加到地图窗口中的多个栅格图层，可统一使用一个颜色表和值域进行显示，以达到整幅地图颜色显示均匀的效果。
  * 新增[地图卷帘](../Features/Visualization/BrowseMap/MapSwipe.htm)功能，可卷帘式的隐藏指定图层，方便用户更直观地对不同时期的数据做对比。
  * 新增[地图闪烁](../Features/Visualization/BrowseMap/MapBlink.htm)功能，针对卷帘图层，按照设定的时间间隔将卷帘图层交替隐藏、显示，可用于历史数据和现势数据的对比显示。
  * 新增[快照图层](../Features/Visualization/LayerManagement/LayerSnapshot.htm)分组功能，添加到快照图层分组中的图层可作为底图，在地图范围不变化时不刷新该图层，提高了地图的浏览效率。
  * 支持[多进程生成地图缓存](../Features/Optimization/Cache/MultiProcessCache.htm)，合理的利用计算机资源，有效地缩短了生成地图缓存的时间： 
    * 生成缓存前将[切图任务进行拆分](../Features/Optimization/Cache/MultiProcessGenerateCache.htm)，便于每个进程获取子任务进行切图；
    * 支持单机多进程切图，同时也支持多台计算机同时[执行多进程切图](../Features/Optimization/Cache/ExecuteMultiProcessCaching.htm)；
    * 切图过程中支持随时[增加、减少进程数](../Features/Optimization/Cache/ExecuteMultiProcessCaching.htm)，便于合理利用计算机资源；
    * 支持查看切图的总进度和每个进程的切图进度，[了解切图的进度](../Features/Optimization/Cache/ExecuteMultiProcessCaching.htm)。
  * 新增了[缓存检查](../Features/Optimization/Cache/CheckCaching.htm)和[缓存补切](../Features/Optimization/Cache/RecoverCaching.htm)功能，可检查缓存中是否有缺少的瓦片或白块，并对这部分瓦片进行补切。
  * 支持[加载 MongoDB 型地图缓存](../Features/Optimization/Cache/AddMongoDBCache.htm)，当存在多个版本的地图缓存时，支持以动画的形式播放多版本缓存中的若干缓存，可动态呈现数据所发生的变化。 
    * 支持将 MongoDB 中指定的多版本缓存添加到地图中，进行[动态播放浏览](../Features/Optimization/Cache/AddMongoDBCache.htm)；
    * 支持设置当前地图显示的[缓存版本](../Features/Optimization/Cache/AddMongoDBCache.htm)；
    * 多版本缓存[播放管理](../Features/Optimization/Cache/AddMongoDBCache.htm)支持缓存播放、暂停、停止等操作；
    * 支持设置参与[播放的缓存版本](../Features/Optimization/Cache/AddMongoDBCache.htm)，及各版本间的播放显示时间间隔、是否渐变播放等。
  * 支持对事件点数据制作[热力图](../Features/Mapping/AggregationMap/HeatMap.htm)，通过一定的查找半径、颜色表，直观的展示了地图中点数据的热力分布情况，例如制作微博登录的用户分布图。
  * 支持对事件点数据制作[网格聚合图](../Features/Mapping/AggregationMap/GridAggregationMap.htm)，用不同颜色的规则网格表示点数据的聚合度，可应用于表示某区域的犯罪、交通事故多发率。
  * 优化[标准图幅图框](../Features/Visualization/MapSetting/StandardMargin.htm)功能的交互方式，便于用户区分在不同比例尺下图幅图框需设置的参数，支持新、旧两种图幅号的编号标准。
  * 优化了[地图裁剪](../Features/DataProcessing/ClippingMap/RecanlgeClip.htm)功能，重新设计了裁剪参数的设置方式，简化了用户操作。 
    * 将裁剪方式、擦除、精确裁剪的设置调整到图层列表中，便于用户设置每个图层的裁剪参数，并用图示清晰地展示了区域内和区域外两种方式的不同结果；
    * 调整了图层参与裁剪的设置方式，即列表中的图层为参与裁剪的图层，不在列表中的图层则不参与地图裁剪；
    * 支持多对象批量裁剪，按选中的对象个数，可以一次性裁剪得到每个对象对应区域的数据。
  * 优化了[百分比截断拉伸](../Features/Visualization/VisualSetting/Imagegroup.htm)操作方式，支持对多波段影像数据的单个波段分别设置拉伸，可通过直方图便捷、直观的调整最大和最小裁剪百分比像素值，可增加影像显示对比度和清晰度。
  * 优化了[栅格和影像数据](../Features/Visualization/VisualSetting/LayerSetting.htm)的显示效果，提升了显示性能。 
    * 多波段影像支持使用单个波段进行拉伸，或者颜色表显示；
    * 栅格数据支持无值、背景值、透明色的设置；
    * 影像数据可以进行拉伸后设置颜色表显示；
    * 对于单波段像素格式为的 8 位和 16 位的影像数据集，支持修改图层显示的[颜色方案](../Features/Visualization/VisualSetting/Imagegroup.htm)。
  * 在栅格数据集图层属性中，增加了[栅格函数的设置](../Features/Visualization/VisualSetting/Imagegroup.htm)支持将栅格图层设置为三维晕渲图、正射三维影像的显示效果，可快速预览栅格图层的不同显示效果。
  * 优化了打开空地图（地理坐标系）的[窗口默认范围](../Features/DataProcessing/Objects/CreateObjects/AboutCreateGeometry.htm)，使默认范围为可绘制范围，避免了在窗口默认范围内无法绘制对象的情况。
  * 优化了[地图鹰眼](../Features/Visualization/BrowseMap/MapEagleEye.htm)，解决地图设置固定比例尺后的鹰眼图地图范围不正确的问题，并优化了大比例尺下鹰眼图的显示效果。
  * 支持[复制和粘贴地图中心点](../GettingStarted/UIIntro.htm)，地图状态栏上，优化中心点的编辑操作，可直接复制和一键粘贴中心点。
  * 设置地图的固定比例尺时，支持[添加切图比例尺](../Features/Visualization/MapSetting/SettingScale.htm)，用户可以方便地使用常用切图比例尺为地图设置固定比例尺。
  * 优化了地图属性面板[“范围”选项卡](../Features/Visualization/MapSetting/SettingRange.htm)页面中，确定裁剪显示范围、锁定最大显示范围、自定义全幅范围时，选择了某种范围确定方式后，可以通过单击右键，取消鼠标的绘制状态。 
  * 优化了地图属性面板中[投影设置](../Features/Visualization/MapSetting/PrjCoordSysSettingButton.htm)的方式，支持从数据源、数据集、文件复制，便于用户快速设置坐标系。
  * 丰富了[颜色方案](../Features/Visualization/LayerStyle/ColorRampManager.htm)增加了“适用于点、线、标注”分组，主要应用于点、线数据制作的单值专题图和标签专题图；还增加了“适用于聚合图”分组，主要适用于热力图和网格聚合图。
  * 优化了[关联浏览](../Features/Visualization/BrowseMap/WindowsBinding.htm)，调整了属性表和地图的窗口布局，并优化了地图的联动显示效果。 
    * 优化了关联浏览窗口的布局，在进行关联浏览时，地图和场景窗口会并列显示，若有属性表窗口参与关联浏览，则属性表窗口会默认显示在窗口的下半部分；
    * 优化了关联浏览地图的联动效果，当选中的关联对象大部分区域或完全显示在当前视图范围中时，不会改变地图的视图范围，只会高亮关联对象，尽量减少地图的刷新次数；
    * 属性表在进行关联浏览时，默认情况下选中属性表整列关联地图中不会高亮显示所有对象，若需高亮显示所有对象，可以通过属性表整列右键菜单中的“高亮所有对象”进行设置；
  * 在[绘制文本对象](../Features/DataProcessing/Objects/CreateObjects/Text.htm)时，调整了文本默认初始风格：字体类型默认取操作系统默认字体，字体大小为14号字，与 Word 的默认字体大小保持一致。
  * 支持设置标签专题图中的[文本阴影颜色](../Features/Mapping/LabelMap/UniformLabelMapDia.htm)，丰富了文本显示效果的设置。

### 属性表

  * 对于百万数量级的[属性表](../Features/DataProcessing/EditTabular/Editgroup.htm)，优化了选中属性表整列的效率。
  * 优化了属性表[更新列](../Features/DataProcessing/EditTabular/UpdateButton.htm)，当属性表处于筛选状态时，进行更新列操作，仅会对筛选出来的记录字段值进行更新。
  * 优化了[更新列](../Features/DataProcessing/EditTabular/UpdateButton.htm)的双字段连接运算方式中，含有空字符时的连接运算结果。

### 网络分析

  * 优化了[自定义构建三维网络](../Features/SceneOperation/RealspaceNetworkAnalyst/AccurateBuildNetwork3D.htm)功能，支持将 EPS 点和线数据集构建为三维网络数据。
  * 支持[构建导航模型数据](../Features/Network/NavigationAnalysis/BuildNavigationModel.htm)，可在应用程序中进行模拟导航，对导航数据进行验证和分析，为 iMobile 移动端的应用生产导航数据。
  * 支持模拟[路径规划分析](../Features/Network/NavigationAnalysis/RoutePlanning.htm)，使用路网编译得到的道路数据，模拟路径规划，对路网编译数据进行验证和分析。
  * 新增[提取路由M值](../Features/DynamicSeg/ExtractRouteM.htm)，可根据指定的间距提取路由数据的刻度值，在地图上副i刻度值进行标识后，便于用户了解每段路由的路由值。
  * 支持[查询M值](../Features/DynamicSeg/InquireRouteM.htm)，可查询指定路由图层中鼠标所在位置的路由M值，便于用户了解路由数据具体路段处的 M 值。

### 统计图表

  * 支持将[数据集属性信息图形化](../Features/Mapping/Diagrams/Diagrams1.htm)，可通过直方图、时序图、柱状图、散点图等形式，直观的展示和挖掘数据的关系、结构和趋势等；
  * 支持图表与地图间的[联动显示](../Features/Mapping/Diagrams/Diagrams1.htm)，便于用户分析数据在地理上的分布特征；
  * 支持[图表与专题图之间的直接转换](../Features/Mapping/Diagrams/ConvertThemticMap.htm)，可快速的通过不同的方式展示数据信息；
  * 支持设置统计图表的[显示效果](../Features/Mapping/Diagrams/CreateDiagram.htm)，可通过调整颜色使图表的显示效果更美观；
  * 支持将[统计图表输出为图片](../Features/Mapping/Diagrams/CreateDiagram.htm)，可应用于 Word、PPT 等其他文档工具中。

### 云共享

  * 优化了云许可界面，解决了本地正式许可与云许可混用时，许可页面信息不准确的问题。
  * 优化 Online 的交互操作，支持在桌面端直接[浏览 Online 上的地图](../Features/Online/OnlineMap.htm)，支持地图的预览与操作。
  * 支持下载与地图相关联的[共享数据](../Features/Online/Online.htm)。
  * 支持[访问 iPortal 私有云](../Features/Online/Online.htm)，在局域网环境内实现组织内部资源快速分享。
  * 支持[上传颜色方案](../Features/Online/OnlineColorSchemes.htm)，方便用户分享自定义的颜色方案，并支持在线颜色库的检索与下载使用，丰富了用户的配图资源。
  * 支持[上传符号库](../Features/Online/OnlineSymbol.htm)，方便用户分享自定义的地图符号，并支持在线符号库的检索与下载使用，丰富了用户的配图资源。
  * 支持同时获取和管理[ iPortal 和 SuperMap Online 的资源](../Features/Online/OnlineData.htm)，丰富了在线数据的来源。
  * 支持直接在桌面端，管理 Online 和 iPortal 中的[在线数据](../Features/Online/OnlineData.htm)，包括重新发布服务、删除在线数据、修改在线数据描述信息、创建子目录等。
  * 工作空间管理器中新增了“[我的数据](../Features/Online/OnlineMyData.htm)”节点，便于用户管理上传的工作空间、数据源、符号库和颜色方案。
  * 优化通过桌面端分享数据与服务的交互操作。
  * 支持[POI 检索](../Features/Online/POIRetrieval.htm)，可基于 SuperMap Online 地图的 POI 服务，对地图进行位置搜索、路线查询和公交查询的操作。

### 三维

  * **模型操作**

  **建模**

  * 新增[线性拉伸](../Features/SceneOperation/3DObjectOperation/LinearExtrude.html)功能，由矢量面数据拉伸构建闭合模型，支持二三维面图层（地理坐标系下）。
  * 新增[旋转拉伸](../Features/SceneOperation/3DObjectOperation/RotateExtrude.html)功能，由点数据根据绘制的面和选择角度，拉伸构建闭合模型，支持二三维点数据集（地理坐标系下）。
  * 新增[拉伸闭合体](../Features/SceneOperation/OSGB/OSGBStretchClosure.html)功能，由三维面或模型拉伸至指定高度，形成一个闭合体（地理坐标系下）。
  * 新增[构建坡屋顶](../Features/SceneOperation/3DObjectOperation/StraightSkeketon.html)功能，由多边形坡屋顶构建闭合模型，支持二三维面图层（地理坐标系下）。
  * 新增[放样](../Features/SceneOperation/3DObjectOperation/Loft.html)功能，由三维线对象根据绘制的截面，放样闭合模型，放样对象为（选中或整个图层）三维线，支持三维线图层（地理坐标系下）。
  * 新增[构建房屋](../Features/SceneOperation/3DObjectOperation/HouseBuild.html)功能，由矢量面构建房屋模型(可构建墙体、挑檐、屋顶)，在预览窗体中设置对象参数和材质后应用到图层或选中对象，支持二三维面图层（地理坐标系下）。

**布尔运算** 

  * 新增闭合模型[布尔运算](../Features/SceneOperation/3DObjectOperation/ModelBooleanOperation.html)功能，对三维模型对象进行交、并、差运算，返回结果数据。

**截面与投影**

  * 新增[获取截面](../Features/SceneOperation/DataExtract/ExtractSection.html)功能，通过绘制截面位置和选择截面类型（横截面、纵截面），提取截面处模型的二三维剖面图。支持模型数据集按照一定剖切方向展示出模型的内部构造图例，提取出剖切方向所在平面与模型之间相交的三维面数据。支持获取的截面导出为二维面或三维面。
  * 新增[投影面](../Features/SceneOperation/3DObjectOperation/ProjectionRegion.html)功能，将三维模型对象投影到XY（二维）平面上，生成二维面对象，此二维面对象相当于模型的俯视图。
  * 新增[投影拉伸体](../Features/SceneOperation/DataExtract/ProjectionRegionExtrude.html)功能，对模型对象进行获取投影面和线性拉伸两重操作，利用模型对象在最小高度上的投影面进行线性拉伸，获取完全包络原模型对象的模型。
  * 新增[提取边界](../Features/SceneOperation/DataExtract/ExtractBoundary.html)功能，提取模型的三角网边界面或模型对象最小高程上的投影轮廓面，得到的面数据可以作用于TIN地形、倾斜的镶嵌操作。

**凸包**

  * 新增[凸包](../Features/SceneOperation/DataExtract/ConvexHull.html)功能，凸包（Convex Hull）是计算图形学中的概念，在二维平面中，凸包是一个最小凸多边形。同理，通过凸包的概念，获取一个与原三维模型对象或包含所有三维点集的结构简单且相似的几何体，并且由于它是闭合的，可用于模型对象的布尔运算。

[阴影体](../Features/SceneOperation/3DObjectOperation/ShadowVolume.html)

  * 支持太阳光源产生阴影体，设置太阳光照的时间（时区与本地一致），在此太阳光照下构建模型的阴影体，支持模型数据集。
  * 支持点光源产生阴影体，绘制或者选择点光源，在此点光源下构建模型的阴影体，支持模型数据集。

**BIM轻量化**

  * 新增[提取外壳](../Features/SceneOperation/BIMModle/BIMShell_Extracting.html)功能，将BIM模型的可见部分（外壳）与不可见部分（内部模型）分别存储在不同数据集中，实现内、外部模型的分离。
  * 新增[三角网简化](../Features/SceneOperation/BIMModle/BIMSimplify.html)功能，BIM模型存在大量冗余的三角面。通过BIM简化功能，对整个图层的模型设置参数进行简化，实现对同类型模型批量简化。
  * 新增[操作子对象](../Features/SceneOperation/BIMModle/BIMSkeletonSimplify.html)功能，子对象简化、删除作为对模型对象的各个子对象进行不同程度的简化、删除处理，弥补了BIM简化在对单个模型上的不足。

**三角网操作**

  * 新增[移除重复点](../Features/SceneOperation/BIMModle/BIMVertexOperation.html)功能，通过移除重复点去除图层中指定BIM模型对象的重复点或冗余点，并且重新计算模型的法线。
  * 新增[重新计算法线](../Features/SceneOperation/BIMModle/RecalculateNormal.html)功能，当某些BIM模型的法线不正确，又不需要移除重复点或冗余点，可直接使用该功能重新计算模型法线。
  * 新增[子对象拓扑拆分](../Features/SceneOperation/BIMModle/BIMSplitSkeleton.html)功能，将全部或选中对象的子对象拆分成多个闭合的子对象。
  * 新增[模型合并](../Features/SceneOperation/BIMModle/BIMModelCompose.html)功能，将多个闭合的子对象合并为一个模型对象。

**地质体**

  * 新增[地质体构建](../Features/SceneOperation/3DObjectOperation/GeoBodyBuild.html)功能，通过选择三维点数据集（仅支持地理坐标系），设置范围，用于将多层地质点数据生成地质体模型。
  * 新增[地质剖面](../Features/SceneOperation/3DObjectOperation/GeoBodySection.html)功能，通过选择地质体数据集和剖切数据集（支持二维线或二维面），设置剖切参数，进行剖面分析。
  * 新增[地质钻孔](../Features/SceneOperation/3DObjectOperation/GeoBodyBorehole.html)功能，通过选择地质体数据集和点数据集（支持二维点和三维点），设置钻孔参数，进行钻孔分析。
* **TIN地形操作**
  * 提供[裁剪](../Features/SceneOperation/TINTerrainOperation/TinClip.html)功能，当场景中存在TIN地形时，可通过绘制矩形、圆形、多边形或者选中的面对象对被裁剪TIN地形进行裁剪。
  * 提供[挖洞](../Features/SceneOperation/TINTerrainOperation/TinHollow.html)功能，当场景中存在TIN地形时，可通过绘制矩形、圆形、多边形或者选中的面对象对被裁剪TIN地形进行挖洞。
  * 提供[镶嵌](../Features/SceneOperation/TINTerrainOperation/TinMosaic.html)功能，当场景中存在TIN地形时，通过选中的多边形对TIN地形进行镶嵌操作。
  * 提供[布尔运算](../Features/SceneOperation/TINTerrainOperation/TINBooleanOperation.html)功能，场景中TIN地形与模型之间进行并、差运算，得到新的TIN地形数据。
  * 提供[拉伸闭合体](../Features/SceneOperation/TINTerrainOperation/TINStretchClosure.html)功能，场景中TIN地形向上拉伸至指定高程处，形成一个闭合体。
  * 提供[地形修改](../Features/SceneOperation/TINTerrainOperation/TINStretchClosure.html)功能，在场景中编辑三维面对象，用于修改当前TIN地形（实时效果上的修改）。

  * **倾斜摄影操作**
    * 提供[裁剪](../Features/SceneOperation/OSGB/OSGBModelClip.html)功能，当场景窗口中选中一个倾斜摄影模型图层时，可通过绘制矩形、圆形、多边形或者选中的面对象对被裁剪倾斜数据进行裁剪。
    * 提供[镶嵌](../Features/SceneOperation/OSGB/OSGBModelMosaic.html)功能，当场景窗口中选中一个倾斜摄影模型图层时，通过选中的多边形对球面场景中指定的倾斜数据进行镶嵌。
    * 提供[剔除悬浮物](../Features/SceneOperation/OSGB/CullSuspendedSolids.html)功能，剔除倾斜摄影图层中的悬浮物，是一种修正倾斜模型数据的方法。结合拉伸闭合体，使倾斜摄影模型构建的闭合体更有利于在实际生活中的使用。
    * 提供[拉伸闭合体](../Features/SceneOperation/OSGB/OSGBStretchClosure.html)功能，倾斜摄影模型（选择一个文件或整个图层）向下拉伸至高程处，形成一个闭合体，可用于3D打印等。
    * 提供[纹理替换](../Features/SceneOperation/OSGB/OSGBReplaceTexture.html)功能，倾斜摄影模型中指定对象的纹理进行替换，提供直接修改颜色和颜色镶嵌两种方法。
    * 新增倾斜摄影模型[另存到模型数据集](../Features/SceneOperation/OSGB/LayerSaveModelDataset.html)功能。
    * 优化[文件选择](../Features/SceneOperation/OSGB/FileSelect.html)功能。
  * **三维分析**
    * [坡度坡向分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Slope.htm)新增坡向箭头是否开启流动效果。
    * [可视域分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Viewshed3D.htm)新增可视域分析结果导出，支持导出可视体、不可视体和可视表面。
    * [日照分析](../Features/SceneOperation/RealspaceSpatialAnalyst/SunshineAnalyst.htm)新增日照分析结果导出为三维点数据，存储了阴影率信息。
    * [视频投放](../Features/SceneOperation/RealspaceSpatialAnalyst/VideoPlay.htm)新增视频投放支持同名点匹配功能。
    * [天际线分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Skyline.htm)新增天际线分析结果导出二维线、三维线、扇形面、闭合拉伸体。
    * 球面场景支持[生成DSM](../Features/SceneOperation/RealspaceSpatialAnalyst/CreatDSM.htm)、[生成DOM](../Features/SceneOperation/RealspaceSpatialAnalyst/CreatDOM.htm)；新增[生成2.5维](../Features/SceneOperation/RealspaceSpatialAnalyst/Generate25DMap.html)影像。
  * **对象绘制**
    * [三维对象新增绘制三维参数化对象](../Features/SceneOperation/DataProcessing/Create3DGeometry.htm)：长方体、圆锥体、、圆柱体、球体等参数化对象，支持绘制到模型数据集图层及kml图层中。
    * [城市小品](../Features/SceneOperation/PlantTees/PlantTees.html)优化已有功能。
    * 新增[布告板](../Features/SceneOperation/3DObjectOperation/BulletinBoard.html)功能，在kml图层中，绘制布告板，通过设置图片或文字新建布告板，其布告板锚点为底部中心位置，图片锚点为左上角。
  * **三维数据**
    * 提供[TIN叠加海洋](../Features/SceneOperation/TINTerrainOperation/TINBuildWaterMask.html)功能，根据精确的海岸线范围生成带海洋边界的Tin缓存，指定矢量范围与TIN地形范围要保持一致。
    * 新增[体数据集生成缓存](../Features/SceneOperation/3DTools/Volumn3D_2cache.html)。
    * [模型转换](../Features/SceneOperation/DataProcessing/3DModleConvertComply.htm)支持osgb/osg、3ds、fbx、dae、x、obj格式模型转换成osgb、s3m、off、stl格式模型。
    * 提供[纹理提取](../Features/SceneOperation/3DTools/ExtractTexture.html)功能，根据影像数据集及对应的矢量面数据集，提取出矢量面对应的纹理图片，并将纹理路径记录在矢量面数据集相应的字段上 。
    * 模型数据集以[实例化](../Features/SceneOperation/3DTools/InstantiationProcess.html)方式存储。
    * 提供[批量生成模型缓存](../Features/SceneOperation/3DTools/MultyModelCacheBuilder.html)功能，多模型数据源中的模型数据（模型数据集或CAD），生成一份osgb格式缓存文件。
  * **[场景属性](../Features/SceneOperation/AdvancedSceneSetting/Option.htm)**
    * 新增[场景颜色](../Features/SceneOperation/AdvancedSceneSetting/SceneColor.html)参数：亮度、对比度、色调、饱和度、伽玛的设置 。
    * 删除<是否接收栅格体数据>。
    * 删除场景灯光设置。
  * **图层属性**
    * 闭合模型参与地表开挖（倾斜、TIN参与地表开挖）。
    * [标签专题图](../Features/Mapping/LabelMap/PropertiesDia.htm)新增文字偏移模式。
    * 矢量数据集图层属性新增设置LOD缩放倍数。
    * OSGB图层右键菜单，[查看、回滚历史数据](../Features/SceneOperation/OSGB/OSGBLayerContextMenu.html)。
    * OSGB图层新增亮度、对比度、色调、饱和度、伽玛[颜色参数设置](../Features/Visualization/VisualSetting/Rastergroup.htm)。
    * 支持三维点线面编辑，支持[顶点捕捉](../Features/SceneOperation/3DObjectOperation/SupportSnap.html)。
    * 调整图层属性布局，分页显示。
    * 新增TIN地形坡度坡向分析，根据坡度值进行[分层设色](../Features/SceneOperation/AdvancedLayserSetting/Layer3DProperty_HypsometricSetting.html)。
    * TIN地形图层右键菜单，查看、回滚历史数据。
  * **模型属性**
    * 选中模型数据集对象，右键支持查看模型属性信息。
    * 选中模型数据集对象，右键支持编辑模型：编辑几何信息及子对象信息。
    * 选中模型数据集对象，右键支持导出模型文件。

### 易用性

  * 优化了[起始页](../Features/DataProcessing/DataManagement/GettingStarted.htm)中的最近使用列表中的工作空间、数据源、路径的控件效果，使得用户操作更舒适。
  * “文件”选项卡中的最近使用列表，支持删除历史记录，便于用户管理历史打开记录。
  * 支持在桌面选项中设置界面的字体风格，包括字体类型、字号、是否加粗等参数。
  * 支持通过[设置显示比例尺](../Features/StartMenu/Environment.htm)的方式，调整界面的字体显示大小，提供了 100%、125%、150% 三种显示比例尺。
  * 优化了工作空间和图层管理器的树节点图标，让用户更容易、更快速地识别树节点的类别与相关功能入口。
  * 在 Ribbon 中增加了快速打开 Web 数据源的功能入口，即在地图和在线选项卡中增加了在线地图的下拉选项。
  * 将类型转换、表面分析等功能，调整为二级功能菜单的图标模式，使 Ribbon 在小分辨率的电脑中布局和显示更美观。
  * 在 Ribbon 上新增网络分析选项卡，将网络分析相关的功能放在此选项卡中，方便用户快速的找到网络分析功能。
  * 在工作空间管理器隐藏的情况下，支持快速将工作空间中数据集添加到当前地图窗口中。

### 扩展开发

  * 升级了 DEVExpress 界面库，由 16.1.4 升级至 17.1.3.0 版本，解决了 Gallery 展开效率与效果问题等。
  * 优化工作环境设计器，解决部分特殊控件在工作环境设计器中看不到对应节点问题。 
    * ButtonDropDown 中的 Gallery 控件，增加了 **size** 属性的设置；
    * 支持调整下拉按钮 Gallery 控件中的 **item** 图片显示效果。

### 示例数据

  * 示例地图丰富了 SampleData 中的地图类型，同时增加了示例数据制图的相关说明文档，为用户配图提供一定的参考性。 
    * 新增中国横版行政区划地图。
    * 新增京津冀、长江三角洲地区、珠三角地区的都市圈图。
    * 新增热力图、网格聚合图。
    * 新增天地图风格的地图。
    * 新增 A1、A2、A3、A4 版面地图。

### 帮助文档

  * 新增示例地图的相关说明文档，为用户配图提供一定的参考性。
  * 新增 SuperMap 中注记解决方案的技术专题。
  * 新增三维管线技术专题。
  * 新增地图制图的各类参考规范。

