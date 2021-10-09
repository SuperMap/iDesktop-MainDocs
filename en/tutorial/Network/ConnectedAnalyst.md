---
id: ConnectedAnalyst
title: Connectivity between Two Points
---
### Introduction

Connectivity between Two Points is used to find nodes or edges that are
connected to the specified nodes, or check whether the specified nodes are
connected, on a network. When performing connectivity analyses, we do not need to consider the impedance of the network.

### Basic Steps

1. Open the network layer in the current map window.
2. You need to set the parameters of network analysis environment before performing the analysis. Click **Spatial Analysis** > **Facility Network Analysis** > **Environment** to open the **Environment**. In this window, you can set weight field, node/edge ID, traffic rules, turn table, etc. For more information, see [Environment Settings Window](NetAnalystEnvironmentWIN).
3. Click **Spatial Analysis** > **Facility Network Analysis** > **Network Analysis** > **Connectivity between Two Points** to create an instance of optimal path analysis. For the introduction of instance window, please see [Instance Manger Window](InstanceWIN).
4. Click in the current layer to add a start point. Two ways for adding: One is to click Add by Mouse on the toolbar of the Instance Manager window; the other one is to click Import on the right-click menu of Event Point. For specific information, please refer to [Import Station](ImportLocations.htm). <br/>You can add one start point and one end point. After adding them, they will be added in the **Instance Management** window automatically.
5. You can add end node and barrier nodes following the way of adding start node.
6. After adding a start node, an end node, and barrier nodes, click **Run** in the **Facility Network Analysis** group on the **Spatial Analysis** tab or click the **Run** button in **Instance Management** window to execute the connected element analysis.
7. When finished execution, the analysis result will display in the Output Window, telling you whether the two nodes are connected or disconnected.

### Note

* The event point can be exported as point dataset for the future similar analysis.
* The event point can be put on the nodes and edges or within the vicinity of the snap tolerance.
* Click **Move Station by Mouse** , select and drag the event point to modify its position.

### Related Topics

 [Adjacency Analysis](AdjoinAnalyst)

 [Connectivity Analysis](AccessibilityAnalyst)
