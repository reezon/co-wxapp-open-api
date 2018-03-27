微信小程序第三方平台api
===========

## 功能列表
- 数据分析
- 权限管理
- 代码模板管理
- 代码管理
- 域名设置
- 多媒体(图片)
- 客服消息
- 附近的位置
- 开放平台
- 跳转二维码
- 小程序二维码
- 基本设置
- 模板消息
- 体验者设置
- 获取用户信息


## Installation

```sh
$ npm install co-wxapp-open-api
```

## Usage
```js
var WxappApi = require('co-wxapp-open-api')
var wxappApi = new WxappApi(appId, appSecret, authorizerAppid, authorizerRefreshToken, ticket)
var preAuthCode = yield wxappApi.createPreAuthCode()
```
