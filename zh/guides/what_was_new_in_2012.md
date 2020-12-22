---
id: what_was_new_in_2012
title: SuperMap Deskpro .NET 6R(2012)新特性
---
SuperMap GIS 6R 桌面产品是一套运行在桌面端的专业 GIS 软件。这套软件包括三个级别的产品：SuperMap Viewer .NET
6R、SuperMap Express .NET 6R 和 SuperMap Deskpro .NET 6R。其中 SuperMap Deskpro
.NET 6R 软件是可编程、可扩展、可定制的，二三维一体化的桌面 GIS
产品，提供了数据管理功能、地图相关功能、布局排版功能、三维功能以及数据处理和类型转换的功能，能满足用户的多样化需求。

SuperMap GIS 6R(2012)桌面产品在 SP1
版本的基础之上，继续发扬易于扩展、灵活定制、易学易用等优点，持续提升产品的稳定性和性能，同时新增了对象编辑、数据配准、空间查询、空间分析功能以及大量的三维功能，让
GIS 功能更完整，二三维一体化效果更卓越。

* * *

# 新增功能

### 数据处理
                        
* 新增数据[配准](../Features/DataProcessing/Registration/Registration.htm)功能。流程化的配准操作过程，包括选择配准算法、刺点、计算误差、执行配准、结果保存等一系列步骤，让配准操作流畅便捷。[批量配准](../Features/DataProcessing/Registration/BatchRegistration.htm)可以对多个数据同时进行配准，极大地减少工作量。
* 新增多种[对象编辑](../Features/DataProcessing/Objects/EditObjects/EdittingGeometry.htm)功能。简单易用，所见即所得的编辑效果能实时地获取对象的最新状态。目前支持[修剪](../Features/DataProcessing/Objects/EditObjects/trim.htm)、[延伸](../Features/DataProcessing/Objects/EditObjects/extend.htm)、[打断](../Features/DataProcessing/Objects/EditObjects/split.htm)、[精确打断](../Features/DataProcessing/Objects/EditObjects/SplitAccurately.htm)、[画面分割](../Features/DataProcessing/Objects/EditObjects/CutByPolygon.htm)、[偏移](../Features/DataProcessing/Objects/EditObjects/offset.htm)、[合并](../Features/DataProcessing/Objects/EditObjects/Merge.htm)、[求交](../Features/DataProcessing/Objects/EditObjects/Intersect.htm)、[异或](../Features/DataProcessing/Objects/EditObjects/XOr.htm)、[组合](../Features/DataProcessing/Objects/EditObjects/Group.htm)、[分解](../Features/DataProcessing/Objects/EditObjects/UnGroup.htm)、[旋转](../Features/DataProcessing/Objects/EditObjects/rotate.htm)、[风格刷](../Features/DataProcessing/Objects/EditObjects/StyleBrush.htm)、[属性刷](../Features/DataProcessing/Objects/EditObjects/PropertyBrush.htm)等多种编辑功能。同时多数的编辑功能还支持跨图层操作，为操作带来便捷。
* 新增[地图裁剪](../Features/DataProcessing/ClippingMap/MapClip_basic.htm)功能。通过绘制矩形、圆形、多边形或者选中某一图层中的面对象对被裁剪图层进行裁剪操作，并将裁剪结果可以保存输出为一个新的数据集。
* 新增[类型转换](../Features/DataProcessing/ConvertDataType/AboutDateTypeConvert.htm)功能。通过类型转换功能可以实现点线面数据的互转、复合数据与简单数据的互转、二维与三维数据的互转、文本数据与字段的互转、网络数据转点、线数据、文本数据转点数据、属性数据转点数据等。丰富的类型转换功能，能满足多样化的类型转换需求。

### 空间查询

* 新增[空间查询](../Features/Query/SpatialQueryDia.htm)功能。丰富的[空间查询算子](../Features/Query/SQ_BasicOperators.htm)（8种），能满足用户多种查询需求。
* 将查询结果添加到二维地图和三维场景中进行联动显示，让查询结果也能实现二三维一体化显示。

### 空间分析

* 新增[缓冲区分析](../Features/Analyst/Vector/bufferanalyst/Bufferanalyst.htm)功能。缓冲区分析是根据指定的距离，在点、线、面几何对象周围自动建立的表示影响范围或服务范围分析方法。既支持生成[单重缓冲区](../Features/Analyst/Vector/bufferanalyst/SingleBuffer.htm)，也支持创建[多重缓冲区域](../Features/Analyst/Vector/bufferanalyst/MutilBuffer.htm)。
* 新增[叠加分析](../Features/Analyst/Vector/overlayanalyst/Overlayanalyst.htm)功能。支持裁剪、合并、擦除、求交、同一、对称差、更新7种算子，而且界面简单，操作方便。
* 新增[栅格分析环境设置](../Features/Analyst/Raster/AnalystEnvironment.htm)功能。在进行栅格分析前，对结果数据集的地理范围、裁剪范围、默认输出分辨率、以及是否忽略无值等参数进行设置。
* 新增了[栅格插值](../Features/Analyst/Raster/interpolation/Interpolation.htm)功能，支持多种插值算法，包括距离反比权重、样条插值、简单克吕金、普通克吕金和泛克吕金。
* 新增了[提取等值线](../Features/Analyst/Raster/SurfaceAnalyst/DriveContour.htm)功能，提取等值线支持多种方式提取等值线，包括提取所有的等值线、提取指定等值线、或者交互选择提取等值线。多种可选的提取方式，让分析操作更加灵活方便。
* 新增了[提取等值面](../Features/Analyst/Raster/SurfaceAnalyst/DriveRegion.htm)功能。提取等值面支持提取所有等值面和提前指定等值面两种方式。根据提取需求，可以灵活选择提取方式。
* 新增的通视分析功能包括[可视域分析](../Features/Analyst/Raster/SurfaceAnalyst/ViewShedAnalyst.htm)和可视性分析功能。可视域分析功能可以对多个观察点的可视区域的并集或者交集进行分析。可视性分析功能支持对[两点](../Features/Analyst/Raster/SurfaceAnalyst/TwoObserverVisibility.htm)或者[多点](../Features/Analyst/Raster/SurfaceAnalyst/MutilObserverVisibility.htm)之间的可视性进行分析。

