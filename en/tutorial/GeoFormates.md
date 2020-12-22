---
id: GeoFormates
title: File Formats Supported
---
We may deal with SuperMap formats and external data formats during GIS
processing. The conversion function provides the converting ability among
different file formats.

Below are the supported files formats for import and export.

1. Vector Data 

2. Raster Data 

3. Model Formats 

### ![](../../img/read.gif)Vector Formats That Can Be Imported

Vector Formats  | Description | Imported To  | Export  
---|---|---|---  
[AutoCAD Drawing (*.dwg) ](ImportCAD.htm) |  AutoCAD DWG  | CAD dataset, GIS dataset | v  
[AutoCAD DXF File (*.dxf) ](ImportCAD.htm) | AutoCAD DXF  | CAD dataset, GIS dataset | v  
ArcInfo E00 (*.e00)  | ArcInfo E00 | GIS dataset | v  
[ArcView Shape File (*.shp) ](ImportSHP.htm) | ArcView GIS format  | GIS dataset | v  
GeoDatabase Vector File (*.gdb)  |  ESRI Geodatabase vector file can be imported to multiple vector datasets.  | GIS dataset | v   
ArcGIS Personal GeoDatabase (*.mdb) | Personal geo-database data files which can be imported as point, line, region, text or tabular datasets. **Note** :The kinds of files use the Microsoft Access data structure that's why you need to install AccessDatabaseEnge.exe first. The installed type of
AccessDatabaseEnge depends on the type of your iDesktop. For example, if your iDesktop is 64-bit, you need to install 64-bit AccessDatabaseEnge. Simple dataset |  
MapInfo TAB (*.tab)  | MapInfo TAB | CAD dataset, GIS dataset | v  
[MapInfo Exchange File (*.mif) ](ImportMif.htm) | MapInfo Exchange File | CAD dataset, GIS dataset | v  
[MapInfo WOR File (*.wor) ](ImportWor.htm) |  MapInfo workspace file  | GIS dataset |  
MapGIS Exchange File (*.wat; *.wal; *.wap; *.wan) | MapGIS Exchange File(*.wat; *.wal; *.wap; *.wan) | CAD dataset, GIS dataset |  
[Microsoft Excel (*.xlsx) ](ImportExcel.htm) | Office 2007 *.xlsx  | tabular dataset | v  
[CSV (*.csv) ](CSVimport.htm) | Text format  | tabular dataset |  [LIDAR (*.txt) ](ImportLidar.htm) | Point cloud  | 2D/3D point dataset  | v  
dBASE(*.dbf) | Table data for ShapeFile | Attribute table data set |  DGN (*.dgn) | Microstation DGN file. | Vector dataset |  
VCT(*.vct) | National standard vector file. | Vector dataset | v  
Telecom Building Vector | Telecom vector region data | Region dataset | v  
Telecom Vector File  | Telecom vector line data | Line dataset | v  
GJB Folder | Chinese national military file. | Point, line, region, tabular dataset | v  
S-57 Nautical chart (*.000) | S-57 nautical data. Nautical extension license is required. | Nautical dataset group | v  
GeoJson File | GeoJson is a kind of geo-spatial data data exchange format based on the JavaScript object representation. | Point, line, region, CAD
dataset | v  
[SimpleJson Data File (*.json) ](ImportSimpleJson.htm) | SimpleJson(*.json) is a unique data format supported by SuperMap software, including two files:(*.json) and (*.meta). Metadata information is stored in (*.meta ) file, and the member information is saved into the (*.json) file. | Point, line, region,CAD dataset | v  
GPS File (*.gpx )  | *.gpx file is on GPS track points recorded by GPS devices, it is a lightweight, xml data-interchange format. | Point dataset | v  
OpenStreetMap Data File (*.osm)  | *.osm file is a vector data file which is created for storing information about street maps by ASCII. It can be exported as a point, line or region dataset but CAD dataset.  | Point, line, region dataset |  
  
### ![](../../img/read.gif)Raster Formats That Can Be Imported

