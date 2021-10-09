---
id: TopoCheck
title: Topology Checking
---
### Introduction

It is used to check the objects that don't conform to the topology in point,
line, region datasets and different datasets. And check that save the result
to the GIS Dataset (the point, line and region datasets) or the CAD dataset.

### Function Entrances

*  Data > Topology > Check Topology.
*  Toolbox > Data Processing > Check Topology. (iDesktopX)
### Parameter Description

### Add Dataset

Add the dataset needs to check to the list. The list will display the related
topology checking information of these datasets. The following will introduce
the information each column represents, editable and usage.

* Dataset: The dataset needs to topology check.
* Dataset: The datasource that the dataset needs to topology check belongs to.
* Topology Rule: There are 35 rules for the topology checking. You can select the topology rules in the "Parameter Settings" dialog box. Please refer to [Topology Checking Rules](TopoRule) for more information.

Instruction for Toolbar Button

* **Add** Button: Click "Add" button to add a record in the list box, which is used to record the dataset information needs to topology checking. After adding a record in the list box, the dataset and datasource to check will locate to the selected dataset and datasource in the workspace manager automatically. The topology rule will display the first rule supported by this dataset by default.
* **Select** Button: Click the "Select All" button to select all the records in the list box.
* **Select Inverse** Button: Click the "Select Inverse" button to inverse the records in the list box.
* **Remove** Button: Click the "Remove" button to remove one or multiple selected records.

### Parameter Settings

It is used to set the parameters. See [Topology Checking Rule](TopoRule)
for detailed description about topology rules.

* Topology Rule: It is the rule used to check the topology. The system will list all the topology rules that fit this dataset according to the dataset type. After selected a topology rule, the corresponding graph will be displayed in "Rule Description". It is convenient for users to know the rules.
* Tolerance: The tolerance used in topology checking and topology preprocessing, such as the distance between vertexes. The different topology rules should set the different tolerances and it is recommended to use the default tolerance. The tolerance unit is in accordance with the dataset unit.
* Offset Angle: This parameter is only used in the "line has no dangles" rule. It is used to set the tolerance of the angle of the segment.
* Topology Preprocessing: If check this box, the system will preprocess the dataset according to the tolerance. The tolerance can be set in "Tolerance". That is to say, all the points and lines are regarded as coincident in this range. You can save an point or line object as the right through topology preprocessing. Some topology rules have good effects after preprocessing. The topology preprocessing will recommend you to preprocess according to the dataset to check and the reference dataset. 

Because this operation will change the dataset that participate in topology
processing, "The operation might change the dataset participating the topology
validation." will be displayed. If users don't want to change is data, please
backup before this operation.

* Fix Topology Errors: The system cam fix the errors automatically. After selecting this option, the status of "Fix Topology Errors" will be checked. After checking this option, you can fix the dataset automatically at the same time. 

The topology rules can be fixed automatically are as shown below:

Topology Rule | Fix Method
---|---
line has no pseudo nodes | change the pseudo nodes into nodes, namely, merge the two lines that connected by pseudo nodes into one.
L/R has no redundant vertex | delete the redundant vertexes in line or region.
line not overlap line | if the line object in dataset to check overlaps with the line object in reference dataset, It will delete the superpositions in dataset to check.
line not self intersect | delete the self intersection in line obeject.
line not self overlap | delete the overlap in one of the line object.
vertex distance > tolerance | Snap all the nodes in the tolerance range and merger into a node.
vertices must match | Add the matched nodes to the line object.
vertex exists at line intersect | Add the point in the intersection of two segments.

### Reference Data

* Datasource: The datasource that the reference dataset belongs to, and the default is the datasource that the dataset to check belongs to. 
* Dataset: The reference dataset used in topology checking. According to the different topology rules, some rules will use two datasets to check, such as "point should be in line". It needs a line dataset as the reference dataset; But some rules check in one dataset, such as "line has no overlap". You can only select the dataset to check.

### Result Data

* Datasource: The datasource that the result dataset belongs to, and the default is the datasource that the dataset to check belongs to.
* Dataset: After selecting a topology checking record in the list box, you can set the result dataset name here. The default name is TopoCheckResult. The type of result dataset is related to the topology rule this record sets.
* Save to Same Dataset: If you check this box, save all the topology checking results in the list into a same dataset (CAD Dataset). The dataset name is the display name of current result dataset. If you don't check this box, users can set the result dataset name for every topology checking record. 
4. "Closed when finished" dialog box: After checking this box, the "Check Dataset Topology" dialog box is closed automatically when the application finished the topology checking of all the records; Otherwise, don't close the dialog box automatically. 

### Note

If the self-intersection region objects exist in the data to be checked, it
can't check the region with the rule of no gaps.

