---
id: TopotoPolygon
title: Construct Region by Topology
---
### Introduction

Builds the region dataset with line dataset or network dataset by the topology processing.

### Basic Steps

  1. In the Data tab, click Construct Region in the Topology group.
  2. Select the dataset to perform topology processing in the source data region, it can be a line dataset or network dataset. 
* Datasoure: Select the datasource that contains the line dataset or network dataset which is used in the constructing.
* Dataset: Select the the line dataset or network dataset to perform topology constructing.
* Topology processing: Before perform the construct region operation, it is recommended to perform topology processing operation for the dataset. Repair the problem line objects (for example, have pseudo, redundant point, overshoots, duplicated lines, not merged adjacent end points) within the tolerance by topology processing. Split the intersection line objects at the intersection point. By topology processing, you can avoid creating redundant objects when constructing regions. 

The following topology rules are enabled when checked Topology Processing, including clean pseudo nodes, clean redundant vertices, clean duplicate lines, clean overshoots, clean undershoots, merge adjacent ends and intersect arcs. You can select the proper rules according to your needs, for more details about topology rules, please refer to [Topology Rules](TopoProcess).

Click the Advanced button, the Advanced Settings dialog box appears, you can set the nobreak line and the tolerance.

  
Since this operation is done on the source dataset directly, a prompt "Note:
The operation will modify the source data" will appear when you check it, if
you don't want to modify the source data, please backup before performing the
operation.

When the Topology Processing is checked, the system will perform the topology
processing operation before constructing region, including check and repair
the topology error of the selected line dataset.

  3. Set the name of the result region dataset and the location to save it. 
* Datasource: The datasource that contains the result dataset, it the datasource that contains the source dataset by default.
* Dataset: The name of the result dataset. Note that when there are no enclosing regions in the line dataset used to create region, the count of objects in the result dataset will be 0. 


