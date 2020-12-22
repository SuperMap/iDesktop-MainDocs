---
id: what_was_new_in_710
title: SuperMap iDesktop 7C(2015) 新特性
---
SuperMap GIS 7C
桌面产品是一款可编程、可扩展、可定制的运行在桌面端的二三维一体化的产品。该款产品提供了数据管理、数据处理和类型转换、二三维对象绘制和编辑、二三维空间分析、专题图制作、布局排版以及三维场景渲染等功能。这套软件划分为三个级别的产品：标准版、专业版和高级版，以满足用户的多样化需求。

SuperMap iDesktop 7C(2015) 桌面产品在上一版本基础上，新增了属性表属性值复制、粘贴的编辑功能；支持将 Microsoft
Excel 文件导入为属性表数据集，以及可以将属性表数据导出为 Microsoft Excel
文件；新增了多种数据导入支持的数据格式；新增了平面模式场景；新增了三维空间分析和三维网络分析功能；支持将场景生成2.5维 TIFF
影像数据；根据2014年新版地图，更新示范数据中的 World、China 和 Jingjin 数据中的地图模板，等等。

**SuperMap iDesktop 7C(2015) 包含以下新增功能和优化之处：**

### 数据转换

    * 支持[导入 Microsoft Excel 文件数据](../Features/DataProcessing/DataConversion/ImportExcel.htm)，同时支持将数据集属性表导出为 Microsoft Excel 文件。
    * 支持了多种[模型数据格式的导入](../Features/DataProcessing/DataConversion/ImportModelFile.htm)，如：DirectX 的三维模型文件（*.x）、DXF 模型文件（*.dxf）等。
    * 支持了多种[栅格数据格式的导入](../Features/DataProcessing/DataConversion/GeoFormates.htm)，如：BIL 文件（*.bil）、BIP 文件（*.bip）、BSQ 文件（*.bsq）、USGSDEM 文件和 GBDEM 文件（*.dem）、MrSID 文件（*.sid）等。
    * 支持了[雷达数据的导入](../Features/DataProcessing/DataConversion/ImportLidar.htm)，即支持导入 LIDAR 文件（*.txt)，获取文件中的点数据信息。
    * 支持导入 ArcInfo Export 交换格式文件（*.E00），同时支持将二维点、线、面及文本数据集导出为 ArcInfo Export 文件（*.E00）。

### 数据编辑

    * 新增了属性表单个单元格或整行单元格[复制、粘贴](../Features/DataProcessing/EditTabular/CopyAndPaste.htm)的功能，同时，可将属性表中整行、整列、单个或多个单元格属性值复制到 Microsoft Excel、TXT 等文件中。
    * 新增[二进制字段编辑](../Features/DataProcessing/EditTabular/BinaryEdit.htm)功能，可将任意文件转换成二进制类型存放于属性字段中。

### 数据处理

    * 新增[创建时空数据文件](../Features/DataProcessing/DataConversion/SpatialTemporal.htm)功能，可基于缓存文件，生成缓存数据的时空数据。
    * 新增[构建移动网络数据](../Features/Network/CreatNetworkFile.htm)功能，可基于二维网络数据构建应用于移动端的模型文件。

### 地图制图

    * 新增[地图性能诊断](../Features/Optimization/MapOptimization/MapPerformanceDiagnose.htm)功能，可对当前地图的查询和绘制耗时进行统计，并实时给出当前地图窗口各图层的耗时情况，帮助用户优化地图浏览性能。
    * 新增[兼容 Office 字体大小](../Features/Visualization/AdvanceSetting/CompatibleFontHeigh.htm)功能，开启字体兼容模式，地图中的文本将按照 Micorsoft Office 标准大小显示字体。
    * 支持地图捕捉全局设置，捕捉设置对所有地图窗口生效，并且重启程序后会保存上一次关闭前的捕捉设置。
    * 新增[图层分组](../Features/Visualization/LayerManagement/LayerGroup.htm)功能，可对图层进行分组管理，实现同组图层的统一控制，如可见性、可见比例尺范围。

