---
id: GeneratingWeightMatrix
title: Generate Spatial Weights Matrix
---
Constructs a spatial weights matrix file (*.swmb) which is used for expressing
the spatial relationships between each elements.

### Instructions

  * A spatial weights matrix file is a spatial relation conceptualization model of relations among a group of elements. The file is created in binary format, and element relations are stored in sparse matrix. 
  * A spatial weights matrix is created according to the specific analysis mode.

### Function Entrances

  * Click **Spatial Analysis** > **Spatial Statistical Analysis** > **Generate Spatial Weights Matrix**.
  * **Toolbox** > **Spatial Statistical Analysis** > **Generate Spatial Weights Matrix**.

### Main Parameters

  * **Source Data** : Specify a dataset which the result spatial weights matrix file will be generated from. The supportive types of datasets include: point, line, region.
  * **Unique ID Field** : The uique ID field associates with the elements acquired by running the feature. The field values must be unique for every element. 
  * **Concept Model** : The selected model must reflect the intrinsic relationships among elements. The more vivid the model is, the more accurate the results are. 
    * Fixed Distance: this model applies to points, or polygons with big differences in size.
    * Polygon Adjacent (Common Edges/Intersect): this model applies to polygons with adjacent or intersecting borders.
    * Polygon Adjacent (Node/Common Edges/Intersect): This model applies to polygons with adjacent points, adjacent ot intersecting borders.
    * Inverse Distance: Every feature is considered adjacent with all other features. All features will effect the target features. The affection decreases with the distance. This model applies to the continuous data.
    * Inverse Distance Square: Similar to the model "Inverse Distance". The affection decreases much more with the distance. This model applies to the continuous data.
    * K Nearest Neighbors: K features nearest to the target feature are involved in the calculation of target feature (the weight is 1), and other features will be excluded (the weight is 0). The tool is useful for the cases where some special features are far away from other features, and the number of fixed adjacent features are more important.
    * Undifferentiated Region: This model is a combination of Inverse Distance and Fixed Distance. It takes every feature as the adjacent feature of other features. This model does not apply to the big dataset. The features within the specific fixed distance range have the same weight (1).
  * **Break Distance Tolerance** : "-1" denotes calculating and adopting the default distance, and ensures every feature has at least one feature adjacent. "0" means every feature is an adjacent feature and no distances are adopted. A positive value means the two features whose distance is less than this value are adjacent.
  * **Inverse Distance Power Exponent** : This exponent is used for controlling the importance of distance values. The affection of far features decrease with the exponent.
  * **Adjacent Number** : Specify a positive integer which is the number of adjacent features nearest to the target feature.
  * **Measure Distance Method** : Two kinds of distance methods are adopted: Euclidean distance and Manhattan distance. About the instructions of the two distances, please refer to [Basic Vocabulary of Spatial Statistical Analysis](BasicVocabulary).
  * **Spatial Weights Matrix Standardization** : Spatial weight matrix normalization is recommended when the distribution of features may deviate due to sampling design or applied polymerization schemes. After selecting Spatial Weights Matrix Standardization, each weight is divided by the sum of the rows (the sum of the weights of all adjacent features). The tool "Spatial Weights Matrix Standardization" is often used in conjunction with Fixed Distance adjacent features and is almost always used for adjacent features based on face-contiguous. This reduces the deviation caused by the feature having a different number of adjacent features. The spatial weight matrix normalization will convert the weights so that they are between 0 and 1, creating a relative (rather than absolute) weighting scheme. Whenever you want to work with polygon features that represent administrative boundaries, you may want to choose this option.
  * **Result Settings** : 
    * **File Path** : Specify a name and output path.
    * **Generate Attribute Table** : Checking the checkbox will covert the binary file (.swmb) into a table file, and you need to specify a name for the table and a datasource to save it. 

The result table will include three fields: unique source ID(UniqueID), unique adjacent feature ID (NeighborsID), weight (Weight).

###  Related topics

[Cluster and Outlier
Analysis](ClusterOutlierAnalyst)

[Optimized Hot Spot
Analysis](OptimizedHotSpotAnalyst)

[Analyzing Patterns](AnalyzingPatterns)


