﻿---
id: AboutCreateGeometry
title: Object Drawing Overview
---
The most common geometry objects in map drawing are points, lines, regions and
texts. The "Object Operations" tab provides the functionalities for creating
geometry object on map, including drawing point, drawing line, drawing region
and drawing text.

All the drawing of the object is performed on a editable layer, you can set
several layers as editable, but when creating point, line, region or text
objects, the objects will be drew on the selected layer. So if you want to
create new object on a layer, it is needed to click the layer in the layer
manager and set it as the current layer.

The concepts of object drawing are introduced below:

### Object overview

Object: Geometry object is an abstract representing of the discrete spatial
entities in GIS. An object has its own attribute and action. You can create
objects in SuperMap directly or by converting.

* Single Object: A simple object, complex object, subobject is called a single object.
* part: Part is the unit composing a simple object or a complex object. A simple object consists of one part, i.e., the simple object itself; a complex object consists of two or more parts. 
* Simple object: An object that has only one part.
* A complex object is an object with two or more parts of the same type.
* Compound Object: The object created by compound computing in CAD layer. It has no concept of parts. 
* Parameterized Object: Draw geometric objects through the main parameters, and it is continuous. 

### The angles in object drawing.

* Angle direction: The angle direction in the application are all anti-clockwise direction.
* Start angle: The start angle of the drawing object is an angle between starting edge (true north) and another edge.

### Draw by Parameters

This function allows you to draw new objects by setting their key parameters, e.g. coordinates, length, and angles. Select Object Operation -> Object Drawing -> Draw by Parameters; you can also access this function by pressing Shift+P.

* Input Coordinates: Draw points, lines, polylines, curves, circles, polygons, etc. by inputting the coordinates for their starting/middle/turn-of-direction/ending nodes. 
* Input Length: Draw lines, polylines, polygons, circles, arcs, etc. by inputting the lengths of their segment lengths, side width, radius, etc. 
* Input Angle: Draw objects by inputting the values of the starting and ending angles. 

### About the Shift key

Using the Shift key when drawing some objects can make the operation more convenient.

* Drawing line: When drawing line by inputting length and angle, press the Shift key can only drawing horizontal, vertical or 45° line.
* Drawing rectangle (rounded rectangle): When drawing rectangle by inputting width, height, press the Shift key will get a square.
* Drawing ellipse: When drawing ellipse by inputting the width and height of the bounding box, press the Shift key will get a circle.

### Use A on your keyboard

When you are in the process of drawing an object, you can press A to switch the status of your mouse to "Pan".

To switch the status of operation back to drawing, you can use any of the following methods:

* Press A again;
* Right-click your mouse;
* Press ESC. 

### Note

* If you are in the process of inputting parameters for drawing objects, you are not able to switch the mouse status to "Pan" by pressing A.
* The default range for opening an empty map (geographic coordinate system) is a drawn range

