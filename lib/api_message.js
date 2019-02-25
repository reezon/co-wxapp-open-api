'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 客服消息，发送文本消息
 * @param {string} openid 用户的openid
 * @param {string} text 发送的消息内容
 */
exports.sendText = function * (openid, text) {
  var token = yield this.ensureAccessToken()
  var url = this.customMessagePrefix + 'send?access_token=' + token.accessToken
  var data = {
    touser: openid,
    msgtype: 'text',
    text: {
      content: text
    }
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 客服消息，发送图片消息
 * @param {string} openid 用户的openid
 * @param {string} mediaId 媒体文件的ID，参见uploadMedia方法
 */
exports.sendImage = function * (openid, mediaId) {
  var token = yield this.ensureAccessToken()
  var url = this.customMessagePrefix + 'send?access_token=' + token.accessToken
  var data = {
    touser: openid,
    msgtype: 'image',
    image: {
      media_id: mediaId
    }
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 客服消息，发送图文链接
 * @param {string} openid 用户的openid
 * @param {string} title 消息标题
 * @param {string} description 图文链接消息
 * @param {string} linkUrl 图文链接消息被点击后跳转的链接
 * @param {string} thumbUrl 封面图片的临时cdn链接
 */
exports.sendLink = function * (openid, title, description, linkUrl, thumbUrl) {
  var token = yield this.ensureAccessToken()
  var url = this.customMessagePrefix + 'send?access_token=' + token.accessToken
  var data = {
    touser: openid,
    msgtype: 'link',
    link: {
      title: title,
      description: description,
      url: linkUrl,
      thumb_url: thumbUrl
    }
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 客服消息，发送小程序卡片
 * @param {string} openid 用户的openid
 * @param {string} title 消息标题
 * @param {string} pagepath 小程序的页面路径，跟app.json对齐，支持参数，比如pages/index/index?foo=bar
 * @param {string} thumbMediaId 小程序消息卡片的封面， image类型的media_id，通过新增素材接口上传图片文件获得，建议大小为520*416
 */
exports.sendCard = function * (openid, title, pagepath, thumbMediaId) {
  var token = yield this.ensureAccessToken()
  var url = this.customMessagePrefix + 'send?access_token=' + token.accessToken
  var data = {
    touser: openid,
    msgtype: 'miniprogrampage',
    miniprogrampage: {
      title: title,
      pagepath: pagepath,
      thumb_media_id: thumbMediaId
    }
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 客服消息，客服输入状态
 * 下发输入状态，需要客服之前30秒内跟用户有过消息交互。
 * 在输入状态中（持续15s），不可重复下发输入态。
 * 在输入状态中，如果向用户下发消息，会同时取消输入状态。
 * @param {string} openid 用户的openid
 */
exports.typing = function * (openid) {
  var token = yield this.ensureAccessToken()
  var url = this.customMessagePrefix + 'typing?access_token=' + token.accessToken
  var data = {
    touser: openid,
    'command': 'Typing'
  }
  return yield this.request(url, postJSON(data))
}
