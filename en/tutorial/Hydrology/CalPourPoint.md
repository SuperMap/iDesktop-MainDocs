---
id: CalPourPoint
title: Calculate Pour Point
---
The pour point is based on both of flow direction and flow accumulation.

### Introduction

  * The pour point is at the boundary of the river, usually the lowest point at the boundary. The pour point must have higher cumulative water. According to this feature, the pour point can be extracted based on the flow direction and flow accumulation.
  * The places having raster values bigger than the threshold you specified will be considered as pour points. Therefore, the threshold is critical to determine the pour point number, location, and size of the sub-basin and range. For a reasonable threshold, you need to consider the basin within soil characteristics, slope characteristics, climate conditions, and other factors.
  * The threshold can be distinguished based on the flow direction and pour point. See [Basin Division](Watershed).

### Function Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis**. In the **Workflow Manager** window select **Calculate Pour Point**. (SuperMap iDesktop)
  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis** drop-down button and select **Calculate Pour Point**. (SuperMap iDesktopX)
  * **Toolbox** > **Raster Analysis** > **Hydrology Analysis** > **Calculate Pour Point**. (SuperMap iDesktopX)

### Parameter Description

  * **Flow Direction Data** : Select the flow direction datasource and dataset.
  * **Flow Accumulation Data** : Select the flow accumulation datasource and dataset.
  * **Threshold** : Set the threshold of the pour point. If the value of a cell is greater than this threshold, the cell is treated as a pour point.
  * **Result Data** : The result names of datasource and dataset.
  * Click **Ready** to finalize the preparation of parameters. And so, you can execute the operation anytime. If you click Cancel Ready, you can continue setting parameters. 

Note: Click the **Ready** dropdown button, the Cancel All button appears, it is used to cancel the ready status of all the steps.

  * Click **Execute**. The output window will tell you if it is successful or not.
