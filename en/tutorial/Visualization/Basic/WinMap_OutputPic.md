---
id: WinMap_OutputPic
title: Output Map
---
### Description

Export the map to a picture. The supported picture formats include *.bmp, *.emf, *.jpg, *.png, *.gif, *.eps *.tif, also the map can be exported as a PDF file.

### Function Entrance

Deselect all objects in the map window.

  * Right click and select **Export to Picture** in the map window to open the **Export to Picture** dialog box.

### Parameter Description

The **Export Settings** area allows you to set the parameters of the output image path and name, resolution, transparent and so on. Specified as follows:

  * **File Name** : Specify a path and a name to save the resulting image.
  * **Resolution** : The resolution of the exported picture. Currently, you are allowed to set the DPI from 1 to 2000. The supportive pictures can be in *.bmp, *.jpg, *.png, or *.tif format. The default is 96. Unit: DPI.

The system will estimate the size of each resulting picture based on the resolution and output range, if the result size is larger than the limitation (1.6 GB for Win 64, 200M for Win x86 ), the system will give a hint that the map will be output to a PDF. About the instruction of outputting map to PDF, please refer to [Export as PDF](WinMap_OutputPDF).

  * **Width** : The width of the picture in pixels. The values are in pixels.
  * **Height** : The height of the picture in pixels. The values are in pixels.
  * **Transparent** : Transparently display the background of the picture. The box is only active if you choose to export the map into a picture in *.png or *.gif format. 
  * **Visible Extent** : Set the map range which will export to picture. 
    * **Entire Map** : set the union of all layer range in the current map to the output range.
    * **Current Window** : set the map range of current window to output range.
    * **Select Object** : Provides Select Object and Draw Range. Select Object refers to the current window with mouse to select one or more objects. The selected object range is set to the output range. Draw Range refers to the current map window, by clicking the mouse to determine a rectangular area for the output range.
    * **Copy and Paste** : Click Copy button to copy current setting range and click Paste button to set the left, bottom, right, top value of the copy range to the current range.

### Note

  * When exporting your map to a picture, please disable the **Flow Display** and **Avoid Overlap**.

