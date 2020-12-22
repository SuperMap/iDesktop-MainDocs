---
id: AddOnlineMaps
title: 添加在线地图
---
**使用说明**  
　　SuperMap iDesktop支持向场景添加多种在线地图服务，您可以非常便捷地选择某个地图服务作为三维场景的底图。支持的服务包括以下：

  * **天地图** ：由国家测绘局为公众提供权威、可信、统一的地理信息服务，是目前中国区域内数据资源最全的地理信息服务网站。
  * **BingMaps** ：微软必应地图，它作为Bing搜索引擎的一部分而提供的线上地图服务。
  * **OpenStreetMap** ：简称 OSM，是一个可供自由编辑的世界地图。
  * **STK地形** ：即STK World Terrain，是一个高分辨率的、基于网格的全球地形，它使用了多种数据源以适应不同地区和不同精度时的需求。STK地形只添加到球面场景中。
  * **自定义** ：支持自定义输入链接地址来访问地图服务。

**操作步骤**

  1. 新建或打开一个场景窗口后，单击功能区“ **场景** ”选项卡的“ **数据** ”组“ **在线地图** ”按钮，弹出下拉选择项。 
  2. 根据需求点击相应选项，即可加载相应的地图服务。

     - 单击“BingMaps”选项，加载两个屏幕图层和名为BingMaps的图层。

     - 单击“OpenStreetMap”选项，加载一个屏幕图层和名为OpenStreetMaps的图层。

     - 单击“STK地形”选项，加载一个地形图层。

  3. 若需以自定义链接的方式加载，点击“自定义”，弹出“iServer服务图层”对话框。 

自定义方式支持如下三种服务类型：
   - **OGC服务** ：具体操作请见：[打开OGC服务](../iServerService/OpenOGC.md)
   - **iServerRest服务** ：具体操作请见：[打开 iServer 服务图层](../iServerService/ComLy_OpenIServer.md)
  - **MapWorld服务** ：具体操作请见：[打开天地图服务图层](../iServerService/OpenMapWorld.md)

**相关操作：**  
[访问iServer服务](../iServerService/iServerService.md)

