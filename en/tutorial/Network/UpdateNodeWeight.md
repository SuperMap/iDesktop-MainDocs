---
id: UpdateNodeWeight
title: Updating Node Weights
---
### Introduction

In the join table of the memory, update the weight for turning turning at the selected node temporarily.

Notes:

  * To use the feature, you should set the turn table first. Please refer to [Turn Table](TurnTable) for more information about how to use the turn table.
  * If you set a node as the obstacle, the weight is -1.
  * When there are multiple arcs adjacent to the node, it will create several turns. You can orient according to the start and end IDs of the arc, which set the weights for every turn direction.

### Basic Steps

  1. Open your network dataset in the current map window.
  2. In the **Environment** dialog box, set the weight field, node/arc identification field and so on. Please refer to [Environment Settings](NetAnalystEnvironmentWIN) for the information about the introduction to the Environment Settings window.
  3. In the **Environment** toolbar, click **Weight Settings** > **Update Node Weight** to open the **Update Node Weight** dialog box. 
  4. Click the nodes that need to update the weights. Right-click to finish the operation.
  5. The selected node information will be added to the dialog list automatically. You can select the node row and click the node cell. And modify the node turn, weight, and whether it is the barrier point. The turn arcs will be highlighted, and this node is red when it is set to the barrier point.
  6. Continue updating the weights of other nodes.
  7. Continue setting the To-From Oneway and Prohibited Values.
  8. After these settings, click the **OK** button to save all settings. Or, click the **Cancel** button to exit the dialog.
