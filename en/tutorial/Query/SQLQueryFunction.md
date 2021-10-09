---
id: SQLQueryFunction
title: Description on Building SQL Query Functions
---
### Introduction

By constructing SQL query expressions, you can find out specific data from
existed data. An expression consists of some operators and common functions.
Common function includes aggregation functions, mathematical functions,
character functions and data functions. For datasources in different engines,
applicable functions are different. Following contents detail supportive
situations.

### Operators

The operators include mathematical, comparison, logical and some other operators.

<table class="normaltable" width="90%">
<thead>
<tr class="normaltableTitle">
<td rowspan="2" width="10%">Mathematical Function</td>
<td rowspan="2" width="30%">Description</td>
<td colspan="5" width="25%">Supportive Engines</td>
<td rowspan="2" width="25%">Example</td>
</tr>
<tr class="normaltableTitle">
	<td>UDB/UDBX</td>
	<td>OraclePlus</td>
	<td>SQLPlus</td>
	<td>PostgreSQL</td>
	<td>DB2</td>
</tr>
</thead>           
<tr class="normaltablecontent2">
<td>Abs</td>
<td>Returns the absolute value of the expression. Applicable to fields (or expressions) in Short, Long, Single, or Double type.</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Abs(World.SmID)</td>
</tr>
<tr class="normaltablecontent1">
<td>Acos</td>
<td>Returns the arccosine of the expression as an angle in radians ranging from -&pi; to &pi;. Applicable to fields or expressions in Single or Double type. The value of the expression ranges from -1 to 1. Not applicable to UDB datasources.</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Acos(data)</td>
</tr>
<tr class="normaltablecontent2">
<td>Asin</td>
<td>Returns the arcsine of the expression as an angle in radians ranging from -&pi; to &pi;. Applicable to fields or expressions in Single or Double type. The value of the expression ranges from -1 to 1. Not applicable to UDB datasources.</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Asin(data)</td>
</tr>
<tr class="normaltablecontent1">
<td>Atan</td>
<td>Returns the arctangent of the expression as an angle in radians. Function name is Atn for a SDB datasource.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Atan(data)</td>
</tr>
<tr class="normaltablecontent2">
<td>Ceiling</td>
<td>Returns the smallest integer greater than or equal to the expression. Applicable to fields (or expressions) in Short, Long, Single, or Double type. For Oracle datasources, the function is CEIL. Not applicable to UDB datasources.</td>

