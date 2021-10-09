---
id: DataImportExport
title: DB2 数据的导入与导出
---
在 BD2 数据库中，我们可以通过命令进行数据的导入与导出。下面分别详细介绍这两种过程。

### 从数据库中导出数据

  1. 以 DB2 数据库用户登录操作系统。
  2. 新建一个空文件夹，用于存放从服务器数据库中导出的数据。
  3. 在“运行”处执行“db2cmd”命令，进入命令窗口，使用 cd 命令进入存放数据的文件夹（即上面新建的空文件夹）。
  4. 执行以下命令，导出建表语句： 
   
  ```db2look -d dbname -e -c -o *.sql -i username -w password```

  * **dbname** ：服务器数据库的名称。
  * ***.wql** ：导出的建表语句的 sql 文件。
  * **username** ：服务器数据库的用户名。
  * **password** ：服务器数据库的密码。
  5. 执行以下命令，导出数据表数据： 

             
`db2move dbname export>*.log -u username -p password`
    
    

  6. 命令执行后，数据就导出到新建的文件夹中。

### 导入数据到数据库中

  1. 以 DB2 数据库用户登录操作系统。
  2. 新建一个空文件夹，用于存放导入到服务器数据库中的数据。
  3. 在"运行"处执行"db2cmd"命令，进入命令窗口，使用 cd 命令进入存放数据的文件夹（即上面新建的空文件夹）。
  4. 执行以下命令，导入数据表： 



    
             
`db2 -tvf *.sql`
    
    

  5. 执行以下命令，导入数据表数据： 
       
  `db2move dbname import -u username -p password`

  6. 命令执行后，数据就导入到服务器的数据库中。

### 注意事项

关于授权。在对 DB2 数据库进行导出操作时，需要给相应的用户赋相应的权限，这里给出的是管理员 db2admin 的权限。

 相关主题

 [安装 DB2](DB2install)

 [DB2 的编目](DB2Catalog)

