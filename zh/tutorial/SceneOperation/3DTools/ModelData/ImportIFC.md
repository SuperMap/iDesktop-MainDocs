---
id: ImportIFC
title: 导入IFC
---
**使用说明**  
　　“导入IFC”命令，用来导入ifc格式的BIM数据，并在数据源中新增模型数据集节点。  
　　IFC标准是国际协同工作联盟IAI(International Alliance for
Interoperability)为建筑行业发布的建筑工程数据交换标准。它是某些行业的标准格式。目前常用的BIM软件如Revit、Bentley、Tekla等都已支持导出IFC格式的BIM数据。

**操作步骤**

  1. 单击“ **三维数据** ”选项卡中“ **模型** ”组内“ **BIM** ”下拉菜单中的“ **导入IFC**![](../img/ImportIFC.png) ”按钮，弹出“数据导入”对话框。
  2. 通过"添加![](../img/AddData.png)"按钮，在弹出的“打开”对话框中选择需要导入的IFC数据。
  3. 文件列表：文件列表显示了当前打开的文件，可选择某一具体IFC文件进行导入。
  4. 基本信息设置
    * 目标数据源：通过右键下拉按钮选择导入的数据源。
    * 目标数据集：打开的模型数据集的名称。
    * 导入模式：默认为无。提供无、追加和强制覆盖三种模式。
  5. 参数设置：
     * 模型参考点（模型中心点位置）：模型导入时的位置，用一个三维点对象表示。默认定位点为（0,0,0），可自定义输入数值。 
     * 投影设置：支持投影设置和导入投影文件两种方式设置投影坐标系，详细操作步骤请参见“[设置投影坐标系](../../../DataProcessing/Projection/PrjCoordSysDia  )”。
  6. 单击“导入 ”按钮，打开IFC文件。同时工作空间管理器中的目标数据源下新增一个IFC数据集结点。

**相关主题**  
[打开BIM数据](../../DataProcessing/OpenBIM)  
[导入RVT](../../DataProcessing/ImportRVT)  
[导入3DXML](../../DataProcessing/Import3DXML)

 

