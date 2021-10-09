---
id: ImportSimpleJson
title: Import SimpleJson  
---  
### Instructions

SimpleJson(*.json) is a data format specific to SuperMap. SimpleJson is a type of key-value that is similar to GeoJson. The supported geometric types includes points, lines, regions. SimpleJson consists of two files (*.json) and (*.meta), among them meta data information is saved in the (*.meta) file such as, geometric types, projection information and field information, and member information in data is saved into the (*.json) file.

For a SimpleJson(*.json) file, only one (*.json) file and one (*.meta) file 
are contained. But for a SimpleJson folder data, a folder corresponds to a (*.meta) file. A (*.json) file and a folder are chose by default to open data.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...
* Toolbox > Data Import > Vector File > Import SimpleJSON. (iDesktopX)

### Basic Steps

The following content introduces how to import a SimpleJson file.

1. Open the dialog box Import Data by clicking on any functional entrances. In the dialog box, click on the icon button Add File, then navigating to your file and opening it.
2. Or, you can import a SimpleJson folder. Click "Data Import" drop-down button, and then select "SimpleJson Folder" in the "Vector" group.
3. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).
* **Result Settings**
  * Import Null Dataset: Check the box meaning even if the dataset is empty, it still be imported. Conversely, only the non-empty datasets can be imported.
* Click "OK" to finalize the operation.
