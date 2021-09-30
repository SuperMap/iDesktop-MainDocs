---
id: OSGBFilesManagement
title: 倾斜摄影数据管理  
---  
倾斜摄影数据管理相关工具。

### ![](../../../img/read.gif) 配置文件：

 [生成配置文件](OSGBToScp)

“生成配置文件”功能是将*.osgb 格式的三维切片缓存模型数据生成 *.scp 格式的配置文件。

 [生成历史记录](OSGBHistoryProduce)

生成历史记录功能是选择同一区域多个时期的倾斜摄影文件，分别设置倾斜摄影模型产生的时间，在确定的当前版本上生成历史记录，方便统一管理同一区域的倾斜摄影文件。

### ![](../../../img/read.gif) 数据管理：

 [模型生成大文件](GenerateBigfile)

进一步提升倾斜摄影模型的加载浏览效率，程序提供“生成倾斜模型大文件”功能，可以将存储在多个文件夹下的诸多碎文件生成为一个*.cf格式的倾斜摄影模型大文件。

 [瓦片管理](../../3DTools/3DTilesCache/FilesToMongoDB)

将其关联的 *.osgb 数据保存到 MongoDB 数据库中，并生成一个新的 *.scp 配置文件。

 [保存为模型数据集](LayerSaveModelDataset)

倾斜摄影模型保存到模型数据集。

 [文件选择](FileSelect)

“文件选择”功能，能够便捷地查看被选中模型所在的块（文件夹）及模型文件名称。

 [倾斜摄影模型压平](OSGBFlattenRegion)

模型压平功能可将场景中绘制区域内的模型压平，以便于周边的地物进行对比，更好的规划城市建设。

### ![](../../../img/read.gif) 相关工具：

 [数据分享](UploadOSGBData)

“数据分享”功能将本地倾斜摄影数据上传至iServer端和SuperMap Online，实现了数据的共享。





