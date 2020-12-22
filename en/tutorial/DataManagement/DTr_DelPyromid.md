---
id: DTr_DelPyromid
title: Deleting Image Pyramids
---
### ![](../../img/read.gif)Description

Deletes the pyramids for a raster/image dataset. **Note** : The image files
that opened with the datasource can not do this operation, such as the tiff
and img data.

### ![](../../img/read.gif)Basic Steps

      1. On the **Data Processing** group of **Start** tab, click the **Image Pyramid** button, and the **Image Pyramid Manager** window pops up, as shown below:
      2. In the **Image Pyramid Manager** , click the Add button ![](../../img/AddDataButton1.png). In the **Select** dialog box, select the files to delete the pyramid. Click the **OK** button to finish.
      3. The selected grid files will be added to the list of **Image Pyramid Manager** automatically. And it will read the information of width, height, and whether exist the image pyramids, etc. For the files that don't have the image pyramid, you can directly click the **OK** button to excute the operations. Or you should delete the existing image pyramid, then rebuild the image pyramid.

     **You can create the image pyramid through the context menu, and the operating steps are as follows:**

      1. Right click a raster/image dataset node in the Workspace Manager tree, and click Delete Image Pyramid.
      2. The creation success or failure prompt displays in the Output Window.

### ![](../../img/note.png)Note

      * When pyramids for a raster/image dataset have been created, the Delete Image Pyramid command will be enabled and Create Pyramids command will be uneanbled. And the Delete Image Pyramid command will be unenabled and Create Pyramids command will be enabled if pyramids for the raster/image dataset have not been created.
      * For the external raster and image files in the format of tif, tiff and img, if opened the files in the way of datasource, it only supports to create the image pyramid, but doesn't support to delete the created image pyramid.


