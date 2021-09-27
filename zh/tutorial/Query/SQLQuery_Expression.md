---
id: SQLQuery_Expression
title: 构建SQL查询的表达式
---
SQL 语句是标准的计算机查询语句，SuperMap 中的许多查询功能都是通过构建SQL语句来完成的。一般情况下，SQL表达式的语法为“Select …（需要输出的字段名） from … （数据集名）where…（查询条件）(order by … ascending/descending)（结果排序字段，可选）”。其中 Select, from, order by 等后面的参数都可以直接在 SQL 对话框中的列表或下拉列表中选择，而查询条件（Where–Clause语句）是需要我们自己构建的。本文将主要介绍一些常用的查询条件的构建。

需要注意的是，由于文件型数据源中的属性信息是以 Access 格式存储的，因此，在对文件型数据进行查询时使用的通配符，可能与通常在 SQL 或 Oracle 等数据库中查询使用的通配符不大一致，下面以示范数据 PopulationAndEconomy 工作空间中的 Province_R 数据集为例进行详细介绍。

1. **数值的查询**
对数值进行查询可以使用“＝”, “<>”, “>”, “<”, “<=”, “>=”, 、“Between...and” 等等。

例如：

Province_R.Pop_2014 Between 5000 and 10000

查询的是 Pop_2014 字段值（2014年人口）在5000万到10000万之间的省。

2. **模糊查询**
模糊查询使用 like，而且不同类型的数据源使用的匹配符不尽相同。

例如：

（1）**部分匹配**，使用“*”（注，数据库型和 UDB/UDBX 数据源中的通配符为%，使用单引号、双引号都可）

Province_R.Name like "山%"，Province_R.Name like '山%'

查询的是 Province_R 数据集中 Name 字段中，名字以“山”开头的省。

（2）**完全匹配**（注，数据库型数据源中只能使用单引号；UDB/UDBX 数据源使用单引号或双引号均可）

Province_R.Name like "北京"，Province_R.Name like '北京'

查询的是 Province_R 数据集中 Name 字段值为“北京”的行政区。

（3）**单字匹配**，使用“_”（注，数据库型数据源和 UDB/UDBX 数据源中的通配符为_）

Province_R.Name like '河__'

查询的是 Province_R 数据集中 Name 字段值为“河” 后面加两个字符的省份。

3. **查询特定值**  

使用 in，确定表达式的值是否等于指定列表内若干值中的任意一个值。

例如：

Province_R.Name in ("北京市","上海市")

查询的是 Province_R 数据集中 Name 字段值为“北京市”，“上海市”的一个或几个行政区。

Province_R.ColorID in (1,4)

查询的是 Province_R 数据集中 ColorID 字段值为1或4的省份。

注意：对于字符型字段的查询需要将查询值使用单引号（''）或者双引号（""）括起来，而数值型字段的查询不需要。对于数据库型数据源，字符型字段的值只能使用单引号。

4. **查询某个字段值是否为空**  

使用 is NULL (is not NULL)

例如：

Province_R.Name Is NULL

查询的是 Province_R 数据集中 Name 字段值为空的那些省份。（有可能这些省份该字段忘记被赋值了。）

5. **通过构造语句进行查询。**  

可构建任意算术表达式，例如：

Province_R.GDP_2014 > Province_R.GDP_2009 * 2

查询的是 Province_R 数据集中,2014年 GDP 大于2009年GDP两倍的省份。

当然，在设置查询语句的时候，我们也可以使用()设置其优先级。例如：

(Province_R.GDP_2014-Province_R.GDP_2013) > (Province_R.GDP_2013-Province_R.GDP_2012)

查询的是 Province_R 数据集中，2014年的GDP增长比2013年GDP增长多的省份。

6. **组合语句**  

可使用“and”、“or”、“not”关键字组合任意合法的条件表达式。

例如：

Province_R.GDP_2014 > 10000 and Province_R.IncomeLevel > 20000

查询2014年GDP大于1万亿，并且人均收入大于2万的省份。

7. **比较运算符在字符型字段中的应用**  

比较运算符，如>, <, >=, <=, <> 等等。

例如：

Province_R.Name >= "芬兰"

查询的是 Province_R 数据集中 Country 字段值的首字母在 F 到 Z 之间的那些省份。对于数据库型数据源，字符型字段的值只能使用单引号。

8. **日期型字段的查询**  

为Province_R数据集创建一个日期型字段 DataDate，用于存储每条数据的统计时间。以下为常用数据库型数据源对日期型字段进行查询的示例说明：

**SQL(SQL+)数据源中**，查询 Province_R 数据集中 DataDate 字段为2019-08-10的记录，查询语句为: Province_R.DataDate = '2019-08-10 12:25:00'；    
**ORACLE 数据源中**，查询 Province_R 数据集中 DataDate 字段大于2019-08-10的记录，查询语句为: Province_R.DataDate > TO_DATE('2019-08-10','YYYY-MM-DD')；    
**PostGIS 数据源中**，查询 Province_R 数据集中 DataDate 字段小于2019-08-10的记录，查询语句为："Province_R".datadate < '2019-08-10 12:25:00'；
**PostgreSQL 数据源中**，查询 Province_R 数据集中2019年全年的记录，查询语句为：Province_R.datadate between '2019-01-01 0:0:0' and '2019-12-31 0:0:0' ；  
**UDB/UDBX 数据源中**，查询Province_R 数据集中 DataDate 字段中包含2019的记录， 查询语句为：Province_R.datadateProvince_R.DataDate Like '2019%';
  
9. **布尔型字段查询**   

布尔型字段属性值为 True 或者 False，SQL查询时用1表示True，0表示False。

例如：

Province_R.Coastal = 1

查询的是 Province_R.数据集中沿海的城市，Coastal为新建的布尔型字段。

10. **派生字段**  

例如：

Province_R.SmArea / Province_R.SmArea

在查询结果属性表中会列出该临时字段。另外根据需要还可以给临时字段表达式起一个别名，只需在原字段表达式后键入空格，再加上“as”和别名即可，格式如下：

Province_R.SmArea / Province_R.SmArea as Pop_Density

别名是任选的，若给字段表达式一个别名，则在属性表窗口显示时该别名将作为该临时字段名出现在对应列的顶部。若不给定别名，系统则使用表达式内容本身作为临时字段名。若指定多个派生字段表达式，可用逗号分隔。

### 注意事项
对双精度（Double)类型数值进行比较查询时，当使用"="符号查询时，由于精度问题，可能查询不到结果。不推荐用户直接使用“=”进行查询。

