---
id: BatchAddRows
title: Append Rows in Bulk
---
### ![](../../img-en/read.gif)Instructions

Append multiple records of datasets in the source datasource to corresponding datasets in the target datasource, but the names and types of fields from the source datasource must be the same with those in the target datasoure.

The feature is applicable to combine various kinds of data at two areas. For example, the municipal land department want to merge geographical data of two cities, and using two datasources (both of them have 58 datasets as the unified standard for surface classification). You can use the feature to append all records from one datasource to another datasource.

### ![](../../img-en/read.gif) Basic steps

  1. Click "Data" tab > "Data Processing" gallery > "Append Rows in Bulk" to open the "Append Rows in Bulk" dialog box. 
  2. In the Target Datasource area, specify the datasource where records will be appended to.
  3. In the Source Datasource area, specify the datasource where records are from. 
  4. The Settings area is used for specifying which datasets will be participate in the operation. 
    * The application will automatically link the datasets in the source datasource to the datasets of the same names in the target datasource. Also you can click any dataset name to change the corresponding dataset.
    * If you check the items without target datasets, all the checked input datasets will be copies to the target datasource.
  5. **Save New Fields** : Check the checkbox to keep the fields that only exist in the source datasets into the target datasets, otherwise, only the fields exist in both the source datasets and target datasets will be appended. For example, dataset A from the source datasource has two fields F1 and F2, and dataset A from the target datasource has only one field F1. If you check the checkbox, F2 also will be added into the target A. In contrast, if you do not check it, only F1 will be appended into the target A. 
  6. Click "OK" to perform the operation, and click "Cancel" to cancel the operation.

### ![](../../img-en/note.png)Note

  * If the target dataset is a CAD or attribute dataset, the source datasets can be point, line, region, text and CAD datasets. But if the target dataset is a dataset in other types, the source dataset type must the same with the target dataset type.
  * When performing the operation on datasets in the type of point, line, region or text, the objects of source datasets also will be appended into the target datasets.
  * For a SQLPlus-based datasource, if the target dataset has data with indexes, suggest you delete the indexes manually and re-create indexes for the result datasets.