'use strict'

var util = require('./util')
var postJSON = util.postJSON
var fixedEncodeURIComponent = util.fixedEncodeURIComponent

/**
 * 为授权的小程序帐号上传小程序代码
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} templateId
 * @param {Object} extJson
 * @param {String} userVersion
 * @param {String} userDesc
 */
exports.commitCode = function * (templateId, extJson, userVersion, userDesc) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'commit?access_token=' + token.accessToken
  var data = {
    template_id: templateId,
    ext_json: extJson,
    user_version: userVersion,
    user_desc: userDesc
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取体验小程序的体验二维码
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} path
 */
exports.getTestQrCode = function * (path) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'get_qrcode?access_token=' + token.accessToken

  if (path) {
    url += '&' + fixedEncodeURIComponent(path)
  }

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 获取授权小程序帐号的可选类目
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * 返回参数说明：
 * category_list 可填选的类目列表
 * first_class 一级类目名称
 * second_class 二级类目名称
 * third_class 三级类目名称
 * first_id 一级类目的ID编号
 * second_id 二级类目的ID编号
 * third_id 三级类目的ID编号
 */
exports.getCategory = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'get_category?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 获取小程序的第三方提交代码的页面配置
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getPage = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'get_page?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 将第三方提交的代码包提交审核
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {Object[]} itemList
 */
exports.submitAudit = function * (itemList) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'submit_audit?access_token=' + token.accessToken
  var data = {
    item_list: itemList
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 查询某个指定版本的审核状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} auditId
 */
exports.getAuditStatus = function * (auditId) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'get_auditstatus?access_token=' + token.accessToken
  var data = {
    auditid: auditId
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 查询最新一次提交的审核状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * 返回结果
 * status 审核状态，其中0为审核成功，1为审核失败，2为审核中
 * reason 当status=1，审核被拒绝时，返回的拒绝原因
 */
exports.getLastAuditStatus = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'get_latest_auditstatus?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 发布已通过审核的小程序
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.releaseCode = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'release?access_token=' + token.accessToken
  var data = {}

  return yield this.request(url, postJSON(data))
}

/**
 * 修改访问状态
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {Boolean} visible
 */
exports.changeVisitStatus = function * (visible) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'change_visitstatus?access_token=' + token.accessToken
  var data = {
    action: visible ? 'open' : 'close'
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 小程序版本回退
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.revertCodeRelease = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'revertcoderelease?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 小程序审核撤回
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.undoCodeAudit = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'undocodeaudit?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 查询当前设置的最低基础库版本及各版本用户占比
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getWeappSupportVersion = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'getweappsupportversion?access_token=' + token.accessToken
  var data = {}

  return yield this.request(url, postJSON(data))
}

/**
 * 设置最低基础库版本
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} version
 */
exports.setWeappSupportVersion = function * (version) {
  var token = yield this.ensureAccessToken()
  var url = this.wxopenPrefix + 'setweappsupportversion?access_token=' + token.accessToken
  var data = {
    version: version
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 小程序分阶段发布
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 * @param {String} grayPercentage
 */
exports.grayReleaseCode = function * (grayPercentage) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'grayrelease?access_token=' + token.accessToken
  var data = {
    gray_percentage: grayPercentage
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 取消分阶段发布
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.revertGrayRelease = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'revertgrayrelease?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 查询当前分阶段发布详情
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1489140610_Uavc4&token=&lang=zh_CN>
 */
exports.getGrayReleasePlan = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getgrayreleaseplan?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}
