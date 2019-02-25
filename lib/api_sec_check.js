'use strict'

var util = require('./util')
var formstream = require('formstream')
var fs = require('co-fs')
var path = require('path')
var postJSON = util.postJSON

/**
 * 检查一段文本是否含有违法违规内容
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/dev/api/msgSecCheck.html>
 * @param {string} content
 */
exports.msgSecCheck = function * (content) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'msg_sec_check?access_token=' + token.accessToken
  var data = {
    content: content
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 校验一张图片是否含有违法违规内容
 * 详情请见：<https://developers.weixin.qq.com/miniprogram/dev/api/imgSecCheck.html>
 * @param {string} filepath
 */
exports.imgSecCheck = function * (filepath) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'img_sec_check?access_token=' + token.accessToken
  var stat = yield fs.stat(filepath)
  var form = formstream()
  form.file('media', filepath, path.basename(filepath), stat.size)
  var opts = {
    method: 'POST',
    timeout: 60000, // 60秒超时
    headers: form.headers(),
    data: form
  }
  opts.headers.Accept = 'application/json'

  return yield this.request(url, opts)
}
