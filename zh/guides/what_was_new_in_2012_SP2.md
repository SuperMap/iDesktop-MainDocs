---
id: what_was_new_in_2012_SP2
title: SuperMap Deskpro .NET 6R(2012) Service Pack 2 新特性
---
SuperMap GIS 6R 桌面产品是一套运行在桌面端的专业 GIS 软件。这套软件包括三个级别的产品：SuperMap Viewer .NET
6R、SuperMap Express .NET 6R 和 SuperMap Deskpro .NET 6R。其中 SuperMap Deskpro
.NET 6R 软件是可编程、可扩展、可定制的，二三维一体化的桌面 GIS
产品，提供了数据管理功能、地图相关功能、布局排版功能、三维功能以及数据处理和类型转换的功能，能满足用户的多样化需求。

SuperMap GIS 6R(2012) SP2 桌面产品在上个版本（SuperMap GIS 6R(2012) SP1）的基础之上，一方面对 GIS
功能进行完善，如新增了多种对象绘制和编辑功能、增加了多种数据处理功能等，另一方面对选项卡界面、原有的对象绘制和编辑功能优化。

SuperMap Deskpro .NET 6R(2012) Service Pack 2 包含以下新增功能以及增强之处：

# 新增功能

### 界面设计

* 重新设计了几个选项卡的排布，新的布局更符合用户的操作习惯。
* 替换了绝大部分图标，界面更加美观。

### 对象绘制

简化和重新设计了对象绘制的方式，从而改善绘制过程中的用户体验。

* 重新设计了绘制方式，改进对象绘制的机制，不再明显区分普通或者精确的绘制方式，既提供易用的常用对象绘制功能，又提供通过二次开发绘制自定义图形的机制。
* 从几何对象类型上，新增多种几何对象的绘制，如[点](../Features/DataProcessing/Objects/CreateObjects/Point.htm)；[折线](../Features/DataProcessing/Objects/CreateObjects/DrawPolyLine.htm)；[任意多边形](../Features/DataProcessing/Objects/CreateObjects/DrawPolygon.htm)、[正多边形](../Features/DataProcessing/Objects/CreateObjects/DrawPolygon.htm)、[正交多边形](../Features/DataProcessing/Objects/CreateObjects/DrawRegularPolygon.htm)；[矩形](../Features/DataProcessing/Objects/CreateObjects/DrawQuadRangle.htm)、[圆角矩形](../Features/DataProcessing/Objects/CreateObjects/DrawQuadRangle.htm)、[平行四边形](../Features/DataProcessing/Objects/CreateObjects/DrawQuadRangle.htm)、[菱形](../Features/DataProcessing/Objects/CreateObjects/DrawQuadRangle.htm)；[三点弧](../Features/DataProcessing/Objects/CreateObjects/DrawArc.htm)、[正圆弧](../Features/DataProcessing/Objects/CreateObjects/DrawArc.htm)、[椭圆弧](../Features/DataProcessing/Objects/CreateObjects/DrawArc.htm)；[正圆](../Features/DataProcessing/Objects/CreateObjects/CreateCircle.htm)、[椭圆](../Features/DataProcessing/Objects/CreateObjects/CreateEllipse.htm)等等。
* 新增4种绘制选项，让用户绘制过程更加容易和流畅。配合使用这些绘制选项，如[自动连接线对象](../Features/DataProcessing/Objects/CreateObjects/AutoConect.htm)、[自动闭合线对象](../Features/DataProcessing/Objects/CreateObjects/AutoClose.htm)、[自动打断线对象](../Features/DataProcessing/Objects/CreateObjects/AutoSplit.htm)和[自动切割面对象](../Features/DataProcessing/Objects/CreateObjects/AutoCut.htm)，可以帮助用户提高绘制效率。

### 对象编辑

在新的绘制机制之上，完善和丰富了对象编辑功能，使处理数据过程中的编辑难题能迎刃解决。以下是新增的对象编辑功能：

