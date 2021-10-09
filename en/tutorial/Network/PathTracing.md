---
id: PathTracing
title: Shortest Path Tracing Analysis
---
### Introduction

Finds the path that the number of the edges between start node/edge and end
node/edge is minimum according to the network direction. The loops are invalid
for the shortest path tracing analysis.

### Basic Steps

  1. Open the network dataset.
  2. Click **Spatial Analysis** > **Facility Network Analysis** > **Environment** to open the **Environment Settings** windows. And then you can set the basic parameters (such as weight field and node/edge ID field), the analysis result parameters, the flow direction field of the tracing analysis, etc. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
  3. An instance for creating a new shortest path tracing analysis: Click **Spatial Analysis** > **Facility Network Analysis** > **Network Analysis** > **Shortest Path Tracing Analysis** to open the Instance Management window. For more information on the introduction of the instance management, see [Instance Manager Window](InstanceWIN).
  4. Click **Parameter Settings** button in the **Instance Management** window to open the **Shortest Path Tracing Settings** dialog box to set the analysis parameters. 
  * Feature Type**: Click the drop-down arrow to select the element type from the list. It supports 2 types: nodes and edges. If the Element Type is Node, the nodes will be selected as the analysis elements; otherwise the edges are the analysis elements. When the Element Type is Edge, the right-click menu in the Instance Manager window will not support the Import/Export function.
  * **Start ID** : The identifying field value of the start node/edge. It is corresponding to the Node ID Field and Edge ID Field in the Environment Settings window. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
  * **End ID** : The identifying field value of the end node/edge. It is corresponding to the Node ID Field and Edge ID Field in the Environment Settings window. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN). <br/>When **Analysis Type** is Shortest Path Between Two Points or Shortest Path Between Edges, you need to set the start node/edge and the end node/edge. When it is Trace Upstream/Downstream Shortest Path, you only need to set the start edge/node.
  * Analysis Type: provides 3 types: For the introduction of each analysis type, see [Analysis Type of Shortest Path Tracing Analysis](PathTracingType).
    * **Shortest Path Between Elements** : Finds the least cost path according to the specified start/end node/edge. The analysis type of the node is **Shortest Path Between Two Points** , whereas the analysis type of the edge is **Shortest Path Between Edges**.
    * **Trace Upstream Shortest Path** : Searches the least cost upstream path according to the specified nodes/edges.
    * **Trace Downstream Shortest Path** : Searches the least cost downstream path according to the specified nodes/edges.
  * **Loop** : Whether the network loop is in analysis or not. Check this box, representing the loop is in the tracing analysis; otherwise, not. 
5. Click **OK** to exit the dialog box.
6. Adds the nodes/edges in the current network layer. Adds the start node/edge and the end node/edge according to the specified Element Type and Analysis Type. The way to add nodes here is similar with the way in the transportation analysis, i.e., you can add the nodes by the mouse or by the **Import** on the right-click menu of the list tree. For the edges, you can only add them by the mouse. <br/>Note: If you need to delete a node, please select the node in the list tree and then click **Remove** on the right-click menu, or press **Delete** key.
7. After finishing the settings of the parameters, Click **Spatial Analysis** > **Facility Network Analysis** > **Run**. The analysis result will be immediately displayed in the map window, and the results can be saved as a dataset for the future use.
