---
id: DisplayFilter
title: 过滤显示设置
---
在“ **海图属性** ”选项卡的“ **显示过滤**
”组中提供了显示类型、显示元物标、显示水深点、显示图幅编号、显示文本信息、本地化文本信息、显示安全等深线标注、显示其他等深线标注、与最小显示比例尺相关等功能控件。
  
### 显示类型

“显示类型”下拉按钮用于设置海图的显示模式，显示模式分为三种：标准、基本和其他。其中“标准”显示类型是指默认的海图显示内容，“基本”显示类型仅显示在任何情况下都不能删除的内容，“其他”显示类型是由用户自行选择需要显示的内容，如水深点、元物标、文本信息等。

### 要素控制

“要素控制”用于控制当前地图窗口中各物标要素的显示方式，包括“可显示”和“可选择”两种方式。若勾选“可选择”复选框，物标要素在当前地图窗口内可见，若勾选“可选择”复选框，物标要素在当前地图窗口内可以被选中。物标要素的具体控制方案请参阅：[物标要素显示控制](../DataProcessing/basic/ChartFeatureControl.html)。

### 显示元物标

“显示元物标”用于控制是否在当前地图窗口中显示元物标，元物标为包含其他物标共有信息的特征物标。仅在显示类别为“其他”时可用。若勾选该复选框，表示显示元物标；否则，不显示。

### 显示水深点

“显示水深点”用于控制是否在当前地图窗口中显示水深点值，仅在显示类别为“其他”时可用。若勾选该复选框，表示显示水深点值；否则，不显示。

### 显示图幅编号

“显示图幅编号”用于控制是否在当前地图窗口中显示图幅编号。若勾选该复选框，表示显示图幅编号；否则，不显示。

### 显示文本信息

“显示文本信息”用于控制是否在当前地图窗口中显示文本信息。若勾选该复选框，表示显示文本信息；否则，不显示。

### 本地化文本信息

“本地化文本信息”用于控制是否在当前地图窗口中物标的文本信息是否以本地化的方式显示，当“显示文本信息”勾选时可用。若勾选该复选框，表示显示本地化文本信息；否则，不显示。

### 显示低精度符号

“显示低精度符号”用来控制低精度符号是否在地图窗口中显示。若勾选该复选框，表示显示低精度符号，否则不显示。在实际测量的海图数据中一般会使用 QUAPOS
字段表示数据的精度或在可信度，对这些数据的显示可能会出现低精度符号。在 S52 标准中使用 LOWACC01 符号进行显示。

### 与最小显示比例尺相关

“与最小显示比例尺相关”用于控制当前地图窗口中物标随海图的放大缩小是否显示。若勾选该复选框，表示物标的最小可见比例尺大于当前地图的比例尺时，物标不显示；否则，物标显示。

### 显示安全等深线标注

“显示安全等深线标注”用来控制是否在当前地图窗口中显示安全等深线标注。若勾选该复选框，表示显示安全等深线标注；否则，不显示。

### 显示其他等深线标注

“显示其他等深线标注”用来控制是否在当前地图窗口中显示其他等深线标注。若勾选该复选框，表示显示其他等深线标注；否则，不显示。