* [倒直角](../Features/DataProcessing/Objects/EditObjects/ReverseRightAngle.htm)
* [点平差](../Features/DataProcessing/Objects/EditObjects/NodeAdjust.htm)
* [炸碎](../Features/DataProcessing/Objects/EditObjects/Explode.htm)
* [连接线对象](../Features/DataProcessing/Objects/EditObjects/JoinLine.htm)
* [移动](../Features/DataProcessing/Objects/EditObjects/move.htm)
* [定位复制](../Features/DataProcessing/Objects/EditObjects/DesCopy.htm)
* [擦除](../Features/DataProcessing/Objects/EditObjects/Erase.htm)
* [局部更新](../Features/DataProcessing/Objects/EditObjects/UpdatePartly.htm)
* [岛洞多边形](../Features/DataProcessing/Objects/EditObjects/PolygonWithHole.htm)
* 新增了大量[对象编辑的快捷键](../Features/DataProcessing/LayoutShortcutKey.htm)，提高用户的编辑效率。

### 数据操作

* 新增 iServerRest 数据引擎、 MapWorld、OGC 的 WMTS 数据引擎，分别支持 iServer Rest 发布地图服务、天地图服务和 WMTS 服务的在线读取和显示。
* 新增[CSV 数据导入](../Features/DataProcessing/DataConversion/CSVimport.htm)功能。支持将 CSV 文本文件直接导入到应用程序中，作为属性数据使用，给用户使用属性信息带来更大的方便。
* 新增[专题图保存为 CAD 数据集](../Features/Mapping/EditingMap/ThematicToCAD.htm)功能，有助于保留专题图图层的风格，并以 CAD 的形式输出。
* 新增[矢量数据集融合](../Features/DataProcessing/Vector/Datafuse.htm)功能，方便将满足一定条件的对象融合或组合成一个新的对象。
* 新增[拓扑分析](../Features/DataProcessing/Topology/Topology.htm)功能。提供了大量的拓扑规则，方便对矢量数据进行拓扑检查和处理，同时也提供了基于拓扑规则构建网络数据集的方法。
* 新增[数据集属性表更新](../Features/DataProcessing/Vector/Attributeupdate.htm)功能。依据要更新的数据集之间的空间关系，对其中一个数据集的属性信息进行更新。 
* 新增[数据集追加行](../Features/DataProcessing/Vector/AddtoRow.htm)功能，方便我们在当前数据集中增加新的记录。
* 新增[数据集追加列](../Features/DataProcessing/Vector/AddtoList.htm)功能，方便我们将其他数据集中的字段信息追加到当前数据集中。
* 新增[数据集字段索引](../Features/DataProcessing/Vector/FieldIndex.htm)功能。为数据库型数据集中的一个或者多个字段创建索引，有助于快速查找和数据排序。
* 新增[矢量数据集重采样](../Features/DataProcessing/Vector/VectorResample.htm)功能。方便用户对节点密集的对象进行简化，从而提高地图绘制速度。
* 新增[碎多边形合并](../Features/DataProcessing/Vector/UnionPieces.htm)功能。将面积较小的多边形合并到邻近面积较大的多边形中，减少小对象，美化图斑显示效果。
* 新增[矢量数据集光滑处理](../Features/DataProcessing/Vector/DatasetSmooth.htm)功能。通过对线数据、CAD 数据以及网络数据中的线对象插入一定数目的节点，使线对象更为光滑。
* 新增[栅格数据集更新](../Features/DataProcessing/Raster/Append.htm)功能。可以实现用一个（或多个）栅格数据集对另一个栅格数据集相应部分的更新。
* 新增[栅格数据重采样](../Features/DataProcessing/Raster/RasterResample.htm)功能。通过栅格重采样可以改变栅格数据的分辨率，满足不同的应用需求。
* 新增[栅格数据镶嵌](../Features/DataProcessing/Raster/Mosaic.htm)功能。支持对两幅或者多幅栅格数据集按照空间关系镶嵌成一个栅格数据。无论是基于相邻边界的栅格镶嵌，还是基于有重叠区域的栅格镶嵌，栅格镶嵌能快速地实现栅格数据的完美融合。
* 新增[栅格数据重分级](../Features/DataProcessing/Raster/RasterReclass.htm)功能。按照一定的分级标准，对栅格数据集中的像元值进行重新划分和重组，并为每一个级别重新赋值。
* 新增[栅格代数运算](../Features/DataProcessing/Raster/RasterMathAnalyst.htm)功能。栅格代数运算功能对一个或者多个栅格数据进行数学运算和函数运算，以满足用户多种栅格分析需求。
* 新增栅格数据集[设置显示范围](../Features/DataProcessing/DataManagement/DTgroupDiaGrid.htm)的功能，对掩膜区域外栅格影像进行过滤显示。
* 新增[缩放到本图层影像分辨率](../Features/Visualization/BrowseMap/ZoomtoImgResolution.htm)功能，快速将影像栅格图层调整到最佳显示状态。
* 新增栅格数据集[设置颜色表](../Features/DataProcessing/DataManagement/DTgroupDiaGrid.htm)功能，为栅格数据集设置固定的颜色表，下次打开仍然会保留设置的颜色风格。

