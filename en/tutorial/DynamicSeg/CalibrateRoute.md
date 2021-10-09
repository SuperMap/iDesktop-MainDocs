---
id: CalibrateRoute
title: Calibrating Routes
---
### Instructions

Calibrating route function reads the measure values of the referencing point
dataset and adjusts the route measure values. For more contents about
calibrating route, see [Calibrating Route Overview](AboutCalibrate).

### Function Entrances

  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **Workflow Manager** > **Calibrate Route** button. (iDesktop)
  * **Traffic Analysis** > **Dynamic Segmentation** > **Dynamic Segmentation** > **LineM** > **Calibrate Route** button. (iDesktopX)
  * **Toolbox** > **Traffic Analysis** > **Dynamic Segmentation** > **Calibrate Route**. You can click on the tool directly or drag it into the geoprocessing modeler window. (iDesktopX) 

### Parameter Description

* Select the route data to calibrate in the parameter setting window. 
* Select the datasource and dataset that contains the reference point data, and select the route ID field and measure field.
* Set other parameters. 
  * **Calibration Method** : Calibrate by distance or calibrate by measure. See [Calibrating Route Overview](AboutCalibrate) for more information.
  * **Error Info Field, Ignore intervals between subobject** : these two parameters are the same as the two parameters in the feature **Generate Route**. For specific description, please refer to [Generate Route](CreateRoute). 
  * **Tolerance:** : Set the calibrating tolerance and its unit. <br/>For calibrating route, a given distance is called tolerance. If the distance between a reference point and the route is less than the tolerance, the point is within the tolerance. If the distance between a reference point and the route is larger than the tolerance, the point is not within the tolerance. <br/>The default tolerance value is related to the coordinate system of the dataset. For details, please see [Tolerance Introduction](../DataProcessing/Tolerance).
  * **Reserve the route object that no reference points passed by** : Set whether to keep the route object without reference points in the result route dataset. <br/>The route objects cannot be calibrated in the following two conditions:
      * There is no route ID that is identical with the route object. In this case, the route object cannot be calibrated.
      * The reference point that is identical with the route ID may be calibrated. If no reference point passes this route, the route will not be calibrated. <br/>You can determine whether to keep the uncalibrated routes.
* Select the datasource to save the route data, and set the name of the route dataset.
* When the setting finished. Click **Ready** , it's ready to perform the current step. The finished flow will be gray and cannot be modify directly. If you need to modify the parameter settings, click the **Cancel Ready** button. (iDesktop) 
* After the current step is ready, click **OK** to perform the operation.

### Related Topics

[Calibrating Route Overview](AboutCalibrate)
