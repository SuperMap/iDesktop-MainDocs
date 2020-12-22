---
id: Optimization1
title: 性能优化概述
---
为了提高对各种类型的地理数据以及地图、场景的 操作速度和显示效果，可通过以下策略，对矢量数据、栅格数据、地图、场景的浏览速度和显示效果等方面进行优化。

[使用地图瓦片技术](../MapTiles/MapTiles  )

当应用程序处理的的地理数据量比较庞大时，不仅操作速度缓慢，同时也非常耗机器资源。为了提高整体操作性能，在使用前先对地图数据或三维数据进行预处理，预处理的本质是为地图、影像、地形或模型数据生成地图瓦片，能够极大地提升数据显示和浏览的速度。

[矢量数据优化](VectorOptimization/VectorOptimization  )

通过对矢量数据进行处理，如：创建空间索引、设置数据压缩编码方式，优化矢量数据的操作性能。

[栅格/影像数据优化](RasterOptimization/RasterOptimization  )

通过对栅格/影像数据进行处理，如：创建影像金字塔、使用 SIT 数据格式等，优化栅格/影像数据的操作性能。

[地图显示优化](MapOptimization/MapOptimization  )

通过对地图进行处理，如：对象过滤显示、图层过滤显示、地图缓存、地图反走样等操作，提升地图的显示速度和显示效果。

[场景显示优化](SceneOptimization/SceneOptimization  )

通过对场景进行处理，如：三维缓存、场景缓存、对象过滤显示、图层过滤显示、场景反走样、三维缓存等操作，提升场景的显示速度和显示效果。

 
