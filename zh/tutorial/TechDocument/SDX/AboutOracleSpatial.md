---
id: AboutOracleSpatial
title: SDX+ for Oracle Spatial 说明
---
  1. 目前能在打开oracle Spatial数据源时选择oracle其他schema名称,但需要赋予用户一些权限。 例如，如果oracle spatial数据源由user1创建，如果想要user2拥有对应权限的话，就赋予user2下列oracle权限。赋予权限的SQL语句如下：      
```  
//查看权限 
grant select on user1.SMOSPREGISTER to user2; 
grant select on user1.SmOspImgRegister to user2; 
grant select on user1.SmDataSourceInfo to user2; 
grant select on user1.SMFieldInfo to user2; 
grant select on user1.数据集表名 to user2;   //对于所有的数据表 
grant select on user1.数据集表名_RDT to user2;   //对于栅格数据 
//增加对象权限 
grant update on user1.SMOSPREGISTER to user2; 
grant insert on user1.数据集表名 to user2; 
//编辑对象权限 
grant update on user1.SMOSPREGISTER to user2; 
grant update on user1.数据集表名 to user2; 
//删除对象权限 
grant update on user1.SMOSPREGISTER to user2; 
grant delete on user1.数据集表名 to user2; 
//修改表结构权限 
grant select on user1.sm_seq_fieldinfo to user2; 
grant insert on user1.SMfieldinfo to user2; 
grant delete on user1.SMfieldinfo to user2; 
grant alter on user1.数据集表名 to user2;  
```
  2. OracleSpatila引擎下，首先要保证数据库中的视图User_sdo_geom_metadata有记录，否则新建的数据源将没有数据集。解决方法：用户可以根据实际数据在外部手工向User_sdo_geom_metadata中添加记录，然后再新建数据源。
  3. 空间数据表需要有主关键字(Primary Key)，如果没有建议用户指定一个主关键字。
  4. 目前支持的数据集类型为：点、线、面、文本、属性表、栅格 6 种。其中点、线、面数据集的空间数据采用Mdsys.Sdo_Geometry字段存储，文本数据集与SDX+ for Oracle 引擎中的文本采用同样的存储格式。
  5. 支持Mdsys.Sdo_Geometry的Sdo_Gtype：
  * 2001、3001、2005、5
  * 2001、3001、2005、5
  * 2001、3001、2005、5
  6. 需要注意的是：通过SuperMap的Oracle Spatial引擎打开其它GIS软件创建的Oracle Spatial数据集时，在打开数据源之后，最好重新计算矢量数据集的范围。
  7. 支持外部栅格数据导入到SuperMap的SDX+ for Oracle Spatial数据源中作为GeoRaster Image 或 Grid/DEM 类型，要求如下：
    * Oracle服务器和客户端的版本都得是10g（含）以上，9i的不支持。
    * 多波段影像数据，支持以BIP（Band Interleaved by Pixel）或者BSQ（Band Sequential）格式存储的数据，不支持 BIL（Band Interleaved by Line）。
    * 压缩编码方式：只支持 Zip 压缩。
    * 支持的位深：8位、16位、24位、32位。其它暂时不支持。
  8. 当前版本中，对GeoRaster数据模型的支持与ArcSDE中的不同：
    * ArcSDE 的 Raster 数据模型是分波段存储和显示的，例如一张BMP图片在ArcSDE中是存储为3个波段，每个波段用 8byte 存储，SuperMap在读取时只能将这三个波段合成为一个24byte的影像数据集来处理。
    * 目前，对 ArcSDE 的数据，只支持 n 个波段且每个波段为 8 byte 的数据。
  9. SDX+ for Oracle Spatial数据源中的GeoRaster模型与其它软件的兼容性：
    * 通过SuperMap导入的数据，Image数据集在MapBuilder（OracleSpatial自带的显示工具）中能正确显示；但Grid和DEM数据集在MapBuilder中还不能正确显示，问题有待研究。
    * Oracle Spatial数据在 ArcSDE 中的注册与显示目前不支持。
  10. 不支持投影转换。
  11. 不支持数据集编码。
  12. 新建数据源后，对原有数据集不会自动重新计算范围和索引，因此打开数据集后，如果没有对象，请重新计算数据集范围或者重建空间索引。
  13. 矢量数据集支持对字段别名做修改。
  14. 矢量类型数据集命名规则：
    * 非SuperMap建立的数据集，数据集名为：表名_空间数据列名。如表Street中有空间数据列Shape，则在SuperMap中的数据集名为：Street_Shape。为区别单个表中有多个SDO_GEOMETRY列的情况，一个SDO_GEOMETRY列将对应一个数据集。
    * SuperMap建立的数据集，数据集名与表名一致。
  15. GeoRaster类型数据集命名规则：
    * 非 SuperMap 创建的 GeoRaster 数据： TableName_ColumnName_RasterID  
ColumnName 为表（名称为TableName所指）的GeoRaster列名；RasterID为 GeoRaster 的RasterID。

  * SuperMap导入的数据与其它引擎相同。栅格数据主表的 SmGeoRaster 列为 GeoRaster 类型，RDT（Raster Data Table）表为： 主表名_RDT。 


