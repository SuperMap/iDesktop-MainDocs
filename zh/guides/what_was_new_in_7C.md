---
id: what_was_new_in_7C
title: SuperMap iDesktop 7C 新特性
---
SuperMap GIS 7C
桌面产品是一款可编程、可扩展、可定制的运行在桌面端的二三维一体化的产品。该款产品提供了数据管理、数据处理和类型转换、二三维对象绘制和编辑、二三维空间分析、专题图制作、布局排版以及三维场景渲染等功能。这套软件划分为三个级别的产品：标准版、专业版和高级版，以满足用户的多样化需求。

新增了发布iserver服务、发布地图、在线更新等功能。相对6R系列桌面产品而言，在操作性能、扩展开发能力方面都有了进一步的提升；界面风格的更新也带来更舒服的视觉体验。

包含以下新增功能和增强之处：

### 发布服务、地图

* 新增[一键发布iServer服务](../Features/Publish/PublishiserverProcess.htm)功能，可支持REST、OGC等服务类型。
* 新增[发布二三维地图](../Features/Publish/PublishMapProcess.htm)功能，地图发布到在线商店，iMapReader可直接读取浏览。
* 开放[用户账户登录](../Features/StartMenu/ItemAccount.htm)入口。

### 在线安装/更新

* 新增[在线安装](../Features/Install/InstallOnline.htm)和[在线更新](../Features/Install/Updater.htm)功能，可便捷获取最新版本。

### 用户体验计划

* 新增[开启用户体验计划](../Features/StartMenu/UserExperienceProgram.htm)功能，将会收集产品执行情况、产品版本等信息，帮助桌面研发团队迅速了解并解决用户遇到的问题，并改善用户最常用的功能。

### 界面升级

* 桌面默认主题风格调整为淡雅内敛的蓝色调，并配以专业、精美的功能图标。
* 地图、场景、布局等属性以及图层属性的设置从ribbon功能区移到浮动面板，不仅更符合用户的操作习惯，而且提高了桌面窗口操作的性能。

### 工具

* 新增[自动制图](../Features/AutoMapMaking/AutoMapMaking1.htm)工具，同时支持GB92和GB06标准，并且用户可自定义扩展国标代码和和符号。
* 新增[SDB升级](../Features/DataProcessing/DataManagement/SDBUpdate.htm)工具，方便用户完成SDB到UDB数据的迁移，平滑过渡到基于Unicode的产品版本中。

### 布局操作

* 新增[布局地图元素的网格设置](../Features/Layout/DrawingMapElements/Gride.htm)功能，同时支持经纬网和公里网的设置。

### 三维缓存

* 生成三维模型缓存，根据模型简化率对模型建立多细节层次LOD层，合理分配模型渲染资源，提升模型浏览性能。

### 二次开发

* 丰富已有插件扩展开发模板。
* 新增程序启动模板，以便用户自定义启动程序。
* 在IDE中集成了Desktop工具箱，方便用户快速进行二次开发。
* 产品SampleCode中优化新增8个范例程序，目前产品共提供了17个范例程序。用户根据这些范例程序就可以找到桌面扩展开发想要的内容，方便用户迅速掌握桌面二次开发入门技巧。
* 对桌面的接口进行了统一的优化整理，新增、优化、废弃了部分接口。为二次开发用户提供了方便。




### 变更接口列表

