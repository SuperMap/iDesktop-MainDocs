---
id: LineToPoint
title: 线数据转为点数据
---
线数据转为点数据是通过把线数据集中所有线对象的节点提取出来，进而生成新的点数据集。

### ![](../../img/read.gif)使用说明

  * 对于线数据集中的参数曲线（圆、弧等），系统会将其看作是具有很多临近节点的折线，所以在转换操作时，系统会将其所有的节点都提取出来，生成点数据。
  * 生成的点数据会继承节点所在的线对象的 SmUserID 和所有非系统字段的属性信息。

### ![](../../img/read.gif)操作步骤

  1. 在“ **数据** ”选项卡的“ **数据处理** ”组中，单击“ **类型转换** ”按钮的下拉箭头，在弹出的菜单中选择“线数据->点数据”。
  2. 在弹出的“线数据->点数据”对话框中，在对话框中设置待转换的数据集，及结果数据集名称和所存的数据源。
  3. 设置完成后，单击“转换”按钮，完成操作。

