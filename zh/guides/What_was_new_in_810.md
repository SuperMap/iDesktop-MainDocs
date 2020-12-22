---
id: What_was_new_in_810
title: SuperMap iDesktop 8C（2017） 新特性
---
SuperMap iDesktop
8C(2017)桌面产品在上一版本基础上，新增并优化了数据管理、地图制图等模块的相关功能。其中，数据管理中新增起始页、工作空间管理窗口、功能搜索等功能，旨在帮助用户更轻松的使用桌面产品；地图制图中对颜色方案管理器以及颜色方案的选择、柱状图的参数设置等进行了优化，以达到更好的制图效果。同时，8C(2017)相比上一版本，应用程序的稳定性和产品性能得到了进一步的提升。

**SuperMap iDesktop 8C(2017)包含以下新增功能和优化之处：**

**引擎优化**

* 数据库型数据源中，新增[新建和打开浪潮K-DB ](../Features/DataProcessing/DataManagement/CreateDatasource.htm)数据库。
* 新增Oracle、PostgreSQL(PG)引擎对山维科技（EPS）数据的支持。
* 支持基于EPS的脚本文件导入EPS数据。

**数据管理**

* 新增[起始页](../Features/DataProcessing/DataManagement/GettingStarted.htm)。在起始页页面中可以方便地进行新建、打开数据源、数据集等操作，支持打开最近使用的工作空间、数据源以及最近路径，并支持访问产品视频、示范代码等相关的帮助性资源。
* 新增[工作空间管理窗口](../Features/DataProcessing/DataManagement/WorkSpaceView.htm)。在窗口中以图标的形式显示并管理当前工作空间中的内容，包括数据源、地图、场景、布局、资源等。可以像操作资源管理器中的文件夹一样，操作当前工作空间下的各种资源，例如可以删除数据集、地图，对数据源中的数据集进行各种排序等。 
* 新增[功能搜索](../Features/DataProcessing/DataManagement/FeatureSearch.htm)。在搜索框中输入要搜索功能的关键字，即可罗列出符合搜索条件的功能，单击选中的功能，在符合功能使用条件的情况下，就能直接执行该功能。
* 新增预定义投影：改良斜正射投影。
* 支持10参数转换方法：莫洛金斯基―巴待卡斯投影方法。
* 支持将已打开的数据源，重新以只读方式打开，方便同一份数据同时在多个桌面中进行对比操作。
* 支持[基于模板新建文件型工作空间](../Features/DataProcessing/DataManagement/CreateWokspace.htm)，可以选择本地已有工作空间作为模板创建，也可以选择桌面中提供的工作空间模板创建。
* 支持[基于模板创建数据源](../Features/DataProcessing/DataManagement/CreateDatasource.htm)，可基于SuperMap提供的模板或当前工作空间中的数据源创建数据源，结果数据源中的数据集个数、名称、类型与模板数据源中的一致。
* 支持[基于模板创建数据集](../Features/DataProcessing/DataManagement/CreateDataset.htm)，新创建的数据集将于模板数据集保持相同的属性结构、投影信息、字符集等。

**地图制图**

* 支持浏览EPS数据，支持为图层设置风格。
* 支持编辑EPS几何对象节点。
* 支持保存浏览地图时添加的视图，以便下次打开时直接使用已保存的视图进行地图浏览操作。
* 新增[全球连贯漫游](../Features/Visualization/BrowseMap/Pan.htm)。在打开全球数据的前提下，开启全球漫游，即可实现全球自东向西或者自西向东、跨越东西半球的连贯漫游，达到全球数据无缝浏览的效果。
* 支持通过图层管理器，跨工作空间拷贝\粘贴地图图层，以实现多个工作空间的成果复用。
* 调整对象节点编辑时，选中节点的大小，使其更加醒目。
* 新增[绘制测地线](../Features/DataProcessing/Objects/CreateObjects/DrawCurve.htm)功能，使用此功能可以实现例如全球范围内飞机航线的绘制。
* 新增[测地线量算](../Features/Visualization/Interaction/Measuregroup.htm)功能。
* 支持在图层管理器中显示栅格数据的颜色表，方便用户进行对比查看。
* 支持纯色填充符号的制作和保存。
* 统计专题图中的柱状图，支持设置[柱宽度系数、柱间隔系数](../Features/Mapping/GraphMap/AdvancedDia.htm)，通过系数调整，使得柱状图的显示效果更优，满足不同的制图需求。
* 支持[专题图保存为CAD数据集](../Features/Mapping/EditingMap/ThematicToCAD.htm)。
* 支持设置地图状态栏上坐标的显示格式，并支持复制鼠标当前位置坐标值。
* 支持设置[单值栅格专题图图层的无值透明](../Features/Mapping/GridUniqueValuesMap/GridUniqueValuesMapGroupDia.htm)等。
* 支持制作空数据专题图。
* 优化专题图修改表达式时，对当前单值或分段等的处理。
* 优化[颜色方案管理器](../Features/Visualization/LayerStyle/ColorRampManager.htm)，使用树分类的方式管理所有色带，新增235条不同风格的色带。
* 颜色方案管理器中，将默认提供的色带按照适用DEM、适用晕渲图、适用等级符号、适用统计、适用范围分段、适用单值专题图、默认渐变色、默认随机色8种用途进行分类管理，每种分类中提供具有特色的色带，方便用户在制图时根据需求使用。
* 颜色方案管理器中，支持新建、编辑色带，并支持色带搜索、复制、导出、收藏等操作。
* 在制作单值、范围分段、统计专题图时，默认自动匹配对应的色带分类，例如制作单值专题图时，颜色方案中会优先读取出适用单值专题图的色带供用户选择，并支持色带搜索，不同分类色带间的切换。 
* 优化单值、范围分段、统计专题图中颜色方案选择时的显示方式，调整色带间的间距，并且默认显示色带名称，提升用户在选择色带时的易用性。
* 优化栅格设置颜色表时颜色方案选择时的显示方式，调整了色带间的间距，并且默认显示色带名称。
* 优化地图制图入口，将专题图作为一个独立的选项卡，将所有的专题类型都开放出来，直接点击就可以创建对应类型的专题图。
* 支持标签换行预处理。根据预期的标签换行效果，对数据字段内容进行处理，在合适的位置增加换行符。