<td>v</td>
<td>v(CEIL)</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Ceiling(data)</td>
</tr>
<tr class="normaltablecontent1">
<td>Cos</td>
<td>Returns the cosine of the expression as an angle in radians.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Cos(World.COLOR_MAP)</td>
</tr>
<tr class="normaltablecontent2">
<td>cot</td>
<td>Returns the cotangent of the expression as  an angle in radians.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Cot(angle)</td>
</tr>
<!--tr class="normaltablecontent1">
<td>CBool</td>
<td>Converts an expression to Boolean. If expression is zero, False is returned; otherwise, True is returned. If expression can't be interpreted as a numeric value, a run-time error occurs. Applicable to SDB datasources.</td>
<td>CBool(World.SmID)</td>
</tr>
<tr class="normaltablecontent2">
<td>CDate</td>
<td>Converts an expression to Date.</td>
<td>SDB</td>
<td>CDate(&quot;February 12 1969 4:35:47 PM&quot;)</td>
</tr>
<tr class="normaltablecontent1">
<td>CDbl</td>
<td>Converts an expression to Double.</td>
<td>SDB</td>
<td>CDbl(World.COLOR_MAP)</td>
</tr>
<tr class="normaltablecontent2">
<td>CInt</td>
<td>Converts an expression to Int.</td>
<td>SDB</td>
<td>CInt(World.SmArea)</td>
</tr>
<tr class="normaltablecontent1">
<td>CLng</td>
<td>Converts an expression to Long.</td>
<td>SDB</td>
<td>CLng(World.SmArea)</td>
</tr>
<tr class="normaltablecontent2">
<td>CSng</td>
<td>Converts an expression to Single.</td>
<td>SDB</td>
<td>CSng(World.SmArea)</td>
</tr>
<tr class="normaltablecontent1">
<td>CStr</td>
<td>Converts an expression to String.</td>
<td>SDB</td>
<td>CStr(World.GETDATE)</td>
</tr>
<tr class="normaltablecontent2">
<td>Int</td>
<td>Converts a specified number to an int. If the number is negative, Int returns the first negative integer less than or equal to number. For example, Int converts -8.4 to -9.</td>
<td>SDB</td>
<td>Int(World.SmArea)</td>
</tr>
<tr class="normaltablecontent1">
<td>Fix</td>
<td>Converts a specified number to an int. If the number is negative, Fix returns the first negative integer greater than or equal to number. For example, Fix converts -8.4 to -8.</td>
<td>SDB</td>
<td>Fix(World.SmArea)</td>
</tr-->
<tr class="normaltablecontent2">
<td>Degrees</td>
<td>Converts from radians to degrees.</td>
<!--<td>UDB/UDBX/SQLPlus/PostgreSQL/DB2</td>-->
<td>v</td>
<td></td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Degrees(angle)</td>
</tr>
<tr class="normaltablecontent1">
<td>Exp</td>
<td>Returns a Double value containing e (the base of natural logarithms) raised to the specified power.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Exp(data)</td>
</tr>
<tr class="normaltablecontent2">
<td>Floor</td>
<td>Rounds the specified number down and returns the largest number that is less than or equal to the specified number.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Floor(23.45), Floor(-123.45)</td>
</tr>
<tr class="normaltablecontent1">
<td>Log</td>
<td>Returns the natural logarithm of the specified expression. Not applicable to UDB datasources. For Oracle datasources, the function is Log(n, m), representing the logarithm of m with base n.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Log(World.SmID), Log(n,m)</td>
</tr>
<tr class="normaltablecontent2">
<td>PI</td>
<td>The Pi function returns the mathematical constant called pi.</td>
<!--<td>UDB/UDBX/SQLPlus/PostgreSQL</td>-->
<td>v</td>
<td></td>
<td>v</td>
<td>v</td>
<td></td>
<td>PI()*World.SMID as Test</td>
</tr>
<tr class="normaltablecontent1">
<td>Power</td>
<td>Returns the value of parameter 1 to the power of parameter 2. Not applicable to SDB datasources. Applicable to Oracle datasources.</td>
<!--<td>UDB/UDBX/OraclePlus/PostgreSQL</td>-->
<td>v</td>
<td>v</td>
<td></td>
<td>v</td>
<td></td>
<td>Power(expression,2) as Area</td>
</tr>
<tr class="normaltablecontent2">
<td>Radians</td>
<td>Converts degrees to radians. Applicable to SQL datasources.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Radians(angle) as NewAngle</td>
</tr>
<tr class="normaltablecontent1">
<td>Rand</td>
<td>Returns a float value less than 1, but greater than or equal to zero.</td>
<!--<td>SQL/DB2</td>-->
<td></td>
<td></td>
<td></td>
<td>v</td>
<td>v</td>
<td>Rand()</td>
</tr>
<tr  class="normaltablecontent2">
<td>Round </td>
<td>Returns a number rounded to a specified number of decimal places. Parameter 1 and 2 respectively specify the number to round and the decimal places. The number nearest the specified value will be returned if you didn't specify the decimal places.</td>
<!--<td>UDB/UDBX/DB/OraclePlus/PostgreSQL/DB2</td>-->
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Round(World.SmArea,2), Round(World.SmArea)</td>
</tr>
<tr class="normaltablecontent1">
<td>Sign</td>
<td>Returns -1, 0, or +1 when the expression value is negative, zero, or positive respectively.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Sign(data)</td>
</tr>
<tr class="normaltablecontent2">
<td>Sin</td>
<td>Returns the sine of the expression value as an angle in radians.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Sin(World.COLOR_MAP)</td>
</tr>
<tr class="normaltablecontent1">
<td>Square</td>
<td>Returns the square of the expression value. </td>
<!--<td>SQL/PostgreSQL/DB2</td>-->
<td></td>
<td></td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Square(Production)</td>
</tr>
<tr class="normaltablecontent2">
<td>Sqrt</td>
<td>Returns the square root of the expression value. For SDB datasources, the function is Sqrt. </td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Sqrt(Production)</td>
</tr>
<tr class="normaltablecontent1">
<td>Tan</td>
<td>Returns the tangent of the expression value.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Tan(World.COLOR_MAP)</td>
</tr>
</table>
</div>

<h3>String Functions</h3>
<p>String functions are used to perform many types of manipulation on string data. </p>
<table class="normaltable" width="90%">
<thead>
<tr class="normaltableTitle">
<td rowspan="2" width="10%">String Function</td>
<td rowspan="2" width="30%">Description</td>
<td colspan="5" width="25%">Supportive Engines</td>
<td rowspan="2" width="25%">Example</td>
</tr>
<tr class="normaltableTitle">
	<td>UDB/UDBX</td>
	<td>OraclePlus</td>
	<td>SQLPlus</td>
	<td>PostgreSQL</td>
	<td>DB2</td>
