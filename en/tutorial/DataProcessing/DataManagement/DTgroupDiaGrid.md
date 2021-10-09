---
id: DTgroupDiaGrid
title: Grid Dataset  
---  
The properties of the grid datasets are classified into 3 groups: General Info, grid Dataset and Projection Info. Each group of the properties are introduced in detail below:

### Dataset Info

Click "Dataset" panel on "Properties" window to view property information of the image dataset.

**Basic Info:**

  * **Name** : The name of the dataset.
  * **Type** : The type of the dataset.
  * **Table Name** : The name of the attribute table of the dataset.
  * **Encode** : The encoding mode of the grid dataset. For more information on different encoding modes, please refer to [Encoding Modes for Dataset Compression](EncodeType).

**Dataset Bounds:**

  * **Top, Bottom, Left, and Right** : The bounds of the grid dataset. The unit of each value is identical to that of the dataset. 
  * **Copy and Paste** : Copy and paste current dataset range by clicking Copy button and Paste button.

**Description:**

  * The descriptive information about the grid dataset. You can modify it according to your needs.

### Coordinate

The "Property" panel displays the projection information of the current raster dataset.

  * **Coordinate System** : The name of the coordinate system employed by the grid dataset.
  * **Unit** : The distance unit of the grid dataset.
  * **Coordinate Information** : The detail about grid dataset projection.

Buttons in the toolbar of the Coordinate panel.

  * **Reset** : Set the projection of the grid dataset again. To know how to reset projection, please refer to [Projection Settings Window](../Projection/PrjCoordSysSettingWin).
  * **Copy** : Click Copy button to copy coordinate system information as projection information of current dataset. You can copy information from the existed datasource or dataset or local projection information file (seven kinds of files: *.TIF, *.SIT, *.IMG, *.SHP, *.MIF, *.TAB, *.XML). 
  * **Import/Export** : Import a projection file or export the projection of the grid dataset as an .xml file.
  * **Convert** : This button is to convert current projection information for the selected dataset. For detail settings, please see [Convert projection](../projection/ConvertPrjCoordSys). 

### Raster

You can click a child node under the grid Dataset node to display the dataset information about the corresponding grid dataset.

**Image:**

  * **Pixel Format** : The number of bits used to represent the color value of each pixel in a grid dataset.
  * **Resolution X** : The resolution in the X direction.
  * **Resolution Y** : The resolution in the Y direction.
  * **Null** : The value for cells with no data.
  * **Rows** : The number of rows of the pixel matrix for the grid dataset.
  * **Columns** : The number of columns of the pixel matrix for the grid dataset.
  * **Color Scheme** : Used to set the display color for pixel of grid dataset. This setting is useful only for the grid dataset, if you want to modify the color table of the grid dataset in map, please see [Color Table Setting](../../Visualization/VisualSetting/ColorTableDia).
  * **Raster Block** : The size of each grid block. For example, if the value is 256*256, the size of each raster block is 256*256 in pixel. Data within one raster block will be processed together.

**Extremum:**

  * **Max** : The maximum cell value. 
  * **Min** : The minimum cell value. 

**Others:**

  * **Pyramid:** Whether the grid dataset has created the pyramid.
  * **Visible Bounds:** The visible bounds of the grid dataset on the map. Content outside the bounds is invisible. 

Click the Settings button to open the dialog box Set Visible Bounds where you can select a region dataset as the visible bounds of the grid dataset. Or, you can click ![](img/button1.png) and type the filter conditions to control the visible extent. Please refer to [SQL Expression](../../Query/SQLQueryDia) for specific information.

Click on the button "Reset" to display the whole bounds of the dataset.

###  Note

The feature Reset is not active. Please refer to [Projection Transformation](../Projection/ConvertPrjCoordSys) for specific operations.

