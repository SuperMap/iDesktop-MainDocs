---
id: CreateDataset
title: Creating a Dataset
---
### ![](../../img/read.gif)Instructions

The New Dataset Group organizes buttons for you to create different types of datasets using a buttonGallery control. In SuperMap Deskpro .NET, you can create point, line, region, text, CAD, model, tabular, 3D point, 3D line, 3D region, 17 types of datasets through the New Dataset group. Controls in the
New Dataset Group are only available when there are open datasource in the current workspace.

You can create several datasets of different types through the controls organized in the New Dataset Group.

You can browse more controls in the New Dataset Group by clicking the Scroll Up or Scroll Down button. Also, you can display all controls in the group by clicking the Show All button, which is highlighted in the figure above.

### ![](../../img/read.gif)Basic Steps

    1. Click a buttonGallery control in the "New Dataset" group, here we take "Region" as an example.
    2. The "New Dataset" dialog box appears. 
      * Target Datasource: Set the target datasource which contains the new dataset. 

**Note:** The target datasource can be a file datasource or a database datasource.

      * Type: The default type is the dataset type that you clicked in the New Dataset group, it can be changed by selecting from the dropdown menu.
      * Dataset: Type a new dataset name.
      * Add to map: The dropdown menu provides two options: No (do not add to map) and Add to New Map.
    3. After setting the relevant parameters in the list, you need to select whether the data set is created using the template in the Templates area. The specific parameters are as follows:
      * Don't use template: If you check Don't use template you need to set the Encode Type and Charset of the dataset.
        * Charset: You can select the appropriate charset for the new dataset. For a list of supported characters and their introduction, see the [ character set list ](Charset.htm).
        * **Set Coordinate System:** the coordinate system of the newly created dataset. For details on coordinate system settings, please refer to [Projection Settings](../../DataProcessing/Projection/PrjCoordSysSettingWin.htm).
      * Dataset Template: If you select this, you can create a dataset based on the template you specified, the dataset attribute table structure and most of the attributes you want to create are consistent with the template dataset. Note: The newly created dataset range is 0 with no spatial index and no objects.
      * Store Type: For a datasource in MongoDB database type, the storage type can be Supermap or Geojson, among them, Supermap is the type customized by SuperMap, Geojson is a storage type for spatial data in MongoDB.
    4. Several functional controls are organized in the toolbar of the New DataSet dialog box to allow users to set up each dataset in the dataset list.

![](img/close.gif)Toolbar Button Description

      * ![](../../img-en/SelectAll.png) Button: Select all datasets in the list. 
      * ![](../../img-en/SelectInvert.png) Button: Select the inverse datasets layers in the list. 
      * ![](../../img-en/RemoveButton.png) Button: Remove the selected dataset.
      * ![](../../img-en/globalsetting.png) Button: When creating batch of datasets, set the parameters, including the "Target Datasource, "Type", "Encoding" and "Add to Map": 
![](img/setting-en.png)  
---  
Figure: The Unified Settings dialog box  
    5. Click "OK" to finish the creating of a new dataset.

### ![](../img/note.png)Note

    * If more than one datasources are selected in the workspace manager, when clicked a button in the "New Dataset" group, the default target datasource of the new dataset is the headmost datasource selected.
    * When creating point dataset, tabular dataset or CAD dataset, encoding type is no encoding and can't be changed.
    * If no datasource is selected, the default target datasource is the firset datasource in the workspace manager.
    * Dataset naming scheme: 
      1. Composed by letters, numerals and underlines, and can only start with a letter.
      2. The length can not be 0, or grater than 30.
      3. Can't contain illegal characters.
      4. Can't use the reserved fields.

### ![](../img/seealso.png)Related Topics

![](../img/smalltitle.png)[Preserved Keywords List of Database](DatabaseKeyWords-en.htm)


