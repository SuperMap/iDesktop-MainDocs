---
id: UniformStyleDia
title: The Styles Tab
---  

The Styles tab: Set the uniform styles applied to the labels in a uniform
label map. In particular, the font type, size, rotation angle and font color
of the label in the unified style are set by selecting the attribute field to
implement the custom label setting to meet the different label display
requirements.

* Font: Change the font face.

When the enable expression is checked, the font name will be set by selecting
the attribute field, and the font will be displayed according to the set
attribute value to achieve the same label effect in the same topic map.For
more information about custom tag settings, see: [ Custom Label Settings Help
](CustomLabelMapDefault).

* Alignment: Align the selected labels. Multiple alignment methods are provided in the Alignment drop-down list. There are 12 types of alignment, see [Text Alignment](../../Visualization/Interaction/TextAlignDirection). 

**Note** : You found that text in your thematic map wasn't shown in the center
of each point even though you set Alignment to Center. The reason is that your
map enables the feature Show/Hide Points with Text (in the Overlap Settings
drop-down list on the Map Properties panel). Cancel the feature to display
text in the center of each point.

* Font Size: Change the font size. Font size can also select a field of the layer, the use of field values as the font size, the numerical accuracy of 0.5. 
* Font Height: Change the font height.
* Font Width: Change the font width.
* Rotation: Change the label rotation. A positive value indicates a counter-clockwise rotation while a negative value indicates a clockwise rotation. The unit is degrees.For more information about custom tab settings, see [ custom label setup instructions ](CustomLabelMapDefault).
* Italic Angle: Change the italic angle. The unit is degrees.
* ForeColor: The text color of the label. Click the drop-down arrow to the right to display the color panel, in which you can select a color or click More Colors to define one.

When the Initialize Expression is checked, the text color will be set by
selecting the property field, and the color will be displayed according to the
set attribute value, and the custom label effect with different label colors
in the same topic map. For more information about custom tab settings, see [
custom label setup instructions ](CustomLabelMapDefault).

* Shadow Color: Used to set the shadow color of label text in the label thematic map. Click the button on the right side of the label, and the color dialog box will be displayed, you can select or set the appropriate color. You must check the shadow check box in the part of font effect to active the shadow color function.
* BackColor: The background color of the label. Click the drop-down arrow to the right to display the color panel, in which you can select a color or click More Colors to define one. The item is only active if you check the Outline or uncheck the Transparent box. The background color will be invisible if you check the Transparent to transparently display the backgrounds of the labels.
* Bold: Make the labels bold.
* Italic: Italicize the labels.
* Strikeout: Draw lines through the middles of the labels.
* Underline: Underline the labels.
* Shadow: Add shadow effects to labels.
* Outline: Add outline effects to labels. You cannot set both the outline effects and the background color for the labels. Actually, if you have set the background color, the labels are outlined by the color. Outline width is also supported, with the unit being pixels, ranging from 1 to 5. If the box is not checked, there is no outline for the text. Text outline conficts with text background decoration, which cannot exist together. Text outline color is the color set for the Background color button.
* Fixed Size: Fix the size of the labels so that they will not change with map zoom.
* Transparent: Transparently display the backgrounds of the labels. You cannot set both the outline effects and the background color for the labels. If check the Transparent box to transparently display the backgrounds of the labels and set the BackColor, the labels are outlined by the color you set for the background.

### Note

Point, line, and region datasets support custom labels, but custom labels for
line datasets do not support annotations along the lines. Control the font,
text size, text rotation angle, and text color of the label by specifying the
field, which is valid only for the point label.

###  Related Topic

 [Custom Label Setup Instructions](CustomLabelMapDefault)

