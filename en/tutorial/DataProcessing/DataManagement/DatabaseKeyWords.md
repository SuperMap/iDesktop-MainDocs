---
id: DatabaseKeyWords
title: Preserved Keywords List of Database
---  


When using SuperMap to create tables (attribute tables, datasets) and fields,
there is limitation of the dataset name and the field name:

  * Composed by letters, numerals and underlines, and can only start with a letter.
  * The length of the name can't not only be 0, but also exceed 30 bytes (namely 30 English letters or 15 chinese characters);
  * The name can't include invalidation letters (namely the letters except number, letter, Chinese character, underline); 
  * Can't use the reserved fields.

Oracle, SQL Server and other databases have some preserved keywords, the name
of the table and field created in SuperMap can't use these keywords. Here,
lists the preserved keywords of the database to be convenient for customers.
In addition to the following keywords, Oracle will use the name initialing
with "SYS_" for the objects creating automatically by system, so Oracle will
prevent customers from using the name initialing with "SYS_", otherwise can
cause confliction.

**UDB Keywords**

ABORT | CAST | DETACH | HAVING | LIKE | QUERY | TO  
---|---|---|---|---|---|---  
ACTION | CHECK | DISTINCT | IF | LIMIT | RAISE | THEN  
ADD | COLLATE | DROP | IGNORE | LINES | REFERENCES | TRANSACTION  
AFTER | COLUMN | EACH | IMMEDIATE | MATCH | REGEXP | TRIGGER  
ALL | COMMIT | ELSE | IN | NATURAL | REINDEX | UNION  
ALTER | CONFLICT | END | INDEX | NO | RELEASE | UNIQUE  
ANALYZE | CONSTRAINT | ESCAPE | INDEXED | NOT | RENAME | UPDATE  
AND | CREATE | EXCEPT | INITIALLY | NOTNULL | REPLACE | USING  
AS | CROSS | EXCLUSIVE | INNER | NULL | RESTRICT | VACUUM  
ASC | CURRENT_DATE | EXISTS | INSERT | OF | RIGHT | VALUES  
ATTACH | CURRENT_TIME | EXPLAIN | INSTEAD | OFFSET | ROLLBACK | VIEW  
AUTOINCREMENT | CURRENT_TIMESTAMP | FAIL | INTERSECT | ON | ROW | VIRTUAL  
BEFORE | DATABASE | FOR | INTO | OR | SAVEPOINT | WHEN  
BEGIN | DEFAULT | FOREIGN | IS | ORDER | SELECT | WHERE  
BETWEEN | DEFERRABLE | FROM | ISNULL | OUTER | SET |  
BY | DEFERRED | FULL | JOIN | PLAN | TABLE |  
CASCADE | DELETE | GLOB | KEY | PRAGMA | TEMP |  
CASE | DESC | GROUP | LEFT | PRIMARY | TEMPORARY |  
  
**Oracle Keywords**

ABORT | COMMIT | EXIT | LIMITED | OTHERS | ROWNUM | TEXT  
---|---|---|---|---|---|---  
ACCEPT | COMPRESS | FALSE | LINES | OUT | ROWS | THEN  
ACCESS | CONNECT | FETCH | LOCK | PACKAGE | ROWTYPE | TO  
ADD | CONSTANT | FILE | LONG | PARTITION | RUN | TRIGGER  
ALL | CRASH | FLOAT | LOOP | PCTFREE | SAVEPOINT | TRUE  
ALTER | CREATE | FOR | MAX | PLS_INTEGER | SCHEMA | TYPE  
AND | CURRENT | FROM | MAXEXTENTS | POSITIVE | SELECT | UID  
ANY | CURRVAL | MINUS | MIN | POSITIVEN | SEPARATE | UNION  
ARRAY | CURSOR | FUNCTION | MLSLABEL | PRAGMA | SESSION | UNIQUE  
ARRAYLEN | DATABASE | GENERIC | MOD | PRIOR | SET | UPDATE  
AS | DATA_BASE | GOTO | MODE | PRIVATE | SHARE | USE  
ASC | DATE | GRANT | MODIFY | PRIVILEGES | SIZE | USER  
ASSERT | DBA | GROUP | NATUAL | PROCEDURE | SMALLINT | VALIDATE  
ASSIGN | DEBUGOFF | HAVING | NATURALN | PUBLIC | SPACE | VALUES  
AT | DEBUGON | IDENTIFIED | NEW | RAISE | SQL | VARCHAR  
AUDIT | DECLARE | IF | NEXTVAL | RANGE | SQLCODE | VARCHAR2  
BETWEEN | DECIMAL | IMMEDIATE | NOAUDIT | RAW | SQLERRM | VARIANCE  
BINARY_INTEGER | DEFAULT | IN | NOCOMPRESS | REAL | START | VIEW  
BODY | DEFINITION | INCREMENT | NOT | RECORD | STATE | VIEWS  
BOOLEAN | DELAY | INDEX | NOWAIT | REF | STATEMENT | WHEN  
BY | DELETE | INDEXES | NULL | RELEASE | STTDEV | WHENEVER  
CASE | DESC | INDICATOR | NUMBER | REMR | SUBTYPE | WHERE  
CHAR | DIGITS | INITIAL | NUMBER_BASE | RENAME | SUCCESSFUL | WHILE  
CHAR_BASE | DISPOSE | INSERT | OF | RESOURCE | SUM | WITH  
CHECK | DISTINCT | INTEGER | OFFLINE | RETURN | SYNONYM | WORK  
CLOSE | DO | INTERFACE | ON | REVERSE | SYSDATE | WRITE  
CLUSTER | DROP | INTERSECT | ONLINE | REVOKE | TABAUTH | XOR  
CLUSTERS | ELSE | INTO | OPEN | ROLLBACK | TABLE |  
COLAUTH | ELSIF | IS | OPTION | ROW | TABLES |  
COLUMN | EXCLUSIVE | LEVEL | OR | ROWID | TASK |  
COMMENT | EXISTS | LIKE | ORDER | ROWLABEL | TERMINATE |  
  


