---
id: SQLQueryTemplate
title: SQL查询模板
---
### ![](../img/read.gif)使用说明

SQL 查询模板（*.xml）用来记录 SQL 查询的查询模式、查询数据和查询字段、查询条件、分组字段、查询结果设置等信息。用户在进行 SQL
查询过程中，可以通过" **导入** "功能将已有的查询模板导入，直接进行查询，或者通过“ **导出** ”功能将 SQL 查询对话框中设置好的 SQL
语句导出，方便下次重用。

下面将对世界各个国家的数量按照其所属大洲（World.CONTINENT 字段值）和国家地图的颜色（World_World.COLOR_MAP
字段值）进行分组统计，导出为 SQL 查询模板。具体的查询实例，请参见 [SQL查询分组统计](SQLQuery_Group.html)。

具体内容如下：

![д](img/CopyCode.gif)Copy

    
    
    
    <?xml version="1.0" encoding="utf-8"?>
    <sqlQuery String_Not="http://www.supermap.com.cn/desktop" version="6.1.2">
    	<queryMode value="1" />
    	<sqldataset dataset="Province_R" datasource="PopulationAndEconomy" />
    	<sqlField value="Province_R.Class as Class, Province_R.COLORID as COLORID,   
    	Count(Province_R.SmID) as Count1, Province_R.SmID" />
    	<sqlCondition value="" />
    	<sqlGroupField value="Province_R.Class, Province_R.COLORID" />
    	<sqlOrderby>
    		<field0 value="Province_R.SmID" order="升序" />
    	</sqlOrderby>
    	<standardsql value="select Province_R.Class as Class, Province_R.COLORID as COLORID,   
    	Count(Province_R.SmID) as Count1, Province_R.SmID from Province_R group by Province_R.Class, Province_R.COLORID order by Province_R.SmID asc" />
    	<showeTabular value="True" />
    	<showOnMap value="False" />
    	<showOnScene value="False" />
    	<saveResult value="False" />
    </sqlQuery>
    
    

  * <queryMode>用来指定查询模式，当值为0时，表示查询空间和属性信息；值为1时，表示仅查询属性信息。
  * <sqldataset>用来指定参与查询的数据，包括参与与查询的数据源和数据集。
  * <sqlField>用来指定参与查询的字段信息，可以同时查询多个字段。
  * <sqlCondition>显示当前查询操作的查询条件。
  * <sqlGroupField>用来指定分组字段，可以同时使用多个字段进行分组查询。
  * <sqlOrderby>用来指定排序字段，可以使用多个字段对查询结果进行排序，可以按照升序排列，也可以按照降序排列。
  * <standardsql>根据指定的查询参数、查询条件等构建的 SQL 查询语句。
  * <showeTabular>是否浏览查询结果的属性表。True 表示查询完成后自动浏览查询结果的属性表，False 表示不自动浏览查询结果的属性表。
  * <showOnMap>是否在当前地图窗口中浏览查询结果。True 表示自动添加到当前地图窗口中浏览查询结果，False 表示不在地图窗口中浏览查询结果。当查询模式为仅查询属性信息时，该项不可用。
  * <saveResult>是否保存查询结果。True 表示保存查询结果，需要指定要保存的数据源和数据集名称，False 表示不保存查询结果。

### ![](../img/seealso.png) 相关主题

![](../img/smalltitle.png) [SQL查询分组统计](SQLQuery_Group.html)

![](../img/smalltitle.png) [SQL查询常用表达式](SQLQuery_Expression.html)

![](../img/smalltitle.png) [SQL查询属性查询示例](SQLQuery_Example.html)

![](../img/smalltitle.png) [SQL关联查询示例](SQLQuery_Related.html)

![](../img/smalltitle.png) [SQL查询字段排序示例](SQLQuery_OrderByexample.html)

* * *

[](http://www.supermap.com.cn)  
  
---

