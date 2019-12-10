'use strict'

var util = require('./util')
var postJSON = util.postJSON
/**
 * 获取展示的公众号信息
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 */
exports.getShowWxaItem = function * () {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getshowwxaitem?access_token=' + token.accessToken

  return yield this.request(url)
}

/**
 * 设置展示的公众号
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {String} flag
 * @param {String} appid
 */
exports.updateShowWxaItem = function * (flag, appid) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'updateshowwxaitem?access_token=' + token.accessToken
  let data = {
    wxa_subscribe_biz_flag: flag
  }

  if (flag) {
    data.appid = appid
  }

  return yield this.request(url, postJSON(data))
}
/**
 * 获取可以用来设置的公众号列表
 * 详情请见：<https://open.weixin.qq.com/cgi-bin/showdocument?action=dir_list&t=resource/res_list&verify=1&id=21517799059ZSEMr&token=&lang=zh_CN>
 * @param {String} page
 * @param {String} num
 */
exports.getWxampLinkForShow = function * (page, num) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getwxamplinkforshow?access_token=' + token.accessToken + '&page= ' + page + '&num=' + num

  return yield this.request(url)
}
