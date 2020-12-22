---
id: EngineType
title: Datasources and Data Engine Types
---
Spatial data is saved in a datasource but a workspace, hence, to operate on data, you must open or acquire a datasource. As your needs, you can save different spatial data into a datasource to manage and operate uniformly. For different types of datasources, different spatial data engines are required.

SuperMap SDX+ is the spatial database engine of SuperMap. All kinds of spatial geometric objects and images can be stored in relational database via SDX+ engine to become a spatial database which can implement incorporate storage of spatial data and attribute data.

For different types of datasources, different types of engines are required. SuperMap products support opening or creating various datasources. The related engine types contain: file-based datasources, database-based datasources, and web datasources. Types of datasets supported by different data engines are different too, for more types of datasets supported by SDX+, please refer to [Dataset Types supported by SDX+](../../TechDocument/SDX/DatasetTypeSupport.htm).

### ![](../../img/read.gif) File-based datasources

Save spatial data and property data into a file that extension is *.udb. For a small amount of data, a file datasource is more better in displaying and transmitting data.

### ![](../../img/read.gif) File engine

Includes: UDB engine (can be read-write) customized by SuperMap, UDBX engine (can be read-write), image plugin engine (to access image data) and vector file engine (to access external vector files).

      * The **UDB engine** is the only file-based spatial data engine in formats customized by SuperMap Objects. The storage of UDB engine combines traditional files with databases. A project of UDB engine contains two files: one is for saving spatial data with extension is UDB, and another one is an attribute library with extension is UDD. Multiple datasets can be saved into the same UDB project because of the usage of Compound File Binary Format technology adopted by the UDB file. The UDD file adopts the MDB database format of Access different from technologies used by Arc/Info Coverage, MapInfo Table. The UDB project is targeted toward small and medium systems or applications, and aims at improving efficiency thereby fill in weak spots of database engines.
      * **The UDBX engine** can read, write and manage Spatialite data. What is Spatialite? It is an open-source library for extending the kernel of SQLite and provides a complete and strong spatial database management system. It is cross-platform and lightweight with the support to mature SQL features. Besides, Spatialite can retrieve spatial data efficiently by using the spatial index R-Tree. The UDBX file engine newly added excellently applies the advantages of Spatiallite.
        * The use of UDBX file engine does not require the installation and deployment of a database system. When you create a datasource by using UDBX file engine, a UDBX file-based datasource (*.udbx) will be produced, essentially it is a database file. Compared to the UDB file-based datasource, the UDBX datasource is more open, safe, and stable in the operation of data, and it allows multiple uses. 
        * You are allowed to either create datasets or export data into a UDBX datasource. The supportive formats of datasets in the UDBX datasoure contain: point, line, region, text, CAD, attribute table, 3D point/line/region, EPS compound point/line/region/text, raster, image, mosaic dataset. 
        * In addition, the UDBX file engine can operate on the spatial data which is exported by a third-party in the Spatiallite database like the display, edit of data. You only need to load the Spatialite database file (*.sqlite) as a file-based datasource into iDesktop.
      * The **image plugin engine** allows SuperMap to display raster data in read-only. The supportive formats contain: BMP, JPEG, RAW, TIFF, SCI, SIT and raster types of ERDAS IMAGINE (BMP and JPEG are common raster data types. RAW and TIFF are remote sensing data types. SCI is a type of pre-cached images customized by SuperMap. SIT is a type of raster data customized by SuperMap). The types of plugin engines includes: BMP, JPEG, RAW, TIFF, SCI, SIT, ERDAS IMAGINE, and all of them are read-only.
      * The **vector file engine** focus on the commonly used vector formats like shp, tab, Acad, etc.. Editing and saving vector files are served.
File-based Datasource Engine Types  

**Type** | **Description**  
:---|:---
UDB | The cross-platform engine type for UDB datasource.  
UDBX | UDBX file engine can read, write and manage Spatialite spatial data. The supportive dataset types includes: point, line, region, text, CAD, attribute table, 3D point/line/region, EPS compound point/line/region/text, raster, image and mosaic dataset.  
ImagePlugins | read-only image engine, focus on common image formats, such as BMP, JPG, TIFF, SIT(customized by SuperMap), etc..  
Vector file | Vector file engine (can edit and save), focus on common vector formats, such as: shp, tab, Acad, etc..  
  
