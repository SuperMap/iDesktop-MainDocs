---
id: ImportModelData
title: Import model files
---
### Introduction

Supports importing multiple formats of 3D model files including *.dxf, *.x, *.3ds, *.osgb, etc.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...
* Toolbox > Data Import > 3D Model File > tools. (iDesktopX)

### Basic Steps

The operation steps and parameters setting of the model files are basically consistent. We take the importing of a 3DS model file as an example to introduce the specific operations:

1. Open the dialog box Import Data by clicking on any functional entrances. In the dialog box, click on the icon button Add File, then navigating to your file and opening it.
2. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).
* **Result Settings:**
  * Type: choose the result dataset type-Model Dataset or CAD Dataset. 
    * Model Dataset: import data as a model dataset.
    * CAD Dataset: import data as a CAD dataset.
3. Transformation Parameters: 
* Decompose to multiple model objects: Check it to decompose model into multiple objects according to the original data and a ModelName field will be added to record the name of model object.
* Projection Settings: Used to set the projection of the imported dataset. Select the Projection Settings radio box, click the Setting... button, set the projection after the dataset is imported in the pop-up Projection Settings dialog box. Refer to [Setting Projections](../Projection/SetPrjCoordSys) for specific operation.
* Import Projection: Select the Import Projection File radio button, click the icon button on the right, in the pop-up Select window, select the projection information file and import it. Support for importing shape projection information file (*.shp, *.prj), MapInfo exchange format (*.mif), MapInfo TAB file (*.tab), image format projection information file (*.tif, *.img, *.sit), projection information file (*.xml). 
* Model Position: The position of the model after importing, represented by a 3D point object. The default point is (0,0,0). 

Note: after the model data is imported, the coordinate system of the model
dataset is the same as that of the datasource by default. If the dataset uses
geographical coordinate system, the position will be set to the latitude and
longitude. If the dataset is set to the plane or the projection coordinate
system, the position should be set to X, Z and Y coordinates.

* After finishing the parameter settings, click the Import button to import the 3D model file.

### Note

* When setting up the model position, it is necessary to set up the coordinates according to the datasource's coordinate system. Otherwise, the data will be displayed in the scene in a wrong way. For example, the model is imported into the datasource with the plane coordinate system, but the coordinates of the model position are set to the latitude and longitude, and the model data will not be displayed when loading the model data to the scene.

