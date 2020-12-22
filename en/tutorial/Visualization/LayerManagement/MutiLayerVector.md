---
id: MutiLayerVector
title: Layer Control for Multiple Vector Layers
---  


In the layer list, if you have multiple vector layers selected, the following settings are allowed in the setting area.
  
  * **Visible**

Control the visibility of the layers. Check the box to make the layers visible and uncheck to make them invisible.

Selectable, Editable and Snappable options will not be available any more if you uncheck Selectable.

  * **Selectable**

Control whether an object can be selected. Check the box to make objects in the layer selectable.

  * **Editable**

Control whether an object can be edit. After checking the box, you can edit objects in the corresponding layer. 

If there is only one layer selected, the check box before Editable is in the reserved status, indicating the original status is retained. If there are multiple layers selected, you are allowed to perform uniform settings for the edit of all selected layers. Check the box to make all selected layers editable and uncheck to make all of them not editable.

For more information about multi-layer editing, please refer to [Enabling Multi-layer Editing](../../DataProcessing/Objects/EditObjects/MultiLayerEditSet.htm).

  * **Snappable**

Control the snappability of the layers.

  * **Transparency**

Set the transparency of the layer. The transparency ranges from 0 to 100, with 0 indicating opaque and 100 indicating transparent.

  * **Max Visible Scale**

Set the maximum visible scale for the current layer. Type the value in the text box to the right, 1:100000 for instance. If you zoom in beyond this scale, the layer will not be visible. The default value is 1:0, indicating the max visible scale is not set for the layers.

  * **Min Visible Scale**

Set the minimum visible scale for the current layer. Type the value in the text box to the right, 1:500000 for instance. If you zoom out beyond this scale, the layer will not be visible. The default value is 1:0, indicating the min visible scale is not set for the layers.

  * **Complete Line**

Control whether the line symbols of line objects will be completely displayed. Line objects include line objects in line layers and region boundaries in region layers. If the line length is less than a unit of the cycle length of the line symbol or is not the integer multiple of the line symbol, the lack part will not be displayed. Check to box to display the complete line symbol, optimizing the display effects.

For more information about displaying the complete line, please refer to [Showing Complete Line Symbols](../AdvanceSetting/Linedisplay.htm).

  * **Scale Symbol**

Display/Set whether symbols, including marker symbols and line symbols, in the selected layers will zoom with the layer. This function is not applicable to all types of thematic map layers.

  * **Optimize Cross**

This function is valid when selected multiple line layers. Set whether the line layers user the crossroads optimization. It is applicable to the line layers and network layer. Please refer to [Start Crossroads Optimization](../AdvanceSetting/RoadCross.htm).

  * **Antialiasing**

This function is used to reduce zig zag effect, optimizing map display. Antialiasing takes effect when both map antialiasing and layer antialiasing are turned on. For map antialiasing, please refer to [Map Display Optimization](../../Optimization/MapOptimization/MapOptimization.htm#1).

  * **Show Overlay**

The function is used to control whether to display overlaid objects or not. Show Overlay option in Map Properties dialog box should be checked together if you want to display overlaid objects. For detailed overlay settings, please refer to [Overlay Settings](../../Optimization/MapOptimization/OverlaySetting.htm).

  * **Min Object Size (Millimeter)**

Set the min size of the selected layer object. You can input the number on the right textbox. The unit is in millimeter. When zooming in or zooming out the current map, the larger value between the width and height of the external rectangle of any geometric object in this layer is less than this value. So the geometric object is invisible. When selecting the point layer, this setting is invalid.

### ![](../../img/seealso.png)Related Topics

![](../../img/smalltitle.png)[Layer Control](LayerControl.htm)

![](../../img/smalltitle.png)[Layer Control for One Vector Layer](SingleLayerVector.htm)