---
id: ModifyType_OraclePlus
title: Conversions of OraclePlus Field Types
---

<table class="normaltable">
	<thead>
		<tr class="normaltableTitle">
		<td width="15%">Source Field Type</td>
		<td width="15%">Target Field Type</td>
		<td width="10%">Supported or not</td>
		<td width="60%">Conversion Condition</td>
		</tr>
	</thead>
 <tr class="normaltablecontent1">
<tr class="normaltablecontent1">
  <td rowspan=11>16 bit integer</td>
  <td>32 bit integer</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Byte</td>
  <td>v</td>
  <td>If the source values fall into the range [0,255], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>32 bit integer</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>v</td>
  <td>If the source values fall into the range [0,255], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>64 bit integer</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td>Unlimited. If the source values are out of the range [-32768, 32767], the operation will convert them into the range.</td>
 </tr>
  <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>Unlimited. If the source values are out of the range [-2147483648, 2147483647], the operation will convert them into the range.</td>
 </tr>
  <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
  <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Byte</td>
  <td>v</td>
  <td>If the source values are out of the range [0,255], the operation will convert them into the range.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Double Precision</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
  <td>If the source values are out of the range of a single precision value, the operation will convert them into the range.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>Single Precision</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Text</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td>If the number of the source characters is smaller or equal to the length of character, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>Wide character</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td>If the number of the source characters is smaller or equal to the length of character, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Character type</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>Boolean</td>
  <td>16 bit integer</td>
  <td>v</td>
 <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
 <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Byte</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Date</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>Byte</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Binary</td>
  <td>16 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide Chart</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Byte</td>
  <td>x</td>
  <td></td>
 </tr>
 
</table>
  
###  Related Topics

[ Conversions of **PostGreSQL** Field Types](ModifyType_PostGreSQL)

[ Conversions of **SQLPlus** Field Types](ModifyType_SQLPlus)

[ Conversions of **MySQL** Field Types](ModifyType_MySQL)

[ Conversions of **PostGIS** Field Types](ModifyType_PostGIS)

[ Conversions of **DMPlus** Field Types](ModifyType_DMPlus)

