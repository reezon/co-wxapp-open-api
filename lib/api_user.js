var crypto = require('crypto')
var util = require('./util')
var postJSON = util.postJSON

var WXBizDataCrypt = function (appId, sessionKey) {
  this.appId = appId
  this.sessionKey = sessionKey
}

WXBizDataCrypt.prototype.decryptData = function (encryptedData, iv) {
  // base64 decode
  var sessionKey = new Buffer(this.sessionKey, 'base64')
  encryptedData = new Buffer(encryptedData, 'base64')
  iv = new Buffer(iv, 'base64')

  var decoded = ''
  try {
    // 解密
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKey, iv)
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true)
    decoded = decipher.update(encryptedData, 'binary', 'utf8')
    decoded += decipher.final('utf8')

    decoded = JSON.parse(decoded)
  } catch (err) {
    throw new Error('Illegal Buffer')
  }

  if (decoded.watermark.appid !== this.appId) {
    throw new Error('Illegal Buffer')
  }

  return decoded
}

/**
 * code 换取 session_key
 * @param {*} code
 */
exports.jscode2session = function * (code) {
  var componentToken = yield this.ensureComponentToken()
  var url = `https://api.weixin.qq.com/sns/component/jscode2session?appid=${
    this.appid
  }&js_code=${code}&grant_type=authorization_code&component_appid=${
    this.component_appid
  }&component_access_token=${componentToken.componentAccessToken}`
  var result = yield this.request(url, {dataType: 'json'})

  if (result instanceof Buffer) {
    result = JSON.parse(result.toString())
  }

  return result
}

/**
 * 获取用户信息
 * @param {*} encryptedData
 * @param {*} iv
 * @param {*} code
 */
exports.getUserInfo = function * (encryptedData, iv, code) {
  var session = yield this.jscode2session(code)
  var sessionKey = session.session_key

  var pc = new WXBizDataCrypt(this.appid, sessionKey)
  return pc.decryptData(encryptedData, iv)
}

/**
 * 获取用户手机号
 * https://developers.weixin.qq.com/miniprogram/dev/api-backend/open-api/phonenumber/phonenumber.getPhoneNumber.html
 * @param {*} code
 */
exports.getPhoneNumber = function * (code) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'wxa/business/getuserphonenumber?access_token=' + token.accessToken
  var data = {
    code
  }

  return yield this.request(url, postJSON(data))
}
