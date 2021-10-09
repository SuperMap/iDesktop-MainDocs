---
id: UniqueValuesMapDefault
title: Creating Default Unique Values Map
---
### Introduction

The new unique values thematic map provides two ways, one based on the
template map to create the field, one is to create a blank field to create
thematic maps. provides the default template, land use template, boundary line
template, administrative division types template, based on the thematic map
template production of unique values thematic map, not only easy to operate,
and easy to meet batch mapping needs, in order to achieve the theme template
reuse. Blank map is not based on empty field to create a thematic map, the
user can specify the field expression.

When using templates, it needs to make sure that field expressions of thematic
map exist. If the current layer does not has the thematic fields, a prompt
dialog box pops up. After reassigning the fields, users can use templates to
create the thematic map.

### Basic Steps

1. Select a vector layer in the Layer Manager.
2. Right-click and select Create Thematic Map ... in the pop-up menu, or select unique values map template in the Unique Values group of the Thematic Mapping tab, you can create unique values thematic map.
3. A unique values map in template style is created for the vector layer and the thematic map is added to the Layer Manager as a thematic map layer.
4. The system built-in and user defined templates can manage the templates uniformly, please refer to [Templates Manager](../Methods/DTv2_LoadStyleThemeTempl) for more information.

### Blank thematic map

In the Unique Values group of the Thematic Mapping tab, click the "single
value thematic map" drop-down button, select the Blank option to create unique
values thematic map of the blank field based on the selected layer. The
expression field of the unique values map is empty. After the user sets the
expression field, the unique values map can be generated according to the
field value. The blank thematic map applies to a large number of data, Blank
thematic maps apply to large numbers of data, avoiding problems that need to
be manually modified when the initialization field does not meet user
requirements.

### Note

* The Thematic Map Manager will show up after creating a unique values map. You can change the default settings in the Unique Values Map Manager to get more favorable effects.
* After closing the Thematic Map window, you can double click this layer or right click this layer, and select Modify Thematic Map. In the open Thematic Map Manage window, modify and set the parameters.
* If there are overlap among objects in the dataset, thematic mapping will fail. If there are complex regions (regions containing child objects), thematic mapping will fail. 
* While creating 4-color thematic maps, 4-color filling will be employed. If 4-color fill calculation has errors, 5-color fill will be employed then.

### Related Topics

[Modifying Unique Values Maps](UniqueValuesMapGroupDia)

