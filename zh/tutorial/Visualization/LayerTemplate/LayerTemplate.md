---
id: LayerTemplate
title: 使用图层属性模板
---
图层模板中记录了图层属性、图层风格以及专题设置等信息，实质是一个 *.xml
文件，其中记录着模板图层的“图层属性”面板处设置的属性信息，以及图层的点、线、面符号风格、大小和颜色，方便将该信息应用于其他图层。

SuperMap 支持加载图层模板至其他图层中使用，同时支持将当前图层属性的设置信息保存为模板文件，方便将该信息应用于其他地图。

### ![](../../img/read.gif)加载图层属性模板

  * **功能入口** ：右键点击图层管理器中的图层结点，在弹出的右键菜单中选择“图层属性模板”的“加载”选项； 
  * 在弹出的“加载模板”对话框中，选择所要加载的图层属性模板（*.xml 文件），点击对话框中的“打开”按钮，即可按模板文件中的图层属性信息应用至当前图层。 
  * 加载图层属性模板后，该图层与模板图层共有的图层属性将与模板设置一致。

### ![](../../img/note.png)注意事项

  * 加载图层属性模板后，图层标题不会被改变。
  * 若当前图层对应的数据集与属性模板中的数据集不一致，则与数据集字段相关的属性设置不生效，需重新指定数据集字段，如显示过滤条件、对象显示顺序字段、图层关联属性表等。

### ![](../../img/read.gif)输出图层属性模板

输出图层属性模板，用来将图层属性以 *.xml 文件格式存储在工作空间以外的其他介质上，即保存为图层属性模板。

**功能入口**

  * 右键单击图层管理器中的图层结点，在弹出的右键菜单中选择“图层属性模板”的“输出”选项。


