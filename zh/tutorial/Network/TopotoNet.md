---
id: TopotoNet
title: 拓扑构网
---
### ![](../img/read.gif)使用说明

根据指定的点数据集、线数据集或网络数据集联合生成网络数据集。

### ![](../img/read.gif)功能入口

* **空间分析** 选项卡-> **设施网络分析** 组->“ **拓扑构网** ”->构建二维网络。

### ![](../img/read.gif)操作说明

* **添加数据集**

在列表框内添加用来构建网络数据集的数据集。列表框中分别列出了这些数据集及其所在数据源的名称。此外，在打开构建网络数据集窗口后，系统会自动将工作空间管理器中选中的数据集添加到列表框内。

这里支持选择点数据集、线数据集和网络数据集。在进行构网操作时，参与构网的数据集可以只有线数据集，也可以是点数据集和线数据集，但不可以只有点数据集独立参与，此时会构建失败。

* **结果设置**
  * **数据源** ：结果数据集所在的数据源。
  * **数据集** ：用来保存生成的网络数据集，这里可以修改结果数据集的名称。
  * **结果字段** ：单击“字段设置...”按钮，弹出如下图所示的“字段信息”对话框。 

在“字段信息”对话框中，显示了所有参与构建网络数据集的点、线数据集的用户字段（非系统字段和 SmUserID
字段），选中的字段信息将赋给新生成的网络数据集。其中，参与构建网络数据集的点对象的属性信息将赋给网络数据集中相应的网络节点，参与构建网络数据集的线对象的属性信息将赋给网络数据集中相应的网络弧段，网络数据集的其他系统字段则由系统自动赋值。

* **打断设置**
  * **点自动打断线** ：勾选该复选框后，在容限范围内，线对象会在其与点的相交处被打断，若线对象的端点与点相交，则线不予打断。
  * **线线自动打断** ：勾选该复选框后，在容限范围内，两条（或两条以上）相交的线对象会在相交处被打断，若线对象与另一条线的端点相交，则这个线对象会在相交处被打断。此外，勾选“线线自动打断”操作时，系统会同时默认勾选“点自动打断线”，即“线线自动打断”功能不可以单独使用。
  * **打断容限** ：设置打断容限，这里的打断容限即结点容限，表示线对象与线对象、线对象与点对象之间的最小距离。例如，若一个线对象的节点与另一个线对象的节点距离在容限范围内，则认为这两个节点重合；若一个线对象的节点与一个点对象的距离在容限范围内，则认为点在线上。 

容限默认值与数据集的坐标系有关，具体说明请参见[容限说明](../DataProcessing/Tolerance)。

**注意**：容限需要设置为一个合理的值。当容限值设置过大时，线会捕捉容限范围内的点，此时，若一个线对象捕捉到多个首尾节点，则多余的点对象会被当做重复点去掉，线的端点捕捉到的首尾节点不一定是正确的点，同时会存在其他线对象节点缺失的情况，生成的网络数据集有误，会导致网络分析结果错误或者无法进行网络分析。

* **执行结束后自动关闭对话框** ：选中该复选框后，在应用程序完成网络数据集的构建以后，将自动关闭“构建网络数据集”对话框；否则，不会自动关闭“构建网络数据集”对话框。默认勾选。

### ![](../img/note.png)注意事项

若用于构建二维网络数据的线数据集中有重复线，对构建成功后的网络数据集进行网络分析时，输出窗口会提示：“网络弧段数据存在错误，请重新构网。【xxx分析】执行失败。”，无法正确执行网络分析操作。建议用户在构建网络数据前，先对线数据集进行拓扑处理，去除重复线，以保证构建正确的网络数据集。