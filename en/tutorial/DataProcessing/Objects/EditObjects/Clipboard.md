---
id: Clipboard
title: Basic Editing Operations
---
The Object Operations group on the Object Operations tab for the map window provides commands for editing geometric objects on maps. To edit the geometric objects in a layer, you need to set the layer editable first.

  * Paste: Paste the contents in the clipboard to the current editable layer.

Set the current layer editable, and then click the Paste button or use the Ctrl + V shortcut to paste the geometric objects in the clipboard to the layer and append the attributes of the objects to the dataset referenced by the layer.

You are allowed to copy/cut and paste geometric objects between different types of datasets except the point dataset. A geometric object will be converted to match the type of the dataset it is pasted to. Points, lines, and region objects can be pasted to the following datasets:

    * Points can be pasted to a point or CAD dataset, or to a layout window. 
    * Lines can be pasted to a point, line, region or CAD dataset or a layer window. Their vertices will be converted to points when they are pasted to a point dataset. Non-direct lines will be converted to regions when they are pasted to a region dataset; if the lines are not closed, they will be extended to be closed by connecting the starting and ending node, and changed to regions. 
    * Regions can be pasted to lines, regions, CAD datasets and layout windows. When they are pasted to a line dataset, the outlines of the region features will be converted to line features. 

**Object to Copy** |**Dataset Types to Paste the Object to**  
  
---|---  
  
**Point**|**Line**|**Region**|**Text**|**CAD**|**Layout**
Point | Supported | Not supported | Not supported | Not supported | Supported | Supported  
Line | Supported | Supported | Supported | Not supported | Supported | Supported  
Region | Not supported | Supported | Supported |Not supported | Supported | Supported 
Text | Not supported |Not supported|Not supported|Supported|Supported|Supported  
  
  * Cut: Cut the selected geometric objects to the clipboard. 

Set the current layer editable, select one or several geometric objects in the layer using the Shift key, and then click the Cut button or use the Ctrl + X shortcut to cut the selected geometric objects to the clipboard.

  * Copy: Copy the selected geometric objects to the clipboard. 

Set the current layer editable, select one or several geometric objects in the layer using the Shift key, and then click the Copy button or use the Ctrl + C shortcut to copy the selected geometric objects to the clipboard.

  * Delete: Delete the selected objects.
  * Multi-layer Editing: Manage the layers' editing status. See [Set Multi-Layer Editing](MultiLayerEditSet.htm).
  * Undo: Cancel the last operation. 

Set the current layer editable, and then click the Undo button or use the Ctrl + Z shortcut to cancel the last operation.

The Undo button is only active after editing operations.

  * Redo: Do the last operation again. 

Set the current layer editable, and then click the Redo button or use the Ctrl + Y shortcut to restore the operation that has been undone.

The Redo button is only active after the undo operation.

  * Style Brush: Copy the style of one object to another. See [Style Brush](StyleBrush.htm).
  * Attribute Brush: Assign the editable fields of one object to another. See [Attribute Brush](PropertyBrush.htm).


