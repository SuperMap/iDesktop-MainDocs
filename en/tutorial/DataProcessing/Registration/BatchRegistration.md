---
id: BatchRegistration
title: Fast Registration
---


### ![](../../img/read.gif)Instructions

Performs the fast registration to multiple datasets of the same area and the same coordinate system by using the coordinates of control points in an existed registration information file (*.drfu). You have no need to specify a reference dataset. The feature is available for the point, line, region, text, CAD, network, raster or image dataset.

The registration information file (*.drfu) contain the information of control points, reference points andalgorithms, and so on. Hence, to register datasets in bulk, a corresponding registration information file is required.

### ![](../../img/read.gif)Basic Steps

  1. Click Fast Registration button to open the following dialog box. Then click the "Add" icon ![](../../img-en/AddDataButton1.png) to add datasets to be registered. 
  2. **Rregistration File** : Import your registration information file. On the registration algorithm, please consult [Registration Algorithm](RegistrationMode.htm).
  3. **Result settings** When "Save To" is checked, the registration result will be saved as a new dataset, and you are required to specify a datasource to save the registration results.
  4. If the batch registration is implemented for the grid/image dataset, users also need to set contents such as whether to resample, the resample mode and the pixel size, etc. For setting methods please refer to [Grid/Image Parameters](rasterparagroup.htm).
  5. When finished, click the OK button to implement the batch registration. The batch registration results will be output to the output window.