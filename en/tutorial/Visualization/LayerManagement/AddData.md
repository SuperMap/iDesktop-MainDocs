---
id: AddData
title: Add Data
---
### Add Dataset

SuperMap iDesktop allows you to add datasets to the map window.

### Basic Steps

Three ways to add:

* **The first method:** Select the dataset in the workspace manager first and drag it to the map window directly. Or, right click and select **Add to New Map** or **Add to Current Map**. You can select multiple datasets at the same time.
* **The second method:**
1. After opening a map, click **Maps** > **Data** > **Add Data** to pop up the dialog.
2. Select your datasource and the dataset you want, and then click **OK**. Press Shift to select multiple datasets. 
* **The third method** : Right-click on your layer in the layer manager and select **Insert Data** to open the **Select** dialog box where you can select one or more datasets to add them to the current map above the current layer.

Note

When the image dataset to be added to the map is big, it will pop up a dialog
to ask whether to build the pyramid to improve the display speed. When adding
multiple dataset and the "Perform this operation for datasets" option is
checked, all big image datasets will be created pyramid.

The system will check the dataset index when adding it into a map, if it has
more than 2000 objects and no spatial index, a prompt will pop up to suggest
you to create spatial index to improve the display speed.

### Add Online Map

SuperMap supports adding various online map services. Hence, you can add online maps as base maps.

**Function Entrances**

* Click **Start** > **Datasources** > **Web** and select the feature you want.
* Click **Online** > **Services** > **Online Maps** and select the feature you want. 

You can click **Custom** to customize a service. For more details on how to open Web Datasource, please refer to [Open Datasource](../../DataProcessing/DataManagement/OpenDatasource).

