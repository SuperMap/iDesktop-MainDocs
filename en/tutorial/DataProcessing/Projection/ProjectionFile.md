---
id: ProjectionFile
title: Loading Projection Files
---  
The application supports saving a custom projected coordinate system as a projection
files with the .xml file extension. The projection file (*.xml) stores all
parameters that define the coordinate system. The projection file can be
opened with a text editor or word processing software. In the projection file,
each line corresponds to a parameter and the value between a pair of tags is
the parameter value.

### Export projection file

To save the projection settings for reuse in the future, you can export the
projection into an xml projection file. Click the button to display the Save
As dialog box, select a folder where you want to place the projection file and
click Save to export a projection file in *.xml format.

Currently, the custom coordinate system can only be saved as a xml file of
Version SuperMap UGC 6.0 or SuperMap 6.0.

Open XML file with a text editor

Copy

    
    
    
    <?xml version="1.0" encoding="GB2312"?>
    <SuperMapProjection xmlns:sml="http://www.supermap.com/sml" sml:Version="20090106">
    	<sml:CoordinateReferenceSystem>
    		<sml:Name>UTM Zone 55, Northern Hemisphere (WGS 1984) </sml:Name>
    		<sml:Type>32655</sml:Type>
    		<sml:Units>METER</sml:Units>
    		<sml:DistUnits>METER</sml:DistUnits>
    		<sml:GeographicCoordinateSystem>
    			<sml:Name>GCS_WGS_1984</sml:Name>
    			<sml:Type>4326</sml:Type>
    			<sml:Units>DEGREE</sml:Units>
    			<sml:DistUnits>METER</sml:DistUnits>
    			<sml:HorizontalGeodeticDatum>
    				<sml:Name>D_WGS_1984</sml:Name>
    				<sml:Type>6326</sml:Type>
    				<sml:Spheroid>
    					<sml:Name>WGS_1984</sml:Name>
    					<sml:Type>7030</sml:Type>
    					<sml:SemiMajorAxis>6378137</sml:SemiMajorAxis>
    					<sml:InverseFlattening>298.257220427</sml:InverseFlattening>
    				</sml:Spheroid>
    			</sml:HorizontalGeodeticDatum>
    			<sml:PrimeMeridian>
    				<sml:Name>Greenwich</sml:Name>
    				<sml:Type>8901</sml:Type>
    				<sml:PrimeMeridian>0</sml:PrimeMeridian>
    			</sml:PrimeMeridian>
    		</sml:GeographicCoordinateSystem>
    		<sml:MapProjection>
    			<sml:Name>Transverse_Mercator</sml:Name>
    			<sml:Type>43006</sml:Type>
    		</sml:MapProjection>
    		<sml:Parameters>
    			<sml:FalseEasting>500000</sml:FalseEasting>
    			<sml:FalseNorthing>0</sml:FalseNorthing>
    			<sml:CentralMeridian>147</sml:CentralMeridian>
    			<sml:StandardParallel1>0</sml:StandardParallel1>
    			<sml:StandardParallel2>0</sml:StandardParallel2>
    			<sml:ScaleFactor>0.9996</sml:ScaleFactor>
    			<sml:CentralParallel>0</sml:CentralParallel>
    			<sml:Azimuth>0</sml:Azimuth>
    			<sml:FirstPointLongitude>0</sml:FirstPointLongitude>
    			<sml:SecondPointLongitude>0</sml:SecondPointLongitude>
    		</sml:Parameters>
    	</sml:CoordinateReferenceSystem>
    </SuperMapProjection>
    
    

### Load Projected Coordinate System

You are allowed to load an xml projection file or import projection from
external data.

How to load projected coordinate system

  * **Load Projection File**

Click the **Add** button to display the Open dialog box,
selecting a projection file and click Open. Open projection files in xml
format can be loaded.

  * **Import Projection**

The Import Projection command in the File menu allows you to Import a
projection from the local data. Supported files and formats include shape
projection information files (*.shp;prj), MapInfo exchange format (*.mif),
MapInfo TAB files (*.tab), image formats or projection files
(*.tif;*.img;*.sit).
