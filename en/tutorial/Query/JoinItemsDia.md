---
id: JoinItemsDia
title: Setting the Linked Table
---
Relating datasets simply defines a relationship between two datasets. The associated data isn't appended to the dataset's attribute table. Instead, you can access the related data when you work with the dataset's attributes.

Each record in the Relate dialog box corresponds to an established relate. To add a new relate, click the Add button in the upper left corner of the dialog box. You are supported to establish multiple relates on the same dataset.

  * **Name** : The unique identifier of a relation. The name can be edited.
  * **Expression:** The SQL expression that relates the attributes in one table to another. The expression will be automatically created if you have set the source and related fields. 
  * **Related Dataset** : The dataset to relate to. For each relate, you can click the cell in the Related Dataset field to display a drop-down arrow, by clicking which you can display all other datasets in the datasource where the dataset you want to relate is located.
  * **Field** : The field of the current dataset on which the relate will be based. To select the source filed for a relate, click the cell in the Source Field filed to display a drop-down arrow, by clicking which you can display all fields of the dataset you want to relate.
  * **Related Field** : The filed in the related dataset on which to base the relate. To select the related filed for a relate, click the cell in the Related Field filed to display a drop-down arrow, by clicking which you can display all fields in the related dataset.
  * **Join Type** : The left join and inner join are supported.
    * Left Join: Left join returns all records from the source dataset, even if there are no matches in the related dataset.
    * Inner Join: Inner join returns records that the specified fields match each other completely.

**Join Type Examples:**

**Source Table** | **Related Table** | **Left Join Results** | **Inner Join Results**  
---|---|---|---  
| Source Field | Field 2  
---|---  
1 | 1A  
2 | 2B  
3 | 3C  
4 | 4D  
| Related Field | Field 3  
---|---  
1 | 10  
2 | 20  
3 | 30  
5 | 50  
| Related Field: | Field 2 | Field 3  
---|---|---  
1 | 1A | 10  
2 | 2B | 20  
3 | 3C | 30  
4 | 4D |  
| Related Field: | Field 2 | Field 3  
---|---|---  
1 | 1A | 10  
2 | 2B | 20  
3 | 3C | 30  
|  |  
  
  * **Join Rules** : To join the same dataset in different conditions at the same time, you can click the **Join Rules** item of each record to set its relationship to the next record. The item **Join Rules** has two values that we detail below. 
    * **AND** : to match all conditions, you can set the rule to AND.
    * **OR** : to match one of these join conditions, you can set the rule to OR.
  * **OK** : Apply all settings and close the dialog box. Click OK to go back to the SQL Query or the Filter Expression dialog box. The related field is added to the Fields list as shown below.

![](img/Fields.png)  


### Note

  * It is recommended that the associated fields (this table field and the outer table field) are integers. Using an indexed field as the associated field is suggested as well.
  * After adding an outer link table for a dataset in a PostGIS-based datasource, iDesktop will add quotes before and after each table name automatically when constructing an expression to avoid case sensitive problems. 
