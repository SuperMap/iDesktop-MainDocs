---
id: LayerStyle
title: Using Layer Style Templates
---
This article introduces how to use layer style templates.

### Load Layer Style Templates

Loads a style template and applies to all objects in the selected layer.

A style template is an XML file essentially containing style information which can be applied to other objects or layers.

**Basic Steps**

1. Right-click on your vector layer in the **Layer Manager** and select **Layer Style Template** > **Load...**.
2. Navigate to the style template you want and click Open in the popup dialog box.
3. The application will display your vector layer using the style template.

**Notes**

* SuperMap provides rich style templates in the style template library. You can save your own style to the style template library for future use.
* The style saved to the style template library is placed in the Marker, Line or Fill folder under Installation directory\Templates\Style according to the object type. You can access the marker, line and fill style templates in the marker, line and fill style template libraries through the Templates drop-down lists in the Marker Style, Line Style and Fill Style groups on the Styles tabs for the layout window.

### Export Layer Style Template

Saves the style of the vector layer as a style template.

A style template is, essentially, an XML file that records style information.

**Basic Steps**

1. Right-click on your vector layer in the **Layer Manager** and click **Layer Style Template** > **Export...**.
2. Browse to the folder, enter the name of the template file (*.xml), and click **Save**.

### Save Style Templates to Library

Save the style of the selected layer as a style template to the style template library for reuse.

The styles for points, lines and regions are respectively saved in the marker,
line, and fill style template library. The templates in the marker, line and
fill style template libraries are listed in the Templates drop-down lists in
the Marker Style, Line Style and Fill Style groups on the Styles tab for the
layout window. The newly saved style template will be instantly updated into
the corresponding list.

**Basic Steps**

1. Right-click your vector layer and select **Layer Style Template** > **Export...**.
2. According to the type of the layer you selected, the Marker, Line or Fill Style Template dialog box may show up. Specify the name and location of the style template. You can click the Location drop-down arrow to select a folder from the list.
3. Also, you can click New Folder to create a new folder to place the style template. Click Save to save the style to the style template library and close the dialog box. The style saved to the style template library is placed in the Marker, Line or Fill folder under SuperMap Deskpro .NET\Templates\Style according to the type of the object. Below is the Maker Style Template dialog box for saving a marker style to the marker style template library.
4. The newly saved style template will be instantly updated into the corresponding list.

### Load Style Template from Template Library

The application provides some style templates for point layers, line layers, and region layers. You can apply this templates to the point, line, and region layers directly.

**Basic Steps**

1. Click the Templates drop-down arrow to display the marker style templates list and click a template to apply it to current layer.
2. Points in the layer will be instantly rendered with the selected marker style.
3. The marker style templates are placed under Installation package\Templates\Style\Marker.

