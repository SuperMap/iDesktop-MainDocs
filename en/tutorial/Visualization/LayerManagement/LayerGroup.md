---
id: LayerGroup
title: Using Layer Group
---
### Introduction

The Layer Group is used to manage layers in groups and realize the unified
control of layers in the same group. The group layer is one type of layers.
Its main function is to manage layers in a unified way. Meanwhile, group
layers can be embedded in another group layer.

### Basic Steps

Operations such as creation, deletion, property setting, etc. will be
introduced in detail below.

**Create Layer Group**

1. In the tool bar of Layer Manager, click the New Root button, or right click a layer in the Layer Manager, click New Group to create a layer group.
2. Click New Group in the right click menu of a group layer, then a child layer group will be created for the layer group.
3. The new layer group will be given the name LayerGroup by default. Right click the layer group, click Rename or Press F2 to modify the layer group name.

**Add Layer**

1. In the Layer Manager, select one or multiple layers, drag the layer or layers to a layer group, then the layer or layers will be added to the layer group.
2. In the Layer Manager, select one or multiple layer groups, drag the layer group or layer groups to another layer group, then the layer group or layer groups will be added to the specified layer group.

**Layer Properties**

Select one or multiple or layer groups in the Layer Manager, right click and
select Layer Properties, or click the Layer Properties button in the
Properties group on the Map tab to display the Layer Properties panel.

* **Visibility** : In the Layer Properties Panel, visibility of all layers can be set in a unified way. If Visible is checked, all layers in the group will be visible; while if not checked, all layers in the group will not be visible.
* **Layer Name** : Used to display the name of the selected layer group. Layer group name cannot be modified. Layer group name is the unique identification of a layer group in a map.
* **Layer Caption** : The text box on the right is used to display the layer group caption. Layer group caption can be modified. After the modification of the layer caption, the display node of the layer group will be change, however, the layer group name will not change. 
* **Minimum Visible Scale** : The combo box is used to set the minimum visible scales of all layers in the layer group. After setting the minimum visible scale for the layer group, all layers in the layer group will not be visible if the scale of the map is less than the minimum visible scale of the layer group. The minimum visible scale can be set through the integer box on the right, such as 1:500,000, or users can set the current scale as the minimum visible scale. Also, the minimum visible scale can be set through the drop down list. 8 scales from 1:5,000 to 1:1,000,000 can be set from the drop down list. If fixed scales is set for the map, available scales in the drop down list will be fixed scales. 
* **Maximum Visible Scale** : The combo box is used to set the maximum visible scales of all layers in the layer group. After setting the maximum visible scale for the layer group, all layers in the layer group will not be visible if the scale of the map is larger than the maximum visible scale of the layer group. The maximum visible scale can be set through the integer box on the right, such as 1:500,000, or users can set the current scale as the maximum visible scale. Also, the maximum visible scale can be set through the drop down list. 8 scales from 1:5,000 to 1:1,000,000 can be set from the drop down list. If fixed scales is set for the map, available scales in the drop down list will be fixed scales. 

###  Note

* Layer groups in the Layer Manager can be copied, and so multiple layers in several layer groups can be copied.
* Layer Group properties can be set in the place of Layer Control, please refer to [Select Single Layer Group](SingleLayerGroup).


