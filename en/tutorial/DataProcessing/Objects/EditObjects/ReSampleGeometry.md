---
id: ReSampleGeometry
title: Resample
---
The Object Editing group on the Object Operations tab provides commands, such as Resample and Smooth, for processing the boundary lines of region objects or line objects.

Remove vertices from the line or the boundary of the region while trying to keep the original shape.

### Instructions

* The commands in the Processing group are only active if there are selected line or region objects in editable layers.
* For the theory of resampling, please refer to [Line Resampling](ReSampleIntro).
* While resampling parameterized curves, such as arcs, freehand lines, beizier curves, B-spline curves, etc., they will be converted into line segments first, and then the line segments will be resampled. Note: In the CAD dataset, the parameterized curve doesn't support the resample.

### Basic Steps

1. Set the layer in which you want to resample objects editable.
2. Select the line or region objects to resample.
3. Click the **Object Operations** tab > **Object Edit** Gallery > **Object Operations** group > **Resample** button.
4. Input the resample distance. The default is 0.4. This resample method is used in the line and region geometric objects.
5. Repeat steps 1 through 4 to implement another resample operation.
6. Click OK.

### Note

You can resample objects in multiple layers at the same time if the multilayer editing function has been enabled.

