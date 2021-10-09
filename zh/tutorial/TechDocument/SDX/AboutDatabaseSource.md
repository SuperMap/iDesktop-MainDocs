---
id: AboutDatabaseSource
title: 数据库型数据源介绍
---
**1.1 已支持数据库**

目前支持 SQLPlus、PostgreSQL、OraclePlus、Oracle
Spatial、DB2、KingBase、MySQL、BeyonDB、HighGoDB、KDB、SinDB、MongoDB 十二种数据库型数据源。

**1.2 与文件型数据源比较**

  * 文件型数据源：小数据量情况下地图显示更快，数据迁移方便；
  * 数据库型数据源：支持并发。

如果数据量非常大，是否一定不能使用文件型数据源，这一问题并不确定，数据源类型的选择和最终数据大小、组织方式均有关系，如需确认请与支持中心联系。

**1.3 连接方式**

SuperMap通过自主研发的数据库引擎将数据库与SuperMap产品连接在一起，通过数据库引擎可将空间及属性数据存储在数据库中。SuperMap支持的每一款数据库都有对应的数据库引擎文件，比如，Oracle数据库引擎文件为Bin目录下【SuOracleCI.dll】文件。

数据库中数据存储管理不需要客户对数据库中的表进行任何操作，可直接使用SuperMap接口进行存储管理。

**1.4 关联业务表**

存储在数据库中的SuperMap数据集，可通过SuperMap中已有接口进行操作。SuperMap中提供了相应接口，实现业务表与SuperMap数据集之间的关联查询及关联制作专题图，目前支持一对一的关联，不支持一对多及多对多。


