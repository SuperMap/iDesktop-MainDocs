---
id: GridUniqueValuesMapGroupDia
title: Modifying Grid Unique Values Maps
---
### Introduction

The Grid Unique Values Map Manager, also called the group dialog box for the
Grid Unique Values group allows you to change the settings of a grid unique
values map for more favorable effects.

### Attribute Panel

Below is the Grid Unique Values Map Manager for the grid layer-based unique values map.

1. Color Ramp: The range of colors you want to apply to the group of thematic values.
  * Apply the range of colors defined by a color ramp to the thematic values by selecting the color ramp from the Color Ramp drop-down list.
2. Visible: The Visible button on the toolbar in the Grid Unique Values Map Manager or the icon ![](img/seebutton.png) next to the thematic value item in the thematic values list lets you control the visibility of the selected items in the thematic values list.
  * Click the Visible button to show or hide the cells with the selected thematic values.
  * Click the Visible button to show or hide the cells with the selected thematic values.
3. You can also click the icon in the thematic values list to control the visibility of the objects with the corresponding thematic value.Style: The Style button on the toolbar in the Grid Unique Values Map Manager lets you set the color to fill the cells with the selected items. You can also open the color panel to set the fill color by selecting an item and clicking the corresponding style icon in the thematic values list. In the color panel, you can directly select a color or click More Colors at the bottom to define one.
4. **Add and Delete:**
  * The Add button is used to add an item to the thematic values list. Type a value in the combo box to the left and click the Add button to add the specified value to the thematic values list. The newly added item is displayed in the thematic values list. 
  * The Delete button is used to delete the selected items in the thematic values list. Select the items you want to delete in the thematic values list and click the Delete button to remove all the selected items. The objects with the thematic values you have deleted will be rendered in default style. To add an item you have deleted again to the thematic values list, click the drop-down arrow next to, select the item and click to add the item to the list.
5. Value: Display the thematic value of the selected item. You can edit the values directly, and it is valid only when selecting a thematic map. If the modified unique value exist, the settings are unavailable. 
6. Label: The label for the thematic value, as shown in the blue box in the figure above. To set a label editable, select an item and click its label.
7. When changing the settings in the Unique Values Map Manager, all changes for the thematic map are instantly shown on the map. To prevent instant refresh, uncheck the Enable instant refresh box. If the thematic map is not instantly refreshed during the modification, click Apply at the bottom of the 3D Ranges Map Manager to apply all changes to the thematic map when the modification is done. 

###  Advanced Panel

Advanced Panel provides the parameters of the special values and special
values style. You can also set the transparent of the special values.

* **Special Values** : The text box is used to input a grid value. Users should set the display effects for some grid pixels.
* **Special Values Style** : Used to set the display color of the specified grids. Click the contex menu of the Special Styles. Select a color, then the grid value pixel will be this color.
* **Special Values Transparet** : The checking box is used to set whether the specified grid value is transparent. 

### Note

1. You can save a thematic map you have created as a template for reuse. Please refer to [Save to Thematic Map Template Library](../Methods/DTv2_LoadStyleThemeTempl).
2. After saving to the template library, the template will be displayed in the Templates drop-down list in the Graph on the Thematic Mapping tab and you can apply it to other thematic maps.