</tr>
</thead>   
<tr class="normaltablecontent2">
<td>Ascii</td>
<td>Returns the ASCII code value of the leftmost character of a character expression. For a SDB datasource, function name is asc. Not applicable to UDB datasources.
<br>Syntax: ASCII(character_expression)character_expression is an expression of the type text.</td>
<!--<td>OraclePlus/SQLPlus/DB2</td>-->
<td></td>
<td>v</td>
<td>v</td>
<td></td>
<td>v</td>
<td>Ascii(String)</td>
</tr>
<tr class="normaltablecontent1">
<td>Char</td>
<td>Converts an int ASCII to a character. For SDB datasource, function name is Chr.
<br>Syntax: Char (integer_expression) integer_expression is an integer expression with value ranging from 0 to  255. NULL will be returned if the integer expression is not in this range.</td>
<!--<td>OraclePlus/SQLPlus/PostgreSQL/DB2</td>-->
<td></td>
<td>v(Chr)</td>
<td>v</td>
<td>v(Chr)</td>
<td>v(Chr)</td>
<td>Char(data)</td>
</tr>
<tr class="normaltablecontent2">
<td>InStr</td>
<td>Returns the location of a substring in a string.  
<br>Syntax: InSt([start_location],expr1,expr2) expr1 is the string to search. expr2 is the substring to search for in expr1. start_location is the position in string1 where the search will start. This argument is optional. If omitted, it defaults to 1.
</td>
<!--<td>Oracle</td>-->
<td></td>
<td>v</td>
<td></td>
<td></td>
<td></td>
<td>InStr(1,World.CAPITAL,&quot;jing&quot;), InStr(World.CAPITAL,&quot;jing&quot;)</td>
</tr>
<!--tr class="normaltablecontent1">
<td>Left</td>
<td>Returns a string containing a specified number of characters from the left side of a string. <br \>Syntax: Left( char_expression ,integer_expression)
char_expression is the string from which the leftmost characters are returned. integer_expression indicates how many characters to return.
</td>
<td>SDB</td>
<td>Left(World.CAPITAL,2)</td>
</tr-->
<tr class="normaltablecontent2">
<td>Length</td>
<td>Returns the length of the specified string. If the specified string1 is NULL, then the function returns NULL.  
<br/>Syntax: Length(string_expression)  string_expression is the string to return the length for. For SDB/SQL datasources, the function is Len(string_expression).</td>

