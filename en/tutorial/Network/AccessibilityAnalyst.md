---
id: AccessibilityAnalyst
title: Connectivity Element Analysis
---
### Introduction

Find the nodes (edges) that are connected with the event point according to the connectivity condition.

The value of search level will directly influence the number of connected elements that participate in the connectivity analysis. Adjacency analysis is a specialization of connectivity analysis, whose search class is "1". For the introduction of adjacency analysis, see [Adjacency Analysis](AdjoinAnalyst).

### Basic Steps

1. Open a network layer.
2. You need to set the parameters of network analysis environment before performing the analysis. On the **Spatial Analysis** tab, in the **Facility Network Analysis** group, check **Environment Settings**. The **Environment Settings** window appears. In this window, you can set weight field, node/edge ID, traffic rules, turn table, etc. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
3. An instance for creating a new connectivity analysis: Click **Spatial Analysis** > **Facility Network Analysis** > **Network Analysis** > **Connectivity Element Analysis**. For the introduction of the instance manager window, see [Instance Manager Window](InstanceWIN).
4. Click in the current layer to add an event point. Two ways for adding: One is to click **Add by Mouse** icon on the toolbar of the **Instance Management** window; the other one is to click **Import...** on the right-click menu of **Event Stop**. For specific information, please refer to [Add Station](ImportLocations.htm). <br/>Only one event node is enough. After adding an event point, the point will be added in the instance management automatically. Right click to finish the operation.
5. Click **Parameter Settings** icon on the toolbar of **Instance Management** to open the **Find Connected Facility Settings** window where you can set parameters. 
**Result Type**
    * **Node** : Search the connected nodes of the event point.
    * **Edge** : Search the connected edges of the event point.
**Search Direction** : Forward, Backward, and Both
    * **Forward** : Find the connected elements along the direction of the arc.
    * **Backward** : Find the connected elements along the direction opposite to the arc direction.
    * **Both** : Find the **adjacent** elements along both directions (forward and backward).
  - **Search Level** : The grade of the edge that will participate in the connectivity analysis (i.e. network depth). "1" is the first-class connected edges (nodes), which mean that the arcs (nodes) adjacent to the event point will participate in the analysis. "2" is the second-class connected edges (nodes), which mean that the edges (nodes) "1" and the edges (nodes) adjacent to the nodes "1" will participate in the connectivity analysis. The meaning of "3", "4", and so on can be inferred in the same way. Beyond the class value that you set, the lookup will stop. The connectivity analysis can search more than one class, and the default value is "2".
6. Click **Run** in the **Facility Network Analysis** group or click the **Run** button in the **Instance Management** window to perform connectivity analysis.
7. The analysis results will be immediately displayed in the map window, and the **Output Window** prompts "connectivity analysis is successful". As shown in the figure below, they are the lookup results of forward, backward and both directions at the same event point (the search class is "2"). The arrow denotes the direction of arc, the red point is the event point, the purple points are the connected nodes, and the green lines are the connected edges.  

![](img/AccessForward.png)

### Note

* The event point can be exported as point dataset for the future similar analysis.
* The event point can be put on the nodes and edges or within the vicinity of the snap tolerance.
* Click **Move Station by Mouse** , select and drag the event point to modify its position.

### Related Topics

[Adjacency Analysis](AdjoinAnalyst)

[Connectivity Analysis](AccessibilityAnalyst)
