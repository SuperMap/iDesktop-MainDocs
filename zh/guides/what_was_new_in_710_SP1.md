---
id: what_was_new_in_710_SP1
title: SuperMap iDesktop 7C(2015) Service Pack 1 新特性
---
SuperMap GIS 7C
桌面产品是一款可编程、可扩展、可定制的运行在桌面端的二三维一体化的产品。该款产品提供了数据管理、数据处理和类型转换、二三维对象绘制和编辑、二三维空间分析、专题图制作、布局排版以及三维场景渲染等功能。这套软件划分为三个级别的产品：标准版、专业版和高级版，以满足用户的多样化需求。

SuperMap iDesktop 7C(2015) Service Pack 1 桌面产品在上一版本基础上，新增了核密度分析、太阳辐射分析、DEM
曲率计算等栅格分析功能；新增了路网数据编译、路由数据转线数据、点数据转线数据、数据集属性表保存为Excel
等数据类型转换功能；新增了布局插入图片、Ctrl+A 全选地图对象、绘制时按 A
键漫游等地图制图相关操作，同时优化了固定比例尺及相关比例尺的操作；新增了光照分析、淹没分析、剖面分析三维空间分析功能；支持在平面和球面场景中对图层或选中对象设置是否开启阴影，等等。

**SuperMap iDesktop 7C(2015) Service Pack 1 包含以下新增功能和优化之处：**

### 数据类型转换

    * 支持[路由数据转为线数据](../Features/DataProcessing/ConvertDataType/ConvertRoute.htm)，可将路由数据集中所有路由对象转化为线对象。
    * 支持[点数据转为线数据](../Features/DataProcessing/ConvertDataType/PointToLine.htm)，可根据指定字段和节点顺序，将字段值相同的点按节点顺序连成同一个线对象。
    * 支持将矢量数据集或者纯属性表数据集[属性表保存为 Excel](../Features/DataProcessing/EditTabular/SaveasExcel.htm)，可将整个属性表保存为 Excel，也可只保存选中的记录。 

### 数据编辑

    * 新增了[属性表拖拽赋值](../Features/DataProcessing/EditTabular/DragTabular.htm)的功能，属性表中的拖拽操作可实现复制、等差赋值、等比赋值等效果。
    * 支持在对象绘制时，按“A”键切换到[绘制漫游](../Features/DataProcessing/Objects/CreateObjects/AboutCreateGeometry.htm)状态，单击右键、再次按下“A”键或按“Esc”键都可结绘制束漫游并恢复至绘制状态。
    * 新增面对象[节点反向](../Features/DataProcessing/Objects/EditObjects/ChangeDirction.htm)的功能，可改变选中面对象的节点顺序，使节点顺序反向。

### 数据分析

    * 新增[核密度分析](../Features/Analyst/Raster/KernelDensityAnalysis.htm)功能，用于计算点、线要素在其周围邻域范围内的每单位面积量值，结果输出为栅格数据集。
    * 新增[太阳辐射分析](../Features/Analyst/Raster/SolarRadiation.htm)功能，可分析某区域在指定时间段内的太阳总辐射、直接太阳辐射、散射太阳辐射和直射持续时间。
    * 新增[DEM 曲率计算](../Features/Analyst/Raster/SurfaceAnalyst/CalculateCurvature.htm)功能，用于计算 DEM 栅格数据表面的曲率，包括平均曲率、剖面曲率和平面曲率。
    * 栅格代数运算新增了 Pick 函数，可将指定的第一个栅格数据集的栅格值作为对应位置，并根据后续输入的栅格数据集的栅格值或输入的数值，给对应位置的栅格赋值，最终生成一个新的栅格数据集。

### 地图制图

    * 新增[布局插入图片](../Features/Layout/DrawingObjects/Picture.htm)功能，用于整饰布局中的地图。
    * 支持[批量设置 CAD 复合数据集的三维对象风格](../Features/SceneOperation/SceneVisualization/CAD3DStyle.htm)，可在场景中选中多个三维对象进行符号风格设置。
    * 支持在地图中按 Ctrl+A 全选地图对象，按“Esc”键或在地图空白处单击鼠标左键可取消选中。

### 三维空间分析

    * 新增[光照分析](../Features/SceneOperation/RealspaceSpatialAnalyst/SunshineAnalyst.htm)功能，可计算指定区域在某段时间内，可被太阳照射到的时间长度，得到指定区域内的采光信息。
    * 新增[淹没分析](../Features/SceneOperation/RealspaceSpatialAnalyst/Flood3D.htm)功能，根据指定的最大、最小高程值及淹没速度，动态模拟某区域水位由最小高程涨到最大高程的淹没过程。
    * 新增[剖面分析](../Features/SceneOperation/RealspaceSpatialAnalyst/ProfileAnalyst.htm)功能，根据指定的剖面线，输出剖面线与地形数据的表面高程沿某条线（截面）的变化，或剖面线所截的模型建筑物、地下管线等的轮廓线。
    * 新增[添加动画模型](../Features/SceneOperation/LayersManagement/AddNodeAnimation.htm)功能，支持在 KML 图层中添加动画模型，可动态演示模型沿指定轨迹运动的过程。

### 三维操作

    * 支持平面场景中的[太阳光照效果](../Features/SceneOperation/AdvancedSceneSetting/SunEffect.htm)，可在平面场景中开启太阳特效和设置太阳特效的轨迹。
    * 支持设置[图层阴影或选中对象阴影](../Features/SceneOperation/AdvancedSceneSetting/ModelShade.htm)，根据太阳的位置获取场景中模型的阴影位置。

### 优化功能

    * 优化了地图固定比例尺的设置，提高了设置过固定比例尺的地图在进行缓存生成、分级配图、显示控制等操作时的易用性；
    * 优化了地图裁剪功能，支持了地图中不可见图层参与裁剪；
    * 提高了参数化绘制和自动绘制的易用性，将这几项设置的入口调整到了“对象操作”的“绘制设置”组中；
    * 优化了 KML 对象风格、属性设置，并支持批量设置。

