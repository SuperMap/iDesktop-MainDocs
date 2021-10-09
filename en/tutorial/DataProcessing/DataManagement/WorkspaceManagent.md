---
id: WorkspaceManagent
title: Workspace Management
---
A workspace is where you operate on your data. You can open and manage datasources, layouts, maps, scenes in a workspace. You are allowed to open, save, close, and delete a workspace, also you can view the properties of your workspace.

### Types of workspaces

There are two types of workspaces: file-based workspaces and database-based workspaces.

* A file workspace is a workspace stored in the form of files, with the *.sxw/*.smw or *.sxwu/*.smwu file extension.
* A database workspace saves the workspace into a database. The suppored the types of database workspace include: SQLPlus, OraclePlus, PostgreSQL, MySQL, MongoDB, DMPlus and PostGIS and so on.

### Hierarchical Structure of Workspace

A work environment corresponds with a workspace. The workspace uses a tree
structure to present data. A workspace contains a data source collection, a
map collection, a layout collection, a scene collection, and a symbol
collection that are unique.

A workspace manages all datasources, maps, layouts, scenes and symbol
libraries in it in a tree hierarchy. Datasources, Maps, Layouts, Scenes and
Symbol Libraries together construct the first level of the workspace tree. In
a workspace, Datasource manages all opened datasources, Maps manages all maps,
Layouts manages all layouts, Scenes manages all scenes and Resources manages
Marker Symbol Library, Line Symbol Library and Fill Symbol Library.

The existance of maps, layouts, scenes and symbol libraries in a workspace
relies on the workspace. Once the workspace is deleted, they will also be
deleted. However, datasources in a workspace will not be deleted when the
workspace is deleted because datasoruces are stored independent of the
workspace.

### Open Workspace

There are three ways to open a workspace.

* The "Open" function in the "File" tab allows you to open different types of workspace.
* In the "Workspace" group under the "Start" tab, there are two function "File" and "Database" provided for you to open different types of workspace. You can click the two buttons directly, or you can click the drop-down buttons under them to open the drop-down lists. 
* Right-click the workspace node "Datasources" in the Workspace Manager, and then select "Open File Datasource" or "Open Database Datasource".

Take opening a SQLPlus-based workspace as an example.

1. Click on the SQLPlus button.
2. In the pop-up window input the necessary information and click OK.
* Server Name: You can directly enter the SQLPlus database server name. Or you can click the "Server Name" drop-down button. The server name you can access in currenct network will be listed. 

For Oracle databases, the configured service name in the local Oracle client is automatically listed.

* Database Name: Enter the name of the SQLPlus database where the workspace is located.
* User: The user name with the authority of opening workspaces in the specified SQLPlus database.
* Password: The password for validation.
* **Workspace Name** : Enter the workspace name you want to open. If other parameters have been set correctly, all workspace names are listed in the drop-down list of "Workspace Name:", which helps you select the workspace conveniently.

**Note** :

* You can open only one workspace in one session. Therefore, the current open workspace must be closed before opening another workspace. When closing the current workspace, the save prompt will pop up if there are unsaved changes in it. After the current workspace has been saved and closed, the Open SQL Server Workspace dialog box will show up.
* Data in an open workspace, such as the datasources, maps, layouts, scenes, symbol libraries are organized in the tree catalog in the Workspace Manager based on its original structure.

###  Save Workspace

The Save command allows you to save the workspace and all operating results
you have achieved to the workspace. To save your operating results for future
use, you need to save those results to the workspace first, and then save the
workspace.

* Save changes in the current workspace first. Click Save to open the dialog box Save. All unsaved items are listed in the Save dialog box where you can select the items that you want to save.
* **Save Workspace** : after you check all items you want, click Save to save them.
* **Save Workspace as** : if your workspace is brand new which has not been saved yet, the dialog box Workspace Save As will appear after clicking the Save button in the dialog box Save. Then you can save your workspace as a file-based or database-based workspace.

###  Close Workspace

The Close Workspace command allows you to close the opened workspace. Once the workspace is closed, the application will open another empty workspace.

1. Right click on your workspace node and select **Close Workspace**.
2. If there are no unsaved changes in the workspace, the workspace will be closed without any prompt. Otherwise, the application will ask you whether to save the changes or not.
3. You can click No to drop the changes or click Yes to save the changes.

###  View Workspace Properties

View attributes of your workspace through the workspace "Properties" panel
including how many datasources, maps, layouts, scenes, diagrams are existed in
the workspace and the storage path of your workspace.

1. Right click your workspace and select "Properties" to open the "Properties" window.
2. There are two panels in the window: "Property", "Statistics".
* **Properties** : Shows the workspace name, path, type, version and description information. You can click the "Copy" icon to copy the workspace path. You are allowed to add descriptions for your workspace, meanwhile, you can change your workspace password.
* **Statistic** : Show how many datasources, maps, layouts, diagrams, scenes there are in your workspace. 

### Create Workspace from Template

SuperMap provides the function to create workspace from template. With this
function, the created workspace will have the consistent datasource, dataset,
map, layout and scene. There are some differences:

* The datasource name and projection are consistent; 
* The dataset number, type, name, attributes table structure, projection, char-set, encoding, and domain are consistent;
* The objects N.O. in the dataset is 0, the data bounds are null, and the index type is no spatial index.

**Function Entrances**

There are two function entrances:

* Start > Workspace group > File > Create from Template...
* In the Start Tab window, you can click New Workspace to open the dialog box Create Workspace by Template.

**Parameter Description**

* Target Data: set the directory and name of the created workspace, the datasource in the workspace will be stored in the same directory.
* Template: select the workspace template. SuperMap provides three ways: 
* Current Workspace: the current workspace is the template.
* Local Workspace: right click to select a local workspace as the template, or input the workpace directory and name.
* Template Workspace: two templates are provided-national geographical conditions census template and basic geographic information terrain elements template.

###  Copy Workspace Path

According to the "Copy Full Path" option in the workspace context menu or the
"Copy" button in the workspace properties panel, you can copy the workspace
path and name to navigate to the local file.