**数据处理**

* 支持批量重新计算数据集范围，同时选中多个数据集可通过右键菜单中选项可批量。
* 新增[批量追加行功能](../Features/DataProcessing/Vector/BatchAddtoRow.htm)，可同时对目标数据源中的多个数据集进行追加行操作。
* 支持复制粘贴数据集范围。
* 支持创建联合字段索引。
* 支持以拖拽方式直接打开CSV文件，以只读数据源的方式加载到工作空间中。
* 支持线对象的合并操作，若线对象有重合的节点或线段，可将其合并为一个对象。
* 支持拖拽打开Excel，在打开时可以选择“浏览前1000行”和“浏览全部”。对于大数据量Excel，可以选择快速浏览前1000行数据。
* 新增节点协调编辑，在进行节点编辑时自动维护对象间的拓扑关系。例如，邻接关系的两个面对象，编辑其中一个面对象的节点后，另一个面对象能自动进行修改，以保持这种面对象间的邻接关系。
* 修复碎多边形合并功能设置容限较大时可能丢失面的问题。
* 优化SQL查询界面上，对关联属性表的设置操作。
* 优化地图和编辑选项设置。
* 优化[更新列](../Features/DataProcessing/EditTabular/UpdateButton.htm)功能中对表达式的修改。
* 支持自动保存工作空间，用户操作工作空间10分钟且未保存时，将自动保存用户当前进行的更改。
* 支持自动恢复工作空间，在遇到桌面异常退出后，再次启动时会尝试恢复工作空间，尽量恢复用户的地图成果。

**分析**

* 优化叠加分析大内存模式性能。
* 优化三维线缓冲结果模型的显示效果。
* 优化网络数据中转向禁行区域的路径分析结果。

**三维**

* 倾斜摄影选项卡中，新增倾斜摄影模型[合并根节点](../Features/SceneOperation/OSGB/CombineOSGB.html)，合并后根节点数量大为减少，有利于提升模型加载效率。。
* 倾斜摄影选项卡中，新增[生成代理节点](../Features/SceneOperation/OSGB/GenerateProxy.html)功能，生成新的索引文件，提升模型浏览性能。
* 倾斜摄影选项卡中，新增[修改倾斜摄影模型文件中心点](../Features/SceneOperation/OSGB/ModifyCenter.html)功能，解决同一测区的倾斜摄影数据多个中心点的问题。
* 新增倾斜摄影[模型生成大文件](../Features/SceneOperation/OSGB/GenerateBigfile.html)缓存，进一步提升倾斜摄影模型的加载效率。
* 新增[合并TIN缓存](../Features/SceneOperation/3DTools/CombineTin.html)，可以将两个不同分辨率（块大小）的Tin缓存合并，以加载更大范围的Tin地形数据。
* 新增读取txt、las、xyz等格式的点云数据，支持[点云数据生成三维切片缓存（osgb格式）](../Features/SceneOperation/3DTools/PointCloud_GenerateCache.html)。
* 新增[碰撞检测](../Features/SceneOperation/RealspaceSpatialAnalyst/CollisionAnalysis.html)分析功能，可动态查看被检测模型在移动中是否与环境模型发生碰撞。
* 新增[提取BIM外壳](../Features/SceneOperation/RealspaceSpatialAnalyst/BIMShell_Extracting.html)功能，基于可视域分析实现BIM内、外部模型的分离、存储，可通过分别设置内、外部模型的显示方案来优化场景性能。
* 新增支持HTC Vive虚拟现实头盔浏览虚拟三维场景。
* 新增支持投影坐标系下的地形影像生成TIN缓存。
* 支持选择、查看倾斜摄影模型文件，便于倾斜摄影模型的更新维护。
* 支持添加天地图、OpenStreetMaps 、微软BingMaps与STK World Terrain的多种在线地图服务。
* 支持栅格数据集[构建栅格体数据集](../Features/SceneOperation/3DTools/Volumn3D_Build.html)，并生成缓存，浏览时支持将栅格体数据烘焙到其他模型数据表面显示。
* 场景开启接收体数据集，实现栅格体数据渲染显示。
* 支持开启Tin地形裙边，当TIN地形存在裂缝时，显示裙边可避免显示地形裂缝，从而提升TIN地形的显示效果。
* 地球与三维切片缓存图层支持设置多边形偏移，用于解决多边形重叠时闪烁的问题。
* 支持设置放大至地表是否执行俯仰操作，提升用户浏览体验。
* 三维图层支持开启顶点捕捉功能，使得量算更加准确。
* 栅格体数据、倾斜摄影模型、点云数据及TIN地形支持分层设色渲染，通过一定的颜色变化次序或色调深浅来表达和区别对象高度/强度大小。
* 三维切片缓存图层能够控制对象显示，包括最大/最小可见距离、旋转模型、透明过滤选择、设置选中对象颜色等属性。
* 三维切片缓存（osgb格式）图层、TIN地形缓存图层支持设置水体颜色、水位高程等实现淹没效果，可快速地展现城市内涝场景。
* 支持编辑KML图层在模型上实现[种树](../Features/SceneOperation/PlantTees/PlantTees.html)，快速渲染三维空间。
* 支持BIM模型数据集生成三维切片缓存（osgb），利于提高BIM模型性能。
* 支持CAD数据集直接生成三维切片缓存（osgb）。
* 倾斜摄影模型压缩纹理支持多线程，提高处理效率。
* 优化等值线分析，支持设置最大/最小可见高程，可在场景中选择以设置值大小。
* 数据集追加支持模型数据集，便于更新维护模型数据集。
* 新增自适应阀门符号，阀门可根据管线走向“自适应”地调整角度，确保阀门与管道的正确衔接。
* 倾斜摄影模型支持关联属性表，可快速地查看模型对象属性。
* 模型数据集支持开启可编辑。

