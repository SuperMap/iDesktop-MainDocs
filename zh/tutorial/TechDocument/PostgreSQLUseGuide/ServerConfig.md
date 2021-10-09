---
id: ServerConfig
title: 服务器配置
---
PostgreSQL 可以通过远程客户端直接连接本地服务器。出于安全考虑， PostgreSQL
数据库默认拒绝所有远程客户端连接，如果希望通过客户端远程登录服务器端，就需要设置认证配置文件（pg_hba.conf）和修改数据库配置文件（postgresql.conf），这两个文件均在数据库存储目录（安装目录\data）下。

[修改配置文件](setPGconf)  
[配置服务器](PGsqlconf)


