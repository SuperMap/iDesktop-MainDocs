---
id: StreamOrder
title: River Classification
---
### Introduction

The river is divided into the main stream and branches. According to the amount of flow and river shape, the river can be classified.

Based on grid water system, rivers are numbered. The larger the number is, the higher level the river is. SuperMap provides two methods including Strahler and Shreve. For more information, see [River Classification Methods](StreamOrderType).

### Functional Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis**. In the **Workflow Manager** window select **Stream Order**. (SuperMap iDesktop)
  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis** drop-down button and select **Stream Order**. (SuperMap iDesktopX)
  * **Toolbox** > **Raster Analysis** > **Hydrology Analysis** > **Stream Order**. (SuperMap iDesktopX)

### Parameter Description

  * **Water System Data** : Select the datasource and dataset of the grid water system.
  * **Stream Order** : Strahler and Shreve.
  * **Flow Direction Data** : Select the datasource and dataset of the flow direction. See [Calculate Flow Direction](CalFlowDirection).
  * **Result Data** : The result names of datasource and dataset.
  * Click **Ready** to finalize the preparation of parameters. And so, you can execute the operation anytime. If you click Cancel Ready, you can continue setting parameters. **Note** : Click the Ready dropdown button, the Cancel All button appears, it is used to cancel the ready status of all the steps.
  * Click **Execute**. The output window will tell you if it is successful or not.
