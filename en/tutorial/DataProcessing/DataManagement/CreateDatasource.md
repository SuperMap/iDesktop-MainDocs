---
id: CreateDatasource
title: Creating a Datasource
---
### Instructions

The supportive types of datasources contains: the file-based datasource, the
database-based datasource, and the memory datasource. Please refer to
[Datasources and Data Engine Types](EngineType) for their features and
application scenarios.

You can create a datasource through the following three ways:

* Click **File** > **New** , and then select the datasource type according to your requirements.
* Click **Start** tab > **Datasources** group, then selecting File or Database drop-down button to create the corresponding datasource.
* Right click on the "Datasources" node in the workspace manager, and then select the related datasource type. 

### New a file-based datasource

In the "New Datasource" dialog box, set the datasource path, datasource name. The created file-based datasource will be saved to a *.udb file or a *.udb file.

**New a database-based datasource**

Supported database-based datasources contain: Oracle Plus, Oracle Spatial, SQL Plus, PostgreSQL, DB2, KingBase, MySQL, BeyonDB, HighGoDB, KDB, SinoDB, PostGIS and MongoDB.

You need to install some clients to create corresponding datasources. The required parameters vary from datasource to datasource. For more details, please refer to "[Open database datasources](OpenDatasource)".

### Note

* When you are creating a datasource based on the PostgreSQL database, you can specify either an existing database name or a new database name, for the latter, a corresponding database will be created first with one PostgreSQL database for one PostGIS datasource. 

### Create a datasource based on a template

The datasource created based on a template is equal to a copy of the template. The number, names and types of datasets in the datasource are the same with those in the template. The structure of every attribute table is retained, but the record number is 0 which means every dataset is empty.

