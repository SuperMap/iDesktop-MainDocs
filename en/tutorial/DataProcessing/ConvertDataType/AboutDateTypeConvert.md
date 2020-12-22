---
id: AboutDateTypeConvert
title: Converting Data 
---  


### Points, Lines and Regions

  * Conversion among point, line, and region datasets include [Line to Region](LineToPgn), [Region to Line](PgnToLine), [Line to Point](LineToPoint), and [Region to Point](PgnToPoint).

### CAD and Simple

  * Conversion between CAD and Simple data includes [CAD to Simple](ConvertCAD) and [Simple to CAD](ConvertToCAD).

### Network and Point & Line

  * [Network to Line](ConvertNetworkEdge) converts network edges into a new line dataset.
  * [Network to Point](ConvertNetworkNode) converts network nodes into a new point dataset.

### Route to Line

  * [Route to Line](ConvertRoute) can convert all routes to lines in a line dataset. 

### Attribute and Text

  * [Attribute to Text](FieldToText) converts a field of a dataset into a text dataset, realizing the labeling of the map.
  * [Text to Attribute](TextToField) converts text in a text dataset into a field of a dataset. You need to specify the field to store the text.

### [2D and 3D](2DsTo3Ds)

  * Convert a 2D dataset (point, line, region) into a 3D dataset (point, line, region). The specified Z values will be added to the result 3D dataset.

### [3D to 2D](3DsTo2Ds)

  * Convert a 3D dataset (point, line, region) into a 2D dataset (point, line, region). In the conversion, the Z values will be automatically removed.

### Other Conversion

  * [Text to Point](TextToPoint) converts anchors of text objects into a point dataset.
  * [Attribute to Point](AttributeToPoint) creates a point dataset based on the X and Y coordinates specified with the fields in an attribute table.


