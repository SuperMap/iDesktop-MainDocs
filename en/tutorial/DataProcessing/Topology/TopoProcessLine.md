---
id: TopoProcessLine
title: Process Line Topologically
---
### Introduction

Validate and repair the topology of line dataset and network dataset.

### Basic Steps

  1. In the Data tab, click Validate Line Topology in the Topology group.
  2. Select the source dataset to perform topology processing, it can be a line dataset or network dataset. 
* Datasoure: Select the datasource that contains the line dataset or network dataset.
* Dataset: Select the the line dataset or network dataset to perform topology processing.
  3. Topology processing options 

Topology processing options includes clean pseudo nodes, clean redundant vertices, clean duplicate lines, clean overshoots, clean undershoots, merge adjacent ends and intersect arcs, you can select the proper rules according to your needs. For more details about the topology processing rules, please refer to [Topology Processing Rules](TopoProcess). When perform topology processing, the system will validate the line dataset with the selected topology rules and repair the topology errors.

Click the Advanced button, the Advanced Settings dialog box appears, you can set the nobreak line and the tolerance.

* Intersect Arcs: set nobreak line parameter, the lines meet the parameters will not be broken. 
  * Nonbroken Objects: After setting the filter expression, the system will not break the line objects that meet the expression. Click the ![](img/button1.png) button on the right, the SQL expression dialog box appears, you can input expression in it. Please refer to [SQL Expression Dialog Box](../../Query/SQLDia).
  * Nonbroken location: Select the point datasets listed in the dropdown list on the right to determine Nonbroken location, Determines whether to break line objects by checking whether the distance between the point object in the selected point dataset and the adjacent line object is within the tolerance. 

If you do not set nonbroken objects, all the line objects will be used in the intersect arcs operation; if you do not set nonbroken locations, all the line objects will be used in the intersect arcs operation; when both nonbroken objects and nonbroken locations are set, the system will process the union.

* Tolerance Settings: Overshoots tolerance is used for clean overshoots, Undershoot tolerance is used for clean undershoot and Fuzzy is used for other topology processing rules that need to check the distance between nodes. The default tolerance is the dataset tolerance of the source dataset.

If the topology error options are not list, the system will skip the error. To perform more detailed topology, please refer to [Topology Check](TopoCheck).

The topology processing operation is done on the selected line dataset, no new result dataset will be created, a prompting interface "This operation will change the source data, continue?", to set you to decide whether to process to source data directly. You can backup the source data before performing the operation.

### Note

To perform Remove Undershoot Dangles for line data, you must check the "Edges Intersect" option, to guarantee the accuracy of the operation.  

