---
id: ModifyType_DMPlus
title: Conversions of DMPlus Field Types
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
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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
  <td>If the length of bytes is bigger than 2 (the number is bigger than 32767), the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
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
  <td>v</td>
  <td>If the number of the source characters is smaller or equal to the length of character, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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
  <td>If the source values don't fall into the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>If the values don't fall into the range [-2147483648, 2147483647], the conversion will be failed.</td>
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
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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
  <td>The converted values will retain the integer part of the source values only. If the source values don't fall into the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values don't fall into the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source values don't fall into the range [-9223372036854775808, 9223372036854775807], the conversion will be failed.</td>
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
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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
  <td>The converted values will retain the integer part of the source values only. If the source values don't fall into the range [-32768, 32767], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source value don't fall into [-8388608, 8388607], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>v</td>
  <td>The converted values will retain the integer part of the source values only. If the source value don't fall into [-9223372036854775808, 9223372036854775807], the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>If the source value is out of the range of a single precision value, the conversion will be failed.</td>
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
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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
  <td>v</td>
  <td>If the source values are integer and fall into the range [-32768, 32767], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-2147483648, 2147483647], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-9223372036854775808, 9223372036854775807], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a double precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a double precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td></td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Character type</td>
  <td>v</td>
  <td>If the number of the source characters is smaller or equal to the length of character, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Boolean</td>
  <td>v</td>
  <td>If the source values are integer and not negative, the conversion will be successful. 0 will be converted to False others to True.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>v</td>
  <td>If the field format is yy/mm/dd or yy/mm/dd hh:mm:ss, the conversion will be successful with - or space as separator. For example: 2020/11/20 14:16:05, 2020-11-20 14:16:05, or 2020 11 20 14:16:05.</td>
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
  <td rowspan=11>Wide character</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-32768, 32767], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>32 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-2147483648, 2147483647], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>64 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-9223372036854775808, 9223372036854775807], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a double precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a single precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
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
  <td>v</td>
  <td>If the source values are integer and not negative, the conversion will be successful. 0 will be converted to False others to True.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>If the field format is yy/mm/dd or yy/mm/dd hh:mm:ss, the conversion will be successful with - or space as separator like 2020/11/20 14:16:05, 2020-11-20 14:16:05, or 2020 11 20 14:16:05.</td>
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
  <td rowspan=11>Character type</td>
  <td>16 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-32768, 32767], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>32 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-2147483648, 2147483647], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>64 bit integer</td>
  <td>v</td>
  <td>If the source values are integer and fall into the range [-9223372036854775808, 9223372036854775807], the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Double precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a double precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Single precision</td>
  <td>v</td>
  <td>If the source values are numerical and fall into the range of a double precision value, the conversion will be successful. Otherwise, the conversion will be failed.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Text</td>
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
  <td>v</td>
  <td>If the source values are integer and not negative, the conversion will be successful. 0 will be converted to False others to True.</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Date</td>
  <td>v</td>
  <td>If the field format is yy/mm/dd or yy/mm/dd hh:mm:ss, the conversion will be successful with - or space as separator like 2020/11/20 14:16:05, 2020-11-20 14:16:05, or 2020 11 20 14:16:05.</td>
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
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Double precision</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Single precision</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Text</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Wide character</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Character type</td>
  <td>v</td>
  <td>True will be converted to 1 False to 0</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>True will be converted to 1900/1/2 False to 1900/1/1</td>
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
  <td>v</td>
  <td>Converted to Text, the order and display of each date will change together. For instance, 2020/11/19 14:30:10 will be converted to 11 19 2020 2:30PM</td>
 </tr>
 <tr class="normaltablecontent2">
  <td>Wide character</td>
  <td>v</td>
  <td>Converted to Text, the order and display of each date will change together. For instance, 2020/11/19 14:30:10 will be converted to 11 19 2020 2:30PM</td>
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
  <td>Unlimited</td>
 </tr>
 <tr class="normaltablecontent1">
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
  <td>v</td>
  <td>If the source value is 0, the target value will be False. If the source value is not 0, the target value will be True. If the source value is empty, the target value will be empty.</td>
 </tr>
 <tr class="normaltablecontent1">
  <td>Date</td>
  <td>v</td>
  <td>Calculate the target date from January 1, 1900 plus the source values in days. For instance, the given source value is 36, and so the target date is 1900/2/6.</td>
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

[ Conversions of **PostGreSQL** Field Types](ModifyType_PostGreSQL)

[ Conversions of **OraclePlus** Field Types](ModifyType_OraclePlus.htm)

[ Conversions of **SQLPlus** Field Types](ModifyType_SQLPlus)

[ Conversions of **MySQL** Field Types](ModifyType_MySQL)

[ Conversions of **PostGIS** Field Types](ModifyType_PostGIS)
