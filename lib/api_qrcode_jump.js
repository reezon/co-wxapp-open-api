'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 增加或修改二维码规则
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * 需携带的参数如下
 * @param {string} prefix 二维码规则
 * @param {string} permit_sub_rule 是否独占符合二维码前缀匹配规则的所有子规1为不占用，2为占用详细说明 ：https://mp.weixin.qq.com/debug/wxadoc/introduction/qrcode.html#前缀占用规则
 * @param {string} path 小程序功能页面
 * @param {string} open_version 测试范围：1为开发版（配置只对开发者生效）2为体验版（配置对管理员、体验者生效）3为线上版本（配置对管理员、开发者和体验者生效）
 * @param {string} debug_url 测试链接（选填）可填写不多于5个用于测试的二维码完整链接，此链接必须符合已填写的二维码规则。
 * @param {string} is_edit 编辑标志位，0表示新增二维码规则，1表示修改已有二维码规则
 */
exports.addQrcodeJump = function * (prefix, permitSubRule, path, openVersion, debugUrl, isEdit) {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'qrcodejumpadd?access_token=' + token.accessToken
  var data = {
    prefix: prefix,
    permit_sub_rule: permitSubRule,
    path: path,
    open_version: openVersion,
    debug_url: debugUrl,
    is_edit: isEdit
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取已设置的二维码规则
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getQrcodeJump = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'qrcodejumpget?access_token=' + token.accessToken
  var data = {}

  return yield this.request(url, postJSON(data))
}

/**
 * 删除已设置的二维码规则
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {string} prefix 二维码规则
 */
exports.deleteQrcodeJump = function * (prefix) {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'qrcodejumpdelete?access_token=' + token.accessToken
  var data = {
    prefix: prefix
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 发布已设置的二维码规则
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {string} prefix 二维码规则
 */
exports.publishQrcodeJump = function * (prefix) {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'qrcodejumppublish?access_token=' + token.accessToken
  var data = {
    prefix: prefix
  }

  return yield this.request(url, postJSON(data))
}
/**
 * 获取校验文件名称及内容
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.downloadQrcodeJump = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'qrcodejumpdownload?access_token=' + token.accessToken
  var data = {}

  return yield this.request(url, postJSON(data))
}
