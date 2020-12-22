---
id: OpenDatasource
title: Opening a Datasource
---
### ![](../../img/read.gif)Introduction

The supportive datasource types include: file-based datasource, database-based 
datasources, Web datasource. On features of each kind of datasources, please 
refer to [datasources and engine types](EngineType.htm).

Three ways are provided for opening a datasource:

  * Click File and select "Open", then you can open a file datasource,a database datasource or a web datasource.
  * In the "Start" tab, on the "Datasource" group, you can click the "File", "Database" or "Web" icon to open different kinds of datasources.
  * Right-click the "Datasource" node in your workspace and then you can select relative buttons to open different datasources.

### ![](../../img/read.gif)Open a File Datasource

  1. After any operation mentioned above to open a file datasource, the "Open Datasource" dialog box appears.
  2. Navigate to the datasource you want to open then select it and Click "Open". The file being opened can be a *.udb file, a *.udbx file, an external image file or a vector file. 
    * **Spatial data engines** include UDBX(*.udbx), SpatiaLite(*.sqlite), and GeoPackage(*.gpkg). Among them, SpatiaLite is a native database of UDBX, while GeoPackage is spatial data in the SQLite databse.
    * **The supportive image formats are** sit, .bmp, .jpg, .jpeg, ..png, .tif, .tiff, .img, .sci, .gif, .gci, .sct, .xml, .ecw, .sid, .bil, .jp2, *.j2k, and so on. When you open an image data file, a datasource node with the same name with the image data file will be added to the Datasource node in Workspace Manager and the image data file will be added to the newly created datasource as an image dataset. 
    * **The supportive formats of vector files** are .shp, .mif, .tab, .dwg, .dxf, .dgn, .kml, .kmz, .gml, .wal, .wan, .wap, .wat, .csv, *.e00 and so on. When opening an external vector file, a datasource with the same name with the vector file will be built in your workspace, and the file will be added into the datasource as a CAD dataset. 

### ![](../../img/read.gif)Open a database datasource

The supported databases contain: Oracle Plus, Oracle Spatial, SQL Plus, 
PostgreSQL, DB2, KingBase, MySQL, BeyonDB, HighGoDB, KDB, SinoDB, PostGIS and 
MongoDB.

  1. After any operation mentioned above to open a database datasource, the dialog box "Open Database Datasource" will appear.
  2. In the dialog box, you can choose a database type from the list on the left, and type the necessary information of the selected datasource, then click OK. 

Note: all database addresses connected are saved automatically by iDesktop, 
hence, you can choose one as needed from all historical addresses.

No. | Database type | Instance name | Server name | Database name | Username/password | Max pool size | Supported version | Note  
---|---|---|---|---|---|---|---|---  
1  | **OraclePlus** | √ | × | Optional | √ | √ | 9i/10g/11g/12c version | A client is required with correct configurations of environment parameters. Two ways to connect a server, one is the configuration of client, you must ensure the client can connect the server by an instance. Another way is through easy connect naming method, the format of instance name is host[:port][/service_name].  
2 | **OracleSpatial** | √ | × | Optional | √ | × | recommended 10g and 11g, 12c | A client is required with correct configurations of environment parameters. Two ways to connect a server, one is the configuration of client, you must ensure the client can connect the server by an instance. Another way is through easy connect naming method, the format of instance name is host[:port][/service_name].   
3  | **SQLPlus** | × | √ | √ | √ | × | 2000/2005/2008/2012/2016 | A client is required with correct configurations of environment parameters.   
4 | **MySQL** | × | √ | √ | √ | × | 5.6.16 and above | You must ensure your machine has permission to access the remote server, if not, you can reference the command "grant all privileges on *.* to user@'%' identified by pwd; flush privileges", and replace % with your IP. 
5 |**[PostgreSQL](../../TechDocument/PostgreSQLUseGuide/PostgreSQLGuide.htm)** | × | √ | √ | √ | √ | 9.6 and above | You must ensure your machine has permission to access the remote server, if not, please add "host all all 0.0.0.0/0 trust" into the /data/pg_hba.conf file under the storage path of server data, and then restart the server.  
6  | **DB2** | × | × | √ | √ | × | 9.7 and above | A client is required with correct configurations of environment parameters.  
7  | **HighGoDB** | × | √ | √ | √ | × | \-- | Similar to PostgreSQL  
8  | **SinoDB** | × | √ | √ | √ | × | \-- | A client is required with correct configurations of environment parameters.  
9  | **KingBase** | × | √ | √ | √ | × | V7 version | A client is required with correct configurations of environment parameters.  
10  | **ArcSDE** | × | √ | √ | √ | × | \-- | Three dynamic libraries are needed including (sg\sde\pe).  
11 | **BeyonDB** | × | √ | √ | √ | × | 2015 version | A client is required with correct configurations of environment parameters.  
12 | **KDB** | √ | × | √ | √ | × | \-- | A client is required with correct configurations of environment parameters.  
13 | **[MongoDB](../../TechDocument/MongoDBDatabaseGuide.htm)** | × | √ | √ | √ | × | 2.4 and above | Must ensure that your remote server can access your local machine.  
14 | **DMPlus** | × | Optional | √ | √ | × | DM7 version | A client is required with correct configurations of environment parameters.  
15 | **[PostGIS](../../TechDocument/PostGISUseGuide/PostGISGuide.htm)** | × | √ | √ | √ | × | \-- | If the remote server does not have privilege to access your local machine, please add host all all 0.0.0.0/0 trust in the file /data/pg_hba.conf under the storage path of server data, and then restart your service.  
  
  * **Max Pool Size** : When opening an OraclePlus or PostgreSQL datasource, you can set the max pool size. A pool is used for assigning, managing and releasing connections of databases. Setting max pool size means you can specify how many connections at most can be requested by database, if the real number of requesting is greater than it, the latter requests will be added into a waiting queue.
  * The "Load data link info" drop-down button in the dialog box provides a load and save the database data source link information to facilitate the user to save and load the open database-type data source information. 
    * Save data link info: Save the information like server, database, username of the current database-based datasource into a *.dcf.
    * Load data link info: Click this button to select the existing * .dcf file in the pop-up "Open" dialog box, load the database-based datasource information recorded in the * .dcf file, and you do not have to input the relevant parameters manually.

