---
id: GeoFormates
title: 类型转换支持的数据格式
---
我们在进行 GIS 处理时，除了使用 SuperMap
自己的数据格式外，还需要对多种外部的数据格式进行操作。数据转换功能提供了不同数据格式之间的互转，很好地支持了多种数据格式。

下文给出了数据导入和数据导出支持的数据格式列表，方便用户的使用。

1. 支持导入的矢量文件格式

2. 支持导入的栅格文件格式

3. 支持导入的模型文件格式

### ![](../../img/read.gif)支持导入的矢量文件格式

支持导入的矢量文件格式 | 文件说明 | 支持导入为数据集类型 | 是否支持导出  
---|---|---|---  
[AutoCAD Drawing 文件（*.dwg）](ImportCAD) | DWG 是 AutoCAD 的图形文件，专门用于保存矢量图形的标准文件格式，它是一种基于矢量的二进制文件格式。 | CAD复合数据集、简单数据集 | √  
[AutoCAD DXF 文件（*.dxf）](ImportCAD) | DXF 文件是AutoCAD的一种图形交换文件，用于AutoCAD与其它软件之间进行CAD数据交换，它是一种基于矢量的ASCII文件格式。 | CAD复合数据集、简单数据集 | √  
ArcInfo Export文件（*.e00） | E00 文件是 ESRI ArcInfo 的通用交换格式文件。通过 ASCII 明码方式，E00 包含了几乎所有的矢量格式以及属性信息。 | 简单数据集 | √  
[ArcView Shape 文件（*.shp）](ImportSHP) | 是 ArcView GIS 软件特有的数据格式，用于存储地理要素的空间和属性信息，是常用的一种矢量数据格式。 | 简单数据集 | √  
GeoDatabase Vector 文件（*.gdb） | 是 ESRI Geodatabase 矢量数据文件，可导入为点、线、面、文本以及纯属性表数据集，导入结果为单个矢量数据集。 | 简单数据集 |  
ArcGIS Personal GeoDatabase 文件（*.mdb） | 是 ArcGIS 个人地理数据库数据文件，可导入为点、线、面、文本以及纯属性表数据集，导入结果为单个矢量数据集。 **注意** ：该文件使用了 Microsoft Access 数据文件结构，因此导入该文件时需要安装一个 **AccessDatabaseEnge.exe** 文件，根据 iDesktop 的位数来决定安装的 AccessDatabaseEnge 类型，比如用64位的iDesktop，就需要安装64位的 AccessDatabaseEnge。| 简单数据集 |  
MapInfo TAB 文件（*.tab） | 是属性数据的表结构文件，以表的形式存储信息，TAB 文件定义了地图属性数据的表结构 |CAD复合数据集、简单数据集 | √  
[MapInfo 交换格式（*.mif）](ImportMif) | 是 MapInfo 用来对外交换数据的一种中间交换文件，保存了 MapInfo 的表结构及对象的空间信息，包括了对象的符号样式、填充模式等风格信息。 | CAD复合数据集、简单数据集 | √  
[MapInfo WOR 文件（*.wor）](ImportWor) | 是 MapInfo 工作空间文件。工作空间文件用于保存表、窗口和窗口位置、地图、布局、资源符号、MapInfo 环境设置等信息。 | 简单数据集 |  
MapGIS 交换格式(*.wat; *.wal; *.wap; *.wan) | 是MapGIS的明码文件，其文件结构由文件头和数据区两部分组成。在MAPGIS文件系统中，其工程文件（后缀名为.MPJ）一般包括点文件（*.WT）、线文件（*.WL）、面文件（*.WP）、网络文件（*.WN）。在执行导入功能之前，必须将 MapGIS 的这些图形文件格式转换为 MapGIS 明码格式，之后再进行导入工作。上述四种文件格式，转化为明码格式后，文件名分别为：点明码文件（*.wat）、线明码文件（*.wal）、区明码文件（*.wap）、网络明码文件（*.wan）。| CAD复合数据集、简单数据集 |  
[Microsoft Excel 文件（*.xlsx）](ImportExcel) | 支持 Office 2007 及更新版本文件，即*.xlsx 格式的文件，通常存储了地理数据的空间和属性信息，可导入为属性表数据。 | 属性表数据集 | √  
[CSV 文本文件（*.csv）](CSVimport) |以文本形式记录数据的文件（通常以逗号为分隔符），这种格式经常用来作为不同程序之间的数据交互的格式。 | 属性表数据集 |  
[LIDAR 文件（*.txt）](ImportLidar) | 激光雷达获取到的数据点非常密集，也被称为点云数据。 | 二维点数据集、三维点数据集| √  
dBASE 文件格式（*.dbf） | ShapeFile数据的表数据。 | 属性表数据集 |  
DGN 文件（*.dgn） | Microstation DGN 文件。 | 矢量数据集 |  
VCT 文件（*.vct） | 国家标准矢量文件。 | 矢量数据集 | √  
电信 Building Vector 文件 | 电信行业数据矢量面数据。 | 矢量面数据集 | √  
电信 Vector 文件 | 电信行业数据矢量线数据。 | 矢量线数据集 | √  
GJB 文件夹 | 军用标数据是指符合国家标准规定的军用数字地图的数据。 | 矢量点、线、面、文本数据集 | √  
S-57 海图数据文件（*.000） | 符合 S-57 标准海图数据，需要海图模块许可才可导入。 | 海图数据集分组 | √  
GeoJson文件 | GeoJson 是一种对各种地理数据结构进行编码的格式，基于JavaScript对象表示的地理空间信息数据交换格式。 |点、线、面、CAD数据集 | √  
[SimpleJson数据文件（*.json）](ImportSimpleJson) | SimpleJson(*.json) 是SuperMap 软件支持的特有数据格式，SimpleJson 数据包含两个文件：(*.json) 和 (*.meta)。(*.meta)文件中存储数据的元数据信息,(*.json)文件中存储数据中成员信息。 | 点、线、面、CAD数据集 | √  
GPS文件（*.gpx ） | *.gpx 文件是GPS设备记录下来的GPS轨迹点文件，是一种轻量级的XML数据交换格式。 | 点数据集 | √  
OpenStreetMap 数据文件（*.osm） | *.osm 文件是 OpenStreetMap 用于保存街道地图的信息创建的矢量数据文件。通过ASCII 明码方式保存。可导入为点、线、面数据集，但不能导入为 CAD 数据集。 | 点、线、面数据集 |  
  
