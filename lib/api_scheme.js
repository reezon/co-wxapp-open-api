'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取小程序scheme码
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/url-scheme/urlscheme.generate.html>
 * @param {*} path
 * @param {*} query
 * @param {*} isExpire
 * @param {*} expireTime
 */
exports.generateScheme = function * (path, query, isExpire, expireTime) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'generatescheme?access_token=' + token.accessToken
  var data = {
    is_expire: isExpire
  }

  if (isExpire) {
    data.expire_time = expireTime
  }

  if (path) {
    data.jump_wxa = {
      path,
      query
    }
  }

  return yield this.request(url, postJSON(data))
}