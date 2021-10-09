---
id: PropertiesDia
title: The Properties tab
---
The Properties tab allows you to set the styles of the graph map. The changes
to the map will be instantly shown on the map.

1. Color Ramp: The range of colors you want to apply to the set of thematic variables. If you have specified a color ramp, the graph components for different thematic variables are rendered with the range of colors.
2. Graph Type: The types provided include Line, Point, Bar, 3D Bar, Pie, 3D Pie, Rose, 3D Rose, Stacked Bar, 3D Stacked Bar, and Ring. You can select a type from the list.
3. Graduate Size By: The method with which to decide the size and the portions of each thematic variable value. Three options are provided: Constant, Logarithm, and Square Root. For fields with negative values, only the Constant method can be used. 
* Constant: Graduates by the attribute value.
* Logarithm: Graduates by the logarithm of the attribute value.
* Square Root: Graduates by the square root of the attribute value.
4. Add and Remove: You can add or remove thematic variables from the list by clicking the Add icon and the Delete icon provided on the toolbar above the list. If you change the thematic variable, the thematic map will be instantly reconfigured and refreshed. 
* Add: Click the Add button on the toolbar to display the field list , check the boxes before certain fields, or click Expression... at the bottom to display the SQL Expression dialog box and construct a field expression, and then click OK to add to the fields or field expressions to the list as thematic variables
* Remove: Select the thematic variables you want to remove from the list and click the Remove button on the toolbar to remove them.
5. Up&Down: You can move records up or down with the buttons. The position of records will affect the result of grpah maps. 
* **Top** icon: Move the selected thematic variable to the top.
* **Up** icon: Move the selected thematic variable upward.
* **Down** icon: Move the selected thematic variable downward.
* **Bottom** icon: Move the selected thematic variable to the bottom.
6. **Style** : You can change the graph style for a thematic variable through two methods. 
* Select one or more thematic variables from the list and click the Style button on the toolbar to display the dialog box for Fill Symbol Style Settings. Double click the style icon for a thematic variable to display the Style Settings dialog box. 
* When you need to modify the styles of multiple thematic items, you can press Shift key to select, and then click the Styles button. For specific operations, please refer to [Modify Style of Thematic Items](../ThematicStyle).

### Notes

When the graph map is the Area Map or the Ladder Map, it only supports the
first range colors in the selected color scheme.

### Related Topics

[Modifying Graph Maps](GraphMapDia)

[The Advanced Tab](AdvancedDia)

