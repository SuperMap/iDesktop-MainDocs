---
id: Editgroup
title: Editing Attributes
---
The Editing group on the Attribute Table tab provides a series of commands for attribute editing.

After modifying your attribute table, you can use the Refresh feature to view the newest attributes.

### Delete Record

Deletes one or more selected records from a tabular dataset or the attribute table of a vector dataset.

* The corresponding geometric object will be deleted after deleting a record.
* The Delete Record button is active when the original dataset (your tabular dataset or your vector dataset) is not read-only.

**Function Entrances**

Open a tabular dataset or the attribute table of a vector dataset. Select the records you want to delete.

* Click **Attribute Table** tab > **Editing** > **Delete Record**.
* Or, right-click and select Delete Record. In the prompt window, select OK.

### Add Record

Adds records to a tabular dataset which is write-only.

**Function Entrances**

Open your tabular dataset.

* Click **Attribute Table** tab > **Editing** > **Add Record**.
* Or, right-click and select Add Record.

### Redo/Undo

Undoes an operation or undoes an undo.

**Function Entrances**

* Click **Attribute Table** tab > **Editing** > **Redo/Undo**.
* Or, right-click and select Delete Record. In the prompt window, select OK.
* Press Ctrl-Z /Ctrl-Y.

You can define the maximum number of consecutive times that undo/redo can be executed in the Rollback Settings appeared by clicking the **Settings** button on the **Editing** group.

* **Max Rollbacks** : Checking the checkbox means you can enter the maximum number of consecutive times that undo/redo can be executed in the textbox. 
* **Max Objects** : Checking the checkbox means you can specify how many objects can be undone or redone once. 

For example, when you use the feature Update Field to update your attribute
table which has record number bigger than the undo/redo limits, the system
will prompt you whether to continue the operation. If you click Yes, after the
update, you can not use the **Undo** feature to go back.

* **Show warning when rollbacks can not be performed** : when editing an attribute table, if the number of changes you have made is bigger than the undo or redo limits, the system will give you a prompt after checking the checkbox. You could click on **OK** to continue editing your attribute table. If you don't check the checkbox, the system won't pop up the prompt window. At the same time, the last operation can not be executed successfully. 

###  Related Topics

[Undate Field](UpdateButton)

[Copy and Paste](CopyAndPaste)

[Drag Attribute Table](DragTabular)

[Update Attribute Table](UpdateTabular)

[Binary Field Editing](BinaryEdit)

