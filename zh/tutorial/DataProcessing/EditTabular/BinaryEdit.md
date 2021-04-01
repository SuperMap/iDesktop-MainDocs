---
id: BinaryEdit
title: 二进制字段编辑
---
### ![](../../img/read.gif) 使用说明

属性表支持对二进制类型的字段进行编辑，可将各种格式文件以二进制类型存储于属性表字段中。

### ![](../../img/read.gif) 操作步骤

  1. 打开矢量数据集属性表，或者纯属性数据集，在工作空间管理器中，右键点击要打开属性表的数据集（矢量数据集或者纯属性数据集），在弹出的右键菜单中选择“浏览属性表”。
  2. 双击二进制字段列表下的某一个单元格，单击单元格右侧的 ![](../../img/Select.png) 按钮，在弹出的“打开”对话框中选择文件，单击对话框中的“打开”按钮，即可将该文件以二进制形式进行存储。
  3. 二进制单元格显示“BinaryData”时，表示单元格有值；无值单元格则显示为空白。

### ![](../../img/note.png) 注意事项

  1. 二进制类型单元格不显示具体的二进制值，有值单元格统一显示为 BinaryData。
  2. 二进制字段的长度显示为0，表示该字段长度为变长，依据字段所存储的文件而定。
  3. 若二进制字段单元格中添加的文件处于打开状态，或为非本地文件，则无法成功添加该文件到单元格中。

### ![](../../img/seealso.png) 相关主题

![](../../img/smalltitle.png)  [编辑属性表](Editgroup.html)

![](../../img/smalltitle.png)  [更新列](UpdateButton.html)

![](../../img/smalltitle.png)  [属性表复制粘贴](CopyAndPaste.html)

![](../../img/smalltitle.png)  [属性表拖拽](DragTabular.html)

![](../../img/smalltitle.png)  [属性表更新](UpdateTabular.html)

