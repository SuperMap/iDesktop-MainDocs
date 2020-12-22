---
id: DatasetSmooth
title: Smooth Dataset
---
### ![](../../img/read.gif)Introduction

Perform border smoothing operation for line dataset, region dataset and network dataset.

### ![](../../img/read.gif)Basic Steps

  1. In the Data tab, click "Smooth Line and Region" button in the Data Processing group, the Smooth Dataset dialog box appears.
  2. Add the dataset to smooth with the toolbar. 

![](img-en/close.gif)Toolbar description

    * ![](../../img/AddDataButton1.png) : Click "Add" button, the "Select" dialog box appears, select the dataset to append in the dialog box.
    * ![](../../img/SelectAll.png) : Click Select All button to select all the records in the list box.
    * ![](../../img/SelectInvert.png) : Click Select inverse button, the records not selected will be selected, and the selected records will become not selected.
    * ![](../../img/RemoveButton.png) : Click Remove button to remove one or more records selected in the list box.

  3. Select the count of interpolation points in the Smooth Factor column. 

Smooth Factor: The count of node to interpolate in the in smoothing operation, it is a integer larger than or equal to 2. The location of the node to insert is identified with the B Spline. The more interpolation points, the smoother the polyline after process. The recommended value range is [2,10].

To know more about the smooth process, please refer to the [Smooth Method Introduction](SmoothMeth.htm).

  4. Click "OK" to perform the operation, click "Cancel" to given up the operation.