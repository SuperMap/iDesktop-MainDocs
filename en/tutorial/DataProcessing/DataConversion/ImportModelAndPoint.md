---
id: ImportModelAndPoint
title: Import points and model files
---
### Introduction

Support model data in the same folder batch import, and through the
corresponding point dataset to determine the positioning of each model. The
supported model data formats are *.dae, *.Dxf, *.X, *.3ds, *.Osgb and so on.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...

### Basic Steps

The operation steps and parameters setting of the model files are basically
consistent.We take the importing of an OSGB model file as an example to
introduce the specific operations:

1. Open the datasource where the point dataset is saved or import the point dataset into the open datasource.
2. Open the dialog box Import Data by clicking on any functional entrance.

Besides, you can click on the Import Data drop-down list and select Model
Folder in the 3D group. Then specify the folder where your model data is
stored.

3. The specified folder has already added into the list of the Import Data dialog box. The right side of the dialog box displays the required parameters.
4. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).

* Conversion Parameters: Used to set the Locate Point Dataset, Rotation Angle, Scale Factor, and so on. 
* Datasource: Select the datasource where the model locator point dataset is located.
* Locate Point Dataset: Select the Locate Point Dataset of the model data, you can choose a two-dimensional or three-dimensional point dataset, or a compound point dataset.
* Associated Field: Set the point dataset and the model data related field, through the related field to determine the model data corresponding to the point and its coordinates.
* Build LOD: Check this check box to construct the LOD layer for the imported model data to improve the display efficiency and performance of the browsing.
* Rotation Angle: Used to set the 3D model X, Y, Z three coordinates of the rotation, click the combo box on the right side of the drop-down button, select a field set to X, Y, Z three directions of rotation angle, it can be set to empty field.
* Scale Factor: Used to set the 3D model for X, Y, Z three coordinate direction stretch, click the combo box on the right side of the drop-down button, select a field set to X, Y, Z three coordinate direction stretch factor can be set to empty Field.
* After finished setting the parameters, click the Import button.

### Note

* After importing the model data, the coordinate system of the model dataset is the same as the coordinate system of the fixed point dataset.
* The resulting model dataset retains all attribute field information for the point data.