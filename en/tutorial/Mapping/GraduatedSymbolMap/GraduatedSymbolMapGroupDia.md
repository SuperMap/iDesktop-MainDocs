---
id: GraduatedSymbolMapGroupDia
title: Modifying Graduated Symbols Maps
---
### Description

The Graduated Symbols Map Manager, also called the group dialog box for the
Label group allows you to change the settings of a graduated symbols map for
more favorable effects.

### Basic Steps

1. Select a graduated symbols map in the Layer Manager and double click to display the Graduated Symbols Map Manager displaying the properties of the map.
2. Thematic Map Layer: Display the current thematic map name.
3. Expression: The thematic variable is used for creating the graduated symbols map. It can be a field or a field expression. 
  * All fields of the vector dataset referenced by the vector layer are listed in the Expression drop-down list.
  * You can directly click a field or click Expression... to display the [SQL Expression](../../Query/SQLQueryDia) dialog box, in which you can compose a thematic variable with the operators, functions and fields provided.

**Note** : For Oracle, Plus, SQL Plus data, currently the supported field
expression is field values, e.g. SmID or SmID+1. The conditional expression is
not supported, e.g. SmID>100\. In this case, thematic mapping will be failed.

4. Graduate Size By: The method with which to graduate size. 
  * Constant: Graduates by the attribute value.
  * Square Root: Graduates the symbol by the square root of the attribute value.
  * Logarithm: Graduates the symbol by the logarithm of the attribute value.
5. Fiducial Value: The attribute value the default size of the specified symbol represents. The other sizes will be calculated with the specified method based on this value. The greater the value, the smaller the graduated symbols. The fiducial value has the same range with the thematic variable. 
  * You can directly type the value in the box or change the value by clicking the up and down arrows to the right.
6. **Symbol Style Settings** : Set symbol styles for positive values, 0, and negative values. To set symbol style for 0 and negative values, you must check the boxes before Show Zero and Show Negative first. The symbols styles for the positive values, 0, and negative values are independent to each other. 
  * **Positive** : Set symbol style for positive values. Click the button to the right, set the symbol style for positive values in the [dialog box for Marker Symbol Style Settings](../../Visualization/LayerStyle/ResourcesManager).
  * Show Zero: Check the box to show symbols for 0s and render the symbols with the specified style. Click the button to the right, set the symbol style for 0 in the [dialog box for Marker Symbol Style Settings](../../Visualization/LayerStyle/ResourcesManager).
  * Show Negative: Check the box to show symbols for negative values and render the symbols with the specified style. Click the button to the right, set the symbol style for negative values in the [dialog box for Marker Symbol Style Settings](../../Visualization/LayerStyle/ResourcesManager).
  * Flow Display: Check the box to display labels in floating mode. If checked, the labels move with the map window for optimal effects. When you opened the flow display, please don't use the partly refreshing function, or the display won't be correct.
7. **Offset Settings:**
  * Offset Unit: Set the unit with which the offsets will be measured. The graph symbol offset distance can be measured in map units or 0.1 millimeters.
  * Offset X: The horizontal label offset. You can directly type in a value or select a numeric field from the drop-down list.
  * Offset Y: The vertical label offset. You can directly type in a value or select a numeric field from the drop-down list.
  * Leader Lines: Check the box to show lines connecting the graduated symbols and the objects if the graduated symbols are placed away from the objects. You can set the styles for the leader lines through the Style Settings dialog box that shows up by clicking the Line Style button to the right. To know how to set line styles, please refer to [Line Symbol Style Settings](../../Visualization/LayerStyle/LineSymStyle).
8. When changing the settings in the Graduated Symbols Map Manager, all changes for the thematic map are instantly shown on the map. To prevent instant refresh, uncheck the Enable instant refresh box. If the thematic map is not instantly refreshed during the modification, click Apply at the bottom of the 3D Ranges Map Manager to apply all changes to the thematic map when the modification is done. 

### Note

1. You can save a thematic map you have created as a template for reuse. Please refer to [Save to Thematic Map Template Library](../Methods/DTv2_LoadStyleThemeTempl).
2. After saving to the template library, the template will be displayed in the Templates drop-down list in the Graph on the Thematic Mapping tab and you can apply it to other thematic maps.

