---
id: LabelMatrixMapSty
title: Styles Tab
---
Styles Tab: Sets the font style of the label object (i.e., the text object) in the current label matrix thematic map.

* Expression: Sets the thematic variables of the label matrix thematic map. The attribute field for ranging must be numeric. Objects in the same range adopt same text style for displaying. 
  * The combo box lists all the numeric attribute fields. User can select any one from the list or directly type a field name in the combo box which must can be found from the list. In addition, user also can select the Expression... at the bottom of the dropdown list and then create an expression in the SQL Expression window. 
  * After the expression is created, click the Refresh button on the right side of the combo box to make the label matrix thematic map use new variable to reset the text object.
* Method: The combo box is used for setting the ranging method for the thematic value. User can select one from the dropdown list. 

### Related Topics

[Ranging Method Introduction](../rangesmap/RangesMapGroupDia)

* Classes: Sets the count of ranges. 
* Interval: Sets the interval between ranges, i.e., the length of the range. This item is only supported when the method is Manual. 
* Label Format: Specifies the format to denoting the value domain of each range, which mainly provides two formats as shown in the figure above. 
* Color Ramp: Sets the text color of labels of each range in the label matrix thematic map. Select one scheme to assign a color style for ranging text. 
* Label Ranges List: The bottom region of the Styles tab is the list that shows all the ranges of texts in the current label matrix thematic map, which is mainly used to show the value domain of ranges, the text style of each range, and other display controls. Each item in the list corresponds to a label range. 
  * Set whether the object corresponds to the thematic value is visible: ![](img/See.png) controls whether the label object in the range is visible. ![](img/See.png) is visible, while ![](img/UnSee.png) is invisible. 
  * Set the label content of the thematic value: Texts showed in each item in the label ranges list corresponds to the value domain of ranges, whose format is controlled by "Format of Range Title". Double-click the text to edit the display content of the label range. 
* Modify the value of the range point: Each numerical text box can be used to set the value of range point. Each box corresponds to one range point whose value can be modified with the numerical text box. The varied result can be instantly refreshed in the current label matrix thematic map.
* Set the selected label range item: Buttons in the middle region are mainly used to control the label ranges in the aspects of text style, visibility, etc. 
  * The **Merge** button is used to group the selected multiple contiguous ranges into a group. The value domain of the grouped ranges are the union of the value domains of all the ranges. If no label range or only one is selected, or the selected multiple ranges are not contiguous, then this button is not available. 
  * The **Split** button is used to split a range into two new ranges. 
  * The **Style** button is used to set text style for the selected ranges. Select one or more ranges and then click this button to set the text style in the pop-up dialog box.
  * The **Visible** button is used to control the visibility of label objects in the selected one or more ranges. 

###  Related Topics

 [Setting Text Styles (Modifying Uniform Label Thematic Maps)](UniformLabelMapDia)
