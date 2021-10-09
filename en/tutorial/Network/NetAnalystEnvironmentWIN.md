---
id: NetAnalystEnvironmentWIN
title: Environment Settings
---
The **Environment** window is used to set the global parameters of network analysis. You can check the **Environment** checkbox on the **Facility Network Analysis** group to show the **Environment** window, or uncheck the check box to hide it.

You are able to set the parameters of the **Environment Settings** window only if the network dataset is opened in the current map window.

### Introduction to **Environment Settings**

* **Toolbar Introduction**
  * **Style Settings** : Set the styles of nodes (e.g. various stops and barrier points), edges (e.g. result route), areas (e.g. service region) and texts (e.g. label) in transportation analysis and utility network analysis. For more information, see [Style Settings](StyleSetting).
  * **Traffic Rules Settings** : Set the traffic rules for network analysis. You can enable the one-way traffic rule, and edit its attributes (such as forward values, reverse values and prohibited values). For more information, see [Traffic Rules Settings](TrafficRules).
  * **Turn Table Settings** : Set the turn table in the network analysis including [Create Turn Table](CreatTurnTable) and [Set Turn Table](TurnTable). For more information, see [Turn Table](TurnTable).
  * **Weight Settings** : Update the weight values of edges and nodes. [Update Edge Weight](UpdateArcWeight) is used to set forward/reverse weight, and barrier edge. [Update Node Weight](UpdateArcWeight) is used to set turn weight and barrier point.
  * **Track Analysis Network Modeling** : Set all the parameters of tracing analysis including Node ID Field, Edge ID Field, Flow Direction, Grade, etc. For more information, see [**Track Analysis Network Modeling**](TraceModeling).
  * **Create Flow Direction** : Creates a flow for a 3D network dataset based on the location of the specified source and sink points. For more information, see the [3D Network Creation Flow](../SceneOperation/RealspaceNetworkAnalyst/BuildDirections3D) page.
  * **Analysis Area Settings** : It is used to set up the analysis area of the network analysis. When the network analysis is carried out, only the network data set within the analysis area is loaded, which improves the performance of the network analysis. For more information, see [Analyze Regional Settings](AnalysisArea).
  * **Pipeline Model Settings** : Before you can perform pipe burst analysis, you can build pipeline model data by building a pipeline model and setting up a pipeline layer function. For more information, see[ Build a Pipeline Model ](../SceneOperation/RealspaceNetworkAnalyst/BuildPipelineModel) and [Pipeline Layer Settings](../SceneOperation/RealspaceNetworkAnalyst/PipelineModelSetting)
  * **Check Loop** : Check whether a loop exists in the network dataset. For more information, see [Check Loop](CheckLoop).
  * **Create Network Model File** : Can be based on 2D network dataset, generate \*. Snm format network model file. For more information, see the[ Creating a Network Model File ](CreatNetworkFile).

* **Network Dataset Drop-down Box** : When there are more than one network dataset, you can select one to set in the drop-down box.
* **Basic Parameters in Network Analysis**
  * **Network Dataset** : Show the name of the current network dataset, which cannot be set by users.
  * **Forward/Backward Weight Field** : Select a field from the right drop-down box as the forward/backward weight field. You can select any field in the current layer as the weight filed. <br/>The weight field denotes cost from one node to another node. In the real world, the distance, time, cost can be used as the weight field. For example, you can use time as the weight field to calculate the optimal path from A to B that employs the path analysis. Forward weight field is the cost from the start node to the end node, whereas backward weight field is the cost from the end node to the start node. The two fields can be same (e.g. distance) or not (e.g. time: the time from the start node of an arc to its end node may be different from its end node to its start node). <br/>Direct input is supported for weight field. Also, you can select Expression... to construct the expression using the SQL Expression dialog box. For more details, please refer to [SQL Expression Dialog Box](../Query/SQLQueryDia).
  * **Node ID Field** : Select a field that uniquely identify every node in the network dataset from the right drop-down box. You can choose the field of a point dataset as the node ID field. The default field is SMNODEID.
  * **Edge ID Field** : Select a field that uniquely identify every arc in the network dataset from the right drop-down box. You can choose the field of a line dataset as the edge ID field. The default field is SMEDGEID.
  * **Start/End Node ID Field** : Select a field that can identify the start/end node from the right drop-down box. You can choose the field of a line dataset as the ID field. The default field is SMTNODE.
  * **Edge Filter** : Filter the edges with a SQL expression. The edges satisfied this expression will participate in the network analysis. You can type or select the expression, and then use the **SQL Expression** dialog box to define it. For more information, see [SQL Expression](../Query/SQLQueryDia).
  * **Traffic Rules** : Specify whether to enable the traffic rules. The default is forbidden to use. For more information, see [Traffic Rules Settings](TrafficRules).
  * **Turn Table** : Specify whether to enable the turn table. The default is forbidden to use. For more information, see [Set Turn Table](TurnTable).

* **Result Settings**
  * **Result Datasource** : The datasource that the results of network analysis are saved in by default. The subsequent results will be stored in this datasource by default. The default datasource is that the current dataset is saved in.
  * **Edge Info Field** : Provide the edge information such as the name field of road. It can be used for generating the path guide.
  * **Node Info Field** : Provide the node information such as the name field of bus stop. It can be used for generating the path guide.

* **Tracing Analysis**
  * **Flow Direction Field** : A prerequisite of tracing analysis. You need to specify a flow direction field as the edge direction.