### SuperMap.Desktop 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[ActiveWorkEnvironmentChangedEventArgs](../html/T_SuperMap_Desktop_ActiveWorkEnvironmentChangingEventArgs.htm)
|   | 新增类  
[ActiveWorkEnvironmentChangedEventHandler](../html/T_SuperMap_Desktop_ActiveWorkEnvironmentChangedEventHandler.htm)
|   | 新增委托  
[ActiveWorkEnvironmentChangingEventArgs](../html/T_SuperMap_Desktop_ActiveWorkEnvironmentChangingEventArgs.htm)
|   | 新增类  
[ActiveWorkEnvironmentChangingEventHandler](../html/T_SuperMap_Desktop_ActiveWorkEnvironmentChangingEventHandler.htm)
|   | 新增委托  
[ButtonDropDownItemType](../html/T_SuperMap_Desktop_ButtonDropDownItemType.htm)
|   | 新增枚举  
[ComboBoxDropDownStyle](../html/T_SuperMap_Desktop_ComboBoxDropDownStyle.htm)
|   | 新增枚举  
[DegreeFormat](../html/T_SuperMap_Desktop_DegreeFormat.htm) |   | 新增枚举  
[DisplayStyle](../html/T_SuperMap_Desktop_DisplayStyle.htm) |   | 新增枚举  
[DrawingParameterDimension](../html/T_SuperMap_Desktop_DrawingParameterDimension.htm)
|

Three更改为ThreeDimension 枚举

Two更改为TwoDimension枚举

| 修改枚举  
[FormBase](../html/AllMembers_T_SuperMap_Desktop_IButtonDropDown.htm) |

RibbonControlBoxMode 属性

Loaded 事件

LoadedUI 事件

Loading 事件

LoadingUI 事件

|

新增属性

新增事件

已过时，用Loaded事件代替

新增事件

已过时，用Loading事件代替  
  
[FormCreatedEventArgs](../html/T_SuperMap_Desktop_FormCreatedEventArgs.htm) |
| 新增类  
[FormCreatedEventHandler](../html/T_SuperMap_Desktop_FormCreatedEventHandler.htm)
|   | 新增委托  
[GlobalParameters](../html/AllMembers_T_SuperMap_Desktop_GlobalParameters.htm)
| LaunchUserExperiencePlan 属性 | 新增属性 |
[IBaseItem](../html/AllMembers_T_SuperMap_Desktop_IBaseItem.htm) |

ID 属性

RibbonContainer 属性

Text 属性

|

新增属性

新增属性

新增属性  
  
[IBox](../html/T_SuperMap_Desktop_IBox.htm) |   | 新增接口  
[IButton](../html/AllMembers_T_SuperMap_Desktop_IButton.htm) |

DisplayStyle 属性

SizeStyle 属性

Tip 属性

Text 属性

|

新增属性

新增属性

新增属性

已移除，放至父类IBaseItem中  
  
[IButtonDropDown](../html/AllMembers_T_SuperMap_Desktop_IButtonDropDown.htm) |

Item 属性

Items 属性

|

已移除，更名为Items

新增属性  
  
[IButtonDropdownItemCollection](../html/T_SuperMap_Desktop_IButtonDropdownItemCollection.htm)
|   | 新增接口  
[ICheckBox](../html/AllMembers_T_SuperMap_Desktop_ICheckBox.htm) | Tip 属性 |
新增属性 | [IColorButton](../html/AllMembers_T_SuperMap_Desktop_IColorButton.htm)
| Tip 属性 | 新增属性 |
[IComboBox](../html/AllMembers_T_SuperMap_Desktop_IComboBox.htm) |

DropDownStyle 属性

Tip 属性

|

新增属性

新增属性

| [IContextMenu](../html/AllMembers_T_SuperMap_Desktop_IContextMenu.htm) |

ID 属性

Item 属性

Items 属性

Visible 属性

|

新增属性

已移除，更名为Items

新增属性

新增属性  
  
[IContextMenuItem](../html/AllMembers_T_SuperMap_Desktop_IContextMenuItem.htm)
| Menu 属性 | 新增属性 |
[IContextMenuItemCollection](../html/T_SuperMap_Desktop_IContextMenuItemCollection.htm)
|   | 新增接口  
[IContextMenuSeparator](../html/T_SuperMap_Desktop_IContextMenuSeparator.htm)
|   | 新增接口  
[IFormMain](../html/AllMembers_T_SuperMap_Desktop_IFormMain.htm) |

RibbonControlBoxMode 属性

Loaded 事件

Loading 事件

|

新增属性

新增事件

新增事件

