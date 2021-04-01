---
id: ConvertNetworkNode
title: 网络数据转点/线数据
---
### ![](../../img/read.gif)网络数据转点数据

  * 将网络数据集中所有网络结点提取出来生成新的点数据集。
  * 新生成的点数据集的属性表中，系统字段（除 SmUserID 以外）由系统赋值，而字段 SmUserID 和非系统字段沿用源网络数据集中子点数据集属性表的相应字段值。 

**功能入口**

  * 单击 **数据** 选项卡-> **数据处理** 组-> **类型转换** 按钮，在弹出的菜单中选择“网络->点”。
  * **工具箱** -> **类型转换** -> **网络数据转点/线数据** 工具：网络数据->点数据。(iDesktopX) 

**操作说明**

  1. 在弹出的“网络数据->点数据”对话框中，在对话框中设置待转换的数据集，及结果数据集名称和所存的数据源。
  2. 设置完成后，单击“转换”按钮，完成操作，得到如下图所示结果。  

![](img/Netlinesource.png) | ![](img/NetToPoint.png)  
---|---  
图1：原始网络数据集 | 图2：网络数据->点数据  

### ![](../../img/read.gif)网络数据转线数据

  * 将网络数据集中所有网络弧段提取出来生成新的线数据集。
  * 新生成的线数据集的属性表中，系统字段 SmUserID、SmFNode、SmTNode、SmEdgeID 和其他非系统字段属性均沿用源网络数据集属性表的相应字段值。

**功能入口**

  * 单击 **数据** 选项卡-> **数据处理** 组-> **类型转换** 按钮，在弹出的菜单中选择“网络->线”。
  * **工具箱** -> **类型转换** -> **网络数据转点/线数据** 工具：网络数据->线数据。(iDesktopX) 

**操作说明**

  1. 在弹出的“网络数据->线数据”对话框中，在对话框中设置待转换的网络数据集，及结果数据集名称和所存的数据源。
  2. 设置完成后，单击“转换”按钮，完成操作，得到如下图所示结果。  

![](img/Netlinesource.png) | ![](img/NetToLine.png)  
---|---  
图1：原始网络数据集 | 图2：网络数据->线数据  

### ![](../../img/read.gif)路由数据转线数据

  * 将网络数据集中所有网络弧段提取出来生成新的线数据集。
  * 新生成的线数据集的属性表中，系统字段 SmUserID、SmFNode、SmTNode、SmEdgeID 和其他非系统字段属性均沿用源网络数据集属性表的相应字段值。

**功能入口**

  * 单击 **数据** 选项卡-> **数据处理** 组-> **类型转换** 按钮，在弹出的菜单中选择“路由->线”。
  * **工具箱** -> **类型转换** -> **网络数据转点/线数据** 工具：路由数据->线数据。(iDesktopX) 

**操作说明**

  1. 在弹出的“路由数据->线数据”对话框中，在对话框中设置待转换的路由数据集，及结果数据集名称和所存的数据源。
  2. 设置完成后，即可执行转换操作。

