---
id: SingleTracing
title: Single Element Tracing Analysis
---
### Introduction

Performs the tracing analysis for a specified node/edge according to the
network direction.

### Basic Steps

1. Open the network dataset.
2. Click **Spatial Analysis** > **Facility Network Analysis** > **Environment** to open the **Environment**. In this window, you can set the basic parameters (such as weight field and node/edge ID field), the analysis result parameters, the flow direction field of the tracing analysis, etc. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
3. An instance for creating a new single element tracing analysis: Click **Spatial Analysis** > **Facility Network Analysis** > **Network Analysis** > **Single Element Tracing Analysis**. The Instance Management window opens, and now the edit operation of Single Element Tracing Analysis is activated. For more information, see [Instance Manager Window](InstanceWIN).
4. Click **Parameter Settings** button in the **Instance Management** window to open the **Single Element Tracing Settings** dialog box where you can set the analysis parameters. 
  * **Feature Type** : Click the drop-down arrow to select the element type from the list. It supports 2 types: nodes and edges. If the Element Type is Node, the nodes will be selected as the analysis elements; otherwise the edges are the analysis elements. When the Element Type is Edge, the right-click menu in the Instance Manager window will not support the Import/Export function.
  * **Element ID** : The identifying field value of the analysis element. It is corresponding to the Node ID Field and Edge ID Field in the Environment Settings window. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
  * **Analysis Type** : the application provides 4 types: 
    * **Trace Upstream** : Along the opposite network direction, traces upstream all the paths that can reach to the specified node/edge.
    * **Trace Downstream** : Along the network direction, traces all the paths that can reach to the specified node/edge.
    * **Find Source** : Finds the closest source of the specified node/edge.
    * **Find Sink** : Along the network direction, finds the junction of the specified node/edge and other paths
  * **Loop Valid** : Set whether the loops are involved in the analysis. If you select the check box, the tracing analysis will consider the loops; if not, the loops will not be considered in the analysis.
  5. Adds the nodes/edges in the current network layer. Adds the node/edge according to the specified Element Type and Analysis Type. The way to add nodes here is similar with the way in the transportation analysis, i.e., you can add the nodes by the mouse or by the **Import** on the right-click menu of the list tree. For the edges, you can only add them by mouse. For more details, please refer to [Import Stations](ImportLocations.htm) <br/>Note: If you need to delete a node, please select the node in the list tree and click **Remove** on the right-click menu, or press **Delete** key.
6. After finishing the settings of the parameters, Click **Spatial Analysis** > **Facility Network Analysis** > **Run**. The analysis result will be immediately displayed in the map window. The results can be saved as a dataset for the future use.
