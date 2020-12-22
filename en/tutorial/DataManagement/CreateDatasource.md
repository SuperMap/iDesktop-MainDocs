---
id: CreateDatasource
title: Creating a Datasource
---
### ![](../../img/read.gif)Instructions

The supportive types of datasources contains: the file-based datasource, the database-based datasource, and the memory datasource. Please refer to [Datasources and Data Engine Types](EngineType-en.htm) for their features and application scenarios.

You can create a datasource through following three ways:

    * Click "File" > "New", and then select the datasource type as your needs.
    * Click "Start" tab > "Datasource" group, then select File or Database drop-down button to create the corresponding datasource.
    * Right click the "Datasources" node in the workspace manager, and then select the related datasource type. 

### ![](../../img/read.gif)New a file-based datasource

In the "New Datasource" dialog box, set the datasource path, datasource name.
The created file-based datasource will be saved into the *.udb file.

**![](../../img/read.gif)New a database-based datasource**

Supported database-based datasources contain: Oracle Plus, Oracle Spatial, SQL
Plus, PostgreSQL, DB2, KingBase, MySQL, BeyonDB, HighGoDB, KDB, SinoDB,
PostGIS and MongoDB.

Creations of some datasources rely on clients. The required parameters for creating different kinds of datasources are various. For more details, please refer to "[Open database datasources](OpenDatasource.htm#1)".

### ![](../../img/note.png)Note

    * When you are creating a datasource based on the PostgreSQL database, you can specify either an existing database name or a new database name, for the latter, a corresponding database will be created first with one PostgreSQL database for one PostGIS datasource. 

### ![](../../img/read.gif)Create a datasource based on a template

The datasource created based on a template is equal to a copy of the template.
The number, names and types of datasets in the datasource are the same with
those in the template. The structure of every attribute table is retained, but
the record number is 0 which means every dataset is empty.


