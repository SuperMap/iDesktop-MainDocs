---
id: InstanceWIN
title: Instance Management
---
**Instance Mangement** manages the analysis instance, which is a process to solve the practical problem by analysis in the network model such as path analysis, service area analysis and closest facility. Currently, network analysis has been widely used in electronic navigation, transportation, tourism, urban planning, logistics, electric power, telecommunication, etc.

### Instance Management

Click **Spatial Analysis** > **Facility Network Analysis** > **Network Analysis** , and then select any item to open the **Instance Management** window.

**Introduction to the Toolbar of "Instance Manger"**

* **Add by Mouse** : Click the button to add stations. Once you add a point, the application will add it to the stop list of the **Instance Management** window automatically. Right click to end the operation.
* **Move Station by Mouse** : Click the icon to move the station. Select a point, and then hold the left mouse button and drag it to any place within the snap tolerance. Release the left mouse button to finish the operation.
* **Run** : Click the icon to execute the network analysis.
* **Parameter Settings** : set the parameters of the current network analysis. The parameter settings window opens.
* **Delete the instance** : Click the icon and select **Yes** in the pop-up **Delete the instance** dialog box to delete the current instance. Click **No** to exit the current operation.

**Introduction to the Right-Click Menu of Directory Tree Node**

**Stop**
  * **Remove** : Click **Remove** in the right-click menu of **Stops** to remove all the child nodes in the **Stops** list. If select **Remove** in the right-click menu of its child node, then only this point is deleted. 
  * **Import** : Add the stops by import. For more information, see [Import Station](ImportLocations).
  * **Export** : Export all the stops in the current instance to save them as point dataset.

**Barrier Node**

  * **Remove** : Click **Remove** in the right-click menu of **Barrier Point** to remove all the barrier points in the list. If select **Remove** in the right-click menu of its child node, then you just delete this point.
  * **Import** : Add the barrier points by import, similar to import stops.
  * **Export** : Export all the barrier points in the current instance to save them as point dataset.

**Result**

  * **Save as Dataset** : Save all the subitems in the analysis results as the dataset. If you select **Save as Dataset** in its subitem right-click menu, then only the subitem is saved as the dataset. When generating a result dataset, you can select a field as the statistics field, which is the sum of the corresponding field values for all arcs through which the path passes.
  * **Remove** : Clear all the subitems in the analysis results.
