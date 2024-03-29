---
id: FindExtreme
title: 查找极值
---
### ![](../../../img/read.gif)使用说明

查找极值功能用来在栅格数据集上查找某些区域范围的极值点（包括最高点和最低点），并确定这些极值点的位置和极值信息。应用程序提供了2种方式确定查找区域范围，一种是选择区域数据进行查找，另外一种是在栅格数据上绘制区域，作为查找范围。

### ![](../../../img/read.gif)区域查找极值

#### 功能入口

  * **空间分析** 选项卡-> **栅格分析** 组-> **表面分析** -> **区域查找极值** 。
  * **工具箱** -> **栅格分析** -> **表面分析** -> **地形计算** -> **区域查找极值** 。(iDesktopX) 

#### 参数说明

  * **栅格数据** ：设置要查找的栅格数据，包括栅格数据所在的数据源和栅格数据集。
  * **区域数据** ：选择区域数据，区域数据所在的数据源以及数据集。在没有选中区域数据的对象时，对区域数据中的所有区域分别进行极值统计。 

如果先选中了区域数据中的特定对象（一个或者多个对象），则极值统计仅针对选择的对象所在的区域进行统计。此时“仅针对选中对象进行统计”复选框可用。如果取消选中该复选框，则表示使用区域数据中的所有对象进行统计。

  * **参数设置** ：设置查找极值的参数，包括要查找的区域内最大极值点数和最小极值点数。默认最大和最小极值点数均为256。
  * **结果数据** ：统计结果将保存为一个三维点数据集。该数据集的属性字段中会保存极值点高程信息以及极值点类型，即为极大值还是极小值。
  * 设置是否在地图中展示。选中"在地图中展示"复选框，则操作完成后，会将查找结果自动加载到当前地图窗口中展示；否则不会添加到地图窗口中展示。
  * 操作完成后，会自动在当前地图中用红色高亮标识所绘制的区域内的最高点、使用蓝色高亮标识绘制区域内的最低点，并输出窗口会输出查找的极值点信息，包括极值点的数目，以及对应的极值。注意：当对整个区域数据进行查找时，不会输出极值点信息。按 Esc 键可清除高亮显示的极值点。

### ![](../../../img/read.gif) 绘制区域查找

#### 功能入口

  * **空间分析** 选项卡-> **栅格分析** 组-> **表面分析** -> **绘面查找极值** 。

#### 操作说明

  * 输出窗口中弹出提示“请使用鼠标在地图上绘制希望统计的区域，然后单击右键进行统计。”。按照提示，绘制一个临时多边形作为统计区域。多边形的绘制方式请参见[绘制多边形](../../../DataProcessing/Objects/CreateObjects/DrawPolygon)。
  * 绘制结束后，地图窗口中弹出“查找极值”对话框。
  * 设置查找极值参数，包括要查找的最大极值点数和最小极值点数。默认统计的最大/最小极值点数均为256。
  * 设置结果数据，查找的结果将保存为一个三维点数据集。该数据集的属性字段中会保存统计得到的极值点高程信息以及极值点类型，即为极大值（Max）还是极小值（Min）。
  * 操作完成后，会自动在当前地图中用红色高亮标识所绘制的区域内的最高点、使用蓝色高亮标识绘制区域内的最低点，并输出窗口会输出统计得到的极值点信息，包括极值点的数目，以及对应的极值。按 Esc 键可清除绘制的临时区域以及高亮显示的极值点。

### ![](../../../img/read.gif) 备注

区域统计和查找极值两种统计功能中，都是针对区域进行统计的，两者既有相似又有区别。

  * **区域统计** 是针对区域范围内（区域数据，可以是矢量数据或者栅格数据）对栅格数据（值数据）进行统计。按照区域数据中对栅格数据进行划分，分别对每个区域覆盖的栅格数据进行统计。可统计信息包括平均值、标准差、总和、种类、值域、众数、最少数和中位数等多种统计信息。统计结果得到一个栅格数据集和属性表数据集。
  * **查找极值** 用来在栅格数据集上查找区域数据范围内的像元的极值点（最大极值点和最小极值点），确定这些极值点的位置和极值信息。可以通过选择区域对象和绘制区域的方式制定区域数据。查找极值的结果会生成一个三维点数据集，该数据集的属性字段中会保存查找到的极值点的高程信息、极值点类型（极大值或者极小值）。