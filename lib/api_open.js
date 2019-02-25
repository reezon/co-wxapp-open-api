'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 创建开放平台帐号并绑定小程序
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {string} appId
 */
exports.createOpenAccount = function * (appId) {
  var token = yield this.ensureAccessToken()
  var url = this.openPrefix + 'create?access_token=' + token.accessToken
  var data = {
    appid: appId
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取小程序所绑定的开放平台帐号
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {string} appId
 */
exports.getOpenAccount = function * (appId) {
  var token = yield this.ensureAccessToken()
  var url = this.openPrefix + 'get?access_token=' + token.accessToken
  var data = {
    appid: appId
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 将小程序绑定到开放平台帐号下
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {string} appId
 * @param {string} openAppId
 */
exports.bindOpenAccount = function * (appId, openAppId) {
  var token = yield this.ensureAccessToken()
  var url = this.openPrefix + 'bind?access_token=' + token.accessToken
  var data = {
    appid: appId,
    open_appid: openAppId
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 将小程序从开放平台帐号下解绑
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1498704199_1bcax&token=&lang=zh_CN>
 * @param {string} appId
 * @param {string} openAppId
 */
exports.unbindOpenAccount = function * (appId, openAppId) {
  var token = yield this.ensureAccessToken()
  var url = this.openPrefix + 'unbind?access_token=' + token.accessToken
  var data = {
    appid: appId,
    open_appid: openAppId
  }

  return yield this.request(url, postJSON(data))
}