### 地图制图

* 新增[分级配图](../Features/Visualization/MapSetting/MapScaleGrading.htm)功能。有助于按照比例尺级别配图，可批量设置每个图层的比例尺大小，为用户在配图带来便利。

### 空间分析

* 新增矢栅转换功能，包括矢量栅格化和栅格矢量化两个功能。 
    * [栅格矢量化](../Features/Analyst/VectorRasterConvert/RasterToVector.htm)功能用来将栅格数据转换化为矢量数据。
    * [矢量栅格化](../Features/Analyst/VectorRasterConvert/VectortoRaster.htm)功能用来将矢量数据转换为栅格数据。
* 新增[坡度分析](../Features/Analyst/Raster/SurfaceAnalyst/Slope.htm)功能。坡度分析用于计算栅格数据的各个像元的坡度值，根据坡度值大小可以直观地显示分析区域的地势。
* 新增[坡向分析](../Features/Analyst/Raster/SurfaceAnalyst/Aspect.htm)功能。坡向分析用于计算栅格数据的各个像元的坡面朝向，根据坡向值可以判断感兴趣区域的朝向。
* 新增[填挖方](../Features/Analyst/Raster/SurfaceAnalyst/CutFill.htm)和[面填挖方](../Features/Analyst/Raster/SurfaceAnalyst/CutFillRegion.htm)功能。填挖方功能用来计算在填方/挖方前后，地表增加或者减少的面积或者体积，为工程施工或水土保持决策提供依据和参考。

### 三维操作

* 新增[三维线转为飞行路线](../Features/SceneOperation/FlyManager/CreateRoute.htm)功能，使用户在创建飞行路线时拥有更多的选择。
* 新增[三维对象绘制](../Features/SceneOperation/DataProcessing/Create3DGeometry.htm)功能，支持绘制三维点、直线、折线和多边形，同时支持绘制粒子对象。
* 新增[三维粒子特效](../Features/SceneOperation/GeoParticle/GeoParticleDia.htm)功能。在场景中模拟一些特定的模糊显示技术，用粒子系统渲染出抽象视觉效果，例如火焰、烟雾、喷泉、爆炸、烟花等效果。
* 新增[对象贴图设置](../Features/SceneOperation/AdvancedLayserSetting/SettingTexture.htm)功能。对者拉伸后的对象使用贴图进行渲染，从而增加场景的真实性。
* 新增[三维专题图子项进行贴图设置](../Features/SceneOperation/SceneVisualization/Thematic3DTexture.htm)功能。对单值专题图和分段专题图的子项使用纹理贴图，以达到更加逼真的显示效果。
* 新增[地形模型匹配](../Features/Analyst/Raster/SurfaceAnalyst/AboutTerrainMatch.htm)功能。根据模型的高程对地形进行修正（即进行填挖方处理），以匹配当前位置的模型，实现模型与地形的完美贴合。
* 新增[三维图层阴影](../Features/SceneOperation/AdvancedSceneSetting/ModelShade.htm)功能。阴影效果对拉伸的矢量数据集、CAD 模型数据集、矢量缓存图层有效，可以增加模型的真实感。
* 新增[三维通视分析](../Features/Analyst/Raster/SurfaceAnalyst/3DViewAnalyst.htm)功能。在场景中对观察点和目标点的通视性进行分析。
* 新增[场景反走样](../Features/Optimization/SceneOptimization/SceneOptimization.htm)功能。在非贴地模式下，启用场景反走样时，可对场景窗口中的非纹理对象（点、线、面等几何对象）、模型和管线进行平滑处理。
* 新增[地下可见深度](../Features/SceneOperation/AdvancedSceneSetting/Underground.htm)功能，用于控制地下数据的显示范围。对大于设置的可见深度的对象不予显示。

### 二次开发

