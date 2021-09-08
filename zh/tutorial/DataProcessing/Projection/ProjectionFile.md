---
id: ProjectionFile
title: 载入投影信息  
---  
 SuperMap GIS桌面产品将用户自定义的投影坐标信息，保存为扩展名为.xml
的文件，该文件包括了定义坐标系所有的参数。浏览投影信息文件，可以用文本编辑器或者文字处理软件打开。在这个文件里，每行表示一个投影参数，每一对标签之间是参数的值。


  
 ### 保存投影设置 

设置完自定义坐标系参数，如果希望将这些参数保存下来以供以后设置其他数据源或者数据集的投影信息使用，可以在投影设置对话框的文件列表区域中，选择要保存的投影文件，右击鼠标，在弹出的菜单中选择“导出投影信息文件”项，即可将自定义的坐标系统保存为投影信息文件。

 SuperMap 目前支持将自定义的坐标系统保存为 SuperMap UGC 6.0和 SuperMap 6.0两种版本的 xml 文件。

用文本工具打开 XML 文件的例子

```
 
     <?xml version="1.0" encoding="GB2312"?

     <SuperMapProjection xmlns:sml="http://www.supermap.com/sml"
sml:Version="20090106"

       <sml:CoordinateReferenceSystem

               <sml:NameUTM Zone 55, Northern Hemisphere (WGS 1984)
</sml:Name

               <sml:Type32655</sml:Type

               <sml:UnitsMETER</sml:Units

               <sml:DistUnitsMETER</sml:DistUnits

               <sml:GeographicCoordinateSystem

                       <sml:NameGCS_WGS_1984</sml:Name

                       <sml:Type4326</sml:Type

                       <sml:UnitsDEGREE</sml:Units

                       <sml:DistUnitsMETER</sml:DistUnits

                       <sml:HorizontalGeodeticDatum

                               <sml:NameD_WGS_1984</sml:Name

                               <sml:Type6326</sml:Type

                               <sml:Spheroid

                                       <sml:NameWGS_1984</sml:Name

                                       <sml:Type7030</sml:Type


<sml:SemiMajorAxis6378137</sml:SemiMajorAxis


<sml:InverseFlattening298.257220427</sml:InverseFlattening

                               </sml:Spheroid

                       </sml:HorizontalGeodeticDatum

                       <sml:PrimeMeridian

                               <sml:NameGreenwich</sml:Name

                               <sml:Type8901</sml:Type

                               <sml:PrimeMeridian0</sml:PrimeMeridian

                       </sml:PrimeMeridian

               </sml:GeographicCoordinateSystem

               <sml:MapProjection

                       <sml:NameTransverse_Mercator</sml:Name

                       <sml:Type43006</sml:Type

               </sml:MapProjection

               <sml:Parameters

                       <sml:FalseEasting500000</sml:FalseEasting

                       <sml:FalseNorthing0</sml:FalseNorthing

                       <sml:CentralMeridian147</sml:CentralMeridian

                       <sml:StandardParallel10</sml:StandardParallel1

                       <sml:StandardParallel20</sml:StandardParallel2

                       <sml:ScaleFactor0.9996</sml:ScaleFactor

                       <sml:CentralParallel0</sml:CentralParallel

                       <sml:Azimuth0</sml:Azimuth

                       <sml:FirstPointLongitude0</sml:FirstPointLongitude

                       <sml:SecondPointLongitude0</sml:SecondPointLongitude

               </sml:Parameters

       </sml:CoordinateReferenceSystem

     </SuperMapProjection

  ```
  


 ### 载入投影坐标系
在设置坐标系的时候，如果希望使用保存的*.xml 的坐标系信息文件或者外部投影信息文件，可以通过载入投影配置文件或者导入投影信息的方式加载。

载入投影坐标系的方法

* **载入投影配置文件**

 单击对话框上方的 **载入投影配置文件** 按钮，在弹出的对话框中选择要打开的投影文件即可。只能载入 xml 格式的投影配置文件。

   * **导入投影信息**

 在“投影设置”对话框的功能设置区域中，单击“ **文件** ”菜单下拉箭头，在弹出的菜单中选择“ **导入投影信息**
”项，弹出“导入投影信息”对话框，选择要打开的投影文件即可。支持导入 shape 投影信息文件（*.shp;prj）、MapInfo
交换格式（*.mif）MapInfo TAB 文件（*.tab）、影像格式投影信息文件（*.tif;*.img;*.sit）、投影信息文件（*.xml）。
