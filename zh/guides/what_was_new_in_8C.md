---
id: what_was_new_in_8C
title: SuperMap iDesktop 8C 新特性
---
SuperMap iDesktop 8C 桌面产品在上一版本基础上，新增并优化了地图制图、数据编辑、数据处理、数据分析、三维场景、云特性等模块的相关功能。其中，地图制图模块新增了地图放大镜、Alpha
通道、显示冲突对象等功能，同时，优化了沿线标注间距、地图裁剪显示等功能；数据编辑模块新增了对象类型转换、擦除外部、选择对象分割、路由对象编辑等功能，并优化了属性刷功能，支持设置待刷新的属性字段；数据分析模块中新增了泰森多边形、距离计算、简单密度分析等空间分析功能，及连通性分析、资源分配等网络分析功能；数据处理功能模块中新增了批量投影转换、点属性更新到面属性、倾斜摄影数据保存到
MongoDB
、点抽稀、点密度聚类等功能，且优化了投影转换、属性更新等功能；三维场景模块新增了行走模式和碰撞检测功能，并支持将三维网络结点数据集的风格关联到线数据集上；同时提供了云共享和云许可功能，等等。

**SuperMap iDesktop 8C 包含以下新增功能和优化之处：**

### 地图制图

* 新增[地图放大镜](../Features/Visualization/BrowseMap/MapMagnifier.htm)功能，可将地图窗口中的内容加载到“放大镜”窗口中以指定的倍数放大显示。
* 支持[设置地图的Alpha通道值](../Features/Visualization/VisualSetting/LayerAlpha.htm)，可使矢量数据集中的点、线、面对象实现半透明效果，调制更丰富的颜色，支持输出半透明地图、半透明缓存等。
* 新增了[显示冲突对象](../Features/Visualization/AdvanceSetting/MapDebug.htm)功能，采用红色和粉色突出显示地图中位置有冲突的标签，包括与自标签位置冲突的标签及与其他标签位置冲突的标签。
* 新增了[标准图幅图框](../Features/Visualization/MapSetting/StandardMargin.htm)功能，用于制作标准图幅的图框数据，并将标准图幅图框以CAD数据集的形式保存到指定的数据源中。
* 新增了[地图填充色柔化](../Features/Visualization/LayerStyle/MapSoften.htm)功能，可自动降低颜色饱和度，调整色相和亮度值，优化地图中面图层的填充颜色。
* 新增了[影像插值](../Features/Visualization/VisualSetting/Imagegroup.htm)功能，可将原始图像映射为较大或较小的一组像素显示，使得影像显示效果更加清晰、美观。
* 优化了[文本字体类型设置](../Features/Mapping/LabelMap/UniformStyleDia.htm)功能，将常用字体放在选项前面，增加了最近使用字体分组，且不支持@字体。
* 调整了[标注间距的计算方式](../Features/Mapping/LabelMap/AdvancedDia.htm)，优化后计算方式为：标注间距为从上一个标注结束到下个标注开始。
* 优化了[地图裁剪显示范围](../Features/Visualization/MapSetting/SettingRange.htm)中的选中对象功能，支持选中多个对象进行裁剪。
* 超长文本设置为换行显示方式后，支持[设置文本的对齐方式](../Features/Mapping/LabelMap/AdvancedDia.htm)，提供了居中、左对齐、右对齐、分散对齐四种。
* 支持设置文本标签的[轮廓宽度](../Features/Mapping/LabelMap/UniformStyleDia.htm)，单位为像素。
* 支持[打印地图](../Features/Visualization/Basic/PrintMap.htm)，可直接打印已保存的地图。
* 支持[根据模板新建布局](../Features/Layout/Basic/Layouts_NewTemplate.htm)，且支持用户导入本地布局模板，丰富模板库。
* 丰富了点符号库的符号资源，提供了不同主题风格的点符号。

### 数据编辑

