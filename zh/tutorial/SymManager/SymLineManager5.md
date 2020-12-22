---
id: SymLineManager5
title: 新建线型符号
---
通过新建线型符号，可以扩充线型符号库中的线型符号资源。下面具体介绍如何完成新建线型符号的基本过程。

1. 在线型符号库选择器中，选中符号分组结构树中的某个符号分组，新建的符号默认添加到符号库选择器中当前显示的符号路径下，这里选中符号根组；
2. 在符号库选择器中，单击“新建”按钮，此时将打开线型符号编辑器，在线型符号编辑器中可以制作新的线型符号； 

这里，必须指定新符号编号、符号名称，同时，新的符号必须包含至少一个子线，即新建的符号不能为空，这样，在单击线型符号编辑器中的“确定”按钮，才可以成功创建一个新的线型符号，新建的线型符号将出现在线型符号库选择器中的当前线型符号列表中。

3. 设置新的线型符号的属性信息，必须指定的符号属性为：符号编号和符号名称； 
* 符号编号：符号编号用来在符号库中唯一标识该符号，在同一个符号库中，新建的符号编号不能同符号库中已有的符号的编号相同。
* 符号名称：符号在符号库中的显示名称，在同一个符号库中，符号的名称可以同名。
4. 在子线管理区域，单击工具条中的“添加”按钮，添加一个子线，如上图所示； 

有关线型符号的进一步制作内容，请参见：[线型符号编辑器](SymLineEditor.htm) 中的相关内容。

5. 用户可以进一步设置子线的风格或者添加其他子线，这里不进行进一步操作，单击线型符号编辑器中的“确定”按钮，完成简单线型符号的新建，新建的线型符号将出现在当前线型符号库中。 

新建的线型符号可以再次编辑，进一步完善线型符号，只需在线型符号库选择器中，选中该线型符号，然后单击“编辑”按钮，即可在线型符号编辑器中打开该线型符号，进行进一步的编辑操作。

在符号库中新建的线型符号，最终要保存到符号库中，还需要通过以下途径进行：

* 如果当前符号库是工作空间的资源集合中的线型符号库，可以通过保存该工作空间，将新建的符号保存到线型符号库中；
* 通过将线型符号库选择器中当前的线型符号库导出为线型符号库文件，可以将新建的线型符号保存到线型符号库文件中，后续，可以通过加载该线型符号库文件获得新建的线型符号。
