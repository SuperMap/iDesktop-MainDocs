---
id: TraceModeling
title: Tracking Analysis Network Modeling
---
### Introduction

Creates and sets the flow direction of tracking analysis.

When creating the flow direction field, you firstly need to specify the source and sink in the tracing network, and then save the information of the source and sink into a field. The flow direction is calculated by the source-sink field. In addition, you also can create the river grade field for saving the grade of the river.

### Basic Steps

1. Click **Create Flow Direction** > **Trace Analysis Network Modeling** button in the **Environment** window to open the **Trace Analysis Network Modeling** dialog box.
2. In this dialog box, select the network dataset that you want to create the flow direction for, and then set the Edge ID field, Node ID field, Start Node ID Field and End Node ID Field.
3. Select the **Create Flow Direction** check box to set the Flow Direction field and the name of the Node Type field. The default name of the Node Type field is NodeType, which is used to save the type of the imported node, in which 0 denotes the common node, 1 denotes the source node, and 2 denotes the sink node. 
4. Select the **Create Level** check box when you need to create the grade of the river. You also can name the level field. 
5. Set whether the loops are effective. It can be enabled when you select the **Create Level** check box. If you check **Loop Valid** , the tracking analysis will consider the loops, then the result path may include the loops; if not, the loops will not be considered in the analysis. 
6. Click the **Import** button to open the **Import Node** dialog box. You can set the parameters of the imported source/sink nodes in this dialog box. 
7. After importing the nodes successfully, you can click the **Node Type Filed** column to modify the node type for each node. There are three node types including the common node, source node and sink node, and the default type is source node. 
8. The dialog box organizes a series of common features, providing in the toolbar.
  * **Import** : Imports the nodes and sets the parameters. The figure below is the **Import Nodes** dialog box: 
    * **Datasource**: The datasource to be imported which has the source and sink data.
    * **Dataset** : The dataset that has the source and sink data.
    * **Node Type Field** : If the types of the source/sink nodes have been saved in a field, you can select the field to import the nodes and the types of the nodes.
    * **Filter** : Imports the nodes which meet the filter condition. You can directly type the expression, or click the browse button and then use the **SQL Expression** dialog box to define it. For more information, see [SQL Expression](../Query/SQLQueryDia).
    * **Import by Associated Node** : Selects the check box to import the nodes by an associated field. Sometimes it needs to use the points of the network analysis as the nodes, then users can select a field of the point dataset as the associated field. The field associates with the Node ID filed to import the nodes.
    * **Node ID Field** : It is consistent with the Node ID Field in the **Environment Settings** dialog box. It can be used only when the **Import by Associated Node** check box is selected.
  * **Export** : Exports the nodes, and saves them as the point dataset. The figure below is the **Export Node** dialog box: 
    * **Datasource**: The datasource that the exported nodes save in.
    * **Dataset** : The name of the exported point dataset.
    * **Node Type Field** : The type field name of the exported node.
    * **Node ID Field** : The ID field name of the exported node.
    * **Save the selected records only** : If you select the check box, it will only export the selected nodes in the source-sink list; otherwise it will export all the nodes.
  * **Select All** : Selects all the nodes in the source-sink list.
  * **Select Inverse** : Inversely selects the nodes in the source-sink list.
  * **Remove** : Removes the selected nodes in the source-sink list.
  * **Assign to All** : Assigns the values for the selected nodes to modify their nodes' type. Click the **Assign to All** button, and the **Assign to All** dialog box opens. And then you can modify the nodes' type as the source, sink and common node. 
9. After setting the parameters, click OK to finish the modeling work of tracing analysis.

### Note

If there is only one child network for the current network dataset, network dataset flow can be calculated through one sink and one source. If there are multiple child networks in the network dataset, network dataset flow can be calculated by multiple sources and sinks.