* 新增了[线对象转点对象](../Features/DataProcessing/Objects/EditObjects/LineToPoint.htm)功能，可将选中线对象转换成点对象，并保存在点数据集或CAD数据集中。
* 新增了[线对象转面对象](../Features/DataProcessing/Objects/EditObjects/LineToRegion.htm)功能，可将选中线对象转换成面对象，并保存在面数据集或CAD数据集中。
* 新增了[面对象转线对象](../Features/DataProcessing/Objects/EditObjects/RegionToLine.htm)功能，可将选中面对象转换成线对象或提取面对象的中心线，并保存在线数据集或CAD数据集中。
* 新增了[擦除外部](../Features/DataProcessing/Objects/EditObjects/ExternalErase.htm)功能，用来将目标对象（被擦除对象）中与擦除对象不重叠的部分进行删除。
* 新增了[选择对象分割](../Features/DataProcessing/Objects/EditObjects/CutByChoosePolygon.htm)功能，可通过选择的对象来分割线或者面对象。
* 新增了[根据M值添加点/高亮线段](../Features/DataProcessing/Objects/EditObjects/RouteAddNode.htm)功能，可为选中路由线对象添加一个特定M值的节点，也可根据起始和终止M值，在图层上高亮显示两个M值之间的路由线段。
* 新增了[校正路由对象M值](../Features/DataProcessing/Objects/EditObjects/CalibrateRouteM.htm)功能，用于调整路由对象的测量值，使其与已知的参考点保持一致的过程。
* 新增了[删除所有M值](../Features/DataProcessing/Objects/EditObjects/RouteDelM.htm)功能，用于删除选中的一个或多个路由对象的所有M值。
* 新增了[绘制多段线](../Features/DataProcessing/Objects/CreateObjects/Draw2PolyLine.htm)功能，绘制线对象时可切换线类型为折线、自由曲线、Cardinal曲线中的任意一种。
* 支持[复制粘贴对象类型转换](../Features/DataProcessing/Objects/EditObjects/Clipboard.htm)功能，在将点、线、面对象粘贴到不同类型数据集中时，对象类型会根据目标数据集类型自动转换。
* 优化了[属性刷](../Features/DataProcessing/Objects/EditObjects/PropertyBrush.htm)功能，可将一个对象的指定可编辑字段（包括字段 SmUserID 和非系统字段）值赋给其他对象，并支持连续和跨图层刷新属性。

### 数据处理

* 新增了[批量投影转换](../Features/DataProcessing/Projection/ConvertPrjCoordSysBatch.htm)功能，可同时对数据源下的多个数据集进行投影转换，转换后指定数据集的坐标与目标数据源的坐标系一致。
* 新增了[倾斜摄影数据保存到MongoDB](../Features/SceneOperation/OSGB/OsgbToMongoDB.htm)功能，将其关联的 *.osgb 数据保存到 MongoDB 数据库中，并生成一个新的 *.scp 配置文件，便于数据分享与发布。
* 支持[点属性转为面属性](../Features/DataProcessing/ConvertDataType/PointFieldToPgnField.htm)功能，支持将点数据属性中的非系统字段值更新到对应面数据的属性中。
* 新增了[点抽稀](../Features/DataProcessing/Vector/RarefyPoints.htm)功能，可根据指定半径将较为密集的点抽稀，可应用于小比例尺下的制图。
* 新增了[点密度聚类](../Features/DataProcessing/Vector/AggregatePoints.htm)功能，可将空间位置分布较为密集的点划分为一簇，或将同一簇点构成一个多边形。
* 新增了[图幅接边](../Features/DataProcessing/Vector/EdgeMatch.htm)功能，可将相邻图幅的边缘线对象进行衔接。
* 新增了[文本查找、替换](../Features/Query/FindReplaceText.htm)功能，可在文本数据集上查找或替换指定的文本。
* 优化了[属性更新](../Features/DataProcessing/Vector/Attributeupdate.htm)功能，调整了源数据和目标数据的空间关系，即调整为源对象与目标对象的关系。
* 新增了属性字段的[值域设置](../Features/DataProcessing/DataManagement/DTgroupDiaVector.htm)功能，支持为数值型和日期型字段设置值域范围及枚举值，其他字段类型只支持字段设置值枚举。
* 优化了[复合数据集转为简单数据](../Features/DataProcessing/ConvertDataType/ConvertCAD.htm)功能，支持将 CAD 数据集中的三维对象转换为三维点、线、面数据集。
* 优化了[另存为数据集](../Features/Visualization/Interaction/ExportData.htm)功能，支持将选中对象保存到已有数据集中，并支持删除源对象。

### 数据分析

* 新增了[构建泰森多边形](../Features/Analyst/Vector/ProximityAnalyst/ThiessenPolygon.htm)功能，可根据点数据集构建由连接两邻点直线的垂直平分线组成的连续多边形。
* 新增了[距离计算](../Features/Analyst/Vector/ProximityAnalyst/DistanceMeasure.htm)功能，可用于计算点到点、线、或面的距离，计算结果保存在一个新的属性表中。
* 新增了[简单密度分析](../Features/Analyst/Raster/PointDensityAnalysis.htm)功能，可计算每个点指定邻域形状内的单位面积量值。
* 支持[两点连通性分析](../Features/Network/ConnectedAnalyst.htm)功能，根据指定的起始和终止结点，分析两点之间是否连通。
* 新增了[资源分配](../Features/Network/10-4ResourceLocationDia.htm)网络分析功能，可分析资源供给中心可分配到的需求点和分配路径。
* 支持设置交通网络分析的[分析区域](../Features/Network/AnalysisArea.htm)，可通过指定面来确定分析范围。
* 优化了[栅格直方图](../Features/Analyst/Raster/Histograms.htm)功能，提升了栅格数据直方图的统计效率。

