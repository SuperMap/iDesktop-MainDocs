---
id: SingleLayerRaster
title: Layer Control for One Grid Layers
---  


In the layer list, if you have one grid layer selected, the following settings are allowed in the setting area.
  
  * **Visible**

Control the visibility of the layer. Check the box to make the layers visible and uncheck to make them invisible.

  * **Layer Name**

Name of the layer, which is used to uniquely identify the layer. It cannot be modified.

  * **Caption**

Displays the layer caption. You are allowed to change the layer caption. After changing the layer caption, the caption displayed in the Layer Manager will change accordingly. However, the dataset name in the Workspace Manager will not change.

  * **Transparency**

Control the transparency of the layers. You can directly type a value indicating the transparency of the layers in the text box, or click the right arrow and move the slide bar to change the value. The transparency value is an integer ranging from 0 to 100. 0 indicates opaque and 100 indicates transparent.

  * **Max Visible Scale**

Set the maximum visible scale for the layers. Type the value in the text box to the right, 1：100000 for instance. If you zoom in beyond this scale, the layers will not be visible. The default value is 1:0, indicating the max visible scale is not set for the layers.

  * **Min Visible Scale**

Set the minimum visible scale for the layers. Type the value in the text box to the right, 1：500000 for instance. If you zoom out beyond this scale, the layers will not be visible. The default value is 1:0, indicating the min visible scale is not set for the layers.

  * **Dataset**

Click the button ![](img-en/filterbutton.png) on the right of the textbox, and you can reassign a new reference dataset. Select the datasource and dataset from the Datasource and Dataset dropdown list. For more information, please refer to [Changing Dataset](DTv2_BindDataNew.htm).

  * **Brightness**

Adjust the brightness of the image layers. You can directly type a value indicating the brightness of the layers in the text box, or click the right arrow and move the slide bar to change the value. The value range is from -100 to 100. If the input value is greater than 100, the brightness will be regarded as 100; if the input value is less than -100, the brightness will be regarded as -100.

  * **Contrast**

Adjust the contrast of the image layer. You can directly type a value indicating the contrast of the layers in the text box, or click the right arrow and move the slide bar to change the value. The value range is from -100 to 100. If the input value is greater than 100, the contrast will be regarded as 100; if the input value is less than -100, the contrast will be regarded as -100.

  * **Color Table**

Set the colors for cell values of raster data. Click the ![](../VisualSetting/img/Colorbutton.png) button to the right of Color Table to display the Color Table dialog box, in which you can specify the color scheme. For more information about how to set the color table, please refer to [ Setting the Grid Layer Color Table ](../VisualSetting/ColorTableDia.htm).

  * **Value**

Value, Color and Transparent Display together help users specify the color of a specified cell value and set whether to transparently display it or not.

Type in the cell value for which you want to set the color in the Value text box.

  * **Color**

Color is used to specify the color for the specified value. Click the drop down arrow to pick a color from the color panel that shows up.

### ![](../../img/seealso.png)Related Topics

![](../../img/smalltitle.png)[Layer Control](LayerControl.htm)

![](../../img/smalltitle.png)[Raster Group](../VisualSetting/Rastergroup.htm)