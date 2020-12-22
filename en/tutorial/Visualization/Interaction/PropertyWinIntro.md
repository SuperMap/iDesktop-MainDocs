---
id: PropertyWinIntro
title: Properties Window for Objects in Vector Datasets
---  


When the number of selected objects is different, the property window is different.

  * When there is a selected object in the map window, the Property window will pop up by right clicking it. You can view the detailed information of this object.
  * When there are many selected objects in the map window, the Related Attributes Table will pop up by right clicking it. Users can batch set and modify multiple objects in this window.

**Notes:**

  * Only the properties of the objects in the topmost layer will be displayed in the Properties window if you have selected geometric objects from different vector layers.

The properties for geometric objects in vector layers are classified into 4 groups: Attribute Info, Spatial Info and Node Info. You can click the plus sign next to each of the three nodes and click a child node to view the corresponding group of the geometric object corresponding to the child node. Each group of the properties are introduced in detail below:

![](img-en/close.gif)Attribute Info

  1. You can click a child node under the Attribute Info node to display the property information about the corresponding geometric object. 
  * Hide system fields: Hide all system fields. 
  * Hide details: Hide all other fields except the Alias and Value fields. 

![](img-en/close.gif)Spatial Info

  1. You can click a child node under the Spatial Info node to display the spatial information about the corresponding geometric object.
  * **Basic:**

  * Type: The type of the object.
  * Length: The length of the line object.
  * Perimeter: The perimeter of the region object.
  * Area: The area of the region object.
  * **Extent:**

  * Top, Bottom, Left and Right: The boundary of the geometric object.

![](img-en/close.gif)Node Info

  1. You can click a child node under the Node Info node to display the node information about the corresponding geometric object.

Note: A text object has no node information. For the parameterized objects, it doesn't support to view the node information in the property window.
  * **Object:**

  * Total Subobjects: The total number of subobjects composing the object.
  * Current: The current subobject. All subobjects of the object are listed in the drop-down list for you to choose. The coordinates of all vertices of the selected subobject are listed in the table to the right.
  * Type: The type of the object.
  * Total Vertices: The total number of the nodes of the object.
  * **Vertices:**

Each vertex of the selected subobject corresponds to an item in the Vertices list table.

If the layer containing the selected subobject is editable, you are allowed to add, insert and delete vertices for the subobject.

  * Insert: Insert a vertex below the selected vertex, or black cross. The default coordinates of the newly added vertex are identical to those of the previously selected one. 
  * Delete: Delete the selected vertices. The Delete button is only active If the number of vertices in the list box is greater than the number of the subobject's control vertices. A line has 2 control vertices and a region has 3.

Click Restore to drop the changes to the vertices.

Click Apply to accept the changes.