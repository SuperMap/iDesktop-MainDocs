---
id: Pan
title: Panning Maps
---
The Pan function can pan your whole map by dragging. The Pan dropdown button
appears in two parts: the image part and the text part with a drop-down arrow.
You can click the image to directly implement the corresponding action, or the
text to select a specific command from list.

### Pan

Click **Pan** icon directly, or click the dropdown icon and select **Pan**. 
The mouse pointer turns to ![](img/panStatus.png) in the map window.

You can press the A key on your keyboard to switch to pan mode as well.

  * Hold down the left mouse button and drag to move the map with the mouse pointer. When you release the left mouse button, the map will be refreshed.
  * White areas may exist during the pan operation because the map is not instantly refreshed. For each pan operation, the map is refreshed after you release the left mouse button.
  * To instantly refresh the map during the pan operations, please use the Instant Pan command.

### Instant Pan

Click the **Pan** dropdown icon and select **Instant Pan**. The mouse pointer
turns to ![](img/PanRealtimeStatus.png) in the map window.

  * Hold down the left mouse button and drag to move the map with the mouse pointer. The map will be instantly refreshed when you are panning the map. 

### Global Pan

Global Pan refers to the world experience when browsing the world map for the
east and west hemisphere seamless pan, to achieve a plane in the world to
browse the map with the sphere to browse the map of the same experience. When
click Global Pan, and the range of the world map displayed is not limited to
the -180 to +180 longitude, as the mouse moves, it changes.

This feature is mainly used for some special scenes that need to cross the
east and west hemisphere. Such as the design of global navigation or aviation
routes, cross-field measurements of the distance between the eastern and
western hemispheres. Click the Pan drop-down button in the Browse group of the
Map tab and select the Global Pan option to turn on the feature.

Global Pan has some requirements for the map of reference coordinate system. There are currently two types of coordinate systems that support global pan: WGS 1984 and World Mercator.

Table 1: WGS 1984 Geographic Coordinate System **Parameter Name** | **Parameter Value**  
---|---  
Datum | D_WGS_1984  
Spheroid | WGS_1984  
Semi-major Axis | 6378137  
Flattening | 0.00335281066474748  
Table 2: World Mercator Projection Coordinate System **Parameter Name** | **Parameter Value**  
---|---  
Datum | D_WGS_1984  
Spheroid | WGS_1984  
Semi-major Axis | 6378137  
Flattening | 0.00335281066474748  
Geographic Coordinate System | GCS_WGS_1984  
Projection Mode | Mercator  
Central Meridian | 0  
Central Parallel | 0  
Standard Parallel 1 | 0  
Standard Parallel 2 | 0  
Offset X | 0  
Offset Y | 0  
Scale Factor | 0.9996  
Azimuth | 0  
Longitude of Point 1 | 0  
Longitude of Point 2 | 0  
  
