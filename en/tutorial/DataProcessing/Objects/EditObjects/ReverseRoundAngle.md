---
id: ReverseRoundAngle
title: Fillet
---

Connect two lines with an arc of a specified radius.

### ![](../../../img/read.gif)Instructions

* Please note that the Fillet command is only active if there are two non-parallel line segments in an editable layer.

* The objects involved the fillet operation must be simple line objects, and their extended lines must have one and only intersection. If two straight lines parallel to each other or are in the same straight line, the operation will be unsuccessful.

* Although the fillet operation can be performed on cross lines, but there is no obvious significance in geoscience. So this situation is not described in detail.

### ![](../../../img/read.gif)Basic Steps

 1. Set the layer where you want to implement the fillet operation editable.

2. Select two non-parallel line segments in the layer.

3. Click the Fillet to display the Fillet Settings dialog box.

4. Click the group dialog box button for the Chamfer group and set the radius of the fillet arc.

![](img-en/ReverseRoundDia.png)  
Figure: Operation Process and Result  

5. Click Yes to view the result  
![](img-en/ReverseRoundResult.png)  
Figure: Reservse Round Result  

6. Click Fillet to connect the two selected line segments with an arc of the specified radius.

7. The operation result description: the system firstly uses the radius you entered to create a temporary circle that is tangential to the two line segments, and then locates the tangent points in each line object. If the tangent point is located on the line object, the system will remove the line segment that extends beyond the tangent point; if the tangent point is located on the extension of the line object, the system will extend the line to the tangent point. The curve between the two tangent points will be kept to generate a new line object. Its attribute records will be added to the end of the attribute table. Its system fields will be assigned by the system and non-system fields will be Null. The original lines will retain their attributes. Operating results are shown as follows:  
![](img-en/ReverseRound.png)  
Figure: Fillet illustration  