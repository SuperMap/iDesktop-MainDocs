---
id: AddtoRow
title: Dataset Append Row
---
### ![](../../img-en/read.gif)Introduction

Append the data in one or more dataset to another dataset.

Application range: Point/line/region/text/CAD/Model dataset, tabular dataset, network/route dataset.

The field name and field type of the source dataset and the target dataset must be the same.

### ![](../../img-en/read.gif)Basic Steps

  1. In the Data Processing group of the Data tab, click "Append Row" button, the "Append Row" dialog box appears.
  2. Select the target dataset in the Target Data region to append, it can be an existing dataset, you can also create a new dataset to append.
  3. Select the source dataset in the Source Data list. The datasets in the list box can be edited with the tool bar button. 

![](img-en/close.gif)Introduction to Toolbar

  * ![](../../img-en/AddDataButton1.png) : Click Add button, the "Select" dialog box appears, you can select one or more datasets to add.
  * ![](../../img-en/SelectAll.png) : Click Select All button to select all the records in the list box.
  * ![](../../img-en/SelectInvert.png) : Click Select inverse button, the records not selected will be selected, and the selected records will become not selected.
  * ![](../../img-en/MoveUp.png) : Move the record upward.
  * ![](../../img-en/MoveDown.png) : Move the record downward.
  * ![](../../img-en/MovetoTop.png) : Move the record to the first location.
  * ![](../../img-en/MovetoButtom.png) : Move the record to the last location.
  * ![](../../img-en/RemoveButton.png) : Click Remove button to remove one or more records selected in the list box.

  4. Save New Fields: Whether to save the other fields in the source data. In the appending process, the exact match fields in the target data will be retained. Save New Fields is used to set whether to retain the fields that exist in the source data but not in the target data. For instance, target dataset NewDataset1 has a field F1, and the source dataset NewDataset2 has a field F2, other field names are all the same. If you choose to save new fields, the result is that the target dataset contains F1 and F2; if you do not select this option, the target dataset will only contain F1.
  5. Click "OK" to finish the operation.

### ![](../img/note.png)Note

  * When the target dataset is a CAD dataset, the source dataset can be a point/line/region/text/CAD dataset; when the target dataset is a tabular dataset, the source dataset can be any kinds of vector datasets; when the target dataset is of other types, the source dataset must belong to the same type. 
  * The geometry object in the source dataset will also be appended to the target dataset.
  * For SQLPlus datasource, if the target dataset contains data and has created tile index, it is recommended to delete the tile index and create again for the new dataset after the operation.