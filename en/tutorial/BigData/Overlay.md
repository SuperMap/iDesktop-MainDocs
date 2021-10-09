---
id: Overlay
title: Overlay Analysis
---
Under the same spatial reference system, performs a series of collection
operations on two input datasets thereby generating a new dataset to extract
new spatial geometry information. For example, people want to know about land
distribution in an administrative district, overlaying Chinese land use
dataset with the administrative district planning dataset and then performing
the analysis.

At least three datasets are required for this analysis, and one dataset can be
a point, line or region dataset which is called the source dataset (the first
dataset in SuperMapGIS), another one is a region dataset which is called the
overlay-object dataset (the second dataset in SuperMapGIS), and the last one
is a result dataset including geometrical information and attributes of
overlaid data.

###  Function Entrances

* Click the Online tab > Analysis group > Overlay Analysis.

###  Basic steps

1. **iServer Address** : Log in iServer first, for detail operations, please refer to [Data Input](DataInputType).
2. **Source Data** : specify the dataset which will be used for the analysis. Click on the drop-down button and select a line dataset or a region dataset from the drop-down list. All of datasets in the drop-down list All of datasets in the drop-down list are filtered out for the analysis.
3. **Analysis parameter settings** :
  * **Overlay Data** : Required. Referring to the dataset (which is must be a region dataset) where the overlay objects are located. 
  * **Overlay Analysis Type** : Seven operations are provided. For different operations, required source dataset types and overlay-object dataset types are different too.
    * Clip, Intersect, Erase, Identity: the source dataset type could be point, line or region.
    * Update, XOR, Union: the source dataset type must be region.
  * **Source Data Reserve Field** : specify which fields from input data will be kept in the result data, setting several fields are allowed which can be separated by commas like zone, borough.
  * **Overlay Data Reserve Field** : specify which fields from overlay data will be kept in the result data, setting several fields are allowed which can be separated by commas like zone, borough. **Note** : this parameter is not worked when the Overlay Mode is Clip, Update, and Erase.
4. Click OK to perform the analysis, and the result will be opened automatically on the map window and its path will be output in the output window.

###  Related topics

 [Environment Configuration](BigDataAnalysisEnvironmentConfiguration)

 [Data Preparation](DataPreparation)
