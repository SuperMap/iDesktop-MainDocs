---
id: DatasourceManagement
title: Datasource Management  
---  
### Copy Datasource

Copies and pastes all datasets from one datasource to another datasource.

**Function Entrance**

Right-click on your datasource and select Copy Datasource...

**Parameter Description**

  * Keep Projection: Check the box to keep the projection of the target datasource. Otherwise, the projection of the target datasource would change to the same as the source datasource. It is checked by default.
  * Copy Structure Only: Check the box to keep the table structures of the datasets only. The spatial and attribute information recorded by the datasets will be dropped. It is unchecked by default.
  * Advanced: All datasets in the source datasource are listed. You can uncheck the box before a dataset if you don't want to copy it to the target datasource. You can name a the result dataset in the list.

### Note

  * The Copy Datasource command is active only when there is at least one datasource in the workspace.
  * When you copy a dataset from a UDB datasource to an Oracle-based or SQL Server-based datasource and there are text fields in the dataset, the text fields in the dataset will be converted to the wide character type field to ensure that the multilingual languages in the UDB can be properly stored.

### Compact Datasource

Compact one or more dataources to reduce disk space usage. This function only applies to UDB file-based datasources.

When you want to compact a password-protected datasource not in use, you need to enter its password first to compact it correctly.

**Function Entrances**

  * Way 1: Start > Datasources > File > Compact Datasource.
  * Way 2: Right click your datasource and select Compact Datasource...

The Compact Datasource dialog box will appear by using the first entrance. It
will list all file-based datasources opened in the current workspace. You can
click the Add icon in the toolbar to add other file-based datasources which
are not opened.

For a password-protected datasource, you should enter its password at the "Password" box.

The Status of a datasource will be marked as Succeeded when it has been successfully compacted.

 Note

  * If you use Compact Datasource, by default, all datasources opened in current workspace will be compacted.
  * If you select a datasource and compact it, the "Compact Datasource" will not pop up, and the result information will be shown in output window.

### Sort Datasource

Sorts all datasources in the curent workspace manager.

**Function Entrances**

Right-click on the Datasources node and select Sort Datasources.

There are three ways to change the dataset sort:

  * Name: Sorts all datasources in alphabetical order.
  * Type: Sorts all datasources based on their types.
  * Open Order: Sorts all datasources based on the last times opening them.

### Rename Datasource

Modifies the name of a datasource.

**Function Entrances**

  * **Way 1** : Right click a datasource node in the Workspace Manager and select Rename.
  * **Way 1** : Select the datasource and press F2 to rename it. 

### Note

  * Before you rename a datasource, you must ensure that all maps using datasets of the datasource are closed.
  * After renaming a datasource, all related layer names will be changed automatically. 
