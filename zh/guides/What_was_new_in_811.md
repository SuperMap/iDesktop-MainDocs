---
id: What_was_new_in_811
title: SuperMap iDesktop 8C(2017) Service Pack 1 新特性
---
SuperMap iDesktop 8C(2017) Service Pack 1（以下简称SP1）
桌面产品在上一版本基础上，新增并优化了数据管理、地图制图、数据处理、三维、易用性等模块的相关功能。其中，数据管理中新增 GeoJson
数据的导入导出、EPS数据类型转换等功能，旨在帮助用户更好的管理数据；地图制图中增加了单值和分段专题图子项定位功能，支持将对象保存为点符号，优化了分级配图的性能和操作方式等。同时，应用程序的稳定性和易用性得到了进一步的提升。

**SuperMap iDesktop 8C(2017) SP1 包含以下新增功能和优化之处：**

**数据管理**

* 支持[导入 GeoJson 数据](../Features/DataProcessing/DataConversion/GeoFormates.htm)，同时支持将点、线、面等矢量数据导出为 GeoJson 文件。
* 支持导入山维科技（EPS）的 *.edb 数据。
* 新增了 EPS 数据转换的功能，支持将 EPS 复合数据集转换为简单数据集。
* 优化了[导入 CSV 文件](../Features/DataProcessing/DataConversion/CSVimport.htm)的参数设置方式，支持数据预览，以便于更方便地进一步设置 WKT 串字段、坐标字段。
* 支持[修改数据集属性字段类型](../Features/DataProcessing/DataManagement/DTgroupDiaVector.htm)，目前支持 Oracle、SQLServer、MySQL、PostgreSQL、KingBase 五种引擎，UDB 数据源不支持修改字段类型。

**地图制图**

