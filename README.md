# 乐享小程序版本

## 前期准备

1. 本项目依赖与腾讯的对象存储和万象优图服务，需要在`src/utils/image.js`中设置对应的`Bucket`和`Region`。

1. 将`clouds`目录中的**文件夹**上传到对象存储中

    ![](docs/imgs/cos.png)

1. 在`src/utils/api.js`中设置服务器的地址`host`(不以'/'结尾)。

1. 修改`project.config.json`中的`appid`属性。

## 编译&运行

1. 安装依赖库

```sh
npm i
```

2. 编译

```sh
wepy build
```

3. 使用微信小程序开发工具打开当前目录

## 目录文件说明

```
├─clouds 由于小程序有源代码不能超过2MB的显示，所以将emojis图片放在了对象存储中
│  └─emojis
├─docs
└─src 源代码目录
    ├─components 组件(wepy的组件真难用)
    ├─images 图片资源
    ├─iview 小程序中使用了iview组件，该文件夹内是iview组件的代码
    │  └─...
    ├─less 一些公共样式
    ├─libs 第三方依赖库
    ├─mixins
    ├─pages 所有的页面文件在此处
    └─utils 小程序所使用的一些工具
```