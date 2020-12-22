---
id: ContractionDS
title: Compacting Datasources
---
### ![](../../img/read.gif)Description

Compact one or more dataources to reduce disk space usage. This function only applies to UDB file datasource.

When you want to compact a password-protected datasource which is not open in the current workspace, you must enter its password first to compact it correctly.

### ![](../../img/read.gif)Basic Steps

  1. The "Compact Datasource" dialog box can be opened by following two ways: 
    * Way 1: On the Start tab, in the Datasource group, click File > Compact Datasource.
    * Way 2: Right click the datasource in the workspace manager, and then select " **Compact Datasource** ".
  2. In the "Compact Datasource" dialog box, all open file-based datasources in the current workspace will be loaded by default. You can click the Add icon in the toolbar to add other file-based datasources which are not opened.
  3. If a datasource is password-protected, you should enter its password at the "Password" box. 
  4. The Status of a datasource will be marked as Succeeded when it has been successfully compacted.

### ![](../../img/read.gif)Remark

  * If you use Compact Datasource, by default, all datasources opened in current workspace will be compacted.
  * If you select a datasource and compact it, the "Compact Datasource" will not pop up, and the result information will be shown in output window.

