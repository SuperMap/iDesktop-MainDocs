---
id: EngineType
title: 数据源及数据引擎类型  
---  
数据源（Datasource）是存储空间数据的场所。所有的空间数据都是存储于数据源中而不是工作空间，任何对空间数据的操作都需要打开或获取数据源，用户可以按照数据的用途，将不同的空间数据保存于数据源中，对这些数据统一进行管理和操作。
对不同类型的数据源，需要不同的空间数据引擎来存储和管理。

SuperMap SDX+ 是 SuperMap 的空间引擎技术，它提供了一种通用的访问机制（或模式）来访问存储在不同引擎里的数据。
各种空间几何对象和影像数据都可以通过 SDX+ 引擎，存放到关系型数据库中，形成空间数据和属性数据一体化的空间数据库。更多 SuperMap SDX+
空间引擎的介绍请参考“[ SuperMap SDX+空间数据引擎 ](../../TechDocument/SDX/AboutSDX)”专题介绍。

不同类型的空间数据源对应不同的数据引擎。SuperMap 产品支持打开和新建多种数据源类型，分为文件型数据源、数据库型数据源、 Web
数据源以及内存数据源。因此，对应的引擎类型有文件引擎、数据库引擎和 Web 引擎。不同数据引擎支持的数据集类型也不相同，更多 SDX+
支持的数据集类型请参考“[ SDX+ 支持的数据集类型
](../../TechDocument/SDX/DatasetTypeSupport)”介绍。

### ![](../../img/read.gif) 文件型数据源

将空间数据和属性数据直接存储到文件中。存储扩展名为 *.udb 或*.udbx 的文件。在小数据量情况下使用文件型数据源地图的显示更快，且数据迁移方便。

### ![](../../img/read.gif) 文件引擎

包含有四类：SuperMap 自定义的 UDB 引擎（可读写）、UDBX
引擎（可读写）、影像插件引擎（直接访问一些影像数据）和矢量文件引擎（直接访问外部矢量文件）。

* **UDB 引擎** ，是SuperMap Objects 自定义格式的文件型空间数据引擎。这种引擎采用传统的文件+数据库混合存储方式。UDB 引擎的一个数据工程包括两个文件，扩展名为 UDB 的文件存储空间数据，采用 OLE 复合文档技术；扩展名为 UDD 的文件为属性数据库，采用 Access 的 MDB 数据库格式。由于 UDB 文件采用了复合文档技术，因此提供了在一个 UDB 工程中存储多个数据集的能力。这一点与Arc/Info Coverage、MapInfo Table 文件等技术不同。UDB 主要面向中、小型系统和桌面应用，目的在于提高效率，弥补纯数据库引擎在这方面的不足。
* **UDBX 引擎** ，可以读写以及管理 Spatialite 空间数据。Spatialite 是一个用来扩展 SQLite 的内核的开源库，提供了一个完整而强大的空间数据库管理系统，具有跨平台和轻量级的特点，而且支持完全成熟的空间 SQL 功能。此外，Spatialite 使用 R-Tree 作为空间索引，实现高效检索空间数据。SuperMap 新增的 UDBX 文件引擎，充分利用 Spatialite 对空间数据高效管理的能力以及轻量级数据库的特点。
  * 使用 UDBX 文件引擎无需安装和部署数据库系统，由于 Spatialite 数据库简单地对应单个文件，文件大小没有限制，所以使用 UDBX 文件引擎创建数据源时，将创建一个 UDBX 文件型数据源（*.udbx），其实质是一个数据库文件，它比已有的 UDB 文件型数据源具有更加开放、数据操作更加安全稳定的特点。
  * 在 UDBX 文件型数据源中可以创建数据集，或者导入其他来源的数据。UDBX 文件型数据源支持的数据集类型包括：点、线、面、文本、CAD、属性表、三维点/线/面、EPS复合点/线/面/文本、栅格、影像、镶嵌数据集。
  * 此外，UDBX 文件引擎具有更加开放的特点，支持直接操作第三方导入到 Spatialite 空间数据数据库中的空间数据，如显示，数据编辑。应用时，只需将 Spatialite 空间数据库文件（*.sqlite）作为文件型数据源加载到 iDesktop 即可。
