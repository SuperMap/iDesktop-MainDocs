---
id: CentersManagement
title: Center Stop Management
---
The center stop is a discrete facility point at the node that has the
capability to receive and provide the resources. For example, the school has
educational resources and the students have to go to school to learn (the
school can be considered as a center stop); the retail warehousing point
stores the goods required by the retail outlets, and needs to deliver the
goods to the various outlets. The institutes that store resources and provide services for the people can be considered as center points. A center point is actually a node in the network layer. The node can be designated as a center stop by a field or an analysis process.

The **Center Stop Management** window manages the center stops for the
Location-Allocation analysis, including the parameter settings (Center Stop
Name, Max Weight and Center Stop Type), importing/exporting the center stops,
etc.

You need to set the center stops for the location-allocation analysis. In the
**Instance Management** window, right-click on the **Center Stop** directory
node, selects **Manage Center Stop** to open the **Center Stop Management**
dialog box.

### Basic Steps

1. **Import Node** : Click the **Import** button in the **Center Stop Management** window, and the **Import Node** dialog box opens. You can set the parameters of the imported center stops in this dialog box.
  * Sets the parameters for the source data to be imported. You can select the datasource and dataset that the center stops to be imported exist in. You also can select the Node Filter to import the point data that meet certain conditions. 
  * Sets the parameters for the center stops by selecting the fields: Center Stop Name (text), Max Weight (integer) and Center Stop Type (integer). The application will read all the attributes of the center stops form the specified fields.
2. **Export Node** : Exports the information of the center stops as a point dataset. 
3. **Modify Attributes of Center Stops** : Modifies the attributes for the center stops including Max Weight and Center Type. In the center stops list region, selects the cell to be modified, and then directly types the maximum weight or selects the center type. 
4. **Assign to All** : modifies the attributes of the center stops in a batch. The operation is as flowing: 
    1. Selects the rows that the stops to be modified exist in;
    2. Click **Assign to All** button to open the **Assign to All** dialog box. In this dialog box, select the attributes that you want to assign the values for. The attributes that can be assigned a unified value are Max Weight and Center Stop Type.

### Note

* The center types for the function of Location-allocation can be set to the fixed center point, the optional point and the non-center point. But the center types for the function of Resource Distribution only could be set to the fixed center point, and the non-center point.
