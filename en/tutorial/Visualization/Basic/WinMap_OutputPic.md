---
id: WinMap_OutputPic
title: Outputting a Map
---
### ![](../../img/read.gif)Description

Export the map to a picture. The supported picture formats include *.bmp, *.emf, *.jpg, *.png, *.gif, *.eps *.tif, also the map can be exported as a PDF file.

### ![](../../img/read.gif)Export a map as an image

  1. Deselect all objects in the map window.
  2. Right click and click Export to Picture in the context menu that shows up. The Export to Picture dialog box appears.
  3. In the Export Settings panel, you can set the parameters of the output image path and name, resolution, transparent and so on. Specified as follows: 
    * File Name: Click the right button, in the pop-up "Save" dialog box to set the save path and name of the picture, you can also directly in the File Name text box, enter the image save path and name.
    * Resolution: The resolution of the exported picture. Currently, you are allowed to set the DPI from 1 to 2000. The supportive pictures can be in *.bmp, *.jpg, *.png, or *.tif format. The default is 96. Unit: DPI.

The system will estimate the size of result picture based on the resolution and output range, if the result size is larger than the limitation (1.6 GB for Win 64, 200M for Win x86 ), the system will give a hint that the map will be output to a PDF. About the instruction of outputting map to PDF, please refer to [Export as PDF](WinMap_OutputPDF.htm).

    * Width: The width of the picture in pixels. The values are in pixels.
    * Height: The height of the picture in pixels. The values are in pixels.
    * Transparent: Transparently display the background of the picture. The box is only active if you choose to export the map into a picture in *.png or *.gif format. 
  4. Visible Extent: Set the map range which will export to picture. 
    * Entire Map: Click Entire Map, you can set the union of all layer range in the current map to the output range.
    * Current Window: Click Current Window, you can set the map range of current window to output range.
    * Select Object: Provides Select Object and Draw Range. Select Object refers to the current window with mouse to select one or more objects. The selected object range is set to the output range. Draw Range refers to the current map window, by clicking the mouse to determine a rectangular area for the output range.
    * Copy and Paste: Click Copy button to copy current setting range and click Paste button to set the left, bottom, right, top value of the copy range to the current range.
  5. Click OK.

### ![](../../img/note.png)Note

  1. When exporting map to a picture, the "Flow Display" and "Avoid Overlap" is disabled.