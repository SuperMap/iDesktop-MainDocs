---
id: AboutDirection
title: Flow Direction Overview
---
### Introduction

It is very important to know the flow directions in the facility network
analysis. Before the analysis, you need to ensure that the network data have
the flow direction field, and specify the field as the Flow Direction Field in
the **Environment Settings** window. The flow direction is determined by two
factors: network connectivity; locations of the sources and sinks. Source
belongs to the junction feature, which makes the substance flows away from it
through the network edges. Take for example the irrigation system, the pumping
stations can be abstracted as the sources, because the water within the
pipeline is always flowing away from the pumping stations. The sink is also
the junction feature, which make the substance flows into it through the
edges. Take for example the river system, the estuary can be abstracted as a
sink, because the water is always flowing into it. The stream flows out of the
source, and finally flows into the sink.

The flow direction can be created by the source or sink, so generally you just
need to specify the source and sink in the network. According to the locations
of the sources and sinks, the source-sink field information will be saved into
the attribute table of the point dataset. The source-sink field has 3 types: 0
denotes the common node, 1 denotes the source node, and 2 denotes the sink
node.

SuperMap provides the function to build the flow direction in the network
analysis module. The flow direction information will be saved into the flow
direction field after it is built. The default name is Direction. Please see
[Tracking Analysis Network Modeling ](TraceModeling) for how to build the
flow direction.

When creating the flow direction, you firstly need to specify the source and
sink in the tracing network, and then save the information of the source and
sink into a field. The flow direction is calculated with the source-sink
field. In addition, you also can create the grade field for saving the grade
information of different networks.

<table width="90%">
<thead>
<tr>
<td width="10%"><div align="center">Created Field</div></td>
<td width="15%"><div align="center">Name of Default Field</div></td>
<td width="20%"><div align="center">Store Mode</div></td>
<td width="10%"><div align="center">Field Number</div></td>
<td width="45%"><div align="center">Field Number Instruction</div></td>
</tr>
</thead>
<tr>
<td rowspan="3"><div align="center">Source-sink Information</div></td>
<td rowspan="3"><div align="center">Node Type</div></td>
<td rowspan="3">Point dataset.</td>
<td><div align="center">0</div></td>
<td>Common node.</td>
</tr>
<tr>
<td><div align="center">1</div></td>
<td>Source node.</td>
</tr>
<tr>
<td><div align="center">2</div></td>
<td>Sink node.</td>
</tr>
<tr>
<td rowspan="4"><div align="center">Flow Direction Information</div>
<td rowspan="4"><div align="center">Direction</div>
<td rowspan="4">Point and line dataset.</td>
<td><div align="center">0</div></td>
<td>The direction of the edge that is from the FromNode to the ToNode.</td>
</tr>
<tr>
<td><div align="center">1</div></td>
<td>The direction of the edge that is from the ToNode to the FromNode.</td>
</tr>
<tr >
<td><div align="center">2</div></td>
<td>The edge that is loop, i.e., invalid direction.</td>
</tr>
<tr >
<td><div align="center">3</div></td>
<td>The edge that is unconnected.</td>
</tr>
<tr>
<td rowspan="3"><div align="center">Grade Information</div></td>
<td rowspan="3"><div align="center">Grade</div></td>
<td rowspan="3">Point and line dataset.</td>
<td><div align="center">-1</div></td>
<td>The edge that doesn't have the river grade, i.e., it may be a loop or unconnected. </td>
</tr>
<tr>
<td><div align="center">&gt;=0</div></td>
<td>The greater the value, the higher the edge's level.</td>
</tr>
</table>
