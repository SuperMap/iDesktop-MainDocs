---
id: FillSink
title: Filling Sink
---
Sink is an area with lower height than its surroundings. Sink includes natural
sink and fake sink. The natural sink appears in the alluvial plain with large
area, such as glacier, karst, mining area, etc. However, the fake sink refers
to the sink generated from the error of data processing or inappropriate
interpolation.

Most sinks in DEM are fake sinks which affect the water direction. So, you
have to fill sinks before hydrology analysis. For example, if there is a fake
sink in DEM, water will pour into this sink instead of original direction, and
this doesn't meet with practical situation:  <br/>![](img/FalseSink.png)  
  
Therefore, Fill Sink is the first step for hydrology analysis.

### Introduction

There are two situations for sink filling:

  1. Fill all sinks in DEM. Because there are few real sinks in DEM, this method doesn't make big influence on post-operations.
  2. Add a dataset with real sinks to the DEM. In this case, all real sinks are assigned to NoValue in the result DEM. So, if your data has real sinks, the result will be better.

### Functional Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis**. In the **Workflow Manager** window select **Fill Sink**. (SuperMap iDesktop)
  * Click **Spatial Analysis** > **Raster Analysis** > **Hydrology Analysis** drop-down button and select **Fill Sink**. (SuperMap iDesktopX)
  * **Toolbox** > **Raster Analysis** > **Hydrology Analysis** > **Fill Sink**. (SuperMap iDesktopX)

### Parameter Description

  * **Source Data** : Set the datasource and the dataset of DEM for sink filling.
  * **The Sink Data to Be Excluded** : Check it to exclude the real sinks in your data. Otherwise, the application will fill all sinks no matter they are real or fake. By default, it is unchecked. <br/>You can specify a point dataset or a region dataset as well. Objects in the dataset will be considered as real sinks. For a point dataset, there is at least one point located in the sink. If your dataset is a region dataset, each polygon should cover a sink.
  * **Result Data** : The result names of datasource and dataset.
  * Click **Ready** to finalize the preparation of parameters. And so, you can execute the operation anytime.
  * Click **Execute**. The output window will tell you if it is successful or not.

### Note

  * Filling sinks is a repeated recognition and filling process. Somewhere in the low-lying land after filling, it is possible to generate new sinks. Hence, the application will fill sinks continuously until no longer producing new sinks. If there are massive sinks in DEM, it will spend a lot of much time to fill sinks.
