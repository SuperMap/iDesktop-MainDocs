---
id: ExportData
title: Saving Selected Objects as Dataset
---  


### ![](../../img/read.gif)Introduction

The Save as Dataset command is used to export selected objects into a new dataset. 2D Point, 2D line, 2D region, text, 3D point, 3D line, 3D region and CAD datasets are supported to be exported.

Currently, the function is not supported by the network and route datasets.

### ![](../../img/read.gif)Basic Steps

  1. Select objects in the current window.
  2. Right click and click Save as Dataset in the context menu that shows up to display the Export into Dataset dialog box.
  3. **Layer** : Select the layer where the selected objects are. You can only export objects in one layer into a new dataset at a time. Therefore, if you have objects in multiple layers selected, you need to specify a layer in which selected datasets to export.
  4. **Datasource** : Set the target datasource.
  5. **Dataset** : Set the target dataset to save selected objects in the existing dataset. 
  6. **Create Dataset** : Create a new dataset to save the selected objects.
  7. **Encode Type** : Select the dataset encoding. It suppots the single byte, double bytes, three bytes and four bytes and it is applicable for 2D line and region datasets. It doesn't support to set encodings for the 2D point, attribute, CAD and 3D vector datasets. See [Dataset Compression](../../DataProcessing/DataManagement/EncodeType.htm) for more information.
  8. **Delete source objects** : Delete all selected objects if the source dataset is editable.
  9. Click OK to export.