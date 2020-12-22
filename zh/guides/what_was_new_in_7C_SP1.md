---
id: what_was_new_in_7C_SP1
title: SuperMap iDesktop 7C SP1 新特性
---
SuperMap GIS 7C 桌面产品是一款可编程、可扩展、可定制的运行在桌面端的二三维一体化的产品。该款产品提供了数据管理、数据处理和类型转换、二三维对象绘制和编辑、二三维空间分析、专题图制作、布局排版以及三维场景渲染等功能。这套软件划分为三个级别的产品：标准版、专业版和高级版，以满足用户的多样化需求。

SuperMap iDesktop 7C SP1
桌面产品在上一版本基础上，一方面提升了产品性能，如提升了属性表性能、二三维专题图属性设置性能、布局对象属性设置性能等；一方面对GIS功能进行完善，如新增了地图网格、地图分幅、图层属性模板、多种矢量数据处理功能等。另一方面优化了产品的易用性，如优化了图层属性设置、工作空间管理器及图层管理器搜索框等。同时，桌面功能已全面支持Win8操作系统。

SuperMap iDesktop 7C SP1 包含以下新增功能和优化之处：

## 新增功能

### 数据操作

* 新增内存数据源，内存数据源为临时数据源，不支持保存，在内存数据源中进行数据处理效率较高。
* 新增[面提取边界线](../Features/DataProcessing/Vector/ExtractBorderLine.htm)功能，可将面对象的边界线提取出来，并将结果数据保存为线数据集。
* 新增[双线提取中心线](../Features/DataProcessing/Vector/DualLineToCenterLine.htm)功能，可根据给定的宽度从非闭合的双线中，提取两条线之间的中心线，并将结果保存为线数据集。
* 新增[面提取中心线](../Features/DataProcessing/Vector/RegionToCenterLine.htm)功能，可提取面对象的中心线，并将结果保存为线数据集，一般用于提取河流的中心线。
* 新增[点数据提取等值线](../Features/Analyst/Raster/SurfaceAnalyst/ExtractIsoline.htm)功能，对点数据集进行插值分析，得到栅格数据集，将栅格数据集中相邻的具有相同高程值的点连接起来，提取高程值相等点的等值线。
* 新增[拓扑预处理](../Features/DataProcessing/Topology/TopoPreprocess.htm)功能，对待拓扑检查数据进行拓扑预处理操作，通过预处理将在容限范围内的问题数据进行调整。
* 新增[坐标点转换](../Features/DataProcessing/Projection/ConvertPointPrjCoordSys.htm)功能，可将某点的坐标转换为另一坐标系下的坐标值。
* 支持[新建](../Features/DataProcessing/DataManagement/CreateDatasource.htm)和[打开](../Features/DataProcessing/DataManagement/OpenDatasource.htm) KingBase、MySQL数据库型数据源，同时支持打开 ArcSDE 数据库型数据源。
* 支持数据集[按照对象个数排序](../Features/DataProcessing/DataManagement/DS_SortDTs.htm)，可按对象个数升序进行排序。

### 地图制图与浏览

* 新增[地图定位](../Features/Visualization/BrowseMap/MapLocation.htm)功能，方便用户对某一坐标进行查找定位。
* 新增[地图网格](../Features/Visualization/MapSetting/MapGride.htm)工具，将制图区域按平面坐标或按经纬线划分网格。
* 新增[地图分幅](../Features/Visualization/MapSetting/MapMargin.htm)工具，按照比例尺和地理范围参数，生成标准的图幅数据集，以便于地图索引、制图、分块操作等。
* 在单值专题图模板中增加四色专题图模板。
* 新增关联浏览窗口联动十字丝功能，方便查看多个关联窗口鼠标联动的空间位置。
* 新增图层反走样功能，与地图反走样一起使用，可优化图层中线或文本的显示效果。
* 新增[图层属性模板加载和输出](../Features/Visualization/LayerTemplate/LayerTemplate.htm)功能，可将某一图层的属性、风格设置等信息，输出为模板，并应用至另一图层中。

## 性能增强

### 性能与稳定性

* 提升了桌面的稳定性，减少了操作过程中耗费的系统资源，同时加快了窗口打开的速度，桌面操作也更流畅。

### 数据处理

* 提升了属性表相关操作性能，使对属性表进行浏览或编辑时，操作更为顺畅。

### 地图浏览与操作

* 优化了三维模型性能，显著提升了高密度模型和海量精细模型的加载和浏览性能，同时优化了地形显示效果、场景浏览操作体验等。
* 优化了太阳特效播放设置，调整了三维太阳特效管理设置面板，展现方式更符合操作习惯。
* 提升了二三维专题图、布局对象属性设置性能，解决了操作时速度慢的问题，减少了用户等待的时间。
* 优化了地图、场景、属性表窗口之间的切换性能。

### 二次开发

* 拆分了空间查询、太阳特效、粒子属性窗口控件，开放了更多接口，如接口变更列表所示。
* 在进行工作环境设计时，支持去掉“最近使用文件列表”。

## 易用性优化

* 利用多线程技术，优化了数据处理进度显示和控制的易用性。
* 支持地图、场景多图层属性统一设置操作，可同时选中多个矢量、栅格或影像图层，统一设置其属性。
* 优化了工作空间管理器和图层管理器搜索框，同时提供了结点隐藏功能。
* 优化了对象选择风格设置功能，优化了专题图和CAD图层的被选中对象风格设置方式。
* 优化了符号选择器窗口弹出速度。
* 桌面功能全面支持win8操作系统。



