---
id: DotDensityMapGroupDia
title: Modifying Dot Density Maps
---
### Introduction

The Dot Density Map Manager, also called the group dialog box for the Label
group allows you to change the settings of a dot density map for more
favorable effects.

### Basic Steps

1. Select a dot density map in the Layer Manager and click the group dialog box button at the bottom right corner of the Dot Density group.
2. Thematic Map Layer: Display the nae of the current thematic map. 
3. Expression: The thematic variable used for creating the dot density map. It can be a field or a field expression. 
  * All fields of the vector dataset referenced by the vector layer are listed in the Expression drop-down list.
  * You can directly click a field or click Expression... to display the [SQL Expression](../../Query/SQLQueryDia) dialog box, in which you can compose a thematic variable with the operators, functions and fields provided.
  * If you change the thematic variable, the thematic map will be instantly reconfigured and refreshed.

**Note** : For Oracle, Plus, SQL Plus data, currently the supported field
expression is field values, e.g. SmID or SmID+1. The conditional expression is
not supported, e.g. SmID>100\. In this case, thematic mapping will be failed.

4. Dot Value: The number of incidences of the mapped phenomenon a dot represents. The more dots a regions contains, the more incidences of the mapped phenomenon in the region. 
  * You can directly type the value in the box or change the value by clicking the up and down arrows to the right.
5. Dots for Max Value: The number of dots the region has the max thematic value contains. 
  * You can directly type the value in the box or change the value by clicking the up and down arrows to the right. The greater the dot value, the less the number of dots for max value. The other parameter will be automatically calculated if you have set one.
6. Dot Style: The style of dots in the dot density map. 
  * Click the button to the right and set the style for dots in the dialog box for [Marker Symbol Style Settings](../../Visualization/LayerStyle/PointSymStyle).
7. When changing the settings in the Ranges Map Manager, all changes to the thematic map are instantly shown on the map. To prevent instant refresh, uncheck the Enable instant refresh box. If the thematic map is not instantly refreshed during the modification, click Apply at the bottom of the 3D Ranges Map Manager to apply all changes to the thematic map when the modification is done.

### Note

1. You can save a thematic map you have created as a template for reuse. Please refer to [Save to Thematic Map Template Library](../Methods/DTv2_LoadStyleThemeTempl).
2. After saving to the template library, the template will be displayed in the Templates drop-down list in the Graph on the Thematic Mapping tab and you can apply it to other thematic maps.

