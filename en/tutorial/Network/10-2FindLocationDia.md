---
id: 10-2FindLocationDia
title: Location-Allocation
---
### Introduction

Location-Allocation is to select the optimal locations from many candidate
positions according to the specified parameters. Location-Allocation analysis
provides the references for finding the locations of the service facilities.
Fore more information about Location-Allocation please see [Location-
Allocation Overview](10-1FindLocation).

### Basic Steps

1. Open the network dataset to be analyzed.
2. In the **Network Analysis** group on the **Traffic Analysis** tab, select the check box of **Environment Settings** to pop up the **Environment Settings** window. In this window, you can set the network analysis parameters such as weight field and node ID field, and you also can set the analysis result parameters and the tracking analysis parameters (only during the tracking analysis you need to set). For the introduction about the window of the environment settings please see [Network Analysis Environment Settings](NetAnalystEnvironmentWIN).
3. The instance of creating a new location-allocation analysis. In the **Network Analysis** group on the **Traffic Analysis** tab, click the drop-down button of Gallery and then select **Location and Allocation** , and the **Instance Manager** window is pop-up. The mouse in the map window turns into the activating state, and now you can use it for adding center points.
4. Adding the center points in the current network layer. The center point is also called resource center provider which is the point to provide resources and services. Adding the center point has two ways, one is adding the center point by **Mouse Adding** in the network layer. The other is importing the point dataset as the center points in the **Center Point Management** window. 
  * **Adding the Center Point by Mouse**: On the toolbar of the **Instance Manager** Window, click **Mouse Adding** button, you can add the locations in the suitable positions of the map window. Once you add a center point in the map window, then the added point will be automatically showed in the **Center** list of the **Instance Mange** window. Right click to end the operation. Note: you need to set an appropriate tolerance for the node snap. If the mouse-click position beyond the node-snap tolerance may lead to the failure of adding a location.
    * **Importing the Center Point**: Importing the point dataset in the current workspace as the center points. In the list tree of the **Instance Manager** window, select center point node, in the right-click menu choose **Managing Center Point** to open the **Center Point Management** window. Click **Import** button in this dialog box to import the center points and set the parameters. For the introduction of the **Center Point Management** Window please visit [Center Point Management](CentersManagement).
Note: If you need to delete a center point, please select the center point in the list tree and then select **Remove** in the right-click menu or click **Delete** directly in the keyboard.
5. Click **Parameter Settings** button in the **Instance Manager** window to pop up the **Location Analysis Parameter Settings** for setting the parameters of the Location-Allocation. 
  * **Parameter Settings**
    * **Expected Center Number** : The location number that the users expect in the analysis results. When there is a fixed center point, then the expected center number must not be larger than the fixed center number.
    * **Least Center Mode** : Check the **Least Center Mode** to enable it, and now the **Expected Center Number** is invalid. The application will calculate the least center points to cover more areas.
There are two possible reasons for the failure of the analysis. On the one
hand, if the network is not fully connected (for example, there is an isolated
point or isolated situation), it will fail. You can check whether the network
is fully connected by flow. Choose a point as a source to construct a flow,
the position of the flow direction 3 is the non-connected position. On the
other hand, the optional center point should be enough, the service range
should be large enough to ensure full coverage of the entire network.
**Allocate from Center** : Select the Check box to indicate that the location is allocated from center point to request point, otherwise indicate to be allocated from the opposite direction.
  * **Result Settings**

    * **Datasource**: The data source that the results of the Location-Allocation will be saved to.
    * **Allocation Point Dataset** : Select the check box, and the allocated center points by the analysis will be saved as point dataset which can be named. The tabular dataset saved the information of the new center points including the center point type, the demand, the weight, etc. The following table describes the fields of the center attribute table:  
    - **Demand Dataset**: Select the check box, and the demand center points in the analysis result will be saved as tabular dataset. You also can name it. The tabular dataset saved the information of all the demand points, generally including all the net nodes in the current network layers. The following table describes the fields of the demand attribute table:

Field Name | Description  
---|---  
**CenterID** | Allocation point node ID  
**SupplyCenterType** | Allocation point type, 1 denotes optional center point, 2 denotes fixed center point.  
**DemandCount** | Allocation point resources.  
**TotalWeights** | Total cost indicates the sum of the cost from the allocation center point to all the service nodes.  
**AverageWeight** | Average cost indicates the average cost from the allocation center point to all the service nodes.  
**MaxWeight** | The maximum impedance of the allocation center point.  
  

Field Name | Description  
---|---  
**CenterID** | Demand point node ID, -1 denotes the point is not the demand point.  
**Cost** | The path of cost from demand point to center point. While the value is -1, it indicates that the point is not demand point.  
  
6. Click **OK** to end the parameter settings and exit the **Location Analysis Parameter Settings** dialog box.

7. After the parameter settings, Click **Execute** button to do analysis in the **Network Analysis** group or the **Instance Manager** window. The analysis results will be immediately displayed in the map window, and the results can be saved as dataset for the future use in the other places. 

### Note

* The location centers type must be the optional center point or the fixed center point; otherwise the analysis will be failed.
* The center point for Location-Allocation must be located on the nodes of the network; otherwise it is impossible to add them in the network layer.
* If you set obstacles in the network analysis layer, then the information of the obstacles will be displayed in the Network Analysis Manager window in which you can manage the obstacles. See [Obstacles Manager](BarrierManagement) for how to add a obstacle point.

### Related Topics

[Location-Allocation Overview](10-1FindLocation)
