---
id: IndoorNavigation
title: An Overview of Indoor Navigation
---
Since the world is developing quickly, more and more buildings take up a large area like shopping malls, airports, hospitals, and so on. It becomes a big challenge that visitors find their way quickly.

Indoor navigation can solve the problem. It makes visitors confirm their position precisely and find their way to their desired destination quickly by building spatial relationships between them and the building.

SuperMap iDesktop introduces the indoor navigation module which organizes the produce, loading, analysis of navigation data, thereby helping solve the
problems. You can not only build an indoor-outdoor integrated navigation mode to seamlessly connect an indoor map and an outdoor map but also set the
facility relationships to span different floors and even buildings.

###  Application Scenarios

The indoor navigation module in SuperMap iDesktop can produce basic data for
indoor navigation of iMobile. Using the built navigation model in your mobile
device, you can find the way to your desired destination in shop malls,
airports, bus stations, hospitals, and so on.

###  Highlighted Feature

  * **Support building network datasets**

Network datasets are essential and directly affect the indoor navigation
performance. The traditional network analysis needs to merge all road elements
to a network dataset and requires the connectivity of the whole network, so
that every network dataset has a big amount of data and is hard to maintain.
While the multi-network dataset analysis can divide one network dataset into
several datasets as your requirements. And then you can save all road elements
in several network datasets and connect them with an attribute relationship
table, thereby reducing the maintenance costs.

  * **Span floors even buildings**

iDesktop supports building facility relationships to connect the entrances and
exits to achieve the analysis of spaning floors and buildings.

  * **Indoor-outdoor integrated navigation**

In practice, indoor navigation and outdoor navigation are not connected always
because of kinds of reasons, which is inconvenient to people. The indoor-
outdoor integrated navigation can freely navigate people between outdoor area
and indoor space.

  * **2D &3D integrate navigation**

Based on an indoor navigation model, iDesktop can produce a 2D&3D integrate
navigation scene which combines the flexibility of 2D maps and reality of 3D
scenes.

###  Main Content

Indoor navigation mainly includes the following content:

  * [**Build indoor navigation model**](BuildIndoorNavigationModel): Based on road network data, facility data, and POI data, you can create an indoor navigation model to provide path network datasets, bounds region datasets, and a facility relationship attribute table for indoor navigation.
  * [**Build facility relationships**](BuildStairRelation): you can create facility relationships and manage all facilities based on network datasets and floor relationship attribute tables, thereby generating 2D&3D integrate navigation model data.
  * [**Indoor navigation analysis**](IndoorNavigationAnalysis): you can load your navigation model data to perform the indoor navigation analysis, and then intuitively observe the path from the specified starting point to your desired destination.