| [IFormManager ](../html/AllMembers_T_SuperMap_Desktop_IFormManager.htm) |
BindForms 方法  | 新增方法  
[IGallery](../html/AllMembers_T_SuperMap_Desktop_IGallery.htm) | Tip 属性 | 新增属性  
[IIntegerUpDown](../html/AllMembers_T_SuperMap_Desktop_IIntegerUpDown.htm) |

Maximum 属性

MaxValue 属性

Minimum 属性

MinValue 属性

Orientation 属性

Tip属性

|

新增属性

已移除，更名为Maximum

新增属性

已移除，更名为Minimum

新增属性

新增属性  
  
[ILabel](../html/AllMembers_T_SuperMap_Desktop_ILabel.htm) |

Text 属性

Tip 属性

|

已移除，放至父类IBaseItem中

新增属性  
  
[IOutput](../html/AllMembers_T_SuperMap_Desktop_IOutput.htm) |

Outputing 事件

Outputting 事件

|

已移除，更名为Outputting

新增事件  
  
[IRecentFileGroup](../html/AllMembers_T_SuperMap_Desktop_IRecentFileGroup.htm)
| IndexOf(string text ) 方法 | 新增方法  
[IRibbonGroup](../html/T_SuperMap_Desktop_IRibbonGroup.htm) |   | 新增接口  
[IRibbonTab](../html/T_SuperMap_Desktop_IRibbonTab.htm) |   | 新增接口  
[IRibbonTip](../html/T_SuperMap_Desktop_IRibbonTip.htm) |   | 新增接口  
[ISeparator](../html/T_SuperMap_Desktop_ISeparator.htm) |   | 新增接口  
[ITabularControl](../html/AllMembers_T_SuperMap_Desktop_ITabularControl.htm) |

ShowHiddenFields() 方法

ShowHiddenFields(String[])方法

FilterIDs 属性

FilterSmIDs 属性

HiddenColumns 属性

HidedColumns 属性

|

新增重载方法

新增重载方法

新增属性

已移除，更名为FilterIDs

新增属性

已移除，更名为HiddenColumns  
  
[ITextBox](../html/AllMembers_T_SuperMap_Desktop_ITextBox.htm) |

ReadOnly 属性

Text 属性

Tip 属性

|

新增属性

已移除，放至父类IBaseItem中

新增属性  
  
[Measure](../html/T_SuperMap_Desktop_Measure.htm) |   | 新增类  
[MeasureEventArgs](../html/T_SuperMap_Desktop_MeasureEventArgs.htm) |   | 新增类  
[MeasureEventHandler](../html/T_SuperMap_Desktop_MeasureEventHandler.htm) |
| 新增委托  
[MeasureType](../html/T_SuperMap_Desktop_MeasureType.htm) |   | 新增类  
OutputEventArgs |   | 已移除，更名为OutputtingEventArgs  
[OutputtingEventArgs](../html/T_SuperMap_Desktop_OutputtingEventArgs.htm) |
| 新增类  
OutputingEventHandler |   | 已移除，更名为OutputtingEventHandler  
[OutputtingEventHandler](../html/T_SuperMap_Desktop_OutputtingEventHandler.htm)
|   | 新增委托  
[PluginLoadingEventArgs](../html/AllMembers_T_SuperMap_Desktop_PluginLoadingEventArgs.htm)
| Plugin 属性 | 新增属性  
[RibbonControlBoxMode](../html/T_SuperMap_Desktop_RibbonControlBoxMode.htm) |
| 新增枚举  
[SizeStyle](../html/T_SuperMap_Desktop_SizeStyle.htm) |   | 新增枚举  
  
### SuperMap.Desktop.UI 命名空间

**类/接口** | **字段/属性/方法/事件** | **备注**  
---|---|---  
[ThemeStyle](../html/AllMembers_T_SuperMap_Desktop_UI_ThemeStyle.htm) |
DrakGrey 属性 | 新增属性  
  
返回首页

### ![](img/seealso.png) 相关主题

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


