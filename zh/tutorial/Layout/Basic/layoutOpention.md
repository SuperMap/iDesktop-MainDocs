---
id: layoutOpention
title: 布局操作
---
本节内容包含了布局的相关操作，如打开、新建、删除、保存布局等常规操作，方便用户对布局的基本操作有一个整体了解。
 
### 打开布局   
  
　　右键单击工作空间管理器中的布局结点，在弹出的右键菜单中选择“打开布局”，就会将选中布局显示在新的布局窗口中。  
 　　按住 Ctrl 键，在工作空间管理器中选中多个布局结点，然后右键单击鼠标，在弹出的右键菜单中选择“打开布局”，就会将选中的多个布局在多个布局窗口中打开显示，每一个布局单独显示在一个布局窗口中。  

**注意事项**：用户使用旧版本无法打开新版本保存在工作空间中的布局。解决方法请查看该页面中“**布局存储升级**”描述。

### 新建布局  

SuperMap 提供了两种方式新建布局：  
  
- **方式一**：单击功能区“开始”选项卡中 “浏览”组的“布局”项，新建空白布局窗口。  
- **方式二**：右键点击工作空间管理器中的布局集合结点，在弹出的右键菜单中选择“新建布局”选项，弹出新建布局窗口，用户需在该窗口选择创建一个布局模板。默认创建空白模板。   
  
**注意事项**：无论当前工作空间是否存在打开的数据源，“新建布局”命令都可使用。

### 删除布局    

当您需要删除一个已有布局，请右键单击工作空间管理器中的想要删除的布局结点，在弹出的右键菜单中选择“删除布局”。 或按 Delete 键也可以删除布局。 可以在工作空间管理器中先同时选中多个布局，然后再右键单击鼠标，在弹出的右键菜单（同样是布局结点的右键菜单）中选择“删除布局”命令，可以实现一次删除多个选中的布局。 

### 重命名布局    
  
当您需要对已有的布局进行重命名操作，请右键点击需要重命名的布局结点，在弹出右键菜单中单击“重命名”，实现重命名操作。或按 F2 键也可以实现布局重命名。    

### 保存布局  
  
当您需要保存当前布局窗口中的布局时，需要先将将布局保存到当前工作空间中，只有先保存了工作空间，布局才能最终保存下来，当再次打开工作空间时，才能获取所保存的布局。  
具体操作方式：使当前布局窗口中没有选中的对象。 在布局窗口中右键单击鼠标，在弹出的右键菜单中选择“保存布局”项。 
  
### 布局排序  
  
按“名称排序”功能，用来排序布局集合中的所有布局，其实质是将布局集合结点下的所有布局结点按其显示名称进行排序，从而便于浏览和查找布局。    
  
### 布局存储升级

在SuperMap iDesktop9D(2019) 版本对布局的存储做了优化和调整，解决了历史版本中布局存储易导致数据损坏的问题。用户需注意由存储升级带来的以下影响：  
  
1. 新版本采用 XML 结构将布局存储在工作空间中，解决了旧版本中保存布局会发生文件损坏的问题。  
2. 新版本兼容旧版本保存在工作空间中的布局，但是旧版本无法打开新版本保存在工作空间中的布局。** 注意**：旧版本工作空间经过新版本保存后，布局将按照升级后的方式存储，所以其中的布局在旧版本中将无法再次打开。不过，在新版本中，可以将布局导出为布局模板，然后，在旧版本中加载布局模板，就可实现在旧版本中打开新版本保存后的布局。  
3. 新版本布局存储位置发生变化。若将工作空间存储为 sxwu 格式，旧版本会将布局单独存储在.lyts 文件里；但新版本直接将布局存储在 sxwu 工作空间文件中，且以调整后的XML结构描述布局，包括布局元素、布局设置等。    
 ![](img/LayoutNotice.png)    
4. 在新版本中，插入布局中的图片将存储在工作空间同级目录下的“工作空间文件名_images”文件夹，布局只存储图片属性信息。旧版本工作空间经过新版本保存后，其中的布局将按照升级后的方式存储，所以布局中插入的图片会调整到上述专门的文件夹中存储。  
 ![](img/LayoutXML.png)    