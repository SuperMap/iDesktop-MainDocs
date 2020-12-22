---
id: TraceSet
title: Interactive Semi-automatic Vectorization Settings
---
Preparations before the semi-automatic vectorization: Firstly, there must be at least one registered raster base map; secondly, there must be at least one vector dataset used to draw line or region; thirdly the raster base map must overlay the vector dataset and they must be displayed in a window; finally, the vector dataset must be the editable state, then the vectorization function is active.

### ![](../../../img/read.gif)Introduction

You need to set the parameters of vectorization before the interactive semi-
automatic vectorization.

### ![](../../../img/read.gif)Basic Steps

  1. Click **Object** **Operations** > **Vectorize Raster** > **Set**. Then the **Raster to Vector** dialog box opens as shown in the figure below. 

You also can perform the following operations to finish the above operation:

If there is an image layer and an editable line/region/CAD layer, the line or region vectorization is applicable. Click **Vectorize Line** or **Vectorize Region** to open the **Raster to Vector** dialog box.



  2. Set the parameters in this dialog box: 
    * **Raster Layer** : Set the raster base map. You can select any raster layer that needs to be vectorized in the drop-down list. 
    * **Background** : Set the background color for the raster base map. The application will not trace the background color during vectorization. The default background color is white. 
    * **Color Tolerance** : The degree of similarity of the raster base map. It will continue tracing when any component value of RGB is less then the tolerance. Its value range is from 0 to 255, and the default value is 32.
    * **Filter Pixels** : Set the filter parameter, i.e., eliminates the vertical offset distance that the serration of the line object flutters with the grating method. The default value is 0.7. The greater the parameter, the more points it filters.
    * **Smooth Factor** : The vectorization needs the smooth operation. The greater the smooth factor you set, the smoother the boundary of the vector line/region is. 
    * **Auto Pan** : If the **Auto Pan** check box is checked, the application will move the map automatically, i.e., the window will automatically move when the mouse clicks the border of the window during vectorization. If the **Auto Pan** check box is unchecked, the window has to be moved manually. 
  3. Click **OK** to finish the settings and quit the dialog box. Click **Cancel** to cancel all the settings and quit the dialog box. 

The settings that you set on the **Raster to Vector** window will be saved automatically. When the window is opened again, you can modify the parameters based on the saved settings.