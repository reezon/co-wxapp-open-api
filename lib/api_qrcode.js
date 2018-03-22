'use strict'
var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取永久小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} path
 * @param {*} width
 * @param {*} autoColor
 * @param {*} lineColor
 */
exports.getWxaQrcode = function * (path, width, autoColor, lineColor) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getwxacode?access_token=' + token.accessToken
  var data = {
    path: path,
    width: width,
    auto_color: autoColor,
    line_color: lineColor
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取临时小程序码（圆形的）
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} scene
 * @param {*} page
 * @param {*} width
 * @param {*} autoColor
 * @param {*} lineColor
 */
exports.getWxaQrcodeUnlimit = function * (scene, page, width, autoColor, lineColor) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getwxacodeunlimit?access_token=' + token.accessToken
  var data = {
    scene: scene,
    page: page,
    width: width,
    auto_color: autoColor,
    line_color: lineColor
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取小程序二维码
 * 详情请见：<https://mp.weixin.qq.com/debug/wxadoc/dev/api/qrcode.html>
 * @param {*} path
 * @param {*} width
 */
exports.createWxaQrcode = function * (path, width) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'createwxaqrcode?access_token=' + token.accessToken
  var data = {
    path: path,
    width: width
  }

  return yield this.request(url, postJSON(data))
}
