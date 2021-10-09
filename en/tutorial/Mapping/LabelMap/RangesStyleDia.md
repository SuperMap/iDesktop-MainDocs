---
id: RangesStyleDia
title: The Styles tab
---  
The Styles tab: Set the styles applied to the labels in a ranges label map.

* Expression: The thematic variable you use to classify the objects in a vector layer. Values of the thematic variable must be numeric. Objects within the same subrange are labeled with text in the same style. 
  * The thematic variable can be either a field or field expression. To compose a field expression, click Expression... in the Expression drop-down list and compose a numeric expression in the SQL Expression dialog box that shows up.
  * When finished, the results are shown on the map.
* Method: You can use the following classification methods to classify your quantitative data. 

### Related Topics

[Classification Methods (Ranges Map
Manager)](../rangesmap/RangesMapGroupDia)

* Classes: How many subranges (classes) you want to classify the range of attribute values into. 
* Interval: The interval by which to equally divide a range of attribute values. This item is only active if you select the defined interval classification method to classify the attribute values. 
* Label Format: The format of the labels for the items in the subranges list. 
* Color Ramp: The range of colors you want to apply to the subranges of attribute values. Apply the range of colors defined by a color ramp to the subranges of attribute values by selecting the color ramp from the Color Ramp drop-down list. 
* The subranges list: All subranges are listed and you can set different label styles for objects within different subranges. Each item in the subranges list corresponds to a subrange. 
  * Visible: ![](img/See.png) is controls the visibility of the labels for objects within the subrange. If the icon is highlighted ![](img/See.png), the objects are visible; if the icon is gray ![](img/UnSee.png), the objects are invisible.
  * Label: The label for the subrange. The format of the label is defined by the Label Format. To set the label for a subrange editable, double click the text.
* Value: The end value of a subrange. You can change the value by clicking the up and down arrows to the right or directly typing a value and press enter to see the refreshed ranges label map.
* Settings for a subrange: The toolbar on the Styles tab organizes commands for settings for a subrange.
  * The **Merge** button is used to merge the consecutive subranges selected. The command is only active if there are multiple consecutive subranges selected.
  * The **Split** button is used to split the selected subrange into two ranges.
  * The **Text Color** button is used to set the label style for the objects within the selected subranges. The label style settings dialog box shows up for you to set the label style when you click the button after selecting one or more subranges. 
  * The **Visible** button is used to control the visibility of the labels within the selected subranges. If the button is highlighted , the labels are visible; if the button is gray , the labels are invisible.

### Related Topics

[How to set label styles (Uniform Label Map Manager)?](UniformLabelMapDia)
