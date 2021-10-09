---
id: ConvertNetworkNode
title: Convert Network Data to Points/Lines
---
### Convert Network Data to Points

* Converts nodes of a network dataset to points resulting in a point dataset.
* System fields except SmUserID will be assigned by the system, however, SmUserID, and all non-system fields will keep the original values.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **Network to Point**.
* **Toolbox** > **Conversion** > **Conversion from Network to Points/Lines** > **Network-> Points**. (iDesktopX) 

**Operating Instructions**

1. In the **Network->Point** dialog box, specify the dataset to be converted and select a datasource to save the resulting dataset.
2. Click **Convert** to perform the operation.<br/>
![](img/Netlinesource.png) 

### Convert Network Data to Lines

* Converts edges of a network dataset into a line dataset.
* System fields SmUserID, SmFNode, SmTNode, SmEdgeID, and other non-system fields will keep the original values.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **Network to Line**.
* **Toolbox** > **Conversion** > **Conversion from Network to Points/Lines** > **Network to Line**. (iDesktopX) 

**Operating Instructions**

1. In the Network->Line dialog box that shows up, specify the dataset to be converted, the target dataset name and set a datasource for saving the result dataset.
2. Click **Convert** to perform the operation.<br/>
![](img/NetToLine.png)

### Convert route data to lines

* Extracts all arcs in the network dataset resulting in a new line dataset.
* In the attribute table of the newly generated line dataset, the system field (except SmUserID) is assigned by the system, while the field SmUserID and other non system field attributes are assigned the corresponding field values of the source route dataset.

**Function Entrances**

* Click **Data** > **Data Processing** > **Conversion** > **Route to Line**.
* **Toolbox** > **Conversion** > **Conversion from Network to Points/Lines** > **Route to Line**. (iDesktopX) 

**Operating Instructions**

1. In the **Route->Line** dialog box, specify the dataset to be converted and select a datasource to save the resulting dataset.
2. Click **Convert** to perform the operation.

