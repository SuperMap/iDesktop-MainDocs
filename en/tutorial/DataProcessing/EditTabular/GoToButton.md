---
id: GoToButton
title: Locate  
---  
### Instruction

Locate and view a specific record in an attribute table.

### Basic Steps

1. Open your attribute table. Click **Attribute Tables** tab > **Browse** group > **Locate**. In the pop-up dialog, you can type the specific record you want to find. The dialog box already shows the current row number and the row number range you can specify. 

You can go to a record by specifying its row number or a number relative to the current record.

* Relative: Move from the current record to the relative row number up or down. A positive value indicates the target record is previous to the current record. To find a record next to the current record, you need to specify a negative value.
* Absolute: Move to a specific record by specifying its row number.
* Expression: Locate records by building your queries. Check the Expression radio button, click the **...** icon button, and then build an expression to locate records.
2. Click **Attribute Table** tab > **Browse** group > **Locate** drop-down button > **First Record** to go to the first record.
3. Click **Attribute Table** tab > **Browse** group > **Locate** drop-down button > **Last Record** to go to the last record.

### Note

* The current, relative, and absolute positions in the attribute table are all concepts related to rows instead of fields.
* You can use the Up and Down keys to move up or down to other records. 
* Both Oracle-based datasources and SQL-based datasources don't support using one binary field equals to another binary as a query to locate records. 
* The Locate To dialog box is a non-modal window, so that you can set the parameters by directly selecting rows in the attribute table.

 [Sort Ascending](SortOrderAscendingButton)

 [Sort Descending](SortOrderDescendingButton)

 [Hide Column](HideButton)

 [Cancel Hide](CancelHideButton)

 [Filter](FilterButton)

