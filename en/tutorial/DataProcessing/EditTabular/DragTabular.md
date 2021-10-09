---
id: DragTabular
title: Drag tabular
---
### Introduction

This operation can simplify the tedious operation of inputting data one by one, and it can realize the effect of replication, arithmetic assignment and geometric assignment.

It supports dragging on the same column of the attribute table. After selecting the cell, move the mouse to the lower right corner, when the mouse state becomes the cross, drag it to achieve automatic assignment. The effect of selecting one and more cells is different, and the specific operation is as follows:

* Select a cell, move the mouse to the lower right corner, when the mouse state becomes a cross, drag upwards or downwards to achieve the effect of replication.
* Select two successive cells, move the mouse to the lower right corner, when the mouse state becomes a cross, upwards or downwards drop. If the cell value is a digital value, make the assignment according to the numerical arithmetic rules.
* Select two successive cells, move the mouse to the lower right corner, when the mouse state becomes a cross, upwards or downwards drop while pressing the Ctrl key to achieve the cell replication effect.
* Select two successive cells, move the mouse to the lower right corner, when the mouse state becomes a cross, upwards or downwards drop while pressing the Shift key. If the cell value is a digital value, make the assignment according to the numerical geometric rules.
* Select several successive cells, move the mouse to the lower right corner, when the mouse state becomes a cross, upwards or downwards drop to achieve the overall cell replication effect.
* Select two successive cells of the text or wide char type. For the cell value if only the numerical part is inconsistent and the text part is consistent, when the mouse becomes a cross, upwards or downwards drop, the first number will be made the assignment according to the arithmetic rule, and the text content remains the same. For example, select the two adjacent cells, the cell content is "Day 1", "Day 2", then the content of the following cell is the "Day 3", "Day 4", "Day 5" and so on.

### Note

1. Supporting all types of editable fields except binary.
2. If there is a cell in the selected two consecutive cells to empty, upwards or downwards drop to achieve the effect of the overall copy of the selected cells.

### Related content

[Edit Attribute Table](Editgroup)

[Undate Field](UpdateButton)

[Copy and Paste](CopyAndPaste)

[Update Attribute Table](UpdateTabular)

[Binary Field Editing](BinaryEdit)



