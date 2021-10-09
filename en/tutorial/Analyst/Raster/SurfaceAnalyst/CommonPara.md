---
id: CommonPara
title: Description of Common Parameters
---
SuperMap provides three methods to extract isolines and two to extract isoregions. They have some common parameters, described as follows.

### Setting common parameters

* **Source Data**

  - **Datasource:** Select the datasource that contains the dataset for isoline/isoregion extraction.
  - **Dataset:** Select the dataset for isoline/isoregion extraction.

Once the datasource for the isoline/isoregion extraction is selected, the system will automatically filter the datasets and only display DEM datasets and Grid datasets in the datasource. If the Isolines from Click method is selected, the system will automatically use a point dataset as the source dataset.

* **Target Data**

  - **Datasource:** Select the datasource where the extracted isolines/isoregions are saved.

  - **Dataset:** The name of the dataset for saving the isoline/isoregion analysis result is input here. If the dataset with the input name already exists, the user will be prompted that the name was illegal and a new input is needed.

* **Parameter Settings**

  - **Resampling Factor:** It dictates the resampling interval when extracting isolines/isoregions. The resampling interval is the result of multiplying the resampling factor by the resolution of the grid dataset. This parameter is used to control the count of control points when resampling for extracting isolines. The recommended value is 0~1. The default value is 0. The greater this parameter value is, the fewer control points of isolines there are.
  - **Smooth Method:** The generation of an isoline is a process of interpolating the original grid data and then connecting the points with the same values. The result would be angular polylines. Thus the lines need to be smoothed to realistically simulate true isolines.

To generate isoregions, the original grid data is first interpolated, and the points with the same values are then connected, and finally adjacent isolines are closed to form isoregions. The result would be angular polygons. Thus the polygons need to be smoothed to realistically simulate true isoregions.

SuperMap provides two methods to smooth isolines: B Spline and Polish. The user can also choose not to apply any smoothing processing, in which case the system will not smooth the isolines/isoregions extracted.

**Smoothing Factor:** In both B Spline and Polish methods, the extracted isolines are smoother when the smoothing factor is greater. Of course a greater smoothing factor would cost more computation time and occupy more memory. The range of the smoothing factor is [0, 5]. 0 or 1 indicates that no smoothing is applied. The recommended value is 3.