* SuperMap Deskpro .NET 插件模板支持基于 Visual Studio 2010 以及于 Visual Studio 11 创建插件并进行二次开发。
* 增加快速引用功能，方便用户在基于 SuperMap Deskpro .NET 插件模板进行开发时，一键式添加 SuperMap 常用的引用。

### 帮助文档

* 新增[对象绘制概述](../Features/DataProcessing/Objects/CreateObjects/AboutCreateGeometry.htm)专题文档，针对对象绘制过程涉及的概念进行了阐述。
* 新增[对象编辑概述](../Features/DataProcessing/Objects/EditObjects/AboutEdittingGeometry.htm)专题文档，对多个相似的对象编辑操作进行了区分。
* 新增 [Web 数据源](../Features/TechDocument/WebDatasets/AboutWebDataset.htm)专题文档，整体上介绍目前 SuperMap GIS 6R 支持的多种 Web 数据源。
* 新增[自定义对象绘制（CustomArrowDrawing）](../SampleCode/CustomArrowDrawing.htm)的范例代码，介绍如何开发一个绘制自定义图形的插件。

### 其他

* 新增[文件型许可到期提醒](LicenseExpired.htm)功能，提醒使用文件许可的用户及时更新许可。

# 增强功能

* 优化了[矢量单值专题图](../Features/Mapping/UniqueValueMap/UniqueValuesMapGroupDia.htm)和[栅格单值专题图](../Features/Mapping/GridUniqueValuesMap/GridUniqueValuesMapGroupDia.htm)添加单值功能，使用户对单值专题图的管理更加得心应手。
* 对[太阳特效](../Features/SceneOperation/AdvancedSceneSetting/SunEffect.htm)界面进行了优化，在场景中同时支持24小时内和连续多天的光照周期模拟太阳照耀的效果。支持太阳光照的播放功能。
* 对 FrameData 进行更新。更新后的框架数据的体积更小、加载速度更快，为您提供很顺畅的场景体验。

返回首页

* * *

### 新增接口列表

### SuperMap.Desktop 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[FormBase](../html/AllMembers_T_SuperMap_Desktop_FormBase.htm) | FullScreen 属性
| 新增属性  
[FormBaseChild](../html/AllMembers_T_SuperMap_Desktop_FormBaseChild.htm) |
FullScreen 属性  
| 新增属性  
[Application](../html/AllMembers_T_SuperMap_Desktop_Application.htm) |
WorkEnvironmentManager 属性 | 新增属性  
[DrawingParameterType](../html/T_SuperMap_Desktop_DrawingParameterType.htm) |
| 新增枚举  
[GeometryDrawing](../html/AllMembers_T_SuperMap_Desktop_GeometryDrawing.htm) |
| 新增类  
[GlobalParameters](../html/AllMembers_T_SuperMap_Desktop_GlobalParameters.htm)
| DecimalPlaces 属性 | 新增属性  
[IFormMain](../html/AllMembers_T_SuperMap_Desktop_IFormMain.htm) |

FullScreen 属性

ThemeStyle 属性

| 新增属性  
[IFormManager](../html/AllMembers_T_SuperMap_Desktop_IFormManager.htm) |
FormCreated 事件 | 新增事件  
[IFormMap](../html/AllMembers_T_SuperMap_Desktop_IFormMap.htm) |
GeometryDrawingManager 属性 | 新增属性  
[IFormScene](../html/AllMembers_T_SuperMap_Desktop_IFormScene.htm) |
GeometryDrawingManager 属性 | 新增属性  
[IGeometryDrawingManager](../html/AllMembers_T_SuperMap_Desktop_IGeometryDrawingManager.htm)
|

DrawingTrackMode 枚举

TrackingStyle3D 属性

| 新增属性和枚举  
[IIntegerUpDown](../html/AllMembers_T_SuperMap_Desktop_IIntegerUpDown.htm) |
Format 属性 | 新增属性  
[ILabel](../html/AllMembers_T_SuperMap_Desktop_ILabel.htm) | Text 属性 | 新增属性  
[InfoLevel](../html/T_SuperMap_Desktop_InfoLevel.htm) |   | 已过时  
[InfoType](../html/T_SuperMap_Desktop_InfoType.htm) |   | 新增枚举  
[IOutput](../html/AllMembers_T_SuperMap_Desktop_IOutput.htm) |