### 三维空间分析

    * 新增[坡度坡向分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Slope.htm)功能，分析场景中绘制区域内，栅格数据的各个像元的坡度和坡向，并即时动态展现分析结果，鼠标所在像元处可查看坡度坡向信息。
    * 新增[等值线分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Contour.htm)功能，根据设置的最大最小高程、等高线间距等参数，动态提取分析区域的等值线。
    * 新增[通视分析](../Features/SceneOperation/RealspaceSpatialAnalyst/VisibilityAnalyst3D.htm)功能，可用于判断三维场景中任意两点或多点之间的通视情况。
    * 新增[可视域分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Viewshed3D.htm)功能，根据观察点位置，分析指定的水平、垂直视角范围内的可视与不可视区域，并以不同的颜色区分。
    * 新增[动态可视域分析](../Features/SceneOperation/RealspaceSpatialAnalyst/DynamicViewshed3D.htm)功能，动态分析展现沿指定路线行驶时的可视与不可视区域。
    * 新增[天际线分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Skyline.htm)功能，可根据观察者位置、观察方向实时提取指定场景中的天际线，并添加限高体区域对象，为城市建筑规划提供参考。

### 三维网络分析

    * 新增[构建三维网络数据集](../Features/SceneOperation/RealspaceNetworkAnalyst/Network3D.htm)功能，将指定的三维点数据集和线数据集，联合生成三维网络数据集。
    * 新增[生成三维网络数据集流向](../Features/SceneOperation/RealspaceNetworkAnalyst/BuildDirections3D.htm)功能，根据源点和汇点信息字段，创建三维网络数据集的流向字段。
    * 新增[构建三维管线模型](../Features/SceneOperation/RealspaceNetworkAnalyst/BuildPipelineModel.htm)功能，可基于指定的三维网络数据集，将其构建为地下管线模型数据。
    * 新增[最佳路径分析](../Features/SceneOperation/RealspaceNetworkAnalyst/RouteAnalyst3D.htm)功能，可在三维场景中按照站点选择顺序，分析得到阻力最小的最优路径。
    * 新增[单要素追踪分析](../Features/SceneOperation/RealspaceNetworkAnalyst/SingleTracing3D.htm)功能，可在三维场景中根据网络的走向，对设定的一个结点或者弧段进行追踪分析。
    * 新增[关键设施分析](../Features/SceneOperation/RealspaceNetworkAnalyst/FindCriticalFacilitiesUp.htm)功能，可在三维场景中查找已知结点或弧段上游的一个关键设施点，和该点下游受影响的弧段。
    * 新增[爆管分析](../Features/SceneOperation/RealspaceNetworkAnalyst/SquibAnalysis.htm)功能，在三维场景中根据爆管点，查找该点上游阀门及下游受影响的管道。

### 三维操作

    * 支持了[平面模式场景](../Features/SceneOperation/GlobeAndPlane.htm)，可在平面场景中浏览平面坐标系或投影坐标系的二三维数据。
    * 新增[输出场景为2.5维影像数据](../Features/SceneOperation/Scene_Output2.5D.htm)功能，可将指定三维场景区域生成为 2.5D 的 TIFF 影像数据。
    * 支持[依地面积量算](../Features/SceneOperation/SceneIneteraction/MeasureArea3DBut.htm)，可在三维场景中依照地形表面起伏量算表面积。
    * 支持[生成预缓存](../Features/Optimization/Cache/WScene_CacheBuilder.htm)，可以通过iServer的数据服务，实现矢量数据的增加、删除、修改，以及属性数据的修改。
    * 支持[OSGB 数据压平](../Features/SceneOperation/OSGB/osgbFlattenRegion.htm)，可以将三维场景中选中区域的 OSGB 模型数据压平，常应用于城市规划。
    * 支持设置三维场景中[面数据集对象选择风格](../Features/SceneOperation/Basic/Scene_SelectStyle.htm)。
    * 支持在三维场景中对二维或三维面对象进行[节点编辑](../Features/SceneOperation/DataProcessing/Edit3DNode.htm)，可对面对象节点进行移动、增加、删除等编辑操作。

