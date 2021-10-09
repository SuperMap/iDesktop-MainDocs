---
id: UpdateButton
title: Update Field
---
### Description

Updates a whole field or the selected cells in a field by constructing the criteria.

### Function Entrances

Open a tabular dataset or the attribute table of a vector dataset. If you want to update the values of some items, please select these items first.

* Click **Attribute Table** > **Editing** > **Update Field**.
* Right-click on your attribute table and select **Update Field**.

### Parameter Description

* **Update Field** : specify which field you want to update.
* **Apply To** : updates the whole field or only selected records. 
  * Whole Field: updates all values in the specified field.
  * Update Selected Records: updates the selected records in the specified field.
* **Operation Mode** : specify how the field values will be updated.

Operation Mode | Description
---|---
Assign to All | You can specify a value. The system will assign all values to be updated to this value.
Single-Field| Constructs a simple mathematical expression with one field to update values of the specified field. For example, we set the **Operation Field** to SmID, **Operator** to +, and **Operation Value** to 0, which means constructing an expression 'SmID+100'. Then all values to be updated will be the results of SmID plus 100.
Double-Field| Constructs a simple mathematical expression with two fields to update values of the specified field. For example, we set the **Operation Field 1** to SmID, **Operator** to +, and **Operation Field 2** to SmUserID, which means constructing an expression 'SmID + SmUserID'. Then all values to be updated will be the results of SmID plus SmUserID.
Function| Constructs a simple mathematical expression with one field and one function to update values of the specified field. For example, we set the **Operation Field** to SmID and **Function** to Abs, which means constructing an expression 'Abs(SmID)'. Then all values to be updated will be the results of Abs(SmID).

* Reverse: When the **Operation Mode** is Single-field or Double-field, you can check this box to exchange the positions of the two values on two sides of an expression.
* **Operation Field** : When the Operation Mode is Single-field or Function, Operation Field is used to specify a field which is used for a mathematical expression or function expression construction.

* **Operation Field 1/2** : When setting **Operation Mode** to Double-Field, Operation Field 1/2 are used for specifying the two fields involved in an operation expression construction.
* **Operator** : When the **Operation Mode** is Single-Field or Double-Field, the Operator is used to specify the arithmetic operator.

Function| Description
---|---
\+ | On the numeric parameters, the value is added to the two, return a value; character parameters, is to connect two characters, in front of the new parameters in front of the characters, only "+" operation between character parameters.
\- | Only numerical parameters have this operation, the operator in front of the value minus the operator behind the value.
\* | Only numerical parameters have this operation, the operator in front of the value multiplied by the value of the operator.
\/ | Only numerical parameters have this operation, the value preceding the operator is divided by the number following the operator, when the divisor is zero, the operation can not be performed and the value of the dividend is returned.
\% | Only numerical parameters have this operation, the value preceding the operator is divided by the number following the operator, and the remainder is returned. When the divisor is zero, the operation can not be performed and the value of the dividend is returned.

* **Function** : When the **Operation Mode** is Function, it is used to specify the operation function. 
* The two text boxes at the right of the "Function" can be used to specify other parameter information for the function. See [Math Functions](Functions) page for instructions.
* Also you can click "More" in the drop-down list of Function, and customize expressions in the pop-up SOL Expression dialog box. 
* **Expression** : Used to display and edit the expression to be constructed. Click the button on the right side of the combo box to bring up the SQL Expression dialog box. You can either construct a field expression in the dialog box or enter a field expression directly in the Expression text box. About SQL expression, please see [SQL Expression Dialog](../../Query/SQLDia).

### Note

* When some attribute table has a filter, only will the visible values be updated.

###  Related Topics

[Edit Attribute Table](Editgroup)

[Copy and Paste](CopyAndPaste)

[Drag Attribute Table](DragTabular)

[Update Attribute Table](UpdateTabular)

[Binary Field Editing](BinaryEdit)

