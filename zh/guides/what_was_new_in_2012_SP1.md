---
id: what_was_new_in_2012_SP1
title: SuperMap Deskpro .NET 6R(2012) Service Pack 1 新特性
---
SuperMap GIS 6R 桌面产品是一套运行在桌面端的专业 GIS 软件。这套软件包括三个级别的产品：SuperMap Viewer .NET
6R、SuperMap Express .NET 6R 和 SuperMap Deskpro .NET 6R。其中 SuperMap Deskpro
.NET 6R 软件是可编程、可扩展、可定制的，二三维一体化的桌面 GIS
产品，提供了数据管理功能、地图相关功能、布局排版功能、三维功能以及数据处理和类型转换的功能，能满足用户的多样化需求。

SuperMap GIS 6R(2012) SP1 桌面产品在上个版本（SuperMap GIS 6R(2012)）的基础之上，一方面对 GIS
功能进行完善，如新增了2种数据库引擎，主题设计、十字路口优化等，另一方面对地图缓存、SQL
查询和打开新建数据源等功能进行了界面优化和功能改进，再者二次开发支持对右键菜单进行扩展。

SuperMap Deskpro .NET 6R(2012) Service Pack 1 包含以下新增功能以及增强之处：

# 新增功能

### 数据处理

* 新增 SDX+ for PostgreSQL 和 SDX+ for DB2 引擎，便于利用 PostgreSQL 和 DB2 数据库对海量空间数据的管理。
* 新增 GoogleMaps 数据引擎和 SuperMapCloud 数据引擎，分别支持对谷歌地图和超图云服务缓存数据的在线读取和显示。
* 新增地图[输出为影像数据集](../Features/Visualization/Interaction/MapSaveAsRaster.htm)功能，方便用户直接将地图保存为影像数据集。
* 新增[十字路口优化](../Features/Visualization/AdvanceSetting/RoadCross.htm)功能，通过对相互交叉的双线线型进行优化处理，真实地表达线型的连通性。
* 新增[小数位数控制](../Features/StartMenu/Environment.htm)功能，对数据的可见小数位数进行全局设置，方便地对数据的显示精度进行控制。
* 新增[数据源重命名](../Features/DataProcessing/DataManagement/DS_Rename.htm)功能，方便用户对数据源的名称进行更改。

### 地图缓存

* 新增5.0版本的地图缓存，可以使用本地剖分或者全球剖分两种方式生成地图缓存。
* 新增以[更新/追加的方式生成缓存](../Features/Optimization/Cache/2DCache.htm)，可以极大地减少缓存维护成本。

### 三维操作

* 新增[草图模式](../Features/SceneOperation/AdvancedLayserSetting/ModelDisplayMode.htm)功能。在草图模式下，场景中只会绘制模型的骨架信息，不会显示纹理，便于用户从整体上把握模型的结构。
* 新增[图标文件锚点设置](../Features/SceneOperation/SceneVisualization/Symbol3Dgroup.htm)功能，当点图层的风格为图标文件时，可以对图标文件的锚点位置进行设置。

### 海图模块

* 新增海图[物标要素显示控制](../Features/Chart/Visualization/ChartFeatureControl.htm)，可以对物标要素的显示状态进行控制，包括是否可显示、可选择，为海图数据的操作提供便利。
* 新增海图[物标属性信息编辑](../Features/Chart/Visualization/Chart_PropertyEdit.htm)功能，可以方便地增加或者修改物标要素的属性信息。

### 符号资源

* 点符号的属性新增了[渐变类型](../Features/SymManager/SymMarkerEditor7.htm)，支持对面笔划的填充设置渐变风格，效果类似图层风格设置的渐变类型。

### 工作环境设计

* 新增[主题设计](../Features/UserCustom/ThemeStyleSetting.htm)功能，可以对桌面应用程序的主题风格进行更改，既可以使用系统提供的默认风格，也可以自定义主题风格。

### 二次开发

* 新增主题设计接口以及[主题设计开发实例](../Features/UserCustom/DevelopThemeStyle.htm)，帮助用户定制属于自己的桌面主题风格。
* 新增右键菜单管理接口，支持用户对右键菜单进行扩展。

### 帮助文档

* 新增[地图缓存技术文档](../Features/ApplicationTheme/CacheBuild/2DMapCache.htm)。
* 新增[沿线标注应用专题文档](../Features/Mapping/LabelMap/AloneLineLabel.htm)。
* 新增[SQL 查询分组查询应用实例](../Features/Query/SQLQuery_Group.htm)。
* 新增 Oracle、DB2、PostgreSQL [数据库的使用指南](../Features/TechDocument/DatabaseUseGuide.htm)。

