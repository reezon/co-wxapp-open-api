'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取草稿箱内的所有临时代码草稿
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * 返回参数
 * draft_list
 */
exports.getCodeTemplateDraftList = function * () {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.wxappPrefix + 'gettemplatedraftlist?access_token=' + componentAccessToken.componentAccessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 获取代码模版库中的所有小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 */
exports.getCodeTemplateList = function * () {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.wxappPrefix + 'gettemplatelist?access_token=' + componentAccessToken.componentAccessToken

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 将草稿箱的草稿选为小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * @param {String} draftId
 */
exports.addCodeTemplate = function * (draftId) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.wxappPrefix + 'addtotemplate?access_token=' + componentAccessToken.componentAccessToken
  var data = {
    draft_id: draftId
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 删除指定小程序代码模版
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=open1506504150_nMMh6&token=&lang=zh_CN>
 * @param {String} templateId
 */
exports.deleteCodeTemplate = function * (templateId) {
  var componentAccessToken = yield this.ensureComponentToken()
  var url = this.wxappPrefix + 'deletetemplate?access_token=' + componentAccessToken.componentAccessToken
  var data = {
    template_id: templateId
  }
  return yield this.request(url, postJSON(data))
}
