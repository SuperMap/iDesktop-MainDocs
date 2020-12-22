---
id: Properties_Color
title: 颜色按钮
---
**表格：颜色按钮属性**

属性 | 说明  
---|---  
帮助位置 | 用来指定帮助文件。帮助文件的路径是相对于帮助根目录的相对路径，默认从\WebHelp 文件夹下定位用户所需的帮助文件。  
绑定类 | 当颜色按钮的当前颜色发生变化时，会执行由该属性指定的内容。有三种情况：CtrlAction：可以指定一个继承 CtrlAction 类或者实现了ICtrlAction 接口的类来指定实现的功能；CodeFile：指定为代码文件，指定一个包含功能代码的文件来指定实现的功能；ScriptCode：指定为脚本模式，可以在脚本编译器中编写实现功能的代码段。  
标签 | 如果该属性不为空并且 ScreenTip 属性也不为空时，该属性的值将作为 ScreenTip 提示信息的标题显示。  
插件 | 包含此控件的所有插件名称，当控件只属于一个插件时，此值可修改。  
大小 | 该属性的值有两个，normal 表示显示常规图标效果，large 表示显示大图标效果。  
可见 | 指定颜色按钮控件是否可见，该属性的值为 true 时，表示可见，false 为不可见。  
控件状态 | 与颜色按钮控件绑定的继承 CtrlAction 类或者实现了 ICtrlAction 接口的类，即 onAction 属性所指定的类所在的程序集文件名称，可以是相对于可执行程序的相对路径，也可以是绝对路径，该属性的值必须正确设置。  
索引 | 用于排序 colorButton 控件，即当同一层次上存在多个 colorButton 控件时，每个颜色控件将通过该属性的值来确定其排列次序。  
提示内容 | 指定鼠标停留在颜色按钮控件上时所显示的提示信息，支持 SuperTip 模式，即 Microsoft Office 2007 缩略图式的提示风格。  
提示图片 | 鼠标停留在按钮控件上时将显示提示信息，该属性可以在提示信息中插入图片以辅助信息说明，该属性的值为图片的全路径。  
图片 | 颜色按钮控件上所显示的图片的全路径，可以是相对于可执行程序的相对路径，也可是绝对路径；同时为了支持内部资源的使用，也可以指定所使用的资源，格式为“SuperMap.Desktop.Properties.Resources.Bitmap”，并在assemblyName 属性所指定的程序集中进行该资源的查找。  
显示透明色按钮 | 指定颜色按钮控件是否透明，该属性的值为 true 时，表示显示透明色，false 为不显示透明色。  
样式 | 指定颜色按钮控件上面的显示内容，该属性的值有三个：text、image 和 textandimage，其中：text 表示只显示控件上的显示名称；image 表示只显示控件上的图标；textandimage 表示控件上同时显示显示名称和图标。  
自定义属性 | 预留给用户自己设置相应的属性描述信息。  