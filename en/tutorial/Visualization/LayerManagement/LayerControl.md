---
id: LayerControl
title: Layer Control
---  
Layers include point, line, region, text, grid/image, and thematic map layers and layer group. All layers are displayed in the Layer Manager. You can control all layers with the two features in the **Layer Control** drop-down list.

* **Layer nodes can be dragged** : Click the **Layer Control** drop-down button and check **Layer nodes can be dragged**. You can fix the order of all layers to avoid some misoperation when dragging layers.
* **Layer Control** : Click the **Layer Control** button to open the "Layer Control" dialog box. The dialog box is used for controlling the status of the single or multiple layers in the map window. Layer controlling is implemented through the Layer Control dialog box. The Layer Control dialog box displays the status and properties of each layer in the map window. You are allowed to change the layer status, such as visibility, selectivity, editability, snappability, scale, whether the symbols will zoom with the map, etc., change the layer order, add or remove layers, etc.

The Layer Control dialog box is composed of three parts: the toolbar, the layer list, and the setting area.

* **Toolbar** : You are allowed to add, remove, select all, select inverse layers with tools on the toolbar. Besides, buttons re provided to change the layer order.
* **Layer List** : The layers are listed in order. With the Up, Down, Bring to Front, and Send to Back buttons on the toolbar, you can change the layer order.
* **Setting Area** : For different data types, settings provided in the setting area are different.

### Parametric Description

* **Visible** : the item controls whether a layer is visible.

If you set your layer invisible, you can not select, edit, or snap any object.

* **Selectable** : Control the selectability of your layer. Check the box to your the layer selectable and uncheck to make it unselectable.
* **Editable** : Control the editability of the layer. Check the box to make the layer editable and uncheck to make it ineditable.
* **Snappable** : Control the snappability of the layer. 
* **Layer Name** : Name of the layer, which is used to uniquely identify the layer. It cannot be modified.
* **Caption** : Displays the layer caption. You are allowed to change the layer caption. After changing the layer caption, the caption displayed in the Layer Manager will change accordingly. However, the dataset name in the Workspace Manager will not change.
* **Transparency** : Set the transparency of the layer. The transparency ranges from 0 to 100, with 0 indicating opaque and 100 indicating transparent.
* **Max Visible Scale** : Set the maximum visible scale for the current layer. Type the value in the text box to the right, 1：100000 for instance. If you zoom in beyond this scale, the layer will not be visible. The default value is 1:0, indicating the max visible scale is not set for the layers.
* **Min Visible Scale** : Set the minimum visible scale for the current layer, 1：500000 for instance. If you zoom out beyond this scale, the layer will not be visible. The default value is 1:0, indicating the min visible scale is not set for the layers.
* **Reassign Dataset** : Specify a new associated dataset for the layer. Please refer to [Change Dataset](RespecifyAssociatedData) for more details.

### Vector Parameters

For a vector layer, the dialog box will display parameters for vector layer setting, including complete Line, optimize cross, scale symbol, min object size, filter expression, and so on. For specific parameter description, please refer to [Process Vector Layer](../VisualSetting/Vectorgroup).

### Image Parameters

For an image layer, the dialog box will display parameters for image layer setting, including brightness, contrast, and so on. For specific parameter description, please refer to [Process Image Layer](../VisualSetting/Imagegroup).

### Raster Parameters

For a raster layer, the dialog box will display parameters for raster layer setting, including brightness, interpolation method, and so on. For specific parameter description, please refer to [Process Raster Layer](../VisualSetting/Rastergroup).

### Note

A network dataset to a map window corresponds with two layers including a network node layer and a network layer. A network node layer is similar to a normal point layer. A network layer is similar to a normal line layer.