Output(String) 方法

Output(String, InfoType) 方法

Output(String, InfoLevel) 方法

|

新增方法

新增方法

已过时  
  
[IRecentFileGroup](../html/AllMembers_T_SuperMap_Desktop_IRecentFileGroup.htm)
| Boolean Clear 方法 | 新增方法  
[IRecentFileManager](../html/AllMembers_T_SuperMap_Desktop_IRecentFileManager.htm)
| Clear() 方法 | 修改声明类型  
[ITabControl](../html/AllMembers_T_SuperMap_Desktop_ITabControl.htm) |   | 新增类  
[ITabPage](../html/AllMembers_T_SuperMap_Desktop_ITabPage.htm) |   | 新增类  
[ITabPageCollection](../html/T_SuperMap_Desktop_ITabPageCollection.htm) |   |
新增类  
[ITextBox](../html/T_SuperMap_Desktop_ITextBox.htm) | LostFocusApply 属性 | 新增属性  
[OutputEventArgs](../html/T_SuperMap_Desktop_OutputEventArgs.htm) | Level 属性 |
属性中新增 set 方法  
[PluginInfo](../html/T_SuperMap_Desktop_PluginInfo.htm) |

Enable 属性

Clone() 方法

HelpLocalRoot 属性

HelpOnlineRoot 属性

|

新增属性

新增方法

新增属性

新增属性  
  
[WorkEnvironment](../html/T_SuperMap_Desktop_WorkEnvironment.htm) |   | 新增类  
[WorkEnvironmentManager](../html/T_SuperMap_Desktop_WorkEnvironmentManager.htm)
|   | 新增类  
  
### SuperMap.Desktop.UI 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[ButtonWithTip](../html/T_SuperMap_Desktop_UI_ButtonWithTip.htm) |   | 新增类  
[ColorCollection](../html/T_SuperMap_Desktop_UI_ColorCollection.htm) |   | 新增类  
[ColorScheme](../html/T_SuperMap_Desktop_UI_ColorScheme.htm) |   | 新增类  
[ColorSystem](../html/T_SuperMap_Desktop_UI_ColorSystem.htm) |   | 新增枚举  
[ComboBoxColorScheme](../html/T_SuperMap_Desktop_UI_ComboBoxColorScheme.htm) |
| 新增类  
[ComboBoxFont](../html/T_SuperMap_Desktop_UI_ComboBoxFont.htm) |   | 新增类  
[ComboBoxItem](../html/T_SuperMap_Desktop_UI_ComboBoxItem.htm) |   | 新增类  
[DataGridViewComboEditBoxCell](../html/T_SuperMap_Desktop_UI_DataGridViewComboEditBoxCell.htm)
|   | 新增类  
[DataGridViewComboEditBoxColumn](../html/T_SuperMap_Desktop_UI_DataGridViewComboEditBoxColumn.htm)
|   | 新增类  
[DataGridViewNumbricTextBoxCell](../html/T_SuperMap_Desktop_UI_DataGridViewNumbricTextBoxCell.htm)
|   | 新增类  
[IntervalColorBuildMethod](../html/T_SuperMap_Desktop_UI_IntervalColorBuildMethod.htm)
|   | 新增类  
[ListBoxItemObject](../html/T_SuperMap_Desktop_UI_ListBoxItemObject.htm) |   |
新增类  
[TextBoxNumeric](../html/T_SuperMap_Desktop_UI_TextBoxNumeric.htm) |   | 新增类  
[SQLExpressionForm](../html/T_SuperMap_Desktop_UI_SQLExpressionForm.htm) |   |
新增类  
[UICheckBoxGroup](../html/T_SuperMap_Desktop_UI_UICheckBoxGroup.htm) |   | 新增类  
[UITextBoxWithButton](../html/T_SuperMap_Desktop_UI_UITextBoxWithButton.htm) |

Focused 属性

TextBoxGotFocus 事件

|

新增属性

新增事件  
  
[UITrackBarTextBox](../html/T_SuperMap_Desktop_UI_UITrackBarTextBox.htm) |
Focused 属性 | 新增属性  
  
返回首页

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012) Service Pack 1
新特性](what_was_new_in_2012_SP1.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012)
新特性](what_was_new_in_2012.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R Service Pack 1
新特性](what_was_new_in_60_SP1.htm)


