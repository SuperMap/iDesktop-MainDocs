---
id: ThematicMapTab
title: Thematic Mapping
---
This topic mainly deals with thematic mapping in SuperMap. A thematic map is
an enhanced map according to a particular theme, which is widely used to
represent one or more natural or social phenomena on the map. A thematic map
uses colors, symbols, charts, and so on to represent a theme.

On the Maps tab, in the Thematic Mapping group, it organizes functions of New
and Edit.

With SuperMap, you can easily create many different types of thematic maps to
your needs. In SuperMap, nine types of thematic maps are supported: Unique
Values Map, Ranges Map, Graph Map, Graduated Symbols Map, Dot Density Map,
Custom Map, Label Map, Grid Unique Map and Grid Ranges Map.

[###Create Thematic Map](Methods/CreatThematicMap)

Users can create the thematic maps by New or Templates.

[### Modify Thematic Map](EditingMap/EditingMap)

supports to edit Unique Value Map, Ranges Map and Custom Map. Users can modify
the geometry objects in thematic maps. They needn't to edit the original data
and recreate the thematic maps.

[### Save As Dataset](EditingMap/ThematicToCAD)

This function is used to save the thematic map as CAD dataset or text dataset.
It aims at outputting the thematic maps into the datasets, and saving the
styles of the thematic maps.

[### Unique Value Map](UniqueValueMap/UniqueValuesMapgroup)

Unique Values maps divide the objects with the same property fields into a
class, and set a render style (such as the color and symbol) for each class.
Unique value maps contribute the data type, but they can't express the
quantify information. So the maps with categorical attributes usually use it,
such as the soil use type, land use map, administrative map, etc.

[### Ranges Map](RangesMap/RangesMapgroup)

Ranges maps display data of a specific attribute according to ranges you set.
These ranges are shaded with different colors, patterns, line styles, or
symbols. In a ranges map, the thematic values are divided into several ranges
according to a certain ranging method. A range is assigned to each feature
based on the corresponding thematic value. The same styles, such as color,
fill, and symbol, are applied to features of the same range. A ranges map must
be based on a thematic variable of a numerical type. Ranges maps are usually
used to represent volume or degree characteristics of continuously distributed
phenomena, such as distribution of precipitation and distribution of soil
erosion rate.

[### Label Map](Labelmap/LabelMapgroup)

Label maps are used to annotate point, line, or region objects on the map with
text or numbers. For example, you can create a label map for a river dataset
to annotate the rivers with their names or lengths on the map. Note that there
may be map elements such as legend description, map name, and scale appearing
on the map. These elements are not part of the annotation contents on a label
map.

[### Graph Map](Graphmap/GraphMapgroup)

The graph map draws charts for each element or record to reflect the
corresponding thematic value. Unlike other thematic maps, the Graph maps have
their own unique features. Graph maps are usually used to show demographic
information, for example, GDP, Crop product, and population of each state.
More than one thematic variable can be displayed in each graph. You can also
compare these thematic variables across the entire map.

[### Graduated Symbols Map](Graduatedsymbolmap/GraduatedSymbolMapgroup)

The graduated symbols map uses symbols with different shapes, colors and sizes
to represent the quantity and quality characteristics of each object which is
independent and displayed in an overall concept. Normally, the shape, color
and size of the symbols reflect the specific attributes of the object; the
shape and color represent the quality characteristic, while the size of the
symbol means the quantity feature. The graduated symbols map is mainly used to
the map with the quantity features, such as the classification of the food
production in different regions, GDP, population, etc. It means that the
thematic variable type which is used to make the graduated symbol map is
numeric.

[### Dot Density Map](Dotdensitymap/DotDensityMapgroup)

The dot density thematic map is another type of thematic map used to represent
quantities, similar to ranges thematic maps and graduated thematic maps. But
instead of using colors, patterns, or symbol sizes to symbolize, dot density
thematic maps use density of dots to represent the value of an attribute
associated with a region. Each dot represents a number of units, and the
product got by multiplying the number of dots in a region and the units each
dot represents is the value of the attribute of that region.

[### Custom Map](Customizemap/CustomizeMapGroup)

Custom Map: Represents points, lines and regions by specifying fields storing
symbol IDs.

[### Grid Unique Values Map](Griduniquevaluesmap/GridUniqueValuesMapgroup)

Grid Unique Values Map: Categorizes pixels with the same attribute value into
one class. Different classes are represented with different colors.

[### Grid Ranges Map](Gridrangesmap/GridRangesMapgroup)

Grid Ranges Map: Subdivides the values into a number of ranges. Pixels with
values within the same range are assigned the same color.

