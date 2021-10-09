---
id: VectorDataset
title: Vector dataset
---
SuperMap provides multiple kinds of methods to working with vector data, the methods provided by the application is explained below.

### Main Contents

[### Dissolve Data](Datafuse)

Dissolve the objects in a line dataset or region dataset to one object.

[### Dataset Append Column](AddtoList)

Dataset append column is mainly used to append new fields to the attribute
table of the target dataset. The field value comes form the attribute table of
the source dataset.

In the operation, it is needed to set a pair of join fields, which come from
the source dataset and the target dataset respectively, the data can be append
only when the data value is the same.

[### Dataset Append Row](AddtoRow)

Add the data in one or several datasets to another dataset.

Supported dataset: point, line, region, text, CAD, tabular, network, route
dataset.

Requires the the field name and field type in the source dataset and the
target dataset attribute table are the same.

[### Dataset Smooth](DatasetSmooth)

Smooth the border of line dataset, region dataset and network dataset.

[### Update Dataset Attributes](Attributeupdate)

Update the attribute of the objects in the dataset with the spatial
relationship.

[### Dataset Resampling](VectorResample)

When the nodes of the object are too intensive, it is needed to resample the
coordinate data. You can work with the datasets in batch.

[### Eliminate Tiny Polygons](UnionPieces)

Merge the tiny polygons to larger polygons.

[### Field index](FieldIndex)

Create the index for one or more fields in the dataset, which contributes to
quickly find and sort data.


