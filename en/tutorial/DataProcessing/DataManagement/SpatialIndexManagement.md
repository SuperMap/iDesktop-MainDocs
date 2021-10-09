---
id: SpatialIndexManagement
title: Managing Spatial Indexes
---
### Instructions

The Spatial Index command allows you to manage the spatial indexes for the selected datasets.

### Basic Steps

1. In the Workspace Manager, select the datasets whose spatial indexes you want to view or modify. You can select several datasets using Shift + click or Ctrl + click.
2. On the Start tab, click Data Processing > Spatial Index to display the Spatial Index Manager.

The Original Index indicates the original index type of a dataset. To create a new type of spatial index for a dataset, change its Target Index in the Spatial Index Manager.

To know more about the Spatial Index Manager, please refer to the introduction to the Spatial Index Manager in this page.

3. If you want to create a new type of spatial index for a dataset, you can set the Target Index for it, and then click Create at the bottom of the Spatial Index Manager.
4. After creating or viewing the spatial indexes for datasets, you can click Cancel to close the Spatial Index Manager.

The list box on the left side of the Spatial Index Manager lists all datasets selected for spatial index management. The information about each dataset are also displayed in the list box.

* Dataset: Displays the type, alias of the vector dataset and the name of the datasource which contains the dataset.
* Datasource: Display the data source of the vector data set.
* Original Index: The original spatial index type of the dataset.
* Original Index: The original spatial index type of the dataset.

Target Index: The type of the index you want to create for the dataset.

* The Target Index combo box on the right side of the Spatial Index Manager is bound to the selected items in the list box. If one or more datasets have been selected in the list box, you can set the the Target Index for them together with the Target Index combo box.

Under the Index Type combo box is the description of the spatial index type selected in the combo box.

* Create: Create spatial indexes for datasets in the list box according to the specified types of Target Index. Remember to remove the datasets you don't want to create spatial indexes for before clicking Create. 
* Close: Close the Spatial Index Manager. 

Parameter Settings

**Tile index** : Click the dropdown button on the right of "Index Type", and select "Tile index" . You need to set parameters for a Field Index or a Grid Index.
* Field Index: Sorts the dataset objects by the values of a specific field.
* Grid Index: Sorts the dataset objects by dividing the dataset into grid cells with a specified width and height. The unit of the width and height is the same with that of the dataset. 

**Dynamic index** : Click the dropdown list of "Index Type", and select "Dynamic index" . You need to set parameters for a Field Index or a Grid Index.

* Center Point: Sets the center of the index, usually the cetner of the dataset. 
* Level 1 Width: Set the cell size if the first level of grids for the dynamic index. This parameter cannot be set to 0. The unit of this parameter is the same with that of the dataset. 
* Level 2 Width: Set the cell size if the second level of grids for the dynamic index. The unit of this parameter is the same with that of the dataset. 
* Level 3 Width: Set the cell size if the third level of grids for the dynamic index. This parameter cannot be set to 0. The unit of this parameter is the same with that of the dataset.

**Note** : Dynamic index is supported in the following engine types: SQLPlus, OraclePlus, DB2, MySQL.

### Note

1. supports r-tree index, quadtree index, dynamic index and tile index.
2. UDB and POSTGRESQL datasources only support r-tree index.
3. DB2 datasources only support dynamic index.
4. Other database datasources support r-tree index, quadtree index, dynamic index and tile index.
5. CAD datasets have no support to any dynamic index.
6. Route datasets do not support tile index.
7. Tabular datasets have no support to any spatial index.

### Related Topics

For more information on different types of spatial indexes, please refer to [Spatial Index Types](SpatialIndexType).

