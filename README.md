## 概述

## 特性

+ 腾讯webservice封装——http://lbs.qq.com/webservice_v1/index.html
    + 距离计算
    + IP定位
    + 行政区划
    + 路线规划服务
    + 街景场景信息查询
    + 地点搜索
    + 关键词输入提示
    + 地址解析
    + 逆地址解析
    + 距离计算
    > 说明：不包括跟UI展示相关组件的封装
+ 微信jssdk定位方法封装——https://mp.weixin.qq.com/wiki/11/74ad127cc054f6b80759c40f77ec03db.html#.E5.9C.B0.E7.90.86.E4.BD.8D.E7.BD.AE
    + 位置监听（周期查询）
+ 腾讯geolocation封装
    + GPS定位
    + IP定位
    + 综合定位
    + 位置监听（周期查询）
+ 全局http.jsonp方法配置
+ 提供key获取方式配置接口，可以设置通过接口获取
+ 配合打包工具可以做到代码分块引入

## TODOS

+ key从配置文件读取，key加密保存
+ 支持CORS方式请求tools中的资源
+ 提供key获取方式配置接口，可以设置通过接口获取
+ 坐标格式统一化