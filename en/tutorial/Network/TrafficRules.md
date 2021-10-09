---
id: TrafficRules
title: Setting Traffic Rules
---
Set traffic rules, namely, set whether the arc is oneway or prohibited. Usually, we save the traffic rules information as the field property value to a field (text). Different field property represents different traffic rule, such as the From-To Oneway, To-From Oneway and Prohibited. In the dialod box, you specify the property value corresponding to the rule, the properties that you don't specify, the corresponding road is a two-way road.

### Basic Steps

  1. Open the network dataset that stores the traffic rules.
  2. In the Environment Settings, set the weight field, node/arc identification field and so on. Please refer to [Environment Settings](NetAnalystEnvironmentWIN) for the information about the introduction to the Environment Settings window.
  3. Click the **Traffic Rules Settings** button to open the **Traffic Rules Settings** dialog box. 
  4. Checking the **Enable** box means using the traffic rules in the current network dataset.
  5. Click the dropdown arrow of the Traffic Rule Field, and select a field.
  6. Set the From-To Oneway value. Click the dropdown arrow, and select the Settings. The **Settings** dialog box pops up. Add the attribute values corresponding to the From-To Oneway in this dialog box. You can add several fields. If you want to modify this settings, you can reset it. 
  7. Continue setting the To-From Oneway and Prohibited Values.
  8. Click the OK button,and exit the current dialog box.

###  Note

  1. While setting traffic rules, it is allowed that multiple values represents one rule.
  2. On field value can only represent one traffic rule. When you set a field for a rule, the field will be automatically filtered out while setting other rules. 
