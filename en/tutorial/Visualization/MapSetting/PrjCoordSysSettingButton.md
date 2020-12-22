---
id: PrjCoordSysSettingButton
title: Setting the Projection
---
### ![](../../img/read.gif)Introduction

The Set command allows you to set the projection for the map in the workspace.

The set command dropdown menu is only active if there are open maps in the workspace. Click this button, and there are two parts: Common Projectrion and the projection settings. You can click the drop-down arrow to select a projection from My Favorites list. For more information on My Favorites list for projections, please refer to the introduction to the Add to My Favorites button in the Function Area in the [Projection Settings](../../DataProcessing/Projection/PrjCoordSysSettingWin.htm) window. 
The drop-down list will be empty if there are no projections added to My Favorites.

### ![](../../img/read.gif)Basic Steps

In the current workspace, open your map first. In the Map Properties panel and Coordinate tab set your map's coordinate system.

* **Reset Coordinate System** : Click on the Reset Coordinate System icon button and select More... to open the Coordinate System Settings dialog box where you can specify another coordinate system for your map. For detail information, please refer to [Projection Settings](../../DataProcessing/Projection/PrjCoordSysSettingWin.htm).
* **Copy Coordinate System...** : Click on the icon button to open the Copy Coordinate System dialog box where you can copy the coordinate system of a datasource or a dataset.
    * **From Datasource** : Select a datasource from the drop-down list and its coordinate system will be the your map's coordinate system.
    * **From Dataset** : Select a dataset from the drop-down list and its coordinate system will be the your map's coordinate system.
* **Import Coordinate System** : Click on the Import Coordinate System icon button to open the Import Coordinate System window. Browse to your projection file and open it. The supported projection files include shape projection files (*.shp and *.prj), MapInfo files (*.mif), MapInfo TAB files (*.tab), Image-format files (*.tif, *.img, and *.sit), Projection information files (*.xml).

### ![](../../img/read.gif)Note

  * You can position the mouse to the search box through the shortcuts Ctrl+F or Ctrl+F3.
  * The projection settings are saved with the map.
  * Map clip extent only applies to current the projection of the map, and need to be reset if the map projection is changed. 