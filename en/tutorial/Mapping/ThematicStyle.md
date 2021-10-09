---
id: ThematicStyle
title: Modifying Thematic Map Styles (2D)
---
### Introduction

* When creating a thematic map, to change the style of map thematic map items, you can select them and change the styles in batch.
* The following are the parameters for changing the style of marker symbols, line symbols and fill symbols: 

**Markers**

**Name** | **Description**
---|---
Marker | The marker symbol type 
Marker Size | The marker size
Marker Color | The color of the marker symbol
Icon | The icon file representing the marker symbol
Scale Factor | Set the zoom ratio when using icon to represent the marker symbol, in percentage.
Rotation | Set the rotation when the marker symbol is a 3D model symbol, in degrees.

**Lines**

**Name** | **Description**
---|---
Line Style | The border line type of the line symbol or fill symbol.
Line Width | The width of the line symbol
Line Color | The color of the line symbol

**Fills**

**Name** | **Description**
---|---
Fill Type | Fill symbol type
ForeColor | The fill color of the symbol
BackColor | The non-fill color of the symbol 
Opacity | Opacity has a value between 0 and 100, 0 represent not transparent, 100 represents completely transparent.
Gradient Type | Users can use gradient fill types including: None, Linear, Radial, Conical and Square.
Gradient Angle | Set the rotation angle of the gradient fill.
Offset X | The offset of the gradient fill center point from the fill extent center point in the horizontal direction.
Offset Y | The offset of the gradient fill center point from the fill extent center point in the vertical direction.

### Basic Steps

1. If you select multiple items in the thematic values list and click the Style button on the toolbar, the Change Style dialog box shows up for batch symbol style settings (take the fill symbols as an example), as shown below:
2. Select the symbol style to modify, click "Style", the "Line Symbol Selector" or the ""Fill Symbol Selector will be popup. For more information, see: [Line Symbol Style Settings ](../../Visualization/LayerStyle/LineSymStyle) and [Fill Symbol Style Settings ](../../Visualization/LayerStyle/FillSymStyle).
3. Click OK to apply the settings.