* **影像插件引擎** ，支持栅格类型的数据在 SuperMap 中只读显示，目前支持格式为 BMP，JPEG，RAW，TIFF，SCI，SIT 和 ERDAS IMAGINE 的栅格数据类型（BMP，JPEG 为通用的栅格数据类型，RAW，TIFF 为遥感影像数据类型，SCI 为 SuperMap 定义的地图预缓存图片文件，SIT 为 SuperMap 定义的栅格数据类型）。故插件引擎共有以下7 种类型：BMP 只读引擎，JPEG 只读引擎，RAW 只读引擎，TIFF 只读引擎，SCI 只读引擎，SIT 只读引擎和ERDAS IMAGINE只读引擎。
* **矢量文件引擎** ，针对通用矢量格式如 shp，tab，Acad 等，支持矢量文件的编辑和保存。  

**类型** | **描述**  
--|--
UDB | 跨平台文件引擎类型，针对 UDB 数据源。  
UDBX | UDBX 文件引擎，可以读写以及管理 Spatialite 空间数据，针对 UDBX数据源，支持的数据集类型包括：点、线、面、文本、CAD、属性表、三维点/线/面、EPS复合点/线/面/文本、栅格、影像、镶嵌数据集。  
ImagePlugins | 影像只读引擎类型，针对通用影像格式如 BMP，JPG，TIFF，以及超图自定义的影像格式 SIT 等。  
矢量文件 | 矢量文件引擎类，针对通用矢量格式如 shp，tab，Acad等,支持矢量文件的编辑和保存。  

### ![](../../img/read.gif) 数据库型数据源

将数据源存储在数据库中，目前桌面产品提供 OraclePlus、Oracle
Spatial、SQLPlus、PostgreSQL、DB2、KingBase、MySQL、BeyonDB、HighGoDB、KDB 、DM
、PostGIS和 MongoDB
十余种数据库型数据源功能。一般常用于数据量较大的数据存储，便于数据的管理和访问，且支持并发操作便于修改和数据同步。用户在于访问数据库需要本地配置相关的数据库环境和客户端。

### ![](../../img/read.gif)数据库引擎

SuperMap 空间数据库以大型关系型数据库为存储容器，通过 SuperMap SDX+
进行管理和操作，将空间数据和属性数据一体化存储到大型关系型数据库中，如Oracle、SQL Server、Sybase 和 DM3
等。如下表所示的空间数据库类型。
  
**类型** | **描述**  
---|---
SQLPlus | SQL Server 引擎类型，针对 SQL Server 数据源。必须有客户端，环境变量配置正确。  
OraclePlus | OraclePlus 引擎类型，针对 Oracle 数据源，必须安装客户端。  
[ OracleSpatial](../../TechDocument/SDX/AboutOracleSpatial) | Oracle Spatial 引擎类型，针对 Oracle Spatial 数据源，必须安装客户端。不支持网络数据集。  
MySQL | MySQL 引擎类型。不需要安装客户端，但远程服务端必须保证本机有访问权限。  
[ DB2](../../TechDocument/DB2UseGuide/DB2Guide) | DB2 引擎类型。针对 IBM DB2 数据库的 SDX+ 数据源，必须安装客户端。  
Kingbase | Kingbase 引擎类型，针对 Kingbase 数据源，不支持多波段数据。必须有客户端。  
BeyonDB | BeyonDB 引擎类型。必须有客户端。  
SinoDB  | SinoDB 引擎类型。针对 SinoDB 数据源。必须有客户端。  
HighGoDB | HighGoDB 引擎类型。无需安装客户端，远程服务端必须保证本机有访问权限。  
DM  | DM 引擎类型。针对达梦(DM)数据源，必须安装客户端，环境变量配置正确。  
KDB  | KDB 引擎类型。必须有客户端，环境变量配置正确。  
[ MongoDB ](../../TechDocument/MongoDBDatabaseGuide) | MongoDB 引擎类型。无需安装客户端，远程服务端必须保证本机有访问权限。  
[ PostgreSQL](../../TechDocument/PostgreSQLUseGuide/PostgreSQLGuide) |PostgreSQL 引擎类型。无需安装客户端，远程服务端必须保证本机有访问权限。  
[ PostGIS ](../../TechDocument/PostGISUseGuide/PostGISGuide) | PostgreSQL 的空间数据扩展 PostGIS 引擎类型。针对 PostGIS 数据源，无需安装客户端，远程服务端必须保证本机有访问权限。  
Tibero  | Tibero 引擎类型。是作为企业级数据库服务器，为了进一步完善现有DBMS，采用独有的Hyper Thread Architecture（超线程架构），大幅提高了性能及稳定性。凭借HTA的创建性结构，使用最少的CPU以及内存资源，大幅改善了locking机制，保障比现有DBMS具备更高的可扩展性（scalability）。需安装客户端，远程服务端必须保证本机有访问权限。  

