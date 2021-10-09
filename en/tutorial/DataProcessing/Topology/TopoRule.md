---
id: TopoRule
title: Topology Rules
---
Validate Topology is to return objects in point, line, region dataset that violate the specified topology rule. Validate Topology is usually performed before data editing and topology analysis.

In SuperMap, there are 6 topology rules defined for point datasets, 14 for line datasets, and 10 for region datasets. Besides, there are 5 kinds of topology rules that can be used for different types of topology rule. 

The topology rules used for point, line and region dataset and the rules used for multiple kinds of datasets are introduced below.

 ### The rules used for point dataset

The following rules are appropriate for point datasets.

<table class="normaltable" width="95%">
<thead>
<tr class="normaltableTitle">
	<td width="15%">ID</td>
	<td width="55%">Description</td>
	<td width="30%">Illustration</td>
</tr>
</thead>
<tr class="normaltablecontent2">
	<td>Must Be Covered By Line</td>
    <td><p>Requires that points in a point dataset fall on the lines in a line dataset. The points can overlap with the endpoints of the lines. </p>
    	<p>The points that are not touched by any line in the line dataset will be returned in the result dataset as errors. </p>
        <p>Error dataset type: Point dataset. </p></td>
    <td><img src="img/PointCoveredByLine_1.png">&nbsp;&nbsp;<img src="img/PointCoveredByLine_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Be Covered By Boundary Of Region</td>
    <td><p>Requires that points must fall on the boundaries of region objects in a region dataset. </p>
    	<p>The points that are not on any boundary in the region dataset will be returned in the result dataset. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/PointCoveredByRegionBoundary_1.png">&nbsp;&nbsp;<img src="img/PointCoveredByRegionBoundary_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Be Properly Inside Polygons</td>
    <td><p>Requires that points must fall within regions in a region dataset. </p>
    	<p>The points that are not contained by any region in the region dataset will be returned in the result dataset. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/PointContainedByRegion_1.png">&nbsp;&nbsp;<img src="img/PointContainedByRegion_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Be Covered By Endpoint Of Line</td>
    <td><p>Requires that points in a point dataset must be covered by the endpoints of lines in a line dataset.</p>
    	<p>The points in the point dataset that are not covered by any endpoint will be returned in the result dataset. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/PointBeCoveredByLineEndpoint_1.png">&nbsp;&nbsp;<img src="img/PointBeCoveredByLineEndpoint_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>No Identical Points</td>
    <td><p>Requires that points in the same point dataset not overlap. </p>
        <p>The duplicate points will be returned in the result dataset as errors. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/PointNoIdentical_1.png">&nbsp;&nbsp;<img src="img/PointNoIdentical_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Point No Contained By Polygon </td>
    <td><p>Requires that points in the point dataset not contained by the interior of any region in the region dataset.</p>
    	<p>The points contained by the interior of any regions will be returned in the result dataset as errors. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/PointNoContainedByRegion_1.png">&nbsp;&nbsp;<img src="img/PointNoContainedByRegion_2.png"></td>
</tr>

</table>

  
### The rules used for line dataset

The following rules are appropriate for line datasets.

<table class="normaltable" width="95%">
<thead>
<tr class="normaltableTitle">
	<td width="15%">ID</td>
	<td width="55%">Description</td>
	<td width="30%">Illustration</td>
