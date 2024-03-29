---
id: CombineOSGB
title: 合并根节点  
---  
### ![](../../../img/read.gif)使用说明

倾斜摄影模型数据通常采用分块（Tile）方式存储，即一定空间范围的模型划为一个块并存储在一个文件夹中，每个文件夹下包含了一个根节点文件及若干子节点文件。SuperMap通过索引文件（*.scp）记录的根节点相对路径来加载模型，如下示意图（蓝色方框表示模型根节点）。

![](../img/CombineOSGB_before.png)  

  
当模型空间范围广、数据量庞大，使得模型被划分为很多个根节点，读取这些根节点花费时间较长导致加载模型较慢，此时，需要进行合并根节点来提升加载效率。

“合并根节点”功能则是将相邻一定空间范围的根节点合并为一个根节点，即向上抽稀生成了一层更为粗糙的LOD层级。
当金字塔层级为1时，代表每4个根节点合并为1个，每合并一次，模型根节点数量减少约为原始数量的1/4。系统会控制模型最终的根节点数量，保证根节点在10个以内。当大于10个时，会继续合并，直至在10个以内。

合并示意如下图（蓝色方框表示合并前的模型根节点，橙色方框表示合并一次的根节点；黄色方框表示合并二次后的根节点）：

![](../img/CombineOSGB_One.png)  
  
![](../img/CombineOSGB_Two.png)  

  
### ![](../../../img/read.gif)参数说明

  1. 金字塔层级：用于设置多少个根节点合并为1个，即设置层级为n，则代表每4n个根节点合并为1个。默认值为1，即模型根节点将每4个根节点合并为1个。
  2. 设置上述参数后，即可执行合并根节点的操作。

本案例的数据经合并处理后，30个根节点被合并，生成了6个新的根节点，则在目标文件夹下新生成了一个scp配置文件及6个osgb根节点文件，
SCP配置文件（Combine1.SCP）记录了合并后模型对应的根节点名称。

![](../img/CombineOSGB1_Result.png)  



