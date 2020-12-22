---
id: Layer2DManager
title: Layer Manager for Maps
---
When the currently active window is a map window, Layer Manager manages all
layers of the map displayed in the map window. Each node in Layer Manager
corresponds to a layer of the map. The node and its corresponding layer share
the same caption.

You can easily control a layer's visibility, editability, selectability and do
style settings, snap settigns, etc for a layer from Layer Manager.

### ![](../img-en/read.gif)Introduction to Map layers

Datasets are displayed in the form of layers. When a dataset is added to a
map, a corresponding layer is created to reference the dataset. Since a layer
in a map is only a reference to a dataset, a dataset can be added to a same or
different map window for several times, that is, a dataset can be referenced
by several layers and displayed in different styles. However, a layer can only
reference one dataset.

Based on the type of dataset a layer references, the types of a layer
includes: point, line, region, text, grid, image, etc.

Depending on how it is drawn, a layer can be either a general layer or a
thematic layer. A general layer is a layer with all its geometric objects
drawn in a uniform style. While a thematic layer is constructed based on a
general layer through thematic mapping and it is drawn in complex drawing
style. Typically, geometric objects can be drawn in various styles in a common
thematic layer.

### ![](../img-en/read.gif)Introduction to Layer Manager

When a map window is activated, layers in the map will be displayed in Layer
Manager.

A context menu is provided for each node in Layer Manager.

Besides, you can use the commands provided on the toolbar to create a new
group, manager layers in Layer Manager and to achieve the function of
hierarchical map. About more information with layer control and layer group,
please refer to [Layer
Group](../Visualization/LayerManagement/LayerGroup.htm), [Layer
Control](../Visualization/LayerManagement/LayerControl.htm).

### ![](../img-en/read.gif)Layer Manager Operation

