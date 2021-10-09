---
id: BatchRegistration
title: Fast Registration
---
### Instructions

Performs the fast registration to multiple datasets of the same area and the
same coordinate system by using the coordinates of control points in an
existed registration information file (*.drfu). You have no need to specify a
reference dataset. The feature is available for the point, line, region, text,
CAD, network, raster or image dataset.

The registration information file (*.drfu) contain the information of control
points, reference points algorithms, and so on. Hence, to register datasets
in bulk, a corresponding registration information file is required.

### Basic Steps

* **Start** > **Data Processing** > **Registration** > **Fast Registration**.

### Basic Steps

1. In the **Fast Registration** , click **Add Dataset** icon button to add required datasets.
2. **Rregistration File** : Import your registration information file. On the registration algorithm, please consult [Registration Algorithm](RegistrationMode).
3. **Resample Result** When "Save To" is checked, the registration result will be saved as a new dataset, and you are required to specify a datasource to save the registration results.
4. If the batch registration is implemented for the raster/image dataset, you are also required to set content such as whether to resample, the resample mode and the pixel size, etc. For setting methods please refer to [Raster/Image Parameters](resamplesize).
5. When finished, click **OK** button to implement the batch registration. The batch registration results will be output to the output window.



