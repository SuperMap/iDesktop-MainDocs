# 文件夹说明
## guides文件夹
入门。包含入门内容对应的中英文的md文件；中英文的目录树文件：nav.zh.yml,nav.en.yml。
## tutorial文件夹
教程。包含各个功能模块下对应的中英文md文件；中英文的目录树文件：nav.zh.yml,nav.en.yml。
# 如何使用
将本仓库中的所有内容，直接拷贝到content文件夹下。content文件夹，需要从[Products-Help-MainFrame](https://github.com/SuperMap/Products-Help-MainFrame "文档主框架")仓库下载。

一个完整的产品帮助文档，由以下三个仓库的内容组成：
- Products-Help-MainFrame 
- Products-Help-PublicContents
- 产品文档仓库内容：命名规则：产品名称-MainDocs

其中，Products-Help-PublicContents仓库中的所有内容，产品文档仓库中的所有内容，都需要拷贝到Products-Help-MainFrame仓库中的content文件夹下。


# 如何编译文档
## 需要的环境
### Node.js
Node.js的安装与配置，请参照Node.js的官网https://nodejs.org/en/
### Yarn
Yarn的安装，可参照https://www.yarnpkg.com/zh-Hans/
### 本地编译
文档运行所需要的环境安装完成之后，在源码目录下，打开cmd，先执行yarn，成功后，再执行 yarn dev -p 端口号，执行成功后，在本地浏览器中，输入 localhost:端口号，就能访问在线文档。

# 如何发布文档
使用nginx发布。
