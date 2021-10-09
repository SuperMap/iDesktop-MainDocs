---
id: DatasetButton
title: Export Attribute Table
---
Saves an attribute table as a dataset or an Excel file.

### Save As Dataset

Save a part or whole attribute information of a vector dataset as a new dataset of the same type or a tabular dataset. Besides, you can save a part or whole records of a tabular dataset as a new tabular dataset.

**Function Entrances**

Select the records you want to export. A record is selected if a cell in the record is selected.

* Click **Attributes** > **Export group** > **Save As Dataset** to open the **Save As Dataset** dialog box.
* Right-click on the attribute table and select Save As Dataset.

**Parameter Description**

* Fields information: Save the selected field value in the saved dataset.
* Datasource: The datasource to place the new dataset.
* Dataset: The name of the new dataset.
* Type: The type of the new dataset. For a vector dataset, you can choose to export into a dataset of its own type or a tabular dataset. For a tabular dataset, you can only choose to export into a tabular dataset.
* Encoding: The encoding type of the new dataset.

You can specify either the single-byte, double-byte, triple-byte, or four-byte encoding mode for the new dataset when exporting the attribute table of a vector dataset except for a point dataset.

The new dataset appears under the specified datasource in the Workspace Manager.

### Note

* All records will be exported if there are no records being selected.
* Please enter an valid name for your new dataset. The system will prompt you if it is invalid.
* The Save As Dataset can work on only one attribute table operation once no matter how many tables you have opened.

### Save As Excel

Save the attribute table of the vector dataset or tabular dataset as Excel. It supports saving overall attribute table or selected records as Excel.

**Function Entrances**

Select the records you want to export. A record is selected if a cell in the record is selected.

* Click **Attributes** > **Export** group > **Save As Excel** to open the **Save As Excel** dialog box.
* Right-click on the attribute table and select Save As Excel.

**Parameter Description**

* Filed list: Check fields you want to export in the field list. You can select fields with the tools in the toolbar. The non-system fields are selected by default. 
* File Name: the name of the resulting Excel file.
* Path: the path where the output will be saved.
* Save Selected Records Only: check this to save the selected records to a new Excel file only. Otherwise, save all records.

###  Note

* All records will be exported if there are no records being selected.
* The Save As Excel can work on only one attribute table operation once no matter how many tables you have opened.

