---
id: PrintMap
title: Print Map
---
### Introduction

The **Print Map** function can print your map directly.

### Function Entrance

Before using the feature, please make sure that there are no objects selected from the map.

* In the **Workspace Manager** right click your map and select **Print Map...**

### Parameter Description

* **Page Range** : Gets or sets the pages that need to be printed.
* **Copies** : Gets or sets the count of the copies to be printed. The default value of this property is 1.
* **Print Options:**
  * **Printer DPI** : The printing resolution of the printer.
  * **Printer Mode** : Gets or Sets whether to print in the vector or raster mode. Choose vector for fast speed. For better gradient or translucent effects, use the raster mode. 
  * **Logic DPI** : The logic DPI used when pre-rasterizing the layout. The default is 200. The setting is only available if you choose the raster print mode. It is mainly used for pre-rasterizing the layout when printing. The closer between the Logic DPI and the Printer DPI, the better the printing effects. Typically, the default value is used. If you have a high demand on precision, set a greater value. Please note that a greater logic DPI will consume more memory, therefore reducing the speed.
* **Page Setup** : click **Page Settings** to open the **Page Setup** window where you can set the paper size, orientation, and page margins. 

**Use Current Paper Settings** : Click this button to print with the page size and margin set by the layout. Or it will print according to the default parameters of the printer.

### Note

* Before printing, make sure your computer is connected to the printer or other printing devices. You can install the printer configure the printer port through your Windows Control Panel. The print options vary from the printers connected. To know how to install the printer, please refer to the documents of the operating system. 

