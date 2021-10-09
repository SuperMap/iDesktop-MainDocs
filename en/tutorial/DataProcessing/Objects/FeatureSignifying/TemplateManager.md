---
id: TemplateManager
title: Manage Template
---
The template of the symbolic mapping defines the name, number, the dataset
of the feature, and the fixed attribute value of the feature elements, and
select the specified feature in the template, and you can draw the feature in
the map. Vectorizing according to the template, you can easily and clearly
draw the feature elements, and attribute input, avoid the multi-element
drawing process to switch back and forth between the layer manager and the 
property panel, and improve the vector work efficiency.

Symbolic mapping provides a pre-defined national census template, and the
user can customize the template according to need. Template management
provides a new template, import, export, modify and other functions, and the
specific description is as follows:

### New Template

You can add the name and encoding of the specified feature to the template
through New Template , associate the feature with the dataset in the current
workspace, and support the default fixed attribute for setting the dataset.
The specific steps are as follows:

### Basic Steps


1. Open the data source to which the template feature is associated in the current workspace and open the map window.
2. In the "Object Draw" group of "Object Operations" tab, click the "Symbolic Mapping" button, and then the "Symbolic Mapping" function pops up.
3. Click the "Manage Templates" drop-down button, select the "New
Template" option, you can pop up as shown in the following "Manage Templates"
dialog box, and you can set the template name, add features, set the
associated dataset and other parameters in the dialog box.
4. Template Name: On the toolbar, in the Template Name text box, enter
the template name.
5. Add nodes: manage template provides three ways to add nodes, namely:
new root node, new sub-node, and insert node.
* New Root Node: Click the button in the toolbar, then you can create a new node in the template tree nodes, such as the residential, elevation points, water system in the above figure.

* New Child Node: Click the button in the toolbar, then you can create a new node in the template tree nodes, such as the residential_polygon, residential_point.

* Insert Node: Click the button in the toolbar, then you can create a new node in the template tree nodes, such as the residential, elevation points, water system in the above figure.

6. Set the feature information: After adding the feature node, select the feature node to set the information such as feature name, feature code, associated dataset, default attribute value, and so on.

* Feature Settings: Set the name and encoding of the selected feature in the tree node, and the tree node name displays the feature code and feature name set here.

* Feature Storage: Sets the dataset associated with the feature. After drawing the feature object in the map, the object is stored directly into datasets which are set.

* Property Setting: You can set the default attribute value for the
feature. After you draw the feature in the map, the property value of the
object will automatically give the default value set here. Fields that do not
have a range are set to support entering the direct attribute value. If the
value field of the attribute field is enumerated, it can be set by the drop-
down option, as shown in the following figure. Here, all non-system fields in
the associated dataset are displayed by default. When the fields are large,
click the "Set Key Field" button in the toolbar to check
the fields to be displayed.

7. Delete: Click the "Delete" button in the toolbar to delete the
currently selected feature, If you have deleted the feature node, it will not
be restored. Click the prompt dialog box "Yes (Y)", and then you can select
Feature node deleted.

8. Move up and down: You can adjust the display order of the feature
nodes, select the nodes to be adjusted, and click the "Move Up" or "Move Down"
button in the toolbar to move the node position horizontally.

9. Save: After making the template, click the "Apply" button in the
bottom right corner of the dialog box to save the template to the current
workspace, and select the template in the "Symbolic Mapping" panel to draw the
object based on the template.

 ### Import Template

Symbolic mapping supports the import of templates, and it can import the
configured template file (*.xml) into the current workspace, saving the
template production time cost. The steps are as follows:

1. In the "Symbolic Mapping" panel, click the "Manage Template" drop-
down button and select "Import Template" from the drop-down options.

2. When the "Open" dialog box is displayed, select the template file
(*.xml) to be imported in the dialog box and click the "Open" button to import
the template into the current workspace.

3. Click the "Manage Template" button in the "Symbolic Mapping" panel to
select the imported template to switch the current template and draw based on
that template.

### Export Template

Symbolic mapping provides the function of export template to facilitate
sharing of templates and sharing of exported templates to users in need. In
the "Manage Template" dialog box, click the "Export" button, in the pop-up
"Save As" dialog box, set the template to save the path and name, and click
the Save button to export the template to *.xml file.

The exported XML file records the template name, feature name, feature code,
storage data set name, type and other information, the template file structure
as shown below:

### Manage Template

Symbolic mapping supports manage template function, and function which
manage template supports is consistent with the new template, the specific
description please refer to New Template.

###  Related Topics

[### Symbolic Mapping Application](SymbolicMappingExample)
[### Edit Property](SymbolicMappingPropertySettings)
