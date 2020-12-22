---
id: ManageImageCollection
title: Managing Image Data
---
### ![](../../img/read.gif)Instructions

This function is used to manage the image dataset collection, including adding subdataset, deleting subdataset, subdataset sorting, dataset appending, etc.

Notes:

  1. The projected coordinate system of the image files to load should stay the same with that of the image dataset collection.
  2. The number of bands of the image files to load should stay the same with that of the image dataset collection.
  3. The image dataset collection can be opened as a layer. The image files in the collection cannot be opened independently.
  4. The order of image datasets affects the display effect of the image dataset collection. 

It is recommended to modify the order of subdatasets before creating a pyramid for the collection so as to reduce the updates and creation of the pyramid.

When modifying the order of the subdatasets, or adding/deleting the subdatasets, you need to recreate an image pyramid for the image dataset collection or execute the regional update operation of the pyramid.

  5. The operation of the image dataset collection is similar to that of the image dataset. The images in the collection only can be used to create pyramid, delete pyramid and operate the raster image dataset.
  6. After copying image dataset collection from a different datasource, you need to recreate a pyramid for the copied image dataset collection.
  7. It doesn't support adding subdatasets to the image dataset collection from a different datasource.

### ![](../../img/read.gif)Basic Steps

  1. Select an image dataset collection in the **Workspace Manager** , and then right-click the **Manage Image Data** command to open the **Image Data Manager...** window.
![](img/SettingDia.png)  
---  
Figure: **Image Data Manager**  
  2. In the window, you can set the images added in this image dataset collection. You can add new image datasets or delete the existed datasets. The image files that have been selected for adding will be automatically added into the image dataset list box. The properties of these image datasets can be modified with the toolbar. 

![](img/close.gif)Toolbar buttons

    * ![](../../img/AddDataButton2.png) : Add the image dataset of the datasource where the image dataset collection exists into the current list box. 
    * ![](../../img/AddDataButton1.png) : Add an image file (such as *.img, *.tif, *.tiff, *.png and *.jpeg) into the current list box. 
    * ![](../../img/AddDataButton1.png) : Add all the image files under the specified folder. 

Click the **Add Folder** button to open the **Add Folder** dialog box as shown in the figure below. You can integratedly set the path of the folders, the types of image files, and whether to search the files in the sub-folder for their unified settings. The types of image files that it supports include *.img, *.tiff, *.jpeg, *.png, *.gif and *.bmp.  ![](img/AddFolderSetting.png)  
---  
Figure: **Add Folder** dialog box  
  
    * ![](../../img/SelectAll.png) : Select all the datasets in the list box. 
    * ![](../../img/SelectInvert.png) : Inversely select the datasets in the list box. 
    * ![](../../img/RemoveButton.png) : Remove the selected records. 
    * ![](../../img/MovetoTop.png) : Move the selected record to the top. 
    * ![](../../img/MoveUp.png) : Move the selected dataset up for one record. 
    * ![](../../img/MoveDown.png) : Move the selected record down for one record. 
    * ![](../../img/MovetoButtom.png) : Remove the selected record to the bottom.
    * ![](../../img/Refresh.png) : Refresh the statuses of all the subdatasets.

  3. Basic information as follows: 
    * **Alias:** The name of subdataset displayed in the collection.
    * **Label:** The name of subdataset. If the added subdataset is from the datasource, then only the name of the image dataset can be displayed; if the added subdataset is an image file, then the disk path of the image file can be showed.
    * **Status:** Checks whether the subdataset exists. For the non-existent subdatasets, executes "Synchronize Image Data" to modify the image dataset collection.
  4. Click OK to finish the setting.



