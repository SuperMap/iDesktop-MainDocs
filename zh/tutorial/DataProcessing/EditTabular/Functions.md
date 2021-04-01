---
id: Functions
title: 运算函数
---  

### 数学函数  

* 注意：下面函数中，Parameter 为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值。    

数学函数 | 描述  
---|---  
Abs </br>**Abs** (Parameter)|对函数的参数取绝对值，返回正数或 0。  
Sqrt</br>**Sqrt** (Parameter)|对函数的参数进行开方，返回数值（双精度）。  
Ln</br>**Ln** (Parameter)|对函数的参数取自然对数，返回数值（双精度）。  
Log</br>Log** (Parameter)|对函数的参数取对数，返回数值（双精度）。  
Int</br>**Int** (Parameter)|取函数的参数的整数部分，返回整数。  
ObjectCenterX</br>**ObjectCenterX** ()|取几何对象的中心点 X 值，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。 </br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的中心点 X 坐标值，返回的值就是待更新单元格更新后的值。  
ObjectCenterY</br>**ObjectCenterY** ()|取几何对象的中心点 Y 值，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的中心点 Y 坐标值，返回的值就是待更新单元格更新后的值。  
ObjectLeft</br>**ObjectLeft** ()|取几何对象范围的左边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的左边界值，返回的值就是待更新单元格更新后的值。  
ObjectRight</br>**ObjectRight** ()|取几何对象范围的右边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的右边界值，返回的值就是待更新单元格更新后的值。  
ObjectTop</br>**ObjectTop** ()|取几何对象范围的上边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的上边界值，返回的值就是待更新单元格更新后的值。  
ObjectBottom</br>**ObjectBottom** ()|取几何对象范围的下边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的下边界值，返回的值就是待更新单元格更新后的值。   
ObjectWidth</br>**ObjectWidth** ()



|



取几何对象范围的宽度，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。



</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的宽度值，返回的值就是待更新单元格更新后的值。  
 
ObjectHeight



</br>**ObjectHeight** ()



|



取几何对象范围的高度，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。



</br>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的高度值，返回的值就是待更新单元格更新后的值。  
  
### 文本处理函数
 
* 注意：下面函数中，Parameter
为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值，otherParameter、otherParameter1、otherParameter2
为函数运算中所需的其他参数，需要用户进行指定，即在“更新列”对话框中“运算函数”组合框右侧的两个文本框。   

运算函数 （文本处理函数） | 描述  
---|---  
 
 
Left



</br>Parameter. **Left** (otherParameter)



|



取字符串 Parameter 的左边 otherParameter 个字符串，如果源字符串的长度小于
otherParameter，保留原来的字符串，返回字符串。
（otherParameter 为任意一个正整数）  
 
Right



Parameter. **Right** (otherParameter)



|



取字符串 Parameter 的右边 otherParameter 个字符串，如果源字符串的长度小于
otherParameter，保留原来的字符串，返回字符串。



（otherParameter 为任意一个正整数）  
 
Mid



Parameter. **Mid** (otherParameter1, otherParameter2)



|



取字符串 Parameter 从第 otherParameter1 个字符开始到第 otherParameter2
个字符结束的所有字符构成的字符串，如果源字符的长度小于 otherParameter1，保留原来的字符串；如果源字符串的长度小于
otherParameter2，则取第 otherParameter1 个字符以后的全部字符串，返回字符串。 （注意：字符位置从 0
开始计算，每个汉字占用两个字符的位置。）



（otherParameter1、otherParameter2 为任意正整数）  
 
UCase



Parameter. **UCase** ()



|



把字符串 Parameter 全部大写，返回字符串。  
 
Lcase



Parameter. **Lcase** ()



|



把字符串 Parameter 全部小写，返回字符串。  
 
Trim



Parameter. **Trim** ()



|



移除字符串 Parameter 中的所有前导空格字符和尾部空格字符  
 
TrimEnd



Parameter. **TrimEnd** (otherParameter)



|



移除字符串 Parameter 中与 otherParameter 指定的一组字符的所有后导匹配项。



例如： Parameter ="efgabc"，otherParameter="abc"，经过 TrimEnd 运算时，其表达式自动调整为
Parameter. **TrimEnd** ('a','b','c')，其运算范围的结果为"efg"。



（otherParameter 为指定的用于匹配的一组字符构成的字符串。）  
 
TrimStart



Parameter. **TrimStart** (otherParameter)



|



移除字符串 Parameter 中与 otherParameter 指定的一组字符的所有后导匹配项。



例如： Parameter ="efgabc"，otherParameter="efg"，经过 TrimEnd 运算时，其表达式自动调整为
Parameter. **TrimStart** ('e','f','g')，其运算的结果为"abc"。



（otherParameter 为指定的用于匹配的一组字符构成的字符串。）  
 
LRemove



Parameter. **LRemove** (otherParameter)



|



移除字符串 Parameter 中左边的 otherParameter 个字符。



（otherParameter 为任意正整数）  
 
RRemove