**二三维标绘**

* 桌面产品中集成二三维标绘功能，可以方便灵活的标绘二维、三维点标号、线面标号，提供三维态势推演功能，主要应用于军事作战方案、应急处置方案、公安围捕方案等指挥调度方案中。
* 支持[二维标绘](../Features/TechDocument/Plotting/2DPlotting/2DPlotting.html)，[二维标绘面板](../Features/TechDocument/Plotting/2DPlotting/Introduce2DPlottingPanel.html)用来显示常用标号、警用标号以及图元，在CAD图层可编辑的情况下，可直接选中某一标号或图元进行绘制与编辑。
* [二维标绘属性面板](../Features/TechDocument/Plotting/2DPlotting/PropertyPanel_2D.html),支持对标绘在地图上的常用标号、警用标号、图元等的属性信息进行修改。
* 支持[三维标绘](../Features/TechDocument/Plotting/3DPlotting/3DPlotting.html)，在场景中使用[三维标绘面板](../Features/TechDocument/Plotting/3DPlotting/Introduce3DPlottingPanel.html)，可以绘制与编辑常用标号、警用标号以及图元等要素。
* [三维标绘属性面板](../Features/TechDocument/Plotting/3DPlotting/PropertyPanel_3D.html)支持对标绘在场景中的常用标号、警用标号、图元等的属性信息进行修改。
* 支持创建[路径动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，可以让点标号按照设定的路径进行移动。
* 支持创建[闪烁动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，可以让标号按照频率或者次数进行闪烁。
* 支持创建[属性动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，可以让标号的指定属性（线宽、线色等）按照设定的值进行变化。
* 支持创建[比例动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，让点标号按照设定比例的进行缩放。
* 支持创建[旋转动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，让点标号按照设定的角度进行旋转。
* 支持创建[显隐动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，让标号按照设定的起始状态和效果进行变化。
* 支持创建[生长动画](../Features/TechDocument/Plotting/AnimationManager.html)，在指定的时间内，让线面标号按照设定的比例进行生长。

**性能与稳定性**

* 大幅提升UDB和Oracle数据投影转换为新数据集操作的性能。
* 提升打开大体积UDB数据源的性能。
* 对影响桌面性能的内存泄露问题进行了排查及处理，有效提升了桌面的稳定性。
* 对影响桌面性能的GDI泄露问题进行了排查及处理，有效提升了桌面的稳定性。

**示范数据**

* 对世界地图、中国地图进行了修订。
* 新增重庆市三维晕渲图。
* 新增用于展示二维标绘、三维标绘的标绘地图/场景，并提供对应的动态推演脚本文件。
* 新增不同比例尺的4D地图，即：DOM（数字正射影像图）、DEM（数字高程模型）、DRG（数字栅格地图）、DLG（数字线划地图）。
* 新增EPS示例数据。
* 新增土地利用、降水量分布、中国人口与经济分布等类型的专题地图。

**用户界面**

* 在此版本中，桌面采用了新的界面库，界面风格更加清新，对Ribbon上的部分选项卡功能进行了调整，逐步切合用户的使用习惯，方便用户使用。 
* 添加快速访问工具栏，实现对地图或布局的保存、漫游、放大、缩小等快速操作。

