---
id: ThiessenPolygon
title: Thiessen polygon  
---  
### Introduction

Thiessen polygons can be used for qualitative analysis, statistical analysis,
proximity analysis, etc. For example, the area within a Thiessen polygon can
be characterized with the properties of the corresponding discrete data point;
the attribute values within a Thiessen polygon can be calculated based on the
value at the discrete point in that polygon; with Thiessen polygons, it can be
directly determined for a specific discrete point how many (n if the
corresponding Thiessen polgyon has n sides) and which other discrete points
are proximate to it; when a data point falls within a certain Thiessen
polygon, the closest discrete point can be immediately identified (the one
within the same polygon) without any distance calculation.

### Function Entrances

  * Click **Spatial Analysis** > **Vector Analysis** > **Proximity Analysis** > **Thiessen Polygon**.
  * **Toolbox** > **Vector Analysis** > **Proximity Analysis** > **Thiessen Polygon**. (iDesktopX)

### Parameter Description

  * **Source Data** : Set the point data that is used to create Thiessen polygons.
  * **Result Data** : Set the extent of the result data. If you don't check the Custom Region option, then the extent of the result Thiessen polygons will be larger than the point dataset extent; if you check it, you can select or draw a region to define the extent. 
    * **Select Region:** If there is any opened region layer in the current map window, you can check the Custom Region option and select the Selected Region item from the dropdown list and then select a region feature from the layer to define the extent.
    * **Draw Region:** Click the Draw Region Item from the dropdown list and draw a region in the map window to define the extent.

**Note** : iDesktopX doesn't support customizing regions.

  * Set the name of the result dataset and the datasource to save the dataset.
  * Set whether to display the result polygons on the map or on the scene. 
    * **Display on Map** : when you check this option, if there is any opened map window, the polygons will be displayed in the current map window; if there is no opened map window, then it will be displayed in a new map window. 
    * **Display on Scene** : when you check this option, if there is any opened scene, the polygons will be displayed in the current scene; if there is no opened scene, then it will be displayed in a new scene.
  * Click OK if all the parameters are set and create Thiessen polygons.

###  Note

  * The coordinate system of the result dataset is the same with that of the source point dataset. When you check the Display On Scene option, the result Thiessen polygons will be displayed on the plane scene if its coordinate system is in a planar one; otherwise it will be displayed in the spherical scene.
  * if you don't define the extent for the Thiessen polygons, its extent will be the default extent, which is 10% larger than the point dataset. E.g. if the extent of the point dataset is 150*100, then the Thiessen polygon extent will be 165*115.

###  Related Topics

 [Theory on Constructing Thiessen
Polygons](ThiessenPolygon_Theory)

 [Applications of Constructing Thiessen
Polygons](ThiessenAnalyst_Example)

* * *

[](http://www.supermap.com/en)  
  
---

