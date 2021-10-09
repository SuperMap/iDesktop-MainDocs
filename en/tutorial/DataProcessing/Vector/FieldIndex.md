---
id: FieldIndex
title: Field Index
---
Field index is a data structure which provides key for express locating in database system or other computer systems. Field index provide the quick access ability for specific key. It usually uses the B-tree (binary tree) data structure or the deriving data structure of B-tree.

Create index for one or more fields of the dataset is useful for quick search and sorting.

### Function Entrances

* **Start** tab > **Data Processing** > **Field Index**.

### Parameter Specification

In the **Dataset Filed Index** dialog box, set the following parameters:

* **Source Data** : Select the dataset you want to create index from the Dataset dropdown list.
* **Index** : Click on the **Create** button and select fields to create indexes on them. 
  * Index list: Lists all indexes and the corresponding fields where each index is created on. 
    * Index Name: The index name used to identify this field, the name is relatively unique.
    * Fields That Created index: Displays the fields corresponding with each index.
  * **Create** : Click on the button to open the **Create Field Index** dialog box where you can select one or more fields to create indexes. If you select more than one fields, the application will create a united index which is applicable to multiple fields to do the query conditions.
  * **Delete** : select the index that you want to delete and click **Delete**.
  * **Modify** : Select a record in the index list and click **Modify** to delete or add an index field.
  