<td>v</td>
<td>v</td>
<td>v(Len)</td>
<td>v</td>
<td>v</td>
<td>Lenth(World.CAPITAL)</td>
</tr>
<tr class="normaltablecontent1">
<td>Lower</td>
<td>Converts all letters in the specified string to lowercase. For SDB datasources, the function is LCase.  
<br/>Syntax: Lower (character_expression) character_expression is the string to convert to lowercase.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Lower(World.CAPITAL) as capital</td>
</tr>
<tr class="normaltablecontent2">
<td>Ltrim</td>
<td>Returns a string containing a copy of a specified string with no leading spaces.  
<br/>Syntax: Ltrim (character_expression) character_exprssion is the string to trim.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Ltrim(World.CAPITAL)</td> 
</tr>
<tr class="normaltablecontent1">
<td>Replace</td>
<td>Replaces a sequence of characters in a string with another set of characters. 
<br/Syntax: Replace('string_expr1','string_expr2','string_expr3') string_expr1 is the string to replace a sequence of characters with another set of characters. string_expr2 is the string that will be searched for in string_expr1. string_expr3 is the string to replace string_expr2.</td>
<!--<td>UDB/UDBX/Oracle</td>-->
<td>v</td>
<td>v</td>
<td></td>
<td></td>
<td></td>
</tr>
<tr class="normaltablecontent2">
<td>Reverse</td>
<td>Returns string converted in the reverse order.  
<br \>Syntax: Reverse&gt;( character_expression) character_expression is the string to reverse.</td>
<!--<td>OraclePlus/SQLPlus</td>-->
<td></td>
<td>v</td>
<td>v</td>
<td></td>
<td></td>
<td>Reverse(World.CAPITAL) as NewName</td>
</tr>
<!--tr class="normaltablecontent1">
<td>Right</td>
<td>Returns a string containing a specified number of characters from the right side of a string.
<br \>Syntax: Right (char_expression, integer_expression) char_expression is the string from which the rightmost characters are returned.  integer_expression indicates how many characters to return. If it is negative, an error will be returned.</td>
<td>SDB</td>
<td>Right(World.CAPITAL,2)</td>
</tr-->
<tr class="normaltablecontent2">
<td>Rtrim</td>
<td>Returns a string containing a copy of a specified string with no trailing spaces.  <br \>Syntax: Rtrim(character_expression) 
character_expression is any valid string expression.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Rtrim(World.CAPITAL)</td>
</tr>
<tr class="normaltablecontent1">
<td>Soundex</td>
<td>Returns a phonetic representation (the way it sounds) of a string. <br \>Syntax: Soundex (character_expression) 
character_expression the string whose phonetic value will be returned.</td>
<!--<td>OraclePlus/SQLPlus</td>-->
<td></td>
<td>v</td>
<td>v</td>
<td></td>
<td></td>
<td>Soundex(word)</td>
</tr>
<tr class="normaltablecontent2">
<td>Space</td>
<td>Returns a string consisting of the specified number of spaces. If it is negative, NULL will be returned.</td>
<!--<td>SQLPlus</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td></td>
<td>World.COUNTRY+Space(3)+World.CAPITAL as Countries_CAPITAL</td>
</tr>
<tr class="normaltablecontent1">
<td>Substr</td>
<td>Returns a part of text characters expression.
<br>Syntax: Substr(expression, start, length). expression is the expression of the string type that does not contain an aggregate function; start is an integer that specifies the starting position of the substring; length is an integer that specifies the length of the substring (the number of characters or bytes to return).
</td>
<!--<td>UDB/UDBX/OraclePlus/SQL</td>-->
<td>v</td>
<td>v(not for text)</td>
<td>v</td>
<td>v(or Substring)</td>
<td></td>
<td>Substr ( string, position, 1 )
</td>
</tr>
<tr class="normaltablecontent2">
<td>Unicode</td>
<td>According to the Unicode standard, return the integer value of first character from the entered expression.
<br>Syntax: Unicode('ncharacter_expression').</td>
<!--<td>SQLPlus</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td></td>
<td>Unicode(World.CAPITAL) as Unicode</td>
</tr>
<tr class="normaltablecontent1">
<td>Upper</td>
<td>Converts all letters in the specified string to uppercase. For SDB datasources, the function is UCase.  
<br \>Syntax: Upper(character_expression) character_expression is any valid string expression.</td>

<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>v</td>
<td>Upper(World.CAPITAL) </td>
</tr>
</table>
</div>

<h3>Date Functions</h3>
<p>Date functions are used to get information on date and time. These scalar functions perform an operation on a date and time input value and return a string, numeric, or date and time value. The date functions can be used anywhere in the expression. </p>

<table class="normaltable" width="90%">
<thead>
<tr class="normaltableTitle">
<td rowspan="2" width="15%">Date Function</td>
<td rowspan="2" width="40%">Description</td>
<td colspan="5" width="20%">Supportive Engines</td>
<td rowspan="2" width="25%">Example</td>
</tr>
<tr class="normaltableTitle">
	<td>UDB/UDBX</td>
	<td>OraclePlus</td>
	<td>SQLPlus</td>
	<td>PostgreSQL</td>
	<td>DB2</td>
