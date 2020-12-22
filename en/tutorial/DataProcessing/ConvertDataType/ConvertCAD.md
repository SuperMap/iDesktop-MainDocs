---
id: ConvertCAD
title: CAD to Simple
---
### ![](../../img-en/read.gif)Instructions

Convert a CAD dataset into several simple datasets. Each type of simple
objects will be converted into a dataset of the corresponding type. For
parameterized geometric objects, the output simple datasets will not record
the parameter information. These objects will be regarded as polylines with
several neighboring vertices, the information of which is recorded.

### ![](../../img-en/read.gif)Basic Steps

  1. In the Data Processing group on the Data tab, click the Conversion dropdown arrow and select CAD to Simple.
  2. In the CAD to Simple dialog box that shows up, select the datasource holding the CAD dataset in the Source Dataset area.
  3. In the Target Dataset area, select the datasource for result datasets. Select the types of the simple datasets to convert into. Name the result simple dataset, or you can use the default name. For example, if you check the Line Dataset check box, the line objects in the CAD dataset will be output to a line dataset.
  4. Click "Convert" to complete the operation.

### ![](../../img-en/note.png) Note

This function can only be performed on 2D/3D points/lines/regions in a CAD
dataset. Models are not supported. If the CAD dataset only contains models,
then the Dataset Type option and the Convert button are disabled.


