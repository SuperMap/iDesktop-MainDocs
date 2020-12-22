---
id: AddData
title: Add the data
---
### ![](../../img/read.gif)Introduction

supports adding datasets to the map window, and you can easily select a dataset to add to the current map.

### ![](../../img/read.gif)Basic Steps

Three ways to add:

  * **The first method:** Select the dataset in the workspace manager, directly drag it to the map window or right click to choose "Add to New Map" or "Add to Current Map" to add it. It supports selecting multiple datasets for once.
  * **The second method:**
    1. After opening a map, click Map>Data>Add Data to pop up the dialog.
    2. Select the datasource and the dataset to be added, then click OK to add it. Press Shift to select multiple datasets. 
  * **The third method:** Right-click on the layer in the layer manager and select Insert Data to open the Select dialog box where you can select one or more datasets to add them to the current map and above the current layer.

### ![](../../img/note.png)Note

* When the image dataset to be added to the map is big, it will pop up a dialog to ask whether to build the pyramid to improve the display speed. When adding multiple dataset and the "Perform this operation for datasets" option is checked, all big image datasets will be created pyramid.
* The system will check the dataset index when adding it into a map, if it has more than 2000 objects and no spatial index, a prompt will pop up to suggest you to create spatial index to improve the display speed.