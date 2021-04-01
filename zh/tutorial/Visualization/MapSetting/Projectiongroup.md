---
id: Projectiongroup
title: 设置地图投影
---
地球球体是一个椭球体，而地图是一个平面实体。地图投影是将三维实体转化为二维的平面上来。地图投影定义了转换的一些方法和规则。SuperMap
支持设置与管理当前工作空间中各地图的坐标投影信息

**功能入口**

在当前工作空间中，打开某一个地图，单击 **开始** 选项卡-> **属性** -> **地图属性** 按钮，弹出地图属性参数面板，点击“ **坐标系**
”节点，在“坐标系”参数面板中，即可查看个管理地图坐标系信息。

可通过工具条中工作设置地图坐标系，具体操作如下所述：

  * **重新设定坐标系** ：单击 “重新设定坐标系” 按钮，在下拉菜单中选择“更多”，可在“坐标系设置”对话框中设置目标投影。坐标系设置的具体操作，请参考[投影设置](../../DataProcessing/Projection/PrjCoordSysSettingWin.html)。
  * **复制坐标系** ：单击 “复制坐标系”按钮，弹出“复制坐标系”对话框，可选择从数据源复制或从数据集复制：
    * **从数据源** ：选择“来自数据源”单选框，单击组合框下拉按钮，选择一个数据源，将该数据源的坐标系设置为目标坐标系。
    * **从数据集数据集** ：选择“来自数据集”单选框，单击组合框下拉按钮，选择一个数据集，将该数据集的坐标系设置为目标坐标系。
  * **导入坐标系** ：单击“导入坐标系...”按钮，在弹出的“选择”窗口中，选择投影信息文件并导入即可。支持导入 shape 投影信息文件（*.shp;*.prj）、MapInfo 交换格式（*.mif）、MapInfo TAB 文件（*.tab）、影像格式投影信息文件（*.tif;*.img;*.sit）、投影信息文件（*.xml）。
  * **导出坐标系** ：单击“导出坐标系...”按钮，可将当前地图坐标信息导出为投影信息文件（*.xml）。
  * **转换参数** ：单击“转换参数”按钮，在弹出的“投影转换参数设置”窗口中，设置转换参数即可对当前地图投影进行投影转换，详细信息可参看[投影转换参数](../../DataProcessing/Projection/ConvertPrjCoordSysSingle.html#1)描述。
  * **动态投影** ：勾选“动态投影”复选框，可对当前地图[启用动态投影](DynamicProjection.html)。

**相关内容** ：

![](../../img/smalltitle.png) [
关于地图投影](../../DataProcessing/Projection/AboutMapProjection.html)

![](../../img/smalltitle.png)[
地图投影类型](../../DataProcessing/Projection/ProjectionType.html)

![](../../img/smalltitle.png) [
常用的地图投影](../../DataProcessing/Projection/ProjectionUsed.html)

![](../../img/smalltitle.png) [如何选择地图投影](ChooseAMapProjection.html)

![](../../img/smalltitle.png) [启用动态投影](DynamicProjection.html)



