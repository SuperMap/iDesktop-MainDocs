---
id: DS_Copy
title: Copying a Datasource
---
### ![](../../img/read.gif)Instructions

Copy all the datasets from one datasource to another datasource.

### ![](../../img/read.gif)Basic Steps

  1. Right click a datasource node in the Workspace Manager and click Copy Datasource.
  2. The Copy Datasource dialog box appears where you can specify the source datasource where all datasets to be copied from and the target dataset where the copies will be saved in, and other parameters. 
    * Keep Projection: Check the box to keep the original projection for the target datasource. Otherwise, the projection for the target datasource would change to that of the source datasource. It is checked by default.
    * Copy Structure Only: Check the box to keep the table structures of the datasets only. The spatial and attribute information recorded by the datasets will be dropped. It is unchecked by default.
    * Advanced: All datasets in the source datasource are listed. You can uncheck the box before a dataset if you don't want to copy it to the target datasource. You can name a the result dataset in the list.

  3. Click OK to copy the datasets to the target datasource.

### ![](../../img/note.png)Note

  1. The Copy Datasource command is only active if there are more than one datasource in the workspace.
  2. When you copy a dataset from a UDB datasource to an Oracle or SQL Server data source, if there are text fields in the dataset, the text fields in the dataset will be converted to the wide character type field to ensure that the multilingual languages in the UDB can be properly stored.



