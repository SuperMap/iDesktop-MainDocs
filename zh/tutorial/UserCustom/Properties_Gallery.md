---
id: Properties_Gallery
title: 按钮栏
---
**表格：按钮栏属性**

属性 | 说明  
---|---  
子项宽度 | 指定 gallery 控件中每一个 buttonGallery 控件的宽度，gallery 控件总共显示多长是通过galleryItemWidth 和 galleryMaxColumns 属性指定的值计算得到的。  
ID | gallery 控件支持多个不同配置文件里的项进行合并显示，合并的依据就是通过 id 来实现的，也就是说我们可以在 A 插件的配置文件中配置一个gallery 控件，指定一个 id，同时在 B 插件里面也配置一个 gallery 控件，指定相同的 id，在系统显示时，这两个 gallery控件的中的内容将会合并到一起，放到一个 gallery 控件中。  
帮助位置 | 用来指定帮助文件。帮助文件的路径是相对于帮助根目录的相对路径，默认从\WebHelp 文件夹下定位用户所需的帮助文件。  
标签 | 如果该属性不为空并且 screenTip 属性也不为空时，该属性的值将作为 screenTip 提示信息的标题显示。  
插件 | 包含此控件的所有插件名称，当控件只属于一个插件时，此值可修改。  
可见 | 指定 gallery 控件是否可见，该属性的值为 true 时，表示可见，false 为不可见。  
索引 | 用于排序 gallery 控件，即当同一层次上存在多个 gallery 控件时，每个 gallery 控件将通过该属性的值来确定其排列次序。  
提示内容 | 指定鼠标停留在 gallery 控件上时所显示的提示信息，支持 SuperTip 模式，即 Microsoft Office 2007 缩略图式的提示风格。  
提示图片 | 鼠标停留在按钮控件上时将显示提示信息，该属性可以在提示信息中插入图片以辅助信息说明，该属性的值为图片的全路径。  
文本对齐方式 | 指定 gallery 控件中每一个 buttonGallery 控件上所显示的文字的对齐方式，该属性的值可以为left，right，middle，分别表示文字的左对齐、右对齐和居中显示。  
样式 | 指定 gallery 控件中 buttonGallery 按钮控件上面的显示内容，该属性的值有三个：text、image 和 textandimage，其中：text 表示 gallery 控件中所有的 buttonGallery 控件上只显示控件的显示名称；image 表示 gallery 控件中所有的 buttonGallery 控件上只显示控件的图标；textandimage 表示 gallery 控件中所有的 buttonGallery 控件上同时显示显示名称和图标。  
子项列数 | 设置 gallery 控件最大显示多少列，即一行显示 buttonGallery 控件的个数，超过这个个数，gallery 控件中的 buttonGallery 控件将换行显示。  
子项图片位置 | 指定 gallery 控件中每一个 buttonGallery 控件上所显示的图片的对齐方式，该属性的值可以为left，right，top，bottom，分别表示图片的左对齐、右对齐、向上对齐，向下对齐。  
自定义属性 | 预留给用户自己设置相应的属性描述信息。  

