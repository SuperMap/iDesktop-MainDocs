---
id: ImportCAD
title: Importing CAD
---
### Introduction

Two AutoCAD formats are supported DWG and DXF. DXF (Drawing Interchange Format) is a file format developed by AutoCAD to exchange with other software data formats. It the ASCII or binary file format of the graphics file, used to export graphic to other application or import graphic form other application. DWG is the graphics file of AutoCAD, it is used to save the standard file format of vector graphic.

Supports import and export AutoCAD 2007 and earlier versions.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...
* Toolbox > Data Import > AutoCAD > Import DXF/DWG/DGN. (iDesktopX)

### Basic Steps

1. In the dialog box Import Data, click the Add File icon to open the Open dialog box and navigate to the file you want to open. 
2. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).
3. **Result setting**
* Dataset Type: Select the dataset type to import, CAD dataset or GIS dataset. 
  1. CAD Dataset: Check this radio button to import a file into a CAD dataset.
  2. Simple Dataset: Check this radio button to import a file into either a point, line, region, text, tabular, CAD line and CAD region dataset.
* **Create Spatial Index** : creates a spatial index supported by the dataset to improve the query and accessing efficiency.
* **Import Null Dataset** : If an empty dataset needs to be imported, please check the checkbox. Otherwise, the application won't import the dataset.
4. **Conversion Parameters**
* **Curve Accuracy** : Sets the edge accuracy of line or region objects. By default, the curve fitting accuracy is 73. Curve Fitting Accuracy can only be set when importing AutoCAD DXF files (*.dwg) or AutoCAD Drawing (*.dwg) files.
* **Font Library** : If the imported source file has an associated font file (* .shx), you need to add it here to avoid font missing and incomplete display in the CAD data.
* **Unite Layers** : If checked, when importing DWG/DXF files, all the layers will be united as one layer. It is checked by default.
* **Import Symbol Block** : Specifies whether you want to import symbol blocks or import them as point objects when importing DWG/DXF files. It is checked by default.
* **Import Extended Field** : Specifies whether you want to import the extended data of an AutoCAD graphics file. This control is only available when importing AutoCAD DXF files (*.dwg) or AutoCAD Drawing (*.dwg) files. By default, this box is unchecked. If you check this box, the fields of the extended data will be appended to the attribute table. 
* **Import Invisible Layers** : If checked, when importing DWG/DXF files, the invisible layers in AutoCAD graphic file will be imported. In AutoCAD, layer invisible are very useful, when there are multiple layers, different layer saves different objects, when there is no need to display these objects, just set the layer as invisible.
* **Import Block Attribute** : If checked, when importing DWG/DXF files, the block properties will be imported. It is checked by default.
* **Import Extension Records** : If checked, when importing DWG/DXF files, the user-defined fields and attribute fields will be imported as extended records. It is checked by default.
* **Keep Object Height** : When the imported CAD includes the 3D objects and you selected this item, it will remain the height information of the 3D objects (the Z coordinates of the object). If you don't check this box, it won't remain the height information. After importedDWG/DXF successfully, the attribute table in the created dataset will create theElevation , which is used to store the object height information.
* **Keep Parametric Object** : When the imported CAD includes the parametric object and you selected this item, The created CAD dataset contains the CAD region and line object of the parametric object. If you don't check this box, it will don't contain the parametric object.
* **Keep LWP Line Width** : If checked, when importing DWG/DXF files, the width of the Polyline in the AutoCAD graphic file will be retained. In CAD, polyline is multiline composed by a series of straight lines and arcs, each line may has its width. It is checked by default.
* **Sets Scale Factor** : When the imported data is *.dwg data, support to set the data in the X, Y, Z direction of the scaling value.
5. **Style Settings** : allows to import a style comparison table to set the resulting CAD style. 

**Style Comparison Table** : filename extension is *.stt. Content includes seven parts: the table header, version, line comparison, font comparison, fill comparison, symbol comparison, and dxf file file.

SuperMap Style Mapping Table
Version 6.0

LineStyleBegin
(id:Continuous),(id:963867;c:0xff0000;w:1)
LineStyleEnd

SymbolBegin
(id:GROUND),(id:1110;g:root;c:0x0000ff;a:0; s:1)
SymbolEnd

FillStyleBegin
(id:ANGLE),(id:015;a:60;fc:0xff0000;bc:0x000000)
FillStyleEnd

FontBegin
(id:arial),(id:System;a:0;fc:0x00ff00;bc:0x000000;xs:1;ys:1)
FontEnd

dxffile
Expstyle.dxf

---

Among them, SuperMap Style Mapping Table is the table header. Version 6.0 is
the version of the table. LineStyleBegin and LineStyleEnd are the start and
the end of the line comparison. SymbolBegin and SymbolEnd are the start and
the end of the symbol comparison. FillStyleBegin and FillStyleEnd are the
start and the end of the fill comparison. FontBegin and FontEnd are the start
and the end of font comparison. dxf file is the label to identify dxf file
which will be used for exporting.

* **Line comparison** : The line comparison part begins with LineStyleBegin and end up with LineStyleEnd. Each line between them defines one line relationship which composes of two domains separated by a comma. Content of each domain could be:

Domain 1 | Domain 2
---|---
External line-style name | SuperMap line-style name, color, and width (unit: mm)

* **Symbol comparison** : The symbol comparison part begins with SymbolBegin and end up with SymbolEnd. Each line between them defines one symbol relationship which composes of two domains separated by a comma. Content of each domain could be:

Domain 1 | Domain 2
---|---
The compared reference or cell name of dgn | SuperMap symbol name, group name, symbol color, symbol slant angle, and symbol scaling ratio

* **Fill comparison** : The symbol comparison part begins with FillStyleBegin and end up with FillStyleEnd. Each line between them defines one fill relationship which composes of two domains separated by a comma. Content of each domain could be:

Domain 1 | Domain 2
---|---
External fill-style name | SuperMap fill name, fill rotation, foreground color, and background color

* **Font comparison** : The symbol comparison part begins with FontBegin and end up with FontEnd. Each line between them defines one font relationship which composes of two domains separated by a comma. Content of each domain could be:

Domain 1 | Domain 2
---|---
External font name | SuperMap font name, rotation, foreground color, background color, x-axis scaling ratio, and y-axis scaling ratio

* **dxffile file** : a dxf file file is identified by the keyword dxf file which is used for outputting a dxf or dwg file. When importing a CAD file, this label is unnecessary. and so it can be omitted. 

The dxf file indicated by the dxf file label is customized which can define blocks, line styles, and text styles.

Styles of symbols and lines are defined by blocks and line styles saved in the dxf file. While fill styles corresponds with the real fill and the fill scale is 1 always. Font height and color is consistent with SuperMap and others are the same as the styles defined by the dxf file.

If you set the style comparison when exporting a file, the default style will be adopted unless you define it in a dxf file.

* After the setting, click Import to perform the operation.

### Note

If the imported data includes the parameterized object ans check tis box, according to the different dataset types, there are two situations below:

* CAD Dataset: If you choose the CAD Dataset as the dataset type when importing. The created CAD dataset contains the CAD region and line objects with the parametric object.
* Simple Dataset: If you choose the Simple Dataset as the dataset type when importing. It will create the CAD regions or lines for the parametric object storage.
