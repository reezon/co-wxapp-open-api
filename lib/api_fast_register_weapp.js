'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 创建小程序接口
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21538208049W8uwq&token=&lang=zh_CN>
 * @param {String} name
 * @param {String} code
 * @param {String} codeType
 * @param {String} legalPersonalWechat
 * @param {String} legalPersonalName
 * @param {String} componentPhone
 */
exports.fastRegisterWeappCreate = function * (name, code, codeType, legalPersonalWechat, legalPersonalName, componentPhone) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/fastregisterweapp?action=create&component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    name: name,
    code: code,
    code_type: codeType,
    legal_persona_wechat: legalPersonalWechat,
    legal_persona_name: legalPersonalName,
    component_phone: componentPhone
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 查询创建任务状态
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21538208049W8uwq&token=&lang=zh_CN>
 * @param {String} name
 * @param {String} legalPersonalWechat
 * @param {String} legalPersonalName
 */
exports.fastRegisterWeappSearch = function * (name, legalPersonalWechat, legalPersonalName) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/fastregisterweapp?action=search&component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    name: name,
    legal_persona_wechat: legalPersonalWechat,
    legal_persona_name: legalPersonalName
  }

  return yield this.request(url, postJSON(data))
}
