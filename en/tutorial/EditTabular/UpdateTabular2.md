---
id: UpdateTabular2
title: Update Field Dialog Box
---
The Update Field dialog box can provide you with access to composing rules for field update.

![](img-en/UpdateFieldDia.png)  

Figure: The Update Field dialog box  
    * **Field** : Select the field name to be updated.
    * **Update Range** : There are two types: update the whole row and update the selected records.
    * **Update Mode**

Four update modes are provided: Assign to All, Single-field, Double-field, and Function.

![](../../img/smalltitle.png) [Update Modes](ValueFrom.htm)

    * **Operation Field**

The field used to compose the expression in the single-field update mode.

    * **Operation Field 1 and Operation Field 2**

The two fields used to compose the expression in the double-field update mode.

    * **Operator**

Five operators are provided to connect the two operation factors when composing the expression in the single-field or double-field update mode: "+", "-", "*", "/", and "%".

![](../../img/smalltitle.png) [Operators](CalculateMethod.htm)

    * **Function**

The function used to compose the expression when employing the function update mode.

![](../../img/smalltitle.png) [Functions](Functions.htm)

    * **Expression**

The expression composed to update and edit the specified field. Click the button on the right side of the combo box to bring up the SQL Expression dialog box. You can either construct a field expression in the dialog box that pops up or enter a field expression directly in the Operation Equation text box. See the [ SQL Expression Dialog ](../../Query/SQLDia.htm) page for SQL expression specific instructions. In the specified update range, the value of the cell to be updated is calculated based on the SQL expression constructed by the user. The value returned is the updated value of the cell to be updated.

    * **Reverse**

Check to switch the two operation factors in the single-field or double-field update mode.

    * **Text boxes to the right of Function**

Specify the parameters for certain functions.

    * **Apply**

Apply the composed expression to the field you specified to update.

    * **Close**

Quit the settings and close the dialog box.

  