</tr>
</thead>
<tr class="normaltablecontent2">
	<td>Must Not Intersect With Each Other</td>
    <td><p>Requires lines in one line dataset must not intersect with lines in another line dataset.</p>
    	<p>The intersections will be returned in the result dataset as errors.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoIntersectionWith_1.png">&nbsp;&nbsp;<img src="img/LineNoIntersectionWith_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Not Intersect Within The Line Itself</td>
    <td><p>Requires that line objects in the same line dataset not cross or overlap each other. Lines can share endpoints. </p>
    	<p>The intersections will be returned in the result dataset as errors.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoIntersection_1.png">&nbsp;&nbsp;<img src="img/LineNoIntersection_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Not Self Overlap</td>
    <td><p>No self overlap in the same line dataset. Requires that line objects not overlap themselves.</p>
    	<p>The self overlapped segments will be returned in the result dataset.</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineNoOverLap_1.png">&nbsp;&nbsp;<img src="img/LineNoOverLap_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Not Have Dangles</td>
    <td><p>Requires that a line object must touch lines from the same dataset at both endpoints; otherwise it will be an error. </p>
    	<p>Endpoints that are not shared will be returned in the result dataset.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoDangles_1.png">&nbsp;&nbsp;<img src="img/LineNoDangles_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Not Have Pseudo nodes</td>
    <td><p>Requires that each shared endpoint must have at least three lines connected to it; otherwise it will be an error. </p>
    	<p>Shared endpoints that have only two lines connected to it will be returned as errors in the result dataset. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoPseudonodes_1.png">&nbsp;&nbsp;<img src="img/LineNoPseudonodes_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Not Overlap With</td>
    <td><p>Requires that a line from one dataset not overlap with line(s) in another dataset. </p>
    	<p>The self overlapped segments will be returned in the result dataset.</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineNoOverlapWith_1.png">&nbsp;&nbsp;<img src="img/LineNoOverlapWith_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Not Intersect Or Touch Interior</td>
    <td><p>Requires that a line in one dataset must only touch other lines of the same dataset at endpoints. </p>
    	<p>The intersections will be returned in the result dataset as errors.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoIntersectOrInteriorTouch_1.png">&nbsp;&nbsp;<img src="img/LineNoIntersectOrInteriorTouch_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Not Self Overlap</td>
    <td><p>No self overlap in the same line dataset. Requires that line objects not overlap themselves.</p>
    	<p>The self overlapped segments will be returned in the result dataset.</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineNoSelfOverlap_1.png">&nbsp;&nbsp;<img src="img/LineNoSelfOverlap_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Not Self Intersect</td>
    <td><p>Line can not intersect with themselves. Requires that line objects not cross or overlap themselves.</p>
    	<p>The self intersection points and the vertices of the self overlapped line segments will be returned as errors in the result dataset. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoSelfIntersect_1.png">&nbsp;&nbsp;<img src="img/LineNoSelfIntersect_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Be Covered By Lines Of</td>
    <td><p>Requires that lines from one dataset be covered by the lines in another dataset. </p>
    	<p>Lines or line segments in other dataset that are not covered by any line in the other dataset will be returned as errors in the result dataset. </p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineBeCoveredByLineClass_1.png">&nbsp;&nbsp;<img src="img/LineBeCoveredByLineClass_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Be Covered By Boundary Of</td>
    <td><p>Requires that lines in the line dataset must be covered by boundaries of regions in the region dataset.</p>
    	<p>Lines or line segments in the line dataset that are not covered by any boundary in the region dataset will be returned in the result dataset as errors</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineCoveredByRegionBoundary_1.png">&nbsp;&nbsp;<img src="img/LineCoveredByRegionBoundary_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Endpoint Must Be Covered By</td>
    <td><p>Requires that the endpoints of lines in a line dataset must be covered by points in a point dataset.</p>
    	<p>The endpoints that are not covered by any point in the point dataset will be returned in the result dataset as errors. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineEndpointCoveredByPoint_1.png">&nbsp;&nbsp;<img src="img/LineEndpointCoveredByPoint_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Line not intersected with or contained by regions</td>
    <td><p>Checks whether the line dataset intersects with the reference region dataset, or there are line objects contained by regions. Requires that the line dataset and the region dataset can't has intersections.</p>
    	<p>The intersection part of the line dataset and the region dataset will be returned in the result dataset as errors</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/LineNoIntersectionWithRegion_1.png">&nbsp;&nbsp;<img src="img/LineNoIntersectionWithRegion_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Line Not MiniBend </td>
    <td><p>Requires that the two angles constructed by four successive vertices larger than the given angle tolerance.</p>
    	<p>As long as there are two angles constructed by four successive vertices less than the given angle tolerance, the line would be identified as an extrusion at that place. The first vertex of the angle will be returned as errors. </p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/LineNoSharpAngle_1.png">&nbsp;&nbsp;<img src="img/LineNoSharpAngle_2.png"></td>
</tr>
</table>

### The rules are used for region datasets

The following rules are supported only by region dataset.

<table class="normaltable" width="95%">
<thead>
<tr class="normaltableTitle">
	<td width="15%">ID</td>
	<td width="55%">Description</td>
	<td width="30%">Illustration</td>
