---
id: ImportLocations
title: Import Stops
---
When performing the network analysis, you firstly need to specify the network locations to be analyzed, for example, you need to specify the stops for the Optimal Path Analysis, and the facility stops and event stops for the Find Closest Facility. All the above mentioned locations (stops) can be imported. In the **Instance Management** window, click **Import** on the right-click menu of the **Stop** directory node in the list tree, and then the **Import Stops** dialog box opens. The way to import barriers is similar with it.

### Add Station by Mouse

In the instance management click **Add by Mouse** to add stations continuously on the current map window by left-clicking. Right click to finish the operation. 
**Note** : an appropriate tolerance can help you to add stations.

### Import Station

Imports a point dataset from the current workspace as stations. In the instance management window, right click on the **Start Point** node and select **Import...** to import stations. You can use the same way to import barrier stations.

**Parameter Description** :
* **Source data**
  * **Datasource** : Selects the datasource of the point data.
  * **Dataset** : Selects the point dataset to be imported.
* **Name Field** : Selects a name field; after being imported successfully, the name of the stop will be displayed by the attribute of the field.
* **Node Filter**: It is used to set certain conditions for the imported points. Only the points that meet these conditions can be imported as the stops, facility stops, event stops, center stops, barrier stops, etc. You can directly type the expression, or click the browse button and then use the **SQL Expression** dialog box to define it. For more information, see [SQL Expression](../Query/SQLQueryDia).

* **Clear Existing Stops** : Selects the check box, then it will delete the stops that have been added when importing the stops. The results only retain the points of the current dataset or the points that meet the filter condition. 
