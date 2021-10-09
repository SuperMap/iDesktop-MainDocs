---
id: Erase
title: Erase
---
Deletes the part in the target object that overlaps with the erase object.

![](img/Erase1.png)

### Introduction

* Available only when at least one line or region object is selected.
* The erase functionality only supports line, region and CAD layers.
* The target object must is different from the erasing object.
* The target object can be multiple line objects or region object, but the erasing object must be a region object. 
* Erase operation supports crossing layers. The layer that contains the target object must be editable. Under the [Multi-layers Editing](../CreateObjects/DTv2_Editable) status, the target layer and the erasing layer can be all editable.
* Erase operation relies on a certain data standardization. Such as, the It is recommended that check data topology before the erase operation.

### Basic Steps

1. Select one or more editable and visible objects (lines or polygons). 
2. Click the **Object Operations** tab > **Object Edit** Gallery > **Erase** button. 
3. Select an erasing object to erase the target objects.

