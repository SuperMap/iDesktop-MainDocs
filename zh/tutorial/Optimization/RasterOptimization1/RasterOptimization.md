---
id: RasterOptimization
title: 栅格/影像数据优化
---
### 1\. 使用影像金字塔

影像金字塔技术是目前各软件处理海量影像所必须采用的技术。对栅格/影像数据集创建影像金字塔，可以提高数据浏览速度。

关于使用影像金字塔的相关操作，请参见[管理影像金字塔](../../DataProcessing/DataManagement/ManagePyromid  )。

### 2\. 使用SIT数据格式

SuperMap SIT（SuperMap Image Tower），是超图公司在SuperMap GIS
5.0起提供的一种全新栅格及影像文件存储格式。它集成了影像压缩及高效影像金字塔技术，不仅能大幅度压缩影像数据，并能够以极快的速度读取显示，很好的解决超大型影像数据浏览、显示速度慢的问题。在应用程序中，可使用数据导出功能将影像数据导出为SIT格式，具体操作请参见[导出数据](../../DataProcessing/DataConversion/ExportData  )。

 