### Open a Web datasource.

  1. After any operation mentioned above to open a web datasource, the dialog box “Open Web Datasource” will appear.
  2. In the dialog box, select the web type you want to open, and then enter requirement information. Following contents detail relative parameters opening a web datasource.

  * **OGC:** Type the service address and service type. iDesktop supports 5 service types: WMS, WFS, WMTS, TMS, and WCS with the first three types are only-read datasources while the last one can be done a little simple edit. For WMTS server, there is a cache folder generated in local machine after opening it. The path is SuperMap iDesktop\Bin\Cache\WebCache\WMTS\, under the path, to save tile files and request files (*.xml), folders will be built according to addresses of published service. For conception and server intruductions of OGC, please refer to [OGC standard service(W*C)](../../TechDocument/WebDatasets/AboutWebDataset.htm#1). 
  * **iServerREST:** You need to enter a service address to open a datasource. For the instructions of REST service, please consult [REST service](../../TechDocument/WebDatasets/AboutWebDataset.htm#2).
  * **GoogleMaps:** You don't need to set the default parameters, such as service address, service type and open mode, etc.. For the instructions of GoogleMaps, please consult [GoogleMaps](../../TechDocument/WebDatasets/AboutWebDataset.htm#3).
  * **SuperMapCloud:** You don't need to set the default parameters, such as service address, service type, username, key, and open mode, etc.. For the instructions of GoogleMaps, please consult [SuperMapCloud service](../../TechDocument/WebDatasets/AboutWebDataset.htm#4).
  * **ChinaRS:** iDesktop provides 4 map services, and you can choose a service form the drop-down list directly with no needs to set any parameter. For introductions pf ChinaRS, please refer to [ChinaRS](../../TechDocument/WebDatasets/AboutWebDataset.htm#8).
  * **OpenStreetMaps:** The settings of the system default parameters are not allowed, and you can click "Open" directly. About introductions of OpenStreetMaps, please refer to [OpenStreetMap](../../TechDocument/WebDatasets/AboutWebDataset.htm#7).
  * **MapWorld:** iDesktop provides 7 map services, you can choose a service from the drop-down list, and then you are allowed to enter the service key. For the instructions of MapWorld, please refer to [MapWorld](../../TechDocument/WebDatasets/AboutWebDataset.htm#5).

### ![](../../img/note.png) Notes

  1. Currently Google Maps is not showing normal in China, and the map will be blank after opening, but foreign users can use Google Maps.
  2. When you finish opening a datasource, a corresponding node will be automatically added to the Datasources node in Workspace Manager. Displayed on the node is the alias of the datasource, which can uniquely identify the datasource. Meanwhile, a series subnodes will be added for the newly added datasource node, and each subnode corresponds to a dataset in the datasource.
  3. Web maps (including OGC, Google), image map, map caches don't support dynamic projection. 

Web maps (including OGC, Google) don't support that multiple windows associate
browsing.

  4. Currently the scene window doesn't support the function of loading Tianditu data.
  5. When open the WMTS service of OGC, you may find offset of the WMTS service. Because the map display DPI of destop application is different with the DPI of requests network map. You should set the CustomDPIX and CustomDPIY parameters in [Installation Directory]\Bin\Supermap.xml as 90.7.