### 云特性

* 新增了数据上传、下载的云共享功能，支持上传工作空间、数据源、地图模板等数据到 SuperMap Online 中，供其他人或自己下载，方便了数据共享。
* 新增了云许可方式配置许可，可通过账号登录方式在不同终端使用许可，支持在线许可和离线许可两种使用方式，方便用户在不同终端上使用许可。

### 数据引擎

* 支持[新建或打开博阳数据库（BeyonDB）数据源](../Features/DataProcessing/DataManagement/CreateDatasource.htm)功能，可在 BeyonDB 中新建数据源，或打开数据库中已存在的数据源。
* 支持[新建或打开瀚高数据库（HighGoDB）数据源](../Features/DataProcessing/DataManagement/CreateDatasource.htm)功能，可在 HighGoDB 中新建数据源，或打开数据库中已存在的数据源。
* 支持[导入 *.ecw、*.JP2 格式的影像数据](../Features/DataProcessing/DataConversion/GeoFormates.htm)，同时可以数据源方式直接打开 *.ecw 和 *.JP2 格式的影像数据。
* 支持[导入 GJB 军用标数据](../Features/DataProcessing/DataConversion/GeoFormates.htm)。

### 三维场景

* 场景浏览中新增了[行走模式](..\\Features\\SceneOperation\\BrowseScene\\WalkingMode.htm)功能，提供了键盘驱动、自动行走、自动奔跑三种模式，模拟人的行走动作来浏览场景，可通过移动鼠标或键盘的方向键，控制场景自动浏览的方向。
* 新增了[碰撞检测](../Features/SceneOperation/BrowseScene/CollisionDetection.htm)功能，设置碰撞检测距离后，当相机与墙壁或其他障碍物距离为指定的检测距离时，相机会停止运动，若未开启碰撞检测，则相机会穿墙浏览场景。
* 支持生成[倾斜摄影模型缓存](../Features/Optimization/Cache/WScene_CacheBuilder.htm)，可将模型数据生成的缓存切片以 *.osgb 格式保存在指定文件夹中。
* 新增了三维网络数据点数据[关联图层风格](../Features/SceneOperation/RealspaceNetworkAnalyst/SettingParentLayer.htm)功能，在构建三维管线模型后，可将三维网络数据集点数据集的风格关联到线数据集上，自动匹配出合适的管点风格。
* 新增了[三维缓冲区分析](../Features/Analyst/Vector/bufferanalyst/Buffer3D.htm)功能，可根据指定半径在三维点周围建立球体，或在三维线数据周围建立圆柱体。
* 新增了[视频投放](../Features/SceneOperation/RealspaceSpatialAnalyst/VideoPlay.htm)功能，可将指定视频投放到模型或地形表面进行播放，可还原施工或案发现场。
* [关键设施分析](../Features/SceneOperation/RealspaceNetworkAnalyst/FindCriticalFacilitiesUp.htm)支持查找爆管点的下游关键阀门，及时关闭下游关键阀门可避免水回流等问题。

### 联机帮助

* 新增了[GIS基础知识专题](../Features/TechDocument/GISKnowledge/GisSummary.htm)，详细介绍了GIS数据类型、数据来源、数据结构等基本概念，及地图制图相关的知识。
* 新增了[邻近分析专题](../Features/Analyst/Vector/ProximityAnalyst/ProximityAnalyst.htm)，系统的介绍了邻近分析的功能、原理和应用等，包括泰森多边形、距离计算、缓冲区分析等功能。
* 新增了[SDX专题](../Features/TechDocument/SDX/AboutSDX.htm)，详细介绍了SuperMap SDX+支持的引擎类型、数据集类型、空间数据模型及优化方案等问题，便于用户更好的使用数据引擎，了解相关的注意事项。
* 新增了[空间索引专题](../Features/DataProcessing/DataManagement/ManageSpatialIndex.htm)，主要介绍了R树索引、四叉树索引、图库索引、动态索引四种索引方式的原理、存储结构、新建及管理等内容。

### 其他

* 增加了符号库精简功能，在保存工作空间时可只保存地图中用到的符号，减少了工作空间的文件大小。




