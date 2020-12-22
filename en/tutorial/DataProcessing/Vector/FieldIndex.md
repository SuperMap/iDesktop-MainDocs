---
id: FieldIndex
title: Field Index
---
Field index is a data structure which provides key for express locating in database system or other computer systems. Field index provide the quick access ability for specific key. It usually uses the B-tree (binary tree) data structure or the deriving data structure of B-tree.

### ![](../../img/read.gif)Introduction

Create index for one or more fields of the dataset is useful for quick search and sorting.

### ![](../../img/read.gif)Basic Steps

  1. In the Start tab, click Field Index in the Dataset group, the Dataset Field Index dialog box appears. 
  2. Select the datasource which contains the dataset to create index in the Datasource drop-down list.
  3. Select the dataset to create index in the Dataset drop-down list.
  4. Select the fields and create the index in the Index region. 
  * Index list: Lists the field index names created by the current dataset, and the main information includes the Index Name and the Fields That Created Index. 
    * Index Name: The index name used to identify this field, the name is relatively unique.
    * Fields That Created index: Displays the fields in the current index.
  * OK: Click OK, in the pop-up dialog box, select one or more need to create the index of the field, click "OK" button, you can create an index on the selected field, if more than one field to create an index, you can select the field to create a joint index , Applicable to multiple fields to do the query conditions.
  * Delete: Select the fields that need to create index, click Delete, representing that the current field didn't create the index.
  * Modify: Select a record in the index list to delete or increment the index field in the index name.
<!--<li>Select All: Select all the fields in the list.

    * Select Inverse: Select the currently not selected contents in the current list, unchecked the currently selected contents.
  5. Click **Close** button to close the window.