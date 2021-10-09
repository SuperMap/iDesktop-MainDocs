---
id: ImportWor
title: Importing WOR File  
---  
The WOR format is the workspace file of MapInfo. The workspace file is used to
save table, window, window position, map, layout, resource symbols, MapInfo
environment settings and so on.

### Introduction

The application supports for importing the MapInfo workspace file. While importing the dataset, all the data and maps in the workspace also are imported, which is convenient for users to use directly.

### Basic Steps

1. In the Data Processing group on the Start tab, click the Data Import or in the workspace manager to select the data source to be imported, and right-click to select Import Dataset. The Import Data dialog box is displayed.
2. In the Import Data dialog box, click the Add button in the toolbar to add the *.wor files. The adding mode refers to the introduction for[Import Data](ImportData).
3. After finish adding, you can set the parameters.
* **Result Settings**
  * Target Datasource: Select the data source to store the imported data in the workspace. 
  * Encode type: The encoding type of the imported data. By default, the imported dataset does not use the encoding type, that is, it is not encoded.The application provides multiple kinds of encoding modes: single-byte, double-byte, three-byte, and four bytes. See [Encoding Modes for Dataset Compression](../DataManagement/EncodeType). 
  * Import Mode: The application provides three import modes: None, Append and Replace. 
1. none: To automatically change the name of the imported file if there is already a dataset with the same name in the target datasource.
2. Replace: To replace the dataset with the same name in the target datasource. 
3. Append: To append the records of the imported file to the dataset with the same name in the target datasource if the two are the same type and have the same structure. If the two datasets don't have the same type and structure, the corresponding file will not be imported and the Status for the file will be shown as Failed in the listbox. 

Note: When import the *.wor file, it appends and replaces the data in the
workspace. It can't append the map. If the map has already existed, it will
reload this map. The name is to add the suffix in the original name to
distinguish.

* **Source File Info**
  * Source File Charset: Used to select the charset for the source data. Check the supported charset from [Charset List](../DataManagement/Charset). 
  * The source file path: It is used to display the path of the original data, which is convenient for users to view. Click the Properties button to view the properties information of imported file.
4. After finish the settings, click the Import button to import the *.wor file.

