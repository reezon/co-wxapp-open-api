'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 设置小程序服务器域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.addDomain = function * (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  var data = {
    action: 'add',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 设置小程序服务器域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.modifyDomain = function * (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  var data = {
    action: 'set',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 删除小程序服务器域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} requestdomain
 * @param {Object[]} wsrequestdomain
 * @param {Object[]} uploaddomain
 * @param {Object[]} downloaddomain
 */
exports.deleteDomain = function * (requestdomain, wsrequestdomain, uploaddomain, downloaddomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  var data = {
    action: 'delete',
    requestdomain: requestdomain,
    wsrequestdomain: wsrequestdomain,
    uploaddomain: uploaddomain,
    downloaddomain: downloaddomain
  }

  return yield this.request(url, postJSON(data))
}

exports.getDomain = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'modify_domain?access_token=' + token.accessToken
  var data = {
    action: 'get'
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 设置小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} webviewdomain
 */
exports.addWebviewDomain = function * (webviewdomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  var data = {
    action: 'add',
    webviewdomain: webviewdomain
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 修改小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {Object[]} webviewdomain
 */
exports.modifyWebviewDomain = function * (webviewdomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  var data = {
    action: 'set',
    webviewdomain: webviewdomain
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 删除小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 * @param {String} webviewdomain
 */
exports.deleteWebviewDomain = function * (webviewdomain) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  var data = {
    action: 'delete',
    webviewdomain: webviewdomain
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取小程序业务域名
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489138143_WPbOO&token=&lang=zh_CN>
 */
exports.getWebviewDomain = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'setwebviewdomain?access_token=' + token.accessToken
  var data = {
    action: 'get'
  }

  return yield this.request(url, postJSON(data))
}
