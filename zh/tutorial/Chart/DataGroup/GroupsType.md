---
id: GroupsType
title: 海图数据集分组类型
---
目前， 海图数据集分组包括两种类型：只读 S-57 海图数据集分组和可编辑 S-57 海图数据集分组。SuperMap 应用程序提供了两种类型的海图数据集分组的相互转换，创建可编辑 S-57 海图数据集分组，以及删除海图数据集分组的功能。

**只读海图数据集分组**

只读 S-57 海图数据集分组用于对海图数据进行读取操作。需要只读海图数据集分组的情形有两种，一种情形为：是将 000 文件导入到 SuperMap 中，则该文件中的海图数据以只读数据集分组的形式展现；另一种情形为：完成海图数据编辑后，需要将可编辑海图数据集分组转换为只读海图数据集分组，才能将海图数据导出。

**可编辑海图数据集分组**

可编辑 S-57 海图数据集分组，不仅可以对海图数据进行读取操作，还能够进行各种编辑和修改，如对特征物标数据集进行创建、删除和追加记录，创建海图拓扑关系，修改物标属性等，并且关系物标和水深的修改也需要基于可编辑
S-57 海图数据集分组。

当需要对已有海图进行编辑修改，或创建一份新的海图数据时，就需要得到一个可编辑 S-57 海图数据集分组。得到可编辑海图数据集分组有两种方式：一种是创建一个新的可编辑海图数据集分组；另一种是将已有的只读海图数据集分组转换为可编辑海图数据集分组。

**海图数据集分组命名规则**

只读和可编辑 S-57 海图数据集分组名称的命名规则有所不同：将 000 文件导入为 SuperMap 数据集分组时，该分组为只读类型，分组的名称为 000 文件的文件名（不含后缀） + “_” + 编辑比例，例如：CN5JYSD1_12000；可编辑 S-57 海图数据集分组对应的分组名称为 000 文件的文件名（不含后缀），例如：CN5JYSD1。文件名由生产机构简称、航海用途编号和图号组成，如文件名为 CN5JYSD1 的 000 文件，其生产机构简称为：CN，航海用途编号为：5，JYSD1为图号。