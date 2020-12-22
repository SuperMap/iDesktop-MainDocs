---
id: PointSymStyle
title: Marker Style Settings for Maps and Layouts
---  


Below is the Symbol Library window (Style Settings Window) with the marker symbol library loaded.

![](img-en/PointSymManager.png)  
Figure: The Symbol Library window (Style Settings window)  
  
  1. **Select the Marker Symbol:**

Find the marker symbol and highlight it.

  2. **Set the Display Style:**

You can preview the style of the marker symbol in the Preview area.

You can set the style for a selected marker symbol before applying it to point objects.

  * Marker Size: The size of the marker symbol.
      * Width: The width of the marker symbol. You can specify the width of the marker symbol by typing in the integerUpDown, or by moving the slide bar that appears when clicking the right arrow. Unit: 0.1mm.
      * Height: The height of the marker symbol. You can specify the height of the marker symbol by typing in the integerUpDown, or by moving the slide bar that appears when clicking the right arrow. Unit: 0.1mm.
      * Lock aspect ratio: Maintains the shape and proportions of the marker symbol. By default, the box is checked. The width changes as you change the height. Similarly, the height changes as you change the width. Please note that this function is only for raster symbols.
  * Rotation: You can specify the value by typing in the integerUpDown, or by moving the slide bar that appears when clicking the right arrow. Click Enter to apply the rotation settings.
      * When the rotation is positive, it rotates counterclockwise; otherwise, closewise.
      * The numerical precision of marker symbol is 0.1, and the unit is degree.
  * Transparency: The transparency of the marker symbol. You can specify the transparency of the marker symbol by typing in the integerUpDown, or by moving the slide bar that appears when clicking the right arrow. The transparency is between 0 and 100, with 0 being fully opaque and 100 being fully transparent.
  * Color: The color of the marker symbol. To set the color for a marker symbol, click the color button to display the color panel, then you can either click Pick to pick a color from your screen, directly select a color from the color panel, or click More Colors... for custom settings.
  3. When finished, click OK to apply the settings and close the Style Settings window.

### ![](../../img/read.gif)Note:

The aspect ratio of the marker symbol must remain 1:1 while using the TrueType marker symbol. If you specify different width and height, the system will automatically get the symbol of the same with and height, with the width and height both being the specified height value.