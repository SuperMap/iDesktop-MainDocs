---
id: DTv2_LoadStyleThemeTempl
title: Use Thematic Map Template
---
### Load Thematic Map

This function allows you to apply an existing thematic mapping template to any vector or raster layer to improve the productivity.

A template is a .XML file with all the thematic mapping info.

**Basic Steps**

1. Right-click a certain vector or raster layer in the Layer Manager, and in the popup menu, click Thematic Map Template and select the Export... item.
2. In the dialog box, select any template file (*.xml), and click Open;
3. Then a thematic map will be created for the target layer. 

**Note**

* has provided a number of templates for use; users can also customize new templates and save them to the library.
* The template library is located in "Installation Directory\Templates\Theme" with different templates being saved in different sub-folders for thematic types. 
* Thematic maps are created using the field in the expression. When you apply a template, you need to make sure that the template and the target layer has the same field.

### Export Thematic Map Template

The function is used to export the thematic map template with the thematic
mapping styles and attribution, in order to apply it to other data.

**Basic Steps**

1. Right-click a certain vector or raster layer in the Layer Manager, and in the popup menu, click Thematic Map Template and select the Export... item.
2. In the opened dialog box, navigate to the directory to save the template file(*.xml) and name the file. Click Save to exit.

### Save to Thematic Map Template Library

You can save your thematic map to the template library for reuse.

Save to Thematic Map Template Library allows you to save a thematic map as a
template to the thematic map template library. A thematic map template is
essentially an XML file recording the characteristics of a map. Thematic map
templates provide a quick way to create new maps and a method for defining the
standard maps you need.

**Basic Steps**

1. Right click a vector/raster thematic map layer in the Layer Manager and click Save to Style Template Library in the context menu that appears.
2. The Save to Template Library dialog box shows up. Type in a name for the thematic map template and click Save.
3. You can click the Location drop-down arrow to select a folder from the list. By default, a thematic map template is saved to the thematic map template library of its own type. 
4. Also, you can click New Folder to create a new folder to place the template. Click Save to save the thematic map as a template into the thematic map library and close the dialog box. The newly thematic map template library is placed in the corresponding folder under installation directory\Templates\Theme.
5. When finished, you will find the template in the corresponding drop-down list on the Thematic Mapping tab available for use.

**Note**

* The application provides rich thematic map templates in the thematic map template library. You can save the your own thematic map to the template library for reuse.
* The thematic map template library is placed in the subfolders under installation directory\Templates\Theme according to the type of the template. You can access the unique values and ranges map templates through the Templates drop-down lists on the Thematic Mapping tabs for the map window.

### Manage Thematic Map Templates

The Templates Manager for thematic maps allows you to manage system and custom
map templates. Below we take unique values map as an example to illustrate how
to manage thematic map templates.

**Basic Steps**

1. Select a vector layer in the Layer Manager, and select **Create Thematic Map...** in the right-click menu. Click **Manage** to display the Unique Values Map Templates Manager.

Or, you can click **Thematic Map** and select the type of thematic map you
want to create, then clicking **Templates Manager**.

2. Manage the folders and template files in the Unique Values Map Templates Manager. 
  * The list box: List all system and custom unique values map templates and folders containing these templates.
  * New Folder: Create a new folder to save templates. By default, the new folder is placed under Installation directory\Templates\Theme\Unique\". You can drag a template to move it into or out of a folder.
  * Rename: Change the name of a selected folder or template.
  * Delete: Delete a template or folder.
  * Set Icon: Change the icon of a template. By default, the icon for a template is its thumbnail.
  * Close: Close the Graph Map Templates Manager.

**Note**

Except for managing thematic map templates through the templates manager, you
can also directly manage the templates under installation
directory\Templates\Theme\Unique.

