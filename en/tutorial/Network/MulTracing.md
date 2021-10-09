---
id: MulTracing
title: Multi-element Tracing Analysis
---
### Introduction

Performs the tracing analysis for the specified nodes/edges according to the network direction.

### Basic Steps

1. Open the network dataset.
2. On **Spatial Analysis** , and then select **Environment Settings** in the Facility Network Analysis group. The **Environment Settings** window appears. In this window, you can set the basic parameters (such as weight field and node/edge ID field), the analysis result parameters, the flow direction field of the tracing analysis, etc. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
3. An instance for creating a new multi-element tracing analysis: Click **Spatial Analysis** > **Facility Network Analysis** > **Multi-element Tracing Analysis**. The Instance Manager window opens, and now the edit operation of Multi-element Tracing Analysis is activated. For more information, see [Instance Manager Window](InstanceWIN).
4. Click **Parameter Settings** button in the **Instance Manager** window. The **Multi-element Tracing Settings** dialog box opens, which is used to set the analysis parameters. 
  * Feature Type**: Click the drop-down arrow to select the element type from the list. It supports 2 types: nodes and edges. If the Element Type is Node, the nodes will be selected as the analysis elements; otherwise the edges are the analysis elements. When the Element Type is Edge, the right-click menu in the Instance Manager window will not support the Import/Export function.
  * **Analysis Type** : provides 5 types. For the introduction to each analysis type, see [Analysis Type of Multi-element Tracing Analysis](MulTracingType).
    * **Common Upstream** : Along the opposite network direction, traces the upstream paths that can reach to all the specified nodes/edges.
    * **Common Downstream** : Along the network direction, traces the downstream paths that can reach to all the specified nodes/edges.
    * **Connected Edge** : Traces all the edges connected with the specified nodes/edges.
    * **Unconnected Edge** : Traces all the edges unconnected with the specified nodes/edges.
    * **Multi-connected Loops** : Traces all the loops connected with the specified nodes/edges.
  * **Loop is Valid** : Sets whether the loops are involved in the analysis. If you select the check box, the tracing analysis will consider the loops; if not, the loops will not be considered in the analysis.
5. Click **OK** to exit the dialog box.
6. Adds the nodes/edges in the current network layer. Adds the node/edge according to the specified Element Type and Analysis Type. The way to add nodes here is similar with the way in the transportation analysis, i.e., you can add the nodes by the mouse or by the **Import** on the right-click menu of the list tree. For the edges, you can only add them by the mouse. <br/>Note: If you need to delete a node, please select the node in the list tree and then click **Remove** on the right-click menu, or press **Delete** key.
7. After finishing the settings of the parameters, Click **Spatial Analysis** > **Facility Network Analysis** > **Run**. The analysis result will be immediately displayed in the map window, and the results can be saved as a dataset for the future use.
