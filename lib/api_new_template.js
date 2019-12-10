'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取当前帐号所设置的类目信息
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/get_category.html>
 */
exports.getNewTemplateCategory = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'getcategory?access_token=' + token.accessToken
  return yield this.request(url)
}

/**
 * 获取模板标题列表
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/library_list.html>
 * @param {String} ids
 * @param {Number} start
 * @param {Number} limit
 */
exports.getPubTemplateTitles = function * (ids, start, limit) {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'getpubtemplatetitles?access_token=' + token.accessToken + '&ids=' + ids + '&start=' + start + '&limit=' + limit
  return yield this.request(url)
}

/**
 * 获取模板标题下的关键词库
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/library_get.html>
 * @param {String} tid
 */
exports.getPubTemplateKeywords = function * (tid) {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'getpubtemplatekeywords?access_token=' + token.accessToken + '&tid=' + tid
  return yield this.request(url)
}

/**
 * 组合模板并添加到个人模板库
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/add_template.html>
 * @param {String} tid
 * @param {Object[]} kidList
 * @param {String} sceneDesc
 */
exports.addNewTemplate = function * (tid, kidList, sceneDesc) {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'addtemplate?access_token=' + token.accessToken
  var data = {
    tid: tid,
    kidList: kidList,
    sceneDesc: sceneDesc
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 获取帐号下的模板列表
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/list_template.html>
 */
exports.getNewTemplateList = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'gettemplate?access_token=' + token.accessToken
  return yield this.request(url)
}

/**
 * 删除帐号下的某个模板
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/subscribe_template/del_template.html>
 * @param {String} priTmplId
 */
exports.deleteNewTemplate = function * (priTmplId) {
  var token = yield this.ensureAccessToken()
  var url = this.newTemplatePrefix + 'deltemplate?access_token=' + token.accessToken
  var sendData = {
    priTmplId: priTmplId
  }
  return yield this.request(url, postJSON(sendData))
}
/**
 * 发送订阅消息
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/subscribe-message/subscribeMessage.send.html>
 * @param {String} openid
 * @param {String} templateId
 * @param {String} page
 * @param {Object} data
 */
exports.sendNewTemplate = function * (openid, templateId, page, data) {
  var token = yield this.ensureAccessToken()
  var url = this.subscribeMessagePrefix + 'send?access_token=' + token.accessToken
  var sendData = {
    touser: openid,
    template_id: templateId,
    page: page,
    data: data
  }
  return yield this.request(url, postJSON(sendData))
}
