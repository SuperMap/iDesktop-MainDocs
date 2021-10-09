---
id: 4-BuildNetwork
title: Building Network Dataset
---
###

Network datasets are well suited to store the data models which have the network topological relationships. Network dataset models include the network line dataset and the network node dataset, as well as the topological relationship between them. In the network dataset, the line dataset is the master while the point dataset is the sub dataset.

With network data models, you can perform various network analyses, such as route analysis, service area analysis, closest facility, location-allocation analysis, accessibility analysis, etc. The creation of the network dataset is the basis of the entire network analysis. All the functions of network analysis can perform in the network layer. The SuperMap generates the network dataset by topology.

You need to do the following preparations before building the network data:

1. Prepare the dataset of building the network data 
  * Get ready for the data of building the network data. Point dataset, line dataset and network dataset can be used to build the network data. In which, the point data is optional, even if you do not select the point data, you still can build a network dataset. When the network dataset incorporates in the building, it is equivalent to use the other point and line data to refactor the network data.
2. Prepare the field information of the network dataset 
  * To ensure the line data for building the network contains a field that denotes the network resistance, such as the fields that denotes the time and distance information. In the real world, weight fields change with the directions, so we need to provide a field for every direction. For example, F_T_TIME can be used to denote the cost time of the arc from the start node to the end node, while T_F_TIME denotes the cost time of the arc from the end node to the start node. 
  * In the route analysis, if you need to generate the text information of the path table, please make sure that the line data for building the network contain the fields of the required instructions such as road name, site name.

  * **Building Network Dataset**

The details of the operation please see [Network Topology](TopotoNet).

  * **Editing Network Dataset**

Network dataset supports the editing operations. After preforming the editing operation for a network dataset, you can create a new network dataset by network topology. For the editing operations of network dataset please visit [Object Operations](../DataProcessing/Objects/Objects).

Note: the edited network dataset can only perform the network analysis after
generating the network data by network topology.

### Note

  1. While implementing network analysis, the modification on the network dataset will not participate in the calculation automatically. You need to reopen the network dataset in the map if you want to implement network analysis based on the modified network dataset.
  2. If the network dataset has been destroyed, errors will occur during network analysis. You can add network dataset in the Network by Topology dialog box to reconstruct network.