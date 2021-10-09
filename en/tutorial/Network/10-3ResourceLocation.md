---
id: 10-3ResourceLocation
title: Resource Allocation Overview
---
Resource allocation analysis emulates the supply and demand relationship model for resources in the network in the real world. Resources are allocated from the supply centers to demand points (including edges and nodes) according to the impedance of the network, in a way that the resources are supplied in the most economic and effective way. Demand points (including edges and nodes) with least impedance will get resources first. Then resources left will be allocated to demand points (including edges and nodes) with secondary least impedance. The resources will be allocated according to this rule until the resources are exhausted.

If users want to restrict the scope of the resource flow, a maximum impedance value needs to be specified to restrict the resource flow scope (service are). Demand points beyond this service area will be filtered out. For example, a time limit of 40 minutes can be specified for students going to school, then a school exceed this limit will be filtered out and other schools will be considered.

In the network model, the supply center for resource allocation represents as network node; resources represent as center point; demand point are associated with edges and nodes in the network and demand point is the property of network edge and node; the impedance field and other network analysis exist in the same format.

To realize the relation of supply and demand, resource transmission and flow exist in the network. Resources can be transmitted from supply center to demand point and also the demand point can ask resource from supply center, which are the two allocation methods for the resources.

### Application Example

  * **The Deliver mode**

The electric energy is generated from the power station, and transmitted to clients by the electric network. Here, the power station is the center in the network model, because it can provide electricity supply. The electricity clients distribute along electric network lines (edges in the network model), and they produce "demands". In this situation, the resource is transmitted from the supplier to the demand-side by the network so as to implement the resource allocation.

  * **The Fetch mode**

The relation between the school and the students also constitutes a kind of supply-and-demand allocation relation in the network. The school is the resource supplier, and it is responsible for providing school-age children with places to go to school. School-age children are demand-sides of the resource. They demand to enter the school. School-age children as demand-sides distribute along the street network, and they generate demands for the resource of the school as the supplier--student places.

### Allocation Type

To perform the allocation analysis, the user needs to decide the type of demand and specify the corresponding demand field appropriately.

  * Node Demand: Only the demand of the nodes will be considered in the allocation analysis. For example, Santa Claus wants to deliver a number of presents from his place to children's homes. And if he chooses to deliver the presents based on the Node Demand type, he only needs to consider the number of presents each home wants(represented as the demand of each node on the network) and delivers them until no present is left. 
  * Edge Demand: Only the demand of the arcs will be considered in the allocation analysis. For the Santa Claus example, if he chooses the Edge Demand type, he may only concern the volume of oil in his car(if Santa Claus has a car) and delivers presents to children's homes until the oil runs up. The demand of each edge, or arc, is the oil the car consumes to run this arc. 
  * Node and Edge Demand: Both the demand of the arcs and the nodes will be considered in the allocation analysis. Still for the Santa Claus example, this time, he may concern the number of presents and the oil of his car. 
