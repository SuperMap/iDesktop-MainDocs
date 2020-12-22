---
id: LayerSnapshot
title: Using Snapshot Layer
---
### ![](../../img/read.gif) Introduction

A snapshot layer is a special layer group in which a layer corresponds to a snapshot layer of the map. The snapshot layer are drawn, in a special way, only when displayed at the 1st time. When browsed next time, if the map range has not changed, the snapshot layer will not be redrawn, that is, the snapshot layer will not be redrawn with map refresh. However, if the map range changes, the refresh and redraw operation will be triggered automatically. Snapshot layers can improve the performance of the map display.

Because the snapshot layer is a special layer group. You can add a layer group object (LayerGroup) to the snapshot layer, but a snapshot layer can not be added to a snapshot layer or a LayerGroup object.

Application scenario: In the process of mapping, the data amount of some layer is large and this will affect the refresh efficiency of the map. You can choose to add layers that must display with large data amount and low refresh frequency to the snapshot layer. When the display range of the map does not change, the layers in the snapshot layer group will not be refreshed, improving the performance of the map display.

### ![](../../img/read.gif) Steps for Creating Snapshot Layer

  1. In the blank area of Layer Manager, right click and click Create Snapshot Layer to create a snapshot layer group.
  2. Select one or more layers, and move the layers to the snapshot layer group. When the display range of the map does not change, the layers in the snapshot layer group will not be refreshed