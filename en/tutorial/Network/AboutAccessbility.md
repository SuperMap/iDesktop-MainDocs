---
id: AboutAccessbility
title: Connectivity Analysis Overview
---
### Introduction

The network may not be fully connected in the real world. You can use adjacency analysis or connectivity analysis to determine which points/edges are connected with some others. Connectivity analysis does not need to consider the network impedance, and the difference between the network elements is the state of connectivity (connected or disconnected).

**Connectivity Settings**

You need to set the following parameters before performing connectivity analysis:

* **Search Direction** : Relate to the arc direction. If you set a different search direction, the result will be different too . 
  * **Forward** : Along the direction of the arc.
  * **Backward** : Along the direction opposite to the arc direction.
  * **Both** : Along both directions.

* **Search Level** : The grade of the edge that will participate in the connectivity analysis (i.e. network depth). "1" is the first-class connected edges (nodes), which mean that the arcs (nodes) adjacent to the event point will participate in the analysis. "2" is the second-class connected edges (nodes), which mean that the edges (nodes) "1" and the edges (nodes) adjacent to the nodes "1" will participate in the connectivity analysis. The meaning of "3", "4", and so on can be inferred in the same way. Beyond the class value that you set, the lookup will stop. In the adjacency analysis, the search class is "1", and it only searches the adjacent elements of the event point. The connectivity analysis can search more than one class, and the default value is "2".

Connectivity analysis mainly has the following functions:

<table class="normaltable" width="90%">
<thead bgcolor="#6B82B2">
<tr>
<td rowspan="2" width="15%"><div align="center"><strong>Connectivity Analysis</strong></div></td>
<td rowspan="2" width="30%"><div align="center"><strong>Description</strong></div></td>
<td rowspan="2" width="10%"><div align="center"><strong>Setting Barrier Points</strong></div></td>
<td colspan="4" width="50%"><div align="center"><strong>Parameter Settings</strong></div></td>
</tr>
<tr >
<td><div align="center"><strong>Forward</strong></div></td>
<td><div align="center"><strong>Backward</strong></div></td>
<td><div align="center"><strong>Both</strong></div></td>
<td><div align="center"><strong>Search Class</strong></div></td>
</tr>
</thead>
<tr>
<td><a href="AdjoinAnalyst"><strong>Adjacent Analysis</strong></a></td>
<td><div>Search all the elements (edges or nodes) that are adjacent to the event point.</div></td>
<td><div>No Effect</div></td>
<td><div>Effective </div></td>
<td><div>Effective</div></td>
<td><div>Effective</div></td>
<td><div>The default value is &quot;1&quot; which cannot be changed.</div></td>
</tr>
<tr>
<td><a href="AccessibilityAnalyst"><strong>Connectivity Element Analysis</strong></a></td>
<td><div>Search all the nodes (edges) that can connect to the event point according to the search class.</div></td>
<td><div>No Effect</div></td>
<td><div>Effective</div></td>
<td><div>Effective</div></td>
<td><div>Effective</div></td>
<td><div>The default value is &quot;2&quot; which can be changed.</div></td>
</tr>
<tr>
<td><a href="CriticalAnalyst"><strong>Critical Element Analysis</strong></a></td>
<td><div>Find nodes and edges that must be passed between two specified nodes.</div></td>
<td><div>No Effect</div></td>
<td><div>Ineffective</div></td>
<td><div>Must</div></td>
<td><div>Must</div></td>
<td><div>Ineffective</div></td>
</tr>
<tr>
<td><a href="ConnectedAnalyst"><strong>Connectivity between Two Points</strong></a></td>
<td><div>Determine whether two nodes are connected or not.</div></td>
<td><div>Has Effect</div></td>
<td><div>Ineffective</div></td>
<td><div>Ineffective</div></td>
<td><div>Ineffective</div></td>
<td><div>Ineffective</div></td>
</tr>
</table>