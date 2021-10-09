---
id: Registration
title: An Overview of Registration
---
When there are distortions generated during the procedure of turning remote
sensing data into images or saving the papery map for a long time, and no
spatial position of the scanned papery map, the data registration is required
to correct data into the uniform geographical coordinate system or projection
system, and to eliminate the distortions. When analyzing multiple datasets at
the same time, you can convert their coordinate systems into the same one.

**Theory of registration**

Data registration is a procedure of correcting and transforming the spatial
position of your dataset. With a certain algorithm and control points, a new
dataset can be obtained whose spatial position is the same with that of the
registration dataset.

If you have the reference layer, you need to specify a registration point in
the registration layer, then specify a control point at the corresponding
position of reference layer, if you do not have the reference layer, you need
to enter coordinates of the control point, then the registration point will be
transformed to the right position according to a certain algorithm.

allows you to register one or more datasets meanwhile or you can quickly
register your data through a registration configuration file (*.drfu).

The basic steps are:

**[Step one: creating a New
Registration](NewRegistration)** : Specify the datasets you want to
correct and the reference dataset.

**[Step two: selecting the control
point](Poniting)** : Picking the control point and the reference point
that have the same spatial position and features. Or you can import a
registration file (*.drfu) including the control point information.

**[Step three: calculating
errors](CalculatError)** : Select an algorithm to calculate the
registration errors. Residual X, residual Y, root mean square error and root
mean square total error of control points will be calculated out to verify the
selection accuracy of control points.

**[Step four: executing
registration](Registrating)** : When the registration error falls into
the range of accuracy, you can perform the registration and you are allowed to
export registration information.

### Application:

The left picture below is a scan of Yantai map. Register the scanned map to
make its coordinate system is the same with that of the vector region datasets
of Yantai, then the result map can overlay with the vector dataset like the
right picture shows.

![](img/registeresult.png)  
 
  
The base map in the result is the scan of the Yantai map, and the green
polygons are the reference data (a region dataset on Yantai area)

