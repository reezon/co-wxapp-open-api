'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取小程序模板库标题列表
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {Number} offset
 * @param {Number} count
 */
exports.getTemplateLibraryList = function * (offset, count) {
  var token = yield this.ensureAccessToken()
  var url = this.templatePrefix + 'library/list?access_token=' + token.accessToken
  var data = {
    offset: offset,
    count: count
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 获取模板库某个模板标题下关键词库
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {String} id
 */
exports.getLibraryTemplateById = function * (id) {
  var token = yield this.ensureAccessToken()
  var url = this.templatePrefix + 'library/get?access_token=' + token.accessToken
  var data = {
    id: id
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 组合模板并添加至帐号下的个人模板库
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {String} id
 * @param {Object} keywordIdList
 */
exports.addTemplate = function * (id, keywordIdList) {
  var token = yield this.ensureAccessToken()
  var url = this.templatePrefix + 'add?access_token=' + token.accessToken
  var data = {
    id: id,
    keyword_id_list: keywordIdList
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 删除帐号下的某个模板
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {String} templateId
 */
exports.deleteTemplate = function * (templateId) {
  var token = yield this.ensureAccessToken()
  var url = this.templatePrefix + 'delete?access_token=' + token.accessToken
  var data = {
    template_id: templateId
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 发送模板消息
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {String} openid
 * @param {String} templateId
 * @param {String} page
 * @param {String} formId
 * @param {String} data
 * @param {String} color
 * @param {Object} emphasisKeyword
 */
exports.sendTemplate = function * (openid, templateId, page, formId, data, color, emphasisKeyword) {
  var token = yield this.ensureAccessToken()
  var url = this.tempalteMessagePrefix + 'send?access_token=' + token.accessToken
  var sendData = {
    touser: openid,
    template_id: templateId,
    page: page,
    form_id: formId,
    data: data,
    color: color,
    emphasis_keyword: emphasisKeyword
  }
  return yield this.request(url, postJSON(sendData))
}

/**
 * 获取帐号下已存在的模板列表
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1500465446_j4CgR&token=&lang=zh_CN>
 * @param {Number} offset
 * @param {Number} count
 */
exports.getTemplateList = function * (offset, count) {
  var token = yield this.ensureAccessToken()
  var url = this.templatePrefix + 'list?access_token=' + token.accessToken
  var data = {
    offset: offset,
    count: count
  }
  return yield this.request(url, postJSON(data))
}
