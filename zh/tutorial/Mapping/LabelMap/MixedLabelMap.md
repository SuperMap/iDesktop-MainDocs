---
id: MixedLabelMap
title: 复合标签专题图
---
复合风格标签专题图可以实现属性字段中的标签，通过指定的分割方法（按照字符位置分割或者使用分隔符分割）将标签分割为多个组，分割后的每个组标签按照不同的风格显示。

应用程序提供了2种方法对标签进行分割，按照字符位置分割和使用分隔符分割。

* 按照字符位置分割：此方法按照当前指定的字符位置进行分割，分割段数为2，第一段的字符分割位置为2，则表示第一段包括前2个字符（单个汉字按照一个字符计算），从第3个字符以后，即第3个字符开始到整个字符串结束，均为第2段，每一段标签可以设置不同的显示风格。 
* 使用分隔符分割：此方法按照指定的分隔符，从分隔符所在的位置将标签分为指定的段数，属性字段中必须包含此分隔符。分隔符可以使数字、字符、汉字以及下划线、空格等特殊字符。当属性字段中存在多个分隔符时，可以将标签分割为多段，最多支持将标签分割为5段，分割后的每一段标签可以设置不同的显示风格。 

### ![](../../img/read.gif)制作复合标签专题图的两种途径：

![](../../img/smalltitle.png) [新建复合标签专题图](MixedLabelMapDefault)

![](../../img/smalltitle.png) [修改复合标签专题图](MixedLabelMapDia)