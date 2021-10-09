---
id: ModifyType_PostGreSQL
title: Conversions of PostGreSQL Field Types
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
  <td rowspan=11>16 bit integer</td>
  <td>32 bit integer</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>If the source values are out of the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
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
  <td>If the source values are out of the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>If the source values are out of the range [-2147483648, 2147483647], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>v</td>
  <td>If the source values fall into the range [0,255], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td rowspan=11>Double precision</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-2147483648, 2147483647], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-9223372036854775808, 9223372036854775807], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
  <td>If the source values are out of the range of a single precision value, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
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
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values fall into the range [0,255], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Binary</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td rowspan=11>Single precision</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-2147483648, 2147483647], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values are out of the range [-9223372036854775808, 9223372036854775807], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values fall into the range [0,255], the conversion will be successful. Otherwise, the conversion will be failed.</td>
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
  <td>Wide character</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
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
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
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
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
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
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
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
  <td>Wide character</td>
  <td>x</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
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

[ Conversions of **OraclePlus** Field
Types](ModifyType_OraclePlus)

[ Conversions of **SQLPlus** Field
Types](ModifyType_SQLPlus)

[ Conversions of **MySQL** Field
Types](ModifyType_MySQL)

[ Conversions of **PostGIS** Field
Types](ModifyType_PostGIS)

[ Conversions of **DMPlus** Field
Types](ModifyType_DMPlus)
