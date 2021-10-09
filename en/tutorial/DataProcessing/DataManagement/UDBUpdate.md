---
id: UDBUpdate
title: Conversion between UDB Datasource and UDBX Datasource
---
### Instructions

The feature **UDB->UDBX** is to convert a UDB datasource (*.udb) to a UDBX datasource (*.udbx) and the feature **UDBX->UDB** is to convert a UDBX(*.udbx) datasource to a UDB(*.udb) datasource.

Compared to the UDB datasource, the UDBX datasource has the following advantages.

* Since the UDBX datasource is a single file, managing a UDBX datasource is easier than managing a UDB datasource.
* Avoid the data corruption problem of UDB double files caused by the program crashes unexpectedly.
* The copy of UDBX data source performance is comparable to UDB datasource when there are no user-defined fields. As the number of fields increases, the copy of a UDBX datasource performance is much better than a UDB datasource. 
* The searching performance of a UDB datasource decreases obviously over increasement of data volume, and the same probelm do not exist in a UDBX datasource.
* Even a large file also can be opened quickly.

**The disadvantages of a UDBX datasource comparing to a UDB datasource** :

* Except point data, the size of a UDBX datasource is larger than a UDB datasource after creating R-tree.
* The query speed of a point dataset is slightly slower than the UDB engine. 

###  UDB->UDBX

1. Click "Data" > "Tools" > "Datasource Conversion" > "UDB->UDBX" to open the "UDB->UDBX" dialog box.
2. You can add UDB datasources directly. Or you can select a workspace and the application will add all datasources in the workspace. Click the icon button Add and select "Add Datasource..." or "Add Workspace...". You can select "Add Current Workspace..." or "Add Current Datasource" to add data in the current workspace as well. 
* **Datasource** : The name and path of datasource.
* **Password** : If your UDB data has a password, you need to enter its password and then you can upgrade your data.
* **Workspace** : If you add the UDB datasource by adding a workspace, the workspace name and path will be shown in the column. Otherwise, the item in the column is empty.
* **Target Datasource** : Click the corresponding item to change the path and name of result data.
* **Charset** : Now, only the "Original Charset" can be adopted.
* **Status** : Give a prompt whether your data has been upgraded. If yes, the item is "Success", conversely, the item is "Not Upgraded".
* **Convert Workspace** : checking the checkbox to convert data together with the workspace resulting in a new workspace. The original workspace won't be replaced. For example: the original workspace is "China.smwu". The result workspace will be "China_New.smwu" saved in the same folder. 

**Note** : If you add a datasource directly, the program can not identify which workspace it belongs to. Therefore, the application won't convert the corresponding workspace.

* **Unified Settings** : Select more than one UDB datasources and then click the icon button Unified Settings. In the pop-up dialog box, you can set the common parameters. 
3. Click "Start" to run the operation. The application will show you the path of the log file, which records the specific information, on the Output Window.

###  UDBX->UDB

The feature **UDBX->UDB** is to convert a UDBX datasource to a UDB datasource (double files), for the detail operations, please refer to "UDB->UDBX".
