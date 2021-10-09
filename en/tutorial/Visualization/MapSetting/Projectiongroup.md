---
id: Projectiongroup
title: Setting the Map Projection
---
SuperMap provides three types of coordinate systems: planar coordinate system, geographic coordinate system, and projected coordinate system.

**Function Entrances**

Open your map and click **Maps** tab > **Properties** group > **Map Properties** to open the **Map Properties** dockbar. The **Coordinate** panel displays projection information of your map.

You can reset a coordinate system with features in the toolbar.

* **Reset Coordinate System** : Click **Reset Coordinate System** > **More...** to open the **Coordinate System Settings** dialog box where you can specify another coordinate system for your map. For detail information, please refer to [Projection Settings](../../DataProcessing/Projection/PrjCoordSysSettingWin).
* **Copy Coordinate System...** : Click on the icon button to open the **Copy Coordinate System** dialog box where you can copy the coordinate system of a datasource or a dataset.
  * **From Datasource** : Select a datasource from the drop-down list and its coordinate system will be the your map's coordinate system.
  * **From Dataset** : Select a dataset from the drop-down list and its coordinate system will be the your map's coordinate system.
* **Import Coordinate System** : Click on the icon button to open the **Import Coordinate System** window. Browse to your projection file and open it. The supported projection files include shape projection files (*.shp and *.prj), MapInfo files (*.mif), MapInfo TAB files (*.tab), Image-format files (*.tif, *.img, and *.sit), Projection information files (*.xml).
* **Export Coordinate System** : click on the icon button to export the coordinate system of your map as a projection information file (*.xml).
* **Transformation Parameters** : click on the icon button to open the **Parameter Settings** dialog where you can set transformation parameters. For detail information, please refer to [Projection Transformation](../../DataProcessing/Projection/ConvertPrjCoordSysSingle).
* **Dynamic Projection** : check the checkbox to enable [**Dynamic Projection**](DynamicProjection).

**Related Topics**:

 [An Overview of Map Projection](../../DataProcessing/Projection/AboutMapProjection)

[Map Projection Types](../../DataProcessing/Projection/ProjectionType)

 [Commonly Used Map Projection](../../DataProcessing/Projection/ProjectionUsed)

 [How to Select Map Projection](ChooseAMapProjection)

 [Enable Dynamic Projection](DynamicProjection)