</tr>
</thead> 
<!--tr class="normaltablecontent2">
<td>DateAdd</td>
<td>Returns a new date value based on adding an interval to the specified date. Applicable to date fields or expressions of SDB datasources. <br/> Syntax: DateAdd( datepart, number, date)
datepart is the parameter that specifies on which part of the date to return a new value. &quot;y&quot; is the year, &quot;m&quot; is the month and &quot;d&quot; is the day by default. number is the value used to increment datepart. date is an expression that returns a date or smalldatetime value, or a character string in date type.</td>
<td>SDB</td>
<td>DateAdd(&quot;yyyy&quot;,2,World.GETDATE) as EndDate</td>
</tr>
<tr class="normaltablecontent1">
<td>DateDiff</td>
<td>Returns the number of date and time boundaries crossed between two specified dates. 
<br \> Syntax: DateDiff( datepart,startdate,enddate) datepart is the parameter that specifies on which part of the date to calculate the difference. startdate is the beginning date. enddate is the ending date. The result would be negative if the enddate is earlier than the startdate.</td>
<td>SDB</td>
<td>DateDiff ( &quot;yyyy&quot;, Start, End ) as DiffMonth, Datediff('yyyy','2010-02-25',World.GETDATE)</td>
</tr>
<tr class="normaltablecontent2">
<td>DatePart</td>
<td>Returns an integer representing the specified datepart of the specified date.<br \>Syntax: DatePart( datepart ,date))
datepart is the parameter that specifies the part of the date to return. &quot;y&quot; is the year, &quot;m&quot; is the month and &quot;d&quot; is the day by default. date is a filed or expression of date type.</td>
<td>SDB</td>
<td>Datepart('d',World.GETDATE) as day</td>
</tr-->
<tr class="normaltablecontent1">
<td>Day</td>
<td>Returns an integer representing the day datepart of the specified date. It equals to DatePartt( &quot;d&quot; ,date). Applicable to date fields or expressions of SQL/SDB datasources.  <br \>Syntax: DatePart( datepart ,date))
date is an expression of type date.</td>
<!--<td>SQLPlus/DB2</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td>v</td>
<td>Day(World.GETDATE) as Day</td>
</tr>
<tr class="normaltablecontent2">
<td>GetDate</td>
<td>Gets current data and time in standard SQL Syntax.</td>
<!--<td>SQLPlus</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td></td>
<td>GetDate()</td>
</tr>
<tr class="normaltablecontent1">
<td>GetUtcDate</td>
<td>Returns the date value representing the current UTC time (Universal Time Coordinate or Greenwich Mean Time). The current UTC time is derived from the current local time and the time zone setting in the operating system of the computer on which SQL Server is running.</td>
<!--<td>SQLPlus</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td></td>
<td>GetUtcDate()</td>
</tr>
<tr class="normaltablecontent2">
<td>Month</td>
<td>Returns an integer that represents the month part of a specified date. It equals to DatePart( &quot;m&quot; , date). Applicable to date fields or expressions of SQL/SDB datasources.  <br \>Syntax: Month( date) date is a field or expression of date type.</td>
<!--<td>SQLPlus/DB2</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td>v</td>
<td>Month(World.GETDATE) as Month</td>
</tr>
<tr class="normaltablecontent1">
<td>Year</td>
<td>Returns an integer that represents the year part of a specified date. It equals to DatePartdate. Applicable to date fields or expressions of SQL/SDB datasources.  <br \>Syntax: Year(date)
date is a date field or expression.</td>
<!--<td>SQLPlus/DB2</td>-->
<td></td>
<td></td>
<td>v</td>
<td></td>
<td>v</td>
<td>Year(World.GETDATE) as Year</td>
</tr>
<tr class="normaltablecontent2">
<td>to_date</td>
<td>For a string date, if you want to use it to construct a query condition, its format is fixed and you need to input it to the function to_data().
<br>Format: to_date(2018-5-11 14:28:00).</td>
<!--<td>UDB/UDBX</td>-->
<td></td>
<td>v</td>
<td></td>
<td></td>
<td></td>
<td>Province_R.DataDate > to_date(2019-11-07 00:00:00) </td>
</tr>
</table>
<p><strong>Tab: datepart values</strong></p>
<table class="normaltable" width="13.5%">
<thead>
<tr class="normaltableTitle">
<td> Value</td>
<td >Description</td>
</tr>
</thead> 
<tr class="normaltablecontent2">
<td>yyyy</td>
<td>Year</td>
</tr>
<tr class="normaltablecontent1">
<td>q</td>
<td>Quarter</td>
</tr>
<tr class="normaltablecontent2">
<td>m</td>
<td>Month</td>
</tr>
<tr class="normaltablecontent1">
<td>y</td>
<td>Day of the year</td>
</tr>
<tr class="normaltablecontent2">
<td>d</td>
<td>Day</td>
</tr>
<tr class="normaltablecontent1">
<td>w</td>
<td>Weekday</td>
</tr>
<tr class="normaltablecontent2">
<td>ww</td>
<td>Week</td>
</tr>
<tr class="normaltablecontent1">
<td>h</td>
<td>Hour</td>
</tr>
<tr class="normaltablecontent2">
<td>n</td>
<td>Minute</td>
</tr>
<tr class="normaltablecontent1">
<td>s</td>
<td>Second</td>
</tr>
</table>
###  Related Topics

 [SQL Query Using Group By](SQLQuery_Group)

 [Constructing SQL Query Statements](SQLQuery_Expression)

 [SQL Query Attribute Example](SQLQuery_Example)

 [SQL Relation Query Example](SQLQuery_Related)

