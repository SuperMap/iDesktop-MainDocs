---
id: Clipboard
title: Basic Editing Operations
---
The Object Operations group on the Object Operations tab provides a series of features to edit geometrical objects. To edit a geometric object in a layer, you need to enable the layer editable.

* Paste: Paste the contents in the clipboard to the current editable layer.

Set the current layer editable, and then click the Paste button or use the Ctrl + V shortcut to paste the geometric objects in the clipboard to the layer and append the attributes of the objects to the dataset referenced by the layer. 

You can paste a geometric object to a dataset which supports the object. The following content introduces what kinds of datasets support points, lines, and regions separately.

* You can paste a point object to a point or CAD dataset, or a layout. 
* Lines can be pasted to a point, line, region or CAD dataset or a layer window. Their vertices will be converted to points when they are pasted to a point dataset. Non-direct lines will be converted to regions when they are pasted to a region dataset; if the lines are not closed, they will be extended to be closed by connecting the starting and ending node, and changed to regions. 
* Regions can be pasted to lines, regions, CAD datasets and layout windows. When they are pasted to a line dataset, the outlines of the region features will be converted to line features. 

<table class="normaltable" width="85%">
<thead bgcolor="#6B82B2">
<tr class="normaltableTitle">
<td rowspan="2" width="15%"><div align="center"><strong>Object to Copy </strong></div></td>
<td colspan="6" width="85%"><div align="center"><strong>Dataset Types to Paste the Object to </strong></div></td>
</tr>
<tr class="normaltableTitle" >
<td><div align="center"><strong>Point</strong></div></td>
<td><div align="center"><strong>Line</strong></div></td>
<td><div align="center"><strong>Region</strong></div></td>
<td><div align="center"><strong>Text</strong></div></td>
<td><div align="center"><strong>CAD </strong></div></td>
<td><div align="center"><strong>Layout</strong></div></td>
</tr>
</thead>
<tr class="normaltablecontent1">
<td><div align="center">Point</td>
<td><div align="center">Supported</td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
</tr>
<tr class="normaltablecontent2">
<td><div align="center">Line</td>
<td><div align="center">Supported</td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
</tr>
<tr class="normaltablecontent1">
<td><div align="center">Region</td>
<td><div align="center">Not supported</td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
</tr>
<tr class="normaltablecontent2">
<td><div align="center">Text</td>
<td><div align="center">Not supported</td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Not supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
<td><div align="center">Supported</div></td>
</tr>
</table>

* **Cut** : Cut the selected geometric objects to the clipboard. 

Set the current layer editable, select one or several geometric objects in the layer using the Shift key, and then click the Cut button or use the Ctrl + X shortcut to cut the selected geometric objects to the clipboard.

* **Copy** : Copy the selected geometric objects to the clipboard. 

Set the current layer editable, select one or several geometric objects in the layer using the Shift key, and then click the Copy button or use the Ctrl + C shortcut to copy the selected geometric objects to the clipboard.

* Multi-layer Editing: Manage the layers' editing status. See [Set Multi-Layer Editing](MultiLayerEditSet).
* Undo: Cancel the last operation. 

Set the current layer editable, and then click the Undo button or use the Ctrl + Z shortcut to cancel the last operation.

The Undo button is only active after editing operations.

* Redo: Do the last operation again. 

Set the current layer editable, and then click the Redo button or use the Ctrl + Y shortcut to restore the operation that has been undone.

The Redo button is only active after the undo operation.

* Style Brush: Copy the style of one object to another. See [Style Brush](StyleBrush).
* Attribute Brush: Assign the editable fields of one object to another. See [Attribute Brush](PropertyBrush).