SuperMap iObjects
支持多种数据库引擎（如下表所示），根据常用引擎需求目前可在桌面端查看到的功能入口有上述17类数据库，用户可通过修改配置文件参数的方式自定义数据库型数据源的功能入口，增加或者删除
SuperMap iObjects 已支持的各种数据库数据源。

支持通过修改配置文件参数的方式自定义数据库型数据源的功能入口，配置文件位于产品包/Configuration/文件夹中的
**SuperMap.Desktop.Startup.xml** 文件。配置参数编码默认显示如下：

` <parameters> <engine extraEngineType="" hiddenEngineTypes="" > </parameters>" `

* 其中“ **extraEngineType=""** ”默认为空，此时数据库入口为桌面默认的数据库数据源入口，若要增加新的SuperMap iObjects 已支持的数据库，只需将数据库对应的枚举值，填入即可，例如：增加 Altibase 引擎类型，其对应的枚举值为 2004，则配置文件编码写为extraEngineType="2004"。
* 其中“ **hiddenEngineTypes=""** ”默认为空，若要删除数据库数据源的功能入口，只需将数据库对应的枚举值，填入即可，例如：删除OracleSpatial 引擎和SQLPlus 引擎类型，其对应的枚举值分别为 10,16，则配置文件编码写为hiddenEngineTypes="10,16"即可。
SuperMap iObjects 支持的数据源引擎类型    

**类型** | **枚举值**  
---|---
SDE | 4  
OracleSpatial | 10  
SQLPlus | 16  
DMPlus | 17  
DB2 | 18  
Kingbase | 19  
MySQL | 32  
PostgreSQL | 221  
MongoDB | 401  
BeyonDB | 2001  
GBase | 2002  
HighGoDB | 2003  
Altibase | 2004  
KDB | 2005  
SRDB | 2006  
MYSQLPlus | 2007  
DRDS | 2008  
GBase8T | 2009  
Kadb | 2010  
ES | 2011  
PGGIS | 2012  
SQLSpatial | 2013  
Tibero | 2014  
SinoDB | 2050  
DataServer | 2051  
GreenPlum | 2052  
Esgyn | 2053  
Tibero | 2014  
ShenTong | 2055  
HWPostgreSQL | 2056  
Ganos | 2057  

### ![](../../img/read.gif) Web 数据源

将数据源存储在网络服务器中，OGC、GoogleMaps、超图云服务、REST 地图服务和天地图地图服务数据源属于 Web 数据源。

### ![](../../img/read.gif) Web 引擎

Web引擎可以直接访问WFS、WMS、WCS等所提供的Web服务，这类引擎就是把网络上符合OGC标准的Web服务器，作为 SuperMap
的数据源来处理，通过它可以把网络发布的地图和数据与 SuperMap 的地图和数据完全结合，将WFS和WMS的应用融入到 SuperMap
的技术体系，拓展了 SuperMap 数据引擎的应用领域。Web引擎为只读引擎。

**类型** | **描述** 
---|--- 
OGC | OGC 引擎类型，针对于 Web 数据源，目前支持的类型有 WMS，WFS，WCS 和 WMTS。  
GoogleMaps | GoogleMaps 引擎类型。针对谷歌电子地图服务。  
SuperMapCloud | SuperMap 云服务引擎类型，针对超图发布的云服务。  
iServerRest | iServer Rest 服务引擎类型，基于 REST 协议发布的地图服务。  
MapWorld | 天地图服务引擎类型，针对天地图发布的地图服务。  
OpenStreetMaps | 又称 OSM 引擎类型，是由网络大众共同打造的免费开源的地图服务。  
全球地形图 | 分为基础地形图和深色地形图，是超图发布的全球晕渲图地图服务。  

### ![](../../img/read.gif) 内存数据源

数据源中的数据都保存在内存中，为临时数据源，不支持保存。一些分析的中间结果可以存储在该数据源中，有利于提高分析的效率，当得到最终数据时可从内存数据源导出为本地数据。

内存数据源对应的数据引擎为内存引擎。

### 注意事项

SuperMap 支持 SDX+
数据引擎，支持存储的数据集对象最大记录数理论值为231-1，即：2147483647条记录，超过该记录值，后续记录将无法显示。
