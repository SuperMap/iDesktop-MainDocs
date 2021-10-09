---
id: ExternalTableManage
title: Business Table Management  
---  
### Function Description

It can add the tables created in the database itself to the database datasource as the attributes table type, which is often used to for SQL query, thematic map making or dataset appending of the related table.

### Introduction

  * The prerequisite of the function is that there is at least one business table created in the database datasource which is non system table;
  * The function applies to all datasources supported by  except for OracleSpatial-based datasources; 
  * The added business table is read-only, not support for adding, deleting fields and editing attributes values; 

### Main Steps

  1. Click Start > Datasource > Database..., select Business Table Management, or right click the datasource in workspace manager to choose Business Table Management.
  2. The dialog will display all business tables. Check the one to be added and click OK. 
  3. After adding the business table, it will display the business dataset in the datasource.

### Note

  * It is only useful for the database datasource. 
  * If there are no business tables in the datasource, the dialog will not show any tables.
  * When the table name is consisted by only numbers. or it contains some field types which can't be identified by SuperMap such as Next, Real, Money in SQL database, the tables can be added in the datasource, but can't be opened. It's recommended to first check whether the table is valid in SuperMap before adding it.
  * To remove business table will not delete the table in the database, but delete the information in the datasource.
  * SQL query and thematic map making with business table can be used only when the business table and the operation table are stored in the same datasource. 
