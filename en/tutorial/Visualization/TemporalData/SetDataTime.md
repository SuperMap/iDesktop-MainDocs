---
id: SetDataTime
title: Enable Time
---
To visualize your temporal data, you must enable time first and complete the settings of its time properties. Following contents describe the detail settings:

### Instructions

1. After adding your temporal data to your map, click **Maps** tab > **Browse** group > **Temporal Data** button to bring the map window to the data-playing mode. In the meanwhile, the player appears in the map window.
2. Click the **Set** button to open the **Play Settings** dialog box. 
3. **Manage the layer list** : First loading data layers, click the **Add** icon to open the **Select** dialog. Specify one or more layers and set time properties for each layer.
4. **Enable time on layers** : In the layer list, check the checkbox relative to the layer to enable time on it to visualize it. The layer relative to the checkbox which is not checked will not involve in the playback.
5. **Specify time field** : The temporal data can have either one time field to record each observation time or two time fields to record each observation period, and so you can set time properties in your demands. 
* If your temporal data has only one time field, both the Start Time Field and the End Time Field are set to the time field.
* If your temporal data has two time fields, the Start Time Field and the End Time Field are set to corresponding time fields.

**Note** : The type of time field must be date, if not, please refer to [Obtaining time fields](PrepareTemporalData).

6. **Data Time Step** : Temporal data was obtained by acquiring data as a certain time interval like per hour or per day.The data time step is used to specify the time interval which can present the acquisition time characteristics and be used to calculate the default time step interval of the playback. If there are multiple time-enabled layers with different acquisition time, the default time step interval is set to the minimum acquisition time interval.
7. And then set the required playing parameters, for details please refer to [Play Temporal Data](PlayTemporalData).

**Relate topics** :

 [An overview of temporal data](LayerPlay)

 [Prepare temporal data](PrepareTemporalData)

 [Play temporal data](PlayTemporalData)

