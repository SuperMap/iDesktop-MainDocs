---
id: CreateDataset
title: Creating a Dataset
---
### Instructions

The New Dataset gallery in the Start tab organizes a series of controls for data creation. These controls are only available when there is at least one datasource opened in the current workspace.

You can create several datasets of different types through the controls organized in the New Dataset Group.

You can browse more controls in the New Dataset Group by clicking the Scroll Up or Scroll Down button. Also, you can display all controls in the group by clicking the Show All button, which is highlighted in the figure above.

### Basic Steps

1. Click a control in the "New Dataset" group. Here we take "Region" as an example.
2. The "New Dataset" dialog box appears. 
* Target Datasource: Set the target datasource which contains the new dataset. 

**Note:** The target datasource can be a file datasource or a database datasource.

* Type: The default type is the dataset type that you clicked in the New Dataset group, it can be changed by selecting from the dropdown menu.
* Dataset: Type a new dataset name.
* Add to Map: The dropdown menu provides two options: UnAdd (do not add to map) and New Map (add to a new map).
3. After setting the parameters in the list, you need to select if you want to use a template to create a dataset. The specific parameters are as follows:
* Don't use template: You need to set the Encode Type and Charset of the dataset if you don't use a template.
* Charset: You can select the appropriate charset for the new dataset. Please consult [Character Set List ](Charset) to know about charsets supported by iDesktop .NET.
* **Set Coordinate System:** the coordinate system of the newly created dataset. For details on coordinate system settings, please refer to [Projection Settings](../../DataProcessing/Projection/PrjCoordSysSettingWin).
* Use Template: If you check this box, iDesktop .NET will create a dataset based on the specified template. The created dataset results in the same attribute table structure and most attributes as the template dataset. Note: The newly created dataset range is 0 with no spatial index and no objects.
* Store Type: For a datasource in MongoDB database type, the storage type can be SuperMap or Geojson, among them, SuperMap is the type customized by SuperMap, Geojson is a storage type for spatial data in MongoDB.
4. Several functional controls are organized in the toolbar of the New Dataset dialog box to allow users to set up each dataset in the dataset list.
5. Click "Create" to create a new dataset.

### Note

* If more than one datasources are selected in the workspace manager, when clicked a button in the "New Dataset" group, the default target datasource of the new dataset is the headmost datasource selected.
* When creating point dataset, tabular dataset or CAD dataset, encoding type is no encoding and can't be changed.
* If no datasource is selected, the default target datasource is the firset datasource in the workspace manager.
* Dataset naming scheme: 
1. Composed by letters, numerals and underlines, and can only start with a letter.
2. The length can not be 0, or grater than 30.
3. Can't contain illegal characters.
4. Can't use the reserved fields.

### Related Topics

[Preserved Keywords List of Database](DatabaseKeyWords)

