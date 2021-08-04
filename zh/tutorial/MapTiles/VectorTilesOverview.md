---
id: VectorTilesOverview
title: 矢量瓦片概述
---
地图瓦片技术是在线地图服务常用的瓦片技术，瓦片就是地图瓦片的具体存储形态，提前切好的瓦片可以大大提高在线地图的访问效率。SuperMap iDeaktop
提供的瓦片类型包括： 传统的栅格瓦片和矢量瓦片。

  * **栅格瓦片** ：以图片为介质的栅格瓦片使得在线地图得以迅速普及，优势在于显示效率高、方便传输。但是，随着地图的移动化和应用的逐渐深入，栅格瓦片占用带宽和存储都较大，不利于地图在移动设备的应用。
  * **矢量瓦片** ：矢量瓦片产生弥补了栅格瓦片的不足。矢量瓦片数据以矢量形式存在。矢量瓦片体积小，可高度压缩，占用的存储空间比栅格瓦片要小上千倍。数据传输体量小，地图更新的代价小。
  * 在线地图服务应用中，栅格瓦片主要用作地图服务中的底图；矢量瓦片，常用于存储用于查询、变更频繁的矢量图层。矢量瓦片实用性体现在，其体积更小，客户端渲染更快、更灵活、更新更方便；因此更适合于地图中对时效性要求较高的地物要素的表达，如POI信息、路线信息等。常见的在线地图服务，如 Google Maps、百度地图等，都是采用了栅格瓦片做底图，叠加矢量瓦片的做法。

桌面产品支持将矢量地图生成遵循 MapBox MVT 规范的矢量瓦片，瓦片数据包含要素的几何形状与属性信息，而要素的风格样式由 MapBox
标准样式文件（style.json）描述。矢量瓦片相比栅格瓦片具有无级缩放，风格修改，数据量相对较小的优势，能更好满足灵活多样的 Web
地图应用。在矢量瓦片章节包含以下内容：

### ![](../img/read.gif) 内容提要：

![](img/smalltitle.png)[ 矢量瓦片风格](VectorTiles.html#1)

![](img/smalltitle.png)[ 生成矢量瓦片](VectorTiles.html#2)

![](img/smalltitle.png)[ 矢量瓦片目录](VectorTiles.html#3)

![](img/smalltitle.png)[ 矢量瓦片显示](BrowseVectorTiles.html)

![](img/smalltitle.png)[ 修改瓦片风格](ModifyVectorTiles.html)

![](img/smalltitle.png)[ 制图最佳实践](VectorTilesNotice.html)

![](img/smalltitle.png)[ 矢量瓦片常见问题解答](VectorTilesFAQ.html)

* * *

[](http://www.supermap.com)  
  
---

