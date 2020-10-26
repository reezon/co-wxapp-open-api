'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 用户风险识别
 * 内测接口
 */
exports.getUserRiskRank = function * (appid, openid, scene, mobile_no, bank_card_no, cert_no, client_ip, email_address, extended_info){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'getuserriskrank?access_token=' + token.accessToken
    var data = {
      appid: appid,
      openid: openid,
      scene: scene
    }

    if (mobile_no) {
        data.mobile_no = mobile_no
    }

    if (bank_card_no) {
        data.bank_card_no = bank_card_no
    }

    if (cert_no) {
        data.cert_no = cert_no
    }

    if (client_ip) {
        data.client_ip = client_ip
    }

    if (email_address) {
        data.email_address = email_address
    }

    if (extended_info) {
        data.extended_info = extended_info
    }
  
    return yield this.request(url, postJSON(data))
  }