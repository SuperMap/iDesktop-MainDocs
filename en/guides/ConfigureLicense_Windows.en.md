---
id: ConfigureLicense_Windows
title: Local License Configuration
---
The official license only is supported on Windows platform for SuperMap GIS
9D(2019) products. We detail how to configure cloud license in this artical.

## Deploy SuperMap License Center

SuperMap License Center is used to manage all works related with license.
There are: Config License Info, Manage License, and checking the license
status and usage.

1\. Providing SuperMap License Center in zip package, you can get and deploy
the Zip package through the ways below.

  * ### Download zip package and deploy it

Address: [Technical Resource
Center](https://www.supermap.com/en/html/SuperMap_GIS_ProductPackages.html).
And then download the corresponding package as your needs. Unzip the Zip
package, and then running the Setup.bat file under the path product
directory\Tools to finalize the deployment of the SuperMap License Center.

  * ### Installation Online

Address: [Installation Online (http://product.supermap.com.cn/)
](http://product.supermap.com.cn), downloading LicenseCenter.exe for
installation SuperMap License Center(Windows 32 bit) online, and then double-
clicking LicenseCenter.exe. The license driver will be installed automatically
to complete the deployment for License Center, you don't need to execute the
file trial.bat.

2.After the deployment of SuperMap License Center finished, you can start it
by running SuperMap.LicenseCenter.exe under the product package directory. If
it is the first time that you start the tool, you can obtain 90 days' trial.

3\. Runs Updater.exe under the product package directory, SuperMap License
Center can be updated to get the newest SuperMap License Center.

## Configure License Info

### Configure File License

SuperMap supports for configuring file license. The users can get computer
information by SuperMap and submit it to SuperMap to get the offical license.
When obtaining the offical license successfully, updating it to the computer
to finalize the configuration. The detail steps are as follows:

  1. **Generating the computer information**

Clicking on the "Generate the file license information" in the home page of
SuperMap License Center and a file(*.c2v) will be produced under the specified
path.

![](img-en/LicenseCenter2.png)  
---  
  2. **Sumbit the file to SuperMap**

Submit the generated file(*.c2v) to SuperMap, according to your application,
SuperMap will generate an official license file *.v2c and return to you and
then you can configure your official license.

  3. **License Activate**

Fill the obtained official license *.v2c or trial license *.lic9d in File
location on the Update page of SuperMap License Center, and then click Update
button to activate the license.

![](img-en/LicenseCenter3.png)  
---  

### Configuring Hardware License

For the Window OS, both stand-alone key and the network key don need to
install the driver application for running SuperMap GIS 9D(2019) products, the
license server of the network key needs installing the license driver.

If an available license server is configured in the same network segment in
the current network environment, the license is automatically acquired and
configured without manual configuration. If there are available license
servers for other network segments in the network environment, follow the
steps below to configure the license:

  1. Run the SuperMap License Center and click on Settings.
  2. Enter the IP or name of license server in Quick Settings, and then click Apply button to activate it.
  3. The default port for connecting license is 1947, if it has been occupied, you can set unoccupied port in License Connection Port and click "Apply" to activate it.

## Managing license information

You can check license status, see the usage of license, update license, etc.
through SuperMap License Center.

### Check License Status

In License page of SuperMap License Center, the license information for
SuperMap GIS 9D(2019) products is shown. The organization of the information
is classified according to the product, and each of the following records
corresponds to a license module for the product.

![](img-en/LicenseCenter4.png)  
---  
  
  * **Name** :The name of license module
  * **Type** :Whether the license is official license or trail license
  * **Available time** :Days left for the license module to expire
  * **Usage** :The usage of module license
  * **Lend** :Shows the module number for lending.

### Check the connection

The Connection page display the detail information that all license module of
SuperMap GIS 9D(2019) products are currently used, one record corresponding to
one module.

The meaning that fields represent is:

  * **ID** : The ID value of the license module.
  * **Module** : Name of module.
  * **Address:** : Location of the license module, if it is originated from the local machine, then "Local" will be displayed, otherwise its IP address will be displayed.
  * **User** : The username and machine name of the computer where the license module exists. 
  * **Process** : Displays the usage process of the current license module.
  * **Time** : The connected time of the current license module.

### Update License

The "Update" page of SuperMap License Center is used for updating the license
You need update the license when the following situations happen:

  * When you get the official license(*.v2c), you need to update the license.
  * If you borrow the license(*.h2r) from other machines, you need update license.
  * When you need return the borrowed license, you need update license.

Detail operation

Fill the target file (*.v2c/*.h2r/*.r2h) in File location box then click
Update button.

### ![](img-en/note.png)Note

  1. When the hardware lock is inserted into the computer, the signal on the lock lights up indicating that the hardware lock is valid. In the Windows operating system, the hardware lock will be recognized as a USB device, can be run directly.
  2. For both hardware locks in a computer, the stand-alone lock will be used.
  3. You need to connect an hardware lock device to the virtual machine through related settings if you want to use the lock on virtual machine.
  4. It is suggested for those users whose computer systems are Windows XP or Windows Server 2003 that executing the file trial.bat under the path installation package > Tools > SuperMapLicenseCenter >Tools before license configuration.

