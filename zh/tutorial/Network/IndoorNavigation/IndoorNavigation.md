---
id: IndoorNavigation
title: 室内导航概述
---
现今城市化进程飞速发展，错综复杂的路网和越来越复杂的建筑物内部构造，使得人们对于空间位置的认知变得更加困难，尤其是在商场、机场等大型公共场所，室内迷路的情况尤为突出，室内导航因此得到越来越多的关注。室内导航构建人与物之间的空间关系，使用户在室内能精确确定自己的位置，并能快速找到最佳路径到达想要去的位置，为人们的出行带来巨大的便捷。

针对人们在室内出行中亟需解决的问题，SuperMap iDesktop
提供了室内导航数据的生产、加载、分析等一体化解决方案，支持构建室内与室外一体的导航模型，实现室内地图和室外地图无缝衔接显示；并通过设置楼梯关系串联起不同楼层，实现二三维一体、跨楼层、跨楼栋的路径导航分析。

### ![](../../img/read.gif) 应用场景

SuperMap iDesktop
提供的室内导航功能可为移动端室内导航生产基础数据，将构建完成的二三维导航场景模型结果应用于移动端系统中，应用于大型商场、会议中心、地下停车场、机场、车站、医院等建筑物复杂区域的行驶导引。

### ![](../../img/read.gif) 主要特点

    * **支持构建多网络数据集**

构建网络数据集是室内导航的重要基础，直接影响导航的整体性能。传统网络分析中，是将所有道路要素全部合并到一个网络数据集中，并且需要保证整个网络数据集的联通性，一个网络数据集体量庞大，维护起来比较复杂。多网络数据集的分析可以将路网数据进行分块，将一个网络数据集按照用户的逻辑拆成多个网络数据集，不必将所有的道路要素全部存储到一个网络数据集当中，网络数据集之间的联系使用属性进行连接，降低了局部要素信息的维护成本。

    * **跨楼层，跨楼栋导航**

支持通过构建楼梯关系，串联出入口信息，进行跨楼层、跨楼栋导航分析。

    * **二三维一体化导航**

基于室内导航模型，生成二三维一体化导航场景，可以发挥二维地图的灵活性，又能发挥三维场景的真实性。

    * **室内室外一体导航**

在实际应用中，由于种种原因室外导航和室内导航往往并不是连贯的为用户带来了诸多不便，SuperMap iDesktop
能够实现室内路线和室外路线的自由过渡，真正实现了室内外一体化导航。

### ![](../../img/read.gif) 主要内容

室内导航的主要内容可以概括为以下方面：

    * [**构建室内导航模型**](BuildIndoorNavigationModel.htm)：支持根据路网数据、楼梯点、兴趣点等构建室内网络，为室内导航生成路径网络数据集、范围面数据集以及楼层关系属性表等数据。
    * [**构建楼梯关系**](BuildStairRelation.htm)：支持根据各楼层的网络数据集及楼层关系属性表构建楼梯关系，并对楼层之间的楼梯关系进行管理，从而生成二三维一体室内导航模型数据。
    * [**室内导航分析**](IndoorNavigationAnalysis.htm)：支持加载导航模型数据进行室内导航分析，可根据指定的起点和终点进行行驶导引，直观查看导航路径。
  

* * *

[](http://www.supermap.com)  
  
---
