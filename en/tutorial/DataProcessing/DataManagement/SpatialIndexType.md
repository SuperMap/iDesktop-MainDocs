---
id: SpatialIndexType
title: Spatial Index Types  
---  
A spatial index is one kind of data structure which can speed up spatial searching.

Spatial indexes of GIS are on the basis of field indexes. The field index is a data structure which can locate key values in a fast way, which is very popular in database systems and computer systems. In addition, the field index is able to access certain specific keys in a fast way. Generally, the field indexes employ the B-tree index or B-tree index derivative data structure. Since traditional field indexes cannot manage with the fast locating the spatial data that is spatially related, spatial indexes are necessary to improve the access speed of spatially related data.

SuperMap provides spatial indexes which are only applicable to vector datasets including Quadtree index, R-tree index, tile index, dynamic index, and native indexes of some databases.

A quadtree is a data structure that encodes spatial data using optimized Hilbert codes and saves data and the index together. R-tree is an extension of a B-tree in multiple dimensions, is highly efficient in searching, and saves spatial data and index data separately. While a tile index applies to divided map data. Focus on database engines, SuperMap GIS introduces the dynamic index to exert searching abilities to databases.

The created native indexes belong to spatial indexes.

* In PostGIS, a desktop will create a GIST index which is a general and balancing tree data structure and speeds up the retrieval of spatial data at the cost of additional storage space and creating time.
* A 2dsphere index supports queries that calculate geometries on a sphere and supports all MongoDB geospatial queries. 

A dataset can have only one type of spatial index at the same time. The current spatial index of a dataset will be automatically maintained if the dataset is being edited. The indexing efficiency might be negatively affected after several times of editing. Therefore, you need to rebuild the spatial index.

Table 1: Indexes Supported By Engine Types Engine Type | R-tree index | Q-tree index | Dynamic index | Tile index | Native indexes  
---|---|---|---|---|---  
UDB | Y (Applicable to all types of datasets)  | N | N | N | N  
SQLPlus | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to CAD dataset) | Y (Not applicable to route dataset) | N  
PostgreSQL | Y (Not applicable to 2D/3D point and tabular dataset)  | N | N | N | N  
OraclePlus | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to CAD dataset) | Y (Not applicable to route dataset) | N  
OracleSpatial | Y (Applicable to all types of datasets)  | N | N | N | N  
KingBase | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to CAD dataset) | Y (Not applicable to route dataset) | N  
MySQL | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to CAD dataset) | Y (Not applicable to route dataset) | N  
DB2 | N | Y (Not applicable to 2D/3D point and tabular dataset)  | Y (Not applicable to CAD dataset) | N | N  
BeyonDB | Y (Not applicable to 2D/3D point and tabular dataset)  | N | N | N | N  
Altibase | Y (Not applicable to 2D/3D point and tabular dataset)  | N | N | N | N  
PostGIS | N | N | N | N | Y (GIST index)  
MongoDB | N | N | N | Y (Not applicable to route dataset) | Y (2dsphere index)  
