---
id: DTgroupDiaVector_ModifyType
title: Modify field type
---
Currently it supports Oracle, SQLServer, MySQL, PostGreSQL and KingBase.

In same cases it will get failure when modifying the field type because of the
limitations of the database itself. Notice:

    * **Oracle**
      * When the field values are all empty, the LongBinary type can not be modified to other types.
      * When the field value contains a non empty value: it can be converted between CHAR and TEXT; CHAR and TEXT can be modified to NTEXT, but can't be converted reversely. 
    * **SQLServer**
      * When the field values are all empty, DATETIM can only be modified to TEXT or WTEXT; LongBinary can't be modified to other types.
      * When the field value contains a non empty value: when the data meet the requirements, it supports the same situation with the one when there is no data. 
    * **MySQL**
      * When the field values are all empty, it can be modified to any other type.
      * When the field value contains a non empty value: when the data meet the requirements, it can be modified to any other type. 
    * **PostGreSQL**
      * When the field values are all empty, it can be converted between CHAR, TEXT and NTEXT.
      * It can be converted between BYTE, INT16, INT32, INT64, SINGLE and DOUBLE. The six types also can be modified to NTEXT, CHAR or TEXT, but can't be converted reversely. 
      * BOOLEAN, DATETIM and LONGBINARY can be modified to NTEXT, CHAR or TEXT, but can't be converted reversely. 
    * **KingBase**
      * When the field values are all empty, it can be modified to any other type.
      * When the field value contains a non empty value: DATETIM can be modified to TEXT or WTEXT, but can't be converted reversely; LongBinary can't be modified to other types. 


