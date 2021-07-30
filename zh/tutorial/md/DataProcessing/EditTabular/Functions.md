---
id: Functions
title: 运算函数
---  

### 数学函数  

 <table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">数学函数</td>
<td>描述</td>
</tr>
</thead>
<tr class="normaltablecontent1">
<td colspan="2">
<p><font color="#FF0000">* </font>注意：下面函数中，Parameter 为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值。</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Abs </p><p><strong>Abs</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>对函数的参数取绝对值，返回正数或 0。</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Sqrt </p><p><strong>Sqrt</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>对函数的参数进行开方，返回数值（双精度）。</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Ln </p><p><strong>Ln</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>对函数的参数取自然对数，返回数值（双精度）。</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Log </p><p><strong>Log</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>对函数的参数取对数，返回数值（双精度）。</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Int </p><p><strong>Int</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>取函数的参数的整数部分，返回整数。</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectCenterX </p><p><strong>ObjectCenterX</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象的中心点 X 值，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的中心点 X 坐标值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectCenterY </p><p><strong>ObjectCenterY</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象的中心点 Y 值，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的中心点 Y 坐标值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectLeft </p><p><strong>ObjectLeft</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的左边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的左边界值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectRight </p><p><strong>ObjectRight</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的右边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的右边界值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectTop </p><p><strong>ObjectTop</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的上边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的上边界值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectBottom </p><p><strong>ObjectBottom</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的下边界，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的下边界值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectWidth </p><p><strong>ObjectWidth</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的宽度，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的宽度值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectHeight </p><p><strong>ObjectHeight</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>取几何对象范围的高度，返回数值（双精度）。如果待更新的字段为整数类型，则对返回值取整作为最终更新的值。</p>
<p>在指定的更新范围内，对某个待更新单元格所在的记录而言，取出该记录对应的几何对象的范围的高度值，返回的值就是待更新单元格更新后的值。</p>
</td>
</tr>
</table>   

### 文本处理函数
   
   <table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">运算函数 （文本处理函数）</td>
<td>描述</td>
</tr>
</thead>
<tr class="normaltablecontent2">
<td colspan="2">
<p><font color="#FF0000">* </font>注意：下面函数中，Parameter 为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值，otherParameter、otherParameter1、otherParameter2
 为函数运算中所需的其他参数，需要用户进行指定，即在“更新列”对话框中“运算函数”组合框右侧的两个文本框。</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Left</p><p><font style="font-style:italic">Parameter.</font><strong>Left</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>取字符串 Parameter 的左边 otherParameter 个字符串，如果源字符串的长度小于 otherParameter，保留原来的字符串，返回字符串。</p>
<p>（otherParameter 为任意一个正整数）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Right</p><p><font style="font-style:italic">Parameter.</font><strong>Right</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>取字符串 Parameter 的右边 otherParameter 个字符串，如果源字符串的长度小于 otherParameter，保留原来的字符串，返回字符串。</p>
<p>（otherParameter 为任意一个正整数）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Mid</p><p><font style="font-style:italic">Parameter.</font><strong>Mid</strong><font style="font-style:italic">(otherParameter1, otherParameter2)</font></p></td>
<td>
<p>取字符串 Parameter 从第 otherParameter1 个字符开始到第 otherParameter2 个字符结束的所有字符构成的字符串，如果源字符的长度小于 otherParameter1，保留原来的字符串；如果源字符串的长度小于 otherParameter2，则取第 otherParameter1 个字符以后的全部字符串，返回字符串。
 （注意：字符位置从 0 开始计算，每个汉字占用两个字符的位置。）
</p>
<p>（otherParameter1、otherParameter2 为任意正整数）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>UCase</p><p><font style="font-style:italic">Parameter.</font><strong>UCase</strong><font style="font-style:italic">()</font></p></td>
<td><p>把字符串 Parameter 全部大写，返回字符串。</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Lcase</p><p><font style="font-style:italic">Parameter.</font><strong>Lcase</strong><font style="font-style:italic">()</font></p></td>
<td><p>把字符串 Parameter 全部小写，返回字符串。</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Trim</p><p><font style="font-style:italic">Parameter.</font><strong>Trim</strong><font style="font-style:italic">()</font></p></td>
<td><p>移除字符串 Parameter 中的所有前导空格字符和尾部空格字符</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>TrimEnd</p><p><font style="font-style:italic">Parameter.</font><strong>TrimEnd</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>移除字符串 Parameter 中与 otherParameter 指定的一组字符的所有后导匹配项。</p>
<p>例如： Parameter ="efgabc"，otherParameter="abc"，经过 TrimEnd 运算时，其表达式自动调整为 <font style="font-style:italic">Parameter.</font><strong>TrimEnd</strong><font style="font-style:italic">('a','b','c')</font>，其运算范围的结果为"efg"。</p>
<p>（otherParameter 为指定的用于匹配的一组字符构成的字符串。）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>TrimStart</p><p><font style="font-style:italic">Parameter.</font><strong>TrimStart</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>移除字符串 Parameter 中与 otherParameter 指定的一组字符的所有后导匹配项。</p>
<p>例如： Parameter ="efgabc"，otherParameter="efg"，经过 TrimEnd 运算时，其表达式自动调整为 <font style="font-style:italic">Parameter.</font><strong>TrimStart</strong><font style="font-style:italic">('e','f','g')</font>，其运算的结果为"abc"。</p>
<p>（otherParameter 为指定的用于匹配的一组字符构成的字符串。）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>LRemove</p><p><font style="font-style:italic">Parameter.</font><strong>LRemove</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>移除字符串 Parameter 中左边的 otherParameter 个字符。</p>
<p>（otherParameter 为任意正整数）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>RRemove</p><p><font style="font-style:italic">Parameter.</font><strong>RRemove</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>移除字符串 Parameter 中右边边的 otherParameter 个字符。</p>
<p>（otherParameter 为任意正整数）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Replace</p><p><font style="font-style:italic">Parameter.</font><strong>Replace</strong><font style="font-style:italic">(otherParameter1, otherParameter2)</font></p></td>
<td>
<p>将字符串 Parameter 中与 otherParameter1 指定字符串所匹配的字符串替换为 otherParameter2 指定的字符串。</p>
<p>例如： Parameter ="efgabc"，otherParameter1="fga"，otherParameter2="jklmn"，经过 Replace 运算后，其运算的结果为"ejklmnbc"。</p>
<p>（otherParameter1、 otherParameter2 为指定任意字符串。）</p>
</td>
</tr>
</table>