Raster Formats  | Description | Import To  | Export  
---|---|---|---  
ArcInfo Grid (*.grd; *.txt)  | ArcInfo Grid  | grid dataset | v  
[Erdas Image (*.img) ](ImportIMG.htm) | Erdas Image | image dataset, grid
dataset | v  
[TIFF (*.tif; *.tiff) ](ImportIMG.htm) | TIFF (Tagged Image File Format) |
image dataset, grid dataset | v  
Bit Map (*.bmp)  | Bit Map  | image dataset, grid dataset | v  
PNG (*.png)  | PNG | image dataset, grid dataset | v  
GIF (*.gif)  | GIF | image dataset, grid dataset | v  
JPG (*.jpg; *.jpeg)  | JPG | image dataset, grid dataset | v  
JPEG2000 (*.jp2, *.jpk)  | JPEG2000  | image dataset, grid dataset |  
ECW (*.ecw)  | Erdas ECW  | image dataset |  
SIT (*.sit)  | SuperMap SIT  | image dataset | v  
USGDEM and GBDEM Raster (*.dem)  | USGDEM and GBDEM Raster  | grid dataset |  
BIL (*.bil)  | BIL  | grid dataset |  
BIP (*.bip)  | BIP  | grid dataset |  
BSQ (*.bsq)  | BSQ  | grid dataset |  
RAW (*.raw)  | RAW | image dataset |  
MrSID (*.sid)  | MrSID | image dataset, grid dataset |  
Telecom Raster File (*.b, *.bin)  | Telecom Raster File | grid dataset |  
ASCII Grid File(*.asc) | ArcGIS for Desktop Advanced grid swap file. | image dataset, grid dataset |  
GDAL Virtual Data Format (*.vrt) | A kind of file format created by Geospatial Data Abstraction Library (GDAL). This format allows to obtain virtual datasets from readable datasets in GDAL. Multiple raster data formats are supported,includingL TIFF, IMG, DEM and so on. | Image dataset, Raster dataset |  
  
### ![](../../img/read.gif)Model formats that can be imported:

Model Formats  | Description | Imported To  | Export  
---|---|---|---  
SketchUp 3D model file (*.skp)  | 3D model data which can be imported to a model dataset. | CAD, model dataset |  
[3DS (*.3ds) ](ImportModelData.htm) | 3D models can be imported to a model dataset | CAD dataset, model dataset |  
[DXF (*.dxf) ](ImportModelData.htm) | 3D models can be imported to a model dataset | CAD dataset, model dataset | v  
[DirectX (*.x) ](ImportModelData.htm) | 3D models can be imported to a model dataset | CAD dataset, model dataset | v  
[ OSGB (*.osgb, *.osg) ](ImportModelData.htm) | Oblique Imagery can be imported to a model dataset  | CAD dataset, model dataset |  
Google KML (*.kml)  | Keyhole Markup Language (KML)  | CAD dataset, GIS dataset | v  
Google KML zip file (*.kmz) | KML file compression package for the KMZ. | CAD composite datasets, dataset | v  
OBJ (*.obj) | Alias company based on the workstation 3D modeling and animation software Advanced Visualizer development of a standard 3D model file format. |CAD composite datasets, model datasets |  
DAE (*.dae) | DAE or Digital Asset Exchange, also known as the Collada model,is the core of the exchangeable Khronos 3D model format. | CAD composite
datasets, model datasets |  
IFC (*.ifc) | IFC, Industry Foundation Classes, Standard for Construction Engineering Data Exchange. | CAD composite datasets, model datasets |  
FBX (*.fbx) | AutoDesk's free 3D data interchange format for cross-platform. |CAD composite datasets, model datasets |  
3D print 3D model file (*.stl,*.off)  | 3D model data, which can be imported as a model dataset. | CAD composite datasets, model datasets | v  
Geo3DML (*.xml)  |  geological body model data which can be imported to a model dataset. | CAD, model dataset |  
TIN terrain cache file (*.tinz)  | Terrain model data, which can imported as a model dataset. | CAD composite datasets, model datasets | v  
TIN terrain file (*.sct)  |  Terrain model data, which can imported as a model dataset. | CAD composite datasets, model datasets | v  
  
