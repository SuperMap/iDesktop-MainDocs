---
id: StyleBrush
title: Style Brush
---
Assign the style of one object to other objects.

### ![](../../../img/read.gif)Instructions

  * The style brush function applies to CAD layers and text layers. 
  * By clicking the Style Brush button once, you can apply styles to multiple objects repeatedly.
  * Select multiple geometric objects of the same type at a time and click the Style Brush button, then the style brush will remember the style (base style) of the object whose SmID is the smallest. The following selected objects will be applied with this object style. 
  * Select multiple geometric objects of different types at a time and click the Style Brush button, then the style brush will remember the style of object whose SmID are the smallest for each type. During the style assignment, the base style will automatically be assigned to others matching the object type, i.e. point object style can only be applied to point objects instead of line objects, region objects, text objects, etc. Likewise, line, region and text object styles can only be applied to other line, region and text objects. 
  * The style brush function supports cross-layer application, i.e. the base style can be applied to objects in other layers in current map window. 
  * If the object is not easy to be selected, you'd better use the style brush.

### ![](../../../img/read.gif)Basic Steps

  1. In an editable layer, select an object as the base style.
  2. In the **Object Operations** group on the **Object Operations** tab, click ![](img/StyleBrushIco.png) button, at this point the style brush to record the selected object style, that is, record the benchmark style. 
  3. On the current map window, click on an object that you want to be given a baseline style, or select multiple objects.
  4. If you want to give this style to more objects, continue to click or box to give the style of the object can be given.
  5. To end the operation, please press ESC key or right click the mouse. 