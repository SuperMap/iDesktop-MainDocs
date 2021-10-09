---
id: Proximity_Cases
title: Proximity Analysis Cases  
---  
1\. Which is the closest residence to the landslide?

Analysis: Calculate Distances

Dataset 1: The site of the landslide

Dataset 2: The locations of residences.

Result: Attribute table.

2\. Which are the two supermarkets within 2 km that are closest to the ational stadium?

Analysis: Closest Facilities or Distance Query

**(1) Closest Facilities**

Input Data: Street network, point dataset where the stadium is in, point dataset where the supermarkets are in.

**Steps and Parameter Settings:**

Build the street network with the from-to and to-from distance as the cost for the two directions;

In the point dataset that contains the stadium, you can either select directly or use SQL query to find the stadium as the event point;

In the point dataset that contains the supermarkets, the supermarkets are the facility points. Set the number of target facilities to 2.

Start the search from the event point to the facilities with a radius of 2 KM.

**(2) Distance Query**

Input Data: point dataset where the stadium is in, point dataset where the supermarkets are in.

**Steps and Parameter Settings:**

In the point dataset that contains the stadium, you can either select directly or use SQL query to find the stadium.

The point dataset that contains the supermarkets works as a target layer. Use
the Distance Query tool and set the query distance to be 2km.

Comments: for the two analysis methods above, the first one considers the
traffic while the second on is based on direct distance which may not the
shortest distance accessible.

  

3\. How to map the coverages of the telecommunication towers from strong to
weak?

Analysis: Multi-ring Buffer Analysis (based on the assumption that the signal
is decreased as the distance goes)

**Multi-ring Buffer Zone**

Input Data: Point dataset for telecom towers

**Steps:**

Create a multi-ring buffer with an interval, and map the rings with colors
from dark to light.

  

4\. How many food production factories within 1000 meters of a polluted river
stream?

Analysis: Distance Query with attribute filtering

Input Data: line dataset for streams, point dataset for food production
factories

**Steps and Parameter Settings:**

Set the polluted stream as a target to query, and the factory layer as a
target layer;

Attribute filtering: set the SQL expression and find out all the food
production factories from other factories.

Query distance: 1000 meters.

  

5\. There are two layers. One for football games avenues, the other for
hotels. What is the distance from each hotel to the nearest avenue?

Analysis: Calculate Distances

Dataset 1: Point dataset for hotels

Dataset 2: Point dataset for football games avenues

Result: Tabular dataset. Each record has a hotel and its nearest football
games avenue, as well as their distance.