### ![](../../img/read.gif)Database-based datasources

Save a datasource into a database, ten more databases are supported including: OraclePlus, Oracle Spatial, SQLPlus, PostgreSQL, DB2, KingBase, MySQL, BeyonDB, HighGoDB, KDB and MongoDB. Database datasources are generally used for saving a big amount of data to facilitate data management and access. The support of concurrent operations is convenient for modifying and syncing data. To access a database, you must install a corresponding client and configure environment.

### ![](../../img/read.gif)Database engine

SuperMap spatial database takes large-scale relational databases (Oracle, SQL Server, Sybase and DM3) as storage containers to saving integrative spatial data and property data.

Database-based Datasource Engine Types  
**Type** | **Description**  
:---|:---
SQLPlus | SQL Server engine, focus on SQL Server datasources. The client is required with correct configuration.  
OraclePlus | OraclePlus engine, focus on Oracle datasources, and the installation of a client is necessary.  
[OracleSpatial | Oracle Spatial engine, focus on Oracle Spatial datasources, a client is necessary.  
MySQL | MySQL engine type. The client is not necessary.  
[DB2](../../TechDocument/DB2UseGuide/DB2Guide-en.htm) | DB2 engine type for DB2 SDX+ datasource. The client is necessary.  
Kingbase | Kingbase engine type, multi-band images are not supported in Kingbase datasources. The client is required.  
BeyonDB | BeyonDB engine. The client is essential.  
SinoDB  | SinoDB engine. The client is essential.  
HighGoDB | HighGoDB engine. The client is not necessary.  
DM  | DM engine, focus on DM datasources. The client is necessary with correct configuration.  
ArcSDE | ArcSDE Engine. Three dynamic libraries are required in your local machine (sg\sde\pe).  
KDB  | KDB engine. The client is necessary with correct configuration.  
[ MongoDB ](../../TechDocument/MongoDBDatabaseGuide-en.htm) | MongoDB engine. The client is not necessary. The remote server can access the local machine.  
[PostgreSQL | PostgreSQL engine, focus on PostgreSQL datasources. The client is not necessary. The remote server can access the local machine.  
[ PostGIS ](../../TechDocument/PostGISUseGuide/PostGISGuide-en.htm) | PostGIS engine, the spatial data extension of PostgreSQL. The client is not necessary. The remote server can access the local machine.  
Tibero  | Tibero engine. Using the unique Hyper Thread Architecture further improves DBMS's performance and stability. Thanks to HTA, the engine uses the least cpu and memory size to enhance the locking mechanism thereby having higher scalability then the existing DBMS. The client is necessary and the remote server can access the local machine.  
  
### ![](../../img/read.gif)Web datasources

Save datasources into web servers, such as OGC, GoogleMaps, SuperMap Cloud, REST map service and MapWorld.

### ![](../../img/read.gif)Web engines

Wed engine can directly access Web services served by WFS, WMS, WCS. This type of engine take Web servers meeting OGC standard as SuperMap datasources. With it, maps and data published by network can be connected with them from SuperMap perfectly, and applications of WFS and WMS can be integrated into the technical architecture of SuperMap. Please have a notice that web engine is read-only.

Web Datasource Engine Types  
**Type** | **Description**  
:---|:--- 
OGC | OGC engine. Focus on Web datasources, currently supportive types: WMS, WFS, WCS and WMTS.  
GoogleMaps | GoogleMaps engine. Focus on Google digital map services.  
SuperMapCloud | SuperMap Cloud engine. Focus on cloud services published by SuperMap.  
iServerRest | iServer Rest service engine. Focus on map services published based on REST protocol.  
MapWorld | MapWorld engines. Focus on map services published by MapWorld.  
OpenStreetMaps | Also called OSM engine. Free and open-source map services.  
Global Topographic Map | Global hill-shading map services published by SuperMap including Fundamental Topographic Map and Dark Topographic Map.  
  
### ![](../../img/read.gif) Memory datasources

All data in datasources is temporarily saved into memory and can't be saved permanently. You can save some middle result data to improve analysis efficiency. Memory data can be exported as local data.

The engine corresponding with memory data is memory engine.



