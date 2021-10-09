---
id: SQLQueryTemplate
title: SQL Template
---
### Introduction

SQL template (*.xml) records query mode, query data, group field, result, etc. You can Import the prepared SQL template, or you can Export the SQL Query dialog box to a SQL template.

The following example is how to export to a SQL template, using World.CONTINENT field and World_World.COLOR_MAP field. See [SQL Query using Group By](SQLQuery_Group).

Shown as follows:

Copy

    
    
    
    <?xml version="1.0" encoding="utf-8"?>
    <sqlQuery xmlns="http://www.supermap.com/desktop">
    	<queryMode value="1"/>
    	<sqldataset dataset="World" datasource="World"/>
    	<sqlField value="World.CONTINENT as CONTINENT, World.COLOR_MAP as COLOR_MAP, Count(World.SmID) as Count"/>
    	<sqlCondition value=""/>
    	<sqlGroupField value="World.CONTINENT, World.COLOR_MAP"/>
    	<sqlOrderby>
    		<field0 value="World.CONTINENT" order="ascending"/>
    	</sqlOrderby>
    	<standardsql value="select World.CONTINENT as CONTINENT, World.COLOR_MAP as COLOR_MAP, Count(World.SmID) as Count from World 
        group by World.CONTINENT, World.COLOR_MAP order by World.CONTINENT asc"/>
    	<showeTabular value="True"/>
    	<showOnMap value="False"/>
    	<showOnScene value="False"/>
    	<saveResult value="False"/>
    </sqlQuery>
    
    

  * <queryMode>: if 0, query both spatial and attribute information; if 1, only query attribute information.
  * <sqldataset>: the datasource and the dataset to be queried.
  * <sqlField>: multiple fields can be set for SQL
  * <sqlCondition>: set query conditions.
  * <sqlGroupField>: multiple fields can be grouped together
  * <sqlOrderby>: both ascending and descending are available. 
  * <standardsql>: SQL clauses based on parameters and conditions.
  * <showeTabular>: whether to view the result attribute table.
  * <showOnMap>: whether to view the result at the current map window. If the Query Mode is Attributes Only, this item is unavailable.
  * <saveResult>: whether to save the query result

### Related Topics

[The Group Clause](SQLQuery_Group)

[SQL Expressions](SQLQuery_Expression)

[SQL Query Example](SQLQuery_Example)

[Cross Table Query](SQLQuery_Related)

[Example of SQL Query Field Order] (SQLQuery_OrderByexample)

