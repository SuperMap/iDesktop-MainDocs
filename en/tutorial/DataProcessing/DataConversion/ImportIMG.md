---
id: ImportIMG
title: Importing Image
---
### Introduction

The application supports several kinds of image formats, like IMG, TIF, BMP, JPG, GIF, SIT, etc.

### Functional entrances

* Start tab > Data Processing group > Import Data.
* In the context menu of a datasource or a dataset, select Import Dataset...
* Toolbox > Data Import > Image Bitmap File. (iDesktopX)

### Basic Steps

The following content introduces how to import IMG and TIF files.

1. In the dialog box Import Data, click the icon button Add to pop up the dialog box Open where you can locate the file you want to import and open it. 
2. On the specific description of target datasource, result dataset, encode type, import mode, and source file information, please refer to [Public Parameters for Importing Data](ParameterSettingDia).
3. **Result setting:**
* Dataset Type: Set the imported data type. There are two types of data types: Image and Grid.
4. **Conversion Parameters:**
* Import Mode: Used to set the band import mode of the image data when import multiband image data, such as Erdas Image file (*.img) and TIFF file (*.tif). The system provide three modes: multi-band, multiple bands and single band. 
  1. Multiple Bands: To import a multiple single-band images into a multi-band dataset.
  2. Multi-band: Import multi-band as a multi-band dataset.
  3. Single band: Import multi-band data as a single band dataset. Note that only support import a 8-bit multi-band data as a 24-bit or 32-bit single band dataset.
* Create image pyramid: to create an image pyramid for the imported image data.
* Reference File: When import image file (only support tif file), you can import *.tfw coordinate reference file. For the introduction of coordinate file, please refer to [Geographic Coordinate Reference File](ImageReferFiles).
5. After setting the above parameters, click the "Import" button in the dialog box, you can import the specified data as image data.

### Note

1. When importing a single band raster data, the import mode none and append is the same, that is when importing a data with the same name of an existing dataset, the system will modify the name of the data automatically.
2. When importing RAW file, the result type can only be image dataset.
3. When you import *.img, *.tif and *.tiff data, the result dataset will have the same coordinate system with that of the source file; when you import *.bmp, *.png, *.jpg and *.gif data, the result dataset will have the same coordinate system with that of the datasource
4. When importing a *.SIT image, you can set the imported band-mode, including "Single Bands" and "Multi-band".

### Note

Since image data in img format does not support SphereMercator projection, if data using this projection method is imported to the img format, the projection information will be lost. It is recommended to set the projection when use it again.

