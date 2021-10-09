---
id: SDBUpdate
title: Conversion between SDB and UDB
---
### Introduction

SuperMap iDesktop 7C and above no longer supports SDB datasources. The function "SDB -> UDB " allows you to convert a SDB datasource to a UDB datasource so that your data can be used in a higher version.

### Basic Steps

1. Click Data tab > Tools dropdown list > Datasource Conversion > SDB->UDB to open the dialog box SDB->UDB.
2. click the icon button Add > Add Datasource... or Add Workspace... to add the data that you want to convert.
* Datasource: Display the SDB datasource's name and location.
* Password: If the added SDB datasource has already been set password, users need to input the password to upgrade datasource.
* Workspace: If the added data is a workspace, the option will be used for displaying the name and location of workspace.
* Save UDB: Double click it to change the location for storing UDB datasource and the name.
* Charset: Double click it to set the target charset includes "UTF-8" and "Original charset". "UTF-8" is for a variable-length Unicode character encoding, which can be used for representing any character in the Unicode standard. Users are suggested to choose UTF-8 charset as default.
* Status: Tell users whehter the upgrade is finished or not. If the data is not upgraded, it displays "Not Upgraded". Otherwise, it displays "Success".
* Convert Workspace: checking the checkbox to convert data together with the workspace resulting in a new workspace. The original workspace won't be replaced. For example, if the original workspace is "world.smwu". The resulting workspace will be "world_New.smwu" saved in the same location.
* **Unified Settings:** select multiple SDB datasources and click the Unified button to open the dialog box Unified Settings where you can set the same parameters for all selected datasources. 
3. If there is a SDB datasource in the current workspace, the application will ask you whether to upgrade SDB datasource automatically. Click Yes to upgrade and save the workspace as another one. Otherwise, it may lead to the loss of datasource connection so the datasource will not be opened. 

### Note

* Only SDX+ for SDB engine will be supported for upgrade.
* SDB datasource will not replace the original one after upgrading. Workspace has the sdb datasource will be saved as a new one after upgrading and also contains the udb datasource which is upgraded from the sdb datasource.

