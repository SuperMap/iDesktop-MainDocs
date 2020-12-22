---
id: Functions
title: Functions
---  


![](img-en/close.gif)Mathematical Functions
* Note: Parameter is the value of the field involved in the construction of the expression.  

Function | Description  
---|---  
Abs **Abs** (Parameter) | Returns the absolute value of a number.  
Sqrt **Sqrt** (Parameter)|Returns the square root of a number (Double).  
Ln **Ln** (Parameter)|Returns the natural logarithm of a number (Double).  
Log **Log** (Parameter)|Returns the logarithm of a number (Double).  
Int **Int** (Parameter)|Returns the integer (whole number) portion of a number.  
ObjectCenterX **ObjectCenterX** ()|Returns the x coordinate of the geometric object's centroid (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the x coordinate of the centroid of the geometric object corresponding to the cell.  
ObjectCenterY **ObjectCenterY** ()|Returns the y coordinate of the geometric object's centroid (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the y coordinate of the centroid of the geometric object corresponding to the cell.  
ObjectLeft **ObjectLeft** ()| Returns the x coordinate of the geometric object's left border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the x coordinate of the left border of the geometric object corresponding to the cell.  
ObjectRight **ObjectRight** () | Returns the x coordinate of the geometric object's right border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the x coordinate of the right border of the geometric object corresponding to the cell.  
ObjectTop **ObjectTop** () |Returns the y coordinate of the geometric object's top border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the y coordinate of the top border of the geometric object corresponding to the cell.  
ObjectBottom **ObjectBottom** ()| Returns the y coordinate of the geometric object's bottom border (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the y coordinate of the bottom border of the geometric object corresponding to the cell.  
ObjectWidth **ObjectWidth** () | Returns the width of the geometric object (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the width of the geometric object corresponding to the cell.  
ObjectHeight **ObjectHeight** () | Returns the height of the geometric object (Double). If the field to update is in integer, the Int function will be applied to a value before assigning the value to a cell in the field. For a cell within the update range, its updated value is the height of the geometric object corresponding to the cell.  
  
![](img-en/close.gif)String Functions

* Note: Parameter is the value of the field involved in the construction of the expression. otherParameter, otherParameter1, and otherParameter2 are the values specified in the text boxes to the right of the Operator combo box in the Update Fiedl dialog box.  

Function | Description  
---|---  
Left Parameter. **Left** (otherParameter) | Returns a string containing a specified number of characters from the left side of a string. If the specified number otherParameter is greater than the otal length of the string, the original string will be returned. otherParameter is a positive integer.  
Right Parameter. **Right** (otherParameter) | Returns a string containing a specified number of characters from the left side of a string. If the specified number otherParameter is greater than the total length of the string, the original string will be returned. otherParameter is a positive integer.  
Mid Parameter. **Mid** (otherParameter1, otherParameter2) | Returns a substring of a string based on the starting and ending positions. If the starting position otherParameter1 is greater than the length of the string, the original string will be returned. If the ending position otherParameter2 is greater than the length of the string, the substring from the starting position will be returned. The position starts at 0. otherParameter1 and otherParameter2 are positive integers.  
UCase Parameter. **UCase** () | Converts all letters in the specified string to uppercase.  
Lcase Parameter. **Lcase** () | Converts all letters in the specified string to lowercase.  
Trim Parameter. **Trim** () | Returns a string containing a copy of a specified string with no leading and trailing spaces.  
TrimEnd Parameter. **TrimEnd** (otherParameter) | Removes the specified characters from the end of the string. For example, when Parameter ="efgabc" and otherParameter="abc", Parameter. **TrimEnd** ('a','b','c')="eft". otherParameter is the specified characters.  
TrimStart Parameter. **TrimStart** (otherParameter)| Removes the specified characters from the start of the string. For example, when Parameter ="efgabc" and otherParameter="efg", Parameter. **TrimEnd** ('a','b','c')="abc". otherParameter is the specified characters.  
LRemove Parameter. **LRemove** (otherParameter) | Removes a number of characters from the start of a string. otherParameter is a positive integer indicating the number of characters you want to remove.  
RRemove Parameter. **RRemove** (otherParameter) | Removes a number of characters from the end of a string. otherParameter is a positive integer indicating the number of characters you want to remove.  
Replace Parameter. **Replace** (otherParameter1, otherParameter2) | Replaces a sequence of characters in a string with another set of characters. Parameter is the string to replace a sequence of characters with another set of characters. otherParameter1 is the string that will be searched for in Parameter. otherParameter2 is the string to replace otherParameter1.  
  
![](img-en/close.gif)DateTime Functions

Note: 
- If the operation field is of Date type and the field to update is not, the supported functions include: DaysInMonth, Second, Minute, Hour, Day, Month, Year, DayOfYear, DayOfWeek.
- If the field to update is of Date type and the operation field is not, the supported functions include: AddDays, AddHours, AddMilliseconds, AddMinutes, AddMonths, AddSeconds, AddYears, Date, Now.
- Parameter is the value of the field involved in the construction of the expression and is in Date type. otherParameter, otherParameter1, and otherParameter2 are the values specified in the text boxes to the right of the Operator combo box in the Update Fiedl dialog box.  

Function | Description  
---|---  
AddDays Parameter. **AddDays** (otherParameter) | Returns a new date value based on adding a number of days to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddHours Parameter. **AddHours** (otherParameter) | Returns a new date value based on adding a number of hours to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddMilliseconds Parameter. **AddMilliseconds** (otherParameter) | Returns a new date value based on adding a number of milliseconds to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddMinutes Parameter. **AddMinutes** (otherParameter) | Returns a new date value based on adding a number of minutes to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddMonths Parameter. **AddMonths** (otherParameter) | Returns a new date value based on adding a number of months to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddSeconds Parameter. **AddSeconds** (otherParameter)|Returns a new date value based on adding a number of seconds to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
AddYears Parameter. **AddYears** (otherParameter) | Returns a new date value based on adding a number of years to the specified date. If the interval otherParameter is negative, the result date would be earlier than the original date Parameter. otherParameter is an integer.  
Date Parameter. **Date** () | Returns the date part of the specified date.  
Now Parameter. **Now** () | Gets current data and time.  
DaysInMonth Parameter. **DaysInMonth** () | Returns the number of days in the specified date.  
Second Parameter. **Second** () | Returns the second part of the specified date.  
Minute Parameter. **Minute** () | Returns the minute part of the specified date.  
Hour Parameter. **Hour** () | Returns the hour part of the specified date.  
Day Parameter. **Day** () | Returns the day part of the specified date.  
Month Parameter. **Month** () | Returns the month part of the specified date.  
Year Parameter. **Year** () | Returns the year part of the specified date.   
DayOfYear Parameter. **DayOfYear** () | Returns an integer indicating which day of the year the specified date is in.  
DayOfWeek Parameter. **DayOfWeek** () | Returns an integer indicating which day of the week the specified date is in.  


