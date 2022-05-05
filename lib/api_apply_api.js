'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 获取接口列表
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/get_privacy_interface.html
 */
exports.getPrivacyInterface = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'security/get_privacy_interface?access_token=' + token.accessToken
  
    return yield this.request(url)
  }

  /**
 * 申请接口
 * https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/apply_api/apply_privacy_interface.html
 */
exports.applyPrivacyInterface = function * (api_name, content, url_list, pic_list, video_list){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'security/apply_privacy_interface?access_token=' + token.accessToken
    var data = {
        api_name, 
        content
    }

    if (url_list) {
        data.url_list = url_list
    }

    if (pic_list) {
        data.pic_list = pic_list
    }

    if (video_list) {
        data.video_list = video_list
    }

    return yield this.request(url, postJSON(data))
  }