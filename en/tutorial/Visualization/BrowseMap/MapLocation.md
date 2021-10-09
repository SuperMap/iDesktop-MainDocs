---
id: MapLocation
title: Map Location
---
### Introduction

The **Go to XY** button allows you to locate to a specific position on a map and highlights the position. Besides, you can add coordinate annotation for the point.

### Function Entrances

  * **Maps** tab > **Browse** group > **Go to**.

  1. The **Map Location** dialog box displays coordinates of the center point of the current window. The coordinate unit is the same as the current coordinate system the map adopts. You can enter coordinates of the position you want directly to go to the position.
  2. If the current map uses a geographic coordinate system, you can check **Display as DMS** check box to change the coordinate input box to degrees: minutes: seconds.
  3. If the current map adopts a projection coordinate system, you can check **Use Longitude and Latitude** check box. And then you can enter the longitude and latitude of the target position.
  4. If you check Add Label, coordinate annotation will be added. 
  5. Location and annotation results are shown as follows:  ![](img/LocationResult.png)  

### Note

  * If the location point is not in the display bounds of the current map window, the located map window will be switched to view display with the point being the center point. If the location point is in the display bounds of the current map window, the display bounds of the current map window will not change.
  * If the red annotation point does not display after location, it is hided by the Map Location dialog box. You can move or close the dialog box to see the annotation point.

