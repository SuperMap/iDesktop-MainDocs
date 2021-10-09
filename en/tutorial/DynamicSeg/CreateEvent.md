---
id: CreateEvent
title: Creating Event Tables
---
An event table is an attribute table in which each record represents an event. An event table contains route ID field and measure field. 

SuperMap provides event table operation functions like creating event table, overlaying event table and dissolving event table.

### Instructions

Creating event table is the process of creating event table that contains point events or line events. You can input information to an event table manually or create an event table with existing point, line and route dataset.

  * You can create an attribute table, add route ID field, measure field and other attribute fields, and then input attribute information to create event table.
  * Automatically, create an event table by event data (point or line data) and route data. The measure values are from the route data.

For more information about point event table and line event table, see [Event Table Overview](AboutEventTable).

### Function Entrances

  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **Workflow Manager** > **Generate Event Table** button. (iDesktop)
  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **LineM** > **Generate Event Table** button(iDesktopX)
  * **Toolbox** > **Traffic Analysis** > **Dynamic Segmentation** > **Generate Event Table**. You can click on the tool directly or drag it into the geoprocessing modeler window. (iDesktopX) 

### Parameter Description

* **Source Data** : Set the parameters in the window on the right. Select the datasource and dataset that contains the event data.
* **Route Data** : In the Route Data region, select the datasource and dataset that contains the route data, and then select the route ID field. 
  * **Route ID field** : Set the name of the route ID field.
* In the Result Settings region, select the datasource to save the result event table, input the event table name, route ID field name, measure name and other parameters. 
  * **Route ID field** : The route ID field name in the result event table. The field is used to record the location of the events on certain route, the event table and the route data is connected by route ID field.
  * **Measure field** : Set the measure field name of the result event table. For line event table, you need to set Form Measure and To Measure.
  * **Search Radius** : The search extent is a buffer created for the route object with this value. No records will be created for point or line objects outside of the extent. A line is not in the search extent if the distance from a vertex on the line object to the route is larger than the search radius. A line object is considered in the search extent if the distances from all the vertexes on the line to the route are less then the search radius, even part of the line is outside of the search extent (this may lead by the arcs on the route). <br/>When creating the event table, the unit of the search radius will be converted to the unit of the reference route data coordinate system.
  * **Create Distance Field** : It is available for point event table. Distance field is used to save the straight-line distances from the points to the route.
  * **Record the route closest to the point** : It is available for point event table. Whether to search only the closest route.
  * **Reserve custom field of event dataset** : Whether to save all the attribute fields except the system fields.

* When the setting finished. Click **Ready** , it's ready to perform the current step. The finished flow will be gray and cannot be modify directly. If you need to modify the parameter settings, click the Cancel Ready button.(iDesktop) Note: Click the **Ready** dropdown button, the **Cancel All** button appears, it is used to cancel the ready status of all the steps.

* After the current step is ready, click **OK** to perform the operation.

### Note

  * The parameter settings for line event table and point event table are different.
  * Proper search radius is very important for creating event table. If the search radius is to larger, there may be no analysis meanings, and the event m-values got may be not ideal. 

### Related Topics

[Event Table Overview](AboutEventTable)
