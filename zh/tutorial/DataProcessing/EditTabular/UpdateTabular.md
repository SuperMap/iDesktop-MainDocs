---
id: UpdateTabular
title: 属性表更新
---
属性表的更新包含两方面的内容：查看属性表中可编辑的属性字段和修改属性值。

**查看属性表中的可编辑字段**

矢量数据集属性表以及纯属性数据集属性表中的属性字段分为系统字段和非系统字段（即由用户创建的字段）。用户创建的字段允许用户编辑字段的值，
而系统字段中，有些允许用户编辑，有些不允许用户对其进行编辑。不同类型的数据源引擎的系统字段不完全相同，但所有的系统字段都以英文字母“Sm”开头。

下面的表格以 UDB Plus
文件型数据引擎为例，列出了属性表中的哪些字段为系统创建的字段，并且标注了哪些系统字段允许用户编辑该字段的值，哪些系统字段不能够编辑。

（注：带*号的属性字段为不可编辑字段，由系统直接赋值，用户不可编辑改变；没有*号标志的系统字段允许用户编辑该字段中的值。）  数据集类型  | 系统字段  
---|---  
点数据集  | *SmID、SmUserID  
线数据集  | *SmID、SmUserID、*SmLength、(*SmTopoError)  
面数据集  | *SmID、SmUserID、*SmArea、*SmPerimeter  
文本数据集  | *SmID、SmUserID  
CAD 数据集  | *SmID、SmUserID  
路由数据集  | *SmID、SmUserID、*SmLength  
网络数据集--子线数据集  |*SmID、SmUserID、*SmFNode、*SmTNode、SmResistanceA、SmResistanceB、*SmLength、*SmTopoError  
网络数据集--子点数据集  | *SmID、SmUserID  
属性数据集 | *SmID、SmUserID  
  
**属性表中属性字段值的修改**

属性表的编辑可以分为两种：属性表结构的编辑和属性表中属性字段值的编辑，关于属性表结构的编辑，请参见[矢量数据集属性窗口](../DataManagement/DTgroupDiaVector)，这里将介绍属性表中字段值的编辑。

修改属性值最基本的方式就是手工修改属性值。基本操作步骤为：1）打开要修改的属性表；2）选中要编辑的某个单元格，然后输入数据即可。这种方式简单，但不适合大数据量的属性数据的修改、更新和录入，下面介绍其他两种属性表更新的途径。

  [使用填充柄更新列](UpdateTabular1)

  [使用“更新列”对话框更新](UpdateTabular2)

### 相关主题

  [编辑属性表](Editgroup)

  [更新列](UpdateButton)

  [属性表复制粘贴](CopyAndPaste)

  [属性表拖拽](DragTabular)

  [二进制字段编辑](BinaryEdit)

