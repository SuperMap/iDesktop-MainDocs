---
id: DTgroupDiaVector_ModifyType
title: Modify Field Types  
---  
### Field Types

iDesktop supports 15 types of fields of vector datasets. The following content describes these fields in detail.

Type | Description | Byte  
---|---|---  
16-bit integer | The range of the 16-bit integer is [-32768, 32767] | 2  
32-bit integer | The range of the 16-bit integer is [-2147483648, 2147483647]| 4  
64-bit integer | The range of the 16-bit integer is [-9223372036854775808, 9223372036854775807] | 8  
Double precision | The allowable range of a double precision value is [-1.7976931348623157E+308, -2.2250738585072014E-308], 0, or [2.2250738585072014E-308, 1.7976931348623157E+308]. | 8  
Single precision | The allowable range of a double precision value is [-3.402823466E+38, -1.175494351E-38], 0, or [1.175494351E-38, 3.402823466E+38] | 4  
Text | the maximum characters of text is 255(2^8-1) | 255  
Wide character | the maximum characters of text is 65535(2^16-1) | 255  
Character type | Fixed-length text. For example, you set the fixed length to 10 and entered 3 characters finally, and so all other characters will be 0. | 255  
Boolean type | The field value can be True or False | 1  
Date | The displayed format YY/MM/DD hh:mm:ss, for example: 2020/11/19 14:54:10 | 8  
Byte | The range of a byte value is [0,255] | 1  
Binary type | Similar to character set. |  
  
### Modify field type

Now, the engines that support to modify field types include: [PostgreSQL](ModifyType_PostGreSQL), [OraclePlus](ModifyType_OraclePlus), [SQLServer](ModifyType_SQLPlus), and MySQL.

For datasets saved in database-based datasources, since the limitation of databases, the changes some types of fields may be failed.
