---
id: What_was_new_10i(2020)SP1
title: SuperMap iDesktop 10i(2020) SP1 新特性
---
**SuperMap iDesktop 10i(2020) SP1 桌面产品在上一版本基础上，包含以下新增功能和优化之处：**

**数据管理**

  * [PostgreSQL 数据源](../../tutorial/DataProcessing/DataManagement/DTgroupDiaVector_ModifyType)，支持直接修改数据集属性字段名称、类型、长度、必填、缺省值，修改后不会生成冗余的备份数据，且数据集表名不变。 
  * 提升PostgreSQL、PostGIS数据源导入数据的性能。
  * 新增[数据集刷新](../../tutorial/DataProcessing/DataManagement/DatasetManagement#refresh)功能，便于并发操作数据集时及时刷新数据集内容。

**数据处理**

  * 优化 [CAD 数据集配准](../../tutorial/DataProcessing/Registration/RegistrationMode)，支持线性和二次多项式配准模式。
  * 数据[ 导出为TIFF文件](../../tutorial/DataProcessing/DataConversion/ExportData#image)时，支持设置文件的压缩方式。

**空间分析**

  * 优化叠加分析功能，当线数据集与面数据集进行[裁剪](../../tutorial/Analyst/Vector/overlayanalyst/Clipbutton)、[同一](../../tutorial/Analyst/Vector/overlayanalyst/Identitybutton)、[求交](../../tutorial/Analyst/Vector/overlayanalyst/Intersectbutton)分析时，新增“保留单个对象”的参数设置，可用于线对象在多个有重叠的面对象内时，选择只保留单个对象，或同时保留多个对象。

**地图制图**

  * 优化[地图输出为图片](../../tutorial/Visualization/Basic/WinMap_OutputPic)功能，提供预估输出文件大小的参考值，辅助用户根据文件大小设置输出参数。 
  * [网格图](../../tutorial/BigdataVisualization/AggregationMap/GridAggregationMap)支持设置标签的显示精度，当格网字段为双精度类型时，便于调整地图中标签的美观性。
  * 支持[批量设置影像图层的拉伸方式](../../tutorial/Visualization/VisualSetting/Imagegroup)，便于统一调整影像显示效果。
  * 优化[多任务切图](../../tutorial/MapTiles/MultiTaskStep)功能，支持对带密码的文件型工作空间执行切图任务。

**三维**

  * 三维数据
    * 矢量面拉伸生成缓存功能：支持顶点压缩，支持设置顶面、侧面纹理贴图，贴图方式以及UV纹理坐标设置等参数。
    * 导入rvt文件功能：新增支持多边形网格和三角网格两种模式；支持贴图旋转；优化属性，去除重名的字段
    * 优化倾斜入库功能，支持Draco压缩；自动计算待合并根节点的金字塔层级。
    * IFC、3dxml格式导入支持设置方位角
  * 场景
    * 平面场景：支持触控操作。
    * 场景输出图片功能：支持设置DPI和宽高。
    * 优化场景关联浏览高度偏差问题。
    * 场景新增支持图标避让、支持图标与标签关联显隐
  * 三维地理设计
    * 材质编辑器：支持模型数据集材质的编辑功能，支持编辑、创建、删除材质等功能。
  * 图层属性
    * 三维模型缓存属性：新增半透明模型渲染优化的选项，优化带有半透明材质模型的显示效果。
    * 三维模型数据集图层属性：新增设置模型的四边形线框阈值。
    * 多个体元栅格支持叠加到同一份模型缓存，支持设置不同的体渲染效果，表达不同的属性场
  * 三维分析
    * 场景生成DOM，相机高度默认值为图层的最大高度。
