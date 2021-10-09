---
id: ConvertCAD
title: CAD to Simple
---
### Instructions

Converts a CAD dataset into several simple datasets. Each type of simple
objects will be converted into a dataset of the corresponding type. For
parameterized geometric objects, the output simple datasets will not record
the parameter information. These objects will be regarded as polylines with
several neighboring vertices, the information of which is recorded.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **CAD to Simple**.
* **Toolbox** > **Conversion** > **Conversion among CAD, compound data, and simple data** > **CAD-> Simple**. (iDesktopX) 

**Operating Instructions**

1. In the CAD to Simple dialog box that shows up, select the datasource holding the CAD dataset in the Source Dataset area.
2. In the Target Dataset area, select the datasource for result datasets. Select the types of the simple datasets to convert into. Name the result simple dataset, or you can use the default name. For example, if you check the Line Dataset check box, the line objects in the CAD dataset will be output to a line dataset.
3. Click **Convert** to perform the operation.

**Note** : This function can only be performed on 2D/3D points/lines/regions
in a CAD dataset. Models are not supported. If the CAD dataset only contains
models, then the Dataset Type option and the Convert button are disabled.

### Simple to CAD

Converts different types of simple datasets to a CAD dataset.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **Simple to CAD**.
* **Toolbox** > **Conversion** > **Conversion among CAD, compound data, and simple data** > **Simple to CAD**. (iDesktopX) 

**Operating Instructions**

1. In the **Simple -> CAD** dialog box, select the datasource to save the simple dataset. Click the **Add** icon to open the Select dialog box and select one or more datasets. Also you can combine other buttons in the toolbar to select datasets.

After completing the addition operation, the simple datasets to be converted
are listed in the Simple -> CAD area. You can click the table head "Source
Dataset" to sort the simple datasets.

2. Set the target datasource where you want to place the result CAD dataset and the name of the result dataset in the Target Data area.
3. Click **Convert** to execute the operation.

### CAD to Model

Converts the model objects in a CAD dataset to model data.

The model dataset is a new dataset mode added by SuperMap to replace the usage
of saving models into CAD. And now the management and operation to the 3D
models and other types of dataset can be consistent, meanwhile the display
efficiency is improved greatly.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **CAD to Model**.
* **Toolbox** > **Conversion** > **Conversion among CAD, compound data, and simple data** > **CAD to Model**. (iDesktopX) 

**Operating Instructions**

1. A dialog will show up. If a CAD dataset is selected in the workspace manager, it will be added to the list by default.
2. Specify the dataset to be converted and set a datasource to save the resulting dataset.
3. Click **Convert** to perform the operation.

