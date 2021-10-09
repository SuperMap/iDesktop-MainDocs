---
id: RangesMapGroupDia
title: Modifying Ranges Map
---
### Introduction

The Ranges Map Manager, also called the group dialog box for the Ranges group
allows you to change the settings of a ranges map for more favorable effects.

### Basic Steps

1. Choose a range thematic map layer from the Layer Manager and right click, and then select "Modify Thematic Map" to open the Thematic Map Manager, on which all settings of the thematic map are shown. The settings for different kinds of vector layers are identical.
2. Thematic Map: Display name of the current map presented.
3. Expression: The thematic variable used for creating the ranges map. It can be a field or a field expression.
  * All fields of the vector dataset referenced by the vector layer are listed in the Expression drop-down list.
  * You can directly click a field or click Expression... to display the [SQL Expression](../../Query/SQLQueryDia) dialog box, in which you can compose a thematic variable with the operators, functions and fields provided.
  * If you change the thematic variable, the thematic map will be instantly reconfigured and refreshed.

**Note** : For Oracle, Plus, SQL Plus data, currently the supported field
expression is field values, e.g. SmID or SmID+1. The conditional expression is
not supported, e.g. SmID>100\. In this case, thematic mapping will be failed.

4. Method: You can use the following classification methods to classify your quantitative data. You can click the Method drop-down arrow to choose a method.
  * Equal Interval: This classification method divides the range of attribute values into equal-sized subranges (classes), allowing you to specify the number of intervals while SuperMap Deskpro .NET determines where the breaks should be.
  * Square Root: This classification method first divides the range of the square roots of all attribute values into equal-sized classes, then calculates the squares of the breaks and uses the squares to classify the attribute values.
  * Standard Deviation: This classification method shows you how much an object's attribute value varies from the mean. The mean values and the standard deviations are calculated from the mean. Class ranges are then created using these values. The length of each range is one standard deviation and the range at the middle is 0.5 standard deviation above or below the mean. With this method, SuperMap Deskpro .NET calculates the number of classes.
  * Logarithm: This classification method first divides the range of the logarithms of all attribute values to base 10 into equal-sized subranges, then calculates the exponents of all breaks and uses the exponents to classify the attribute values.
  * Quantile: Each class contains an equal number of objects. A quantile classification is well suited to linearly distributed data. Because objects are grouped by the number in each class, the resulting map can be misleading. Similar objects can be placed in adjacent classes, or objects with widely different values can be put in the same class. You can minimize this distortion by increasing the number of classes.
  * Defined Interval: This classification method allows you to specify an interval by which to equally divide a range of attribute values. Rather than specifying the number of intervals as in the equal interval classification method, with this method, you specify the interval value. SuperMap Deskpro .NET automatically determines the number of classes based on the interval.
5. Classes: How many subranges (classes) you want to classify the range of attribute values into.
6. Interval: The interval by which to equally divide a range of attribute values. This item is only active if you select the defined interval classification method to classify the attribute values.
7. Range Precision: Set the rounding precision of range. 15 precisions are provided including 10000000, 1000000, 100000, 10000, 1000, 100, 10, 1, 0.1, 0.001, 0.0001, 0.00001, 0.000001, 0.0000001, 0.00000001. You can see the difference by following pictures.

![](img/RangesMapGroupPrecise.png)  

8. Label Format: The format of the labels for the items in the subranges list.
9. Color Ramp: The range of colors you want to apply to the range of thematic values.
  * Apply the range of colors defined by a color ramp to the thematic values by selecting the color ramp from the Color Ramp drop-down list.
10. Merge and Split: Merge and split subranges according to your needs. 
  * The **Merge** button is used to select multiple continuous ranges (can be used together with Ctrl or Shift) into a range. If there is only one selected range or the selected ranges are not continuous, this buton is not available.
  * The **Split** button button is used to split one range into two.
11.  **Visible Settings:**
  * Click the Visible button to show or hide the objects with thematic values within the selected subranges.
  * You can also click the icon in the subranges list to control the visibility of the objects with thematic values within corresponding subrange.
12. **Style** : The Style button on the toolbar in the Ranges Map Manager lets you set the display style for the selected subranges. You can also open the Style Settings dialog box for a subrange by double clicking the corresponding style icon in the subranges list. The Style button and its function are different for different types of ranges maps. 
  * The filling **Style** icon button is used to set the fill style for all region objects whose thematic values are within the selected subranges. Click the icon or double click the color item in the Style column to display the Style Settings dialog box (see [Fill Style Settings](../../Visualization/LayerStyle/FillSymStyle)), in which you can change the Fill Symbol Style Settings.
  * The linear **Style** button is used to set the line style for all line objects whose thematic values are within the selected subranges. Click the button or double click the line symbol icon in the Style column to display the Style Settings dialog box (see [Line Style Settings](../../Visualization/LayerStyle/LineSymStyle)), in which you can change the Line Symbol Style Settings. 
  * The point **Style** button is used to set the marker style for all point objects whose thematic values are within the selected subranges. Click the icon, or double click the marker symbol icon in the Style column to display the Style Setting dialog box (see [Marker Style Settings](../../Visualization/LayerStyle/PointSymStyle)), in which you can change the Marker Symbol Style Settings. 
  * When you need to modify the style of multiple items, you can press the Shift key to select the items. Then click the Styles button, and the Styles dialog box pops up. For more information, see [Modify the Style of Thematic Maps](../ThematicStyle).
13. Sub-location: Select one or more thematic map items in the list of thematic map items, click the right mouse button, and select the "Target" option to highlight the corresponding object in the map. **Note:** When using the thematic map item targeting function, set the layer to be selectable.
14. **Value** : The end value of a subrange. You can change the value by clicking the up and down arrows to the right or directly typing a value and press enter to see the refreshed grid ranges map.
15. **Title:** The Title is used to display and set title of each range.
16. In the thematic map manage window, the parameters of the settings will be reflected in the current map window in the corresponding thematic map layer. The user can also do not enable real-time refresh by unchecking the Apply Immediately check box at the bottom of the dialog box and the user can click the "Apply" button at the bottom of the dialog box to apply the parameter settings in the dialog box to the current thematic map. 

### Note

1. You can save a thematic map you have created as a template for reuse. Please refer to [Save to Thematic Map Template Library](../Methods/DTv2_LoadStyleThemeTempl).
2. If the field selected at the expression is null, you can also set the parameters such as the number of segments, ranges, sub-styles, and apply the output as the thematic map template.
3. After saving to the template library, the template will be displayed in the Templates drop-down list in the Graph on the Thematic Mapping tab and you can apply it to other thematic maps.
