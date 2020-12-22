---
id: ExportAsGeoJson
title: Saving Objects As
---
### ![](../../img/read.gif)Instructions

Vector objects selected in your map can be saved to a dataset which can be new or existing. They also can be exported resulting in a GeoJSON file, a SimpleJSON file, or WKT.

**Note**:

  * Objects from a network dataset cannot be saved to a dataset.
  * Objects from a network dataset or model data cannot be saved to a GeoJSON file.

### ![](../../img/read.gif)Save as Dataset

  1. Select objects you want to export.
  2. Right click your mouse. In the context menu, select Save As Dataset to brings up the dialog box Save As Dataset.
  3. **Layer** : specifying the layer where the selected objects are saved in. iDesktop only can save objects from one layer to a new dataset once. Hence, if all selected objects from different layers, you are required to specify layers one by one to export all of them.
  4. **Datasource/Dataset** : setting the datasource and the dataset that the objects will be saved to.
  5. **New Dataset** : checking the checkbox to save objects into a new dataset.
  6. **Encode Type** : Specifying how to encode objects in the new dataset. Four encoding schemes Byte, Int16, Int 24, and Int32 are provided applicable for 2D line datasets and 2D line datasets. For more detail about encoding schemes, please refer to [Dataset Encoding Types](../../DataProcessing/DataManagement/EncodeType.htm).
  7. **Delete Source Object** : When the objects you selected are editable, you can check the checkbox to delete the selected objects from the source dataset.
  8. Click "OK" to save objects.

### ![](../../img/read.gif)Export as a File

  1. Select the object you want to export. In the context menu of the objects, click Export as a File to open the Export to File box.
  2. **Export Type** : The resulting file can be in three types: **GeoJSON** , **SimpleJSON** , and **WKY**.
  3. Type a file name and specify a path to save the resulting file.