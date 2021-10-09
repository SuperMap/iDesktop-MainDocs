---
id: SQLQueryDia
title: Querying with SQL Statements
---
### Introduction

The **SQL Query** command allows you to select the data that meets the specific criteria from existing data through a written statement or logical expression. The data types are: point, line, region, text, CAD, attribute table, 3D point, 3D line, 3D region, network, route, CAD line and CAD region datasets.

### Function Entrances

  * Ribbon: **Spatial Analysis** > **Query** > **SQL Query**.
  * Toolbox: **Query** > **SQL Query**. (iDesktopX)

###  Operating Instructions

  1. Click the Spatial Analysis tab > the Query group > the SQL Query button.
  2. If you specify a layer to query, field information is listed on the lower-left side. You need to specify a field to query.
  3. Meanings and instructions of other parameters in the dialog box are detailed below.
  * **Select Dataset** : All datasets in the workspace are listed in Select Dataset area. Select a dataset and all fields in its attribute table are listed in the Fields area.
  * Fields: Display all fields in the attribute table of a dataset you selected. The Fields box lets you select the query, group and sort fields. You can define a relationship between two tables to access the related data by clicking the Related item at the bottom of the list. Please refer to [Relate](JoinItemsDia) to know how to access the related data when you query a dataset.
  * Query Mode: The Geometry and Attributes and Attributes Only query modes are provided. The Geometry and Attributes mode lets you get both the spatial and attribute information while the Attributes Only mode returns only the attribute information. If you don't want to save the results, the latter mode will be more favorable because it is faster. You can click the radio button ahead to select the corresponding query mode.
  * Operator and Function: The operators and functions for composing SQL expressions. For more contents about operators and functions, please refer to [Instructions about how to construct a SQL query function](SQLQueryFunction).
  * Get Values: All values in a field without duplicates. You can click the Get Unique Values button to view all values without duplicates in the filed highlighted in the Fields list. Besides, you can type a value in the Find text box to navigate to the value in the Values list. Also, you can double click a value to use it when building an expression.
  * Find: If you input a field value in the text box, the field is always located by this value. Note that this function is valid only when the unique value of selected field is got.
  * Select: List all the fields you want to return after the query. You can: 

(1) Position your cursor in the Select box and select individual fields by double clicking in the Fields box. Each field added to the Select box will be displayed in the form of "Dataset.Field as Dataset.Field", you can change the part after "as" to the field alias you want to display the result table.

(2) Position your cursor in the Select box and double click the first item with the asterisk (*) in the Fields box to select all fields.

(3) Position your cursor in the Select box and build the field with functions provided.

  * Where: Define the conditions to filter the results from an SQL expression. You can directly type the condition in the Where box or build the condition with the fields in the Fields box, functions and operators provided in the drop-down lists. **Note** : the last searching record can be retained, based on the record you can continue to modify the condition and perform the query operation.

There are two situations for query statement construction:

(1) While using commonly used functions to construct query statements, functions supported by different engines are different. Please refer to [Support of SQL query for different engines](../../Illumination/SQLSupporttedType).

(2) While directly inputting query statements, you can specify it according to the functions supported by the engine type of the current datasource. Please refer to [SQL Function Declaration](SQLQuery_Expression).

  * Group By: The fields to group the query results. The group field must be among the query fields, the fields listed in the Select box. Aggregate functions applies only to grouped records. You can position the cursor in the Group By box and double click in the Fields list to select sort fields.
  * Sort by: The field values can be sorted in ascending or descending order. When you specify more than one fields the system firstly sorts the first field records. When the first field has the same value of records, the system sorts the second field, and so on, and finally get the results of this order.   
You can position the cursor in the text box then double click the text box and then enter or choose a field as another sort field. The default is ascending. Each end is the Delete button ![](img/DeleteRow.png), click the button to delete the row sorting information.

**Note** : The field used for sorting must be numeric.

  * Show Results: Set how you want to display the query results. 
    * In new table: Check the box to display the query results in a new attribute table.
    * On map: Check the box to highlight the results on the map. You must set the Query Mode to Geometry and Attributes and have the dataset queried displayed in a map window to highlight the query results on map.
    * In scene: On map: Check the box to highlight the results on the map. You must set the Query Mode to Geometry and Attributes and have the dataset queried displayed in a scene window to display the query results in scene.
  4. **Save Results** : Check the box to save the query result in a new dataset.
  5. **Import** : Import the SQL query template (*.xml). The parameters of SQL query are determined by clauses and conditions in *.xml. For more SQL template, see [SQL Query Template](SQLQueryTemplate).
  6. **Export** : Save the clauses and conditions of the SQL dialog box to the SQL template (*.xml). For more SQL template, see [SQL Query Template](SQLQueryTemplate).
  7. **Query** : Execute SQL query by clicking this button. If failed, check theSQL constructor. The **Clear** feature can clear all query parameters.

### Note

You need to specify an alias for the query field built through functions. For example, Len(World.COUNTRY) as Length, in which Length is the alias for the query field Len(World.CONTINENT) built based on the Len function.

**The modes that the different engines process the alias names**

  1. For SQL Server Plus datasources, no default alias will be given to the query field without a specified alias. In the attribute table opened for showing the query results, the results will be displayed and the field alias will be shown as empty. However, the query results will not be saved to the specified new dataset. That is caused by the differences of databases.
  2. For UDB/UDBX and Oracle datasources, the function expression will be directly assigned to the alias if you don't specify an alias. In the attribute table opened for showing the query results, the results will be displayed and the field expression will be shown as the field alias. However, the query results will not be saved to the specified new dataset. That is caused by the differences of databases.

### Related Topics

[The Group Clause](SQLQuery_Group)

[SQL Expressions](SQLQuery_Expression)

 [Description on Construction of SQL Query Functions](SQLQueryFunction)

[SQL Query Example](SQLQuery_Example)

[Cross Table Query](SQLQuery_Related)