### 示范数据

    * 根据2014年新版地图，更新示范数据中的 China 和 World 数据，同时，更新了示范数据中的地图模板。
    * 更新了示范数据中 Changchun 和 Jingjin 数据的地图模板。
    * 更新了示范数据中 3D 文件夹中的数据，删除了原有的ConventionCenter、ModelingAndAnalyst、OlympicGreen等数据，同时增加了点云数据、SymbolRibbonTrail等数据。

### 优化功能

    * 重构了工作环境设计，解决了上两个版本因框架调整引起工作环境设计不可用的问题，优化了工作环境设计的操作方式，同时解决了诸多缺陷。 
      * 支持设置文件选项卡的可见性；
      * 优化了控件的复制、粘贴；
      * 优化了控件的拖动逻辑，解决了拖动控件引起选项卡闪动刷新的问题；
      * 支持设计地图、布局、场景等子窗口；

* * *

### 变更接口列表

### SuperMap.Desktop 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[AreaUnit](../html/T_SuperMap_Desktop_AreaUnit.htm) |   | 新增枚举  
[ComboBoxItem](../html/AllMembers_T_SuperMap_Desktop_ComboBoxItem_1.htm) |   |
该类从SuperMap.Desktop.UI 命名空间移至SuperMap.Desktop 命名空间  
[ContextMenuItemType](../html/T_SuperMap_Desktop_ContextMenuItemType.htm) |
| 新增枚举  
[CtrlAction](../html/AllMembers_T_SuperMap_Desktop_CtrlAction.htm) | FormClass
属性 | 新增属性的set方法  
[DesktopMapLayoutControl](../html/AllMembers_T_SuperMap_Desktop_DesktopMapLayoutControl.htm)
|

LayoutAction 属性

MapAction 属性

|

新增属性

新增属性  
  
[DesktopSceneControl](../html/AllMembers_T_SuperMap_Desktop_DesktopSceneControl.htm)
| DesktopSceneControl(SceneType sceneType) | 新增构造函数  
[DockBarEventArgs](../html/AllMembers_T_SuperMap_Desktop_DockBarEventArgs.htm)
| DockBarEventArgs(IDockBar dockBar) | 已移除该构造函数  
[FormControlEvents](../html/AllMembers_T_SuperMap_Desktop_FormControlEvents.htm)
|   | 新增类  
[IBaseItem](../html/AllMembers_T_SuperMap_Desktop_IBaseItem.htm) | Tip 属性 |
新增属性  
[IButton](../html/AllMembers_T_SuperMap_Desktop_IButton.htm) | Tip 属性 | 已移除该属性  
[IButtonDropdownItemCollection](../html/AllMembers_T_SuperMap_Desktop_IButtonDropdownItemCollection.htm)
| AddRange 方法 | 已移除该方法  
[ICheckBox](../html/AllMembers_T_SuperMap_Desktop_ICheckBox.htm) | Tip 属性 |
已移除  
[IColorButton](../html/AllMembers_T_SuperMap_Desktop_IColorButton.htm) | Tip
属性 | 已移除 | [IComboBox](../html/AllMembers_T_SuperMap_Desktop_IComboBox.htm) |
Tip 属性 | 已移除  
[IFormMain](../html/AllMembers_T_SuperMap_Desktop_IFormMain.htm) |
IsFileTabVisible 属性 | 新增属性  
[IGallery](../html/AllMembers_T_SuperMap_Desktop_IGallery.htm) | Tip 属性 | 已移除  
[IIntegerUpDown](../html/AllMembers_T_SuperMap_Desktop_IIntegerUpDown.htm) |
Tip 属性 | 已移除  
[ILabel](../html/AllMembers_T_SuperMap_Desktop_ILabel.htm) | Tip 属性 | 已移除  
[IRecentFileGroup](../html/AllMembers_T_SuperMap_Desktop_IRecentFileGroup.htm)
|

Add(string text)

Insert(Int32 index, String text)

Remove(IBaseItem button)重载方法

|

修改声明变量

