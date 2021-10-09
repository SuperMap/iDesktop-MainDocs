---
id: SpatialTemporal
title: Spatio-temporal data management  
---  
### Introduction

To realize the dynamic playing of the data with the time axis,  can create the spatio-temporal object information for the cache files and save it to the corresponding XML file. You can request to the server according to the time requirement. And then the server will automatically parse the XML file to return the corresponding cache file, so as to realize the dynamic data playing.

### Basic Steps

1. Click Data>Tools>Spatio-temporal Data button to pop up the dialog box Spatio-temporal Data Management.
2. You can add one or more cache files to create a new spatio-temporal object, you can also add the XML file of the existing spatio-temporal object and update it. Click the **Add** button, in the pop-up Open dialog box, select the cache files to create the spatio-temporal data; or click the **Open** button, select the XML file to be updated. 
  * NO: List shows the serial number of the cache files in the list, which is automatically generated, and unchangeable.
  * Spatio-temporal ID: the unique ID of the sub objects, you can double click on the item to edit it.
  * File Name: .sci cache file name.
  * File Position: .sci cache file path.
  * Time: Select a cache record, click the Time cell, you can click the drop-down button on the right side, select year, month, day, while you can modify hour, minute, second in the text box. Click the Time item, the files can be sorted in ascending or descending.
3. Users need to set the following parameters. 

**Info**

  * Caption: Spatio-temporal object name.
  * Start Time: the earliest time of the sub objects.
  * End Time: the latest time of the sub objects.
  * Number: count of the sub objects, which is number of the cache files.
  * Description: Detailed description about the spatio-temporal object file can be added here.

**Result Settings**

  * Target File: .xml file name.
  * Target Path: the saved path of the .xml file.
4. In addition, the cache dataset can be added, deleted, selected and ordered by the buttons on the toolbar.
5. Click Save to generate a spatio-temporal file(*.xml).
