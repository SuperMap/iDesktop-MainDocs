---
id: LoadTranfficData
title: Load Traffic Data
---
### Instructions

Because of measurement errors, or other kinds of faults, there are some errors in the obtained traffic data leading to analyze data unsuccessfully. Hence, before executing the analysis result, SuperMap provides the feature of checking whether your data is correct. You need to modify data not meeting requirements.

### Load traffic data

The premise of executing the traffic analysis is the successful loading of
traffic data and the settings of traffic environment parameters. There are two ways loading your traffic data.

  * Way 1: According to the settings of traffic analysis environment. Set data and parameter information participating in the traffic analysis in the Environment Settings window.

**Basic steps** : Open your line dataset. In the "Traffic Analysis" tab on the
"Network Analysis" group, check "Environment Settings" checkbox to open the
"Environment Settings" window where you can set relative parameter
information. About descriptions of parameters, please refer to [Settings of
traffic analysis environment](TrafficEnvirSet)

  * Way 2: According to the settings of station environment, route environment and traffic relationships to load data before using the feature of traffic analysis. But for other parameters such as Exit, Tolerance and Walking, only can be set in the "Environment Settings" window. 

**Basic steps** : In the "Traffic Analysis" tab on the "Transfer Analysis"
group, click any feature button to open the "Transfer Analysis Settings" where
you can set the required data.

  * **Transfer line settings** : Set up information on traffic lines. Such as the datasource to which lines belong. For more details, please refer to [Settings of traffic analysis environment](TrafficEnvirSet).
  * **Station settings** : Set up information on traffic stations. For more details, please refer to [Traffic Station Environment Settings](TrafficEnvirSet).
  * **Relation settings** : Set up the dataset of relations between stations and lines. To make the checking and loading of data correct, all parameters should be set correctly. For more details about traffic relation parameters, please refer to [Traffic relation settings](TrafficEnvirSet).

###  Related Topics

 [Obtain traffic data](TrafficDataPrepare)

 [Set traffic analysis
environment](TrafficEnvirSet)

 [Trasfer analysis](TransferAnalysis)

 [Query route analysis](FindLinesByStop)

 [Query station
analysis](FindStopsByLineStop)