### 示范数据

* 新增长春数据（Changchun.smwu），位于安装路径\SuperMap Deskpro .NET 6R\SampleData\City 文件夹下。
* 新增海图示范数据（Chart.smwu），位于安装路径\SuperMap Deskpro .NET 6R\SampleData\Chart 文件夹下。

# 增强功能

### 插件管理

* 重构了[SuperMap 应用中心]( http://appcenter.supermap.com.cn/ )界面和操作流，实现良好的用户体验和快捷的线上交流；能快速上传、下载、评价。
* 调整了 [SuperMap 插件管理器](../Features/PluginManage/manager.htm)界面，实现与 SuperMap 应用中心的良好通讯；更为便捷的本地管理和人性化的提示操作，让插件的使用得心应手。

### 数据处理

* 对新建和打开数据源界面进行了整合，使界面更规范、更美观。
* 对 SQL 查询界面进行了优化，更加方便用户进行查询操作。
* 地图缓存功能和界面进行了优化，新增地图缓存版本号和剖分方式，同时对地图缓存界面进行调整，展现方式更符合操作习惯。

### 二次开发

* 对象接口结构图新增了链接，单击对象可在左侧查看相关信息。选中对象后下按 Enter 即可查看该类（接口）的详细文档描述信息。
* 工作环境设计中的右键菜单名称和状态栏名称改为中文，方便用户查看。
* 对飞行管理进行了优化，场景中飞行管理支持扩展开发，满足三维用户的二次开发需求。

### 框架数据

* 更新了框架数据，新的框架数据采用紧凑型缓存，个数更少，文件更小。

* * *

### 新增接口列表

### SuperMap.Desktop 命名空间

**类/接口** | **字段/属性/方法/事件**  
---|---  
DatasourceType |  
FormBaseChild |

Actived 属性

CanSave 属性

IsModified 属性

NeedSave 属性

StatusBar 属性

Text 属性

Save() 方法

Save(Boolean notify, Boolean newWindow) 方法

SaveAs() 方法  
  
  
IContextMenu |  
IContextMenuItem |  
IContextMenuManager |  
IDockBarGroup |  
IForm |

Actived 属性

CanSave 属性

IsModified 属性

NeedSave 属性

StatusBar 属性

Save（）方法

Save(Boolean notify, Boolean newWindow) 方法

SaveAs（）方法  
  
  
IFormMain |

ContextMenuManager 属性

MdiFormType 属性

MdiTabGroupManager 属性

ThemeStyle 属性

RefreshThemeStyle 方法

ThemeStyleChanged 事件

ThemeStyleChanging 事件  
  
IFormScene |

ActiveLayer3Ds 属性

SceneControl 属性

ActiveLayer3DsChanged 事件  
  
IMdiChildTab |  
IMdiTabGroup |  
IMdiTabGroupManager |  
MdiFormType |  
MdiFormTypeChangedEvenArgs |  
MdiFormTypeChangingEvenArgs |  
OpenWorkspaceResult |  
UIPanelDockState |  
  
### SuperMap.Desktop.UI 命名空间

**类/接口** | **字段/属性/方法/事件**  
---|---  
BackgroundGradientMode |  
BackgroundImageDrawMode |  
DataGridViewNumbricTextBoxCell |  
DataGridViewNumbricTextBoxColumn |  
FileDialogType |  
InnerAreaStyleType |  
TabularControl | FullColumnSelected 属性  
TextChangedEventHandler |  
ThemeStyle |  
ThemeStyleChangedEnvetArgs |  
ThemeStyleChangedEventHandle |  
ThemeStyleChangingEnvetArgs |  
ThemeStyleChangingEventHandle |  
UIButton |  
UICaptionThemeStyle |  
UICheckBox |  
UIComboBox |  
UIForm |  
UIGroupBox |  
UIInnerThemeStyle |  
UILabel |  
UIPanel |  
UIPanelThemeStyle |  
UIRadioButton |  
UIRadioButtonGroup |  
UIRibbonTabThemeStyle |  
UIRibbonThemeStyle |  
UITabControl |  
UITabPage |  
UITabThemeStyle |  
UITabThemeStyles |  
UITextBox |  
UITextBoxWithButton |  
UIToolStrip |  
UITrackBarTextBox |  
UITreeView |  
  
返回首页

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R(2012)
新特性](what_was_new_in_2012.htm)

![](img/smalltitle.png) [SuperMap Deskpro .NET 6R Service Pack 1
新特性](what_was_new_in_60_SP1.htm)


