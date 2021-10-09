---
id: PropertiesDia
title: The Properties Tab
---
The Properties tab on the Unique Values is used to set the display parameters
for the unique objects in the current Unique Values.

The contents of Thematic Map Manager are different when the thematic maps are
created based on different kinds of layers.

1. Expression: The combo box is used to display and set the variables for the current unique value, namely the property fields or the math expression of the property fields in the current layer.
  * Click the drop down button of the Expression, and in in drop down list, all the attribute fields of the current vector dataset are listed.
  * In the drop down, select the thematic variable (a property field) of the current Unique Value layer; You can also click the Expression in the dropdown list, and pop up the [SQL Expression](../../Query/SQLQueryDia) dialog box. You can construct the field expression in the dialog box, which can be the thematic variable in the Unique Value.
  * **Reset Unique Value after Expression Changed** : Checking the checkbox means the system will reset the unique value automatically after modifying the expression. The current Unique Value will be mapped according to the modified thematic variable instantly and refresh the display effect.
  * **Custom Expression** : You are allowed to set the marker symbol's size and rotation by entering a number or selecting a field to set the display effect.

Note: When use Oracle Plus, SQL Plus engine data to create the thematic maps,
the field expression can be only the field value or the field expression, such
as SmID or SmID +1, etc. Now it doesn't support for setting thematic fields
through the conditional expression. If the field expression is the conditional
expression , such as "SmID > 100", it fails to create the thematic map and the
output window will prompt Failed to refresh the thematic map.

2. Color Ramp: The Color Ramp combo box is used to display ans set the color style of the current Unique Value.
  * Click the drop down button on the right of Color Ramp combo box, and select a color. That is, you can assign the different colors for the thematic value of the current Unique Value according to the selected color scheme.
3. **Visible:**
  * Click the **Visible** icon button in the Unique Value window. You can control the visibility of objects in the thematic list.
  * Click the **Visible** icon in every thematic item to control the visibility of objects corresponding to this thematic item.
4. Styles: The styles button in the middle of Unique Value window is used to set the styles of the selected thematic items; Users can click every styles button and the Styles Settings window will pop up. They can set the map object styles in the dialog box. The styles buttons in the Unique Values created by the different vector datasets have different functions. 
  * ![](img/FillSym.png) is used to set the fill styles of the region objects corresponding to all the selected thematic value in the current Unique Value Map. If you click this button, or click the region Style icon ![](img/SymRegion.png), the Fill Symbol Selector window will pop up (Please refer to [Styles for Fill Symbols](../../Visualization/LayerStyle/FillSymStyle)). Users can select the fill styles according to their needs.
  * ![](img/LineSym.png) is used to set the line styles of the line objects corresponding to all the selected thematic value in the current Unique Value Map. If you click this button, or click the line Style icon ![](img/SymLine.png), the Line Symbol Selector window will pop up (Please refer to [Styles for Line Symbols](../../Visualization/LayerStyle/LineSymStyle)). Users can select the line styles according to their needs. 
5. **Add or Delete the Thematic Value:**
  * The **Add** icon is used to manage the thematic values in the Thematic Map. Click the ![](img/AddButton.png) button, and the thematic management interface will pop up. You can add, delete the thematic values, and also add the new thematic value in the dialog box below. After added the thematic value, the thematic list will update synchronously and corresponds to the modified thematic value. 
  * The **Delete** icon is used to delete the selected thematic values in the thematic list. Select the thematic value to delete, and click the ![](img/DelButton.png) button in the toolbar. After deleted this thematic value, the object corresponding to the original thematic value will be displayed in the default styles.
6. **Subitem ordering and color scheme reverse:**
  * Click the **Ascending Order** button to sort subitem values in the ascending order.
  * Click the **Descending Order** button to sort subitem values in the descending order.

**Note** : You can hold down the Shift key to select multiple unique values,
and then continue holding down the shift key and left key of your mouse,
meanwhile drag your mouse to move the selected items in bulk. The result order
of unique values will be saved by system automatically.

  * Click the **Reverse** button to reverse the color scheme.
7. **Save to Color Scheme Manager** : Click the button to open the dialog box "Save to Color Scheme Manager". You can save the result color scheme by using the dialog box for further usage. 
8. Sub-location: Select one or more thematic map items in the list of thematic map items, click the right mouse button, and select the "Target" option to highlight the corresponding object in the map. **Note:** When using the thematic map item targeting function, set the layer to be selectable.
9. Besides, you are allowed to set the value and title of the subitem. 
  * **Value:** Used to display and modify the value of subitem. You are allowed to directly modify the value in the cell. If the specified value already exists, the setting will not be valid and the original value will be restored.
  * **Title:** Used to display or modify the title of the subitem. You are allowed to directly modify the value in the cell.

### Note

1. The Unique Value Maps created and modified by users can be saved as the templates, which can be used in making other thematic maps of other layers. For specific operations, please refer to [Save as Thematic Map Templates](../Methods/DTv2_LoadStyleThemeTempl).
2. When use the template to create a thematic map, users can directly select the saved templates in the drop down of Templates, and apply it to other thematic maps.
3. The default style of the subitem is used to render items that has not specified styles.

### Related Topics

[Modify the Unique Value Map.](UniqueValuesMapGroupDia)

[The Advanced Tab](AdvancedDia)
