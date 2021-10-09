---
id: ExportData
title: Exporting Data
---
### Instructions

The data exporting application provides 20 formats. Please refer to the **Data Format supported by Data Exporting** of [Data Formats Supported by Types Conversion](GeoFormates) for more information about the formats.

### Function entrances

* Start tab > Data Processing group > Export Data.
* In the context menu of a datasource or a dataset, select Export Dataset...

### Basic Steps

1. Click the Add button or double-click the listbox on the left. In the Select dialog box that shows up, select one or more datasets, then clicking OK to add the selected dataset(s) to the listbox.
2. All datasets you added will be listed in the listbox. With the commands organized on the toolbar of the Data Export dialog box, you can add, remove datasets from the list, or uniformly modify the properties of several datasets. The listbox includes: 
* Dataset: Displays the dataset you want to export.
* Export Type: Specifies to which format you want to export a dataset.
* Replace: Specifies whether you want to export a dataset when there is already one dataset with the same name in the specified directory. Check the box to export the dataset and replace the existing dataset in the export directory. If you uncheck the box, the dataset will not be exported if a dataset with the same name already exists in the export directory. 
* Status: The status of a dataset will be respectively shown as Unconverted, Successful, and Failed when it has not been not exported, successfully exported and failed to be exported. 
* Result File: Specifies the name of the exported file. By default, the result name is the same with the original name. 
* Export Path: Specifies where you want to place the resulting file. To change a directory, you can double-click on the cell to display the Browse for Folder dialog box, then navigating to the folder where you want to place the file. 
3. You can select one or more datasets, and then set corresponding parameters on the right side of the Data Export dialog box. You may need to specify different parameters for different types of datasets.

**Export a vector dataset** :

* Export Extended Field: Specifies whether or not to export the extended fields of the AutoCAD file. 
* Export Extension Records: Specifies whether or not to export the extended records of the AutoCAD file.
* Export Point as WKT: Used to show or set whether exporting the point data as the WKT field.
* Export Header: Used to show or set if exporting the file's header information.
* Charset: The character encoding used by the exported dataset. In order to ensure that the data set can be displayed correctly, you need to use the appropriate character set. For a list of character sets supported by the application, see the [ character set list ](../DataManagement/Charset).
* CAD Version: Specifies the version of the exported AutoCAD DWG File (*.dwg) or AutoCAD DXF File (*.dxf). Currently, AutoCAD 2000, AutoCAD 2004, AutoCAD 2007, AutoCAD R12, AutoCAD R13, and AutoCAD R14 are supported. By default, AutoCAD 2007 is selected.
* SQL Expression: You can filter out objects that do not need to be exported by setting a filter expression. For information on how to use SQL expressions, see [ SQL Expressions](../../Query/SQLDia).

**Export File GDBVector**:

* Click **Add** icon to add more datasets. Multiple datasets can export to the same File GeoDatabase Vector(*.gdb) when setting all Export types to **File GDBVector File**. 

**Export Raster Dataset and Image Dataset** :

* **Compress Type** : when converting image data resulting in TIFF files, you can specify the compression type. The application provides four types including None, LAW, JPEG, and DEFLATE. 
  * None: it means the application won't compress image data.
  * LZW: it is a lossless compression method. It adopts an advanced algorithm to improve the efficiency of compressing images.
  * JPEG: JPEG is a lossy compression algorithm based on the discrete cosine transform (DCT). The compression algorithm can be used in 8 bit unsigned raster data or the first 12 bits of a 16-bit data. 
  * DEFLATE: it is a lossless compression mode adopting both the LZ77 algorithm and a lossless compression algorithm of Huffman. 
* Compression: Specifies the compression ratio. 75% is by default. This parameter is active only when you want to export a dataset as a .jpg file. 
* Reference File: Specifies where you want to place the coordinates reference file of the selected grid dataset when exporting it to a .jpg, .png, .bmp, or .gif file. You can click the Browse button ![](img/OpenPrjFile.png) to specify a directory for the coordinates reference file.
* Save Affine Information: Specifies whether you want to export the projection information, the mapping between the image coordinates and geographic coordinates, to an external .tfw file. The item is only available when exporting a dataset to .tiff format. By default, the box is checked, indicating that the affine information will be exported to an external .tfw file. If you uncheck the box, the affine information will be exported to the .tiff file.
* **Export as Tile** : Exports raster data or image data as a Tiff(*.tif) file. The checkbox is active when you set the Export Type to TIFF File.
* **Password** : You can set a password for your SIT data when exported.
* **Confirm Password** : Confirms the password by retyping. 

**Note** : You need to enter the password to use any SIT data with a password. For example, opening it as a datasource after importing, or adding it to a scene as image cache, or creating cache for it.

4. To automatically close the Export Data dialog box when the operation is finished, you can check the checkbox Close When Finished at the bottom of the dialog box.
5. Click Export to export all datasets in the listbox. In the Export Progress window, you can view the exporting procedure.

### Note

1. If datasources in the workspace are all based on ImagePlugins engine, the Export command would not be available.
2. When exporting datasets, the datasource based on ImagePlugins engine will display in the datasource list, however, you will not be able to add datasets in the datasource to the export list.
3. To export datasets in the format of KML or KMZ successfully, their coordinate systems must be WGS_1984.
4. When exporting the vector as a vct file, you must set the vct corresponding layer type, otherwise it will fail to export.
5. When importing or exporting clutter data, note the following points: 
* Clutter data only supports the importing and exporting of Grid dataset.
* Clutter data only the support importing and exporting of 16-bit grid data. The export data will be converted to 16-bit automatically if the bit depth if less 16.
* Clutter data only support the importing and exporting of grid dataset whose resolution is a integer and the X resolution and Y resolution are the same.
6. Only attribute tables with records no more than 100,000 will be exported to a Microsoft Excel. If the number of records is 0, export will fail. 
7. As a third party TIF library is used in this product, images more than 4G cannot be exported to TIFF. If your data is larger than 4G, it is advised you split them into smaller files, or export them to SIT format
8. Currently, 4G is the maximum size of the SHP file that the application can export. If the source data is too large, we suggest you to export it as FileGDB files. 