### ![](../../img/read.gif)支持导入的栅格文件格式

支持导入的栅格文件格式 | 文件说明 | 支持导入为数据集类型 | 是否支持导出  
---|---|---|---  
ArcInfo Grid 文件（*.grd; *.txt） | grd 格式数据为网格数据，是 ArcInfo Grid 的一种栅格数据存储格式，分块存储着像元的空间位置和像元值信息。 | 栅格数据集 | √  
[Erdas Image 文件（*.img）](ImportIMG) | 是 ERDAS 平台下用于遥感分析的常见文件格式，可存储影像、栅格、DEM 等多种数据 | 影像数据集、栅格数据集 | √  
[TIFF 影像数据（*.tif; *.tiff）](ImportIMG) | TIFF（Tagged Image File Format）标签图像文件格式，是常见的高位彩色图像格式，GeoTIFF 是一种包含地理信息的TIFF文件格式，其信息编码在 TIFF
文件预留的Tag（标签）之中。 | 影像数据集、栅格数据集 | √  
位图文件（*.bmp） | 是 Windows 操作系统中的标准图像文件格式，没有任何压缩，占用空间大，导入为影像数据。 | 影像数据集、栅格数据集 | √  
PNG 文件（*.png） | 网络图像文件存储格式，对连续像元值的像元有简单压缩。 | 影像数据集、栅格数据集 | √  
GIF 文件（*.gif） | 图像互换格式，对连续像元值的像元有简单压缩。 | 影像数据集、栅格数据集 | √  
JPG 文件（*.jpg; *.jpeg） | 常见的图片格式，采用24位颜色存储单个图像。 | 影像数据集、栅格数据集 | √  
JPEG2000 文件（*.jp2、*.jpk） | JPEG2000 是基于小波变换的图像压缩标准，压缩比较高。 | 影像数据集、栅格数据集 |  
ECW 文件（*.ecw） | ECW 是 Erdas 专有的格式，是基于小波的有损压缩，与 JPEG 2000 类似。 | 影像数据集 |  
SIT 影像数据（*.sit） | 是 SuperMap 产品自有的栅格及影像文件存储格式，它集成多种影像处理技术，不仅能大幅度压缩影像数据，并能够以极快的速度读取显示。 | 影像数据集 | √  
USGDEM 和 GBDEM 栅格文件（*.dem） | 是空间数据的交换格式，导入为栅格数据。 | 栅格数据集 |  
BIL 文件（*.bil） | BIL 为波段按行交叉格式，以扫描行为单位，各波段同一扫描行数据依次记录，图像顺序为第一个像元所有的波段，接着是第二个像元的所有波段，然后是第三个等等。 | 栅格数据集 |  
BIP 文件（*.bip） | BIP 为像元波段交叉格式，以一对像元为基本单位进行记录。 | 栅格数据集 |  
BSQ 文件（*.bsq） | BSQ 是波段顺序格式，以波段为单位，每个波段所有扫描依次记录，每行数据后面紧接着同一波段的下一行数据。 | 栅格数据集 |  
RAW 文件（*.raw） | 是数码影像领域的常见格式，它包含了原图片文件在传感器产生后，进入照相机图像处理器之前的一切照片信息，具有压缩损失小、存储空间相对较小的特点。 | 影像数据集|  
MrSID 文件（*.sid） | 是一种常见的遥感图像存储格式，经过 MrSID 多分辨率无缝影像数据库的压缩，出错空间和浏览时间较少。 | 影像数据集、栅格数据集 |  
电信数据栅格文件（*.b，*.bin） | 电信行业数据栅格数据。 | 栅格数据集 |  
ASCII Grid 文件（*.asc） | 是 ArcGIS for Desktop Advanced 格网交换文件。 | 影像数据集、栅格数据集 |  
GDAL Virtual 数据格式（*.vrt） | 是由地理空间数据摘要库 (GDAL) 创建的一种文件格式。这种格式允许从 GDAL 可读的其他数据集中获取虚拟数据集。支持多种栅格数据格式，包含：TIFF、IMG、DEM等多种格式| 影像数据集、栅格数据集 |  
  
