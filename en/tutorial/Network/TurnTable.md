---
id: TurnTable
title: Turn Table
---
Turn means to arrive to the adjacent arc from an arc through the nodes. The
turn cost is the cost needed in the turn, and it is stored in the turn table.
The turn table should list all the possible turns in each crossroad. Usually,
it has FromEdgeID, ToEdgeID, NodeID and TurnCost fields, which are related to
the arcs and node fields. Each record in the table represents the arc cost.
The turn cost is directional, and when no turn, the turn cost is -1.

Note: The unit of cost depends on the real cost content. If the cost field is
the time, the cost unit is the time unit, such as the hour, minute, second and
so on. If the cost field is the distance, the cost unit is the distance unit,
such as the meter, kilometer and feet etc.

[Create Turn Table](CreatTurnTable)

[Set Turn Table](SetTurnTable)
