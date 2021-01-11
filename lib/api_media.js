'use strict'

var path = require('path')
var formstream = require('formstream')
const fs = require('co-fs')

/**
* 获取临时素材
* 详情请见：<http://mp.weixin.qq.com/wiki/11/07b6b76a6b6e8848e855a435d5e34a5f.html>
* Examples:
* ```
* api.getMedia('media_id');
* ```
* - `result`, 调用正常时得到的文件Buffer对象
* - `res`, HTTP响应对象
* @param {string} mediaId 媒体文件的ID
 */
exports.getMedia = function * (mediaId) {
  var token = yield this.ensureAccessToken()
  var url = this.mediaPrefix + 'get?access_token=' + token.accessToken

  url += '&media_id=' + mediaId

  return yield this.request(url, {dataType: 'json'})
}

/**
* 上传图文消息内的图片获取URL
* 详情请见：<https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html>
* Examples:
* ```
* api.uploadImage('filepath');
* ```
* Result:
* ```
* {"url":  "http://mmbiz.qpic.cn/mmbiz/gLO17UPS6FS2xsypf378iaNhWacZ1G1UplZYWEYfwvuU6Ont96b1roYsCNFwaRrSaKTPCUdBK9DgEHicsKwWCBRQ/0"}
* ```
* @param {string} filepath 图片文件路径
 */
exports.uploadImage = function * (filepath) {
  var token = yield this.ensureAccessToken()
  var url = this.mediaPrefix + 'upload?access_token=' + token.accessToken + '&type=image'
  var stat = yield fs.stat(filepath)
  var form = formstream()
  form.file('media', filepath, path.basename(filepath), stat.size)
  var opts = {
    method: 'POST',
    headers: form.headers(),
    data: form
  }
  opts.headers.Accept = 'application/json'

  return yield this.request(url, opts)
}

/**
* 上传多媒体
* 详情请见：<https://developers.weixin.qq.com/doc/offiaccount/Asset_Management/New_temporary_materials.html>
* @param {string} filepath 文件路径
* @param {string} type 多媒体类型
 */
exports.uploadMedia = function * (filepath, type) {
  var token = yield this.ensureAccessToken()
  var url = this.mediaPrefix + 'upload?access_token=' + token.accessToken + '&type=' + type
  var stat = yield fs.stat(filepath)
  var form = formstream()
  form.file('media', filepath, path.basename(filepath), stat.size)
  var opts = {
    method: 'POST',
    headers: form.headers(),
    data: form
  }
  opts.headers.Accept = 'application/json'

  return yield this.request(url, opts)
}