### ![](../../img/read.gif)支持导入的模型文件格式

支持导入的模型文件格式 | 文件说明 | 支持导入为数据集类型 | 是否支持导出  
---|---|---|---  
SketchUp三维模型文件（*.skp） | 三维模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集 |  
[3DS 三维模型文件（*.3ds）](ImportModelData) | 三维模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集|  
[DXF 三维模型文件（*.dxf）](ImportModelData) | 三维模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集| √  
[DirectX 的三维模型文件（*.x）](ImportModelData) | 三维模型数据，可导入为模型数据集。 |CAD复合数据集、模型数据集 | √  
[RVT 三维模型文件（*.rvt）](../../SceneOperation/DataProcessing/ImportBIMl) |RVT文件是Revit中，由Autodesk开发的建筑信息模型（BIM）软件创建的CAD文件。RVT文件包含3D建筑设计。可导入为模型数据集。 |模型数据集 |  
[3DXML 三维模型文件（*.3dxml）](../../SceneOperation/DataProcessing/ImportBIMl) |3DXML是Dassault Systemes 公司推出的一种完全开放的轻量化的三维数据格式。 可导入为模型数据集。 | 模型数据集 |  
[倾斜摄影 OSGB 文件（*.osgb，*.osg）](ImportModelData) | 倾斜摄影模型数据，可导入为模型数据集。 |CAD复合数据集、模型数据集 |  
Google KML 文件（*.kml） | Keyhole Markup Language（KML）由Google公司定义，基于XML语言描述，用于描述3D空间数据在Google Earth中的显示。一个KML文件是图形要素（Graphic Elements）、图像（images）和设置信息的集合。 | CAD复合数据集、简单数据集| √  
Google KML压缩文件（*.kmz） | KMZ为KML文件的压缩包。 | CAD复合数据集、简单数据集 | √  
OBJ模型文件（*.obj） | Alias 公司基于工作站的3D建模和动画软件Advanced Visualizer 开发的一种标准3D模型文件格式。 | CAD复合数据集、模型数据集 |  
DAE模型文件（*.dae） | DAE 即 Digital Asset Exchange 也称Collada模型，是Khronos旗下核心的可交换型3D模型格式。 | CAD复合数据集、模型数据集 |  
IFC模型文件（*.ifc） | IFC 即 Industry Foundation Classes，建筑工程数据交换标准。 | CAD复合数据集、模型数据集 |  
FBX 模型文件（*.fbx） | AutoDesk的用于跨平台的免费三维数据交换格式。 | CAD复合数据集、模型数据集 |  
3D打印三维模型文件（*.stl,*.off） | 三维模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集 | √  
Geo3DML地质体模型文件（*.xml） |  地质体模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集 |  
TIN地形缓存文件（*.tinz） | 地形模型数据，可导入为模型数据集 。 | CAD复合数据集、模型数据集 | √  
TIN地形文件（*.sct） |  地形模型数据，可导入为模型数据集。 | CAD复合数据集、模型数据集 | √  


