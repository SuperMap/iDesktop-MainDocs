---
id: ConfigureLicense_Windows
title: License Configuration
---
The official license of SuperMap GIS 8C is effective by configuring on Wndows.
The detailed steps are:

## Deploy SuperMap License Center

SuperMap License Center is used to manage all the information related to
license in SuperMap GIS 8C, including: license configuration, license
management and viewing the detailed license status and usage in target
computer.

SuperMap License Center is provided in the form of a zip package. You can get
and deploy the zip package with any one of the following two method:

  * ### Download and Deploy a ZIP Package 

Open: [SuperMap Technical Resource Center](http://www.supermap.com/en),
download "SuperMapLicenseCenter.zip", unzip the zip package, and then run the
trial.bat file under Package directory\Tools to finish the deployment of
SuperMap License Center.

  * After deploying SuperMap License Center, you can startup License Center by running SuperMap.LicenseCenter.exe. When you first open the license center, it installs a default file license with 90-days. 

![](img/LicenseCenter1.png)  
---  
  
You can obtain the latest version of SuperMap License Center by running
Updater.exe.

## License Configuration

### Configure the file license

SuperMap License Center provides the software activation method to configure
the file license. User gets information about local machine through SuperMap
License Center, and then submit the information to SuperMap for accessing the
official license, and then the official license is updated into the local
machine so as to finish the deployment of the license.The procedures to
activate software as follows:

  1. **Generate information about the local machine**

Open the main page of SuperMap License Center, and then click "Generate
information about the local machine" to generate a file named *.c2v in the
specified path.

![](img/LicenseCenter2.png)  
---  
  2. **Submit information of the local machine to SuperMap**

Submit the *.c2v file into SuperMap, and then SuperMap will generate an
official license named *.v2c according to the *.c2v file and return it to you.

  3. **Make license taken effect**

Open the "Update" page at SuperMap License Center, specify the *. v2c file at
the "File Location", and then click "Update" to make it take effect.

![](img/LicenseCenter3.png)  
---  

### Configure the hardware license

For the Window OS, SuperMap GIS 8C products can be operated correctly, even if
the stand-alone key or the network key doesn't install the driver application;
the license server of the network key needs installing the license driver.

If a network segment in the current network environment has configured an
available license server, then the license will be automatically accessed and
configured; if other network segment has available license server, please
configure the license according to the following procedures:

  1. Open the "Settings" page of SuperMap License Center. 
  2. Input IP or name of the license server at "Terminal License", and then click "Apply".
  3. The default connection port is 1947. If this port is occupied, you can set other port in the license port connection, and click Apply.

## Manage the license information

Through SuperMap license center, you can view the license status, license
usage, and the update license,etc.

### Check License

The "License" page of SuperMap License Center displays the license information
about the SuperMap GIS 8C products. The organization of the information is
classified according to the products. Each record corresponds to a license
module of the product.

![](img/LicenseCenter4.png)  
---  
  
  * Name: The name of the module.
  * Type: Shows whether the license is a trail license or an official license.
  * Available Time: Shows the number of the remaining available days
  * Usage: Shows the current status of the module.
  * Emigration: Shows the number of emigrations.

### Check Connection

The "Connection" page of SuperMap License Center displays the detailed usage
information of license module of all the SuperMap GIS 8C products on the
target machine, in which each record corresponds to a license module of the
product.

![](img/LicenseCenter5.png)  
---  
  
The specific meaning of each field is as follows:

  * ID: The ID value of the license module.
  * Module: Name of the module.
  * Address: Location of the license module, if it is originated form the local machine, then "Local" will be displayed, otherwise its IP address will be displayed.
  * User:The username and computer name of the computer where the license module exists. 
  * Process: Displays the usage process of the current license module.
  * Time: The connected time of the current license module.

### Update License

The "Update License" page of the SuperMap License Center is used for updating
the license. You need to update the license in the following cases:

  * When you get the official license file (*.v2c) for the software activation; 
  * When you get the emigrated license from other machine (*.h2r); 
  * When you need to return the license obtained from other other machines, you need "Update License" to return it. 

Specific update operations:

Open the "Update License" page of SuperMap License Center, specify the target
file (* v2c / * h2r / * r2h) in the above three conditions to the "File
Location", and then click "Update".

### ![](img/note.png)Note

  1. iDesktop will start using the 8C license from the official version. After this version, if you don't configure the 8C license, then the 8C product will cannot be used any more.
  2. After you insert the hardware key into the computer, the hardware key is effective when the signal light is light up. On Windows, the hardware key can be ran directly. 
  3. If there are two types of licenses on a same computer, it will give priority to use the stand-alone key.
  4. If use the hardware key on the virtual machine, it needs to connect the hardware key to the virtual machine through related settings of virtual machine software
  5. For Windows XP or Windows Server 2003, please run the Tools\SuperMapLicenseCenter\Tools\Setup.vbs file.

