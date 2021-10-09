---
id: OverlayEvent
title: Overlay Event Tables
---
### Introduction

Overlaying event table can be used to get more useful information from
existing event table. According to the different overlay methods, overlay can
be divided into two kinds: Intersection and Union. According to the different
types of overlay event tables, overlay can be divided into line-line overlay,
line-point overlay and point-point overlay. For more information about event
tables, see [Event Table Overlay](AboutEventAnalyst).

### Function Entrances

  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **Workflow Manager** > **Overlay Event Table** button. (iDesktop)
  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **LineM** > **Overlay Event Table** button(iDesktopX)
  * **Toolbox** > **Traffic Analysis** > **Dynamic Segmentation** > **Overlay Event Table**. You can click on the tool directly or drag it into the geoprocessing modeler window. (iDesktopX) 

### Parameter Description

You need to specify the input events, overlay events and overlay parameter when overlaying event table.

  * **Input Event** : Set the parameters for input events. Including the datasource and event table that contains the events, the event type, route ID field, measure field, etc. 
  * **Overlay Event** : Set the parameters for overlay events. Including the datasource and event table that contains the events, the event type, route ID field, measure field, etc.
  * **Overlay Settings** : Set overlay parameters. Including overlay type, event tolerance, etc. 
    * **Overlay Type** : Select the overlay type, Intersection or Union. See [Event Table Overlay](AboutEventAnalyst) for more information about overlay types.
    * **Event Tolerance** : The tolerance used to determine whether the line event created is a zero-length event. Setting as 1 means the line events less than or equal to 1 will be viewed as zero-length event.
    * **Remove line events that the length is zero** : Whether to remove zero-length events. This option is enabled when intersecting line-line events; or union line-point events. 
    * **Reserve the attribute fields of event table** : Whether to reserve all the attribute fields except system fields of the overlay event table in the result event table.
  * Result data setting, it includes route ID field, measure field and datasource and dataset to save the result data. 
  * When the setting finished. Click **Ready** , it's ready to perform the current step. The finished flow will be gray and cannot be modify directly. If you need to modify the parameter settings, click the **Cancel Ready** button. (iDesktop) 


  * After the current step is ready, click **OK** to perform the operation.

### Related Topics

[Event Table Analysis Overview](AboutEventAnalyst)
