## 环境

1. 下载安装 node

2. 安装 cnpm
```
$ npm install -g cnpm --registry=https://registry.npm.taobao.org
```

3. 下载安装git-bash

4. 生成密钥对
```
$ git config --global user.name "YouName"
$ git config --global user.email "YouEmail"

$ cd
$ ssh-keygen -t rsa
$ eval `ssh-agent -s`
$ ssh-add
```
> 步骤4命令必须在git-bash里执行


## 启动开发

1. 克隆代码
```
$ git clone git@github.com:heyaling/itrip.git
```

2. 安装依赖
```
$ cnpm install
```

3. 启动开发环境
```
$ npm start
```
## 生产（打包）
```
$ npm run build
```

## 其它
- 查看git配置
```
$ git config -l
```

- SSH测试连接
```
$ ssh -T git@github.com
```

##  MOCK数据配置： http://rapapi.org/org/index.do
##  MOCK主机（服务器）： http://rapapi.org/mockjsdata/19193
