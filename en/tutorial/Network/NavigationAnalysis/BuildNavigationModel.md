---
id: BuildNavigationModel
title: Build Navigation Model
---
### Introduction

The construction of the navigation model is based on the network dataset,
according to the relevant attribute field information, to build *. ssc
navigation model data, which stores the environmental information required for
the subsequent navigation analysis.

### Function Entrance

  * Open the datasource the network dataset is in.
  * Click **Traffic Analysis** > **Navigation** > **Build Navigation Model** to open the dialog as follows.

### Parameter Description

  * **Source Data Settings**
    * **Datasource** : select the datasource the network dataset is in.
    * **Network Dataset** : select the network dataset to be built.
  * Arc ID: Select a field from the right drop-down box that uniquely identifies each arc in the network dataset, and you can select the field of the line dataset in the network dataset as the identity field. It uses SmEdgeID as the arc identification field by default.
  * Node ID: Select a field from the right drop-down box that uniquely identifies each node in the network dataset, and you can select the field of the point dataset in the network dataset as the identity field. It uses SmNodeID as the node identification field by default.
  * Start/end Node ID: Select a field from the right drop-down box that uniquely identifies the start/end node in the network dataset, and you can select the field of the line dataset in the network dataset as the identity field. It uses SmFNode as the start node identification field and SmTNode as the end node identification field by default. 
  * Arc Name: Set the name field of the roads to create the navigation guide.
  * Arc Weight: Set the weights of the two directions of the arc and whether the arc is a barrier.
  * Road Speed: Set the speed field, optional. An integer filed. 1 means the highest speed-150km/h; 2-130km/h; 3-100km/h; 4-90km/h; 5-70km/h; 6-50km/h; 7-30km/h; the other values-10km/h.
  * Road Level: Set the road level field, required, and the value range is 1-3, 3 means the highest level like the high way road; 1 means the lowest level like the country road. 
  * Traffic Rule: Set whether to enable the traffic rule. It is not enabled by default. About the details please refer to [Set Traffic Rule](../TrafficRules). 
  * Forbidden Turn Table: Set whether to enable the forbidden turn table, enable it and click "Field Settings ..." button on the right side to pop up a dialog box, check the "Enable Turn Table", then you can set the following parameters: 
    * Turn Table: Set an attributes table as the turn table and specifies its datasource.
    * Start Arc Field: Select a field as the start arc field in the turn table to represent which arc the forbidden turn is started from.
    * End Arc Field: Select a field as the end arc field in the turn table to represent which arc is forbidden to turn.
    * Node ID Field: Set the field to identify the forbidden turn point.
  * Set the output directory and name in Result Settings.
  * After the settings, click Build to start. After it is built successfully, open the network dataset in the map window, it will start navigation according to the navigation model file.
