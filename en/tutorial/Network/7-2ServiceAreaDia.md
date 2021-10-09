---
id: 7-2ServiceAreaDia
title: Service Area Analysis
---
### Introduction

The service area analysis mainly analyzes the service scope of the service
facility to provide the decision-making for business analysis. A service
facility generally has its own service radius, such as the different types of
supermarkets have distinct service radius (service area). In the network
analysis, the network nodes with resources are abstracted as service stops,
the maximum distance of the service stops is abstracted as service radius, you
can get the service network and service area (polygon) in the analysis
results. Service Area Analysis can be understood as not to consider the supply
and the demand of the resource center, but only the resource allocation which
only considers the edge resistance between the provider and the demander. This
type of analysis is generally used to evaluate and analyze the service scopes
of the public facilities, such as post office, hospital, supermarket, etc., so
as to provide the references for selecting the optimal locations of the public
facilities. Please visit [Service Area Analysis Overview](7-1ServiceArea)
for more information about the service analysis.

### Basic Steps

  1. Open the network dataset of network analysis.
  2. In the **Network Analysis** group on the **Traffic Analysis** tab, select the check box of **Environment Settings** to pop up the **Environment Settings** window. In this window, you can set the network analysis parameters such as weight field and node ID field, and you also can set the analysis result parameters and the tracking analysis parameters (facility network analysis needs to be set). For the introduction about the window of the environment settings please visit [Network Analysis Environment Settings](NetAnalystEnvironmentWIN).
  3. Create a new instance of the service analysis. In the **Network Analysis** group on the **Traffic Analysis** tab, click the drop-down button of Gallery, and select **Service Area Analysis** to pop up the **Instance Management** window. For the introduction about the window of the instance manager window please visit [Instance Manager Window](InstanceWIN).
  4. Add the service stops in the current network data layer. The service stop is the facility point to provide the services. Service Area Analysis takes the service station as the center point to do analysis. There are two ways to add a service stop: One is to add a point by clicking the **Mouse Adding** in the Instance Management window, the other is to import the point objects of point dataset as the service stops. 

Note: When the application program is doing the service area analysis, the
analysis results are unrelated with the input order of the service stops. If
you need to delete the service stop, then you can just select the list node of
the **Service Stops** , and then select **Remove** in the right-click menu or
click **Delete** in the keyboard.

* The same adding way can be used to set barrier points in service area analysis. For the introduction of the management of the barrier point, please see [Barrier Point Manager](BarrierManagement).
* Click **Parameter Settings** button in the **Instance Management** window of the network analysis to pop up the **Service Area Analysis Settings** dialog box which is used to set the analysis parameters. 

  * **Service Radius** : The service radius of the service stops, click the list box to enter a radius value. The unit of the service radius is consistent with the unit of the forward/reverse weight field in the network analysis environment. You can set the different service radii for the distinct service stops, or you can use **Assign Uniformly** to set all the stops at a time.
  * **Analyze from Service Station** : Set up the analysis direction of the service area. Whether to start the analysis from the service station or not. **Analyzing from service station** is that the service center provides the services to the demand stations (for example, milk stations allocates milk to the public ); whereas analyzing from the demand station is that the demand station initiatively gets services from the service centers (for example, the students choose a school for learning). 
  * **Service Stations Exclude** : If there are overlaps between two or more service areas, select the check box to perform the mutual exclusion, otherwise not.
  * **Generate Route** : Whether to generate the route data in service area analysis or not. Select the check box, then it will generate the polygon data and route results data of the service area, otherwise, it will just generate the polygon results data of the service area. 
  * **Generate Complex Area** : Generate detailed regions before doing the analyzing operation to make the results more accurate.
  * **Result Settings**
    * **Save Node Information** : Select to determine whether to save all the nodes information in the service area of the analysis results. If you select **Save Node Information** , then you can save the node information as point dataset and name it. And the dataset will be saved in the data source of the network dataset. In which the field NodeID denotes the route node ID in the service area of the analysis results.
    * **Save Edge Information** : Select to determine whether to save all the edges information in the service area of the analysis results. If you select **Save Edge Information** , then you can save the edge information as line dataset and name it. And the dataset will be saved in the data source of the network dataset. In which the field EdgeID denotes the route line ID in the service area of the analysis results.
* Click **Ok** to quit the **Service Station Analysis Settings** dialog box.
* After finishing the parameter settings, Click **Execute** button in the **Network Analysis** group of the **Traffic Analysis** tab or click button in the **Instance Manager** window. The analysis results will be immediately displayed in the map window, and the results can be saved as dataset for the future use in the other places.

### Note

  * The service stops can be put in the nodes and edges of the network or within the vicinity of the node tolerance.
  * The information of the service stops can be exported as point dataset, so as to the other network analysis can directly import it.
  * If you set the barrier points in the network analysis layer, then the information of the barrier points will be displayed in the **Network Analysis Manager window** in which you can manage them. For how to add a barrier point please visit [Barrier Point Manager](BarrierManagement).

### Related Topics

[Service Area Analysis Overview](7-1ServiceArea)
