---
id: TracingAnalyst
title: Tracing Analysis
---
Tracing Analysis is to build network elements according to a specified rule which can be regarded as a "transparent layer" over the network layer, and then trace the elements within the "transparent layer". Note: The data for tracing analysis must have flow direction.

Tracing analysis starts from a node according to a specified rule, and then search all the arcs connected by this node. For instance, if some area of water is polluted, tracing upstream analysis can be used to find where the contaminants may come from, and tracing downstream analysis can be used to trace the range polluted by the pollution source.

SuperMap Tracing Analysis includes Shortest Path Tracing Analysis, Single-feature Tracing Analysis and Multi-feature Tracing Analysis.

The next table introduces the functions of tracing analysis.
<table width="75%">
<thead>
<tr>
<td width="20%">Tracing Analysis</td>
<td width="23%">Types</td>
<td width="33%">Details</td>
<td width="25%">Element Number</td>
</tr>
</thead>
<tr>
    <td><a href="PathTracing">Shortest Path Tracing Analysis</a></td>
    <td>
    <ul>
    <li>Shortest Path Between Two Points</li>
    <li>Trace Upstream Shortest Path</li>
    <li>Trace Downstream Shortest Path</li>
    </ul>
    </td>
    <td>
    <p>Look up the shortest path between two nodes or arcs.</p>
    <p>Look up the shortest path from the specified node or edge to the source.</p>
    <p>Look up the shortest path from the specified node or edge to the sink.</p>
    </td>
    <td>
    <p>2</p>
    <p>1</p>
    <p>1</p>
    </td>
</tr>
<tr>
    <td><a href="SingleTracing">Single Element Tracing Analysis </a></td>
    <td>
    <ul>
    <li>Trace Upstream</li>
    <li>Trace Downstream</li>
    <li>Find Source</li>
    <li>Find Sink</li>
    </ul>
    </td>
    <td>
    <p>Look up all the upstream edges that flow into the specified node or edge.</p>
    <p>Look up all the downstream edges that flow from the specified node or edge.</p>
    <p>Find the farthest source that flows into the specified node or edge and edges, nodes and cost contained by the path with minimum cost to the source.</p>
    <p>Find the farthest sink that the specified node or edge flows into and edges, nodes and cost contained by the path with minimum cost to the sink.</p>
    </td>
    <td>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    <p>1</p>
    </td>
</tr>
<tr>
    <td><a href="MulTracing">Multi-element Tracing Analysis</a></td>
    <td>
    <ul>
    <li>Common Upstream</li>
    <li>Common Downstream</li>
    <li>Connected Edge</li>
    <li>Unconnected Edge</li>
    <li>Multi-connected Loops</li>
    </ul>
    </td>
    <td>
    <p>Along the opposite network direction, look up the common upstream edges that flow into the selected nodes or edges.</p>
    <p>Along the network direction, look up the common downstream edges that flow from the selected nodes or edges.</p>
    <p>Trace all the edges connected with the specified nodes or edges.</p>
    <p>Trace all the edges unconnected with the specified nodes or edges.</p>
    <p>Trace all the loops connected with the specified nodes or edges.</p>
    </td>
    <td>
    <p>two or more nodes; one or more edges</p>
    <p>two or more nodes; one or more edges</p>
    <p>two or more</p>
    <p>two or more</p>
    <p>two or more</p>
    </td>
</tr>
</table>

