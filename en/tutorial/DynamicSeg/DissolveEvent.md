---
id: DissolveEvent
title: Dissolve Event Tables
---
### Introduction

Dissolve the events with the same route ID field and dissolving field value.
It can be used to remove redundant information or split event tables according
to different attribute information. See [Dissolving Event
Table](AboutEventAnalyst) for more information.

### Function Entrances

  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **Workflow Manager** > **Integration Event Table** button. (iDesktop)
  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **LineM** > **Integration Event Table** button(iDesktopX)
  * **Toolbox** > **Traffic Analysis** > **Dynamic Segmentation** > **Integration Event Table**. You can click on the tool directly or drag it into the geoprocessing modeler window. (iDesktopX) 

### Parameter Description

  * The **Dissolve** window on the right displays the parameters, include the datasource that contains the events, event table, event type, route ID field and measure field.
  * The dissolve parameters setting. 
    * **Dissolve Type** : Set the dissolve type as overlap or concatenate. See [Event Table Dissolve](AboutEventAnalyst) for more information.
    * **Tolerance** : Only the events within the tolerance will be used. Two point events are viewed as overlap when the distance between them are less than the tolerance. Two line events are viewed as connected to each other when the distance between two vertexes on them are less than the tolerance.
    * **Dissolve Field** : The field to dissolve in the event table. For the events with the same field, the route ID values and dissolving field values determine whether to dissolve. The list box region lists all the field information of the event table.Check the one or more fields you want to dissolve.
  * Set the parameters for result data, this include the datasource that contain the result and the event table name.
  * Click **Advanced**. The **Advanced Settings** dialog box appears. Set the statistical method for the statistical fields except the dissolving fields. Click **OK**. Statistical methods:
    * **Max** : The maximum of the statistics field. Only numeric type and date type are supported.
    * **Min** : The minimum of the statistics field. Only numeric type and the date type are supported.
    * **Sum** : The sum of the statistics field. Only numeric type is supported.
    * **Average** : The mean of the statistics field. Only numeric type is supported.
    * **First Object** : The field value of the first object. Numeric, date, boolean and text fields are supported.
    * **Last Object** : The field value of the last object. Numeric, date, boolean and text fields are supported.
  * When the setting finished. Click **Ready** , it's ready to perform the current step. The finished flow will be gray and cannot be modify directly. If you need to modify the parameter settings, click the **Cancel Ready** button. (iDesktop) 

Note: Click the **Ready** dropdown button, the **Cancel All** button appears, it is used to cancel the ready status of all the steps.

### Related Topics

[Event Table Analysis Overview](AboutEventAnalyst)

