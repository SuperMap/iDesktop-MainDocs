---
id: setParameter
title: 参数设置
---
PostgreSQL 的配置文件是数据库存储目录下的 postgresql.conf 文件。该文件下参数的设置对 PostgreSQL
数据库的性能影响极大，需要注意以下五个方面的参数配置。

  1. 共享缓冲区 

PostgreSQL 通过共享缓冲区和内核以及磁盘打交道，因此对该参数的设置应该尽可能大，从而能让更多的数据在共享缓冲区中。

共享缓冲区对应 postgresql.conf 中 shared_buffers 这个参数，默认值是1024KB，不得小于 128KB。通常设置为实际
RAM 的 10％，比如 50000(400M)。

  2. 工作内存 

EnterpriseDB
在执行排序操作时，会根据工作内存的大小决定是否将一个大的结果集拆分为几个与工作内存差不多大小的临时文件，显然拆分的结果降低了排序的速度。增加工作内存的大小有助于提高排序速度。

工作内存对应 postgresql.conf 中 work_mem 这个参数, 默认值是 1024KB，通常设置为实际 RAM 的
2%-4%，根据需要排序结果集的大小而定，比如 81920(80M)。

  3. 有效缓存 

有效缓存是 PostgreSQL 能够使用的最大缓存，这个数字对于独立的 PostgreSQL 服务器而言应该尽量大。

有效缓存对应 postgresql.conf 中 effective_cache_size 这个参数，通常 4G 的内存，可以设置为
3.5G(437500)。

  4. 维持工作内存 

维持工作内存只是在 CREATE INDEX、VACUUM 等时用到，因此使用频率不高，但是往往这些指令会消耗较多资源，因此应该尽快让这些指令快速执行完毕。

维持工作内存对应 postgresql.conf 中 maintence_work_mem 这个参数，通常需给 maintence_work_mem
大的内存，比如 512M(524288)。

  5. 最大连接数 

设置最大连接数的目的是“最大连接数 *工作内存”超出了实际内存大小。比如，如果将 work_mem 设置为实际内存的 2% 大小，则在极端情况下，如果有
50 个查询都有排序要求，而且都使用 2％ 的内存，则会导致 swap 的产生，系统性能就会大大降低。

最大连接数对应 postgresql.conf 中 max_connections 这个参数，默认值是100。