* 新增[单值专题图](../Features/Mapping/UniqueValueMap/PropertiesDia.htm#1)、[分段专题图](../Features/Mapping/RangesMap/RangesMapGroupDia.htm#1)子项定位功能，选中专题图子项，通过定位可以将地图窗口中的对应对象高亮显示，便于查找地图中子项值散布的区域。
* 优化了[分级配图](../Features/Visualization/MapSetting/MapScaleGrading.htm)的性能，并支持批量设置图层的最大最小可见比例尺，提高了用户的工作效率。
* [地图定位](../Features/Visualization/BrowseMap/MapLocation.htm)、[地图网格](../Features/Visualization/MapSetting/MapGride.htm)等功能，增加了度分秒切换功能。输入坐标值可以根据实际需求切换值的显示形式，既可以度的形式输入坐标值，也可以度分秒的形式输入坐标值。
* 优化了文本标签[字号、字高](../Features/Mapping/LabelMap/UniformStyleDia.htm)的数值设置，将其数值精度调整为 0.5。
* 支持将[标签专题图转换为文本数据集](../Features/Mapping/EditingMap/ThematicToCAD.htm)，文本数据集会保留标签的字体风格，包括字体、字号、颜色等属性。
* 支持将地图中的一个或者多个矢量对象[输出为点符号](../Features/SymManager/SaveAsSymMarker.htm)，并将对象直接转化到点符号编辑器中，便于进一步修改。
* 新增四维图新数据[路况校正](../Features/ApplicationTheme/TrafficCondition/TrafficLineRevise.htm)功能，可根据数字化校正道路线方向，确保道路偏移方向的正确性。
* 单值专题图中，新增[道路实况](../Features/Mapping/UniqueValueMap/AdvancedDia.htm)的设置，解决四维图新道路数据制作的路况专题图在小比例地图上出现双线道路重叠问题。
* 优化了图层管理器中粘贴图层的方式，新增[插入复制的图层](../Features/Visualization/LayerManagement/DTv2_Copy.htm)功能，可以在任意图层位置插入复制图层。
* 优化了[文本风格模板](../Features/Visualization/LayerStyle/TextStyleTemplategroup.htm)管理界面和易用性，文本风格模板面板支持右停靠，面板中的风格模板会根据模板分组显示，提高了文本模板管理和使用的易用性。

**数据编辑**

* 优化了[邻近点连接线](../Features/DataProcessing/Objects/EditObjects/JoinLine.htm)的算法，根据线对象端点之间的空间距离做判断，将端点距离最近的线对象依次进行连接。
* 支持线对象[合并](../Features/DataProcessing/Objects/EditObjects/Merge.htm)，若线对象之间有重合的端点或线段，即可将其合并成一个线对象。
* 选中多个对象做[组合](../Features/DataProcessing/Objects/EditObjects/Group.htm)、[合并](../Features/DataProcessing/Objects/EditObjects/Merge.htm)等操作时，通过保留对象方式设置结果属性，结果对象的所有属性字段信息都为指定对象的信息。

**数据处理与分析**

* [矢量数据集重采样](../Features/DataProcessing/Vector/VectorResample.htm)结果数据支持另存，可保留源数据，同时增加了根据显示比例尺设置重采样距离的方式。
* 优化了[高亮选中对象](../Features/DataProcessing/EditTabular/CheckColumn.htm)的操作，关联浏览属性表时选中了整列属性表，可根据使用需求设置选中整列时是否在关联地图上高亮显示所有对象。
* “对象操作”选项卡增加了[切换当前选中图层的操作](../Features/DataProcessing/Objects/CreateObjects/DTv2_Editable.htm)，该操作直接将被选中图层设置为可编辑，便于用户明确和快速切换当前的编辑图层。
* 支持属性表单元格中的数值、比例尺等数值以千分位的形式显示，便于用户快速识别数值的大小。
* 支持[批量生成正射三维影像](../Features/Analyst/Raster/SurfaceAnalyst/OrthoImage.htm)，可同时对多个栅格数据集进行操作，提高了用户的工作效率。
* 支持[批量生成三维晕渲图](../Features/Analyst/Raster/SurfaceAnalyst/HillShade.htm)，可同时对多个栅格数据集进行操作，提高了用户的工作效率。

**三维场景**

* 新增支持 ENU 坐标系的倾斜摄影模型数据。
* 对倾斜摄影模型进行[纹理压缩](../Features/SceneOperation/OSGB/TextureCompression.htm)时，支持生成 JPG 和 PNG 的通用格式。
* 新增三维对象绘制功能，可在 KML 图层中便捷的绘制添加长方体、圆锥体、圆柱体、球体等三维对象。
* 新增[多重可视域分析](../Features/SceneOperation/RealspaceSpatialAnalyst/MultiViewshed3D.html)功能，可用于模拟对重点区域的安保监控。
* 支持[模型数据集转换为二维面数据](../Features/SceneOperation/DataProcessing/ModelToPolygon.html)，可快速生成模型俯视图。
* 模型数据集支持设置[多边形偏移](../Features/SceneOperation/AdvancedLayserSetting/PolygonOffset.html)，用于解决多边形重叠时闪烁的问题。
* 支持将三维模型对象导出为 KML 文件和 OSGB 文件，其中 KML 存储参数信息，OSGB 存储模型数据。
* 支持[查看三维模型对象信息](../Features/SceneOperation/DataProcessing/ModelPropertyIntro.html)，包括三角面片数、顶点数、体积、面积、骨架等信息，便于了解模型对象的结构。
* 场景新增[设置灯光颜色](../Features/SceneOperation/DataProcessing/ModelPropertyIntro.html)，可通过调整环境光与散射光颜色来模拟逼真的光照效果。

**性能与稳定性**

* 对影响桌面性能的用户对象数泄露问题进行了排查及处理，有效提升了桌面的稳定性。
* 优化了将属性表中所有记录集[另存为数据集](../Features/DataProcessing/EditTabular/DatasetButton.htm)的性能。 
* 优化了类型转换中[点数据集转换为线数据集](../Features/DataProcessing/ConvertDataType/PointToLine.htm)的性能。

**用户界面**

* 丰富了“文件”中“示范数据”的显示内容，划分为地图、海图、场景、布局、动态标绘五大类，便于用户快速定位到相应类别的示范数据。 
* 优化了“文件”中的“选项”布局。
* 优化了“文件”中的“打开”功能，将“最近使用”的工作空间、数据源整合到“打开”功能界面中，便于用户直接打开新的或者使用最近打开的文件。
* 在“文件”选项卡中增加了的“许可”信息，便于用户了解当前产品的功能模块与许可授权情况。
* 将工作空间属性、数据源属性、数据集属性、对象属性等Dockbar面板调整为右停靠，解决面板遮挡地图窗口区域问题。
* 工作空间属性、数据源属性、数据集属性、对象属性等DockBar面板上部分参数页面增加了及时应用功能，例如对象属性面板上输入字段值时，回车或者鼠标失去焦点后立即生效，减少录入数据时频繁使用应用的繁琐操作。
