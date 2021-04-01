---
id: TopotoPolygon
title: 拓扑构面  
---  
### ![](../../img/read.gif)使用说明



将线数据集或网络数据集通过拓扑处理构建为面数据集。



### ![](../../img/read.gif)操作步骤



1. 单击功能区  “ **数据处理** ”选项卡  “ **拓扑** ”组的“ **拓扑构面** ”按钮。

2. 在源数据区域选择需要进行拓扑构面的数据集，这里可以选择线数据集或网络数据集。

* **数据源** ：选择需要进行拓扑构面的线数据集（或网络数据集）所在数据源。

* **数据集** ：选择需要进行拓扑构面的线数据集（或网络数据集）。

* **拓扑处理**：在对线数据集进行拓扑构面之前，建议先对待处理数据集进行拓扑处理操作。通过拓扑处理可以将那些在容限范围内的问题线对象（例如存在假结点、冗余点、悬线、重复线、未合并的邻近端点等拓扑错误）进行修复，同时对呈相交关系的线对象在交点处进行打断，以便于更准确的生成面对象。通过拓扑处理，可以免去用户在拓扑构面之后还要删除不符合条件的冗余对象的麻烦。




勾选“拓扑处理”复选框以后，下方各拓扑处理规则可勾选，包括去除假结点、去除冗余点、去除重复线、去除短悬线、长悬线延伸、邻近端点合并、弧段求交等七种规则。用户可根据需要选择合适的规则对选中数据集进行拓扑预处理，拓扑预处理规则的详细说明请参见[拓扑处理规则](TopoProcess.html)。



单击“高级”按钮，可弹出“高级参数设置”对话框，可在该对话框内设置非打断线和相关拓扑处理规则的容限。


由于此操作直接在待处理数据集中进行，提示信息按钮会提示用户：该操作会修改源数据。用户若不想修改源数据，请在拓扑预处理之前进行数据的备份工作。



在勾选拓扑处理后，系统会在执行拓扑构面之前先进行拓扑处理操作，包括检查和修复所选线数据集中的拓扑错误，随后再对其进行拓扑构面操作。



4. 在结果数据区域设置结果面数据集的名称和存放位置。

* **数据源** ：结果数据集所在数据源，默认为源数据集所在数据源。

* **数据集** ：结果数据集的名称。注意，当用于构面的线数据集中不存在封闭区域时，生成的结果数据集其对象数为0。