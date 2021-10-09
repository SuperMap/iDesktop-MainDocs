---
id: OpenDatasource
title: Opening a Datasource
---
### Introduction

The supportive datasource types include: file-based datasource, database-based datasources, Web datasource. On features of each kind of datasources, please refer to [datasources and engine types](EngineType).

Three ways are provided for opening a datasource:

* Click **File** > **Open** to open the datasource you want.
* Click **Start** > **Datasources** > **File** , **Database** , or **Web** icon to open different kind of datasources.
* Right-click the **Datasource** node in your workspace and select the option as you need.

### Open a File Datasource

1. After any operation mentioned above to open a file datasource, the **Open Datasource** dialog box appears.
2. Navigate to the datasource you want to open, select it, and then click "Open". The file to be opened can be a *.udb file, a *.udbx file, an external image file, or a vector file. 
* **Spatial data engines** include UDBX(*.udbx), SpatiaLite(*.sqlite), and GeoPackage(*.gpkg). Among them, SpatiaLite is a native database of UDBX, while GeoPackage is spatial data in the SQLite database.
* **The supportive image formats are** sit, .bmp, .jpg, .jpeg, ..png, .tif, .tiff, .img, .sci, .gif, .gci, .sct, .xml, .ecw, .sid, .bil, .jp2, *.j2k, and so on.

*.tpk is a tile package created from ArcGIS. Tiles created from a map are wrapped into a single file that is *.tpk file.

When you open an image data file in the way of opening a datasource, a datasource node with the name of the image will be added in Workspace Manager. The image file will be added to the newly created datasource as an image dataset. Both the 16-bit single-band floating point image and the 32-bit single-band floating point image are raster datasets after opening them directly.

* **The supportive formats of vector files** are .shp, .mif, .tab, .dwg, .dxf, .dgn, .kml, .kmz, .gml, .wal, .wan, .wap, .wat, .csv, *.e00, and so on.

When opening an external vector file, a datasource with the same name with the vector file will be built in your workspace, and the file will be added into the datasource as a CAD dataset.

### Open a database datasource

The supported databases contain: Oracle Plus, Oracle Spatial, SQL Plus, PostgreSQL, DB2, KingBase, MySQL, BeyonDB, HighGoDB, KDB, SinoDB, PostGIS, and MongoDB.

1. After any operation mentioned above to open a database datasource, the dialog box "Open Database Datasource" will appear.
2. In the dialog box, you can choose a database type from the list on the left and type the necessary information of the selected datasource. Click OK. 

Note: all database addresses connected are saved automatically.
Hence, you can choose one as needed from all historical addresses.

No. | Database type | Instance name | Server name | Database name |Username/password | Max pool size | Supported version | Note
---|---|---|---|---|---|---|---|---
1| **OraclePlus** | √ | × | Optional | √ | √ | 9i/10g/11g/12c version | A client is required with correct configurations of environment parameters. Two ways to connect a server, one is the configuration of client, you must ensure the client can connect the server by an instance. Another way is through easy connect naming method, the format of instance name is host[:port][/service_name].
2 | **OracleSpatial** | √ | × | Optional | √ | × | recommended 10g and 11g, 12c | A client is required with correct configurations of environment parameters. Two ways to connect a server, one is the configuration of client, you must ensure the client can connect the server by an instance. Another way is through easy connect naming method, the format of instance name is host[:port][/service_name].
3| **SQLPlus** | × | √ | √ | √ | × | 2000/2005/2008/2012/2016 | A client is required with correct configurations of environment parameters.
4 | **MySQL** | × | √ | √ | √ | × | 5.6.16 and above | You must ensure your machine has permission to access the remote server, if not, you can reference the command "grant all privileges on *.* to user@'%' identified by pwd; flush privileges", and replace % with your IP. 
5| **[PostgreSQL](../../TechDocument/PostgreSQLUseGuide/PostgreSQLGuide)** |× | √ | √ | √ | √ | 9.6 and above | You must ensure your machine has permission to access the remote server, if not, please add "host all all 0.0.0.0/0 trust" into the /data/pg_hba.conf file under the storage path of server data, and then restart the server.
6| **DB2** | × | × | √ | √ | × | 9.7 and above | A client is required with correct configurations of environment parameters.
7| **HighGoDB** | × | √ | √ | √ | × | \-- | Similar to PostgreSQL
8| **SinoDB** | × | √ | √ | √ | × | \-- | A client is required with correct configurations of environment parameters.
9| **KingBase** | × | √ | √ | √ | × | V7 version | A client is required with correct configurations of environment parameters.
11 | **BeyonDB** | × | √ | √ | √ | × | 2015 version | A client is required with correct configurations of environment parameters.
12 | **KDB** | √ | × | √ | √ | × | \-- | A client is required with correct configurations of environment parameters.
13 | **[MongoDB](../../TechDocument/MongoDBDatabaseGuide)** | × | √ | √ | √ | × | 2.4 and above | Must ensure that your remote server can access your local machine.
14 | **DMPlus** | × | Optional | √ | √ | × | DM7 version | A client is required with correct configurations of environment parameters.
15 | **[PostGIS](../../TechDocument/PostGISUseGuide/PostGISGuide)** | × | √ | √ | √ | × | \-- | If the remote server does not have privilege to access your local machine, please add host all all 0.0.0.0/0 trust in the file/data/pg_hba.conf under the storage path of server data, and then restart your service.