</tr>
</thead>
<tr class="normaltablecontent2">
	<td>Must Not Overlap</td>
    <td><p>Requires that the interior of regions in one region dataset not overlap.  The regions can share edges or vertices. This rule is used when an area can not belong to two or more regions. </p>
    	<p>The self overlapped segments will be returned in the result dataset.</p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionNoOverlap_1.png">&nbsp;&nbsp;<img src="img/RegionNoOverlap_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Not Have Gaps</td>
    <td><p>Requires that no gaps exist in a single region or between adjacent regions. That is, all regions must form a continuous surface. An error will always exist on the perimeter of the surface. You can just ignore this error. Use the rule on data that must completely cover an area. </p>
    	<p>The gaps will be returned in the result dataset. </p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionNoGaps_1.png">&nbsp;&nbsp;<img src="img/RegionNoGaps_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Not Overlap With</td>
    <td><p>Requires that the interior of regions in one dataset must not overlap with the interior of regions in another dataset. Regions of the two datasets can share edges or vertices or be completely disjointed. This rule is used when an area can not belong to two separate datasets. It is useful for combining two mutually exclusive systems of area classification, such as land cover type.</p>
    	<p>The self overlapped segments will be returned in the result dataset.</p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionNoOverlapWith_1.png">&nbsp;&nbsp;<img src="img/RegionNoOverlapWith_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Must Be Covered By Regions Of</td>
    <td><p>Requires that a region in one dataset must share all of its area with regions in another dataset. It is used when a region of one type, such as a province, should be completely covered by regions of another type, such as counties. </p>
    	<p>Lines or line segments in other dataset that are not covered by any line in the other dataset will be returned as errors in the result dataset.</p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionCoveredByRegionClass_1.png">&nbsp;&nbsp;<img src="img/RegionCoveredByRegionClass_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Must Be Contained By</td>
    <td><p>Requires that regions of one dataset must be contained within regions of another dataset. Regions may share edges or vertices. That is to say, any area defined in the contained dataset must be covered by an area in the covering dataset. </p>
    	<p>The regions in the first dataset that are not contained within any region of the other dataset will be returned in the result dataset. </p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionCoveredByRegion_1.png">&nbsp;&nbsp;<img src="img/RegionCoveredByRegion_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Boundary Must Be Covered By Lines Of</td>
    <td><p>Requires that boundaries of regions in a region dataset must be covered by lines in a line dataset.</p>
    	<p>The boudaries of the regions that are not covered by any line in the line dataset will be returned in the result dataset. </p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/RegionBoundaryCoveredByLine_1.png">&nbsp;&nbsp;<img src="img/RegionBoundaryCoveredByLine_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Area Boundary Must Be Covered By Boundary Of</td>
    <td><p>Requires that boundaries of regions in one region dataset be covered by boundaries of regions in another region dataset. </p>
    	<p>The boudaries of the regions that are not covered by any line in the line dataset will be returned in the result dataset.</p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/RegionBoundaryCoveredByRegionBoundary_1.png">&nbsp;&nbsp;<img src="img/RegionBoundaryCoveredByRegionBoundary_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Contains Point</td>
    <td><p>Requires that any region in a region dataset must contain at least one point from a point dataset. Points must be within the area, not on the boundary. </p>
    	<p>The regions that contain no point will be returned in the result dataset. </p>
        <p>Error dataset type: Region dataset.</p></td>
    <td><img src="img/RegionContainPoint_1.png">&nbsp;&nbsp;<img src="img/RegionContainPoint_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Region No Overlap On Boundary</td>
    <td><p>Requires that boundaries of regions in one region dataset not overlap any boundary of regions in another region dataset.</p>
    	<p>The portions of the boundaries in the first region dataset that are overlapped by any boundary in the other region dataset will be returned in the result dataset. </p>
        <p>Error dataset type: Line dataset.</p></td>
    <td><img src="img/RegionNoOverlapOnBoundary_1.png">&nbsp;&nbsp;<img src="img/RegionNoOverlapOnBoundary_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>Region Inside No Acute Angle</td>
    <td><p>Checks whether there is an acute angle less than the given angle in the region dataset. If the angle formed by three consecutive points in the region is less than the given angle which is less than 90 degree, it is judged to be a acute.</p>
    	<p>The acute angle vertex is the error point, and it will be generated into the result dataset as a topology error.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/RegionNoAcuteAngle_1.png">&nbsp;&nbsp;<img src="img/RegionNoAcuteAngle_2.png"></td>
