---
id: TopotoNet
title: Topologically Construct Network
---
### Introduction

Construct network based on specified point dataset, line dataset or network dataset.

### Function Entrance

  * **Traffic Analysis** > **Network Analysis** > **Network by Topology** > **Structure 2D Network**.

### Operating Instructions

  * **Add Dataset**

Add datasets for network construction in the list box. The list box lists datasets and datasources where these datasets are located. Besides, when you open the window for building network dataset, selected datasets in the workspace will be automatically added to the list.

Supports point datasets, line datasets, and network datasets. When building network, datasets involved can be line datasets only, or points dataset and line datasets. If datasets involved in network construction are all point datasets, the construction will fail.

* **Result Settings**
  * Datasource: The datasource where the result dataset is included.
  * Dataset: The result network dataset generated. The name of the dataset can be modified.
  * Result Field: Click Select Fields... button to display the Select Fields dialog box. 

In the Select Fields dialog box, user fields (non-system fields and SmUserID field) of all point and line datasets involved in network construction will display. The selected fields will be assigned to the generated network dataset. Attributes of point objects will be assigned to corresponding nodes of the network. Attributes of line objects will be assigned to corresponding edges of he network. Other fields of the network dataset will be assigned automatically by the system.

* **Split Settings**
  * Split Line by Point: Lines will be split by points within the specified tolerance. If points are coincident with end points of line objects, the lines will not be split. 
  * Split Lines at Intersection: Lines will be split by lines intersected with them. If one line intersects with another line at nodes, the line will not be split. Besides, If you check Split Lines at Intersection, Split Line by Point will be check automatically.
  * Tolerance: Set the split tolerance, i.e., the node tolerance, representing the minimum distance between points or lines. For example, if vertex of one line is within the specified tolerance to vertex of another line, the two vertex are regarded to be coincident. If vertex of one line is within the specified tolerance to a point object, the point is regarded to be on the line. 

Default tolerance is related to dataset coordinate system, please refer to [Tolerance Introduction](../DataProcessing/Tolerance).

Note: An appropriate value needs to be assigned to the tolerance. Lines will snap points within the tolerance. If the value is too large, a line object may snap multiple start and end nodes and extra points will be removed as duplicate points. Start and end nodes snapped by the end point of the line may not be correct, and vertex loss of other line objects may exist, therefore, causing network dataset error and network analysis error.

* Auto close when finish: The dialog box will automatically close when the analysis is finished.

### Note

If there are repeat lines in the line datasets for 2D network construction, error message will display during network analysis based on the network dataset. Therefor, it is strongly suggested topology processing should be firstly implemented before network construction.
