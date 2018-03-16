'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 设置小程序隐私设置（是否可被搜索）
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {*} status
 */
exports.changeSearchStatus = function * (status) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'changewxasearchstatus?access_token=' + token.accessToken
  var data = {
    status: status
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 查询小程序当前隐私设置（是否可被搜索）
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 */
exports.getSearchStatus = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getwxasearchstatus?access_token=' + token.accessToken

  return yield this.request(url, {dataType: 'json'})
}
