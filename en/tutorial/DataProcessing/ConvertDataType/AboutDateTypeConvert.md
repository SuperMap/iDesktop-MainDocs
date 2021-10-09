---
id: AboutDateTypeConvert
title: An Overview of Data Conversion
---
### [Conversion among points, lines, and regions](PointToLine)

* Conversion among point, line, and region datasets include **Line to Region** , **Region to Line** , **Line to Point** , and **Region to Point**.

### [Conversion between CAD and simple data](ConvertCAD)

* Conversion between CAD and Simple data includes **CAD to Simple...** , **Simple to CAD...** , and **CAD to Model...**

### [Conversion among network data, point, and lines](ConvertNetworkNode)

* **Network to Line** converts network edges to a new line dataset.
* **Network to Point** converts network nodes to a new point dataset.
* **Route to Line** converts all routes to lines resulting in a line dataset. 

### [Conversion between attribute data and spatial data](TextToField)

* **Field to Text** converts a field of a dataset to a text dataset to label your map.
* **Text to Field** converts text in a text dataset to a field of a dataset. You need to specify a field to store the output.
* **Text to Point** converts anchors of text objects to a point dataset.
* **Attribute to Point** creates a point dataset based on the X and Y coordinates specified with the fields in an attribute table.

### [Conversion between 2D data and 3D data](2DsTo3Ds)

* Converts a 2D dataset (point, line, region) to a 3D dataset (point, line, region). The specified Z values will be added to the resulting 3D dataset.
* Converts a 3D dataset (point, line, region) to a 2D dataset (point, line, region). In the conversion, the Z values will be removed automatically.
