---
id: UpdateTabular
title: Update Attributes  
---  
**Editable fields in the attribute table**

The attribute table of the vector or tabular dataset contains system and user-defined fields. All user-defined fields and certain system fields are editable. However, there are some system fields that can't be edited. System fields for different types of datasource engines may be different. All system fields begin with letters "Sm".

In the table below, all system fields for the SDB Plus file datasource are listed.  
The system fields that can't be edited are marked with the asterisk *.

Dataset Type  | System Fields  
---|---  
Point  | *SmID, SmUserID  
Line  | *SmID, SmUserID, *SmLength,(*SmTopoError)  
Region  | *SmID, SmUserID, *SmArea, *SmPerimeter  
Text  | *SmID, SmUserID  
CAD  | *SmID, SmUserID  
LineM  | *SmID, SmUserID, *SmLength  
Network Line  | *SmID, SmUserID, *SmFNode, *SmTNode, SmResistanceA, SmResistanceB, *SmLength, *SmTopoError  
Network Point  | *SmID, SmUserID  
Tabular | *SmID, SmUserID  
  
**Modify attribute information in the attribute table**

The modification of attribute tables includes two aspects: modifying the table structure and modifying attribute information in the table. For more information on modifying table structure, please refer to [](). Below is the introduction to how to modify attribute information in the attribute table.

For slight changes, you can manually modify and input data in the attribute table. For extensive changes, there are better options. You can update field through other two ways:

  [Fill Handle](UpdateTabular1)

  [Update Field Dialog Box](UpdateTabular2)

###  Related Topics

  [Edit Attribute Table](Editgroup)

  [Update Field](UpdateButton)

  [Copy and Paste Attribute Table](CopyAndPaste)

  [Drag Attribute Table](DragTabular)

  [Edit Binary Field](BinaryEdit)