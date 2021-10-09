---
id: Functions
title: Functions  
---  

### Mathematical Functions

<table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">Function</td>
<td>Description</td>
</tr>
</thead>
<tr class="normaltablecontent1">
<td colspan="2">
<p><font color="#FF0000">*</font> Note: Parameter is the value of the field involved in the construction of the expression.</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Abs </p><p><strong>Abs</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>Returns the absolute value of a number.</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Sqrt </p><p><strong>Sqrt</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>Returns the square root of a number (Double).</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Ln </p><p><strong>Ln</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>Returns the natural logarithm of a number (Double).</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Log </p><p><strong>Log</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>Returns the logarithm of a number (Double).</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Int </p><p><strong>Int</strong><font style="font-style:italic">(Parameter)</font></p></td>
<td><p>Returns the integer (whole number) portion of a number.</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectCenterX </p><p><strong>ObjectCenterX</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the x coordinate of the geometric object's centroid (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the x coordinate of the centroid of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectCenterY </p><p><strong>ObjectCenterY</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the y coordinate of the geometric object's centroid (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the y coordinate of the centroid of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectLeft </p><p><strong>ObjectLeft</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the x coordinate of the geometric object's left border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the x coordinate of the left border of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectRight </p><p><strong>ObjectRight</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the x coordinate of the geometric object's right border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the x coordinate of the right border of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectTop </p><p><strong>ObjectTop</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the y coordinate of the geometric object's top border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the y coordinate of the top border of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectBottom </p><p><strong>ObjectBottom</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the y coordinate of the geometric object's bottom border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the y coordinate of the bottom border of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>ObjectWidth </p><p><strong>ObjectWidth</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the width of the geometric object (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the width of the geometric object corresponding to the cell.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>ObjectHeight </p><p><strong>ObjectHeight</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the height of the geometric object (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field.</p>
<p>For a cell within the update range, its updated value is the height of the geometric object corresponding to the cell.</p>
</td>
</tr>
</table>

  
### String Functions

<table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">Function</td>
<td>Description</td>
</tr>
</thead>
<tr class="normaltablecontent2">
<td colspan="2">
<p><font color="#FF0000">*</font> Note: Parameter is the value of the field involved in the construction of the expression. otherParameter, otherParameter1, and otherParameter2 are the values specified in the text boxes to the right of the Operator combo box in the Update Field dialog box.</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Left</p><p><font style="font-style:italic">Parameter.</font><strong>Left</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a string containing a specified number of characters from the left side of a string. If the specified number otherParameter is greater than the total length of the string, the original string will be returned.</p>
<p>otherParameter  is a positive integer.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Right</p><p><font style="font-style:italic">Parameter.</font><strong>Right</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a string containing a specified number of characters from the left side of a string. If the specified number otherParameter is greater than the total length of the string, the original string will be returned.</p>
<p>otherParameter  is a positive integer.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Mid</p><p><font style="font-style:italic">Parameter.</font><strong>Mid</strong><font style="font-style:italic">(otherParameter1, otherParameter2)</font></p></td>
<td>
<p>Returns a substring of a string based on the starting and ending positions. If the starting position otherParameter1 is greater than the length of the string, the original string will be returned.  If the ending position otherParameter2 is greater than the length of the string, the substring from the starting position will be returned.  The position starts at 0.
</p>
<p>otherParameter1 and otherParameter2 are positive integers.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>UCase</p><p><font style="font-style:italic">Parameter.</font><strong>UCase</strong><font style="font-style:italic">()</font></p></td>
<td><p>Converts all letters in the specified string to uppercase.</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>Lcase</p><p><font style="font-style:italic">Parameter.</font><strong>Lcase</strong><font style="font-style:italic">()</font></p></td>
<td><p>Converts all letters in the specified string to lowercase.</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>Trim</p><p><font style="font-style:italic">Parameter.</font><strong>Trim</strong><font style="font-style:italic">()</font></p></td>
<td><p>Returns a string containing a copy of a specified string with no leading and trailing spaces.</p></td>
</tr>
<tr class="normaltablecontent1">
<td><p>TrimEnd</p><p><font style="font-style:italic">Parameter.</font><strong>TrimEnd</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Removes the specified characters from the end of the string.</p>
<p>For example, when Parameter =&quot;efgabc&quot; and otherParameter=&quot;abc&quot;, <font style="font-style:italic">Parameter.</font><strong>TrimEnd</strong><font style="font-style:italic">('a','b','c')</font>=&quot;eft&quot;.</p>
<p>otherParameter is the specified characters.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>TrimStart</p><p><font style="font-style:italic">Parameter.</font><strong>TrimStart</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Removes the specified characters from the start of the string.</p>
<p>For example, when Parameter =&quot;efgabc&quot; and otherParameter=&quot;efg&quot;, <font style="font-style:italic">Parameter.</font><strong>TrimEnd</strong><font style="font-style:italic">('a','b','c')</font>=&quot;abc&quot;.</p>
<p>otherParameter is the specified characters.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>LRemove</p><p><font style="font-style:italic">Parameter.</font><strong>LRemove</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Removes a number of characters from the start of a string.</p>
<p>otherParameter is a positive integer indicating the number of characters you want to remove.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>RRemove</p><p><font style="font-style:italic">Parameter.</font><strong>RRemove</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Removes a number of characters from the end of a string.</p>
<p>otherParameter is a positive integer indicating the number of characters you want to remove.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Replace</p><p><font style="font-style:italic">Parameter.</font><strong>Replace</strong><font style="font-style:italic">(otherParameter1, otherParameter2)</font></p></td>
<td>
<p>Replaces a sequence of characters in a string with another set of characters.</p>
<p>Parameter is the string to replace a sequence of characters with another set of characters. otherParameter1 is the string that will be searched for in Parameter. otherParameter2 is the string to replace otherParameter1.</p>
<p></p>
</td>
</tr>
</table>

  
### DateTime Functions
<table class="normaltable">
<thead>
<tr class="normaltableTitle">
<td width="30%">Function</td>
<td>Description</td>
</tr>
</thead>
<tr class="normaltablecontent2">
<td colspan="2">
<p><font color="#FF0000">*</font> Note: If the operation field is of Date type and the field to update is not, the supported functions include: DaysInMonth, Second, Minute, Hour, Day, Month, Year, DayOfYear, DayOfWeek.</p>
<p><font color="#FF0000">*</font> Note: If the field to update is of Date type and the operation field is not, the supported functions include: AddDays, AddHours, AddMilliseconds, AddMinutes, AddMonths, AddSeconds, AddYears, Date, Now.</p>
<p><font color="#FF0000">*</font> Note: Parameter is the value of the field involved in the construction of the expression and is in Date type. otherParameter, otherParameter1, and otherParameter2 are the values specified in the text boxes to the right of the Operator combo box in the Update Fiedl dialog box.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddDays</p><p><font style="font-style:italic">Parameter.</font><strong>AddDays</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of days to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddHours</p><p><font style="font-style:italic">Parameter.</font><strong>AddHours</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of hours to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddMilliseconds</p><p><font style="font-style:italic">Parameter.</font><strong>AddMilliseconds</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of milliseconds to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddMinutes</p><p><font style="font-style:italic">Parameter.</font><strong>AddMinutes</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of minutes to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddMonths</p><p><font style="font-style:italic">Parameter.</font><strong>AddMonths</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of months to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>AddSeconds</p><p><font style="font-style:italic">Parameter.</font><strong>AddSeconds</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of seconds to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>AddYears</p><p><font style="font-style:italic">Parameter.</font><strong>AddYears</strong><font style="font-style:italic">(otherParameter)</font></p></td>
<td>
<p>Returns a new date value based on adding a number of years to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter.</p>
<p>otherParameter is an integer.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Date</p><p><font style="font-style:italic">Parameter.</font><strong>Date</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the date part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Now</p><p><font style="font-style:italic">Parameter.</font><strong>Now</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Gets current data and time.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>DaysInMonth</p><p><font style="font-style:italic">Parameter.</font><strong>DaysInMonth</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the number of days in the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Second</p><p><font style="font-style:italic">Parameter.</font><strong>Second</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the second part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Minute</p><p><font style="font-style:italic">Parameter.</font><strong>Minute</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the minute part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Hour</p><p><font style="font-style:italic">Parameter.</font><strong>Hour</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the hour part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Day</p><p><font style="font-style:italic">Parameter.</font><strong>Day</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the day part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>Month</p><p><font style="font-style:italic">Parameter.</font><strong>Month</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the month part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent2">
<td><p>Year</p><p><font style="font-style:italic">Parameter.</font><strong>Year</strong><font style="font-style:italic">()</font></p></td>
<td>
<p>Returns the year part of the specified date.</p>
</td>
</tr>
<tr class="normaltablecontent1">
<td><p>DayOfYear</p><p><font style="font-style:italic">Parameter.</font><strong>DayOfYear</strong><font style="font-style:italic">()</font></p></td>
<td><p>Returns an integer indicating which day of the year the specified date is in.</p></td>
</tr>
<tr class="normaltablecontent2">
<td><p>DayOfWeek</p><p><font style="font-style:italic">Parameter.</font><strong>DayOfWeek</strong><font style="font-style:italic">()</font></p></td>
<td><p>Returns an integer indicating which day of the week the specified date is in.</p></td>
</tr>
</table>
