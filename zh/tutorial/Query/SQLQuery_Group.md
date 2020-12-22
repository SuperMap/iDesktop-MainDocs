---
id: SQLQuery_Group
title: 使用SQL查询进行分组统计
---  

SuperMap 中的 SQL 查询功能除了可以进行一般的属性查询外，还可以根据指定的某个（或多个）字段将查询结果进行分组，使指定字段上有相同值的记录分在一组，再通过聚合函数、数学函数等函数对查询结果进行统计计算而得到新的临时字段结果，当然，得到的统计结果字段同时也是上述的派生字段。

### 对单个字段进行统计

下面以世界数据为例，对各大洲上国家的数量进行统计。

  1. 打开世界数据工作空间：World.smwu，查询数据集为 World。 
  2. 选择“**空间分析**”选项卡 >“**查询**”组中的“**SQL 查询**”，弹出“**SQL 查询**”对话框。 
  3. 在“SQL 查询”对话框中做如下设置： 

查询模式：查询属性信息；

查询字段 World.CONTINENT, Count(World.SmID) as Count；

分组字段 World.CONTINENT。

如下图：

![](img/SQLQuery1.png)  

  
这样就可以对每个洲（Continent）进行统计，统计的是各大洲上国家的数量（Count(World.SmID) ）。此处我们为派生的统计字段指定了别名，在原字段表达式后键入空格，再加上“as”和别名即可：（Count(World.SmID) as Count）。下图显示了统计得到的结果：

![](img/SQLQuery2.png)  
---  

### 对多个字段进行统计

除了可以对单个字段进行统计外，还可以根据情况对多个字段进行分组统计。用户只需要在分组字段编辑框中输入想要分组的多个字段及统计信息，应用程序会首先按照输入的第一个字段对属性表进行分组，然后在所分出的组内，再按第二个字段分组，依此类推，最后得到的所需查询表中每个记录都包含基于统计函数得到的派生字段的值。 

下面仍以世界地图数据为例，对各大洲上国家的数量按照国家地图的颜色（World_World.COLOR_MAP 字段值）进行统计。

  1. 打开世界数据工作空间：World.smwu，查询数据集为 World。 
  2. 选择“**空间分析**”选项卡 >“**查询**”组中的“**SQL 查询**”，弹出“**SQL 查询**”对话框。 
  3. 在“SQL 查询”对话框中做如下设置： 

查询模式：查询属性信息；

查询字段 World.CONTINENT as CONTINENT, World.COLOR_MAP as COLOR_MAP, Count(World.SmID) as Count, World.SmID；

分组字段 World.CONTINENT, World.COLOR_MAP；

排序字段 World.SMID

如下图： 
![](img/SQLQuery3.png)   

这样就可以对各大洲上国家的数量按照国家地图的颜色进行统计，并按 SMID 字段进行升序排序。下图显示了统计得到的结果：  

![](img/SQLQuery4.png)  
 
