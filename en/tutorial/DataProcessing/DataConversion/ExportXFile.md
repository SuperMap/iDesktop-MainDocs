---
id: ExportXFile
title: Exporting *.X Model File
---
### Introduction

*.X file a the 3D model file developed by Microsoft. It is mainly used to save the model objects (vertex information), the textures, actions and so on. *.X file is a structured file based on template-driven. This structure has advantages of free structure, rich contents, easy to use and high portability.supports for exporting the CAD 3D model dataset into *.X model file, which is convenient for users to use these models in other applications.

### Functional entrances

* Start tab > Data Processing group > Export Data.
* In the context menu of a datasource or a dataset, select Export Dataset...

### Basic Steps

1. In the Export Data dialog box, click the **Add** button in the toolbar to add the CAD model dataset. The adding mode refers to the introduction for [Export Data](ExportData).
2. Set the basic parameters for the exported data. 
  * Export Type: Click the cell below Result Type, and pop up the combo box. Click the drop arrow key of the combo box and select the result type as .X File.
  * Result File: The dataset name after exported.
  * Replace: If there has a dataset with the same name, it will replace the contents in the data.
  * Status: Before export, the status is Unconverted and After exported, the status is Successfully.
  * Export Path: The file path to export. Double click the cell below the Export Path, and pop up the Browse For Folder window. Set the directory path to export.
3. After finish the settings, click the Export button to export the *.X file.

After exported successfully, there are some .x files and images in the result
path. A model object in the CAD dataset can be exported into a *.X file; The
images are the textures in the model. The name of .X file is as shown below:
The name of CAD model dataset + Numbers.