### 时间处理函数
<table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">时间处理函数</td>
<td>描述</td>
</tr>
</thead>
<tr class="normaltablecontent2">
<td colspan="2">
<p><font color="#FF0000">* </font>注意：如果待更新字段不是 DataTime 类型，并且运算字段是 DataTime 类型，运算函数支持：DaysInMonth，Second，Minute，Hour，Day，Month，Year，DayOfYear，DayOfWeek。</p>
<p><font color="#FF0000">* </font>如果待更新字段是 DataTime 类型，并且运算字段也是 DataTime 类型，运算函数支持：AddDays，AddHours，AddMilliseconds，AddMinutes，AddMonths，AddSeconds，AddYears，Date，Now。</p>
<p><font color="#FF0000">* </font>Parameter 为函数操作的对象，在更新列功能中，其为指定的参与构建运算表达式的字段（运算字段）的值，并且，Parameter 为日期类型的值；otherParameter、otherParameter1、otherParameter2 为函数运算中所需的其他参数，需要用户进行指定，即在“更新列”对话框中“运算函数”组合框右侧的两个文本框。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddDays</p><p><font style="font-style:italic">Parameter.</font><strong>AddDays</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 天数添加到指定的 Parameter 日期中，返回添加天数后的日期值。如果 otherParameter 为负值，则结果日期早于 Parameter 日期值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddHours</p><p><font style="font-style:italic">Parameter.</font><strong>AddHours</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 小时数添加到指定的 Parameter 日期中，返回添加小时数后的日期值。如果 otherParameter 为负值，则结果时间早于 Parameter 时间值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddMilliseconds</p><p><font style="font-style:italic">Parameter.</font><strong>AddMilliseconds</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 毫秒数添加到指定的 Parameter 日期中，返回添加毫秒数后的日期值。如果 otherParameter 为负值，则结果时间早于 Parameter 时间值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddMinutes</p><p><font style="font-style:italic">Parameter.</font><strong>AddMinutes</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 分钟数添加到指定的 Parameter 日期中，返回添加分钟数后的日期值。如果 otherParameter 为负值，则结果时间早于 Parameter 时间值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddMonths</p><p><font style="font-style:italic">Parameter.</font><strong>AddMonths</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 月数添加到指定的 Parameter 日期中，返回添加月数后的日期值。如果 otherParameter 为负值，则结果日期早于 Parameter 日期值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddSeconds</p><p><font style="font-style:italic">Parameter.</font><strong>AddSeconds</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 秒数添加到指定的 Parameter 日期中，返回添加秒数后的日期值。如果 otherParameter 为负值，则结果时间早于 Parameter 时间值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddYears</p><p><font style="font-style:italic">Parameter.</font><strong>AddYears</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>将指定的 otherParameter 年数添加到指定的 Parameter 日期中，返回添加年数后的日期值。如果 otherParameter 为负值，则结果日期早于 Parameter 日期值。</p>
<p>（otherParameter 为任意整数。）</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Date</p><p><font style="font-style:italic">Parameter.</font><strong>Date</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的日期部分并返回，返回值的时间部分全部归零。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Now</p><p><font style="font-style:italic">Parameter.</font><strong>Now</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取系统当前日期和时间并返回。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>DaysInMonth</p><p><font style="font-style:italic">Parameter.</font><strong>DaysInMonth</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>返回日期类型的 Parameter 值中指定年和月中的天。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Second</p><p><font style="font-style:italic">Parameter.</font><strong>Second</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的秒钟部分并返回。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Minute</p><p><font style="font-style:italic">Parameter.</font><strong>Minute</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的分钟部分并返回。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Hour</p><p><font style="font-style:italic">Parameter.</font><strong>Hour</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的小时部分并返回。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Day</p><p><font style="font-style:italic">Parameter.</font><strong>Day</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值所表示的日期为该月中的第几天。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Month</p><p><font style="font-style:italic">Parameter.</font><strong>Month</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的月份部分并返回。</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Year</p><p><font style="font-style:italic">Parameter.</font><strong>Year</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>获取日期类型的 Parameter 值中的年份部分并返回。</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>DayOfYear</p><p><font style="font-style:italic">Parameter.</font><strong>DayOfYear</strong><font style="font-style:italic">()</font></p></td>
<td><p>返回日期类型的 Parameter 值中所表示的日期是该年中的第几天。</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>DayOfWeek</p><p><font style="font-style:italic">Parameter.</font><strong>DayOfWeek</strong><font style="font-style:italic">()</font></p></td>
<td><p>返回日期类型的 Parameter 值中所表示的日期是星期几。</p></td>
</tr>
</table>