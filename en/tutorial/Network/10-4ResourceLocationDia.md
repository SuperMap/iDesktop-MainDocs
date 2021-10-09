---
id: 10-4ResourceLocationDia
title: Resource Allocation
---
### Introduction

Resource allocation is analysis to determine which resource demand objects (nodes and arcs) different supply centers will provide services according to the supply amount and the demand of resources from edges and nodes.

### Basic Steps

1. Open the network dataset to be analyzed.
2. Click **Traffic Analysis** > **Network Analysis** group and check **Environment** to pop up the **Environment** window. In this window, you can set the network analysis parameters such as weight field and node ID field, and you also can set the analysis result parameters and the tracking analysis parameters (only during the tracking analysis you need to set). For the introduction about the window of the environment settings please see [Network Analysis Environment Settings](NetAnalystEnvironmentWIN).
3. The instance of creating a new resource allocation analysis. Click **Traffic Analysis** > **Network Analysis** group > **Allocate** in the Gallery to open the **Instance Management**. The mouse in the map window turns into the activating state, and now you can use it for adding center points.
4. Adding the center points in the current network layer. The center point is also called resource center provider which is the point to provide resources and services. Adding the center point has two ways, one is adding the center point by Mouse Adding in the network layer. The other is importing the point dataset as the center points in the Center Point Management window. 
  * **Adding the Center Point by Mouse** <br/>On the toolbar of the Instance Manager Window, click Mouse Adding button, and then you can add the locations in the suitable positions of the map window. Once you add a center point in the map window, then the added point will be automatically showed in the Center list of the Instance Mange window. Right click to end the operation. Note: you need to set an appropriate tolerance for the node snap. If the mouse-click position beyond the node-snap tolerance may lead to the failure of adding a location.
  * **Importing the Center Point** <br/>Importing the point dataset in the current workspace as the center points. In the list tree of the Instance Manager window, select center point node, in the right-click menu choose Managing Center Point to open the Center Point Management window. Click Import button in this dialog box to import the center points and set the parameters. For the introduction of the Center Point Management Window please visit [Center Point Management](CentersManagement). <br/>Note: If you need to delete a center point, please select the center point in the list tree and then select Remove in the right-click menu or click Delete directly in the keyboard.
5. Click Parameter Settings button in the Instance Manager window to pop up the Allocate Parameter Settings for setting the parameters of the resource allocation analysis. 
  * Allocation Type (Demand Type)
    * Both Node and Edge Demand: Both the demand of the arcs and the nodes will be considered in the allocation analysis. 
    * Node Demand: Only the demand of the nodes will be considered in the allocation analysis. 
    * Edge Demand: Only the demand of the arcs will be considered in the allocation analysis.
  * Node Demand: Click the drop down button to the right, select one field as node demand field. This option is only available when the Allocation Type is Node Demand or Both Node and Edge Demand. 
  * Edge Demand: Click the drop down button to the right, select one field as edge demand field. This option is only available when the Allocation Type is Edge Demand or Both Node and Edge Demand.
  * Allow Traverse: if you check this option, the demand nodes or edges that have been allocated resources by one supply center can also be allocated resources by the other supply centers. The Allow Traverse option applies to the school case as discussed above. If you uncheck the Allow Traverse option, the demand nodes or edges that have been allocated resources by one supply center can not be allocated resources by the other supply centers, as in the case of delivering electricity discussed above. 
  * Allocate From Centers: if you check the Allocate From Center option, the Allocation analysis is performed from the supply center to the demand nodes or edges in the "deliver" mode as in the case of delivering electricity discussed above. If you uncheck the Allocate From Center option, the Allocation analysis is performed from the demand nodes or edges to the supply center in the "fetch" mode as in the school case discussed above. 
6. After the parameter settings, Click the **Run** icon to do analysis in the Network Analysis group or the Instance Manager window. The analysis results will be immediately displayed in the map window, and the results can be saved as dataset for the future use in the other places. There will be three types of result data as follows: 
  * Result Route: The route data is for allocation paths from different supply centers to demand points.
  * Center to Demand Points: Demand points that a supply center can serve, which can be saved as CAD dataset. The CenterID and CenterName fields in the CAD dataset records the Center ID and name who allocates resources to demand points. Center to Demand Points results will only be generated if the Allocation Type is Node Demand or Both Node and Edge Demand.
  * Center to Edges: Edges that a supply center can serve, which can be saved as CAD dataset. The CenterID and CenterName fields in the CAD dataset records the Center ID and name who allocates resources to edges. Center to Edges results will only be generated if the Allocation Type is Edge Demand or Both Node and Edge Demand.

### Note

* The type of center point in the Allocation analysis must be set to "Fixed center", and only by the fixed center point as the point of providing resources. The non-center can be allocated to resources. The non-center also can have resources, through the center point managing, it can be changed into a fixed point, so that it can be used to a point for providing resources. The optinal point can not be set.
* The center point must be located on the nodes of the network; otherwise it is impossible to add them in the network layer.

### Related Topics

[Location-Allocation Overview](10-1FindLocation)

[Location-Allocation](10-2FindLocationDia)
