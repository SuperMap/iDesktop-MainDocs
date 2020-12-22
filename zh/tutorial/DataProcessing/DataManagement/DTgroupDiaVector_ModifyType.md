---
id: DTgroupDiaVector_ModifyType
title: 修改数据源数据集属性字段类型的支持情况
---
目前仅支持修改Oracle、SQLServer、MySQL、PostGreSQL、KingBase五种数据库引擎的数据集字段类型。

对于数据库型数据源中的数据集，由于数据库本身的限制，修改已有字段的类型时，部分字段类型间的修改会失败。需要注意以下情况：

  * **Oracle**
    * 当该字段的字段值均为空时：LongBinary不能修改为其他类型。
    * 当该字段的字段值含有非空值时：CHAR和TEXT可互转；CHAR或TEXT可修改为NTEXT类型，但不支持反向修改。 
  * **SQLServer**
    * 当该字段的字段值均为空时：DATETIM只能修改为TEXT或WTEXT；LongBinary不支持修改为其他类型。
    * 当该字段的字段值含有非空值时：数据符合要求的情况下，跟无数据时支持情况相同。 
  * **MySQL**
    * 当该字段的字段值均为空时：可以修改成任意类型。
    * 当该字段的字段值含有非空值时：数据符合要求的情况下，可以修改成任意类型。 
  * **PostGreSQL**
    * 当该字段的字段值均为空时：对于CHAR、TEXT、NTEXT，这三个类型之间可以任意修改。
    * 对于BYTE、INT16、INT32、INT64、SINGLE、DOUBLE，这六个类型之间可以任意修改。这六个类型还可以修改为NTEXT、CHAR或TEXT，但不支持逆向修改。 
    * BOOLEAN、DATETIM、LONGBINARY可以修改为NTEXT、CHAR或TEXT，但不支持逆向修改。 
  * **KingBase**
    * 当该字段的字段值均为空时：可以修改成任意类型。
    * 当该字段的字段值含有非空值时：DATETIM可以修改为TEXT或WTEXT类型，但不支持逆向修改；LongBinary不支持修改为其他类型。 



