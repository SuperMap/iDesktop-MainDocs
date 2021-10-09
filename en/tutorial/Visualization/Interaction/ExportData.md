---
id: ExportData
title: Save Objects as Dataset
---
### Introduction

The **Save as Dataset** command is used for exporting the selected objects resulting in a new dataset. The involved data can be 2D Point, 2D line, 2D region, text, 3D point, 3D line, 3D region, and CAD datasets are supported to be exported.

**Note**: the network and route data can't be saved as a dataset.

### Operating Instructions

1. Select objects in the current window.
2. Right click and select **Save as Dataset** in the context menu to open the **Save as Dataset** dialog box.
3. **Layer** : Select the layer where the selected objects are. You can only export objects in one layer into a new dataset at a time. Therefore, if you have objects in multiple layers selected, you need to specify a layer in which selected datasets to export.
4. **Field** : check which fields you want to keep in the resulting data.
5. **Datasource** : Set the target datasource.
6. **Dataset** : Set the target dataset to save selected objects in the existing dataset. 
7. **Create Dataset** : Create a new dataset to save the selected objects.
8. **Encode Type** : Select the dataset encoding. It supports the single byte, double bytes, three bytes and four bytes and it is applicable for 2D line and region datasets. It doesn't support to set encodings for the 2D point, attribute, CAD and 3D vector datasets. See [Dataset Compression](../../DataProcessing/DataManagement/EncodeType) for more information.
9. **Delete source objects** : Delete all selected objects if the source dataset is editable.