修改声明变量

已移除  
  
[IRibbonTip](../html/AllMembers_T_SuperMap_Desktop_IRibbonTip.htm) |

HeaderText 属性

Image 属性

Text 属性

|

新增属性

新增属性的set方法

新增属性的set方法  
  
[IStatusBar](../html/AllMembers_T_SuperMap_Desktop_IStatusBar.htm) | Visible
属性 | 已移除 |
[ITabularControl](../html/AllMembers_T_SuperMap_Desktop_ITabularControl.htm) |
FilterIDs | 已废弃  
[ITextBox](../html/AllMembers_T_SuperMap_Desktop_ITextBox.htm) | Tip 属性 | 已移除
| [Measure](../html/AllMembers_T_SuperMap_Desktop_Measure.htm) |

Measure()构造函数

VolumnUnit 属性

|

已移除构造函数

新增属性  
  
[MeasureEventArgs](../html/AllMembers_T_SuperMap_Desktop_MeasureEventArgs.htm)
| VolumnUnit 属性 | 新增属性  
[MeasureType](../html/T_SuperMap_Desktop_MeasureType.htm) |

TerrainArea

Volumn

|

新增枚举成员

新增枚举成员  
  
[OutputtingEventArgs](../html/AllMembers_T_SuperMap_Desktop_OutputtingEventArgs.htm)
|

Cancel 属性

Level 属性

|

已移除

已移除  
  
[PluginInfo](../html/AllMembers_T_SuperMap_Desktop_PluginInfo.htm) |

PluginInfo(PluginInfo pluginInfo)

ToString()方法

|

新增构造函数

新增方法  
  
[SplashForm](../html/AllMembers_T_SuperMap_Desktop_SplashForm.htm) |   | 新增类  
UIType |   | 已移除  
[WorkEnvironment](../html/AllMembers_T_SuperMap_Desktop_WorkEnvironment.htm) |
WorkEnvironment()构造函数 | 已移除  
[XMLCommandType](../html/T_SuperMap_Desktop_XMLCommandType.htm) |

BackstageButtonDropDown

BackstageTab

ComboBoxItem

ContextMenu

ContextMenuButton

ContextMenuButtonDropDown

ContextMenuGroup

ContextMenus

ContextualTab

DockBar

DockBarGroup

DockBars

GalleryItemGroup

Group

Ribbon

RibbonTab

StartMenu

StatusBar

StatusBars

| 新增枚举成员  
  
### SuperMap.Desktop.UI 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[LayersControlManager](../html/AllMembers_T_SuperMap_Desktop_UI_LayersControlManager.htm)
| LayerGroupContextMenu 属性 | 新增属性  
[SuperTabular](../html/AllMembers_T_SuperMap_Desktop_UI_SuperTabular.htm) |

DoCopy()

DoPaste()

RowDeleted

|

新增方法

新增方法

新增事件  
  
[ThemeStyle](../html/AllMembers_T_SuperMap_Desktop_UI_ThemeStyle.htm) | White
属性 | 新增属性  
[UIBackstageMenuThemeStyle](../html/AllMembers_T_SuperMap_Desktop_UI_UIBackstageMenuThemeStyle.htm)
|   | 新增类  
[UIRibbonThemeStyle](../html/AllMembers_T_SuperMap_Desktop_UI_UIRibbonThemeStyle.htm)
| BackstageMenu | 新增属性  
  
返回首页

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png) [SuperMap iDesktop 7C Service Pack 2
新特性](what_was_new_in_7C_SP2.htm)

![](img/smalltitle.png) [SuperMap iDesktop 7C Service Pack 1
新特性](what_was_new_in_7C_SP1.htm)

![](img/smalltitle.png) [SuperMap iDesktop 7C 新特性](what_was_new_in_7C.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 3
新特性](what_was_new_in_2012_SP3.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 2
新特性](what_was_new_in_2012_SP2.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 1
新特性](what_was_new_in_2012_SP1.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012)
新特性](what_was_new_in_2012.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R Service Pack 1
新特性](what_was_new_in_60_SP1.htm)


