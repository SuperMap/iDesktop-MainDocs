---
id: RelationManage
title: Relations Management
---
### Introduction

Relations Manager is used to manage the dynamic segmentation relations of all the datasources in the current workspace, including the query and delete of the dynamic segmentation relations between datasources or datasets, and the associated editing of the route dataset, event table and spatial data.

### Functional Entrances

  * **Traffic Analysis** tab > **Dynamic Segmentation** group > **Dynamic Segmentation** to open the dialog **Workflow Manager** and select **Relationship Management**. (iDesktop)
  * Click **Traffic Analysis** tab > **Dynamic Segmentation** group > **Dynamic Segmentation** > **Relation Management**. (iDesktopX)

### Parameter Description

* All the dynamic segmentation relations in the current datasource are listed in the list box. You can switch to other datasources in the workspace to see their dynamic segmentation relation.
* Query the dynamic segmentation relations of certain data. 

Query the dynamic segmentation relations of the data name you input, route data, event table and spatial data are supported.

Select the data type to find, input the data name to find in the text box, and click **Find**.

* Deleting dynamic segmentation relations. 

There are two types of deleting dynamic segmentation relations. (1) Only
deleting all the relations; (2) Deleting dynamic segmentation relations and
data at the same time, the data can be event tables or spatial data.

If **Delete Spatial Data** is checked, spatial data will be deleted together
with dynamic segmentation relations. Otherwise, the system will delete dynamic
relations among event tables, route data, and spatial data only.

* Editing dynamic segmentation relations. Click Edit to modify the route data, spatial data and event table. See [Relations Associated Modification](RelationLink) for more information.
* Click **Close Current Window** to exit the **Flow Management** window.

### Note

Double click the select dynamic segmentation relation in the **Manager**
window, the Relation Association window will appear. See [Dynamic Segmentation
Relation Association](RelationLink) for more information.
