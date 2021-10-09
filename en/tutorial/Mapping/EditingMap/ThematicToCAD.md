---
id: ThematicToCAD
title: Save Thematic Map as Dataset
---
### Introduction

supports to save thematic maps as datasets. It is to output the thematic
contents to the dataset and save the style of thematic map. For example, save
the ThemeLabel as CAD dataset. You can not only save the text contents, but
also the text style.

* The 2d vector thematic maps all support this function, including unique, range, label, graph, level symbol, dot density and user-defined thematic maps.
* 2D vector label thematic map support saved as a text dataset.
* Only the visible map layer in the map window under the current scale is saved, and if the current scale layer is not visible, it will fail to save.
* The thematic objects that filtered by the conditional expressions and don't display by avoiding overlay won't save in the dataset.

### Basic Steps

1. In the layer manager, select the thematic map to save. 
2. Click right mouse button and select the "Save as CAD Dataset" order in the pop up context menu. Or click the Save as CAD in the Tools group of Thematic Maps tab.
3. Set the datasource that the CAD dataset wants to be saved in the pop up "Save as CAD Dataset" dialog box and input the name of CAD dataset.
4. Click "OK" button and save the thematic map as a CAD dataset.
