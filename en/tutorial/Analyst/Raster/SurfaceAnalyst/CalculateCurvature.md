---
id: CalculateCurvature
title: Calculate DEM Curvature
---
### Introduction

Calculates the surface curvature for a DEM raster, including average curvature, profile curvature, and plan curvature. Curvature is the second derivative of a surface, or the slope of the slope. The primary output is the curvature of the surface on a cell-by-cell basis, as fitted through that cell and its eight surrounding neighbors. The output is a raster dataset. Three types of curvature can be calculated: average curvature, profile curvature, and plan curvature. Average curvature is output all the time while the other two curvatures are optionally output. The profile curvature is in the direction of the maximum slope, and the plan curvature is perpendicular to the direction of the maximum slope.

Output Description:

  * The output curvature raster is of the same extent and resolution with the source dataset. 
  * A positive curvature indicates the surface is upwardly convex at that cell. A negative curvature indicates the surface is upwardly concave at that cell. A value of zero indicates the surface is flat.
  * Units of the curvature output raster are one over 100 z units, or 1/100(z units). The reasonably expected values of all three output rasters for a hilly area (moderate relief) can vary from -0.5 to 0.5; while for steep, rugged mountains (extreme relief), the values can vary between -4 and 4.

### Functional Entrances

  * Click **Spatial Analysis** > **Raster Analysis** > **Surface Analysis** > **DEM Curvature Calculate**.
  * **Toolbox** > **Raster Analysis** > **Surface Analysis** > **Terrain Calculate** > **DEM Curvature Calculate**. (iDesktopX)

### Main Parameters

  * Set the source data to calculate curvature for. 
    * **Datasource** : It lists all the datasources in the current workspace. You can select the datasource where the raster dataset is used to calculate the curvature.
    * **Dataset:** All the raster datasets in the datasource are listed. Select the dataset to calculate the curvature for.
    * **Altitude Zoom Parameter:** When calculating the curvature, altitude values should multiply a coefficient to make the altitude unit consistent with the unit of coordinate x, y. For example, if the unit is meter in x, y direction but inch in z direction, you need to specify the parameter value is 0.3408 meter because of 1 inch is 0.3048 meter.
  * Output curve raster dataset. 
    * **Datasource** : It list all the datasources in the current workspace. You can select the datasource which the result dataset exists in. It is same with the datasource in Source Dataset by default.
    * **Mean Curvature** : Specify the name for the average curvature dataset. By default, it is AverageCurvature.
    * **Profile Curvature** : Specify the name for the profile curvature dataset. By default, it is ProfileCurvature. If the name is not specified, it means no profile curvature will be generated.
    * **Plan Curvature** : Specify the name for the plan curvature dataset. By default, it is PlanCurvature. If the name is not specified, it means no plan curvature will be generated.

Note: If the name for profile and plan curvature dataset is not specified, it means no profile and plan curvature will be generated. Average curvature dataset name can not be empty.

  * Click OK to perform the calculation. 

### Note

  1. Note that if the elevation unit and the coordinate unit can not be converted into a same unit, then you need to use the other ways to do it. One of the most common situation is that the DEM unit is degree when it uses the geographic coordinate system, and the elevation unit is meter, then you can do projection transformation for the DEM data, and make its (x, y) coordinate into the planar coordinate.
  2. If the calculating cell is no-value, then its result is also no-value. Note: for the cells located at the edge of the raster dataset, its 3 * 3 neighbour region includes the cells outside the range of the dataset, then these cells will be calculated by the elevation of the calculating cell, so the result of the slope may be less than the practical value. The surrounding no-value cells can be dealt with the same way.
  3. Note: If the name for profile and plan curvature dataset is not specified, it means no profile and plan curvature will be generated. Average curvature dataset name can not be empty.

### Related Topics

 [About Surface Analysis](AoubtSurfaceAnalyst)
