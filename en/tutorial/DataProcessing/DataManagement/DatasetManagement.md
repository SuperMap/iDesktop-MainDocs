---
id: DatasetManagement
title: Dataset Management
---
### Copy Dataset

Copies and pastes one or more datasets to the target datasource.

The shortcut keys Ctrl C and Ctrl V are supported for data copying.

**Function Entrances**

Select one or more datasets (Shift or Ctrl). Follow the following two ways to copy datasets.

* Right click on the selected dataset and select Copy Dataset... to open the dialog box Copy Dataset.
* You can drag the dataset to the target data source node directly, and then click OK in the prompt dialog box Copy Dataset.

**Parameter Description**

Set all information necessary to each dataset in the dialog box Copy Dataset.
Each record corresponds with a dataset. Information in the dialog box includes
the target data source, the resulting dataset name, the resulting encoding
type, and so on.

Each record in the dialog box Copy Dataset corresponds with a dataset. The
following content explains the definition of each item:

* Source Dataset: The dataset type and name.
* Datasource: The datasource where the source datasource is located.
* Target Datasource: The datasource to which you want to copy the dataset. You can click the drop-down arrow in the Target Datasource column to select a datasource from the list of all open datasources in the current workspace.
* Target Dataset: The name of the new dataset. Though a default name is assigned, you can change it.
* Encode Type: the encoding of the new dataset, all the encoding types are listed in the dropdown list. For more information about data encoding, see: [Encoding Modes for Dataset Compression](EncodeType).
* Charset: By default, the charset of the result dataset is as the same to the source dataset. You can change the charset. See [Charset table](Charset). 
* **With SmID:** Set whether to keep original SmID field values.

Note

* The Copy Dataset... command is active when there is at least one dataset selected in the workspace.
* You can not copy datasets from different datasources once.
* When you copy a dataset from a UDB datasource to an Oracle or SQL Server data source, if there are text fields in the dataset, the text fields in the dataset will be converted to wide-character fields to ensure that the multilingual languages in the UDB can be properly stored.

### Delete Dataset

Deletes one or more datasets from the current workspace.

**Function Entrances**

Select one or more datasets (using Shift or Ctrl) in the Workspace Manager.

* Right click on the selected dataset and select Delete Dataset.
* Select the dataset and press the key Delete.

 Note

* The Delete command is active when there is at least one dataset selected in the workspace.
* You cannot delete datasets in different datasources at the same time.

### Close Dataset

Close one or more opened vector datasets.

**Function Entrance**

* Right click the selected dataset(s) and select Close Dataset. 

Before creating spatial index for a dataset, you need to close it.

### Sort Dataset

Sorts all datasets in a datasource.

Datasets in the same datasource can be sorted.

**Function Entrance**

Right click on a datasource and select Sort Datasets.

There are four ways to change the dataset sort:

* **Name** : Sorts all datasets in alphabetical order.
* **Type** : Sorts all datasets based on type.
* **Create Order** : Sorts all datasets based on their creation time.
* **Record Count** : Sorts all the datasets based on the number of objects in the dataset. 

### Rename Dataset

Modifies the name of a dataset.

**Function Entrances**

* Right click on a dataset and select Rename Dataset.
* Select a dataset and click F2. And then you can directly enter a name.

Please close the dataset first. Then modify its name. If the dataset is in
use, the application will give a prompt to close it.

The application will modify the names of layers in maps related to the renamed
datasets.

### Refresh Dataset

When multiple users cooperate in modification of the same dataset on different
devices, you can use **Refresh** to update the dataset.

**Function Entrances** : right click on your dataset and select **Refresh**.

### Save as

Makes a copy of the selected datasets in a new datasource which will be
created at the same time.

**Function Entrance**

Right click on your dataset and select Dataset Save As...

**Parameter Description**

* Target Dataset: enter the name of the resulting dataset.
* With SmID: whether to keep the original SmID value for each object. Selecting No means iDesktop will sort SmID again.

