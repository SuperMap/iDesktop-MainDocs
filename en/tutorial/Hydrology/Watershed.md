---
id: Watershed
title: Watershed Segmentation
---
Watershed Segmentation is to divide a basin into a number of sub-basins. By calculating, you can get a larger basin. But in actual, you may need smaller sub-basins divided from the larger basin.

### Introduction

First, determine the pour points for each sub-basin. Those pour points can be located in boundary or internals.

### Functional Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis**. In the **Workflow Manager** window select **Watershed Segmentation**. (SuperMap iDesktop)
  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis** drop-down button and select **Watershed Segmentation**. (SuperMap iDesktopX)
  * **Toolbox** > **Raster Analysis** > **Hydrology Analysis** > **Watershed Segmentation**. (SuperMap iDesktopX)

### Parameter Description

  * **Flow Direction Data** : Select the flow direction datasource and dataset.
  * **Pour Point Data** : Select the datasource and the dataset. The data is from the calculation, or from the practical measurement of the dataset. **Note** : Each extracted watershed corresponds with a pour point. The watershed that the flow accumulation doesn't match the specified threshold of the corresponding pour point won't appear in the resulting watershed segmentation. To make the watershed result cover the analysis range, please use the feature **Calculate Drainage Basin**.
  * **Filter** : Set the filter condition for the pour point data, and set the pour points for the basin division.
  * **Result Data** : The result names of datasource and dataset.
  * Click **Ready** to finalize the preparation of parameters. And so, you can execute the operation anytime. If you click Cancel Ready, you can continue setting parameters. Note: Click the Ready dropdown button, the Cancel All button appears, it is used to cancel the ready status of all the steps.
  * Click **Execute**. The output window will tell you if it is successful or not.

