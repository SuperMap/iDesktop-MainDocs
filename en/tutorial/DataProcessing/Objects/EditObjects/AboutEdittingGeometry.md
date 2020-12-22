---
id: AboutEdittingGeometry
title: Object Editing Overview
---
Object editing is a common operation, for example, when we are drawing the map 
of China, it is needed to merge the islands in the South China See as a 
complex object. Or when processing the land changing, using the part changing 
functionality to update the land border.  provides 28 editing functions.

This document compares the similar object editing.

### Group and union

  * Union applies to region layer, and CAD layer (object of the same type), group applies to line layer, region layer, text layer and CAD layer.
  * Union can only applies to the object of the same type to create complex object, but group can apply to different type of object to create compound object.
  * The source object in the union operation is dissolved as a sample or complex object; but the source object in the group operation is group to a block and become a compound object, and not dissolved. 
  * Union can't operate point objects, but group can.
  * In the union computing, non-system field and field SmUserID is processed in multiple methods (retain the first, null, sum and agerage); In the group, non-system field SmUserID will retain the attribute value of the SmID field of the source object.

### Offset and move

  * Move applies to all geometry object; offset applies to simple object and complex object that contains sub object and does not applies to the compound object in CAD layers.
  * The move operation will not create new object and only change the location of the object: but offset will create new object parallel to the source object.

### Ungroup and explode

  * Ungroup applies to line layer, region layer, text layer, CAD layer, explode applies to line layer and CAD layer.
  * The ungroup operation applies to complex object or compound object, and explode only applies to line objects.
  * Ungroup decompose the complex object of compound object to single object, but explode blow away the line object at the node to create simple object.

### XOR and Doughnut/Island Polygon

  * XOR operation deletes the common part of two object and union the remain parts; Doughnut/Island Polygon is determined by the parity of the intersection parts.

As demonstrated in the figure below:

Editing operation |The primitive object | Operation result  
--|--|--
XOR | ![](img-en/Origin.png) | ![](img-en/XorOP.png) 
-- | Three simple objects. | The complex object of two sub-objects.  
Doughnut/Island Polygon | ![](img-en/Origin.png) | ![](img-en/HoleOP.png) 
--| Three simple objects. | The complex object of three sub-objects.  
  

