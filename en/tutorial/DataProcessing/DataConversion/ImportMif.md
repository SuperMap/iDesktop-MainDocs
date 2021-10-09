---
id: ImportMif
title: Import MapInfo file
---
### Introduction

SuperMap supports three types of MapInfo data including *.mif, *.wor, and *.tab.

* MIF format is an exchange file used for data exchanging in MapInfo. MapInfo will create two files (*.mif and *.mid) when opens a map table and export in form of *.mif. The *.mif file saves the table structure of MapInfo and the spatial information of the objects, including the symbol style of the object, fill mode, etc. And the *.mid file saves the attribute information of each object in the order of the records in the object.
* The WOR file (*.wor) is MapInfo workspace file which is used for saving tables, windows and their positions, maps, layouts, resource symbols, MapInfo environmental settings, and so on.
* The TAB file (*.tab) is MapInfo attribute table structure file for information storage. The TAB file defines the table structure of attributes of maps.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...
* Toolbox > Data Import > MapInfo >Import TAB/MIF/WOR. (iDesktopX)

### Basic Steps

1. In the pop-up dialog box Import Data, click the Add button to add the *.mif format file to import. See [Import Data](ImportData) for information about the add mode.
2. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).
3. **Result setting**
* Dataset Type: Select the resulting dataset type. (The parameter is needless when importing a *.wor data) 
1. CAD Dataset: Check this radio button to import a file into a CAD dataset.
2. Simple Dataset: Check this radio button to import a file into either a point, line, region, or tabular dataset.
* Create Spatial Index: Check this item to build spatial indexes for the dataset.
4. **Conversion Parameter**
* Import Attributes: checking the checkbox means the attribute information will be imported together with spatial data.

* After the setting, click Import to perform the operation.

