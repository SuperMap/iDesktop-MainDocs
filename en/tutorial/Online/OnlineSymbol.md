---
id: OnlineSymbol
title: Online symbol library
---
### Introduction

The online service also supports accessing to the online symbol library in
SuperMap Online public cloud and iPortal private private cloud data, supports
viewing and downloading of online symbol library in cloud services, and
supports uploading and sharing local symbol library data.

### Online symbol library view / preview

  1. In the Workspace Manager, select the Super online or iPortal resource directory. Click "Online Symbol Library", online data preview window shows the online symbol library data content, as shown below:
  2. There are three tabs in the "Online Data" window, which are the dot symbol, the line symbol, and the fill symbol. Different groups of symbols are displayed in different tabs. Click on a specific group, enter the group detailed list, and pop-up "data basic information" property box in the right side of the window, which shows the basic information of the packet data.

### Online symbol library download and application

  1. Support the download of online symbols, in the symbol preview window, check the corresponding symbol box the symbols needed to download, and you can also select the program to provide the "Select All" and "Select Reverse" button to assist in the selection of symbols. After you have choosed symbol, click "download symbol library" button in the lower left corner of the window, and then pop-up "task management" dialog box.
  2. "Task management", the first line shows the total progress of the download, and the progress bar will change as the progress of the download changes. You can select the "All Pause" or "All Cancel" to downloading task at any time during the download process. The download tasks array in the list box, which can view the progress of the download of a single symbol file and control the download task via the "Pause" and "Delete" button by the progress bar.
  3. If you check the "Automatically close after data transfer" check box at the bottom of the "Task Management" dialog box, the Task Manager will automatically close when all the download tasks are performed. If unchecked, the list of tasks being downloaded in the Task Manager will not be recorded and the downloaded data will be displayed in sequence in the transport complete list.
  4. Symbol library which is downloaded completely, will be stored in the local SuperMap symbol library. When you open the symbol library selector, in the root group directory, the Online subdirectory, and the online symbol downloaded will be stored in the online symbol library subdirectory which facilitates users to use online symbol resources.
  5. When the user is in the drawing process, if the point symbol, line symbols, fill symbols which the system provides can not meet the drawing needs, you can access SuperMap Online / iPortal online resources according to the above method, download online resources in the online symbol, and then choose to apply the downloaded symbol resource in the symbol selector.

#### Local symbol library upload and share

Support the local symbol library to be uploaded to SuperMap Online or iPortal
to share, facilitate users to share custom map symbols, and enrich the user's
map resources.

  1. Open the  application, expand the "resource" node of the workspace manager; double-click the "point symbol library" sub-node under the resource node to pop up the "point symbol library manager". Select the point symbol to be uploadedd In the "point symbol library manager", and right click on the "Share to Online" button. The "Upload Symbol Library" dialog box appears.
  2. In "Upload Symbol Library" dialog box, you need to enter the following information for the uploaded symbol library data:
    * Name: The name of the symbol library.
    * Keywords: Enter multiple tag keywords to retrieve and distinguish different symbol types.
    * Introduction: describe the uploaded symbol library, and it is easy to browse and download.
    * Upload address: Click the drop-down button on the right to select Upload to SuperMap Online public cloud or iPortal private cloud.
    * **Upload directory:** Click ![](img/Upload.png) button, and the Select Directory dialog box appears. You can select and set the file directory in the dialog box," ![](img/Add.png) "You can create a new file directory;" ![](img/Delete.png) "delete the existing file;" ![](img/Rename.png) ", and rename an existing file directory. After confirming the file directory, click the "OK" button to return to the "Upload Symbol Library" dialog box.
    * Only in the self / any person / group: set the view permissions of the uploaded data, the default is visible for "only their own" ; check the "any person" check box, the data view permission is visible for anyone; check "group "Check box, data view permission can be set to be visible for fixed group.
  3. After completing the above settings, click the "Share" button, pop-up "Task Manager" dialog box, the dialog box displays the total upload progress of the symbol data, a single symbol file upload progress; and control the upload file by pause, cancel, delete and other operations.
  4. After sharing, you can browse and download in online symbol library in SuperMap Online and iPortal to make it easier for other users to use online symbol resources. 

### Related Contents:

 [Configuration service](ConfigureAddress)

 [online map](OnlineMap)

 [Online data](OnlineData)

 [Online color scheme](OnlineColorSchemes)

 [My data](OnlineMyData)

