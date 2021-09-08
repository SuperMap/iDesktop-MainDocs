---
id: LayerSnapshot
title: 使用快照图层
---
### ![](../../img/read.gif) 使用说明

快照图层是一种特殊的图层组，快照图层分组中的图层都为地图的一个快照图层。快照图层的绘制方式比较特殊，只在第一次显示时进行绘制，此后浏览地图时，如果地图显示范围未发生变化，快照图层将不会重新绘制，也就是快照图层不随地图刷新而重新绘制；如果地图显示范围发生变化，将自动触发快照图层的刷新绘制。快照图层是提高地图显示性能的方式之一。

由于快照图层是特殊的图层分组，快照图层中可以添加分组图层对象（LayerGroup），但是快照图层中不可以再添加快照图层，并且分组图层对象（LayerGroup对象）中也不可以添加快照图层。

**应用场景**
：配图过程中，有的图层数据量较大，会影响地图的刷新效率，此时，可将刷新频率低、数据量较大，必须显示的图层添加到快照图层中，在不改变地图窗口显示范围的情况下，快照图层分组中的图层将不会刷新，提高了地图的显示的性能。

### ![](../../img/read.gif) 创建快照图层分组操作步骤

  1. 在图层管理器的空白区域中，单击鼠标右键，选择“新建快照图层”选项，即可创建一个快照图层分组。
  2. 选中一个或多个图层，将其移动至快照图层分组中，这些图层即可作为快照图层，地图窗口范围不变的情况下，不刷新快照图层分组下的图层。