* **Max Pool Size** : When opening an OraclePlus or PostgreSQL datasource, you can set the max pool size. A pool is used for assigning, managing and releasing connections of databases. Setting max pool size means you can specify how many connections at most can be requested by database, if the real number of requesting is greater than it, the latter requests will be added into a waiting queue.
* The "Load data link info" drop-down button in the dialog box provides a load and save the database data source link information to facilitate the user to save and load the open database-type data source information. 
* Save data link info: Saves the information like server, database, username of the current database-based datasource into a *.dcf.
* Load data link info: Loads the connection information of a database by opening a link file whit the .dcf extension. The link file records the database server, the database name, username, and so on.

### Open a Web datasource.

1. After any operation mentioned above to open a web datasource, the dialog box “Open Web Datasource” will appear.
2. In the dialog box, select the web type you want to open, and then enter requirement information. Following contents detail relative parameters opening a web datasource.

* **OGC:** Type the service address and service type. iDesktop supports 5 service types: WMS, WFS, WMTS, TMS, and WCS with the first three types are only-read datasources while the last one can be done a little simple edit. For WMTS server, there is a cache folder generated in local machine after opening it. The path is SuperMap iDesktop\Bin\Cache\WebCache\WMTS\, under the path, to save tile files and request files (*.xml), folders will be built according to addresses of published service. For conception and server intruductions of OGC, please refer to [OGC standard service(W*C)](../../TechDocument/WebDatasets/AboutWebDataset). 
* **iServerREST:** You need to enter a service address to open a datasource. For the instructions of REST service, please consult [REST service](../../TechDocument/WebDatasets/AboutWebDataset).
* **GoogleMaps:** You don't need to set the default parameters, such as service address, service type and open mode, etc.. For the instructions of GoogleMaps, please consult [GoogleMaps](../../TechDocument/WebDatasets/AboutWebDataset).
* **SuperMapCloud:** You don't need to set the default parameters, such as service address, service type, username, key, and open mode, etc.. For the instructions of GoogleMaps, please consult [SuperMapCloud service](../../TechDocument/WebDatasets/AboutWebDataset).
* **ChinaRS:** iDesktop provides 4 map services, and you can choose a service form the drop-down list directly with no needs to set any parameter. For introductions pf ChinaRS, please refer to [ChinaRS](../../TechDocument/WebDatasets/AboutWebDataset).
* **OpenStreetMaps:** The settings of the system default parameters are not allowed, and you can click "Open" directly. About introductions of OpenStreetMaps, please refer to [OpenStreetMap](../../TechDocument/WebDatasets/AboutWebDataset).
* **MapWorld:** iDesktop provides 7 map services, you can choose a service from the drop-down list, and then you are allowed to enter the service key. For the instructions of MapWorld, please refer to [MapWorld](../../TechDocument/WebDatasets/AboutWebDataset).
* **WorldTerrain:** Provides two terrain services including a fundamental topographic map and a dark topographic map. You can open the service directly without setting any parameters. To learn more, please refer to [Global Topographic Map](../../TechDocument/WebDatasets/AboutWebDataset).

###  Notes

1. Currently Google Maps is not showing normal in China, and the map will be blank after opening, but foreign users can use Google Maps.
2. When you finish opening a datasource, a corresponding node will be automatically added to the Datasources node in Workspace Manager. Displayed on the node is the alias of the datasource, which can uniquely identify the datasource. Meanwhile, a series subnodes will be added for the newly added datasource node, and each subnode corresponds to a dataset in the datasource.
3. Web maps (including OGC, Google), image map, map caches don't support dynamic projection. 

Web maps (including OGC, Google) don't support that multiple windows associate
browsing.

4. Currently the scene window doesn't support the function of loading Tianditu data.
5. When open the WMTS service of OGC, you may find offset of the WMTS service. Because the map display DPI of the application is different with the DPI of requests network map. You should set the CustomDPIX and CustomDPIY parameters in [Installation Directory]\Bin\Supermap.xml as 90.7.