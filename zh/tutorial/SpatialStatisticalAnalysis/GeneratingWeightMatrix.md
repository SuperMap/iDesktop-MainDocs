---
id: GeneratingWeightMatrix
title: 生成空间权重矩阵
---
用于构建空间权重矩阵文件(*.swmb)，用表示数据集中各要素之间的空间关系。

### 分析说明

  * 空间权重矩阵文件指在生成、存储、重用和共享一组要素之间关系的空间关系概念化模型。文件采用的是二进制文件格式创建，要素关系存储为稀疏矩阵。
  * 根据指定的分析模式来构建空间权重矩阵。

### 操作说明

在“空间分析”选项卡的“空间统计分析”组中，单击“生成空间权重矩阵文件”，即可弹出“生成空间权重矩阵文件”对话框。

### 主要参数

  * **源数据** ：设置用于生成空间权重矩阵文件的数据集，支持点、线、面三种类型的数据集。
  * **唯一ID字段** ：唯一 ID 字段与运行此功能后所获得的要素关系关联。因此，每个要素的唯一 ID 字段值都必须唯一，而且通常应该位于与要素类一同保留的字段中。
  * **概念化模型** ：选择的模型需反映分析要素之间的固有关系，设置要素在空间中彼此交互方式构建的模型越逼真，结果就越准确。 
    * 固定距离模型：适用于点数据、及面大小变化较大的面数据。
    * 面邻接模型(共边、相交)：适用于存在相邻边、相交的面数据。
    * 面邻接模型(邻接点、共边、相交)：适用于有邻接点、相邻边、相交的面数据。
    * 反距离模型：所有要素均被视为所有其他要素的相邻要素，所有要素都会影响目标要素，但是随着距离的增加，影响会越小，要素之间的权重为距离分之一，适用于连续数据。
    * 反距离平方模型：与"反距离模型"相似,随着距离的增加，影响下降的更快，要素之间的权重为距离的平方分之一。
    * K最邻近模型：距目标要素最近的K个要素包含在目标要素的计算中（权重为1）,其余的要素将会排除在目标要素计算之外（权重为0）。如果想要确保具有一个用于分析的最小相邻要素数，该选项非常有效。当数据的分布在研究区域上存在变化以致于某些要素远离其他所有要素时，该方法十分适用。当固定分析的比例不如固定相邻对象数目重要时，K 最近邻方法较适合。
    * 无差别区域模型：该模型是"反距离模型"和"固定距离模型"的结合，会将每个要素视为其他各个要素的相邻要素，该选项不适合大型数据集，在指定的固定距离范围内的要素具有相等的权重（权重为1）；在指定的固定距离范围之外的要素,随着距离的增加，影响会越小。
  * **中断距离容限** ："-1"表示计算并应用默认距离，此默认值为保证每个要素至少有一个相邻的要素；"0"表示为未应用任何距离，则每个要素都是相邻要素。非零正值表示当要素间的距离小于此值时为相邻要素。
  * **反距离幂指数** ：控制距离值的重要性的指数，幂值越高，远处的影响会越小。
  * **相邻要素数目** ：设置一个正整数，表示目标要素周围最近的K个要素为相邻要素。
  * **距离计算方法** ：距离计算的方法采用欧氏距离和曼哈顿距离。有关欧式距离和曼哈顿距离的详细描述，请参看[空间统计分析基本词汇](BasicVocabulary.html#8)。
  * **空间权重矩阵标准化** ：当要素的分布由于采样设计或施加的聚合方案而可能偏离时，建议使用空间权重矩阵标准化。选择空间权重矩阵标准化后，每个权重都会除以行的和（所有相邻要素的权重和）。空间权重矩阵标准化的权重通常与固定距离相邻要素结合使用，并且几乎总是用于基于面邻接的相邻要素。这样可减少因为要素具有不同数量的相邻要素而产生的偏离。空间权重矩阵标准化将换算所有权重，使它们在 0 和 1 之间，从而创建相对（而不是绝对）权重方案。每当要处理表示行政边界的面要素时，您都可能会希望选择“空间权重矩阵标准化”选项。
  * **结果设置** ： 
    * **文件路径** ：设置空间权重矩阵文件输出路径和保存名称。
    * **生成属性表** ：勾选该复选框则程序会将二进制空间权重矩阵文件 (.swmb) 转换为表文件，指定属性表文件存储的结果据源及名称。 

属性表中将会包含三个结果字段：源唯一ID(UniqueID)、相邻要素唯一ID(NeighborsID)、权重(Weight)。

### ![](img/seealso.png) 相关主题

![](img/smalltitle.png)[聚类和异常值分析](ClusterOutlierAnalyst.html)

![](img/smalltitle.png)[优化的热点分析](OptimizedHotSpotAnalyst.html)

![](img/smalltitle.png)[分析模式](AnalyzingPatterns.html)


