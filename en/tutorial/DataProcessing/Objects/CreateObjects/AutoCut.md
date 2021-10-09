---
id: AutoCut
title: Auto Split Region
---
### Introduction

Auto-Split Region is used to cut the intersection part of the current region object and the other regions when drawing region objects. The new object got may be a single object or a complex region object.

* Auto-Split Region functionality applies to region layer or CAD layer.
* If the new object being drawn intersects with other objects, the overlapped part of the new object will be cut resulting in a new object.
* If the new object crosses an existing region object, the program will generate a complex region object which has child objects. As shown below, the new region object (dotted line rectangle) crosses another region object (filled rectangle), the result will be a complex object that contains 2 subobjects.<br/>
![](img/CutPGN4.png)

### Basic Steps

1. Click **Object Operations** > **Drawing** group > **Drawing Settings** > **Auto-Split Region**. You can also press Shift+R to activate this function. Click on this function again to disable it.
2. Draw a region object in the current editable layer. As shown in figure1, draw a rectangle object (in dotted line).<br/>
![](img/CutPGN1.png)

3. Since the rectangle intersects with other two rectangles, the application splits it resulting in a new object as shown in the following figure.<br/>
![](img/CutPGN2.png)

4. We can hide another two objects, we can see the new object as shown in figure3.<br/>
![](img/CutPGN3.png)

5. To disable the function, uncheck the Auto-Split Region.
