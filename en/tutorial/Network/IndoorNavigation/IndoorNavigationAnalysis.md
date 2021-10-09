---
id: IndoorNavigationAnalysis
title: Indoor Navigation Analysis
---
You can load your navigation model data to perform the indoor navigation
analysis, and then intuitively observe the path from the specified starting
point to your desired destination.

### Instrucitons

1. Function Entrance: **Traffic Analysis** > **Indoor Navigation** group > **Indoor Navigation** button to open the **Indoor Navigation Analysis** dialog box. Specify all required data. 
    * [**Floor Relation Table**](BuildIndoorNavigationModel#2): It records all information on network datasets and their relationships. iDesktop will add indoor network datasets, floor datasets, outdoor datasets, and outdoor network datasets to a scene automatically resulting in a 2D&3D integrate navigation scene.
    * [**Stair Relation Dataset**](BuildStairRelation): It records all connection relationships of facilities and their running directions which are critical in navigation.
2. Click on the **Load** button. iDesktop will load a 3D indoor navigation scene, open the [Environment](../NetAnalystEnvironmentWIN) window and the **Instance Management** window, and create a temporal datasource in the workspace manager. 
3. **Temporal Datasource** : it contains a starting-point dataset (Indoor_Navigation_Analysis_BeginStop), an ending-point dataset (Indoor_Navigation_Analysis_EndStop), and a resulting-path dataset (Indoor_Navigation_Analysis_Result). The three datasets save all generated data during a navigation analysis.
4. **Instance Management** : you can specify your start point and your destination on the scene with the instance management window. 
    * **Start Stop** : there are two ways to add a start point. 
      * **Click** : Left click your mouse in an appropriate position to add a start point.
      * **Import** : to import a point dataset in the current workspace as a start stop, please right click the **Start Stop** node and select "Import...". For detail operations, please refer to [Import stations](../ImportLocations) dialog box. 
    * **End stop** : you can add an end point using the same way as adding a start point.
    * **Remove start/end point** : you can remove the start point and the endpoint you have added from the current scene. In the instance management window, right-click on the point you want to remove and select **Remove**.
5. **Run the analysis** : Click **Traffic Analysis** > **Network Analysis** > **Run** button. Or click the Run icon button in the **Instance Management** window to perform the navigation analysis. 
    * The resulting path will show on the scene. As the following picture shows, the orange line is the resulting path.
    * The result route node is under the Result node in the Instance Management window. You can right-click on the node and select **Save as Dataset** to save the resulting path as a line dataset. 
    * Path Guide: the Path Guide window will show specific information on the navigation route, including road name, distance, and turning direction. You can click on the Play icon button to let iDesktop demonstrate how to walk along the navigation route. For more details on path guide, please refer to [Path Guide](../PathGuide).

### Related Topics

  * [**An overview of indoor navigation**](IndoorNavigation)
  * [**Build indoor navigation model**](BuildIndoorNavigationModel)
  * [**Build facility relationship**](BuildStairRelation)
