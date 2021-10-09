---
id: 3-WorkFlow
title: Network Analysis Workflow
---
In the SuperMap, the basic steps of executing any type of network analyses are as follows: 

  1. Prepare the network dataset.
  2. Add the network dataset.
  3. Set the network analysis environment. How to set the environment of network analysis see [Network Analysis Environment Settings Window](NetAnalystEnvironmentWIN).
  4. Create a new instance of network analysis, such as optimal path analysis, service area analysis, etc., please see [Instance Manger Window](InstanceWIN).
  5. Add the objects of network analysis to the current map window. 
Note: Different network analysis has distinct objects to add, for example, the closest facility needs to add the event point and the facility point; but the service area analysis needs to add the center point. There are two ways to add: one is imported by the dataset, another is to add the objects by an interactive way.
  6. Set the analysis parameters. Performing the service area analysis needs to set whether the service radius and the analysis directions start at the service stations,whether the service stations are mutually exclusive, whether the analysis uses the turn tables, etc., as well as results parameters like whether to save the nodes and arcs information. 
  7. Perform the analysis, and then check the analysis results and the path tables. For the introduction of the path table please visit [Path Table](PathGuide).
