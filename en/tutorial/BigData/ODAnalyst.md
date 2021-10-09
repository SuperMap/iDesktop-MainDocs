---
id: ODAnalyst
title: OD line Make Analysis
---
The OD Line(Origin-Destination Line) is one kind of lines connecting two
points (which can be regarded as one starting point and one ending point) of
features and is commonly used for expressing the relationship between two
points like flight routes, traffics, fund flow and so on. The tool OD Line
Make Analysis means constructing OD lines based on the staring positions and
ending positions of input features.

The tool OD Line Make Analysis means constructing OD lines based on the
staring positions and ending positions of input features.

![](img/ODLine.png)

###  Sample applications

The tool can be used for following scenarios:

* Providing data for transit network to improve it by determining passengers distribution with this feature.
* Providing basic data for urban comprehensive traffic system planning and estimate.
* Providing basic data for analyzing and predicting goods happening (like the amount of deliverymen, goods) and distribution (like where goods will be delivered) by constructing OD lines for goods flow.

###  Function Entrances

* Click the Online tab > Analysis > OD line Make Analysis.

###  Basic steps

1. **iServer Address** : Log in iServer first, for detail operations, please refer to [Data Input](DataInputType).
2. **Analysis parameter settings** : 
  * **District Region Dataset** : Specify a dataset for constructing lines.
  * **OD Dataset** : Required. You need to specify an OD table dataset which must be a tabular dataset.
  * **District Region Name Field** : Required. It is used for distinguishing different administrative regions.
  * **Coordinate Fields** : Required. Specify two fields identifying X-coordinates and Y coordinates for all starting points and then specify two fields for ending points.
  * **Property Statistics Field** : Optional. You are allowed to specify a non-system field in integer, long, float.
  * **Property Statistics Model** : Optional. The supported statistical modes include: MAX, MIN, SUM, RECORDCOUNT, AVERAGE, VARIANCE, STDDEVIATION.
3. Click OK to perform the analysis, and the result will be opened automatically on the map window and its path will be output in the output window. Following picture is OD lines constructed by the positions getting into taxis and getting off them.
![](img/ODLineResult1.png)

###  Related topics

 [Environment configuration](BigDataAnalysisEnvironmentConfiguration)

 [Data Preparation](DataPreparation)
