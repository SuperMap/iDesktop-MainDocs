---
id: PixelFormat
title: Grid Dataset Pixel Format
---
In SuperMap, the grid data contains two parts: grid dataset (GRID) and image
dataset (IMAGE). The former is usually used in grid analysis and the later is
used to display or as maps. SuperMap provides multiple pixel formats because
of the complex forms. Users can select the appropriate pixel format to operate
according to the work actual needs.

Grid Dataset Pixel Format

Pixel Format | Format | Description  
---|---|---  
1 bit |   | The range is [0,1]. If there is no value, the default is 0. In some cases the default is 1 or -9999.  
4 bits | Bit | The range is [0,1]. If there is no value, the default is 0. In some cases the default is 15 or -9999.  
8 bits (single byte) | Byte | The range is [0,1]. If there is no value, the default is 0. In some cases the default is 255 or -9999.  
16 bits (double byte) | TByte | The range is [-2e+15, 2e+15-1]. If there is no value, the default is -9999.  
24 bits (three byte) |   | The range is [-2e+23, 2e+23-1]. If there is no value, the default is -9999.  
32 bits (Int) | Int | The range is [-2e+31, 2e+31-1]. If there is no value, the default is -9999.  
64 bits (Long) | Long | The range is [-2e+63, 2e+63-1]. If there is no value, the default is -9999.  
Single-precision float | Float | The range is [-2e+31, 2e+31-1]. If there is no value, the default is -9999.  
Double-precision float | Double | The range is [-2e+64, 2e+64-1]. If there is no value, the default is -9999.  
  
The Pixel Format of image dataset

Pixel Format | Format | Description  
---|---|---  
monochrome |   | It can represents black and white.  
16 | Bit | It can represents 16 colors. These colors are index color and can be defined in the color table.  
256 | Byte | It can represents 256 gradual colors. These colors are index color and can be defined in the color table.  
color | TByte | Each pixel is represented by 16 bits. Red, green and blue each is represented in 5 bits and 1 bit is not used.  
true color | RGB | Each pixel is represented by 24 bits. Red, green and blue each is represented in 8 bits  
Enhance true color | RGBA | Each pixel is represented by 32 bits. Red, green, blue and alpha each is represented in 8 bits and It doesn't support multiple images.  
  
