---
id: TextPropertyDia
title: Properties Window for Text Objects
---  


When the number of selected objects is different, the property window is different.

  * When there is a selected object in the map window, the Property window will pop up by right clicking it. You can view the detailed information of this object.
  * When there are many selected objects in the map window, the Related Attributes Table will pop up by right clicking it. Users can batch set and modify multiple objects in this window.

**Notes:**

  * Only the properties of the objects in the topmost layer will be displayed in the Properties window if you have selected geometric objects from different vector layers.

The properties for text objects are classified into 4 groups: Attribute Info, Spatial Info, Node Info and Text Info. You can click the plus sign next to each of the four nodes and click a child node to view the corresponding group of the text object corresponding to the child node. Each group of the properties are introduced in detail below:

**Attribute Info**

You can click a child node under the Attribute Info node to display the attribute information about the corresponding geometric object.

**Spatial Info**

You can click a child node under the Spatial Info node to display the spatial information about the corresponding text object.

**Basic:**

  * Type: The type of the object.
  * A text objects has no Length, Perimeter and Area.

**Extent:**

  * Top, Bottom, Left and Right: The boundary of the geometric object.

Node Info

A text object has no node information. The x and y coordinates of the text object is displayed.

Text Info

You can click a child node under the Text Info node to display the text information panel, which is mainly used for text style display and settings.

**Basic:**

  * Font: Change the font face. 
  * Font Size: Change the font size. 
  * Alignment: Align the text. 12 options are provided: Top Left, Top Center, Top Right, Left Baseline, Right Baseline, Bottom Left, Bottom Center, Center Left, Center, and Center Right. You can select an alignment mode from the drop-down list. 

For more details about alignment, please refer to [Text Alignment](TextAlignDirection.htm).

  * Height: Change the font height.
  * Width: Change the font width.
  * BackColor: The color of the background of the text object. Click the color button to the right to display the color panel, in which you can directly select a color or click More Colors at the bottom to define one. 
  * ForeColor: The color of the text. Click the color button to the right to display the color panel, in which you can directly select a color or click More Colors at the bottom to define one. 

**Font Effects:** Check the box to add the corresponding effects to the text object.

  * Bold: Make the text bold.
  * Strikeout: Draw a line through the middle of the text.
  * Left/Right Italic: Italicize the text.
  * Underline: Underline the text.
  * Shadow: Add shadow effects to the text.
  * Outline: Add outline effects to the text.
  * Fixed Size: Fix the size of the text objects so that they will not change with map zoom.
  * Transparent: Transparently display the back of the text.

**Rotation:**

  * Rotation: The rotation angle of the text object. If the box Apply to current subobject only is checked, the rotation angle is only applied to the current subobject selected below.

**Subobject:**

  * Current: The current subobject.
  * Text: The text of the current subobject.

**Preview:** Preview the text.