---
id: LayerTemplate
title: Use Layer Properties Template
---
A layer properties template is an xml file essentially that records the information set including layer properties, styles, sizes, and so on.

SuperMap supports loading layer templates for layer settings. You can save your layer settings as a new template for further use.

### Load layer properties template

  * **Function Entrance** : Right-click your layer in the **Layer Manager** and select **Layer Property Template** > **Load...**. 
  * In the popup **Load Template** dialog box select the template (*.xml file), click the **Open** button in the dialog box to apply layer property information to the current layer.
  * After loading the layer property template, the application will set the same layer properties as the template layer to the same value as the the template layer.

### Notes

  * After loading layer property template, the layer caption will not change.
  * If the dataset corresponding to the current layer is not consistent with the dataset in the property template, the property settings related to dataset fields will not take effect, the dataset field needs to be specified again, such as display filter condition, object display order field, layer association attribute table, etc. 

### Output layer properties template

Describes how to save the current layer properties as a template file, which is convenient to apply this information to other layers.

**Function Entrance**

  * Right-click on your layer and select **Layer Property Template** > **Export...**

