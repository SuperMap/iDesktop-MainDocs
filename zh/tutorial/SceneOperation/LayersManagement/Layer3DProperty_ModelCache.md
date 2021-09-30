---
id: Layer3DProperty_ModelCache
title: 缓存图层属性  
---  
在图层管理器中选中缓存图层作为当前图层，“图层属性”界面中会出现缓存相关的设置选项。   
   ![](img/Layer_CacheBase.png)  
 
  
### 三维切片缓存参数

  * **LOD缩放比例（倍）** ：模型缓存LOD的不同层级之间切换距离的缩放倍数。
  * **加载优先级** ：包含深度优先、层优先和深度非线性切换。
    1. **深度优先** ：优先加载当前视角范围内所有金字塔的所有切片。
    2. **层优先** ：优先加载当前金字塔层级的所有切片。
    3. **深度非线性切换** ：优先加载当前视角范围内所有金字塔的所有切片，距离相机较远处只加载较粗糙的数据。
  * **透明过滤选择** ：针对模型缓存，选择对象时屏蔽低于过滤值的对象。
  * **线框模式** ：如果缓存是模型缓存，可以选择设置模型的线框类型,包含“三角形”、“四边形”和“草图”三种模式，详细参考[模型显示模式](../../SceneOperation/AdvancedLayserSetting/ModelDisplayMode)。
  * **关联避让图层** ：选择待关联的标签图层，与对应的符号图层关联显隐。详情见场景要素显示中的[压盖设置](../../SceneOperation/AdvancedSceneSetting/PropertyGroup)。

### 特效属性设置

#### 分层设色

具体可以参考[分层设色](../../SceneOperation/AdvancedLayserSetting/Layer3DProperty_HypsometricSetting)

#### 淹没分析

具体可以参考[淹没效果](../../SceneOperation/AdvancedLayserSetting/Layer3DProperty_Flooding)

### 点云缓存信息

用于显示点云缓存文件的分组和分类信息。

支持定位到指定点云分组以及删除所选点云分组。

![](img/Layer_PointClound.png)  

  


