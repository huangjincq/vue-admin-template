# vue-admin-template

> vue-admin-template

## [在线访问地址](https://huangjincq.github.io/vue-admin-template/dist/)
由于本项目挂载github上，https协议不支持数据请求，登录无法成功，建议下载到本地后运行查看

## 概述
[github地址](https://github.com/huangjincq/vue-admin-template)
[个人博客地址](https://huangjincq.github.io/)
此模板内涵盖：
1. 登录权限控制
2. 路由跳转拦截
3. 网络请求拦截
4. 侧边导航动态生成
5. 动态换肤
6. 结合Element-ui 2.0版本以上

等等包含后台系统常用功能，方便快速开发，极易扩展的一个模版，基于此模版，您只需要修改少量的代码，就能进行开发。

## 文档地址
[从0用Vue2.5和Elemnt-ui2搭建一个后台模版（1.搭建框架）](http://www.jianshu.com/p/cbec52341bd9)

[从0用Vue2.5和Elemnt-ui2搭建一个后台模版（2.登录、权限）](http://www.jianshu.com/p/aca48c74b48d)

## Build Setup

## 开发
```bash
    # 安装依赖
    npm install
    //or yarn
    # 本地开发 开启服务
    npm run dev
```

## 发布
```bash
    # 构建测试环境 带 webpack ananalyzer
    npm run build:sit --report

    # 构建生成环境
    npm run build:prod

    # 发布到测试服务器
    // 需要在 fjpublish.config.js 配置好 ssh
    npm public:sit
```

## 目录结构
```shell
├── build                      // 构建相关  
├── config                     // 配置相关
├── src                        // 源代码
│   ├── api                    // 所有请求
│   ├── assets                 // 图片 字体等静态资源
│   ├── components             // 全局公用组件
│   ├── directive              // 全局指令
│   ├── filtres                // 全局filter
│   ├── mock                   // mock数据
│   ├── router                 // 路由
│   ├── store                  // 全局store管理
│   ├── styles                 // 全局样式
│   ├── utils                  // 全局公用方法
│   ├── views                  // view
│   ├── App.vue                // 入口页面
│   ├── main.js                // 入口 加载组件 初始化等
│   └── permission.js          // 权限控制 初始用户数据等
├── static                     // 第三方不打包资源
│   ├── img                    // 第三方不打包图片
│   └── theme                  // 主题包
├── .babelrc                   // babel-loader 配置
├── eslintrc.js                // eslint 配置项
├── .gitignore                 // git 忽略项
├── .fjpublish.config.js       // 自动化发布服务器 配置
├── index.html                 // html模板
└── package.json               // package.json

```

## 示例截图
#### 登录页面
![image](https://github.com/huangjincq/vue-admin-template/raw/master/images/login-page.png)

#### 主页
![image](https://github.com/huangjincq/vue-admin-template/raw/master/images/home-page.png)

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).
