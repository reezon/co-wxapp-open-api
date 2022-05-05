'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取小程序违规处罚记录
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/records/getillegalrecords.html
 */
exports.getIllegalRecords = function * (start_time, end_time){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'getillegalrecords?access_token=' + token.accessToken
    var data = {
    }

    if (start_time) {
        data.start_time = start_time
    }

    if (end_time) {
        data.end_time = end_time
    }

    return yield this.request(url, postJSON(data))
  }

/**
 * 获取小程序申诉记录
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/records/getappealrecords.html
 */
exports.getAppealRecords = function * (illegal_record_id){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'getappealrecords?access_token=' + token.accessToken
    var data = {
        illegal_record_id
    }

    return yield this.request(url, postJSON(data))
  }