---
id: DriveRegionSpecific
title: Extract Specified Isoregions
---
### Instructions

Specified Isoregions is to extract a certain number of isoregions with specific values as needed. The user can either directly input specific values or let the system automatically generate a series of altitudes according to a specified range and interval. Another option is to import specific values stored in a *.txt file.

  * The input dataset should be a DEM or a Grid dataset.

**Sample Application**

Open the datasource Terrain in the folder ExerciseData/RasterAnalysis. The datasource includes DEM data with the resolution of 5 meter.

### Functional Entrances

  * Click the **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **Extract Isolines** > **Extract Specified Isoregions**. 
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Extract Isolines** > **Extract Specified Isoregions**. (iDesktopX)

### Main Parameters

  * **Value** : In the **Extract Specified Isregions** dialog box click the **Batch Add** icon to open the **Batch Add** dialog box where you can set parameters like Start Value, End Value, and so on. Besides, you can import a txt file which records isoregion information or export isoregion information resulting in a txt file. You are also allowed to delete one or all records.
    * **Start Value:** The start value for generating isoregions.

    * **End Value:** The maximum value in the generated isoregions.

    * **Interval:** The interval of two adjacent isoregions starting from the base value. Its unit is the same as that of the source dataset by default.

    * **Count:** The total count of isoregions in the target dataset. Once the interval is set, the application will automatically calculate the value count.

  * For the settings of parameters like resampling coefficient, smoothing methods, and so on, please refer to [Description of Common Parameters](CommonPara).
  * Click the **OK** button to complete the isoregion extraction operation.

### Related Topics

[Introduction to Surface Analysis](AoubtSurfaceAnalyst)

[Extract All Isoregions](DriveRegionAll)