Parameter. **RRemove** (otherParameter)



|



移除字符串 Parameter 中右边边的 otherParameter 个字符。



（otherParameter 为任意正整数）  
 
Replace



Parameter. **Replace** (otherParameter1, otherParameter2)



|



将字符串 Parameter 中与 otherParameter1 指定字符串所匹配的字符串替换为 otherParameter2 指定的字符串。



例如： Parameter ="efgabc"，otherParameter1="fga"，otherParameter2="jklmn"，经过
Replace 运算后，其运算的结果为"ejklmnbc"。



（otherParameter1、 otherParameter2 为指定任意字符串。）  
  
![](img/close.gif)时间处理函数

时间处理函数 | 描述  
---|---  
 
* 注意：如果待更新字段不是 DataTime 类型，并且运算字段是 DataTime
类型，运算函数支持：DaysInMonth，Second，Minute，Hour，Day，Month，Year，DayOfYear，DayOfWeek。



* 如果待更新字段是 DataTime 类型，并且运算字段也是 DataTime
类型，运算函数支持：AddDays，AddHours，AddMilliseconds，AddMinutes，AddMonths，AddSeconds，AddYears，Date，Now。



* Parameter 为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值，并且，Parameter
为日期类型的值；otherParameter、otherParameter1、otherParameter2
为函数运算中所需的其他参数，需要用户进行指定，即在“更新列”对话框中“运算函数”组合框右侧的两个文本框。  
 
AddDays



Parameter. **AddDays** (otherParameter)



|



将指定的 otherParameter 天数添加到指定的 Parameter 日期中，返回添加天数后的日期值。如果 otherParameter
为负值，则结果日期早于 Parameter 日期值。



（otherParameter 为任意整数。）  
 
AddHours



Parameter. **AddHours** (otherParameter)



|



将指定的 otherParameter 小时数添加到指定的 Parameter 日期中，返回添加小时数后的日期值。如果 otherParameter
为负值，则结果时间早于 Parameter 时间值。



（otherParameter 为任意整数。）  
 
AddMilliseconds



Parameter. **AddMilliseconds** (otherParameter)



|



将指定的 otherParameter 毫秒数添加到指定的 Parameter 日期中，返回添加毫秒数后的日期值。如果 otherParameter
为负值，则结果时间早于 Parameter 时间值。



（otherParameter 为任意整数。）  
 
AddMinutes



Parameter. **AddMinutes** (otherParameter)



|



将指定的 otherParameter 分钟数添加到指定的 Parameter 日期中，返回添加分钟数后的日期值。如果 otherParameter
为负值，则结果时间早于 Parameter 时间值。



（otherParameter 为任意整数。）  
 
AddMonths



Parameter. **AddMonths** (otherParameter)



|



将指定的 otherParameter 月数添加到指定的 Parameter 日期中，返回添加月数后的日期值。如果 otherParameter
为负值，则结果日期早于 Parameter 日期值。



（otherParameter 为任意整数。）  
 
AddSeconds



Parameter. **AddSeconds** (otherParameter)



|



将指定的 otherParameter 秒数添加到指定的 Parameter 日期中，返回添加秒数后的日期值。如果 otherParameter
为负值，则结果时间早于 Parameter 时间值。



（otherParameter 为任意整数。）  
 
AddYears



Parameter. **AddYears** (otherParameter)



|



将指定的 otherParameter 年数添加到指定的 Parameter 日期中，返回添加年数后的日期值。如果 otherParameter
为负值，则结果日期早于 Parameter 日期值。



（otherParameter 为任意整数。）  
 
Date



Parameter. **Date** ()



|



获取日期类型的 Parameter 值中的日期部分并返回，返回值的时间部分全部归零。  
 
Now



Parameter. **Now** ()



|



获取系统当前日期和时间并返回。  
 
DaysInMonth



Parameter. **DaysInMonth** ()



|



返回日期类型的 Parameter 值中指定年和月中的天。  
 
Second



Parameter. **Second** ()



|



获取日期类型的 Parameter 值中的秒钟部分并返回。  
 
Minute



Parameter. **Minute** ()



|



获取日期类型的 Parameter 值中的分钟部分并返回。  
 
Hour



Parameter. **Hour** ()



|



获取日期类型的 Parameter 值中的小时部分并返回。  
 
Day



Parameter. **Day** ()



|



获取日期类型的 Parameter 值所表示的日期为该月中的第几天。  
 
Month



Parameter. **Month** ()



|



获取日期类型的 Parameter 值中的月份部分并返回。  
 
Year



Parameter. **Year** ()



|



获取日期类型的 Parameter 值中的年份部分并返回。  
 
DayOfYear



Parameter. **DayOfYear** ()



|



返回日期类型的 Parameter 值中所表示的日期是该年中的第几天。  
 
DayOfWeek



Parameter. **DayOfWeek** ()



|



返回日期类型的 Parameter 值中所表示的日期是星期几。  
  
* * *

[](http://www.supermap.com)  
  
---

