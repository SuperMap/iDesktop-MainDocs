---
id: UpdateArcWeight
title: Updating Arc Weights
---
### Introduction

This function is used to update the network arc weight temporarily in the memory.

Notes:

* The updated arc weight is temporary, so the weight result won't be saved to the field of network data. After closing the network layer, the updated results will be removed automatically.
* When an arc is set to the barrier edge, its weight is -1.
* You can update the weight of an arc from both the forward and reverse. When updating, you select the arc directions according to the arc IDs in the Start ID->End ID list.

### Basic Steps

  1. Open the network dataset in the current map window.
  2. In the Environment Settings, set the weight field, node/arc identification field and so on. Please refer to [Environment Settings](NetAnalystEnvironmentWIN) for the information about the introduction to the Environment Settings window.
  3. In the **Environment** toolbar, click **Weight Settings** > **Update Edge Weight** to open the **Update Edge Weight** dialog box.
  4. Select the arcs that need to update the weights. Right-click to finish the operation.
  5. The selected arc information will be added to the left arc list automatically. The list on the right lists the forward and reverse weights. You can modify the arc weight and whether it is the barrier edge. The barrier edge is highlighted by red, and the un-barrier edge is highlighted by other colors.
  6. Continue updating the weights of other arcs.
  7. In the toolbar of the dialog box, you can search, hide/show or remove the unwanted arcs.
  8. After these settings, click the **OK** button to save all settings. Or, click the **Cancel** button to exit the dialog.
