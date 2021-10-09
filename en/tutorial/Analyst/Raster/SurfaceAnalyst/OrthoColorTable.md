---
id: OrthoColorTable
title: Color Table
---
The **Color Table** button is used to set the color table of the generated orthophoto image which is displayed as the current color table.

### Instruction to Color Table Dialog Box

**Toolbar Description**

  * Click the **Add** icon to open the default color board. The selected color will be added as the last record in the list box.
  * Click the **Batch Add** icon to open the **Batch Add** dialog box. 
    * Start Value: The start value of the batch adding cells. 
    * End Value: The end value of the batch adding cells.
    * Increment: The cell value gradually increases by the increment from the start value to the end value. 
    * Step Count: The added step count. End Value - Start Value / Step Count = Increment.

Either **Increment** or **Step Count** can be active, which means they can be used at the same time.

  * Auto calculate the end value: This parameter must be used together with **Increment**. If the specified end value cannot make the result of the formula "End Value - Start Value / Step Count" is an integer, then the end value needs to be rectified. For example, the start value is 150, the end value is 1002, the increment is 100, if the check box is selected, the end value in the color table is 950, not 1002.
  * Click the **Insert** button to open the default color board. The selected color will be inserted before the selected record in the list box.
  * Click the **Select All** button to select all the records in the list box. 
  * Click the **Select Inverse** button to inversely select the records in the list box. The original selected records turn into unselected state while the original unselected records turn into selected state.
  * Click the **Delete** button to delete the selected records in the list box.
  * Click the drop-down arrow on the right side of the **Color Schema** dropdown list to select a color schema. Note: When two or more records are selected, only these selected records will be modified according to the color schema. 
  * Click the **Restore** button to restore the records in the list box back to the default colors. Note: When two or more records are selected, only these selected records will be restored back to the default colors.
  * Click the **Reverse** button to reversely modify the colors of records in the list box. It sorts the colors in the color schema in a reverse order to regenerate a new color table. Note: When two or more records are selected, only those selected records will be displayed according to a reverse-order color schema. 
  * Click the **Import Color Table** button to import the external color table into the current list box. For more information, see [Import/Export Color Table](ImportExport).
  * Click the **Export Color Table** button to export the current color table. For more information, see [Import/Export Color Table](ImportExport).

**List Box introduction**

The list box gives the color of an elevation value and its serial number.

  * The sequence number of each color is given by system. Hence, it is unchangeable. 
  * You can double click on any color record to open the color swatch where you can change the color.
  * The **Value** list shows the corresponding elevation value of each color. You can click any **Value** text box to modify the corresponding elevation value. 

### Related Topics

[Orthophoto Image](AboutHillShade)

