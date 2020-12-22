---
id: SummaryAttributes
title: 属性汇总统计
---
属性汇总统计，指的是对输入的数据集中所选择的属性进行汇总统计。统计指定分组字段中每个字段值的个数，并可以按照统计模式，统计指定字段的最大值、最小值、平均值等。

通过对输入的数据集设定分组字段、属性字段以及对属性字段需进行的统计模式，从而得到汇总统计的结果。以下图为例，按照字段borough进行分组统计，Queens
的个数统计结果为5，再从中取得最小的 LocationID 为2。

![](img/SummaryAttributes.png)

### ![](../img/read.gif) 操作说明

  1. 在“在线”选项卡的“分析”组中，选择“属性汇总统计”，即可弹出 **属性汇总统计** 的参数设置对话框。
  2. **iServer服务地址** ：通过下拉选项登录iServer服务地址和帐号，详细说明请参见[数据输入](DataInputType.html)页面。
  3. **源数据集** ：必填参数，指定参与属性汇总的数据集。通过确定“输入方式”选择数据集，单击下拉按钮选择即可，下拉选项中会自动过滤符合分析要求的源数据集，详细说明请参见[数据输入](DataInputType.html)页面。
  4. **分析参数设置** ： 
    * **分组字段** ：选填参数，默认将对所有对象进行属性统计。可设置多个字段，使用逗号","分隔。
    * **属性统计字段** ：选填参数，每组数据的个数默认会被统计，支持数值型的非系统字段，可通过下拉按钮选择字段，也可直接输入字段名。
    * **统计模式** ：选填参数，对所填属性字段进行统计。支持的模式有：最大值、最小值、平均值、总和、方差、标准差。
  5. 设置好以上参数之后，即可执行分析，属性汇总分析的结果是属性表数据集，分析结果保存的路径会在输出窗口提示。 **注意** ：用户若直接打开生成结果路径的数据会提示打开失败，是由于基于iSever服务的分析，会存在数据被占用而无法打开的情况。建议用户将数据拷贝至其他路径中打开该数据进行编辑操作。

### ![](../img/seealso.png) 相关主题

![](../img/smalltitle.png)
[环境配置](BigDataAnalysisEnvironmentConfiguration.html)

![](../img/smalltitle.png) [数据准备](DataPreparation.html)