### 三维操作

* 新增在三维场景中进行[空间分析](../Features/SceneOperation/3DAnalyst.htm)的功能，包括缓冲区分析、叠加分析、插值、通视分析等多种分析功能。
* 新增[立体显示](../Features/SceneOperation/AdvancedSceneSetting/Vectorgraph.htm)功能。通过启用补色立体显示、四缓存式立体显示、水平跨越式立体或者是垂直跨越式立体显示模式，配合相应设备就能使用户体验到3D 立体效果，获得身临其境的体验。
* 新增了[模型缓存文件升级](../Features/Optimization/Cache/CacheFilesConversion.htm)功能。提供了将三维模型缓存文件从1.0或1.1版本升级到1.2版本的工具。1.2版本的模型缓存文件格式更小，下载起来更快捷。
* 新增对[ CAD 模型数据集制作标签专题图](../Features/SceneOperation/SceneVisualization/LabelMap3Dgroup.htm)，可以在三维场景中添加字符标注。
* 新增了[三维视图模式](../Features/SceneOperation/AdvancedSceneSetting/Surface.htm)操作设置。可以在球面和平面两种视图模式之间进行转换，其中平面模式非常适用于小场景操作。
* 新增了[可见过滤设置](../Features/SceneOperation/AdvancedLayserSetting/VisibleRanges.htm)的功能，针对图层设置最大/最小可见距离及可见像素尺寸。
* 新增单值、分段专题图[纹理填充](../Features/SceneOperation/SceneVisualization/UniqueMap3DGroupDia.htm)功能，可以对面、线等数据集的专题图子项纹理填充，可用于快速建模。
* 新增[太阳特效](../Features/SceneOperation/AdvancedSceneSetting/SunEffect.htm)功能，在场景中可根据24小时光照周期模拟太阳照耀的效果。
* 新增[依地量算距离](../Features/SceneOperation/SceneIneteraction/MeasureDistanceOnground.htm)的三维操作。

### 海图模块

* SuperMap 海图模块提供了对[海图数据打开](../Features/Chart/DataProcessing/basic/OpenChart.htm)和多幅海图追加。
* 提供基于最新 IHO S-57数字海道测量数据传输标准的[海图数据转换](../Features/Chart/DataProcessing/Conversion/Dataconversion.htm)功能。
* 实现基于最新 IHO S-52电子海图内容和[显示规范的标准化显示](../Features/Chart/Visualization/ChartDisplaySetting.htm)。
* 同时支持[海陆一体化显示、海图真三维显示和发布](../Features/Chart/Visualization/ChartIntegrate.htm)。

### 颜色方案管理器

* 新增了[颜色方案管理](../Features/Visualization/LayerStyle/ManageColorRamp.htm)功能，方便使用者对程序中的颜色方案进行定制和管理。目前提供添加颜色方案、编辑颜色方案、删除颜色方案和导入导出颜色方案等多种操作。

### 符号管理器

* 新增符号库管理功能，可以实现管理点、线型、填充符号库，以及进行点、线型、填充符号的编辑与制作。符号编辑简单易用，功能强大，能满足多个行业的专业符号制作需求。

### [插件管理](../Features/PluginManage/aboutpluginmanage.htm)

* 插件在线资源是实现用户插件共享的网络门户，汇集了各行业插件的展示窗口。同时也可以进行插件搜索、下载、上传等。
* [插件管理器](../Features/PluginManage/manager.htm)是一款功能强大的管理工具，可以在客户端独立运行。可与在线网站进行交互使用，完成插件搜索、管理、下载、导入和发布等，提供给用户一套完整的插件共享解决方案。

### 帮助文档

* 帮助文档结构进行了调整，按照特性模块，重新组织目录结构，调整网页位置。
* 补充用于介绍概念和基本原理的诸多特性页面。

### 其他新增功能

* 新增[扩展模式](../Features/BasicContents/View/WindowsModel_Basic.htm)功能。当窗口模式为扩展模式时，各个子窗口可以脱离应用程序主窗口进行显示，还可以在其他显示器上进行显示和操作。
* 新增了对 [GoogleMaps 引擎类型](../Features/DataProcessing/DataManagement/OpenDatasource.htm)的支持。支持打开 GoogleMaps 引擎类型的数据源。
* 新增了对 [SuperMapCloud 引擎类型](../Features/DataProcessing/DataManagement/OpenDatasource.htm)的支持。支持打开 SuperMap 云服务引擎类型的数据源。
* 示范数据中新增了鸟巢夜景数据（OlympicGreenNight）和北京国际会议中心模型数据（ConventionCenter）。

返回首页

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 1
新特性](what_was_new_in_2012_SP1.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R Service Pack 1
新特性](what_was_new_in_60_SP1.htm)


