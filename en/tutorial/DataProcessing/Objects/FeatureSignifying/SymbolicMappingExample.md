---
id: SymbolicMappingExample
title: Symbolic mapping examples
---
### ![](../../../img/read.gif)Introduction

This topic document is mainly based on the pre-defined national census geographic template as an example, and describes how to use symbolic template for mapping. The template is based on the National Census geographic work standards "GDPJ 03-2013 National Geographic census data requirements and collection requirements", which defines the various elements of the data set name, the type of data collection, display style and some attributes, and so on.

### ![](../../../img/read.gif)Basic Steps

1. In the "Drawing" group of "Object Operations" tab, click the "Symbolic Mapping", and then the "Symbolic Mapping" function interface pops up on the right side of the workspace.
2. In the "Management Template" of "Symbolic Mapping" function interface, select the "National Geography" template, and the list lists all the element types of "Surface Coverage", "National Conditions".
3. Click to select a specific feature, and you can start drawing the feature object in the map. When you start drawing an object, the dataset layer of the feature type opens the editable state.

   * If you select the drawing element "greenhouse", the mouse is to draw the polygon feature state, the default drawing is for any polygon, and click the right mouse button to end the current drawing operation. Pop-up "feature attributes" window, and the system automatically fill the basic information of the elements, and other attributes need to be added manually by the user.
   * Select to draw the element of "country road", the mouse is to be in a state of drawing the line element, and the default draw mode is for the polyline. When the drawing is completed, the system automatically fill the basic information of the elements, and other attribute information in the "feature" window is manually input.
   * Drawing the element of "administrative village", the mouse is to be in a state of drawing the point element, and drawing process is the same as the polygon elements and line elements.
   * Supports searching for elements to be drawn, and you can lacate specified elements when elements is too much; such as in the search box, when you enter the "administrative village", you can automatically lacate the corresponding elements.
4. In the use of the template drawing process, it supports calling other object drawing tools of the desktop, as follows:
   * Supports switching mode, for example, when you draw a roof object, you can use polygons, orthogonal polygons, rectangles and other drawing methods; when you draw line elements, you can switch the value of straight lines, curves, arc, etc. for drawing. That is, when you switch the object drawing type in the "object drawing" group, after that you can move to the map window to continue to draw.
   * Supports the selection of drawing settings tools, such as: auto-connect line, auto-split line, auto-close line, and other tools to help users automatically complete the processing of some elements of the object in the drawing process, and then reduce the late editing and data processing operations. Please refer to the detailed drawing method [Create object](..\\CreateObjects\\CreateGeometry.htm).

### ![](../../../img/seealso.png) Related Topics

![](../../../img/smalltitle.png) [Symbolic mapping attribute editing](SymbolicMappingPropertySettings.htm)

![](../../../img/smalltitle.png) [Symbolic mapping overview](SymbolicDrawing.htm)