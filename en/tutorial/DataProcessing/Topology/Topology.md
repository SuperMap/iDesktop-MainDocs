---
id: Topology
title: Topology
---
Topology studies the property of remaining unchanged when geometric objects
(point, line and region objects) were bended or stretched. You can ensure that
the digital geometric objects follow the specified topology relations by
topology processing and checking the simple datasets (point, line and region
datasets) and modifying the topology errors. It is the basic that construct
region dataset, network dataset or conduct the network analysis.

There are two methods of topology processing provided by SuperMap: topology
processing only check the line datasets (or the network datasets) and the
system will modify the topology errors in dataset; The other is topology
checking. The topology checking provides detail rules to check the point, line
and region datasets. System will save the topology errors to the new result
dataset. Users can modify compared to the result dataset.

Build the topology relation and conduct the topology processing and checking
according to the specified rules. You can ensure the quality of the data. The
topology relation can be used to find the lines that aren't connected
properly, the unclosed polygons and other topology errors in digital map.
Modify the incorrect spatial relation by constructing topology relations, and
you can ensure the integrity and accuracy of data.

SuperMap provides 7 methods in topology processing and 29 methods in topology
checking. In SuperMap, the topology errors include two types: the topology
errors of geometric objects in single dataset or in different datasets; The
topology errors in geometric objects contain self intersection, self overlap
and the correlations in three (include intersection, overlap, containing,
connecting and other spatial relations).

### Main Contents:

[### The Topology Processing Rules](TopoProcess)

Introduce the rules and usages used in topology processing, including removing
pseudo nodes, redundant vertices, duplicated lines, extending undershoots,
merging adjacent endpoints and intersecting arcs in detail.

[### The Topology Checking Rules](TopoRule)

Introduce the rules and usages used in topology processing in detail. The
topology checking provides 6 rules for point datasets, 13 rules for line
datasets and 10 rules for region datasets, which can meet all the topology
checking requirements.

[### The Topology Preprocessing](TopoPreprocess)

Introduce the methods and steps for topology preprocessing in details,
including inserting vertices, snapping to vertices, changing directions of
polygons, etc.

[### Line Topo Processing](TopoProcessLine)

Introduce how to check and fix for the line datasets or network datasets.

[### Topology Checking](TopoCheck)

Introduce how to use the topology rules provided by SuperMap to check the
geometric objects that don't fit the rules in or between datasets.

[### Construct Region with Topo](TopotoPolygon)

Introduce how to use line datasets or network datasets to construct region
datasets.

[### Construct Network with Topo](../../Network/TopotoNet)

Introduce how to use line datasets or network datasets to construct network
datasets.

  
