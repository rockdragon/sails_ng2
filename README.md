# Sails.js + Angular2 demo

##环境设置

1) 安装Node.js全局包
```shell
npm install -g sails
npm install -g mocha
npm install -g typescript@next
npm install -g gulp
npm install -g grunt
```

2) 下载 各种包
```shell
npm install
cd server && npm install && cd ..
```

##运行步骤
1.1) 启动Redis服务器
```shell
sudo redis-server
```

1.2) 启动Web服务器
```shell
npm start
```
1.3) 启动开发服务器 (动态编译生成内容
```shell
npm run dev
```

2) 打开浏览器，定位到：
```
http://localhost:1337
```