</tr>
</table>
  
### The rules are used for several kinds of dataset

The following topology rules applies to one or more types of datasets, including point, line or region dataset or the combination of them.

<table class="normaltable" width="95%">
<thead>
<tr class="normaltableTitle">
	<td width="15%">ID</td>
	<td width="55%">Description</td>
	<td width="30%">Illustration</td>
</tr>
</thead>
<tr class="normaltablecontent2">
	<td>Line or region must be single object.</td>
    <td><p>Checks whether line or region dataset itself has complex object (A object that contains one or more subobjects, such as parallel lines).</p>
    	<p>The complex objects will be returned in the result dataset as errors.</p>
        <p>Error dataset type: Line dataset or region dataset.</p></td>
    <td><img src="img/NoMultipart_1.png">&nbsp;&nbsp;<img src="img/NoMultipart_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>The Vertex Distance has to be greater than the tolerance.</td>
    <td><p>Checks whether the the distance between the node of line, point, region dataset itself or in two types of datasets are less than or equal to the given tolerance.</p>
    	<p>The points whose distance are not larger than the tolerance will be returned in the result dataset as errors.</p>
        <p>Error dataset type: Point dataset.</p>
        <p>Note: This rule is get by extend the topology preprocessing operation. It is recommended not the check the &quot;Topology Preprocessing&quot; when check the topology rules, otherwise the errors find by this rule will be repaired automatically and you can get the expected result.</p></td>
    <td><img src="img/VertexDistanceGreaterThanTolerance_1.png">&nbsp;&nbsp;<img src="img/VertexDistanceGreaterThanTolerance_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>There must be point on the intersection of lines.</td>
    <td><p>Check line, region dataset itself or the two datasets, whether the intersection of lines has a node, and whether the node exists on both of the two lines, two line objects with the end points connect to each other is considered as the correct topological relationship. Note: If the two lines connect, it won't break the rule.</p>
    	<p>If there are no node at the intersection, the system will compute the node and return it as topology error in the result dataset.</p>
        <p>Error dataset type: Point dataset.</p>
        <p>Note: This rule is get by extend the topology preprocessing operation. It is recommended not the check the &quot;Topology Preprocessing&quot; when check the topology rules, otherwise the errors find by this rule will be repaired automatically and you can get the expected result.</p></td>
    <td><img src="img/LineExistIntersectVertex_1.png">&nbsp;&nbsp;<img src="img/LineExistIntersectVertex_2.png"></td>
</tr>
<tr class="normaltablecontent1">
	<td>The nodes must match with each other.</td>
    <td><p>Check line, region dataset itself or two datasets, line dataset and point dataset, point dataset and region dataset, whether there are line objects (or polygon border) within the tolerance of the current node, and there are corresponding nodes on the line match with it.</p>
    	<p>For the mismatching points, the system will calculate the location of the matching point, the matching point will be returned as topology errors to the result dataset.</p>
        <p>Error dataset type: Point dataset.</p>
        <p>Note: This rule is get by extend the topology preprocessing operation. It is recommended not the check the &quot;Topology Preprocessing&quot; when check the topology rules, otherwise the errors find by this rule will be repaired automatically and you can get the expected result.</p></td>
    <td><img src="img/VertexMatchWithEachOther_1.png">&nbsp;&nbsp;<img src="img/VertexMatchWithEachOther_2.png"></td>
</tr>
<tr class="normaltablecontent2">
	<td>Line or the border of region do not has redundant vertex.</td>
    <td><p>Checks whether the line object or region border itself in line dataset or region dataset has redundant nodes, that is there can't be collineation nodes between the two node, the collineation nodes are redundant nodes.</p>
    	<p>Redundant nodes will be returned as errors in the result dataset.</p>
        <p>Error dataset type: Point dataset.</p></td>
    <td><img src="img/NoRedundantVertex_1.png">&nbsp;&nbsp;<img src="img/NoRedundantVertex_2.png"></td>
</tr>
</table>

