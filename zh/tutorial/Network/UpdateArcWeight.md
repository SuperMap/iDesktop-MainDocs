---
id: UpdateArcWeight
title: 更新弧段权值
---
### ![](../img/read.gif)使用说明

更新弧段权值功能，用来在内存中临时更新网络弧段上的权值。

在更新弧段权值时，需要注意以下问题：

* 更新弧段权值只是临时性的，不会将权重结果保存至网络数据的字段中，网络图层关闭后，更新结果会自动清除。
* 将一条弧段设为障碍边后，其权值为-1。
* 可以同时对一条弧段的正向/方向权值进行更新。更新时，在“起点ID->终点ID”列中按照弧段 ID 选择合适的弧段方向。

### ![](../img/read.gif)操作步骤

  1. 在当前地图窗口中打开网络数据集。
  2. 在网络分析环境设置窗口中，设置网络分析的权值字段、结点/弧段标识字段等。关于环境设置窗口的介绍，请参见[网络分析环境设置窗口](NetAnalystEnvironmentWIN)页面。
  3. 在“环境设置”窗口的工具条上，单击“更新权值”下拉按钮，在弹出的下拉菜单中，选择“更新弧段权值”项，弹出“更新弧段权值”对话框。 
  4. 在网络图层上单击选中需要更新权值的弧段，单击鼠标右键即可结束选择。
  5. 选中的弧段信息会自动添加到左侧弧段列表中。右侧的列表中列出了正向/反向权值。可以对弧段的权值以及是否为障碍边进行修改。更新的弧段，障碍边用红色高亮显示，非障碍边用其他颜色高亮显示。
  6. 继续更新其他弧段的权值。
  7. 在“弧段权值”对话框的工具条上，可以对添加到对话框中的弧段进行搜索、隐藏/显示的控制、或者删除不需要的弧段。
  8. 完成设置后，单击“应用”按钮，将所做的修改进行保存；单击“关闭”按钮，放弃修改，退出当前对话框。