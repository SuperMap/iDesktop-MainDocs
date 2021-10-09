---
id: ViewAnalyst
title: Visibility Analysis
---
Visibility analysis has important application values in fields such as navigation, aviation, and military. For example, it can be used to set a radar station or a TV transmitter station, to select a road, to assist with maritime navigation, and so on. In the military field, it can help lay out bases, set observation posts, lay out communication wires, etc. The analysis can also produce invisible areas which would also be useful in some cases. For example, when a low-altitude reconnaissance aircraft is flying, it needs to avoid enemy's radars, meaning that it needs to fly in the blind zones of the radars. Visibility analysis has two basic aspects: one is visibility analysis on two or more points; the other is viewshed analysis which finds the visible areas for given observer points.

### [Viewshed Analysis](ViewShedAnalyst)

Viewshed is the visible extent on a terrain surface to one or more observer points. Viewshed analysis is a process of finding the areas visible to a given observer point within a given extent on a grid dataset. The observer point has a relative altitude. In other words, it is a process of finding the extent of visible areas to a given point. The analysis result is a grid dataset. Viewshed analysis is useful when selecting a site for a transmitting tower, determining the scope of radar scanning, and building forest fire lookout towers. Viewshed analysis is widely-applied in fields such as navigation, aviation, and military.

### Visibility Analysis

SuperMap surface analysis provides 2-Point visibility analysis and multi-point visibility analysis according to the number of observer points.

[2-Point](TwoObserverVisibility)

A 2-point visibility analysis determines whether two points on a surface are visible to each other.

[Multi-Point](MutilObserverVisibility)

A multi-point visibility analysis determines whether each two points among the multiple points on a surface are visible to each other.

###  Note

  * When you perform Visibility and Viewshed Analysis on the terrain data in a scene, the analysis result is correct only if the "Scale Factor" is set to 1. 

