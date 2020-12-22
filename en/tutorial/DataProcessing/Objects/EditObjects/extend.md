---
id: extend
title: Extend
---
Extend two or more lines to touch another line.

### ![](../../../img/read.gif)Instructions

  * In an editable layer, extend the selected line object (or the line object of the CAD layer) to a specified object (baseline).
  * To select the extending object, click a position on the target object that close to the baseline. 
  * In extending mode, if a line object has been selected as a baseline, you can only make other line objects extend to the baseline.
  * The extending operation works for line objects that will intersect with the base line after extending. No operation would be performed for line objects that will not intersect with the base line after extending. 
  * In the line layer, a base line could be any type of line object, such as the straight line, parallel line, circle, etc, as well as the complex line objects. The line to be extended could be any open simple line object, such as the straight line, polyline, arc, multi-segment line, etc. Be noted that the parallel lines are complex objects with two sub objects.
  * In the CAD layer, both baseline and the extending line must be line type objects. Object types can be examined through the spatial information in the object attribute. 

### ![](../../../img/read.gif)Basic Steps

  1. In the **Object Editing** group on the **Edit Operations** tab, click **Extend** button, at this time the map window prompts: Please select the baseline.
  2. Select a line object as a baseline, the map window will prompt: Click the line to be extended.
  3. Click the line object to be extended, and be sure to select a position on the line object that close to the baseline; the endpoint that near the baseline will be extended to the baseline automatically by the application. If you click the endpoint that away from the baseline, it will not be extended.
  4. If other line objects need to be extended to the baseline, continue to click the line object to be extended.
  5. To end this operation, please press the ESC key. 

Or do the followings:

Right click to end the operation.

![](img-en/extend1.png) | ![](img-en/extend2.png)  
---|---  
Before extending | After extending  

### ![](../../../img/note.png)Note

If the line you want to extend doesn't intersect with the base line, this line isn't allowed to extend.