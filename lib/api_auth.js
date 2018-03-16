'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取pre_auth_code
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 */
exports.createPreAuthCode = function * () {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/api_create_preauthcode?component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    component_appid: this.component_appid
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取授权方的授权信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} queryAuthCodes
 */
exports.queryAuth = function * (queryAuthCode) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/api_query_auth?component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    component_appid: this.component_appid,
    authorization_code: queryAuthCode
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取授权方的帐号基本信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 */
exports.getAuthorizerInfo = function * () {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/api_get_authorizer_info?component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 获取授权方的选项设置信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} optionName
 */
exports.getAuthorizerOption = function * (optionName) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/api_get_authorizer_option?component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid,
    option_name: optionName
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 设置授权方的选项信息
 * <https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1453779503&token=&lang=zh_CN>
 * @param {String} optionName
 * @param {String} optionValue
 */
exports.setAuthorizerOption = function * (optionName, optionValue) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.prefix + 'component/api_get_authorizer_option?component_access_token=' + componentAccessToken.componentAccessToken
  var data = {
    component_appid: this.component_appid,
    authorizer_appid: this.appid,
    option_name: optionName,
    option_value: optionValue
  }

  return yield this.request(url, postJSON(data))
}
