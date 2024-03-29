---
id: what_was_new_in_8C_SP2
title: SuperMap iDesktop 8C SP2 新特性
---
SuperMap iDesktop 8C Service Pack 2 (以下简称SP2)桌面产品在上一版本基础上，新增并优化了地图制图、数据管理、三维场景等模块的相关功能。其中，地图制图模块新增了自定义标签功能、优化调整了符号库；数据管理模块新增了业务表管理、CAD
转模型数据等功能，支持保存和加载数据库数据源的链接信息，同时优化了点加模型数据导入功能；三维场景模块新增了场景卷帘、BOX
裁切等功能，支持多视口空间分析，优化节点动画、KML 图层添加地标模型添加方式，支持设置飞行路线风格、三维管线 X 与 Y
缩放比例，等等。同时，SP2相比上一版本，应用程序的稳定性和产品性能得到了进一步的提升。

**SuperMap iDesktop 8C SP2 包含以下新增功能和优化之处：**

### 数据管理

* 新增[业务表管理](../Features/DataProcessing/DataManagement/ExternalTableManage.htm)功能，可将数据库中创建的表以属性表数据集的形式添加到桌面产品中，应用于 SQL 查询、数据集追加、专题图制作等操作。
* 打开数据库型数据源新增了[保存和加载数据库链接信息](../Features/DataProcessing/DataManagement/OpenDatasource.htm)的功能，可将打开过的数据库信息保存在 *.dcf 文件中，便于用户再次加载使用。
* 新增 CAD 转模型数据集功能，可将 CAD 复合数据集中的模型对象转换为模型数据集。
* 优化点加模型导入功能，导入后的模型数据集会保留点数据集的所有字段信息。

### 地图制图

* 统一风格标签专题图中，标签的字体类型、大小、旋转角度和字体颜色可通过选择属性字段进行设置，实现自定义标签设置，满足不同的标签显示需求。
* 点数据集的单值专题图，符号大小、旋转角度支持选择字段进行设置，实现单值专题图的自定义效果展示。
* 对点、线型、填充符号库进行了优化调整，默认符号库中提供了制作电子地图常用的栅格符号、线型以及填充色，外挂符号库中提供了更丰富的符号、线型、填充资源。
* 新增[同类文本风格](../Features/DataProcessing/Objects/SelectObjects/SameTypeTextStyle.htm)功能，可对同类风格的文本进行批量风格设置，统一替换文本风格。

### 三维场景

* 新增[场景卷帘](../Features/SceneOperation/SceneIneteraction/SwipeTool.htm)功能，即在同一个场景窗口中，将指定的图层卷帘式隐藏，可用于对比不同时期或地上地下的场景。
* 新增[Box裁剪](../Features/SceneOperation/SceneIneteraction/ClipByBox.htm) 功能，根据指定的Box裁剪区域，立体显示Box区域内或者区域外的场景。
* 优化 KML 图层中的地标和模型的添加方式，可在合适位置单击鼠标左键添加地标或模型。
* 优化节点动画功能，支持保存动画的移动轨迹，路径会以线数据的形式保存在 KML 图层中。
* 三维空间分析支持多视口分析，即在多视口模式下，可在不同的视口中进行三维空间分析。
* 支持设置 OSGB 缓存图层的前景色、透明度。
* 支持设置三维管线数据的 X 和 Y 方向上的缩放比例，根据指定的字段值将管线进行缩放显示。
* 场景飞行路线支持设置风格，包括高度模式、线路风格、宽度等。

### 性能优化

* 支持在图层属性中设置是否释放隐藏图层的内存，降低应用程序的内存占用率。
* SP2版本中对影响桌面性能的问题进行了排查及处理，有效提升了桌面的稳定性。

### 用户界面

* SP2版本中对桌面的功能组织方式进行了优化调整，大部分功能图标替换为大图标模式，并对部分功能进行重组，例如将制作各类专题图的功能单独提取为一个选项卡，与制图相关的功能都放在地图选项卡中，逐步切合用户的使用习惯，方便用户使用。



