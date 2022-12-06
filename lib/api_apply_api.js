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
 * 获取隐私接口检测结果
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/code-management/getCodePrivacyInfo.html
 */
exports.getCodePrivacyInfo = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'security/get_code_privacy_info?access_token=' + token.accessToken
  
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

  /**
 * 获取订单页 path 信息
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/basic-info-management/getOrderPathInfo.html
 */
exports.getOrderPathInfo = function * (info_type){
    var token = yield this.ensureAccessToken()
    var url = this.wxappPrefix + 'security/getorderpathinfo?access_token=' + token.accessToken
    var data = {
        info_type
    }
    
    return yield this.request(url, postJSON(data))
  }

  /**
 * 申请设置订单页 path 信息
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/basic-info-management/applySetOrderPathInfo.html
 */
exports.applySetOrderPathInfo = function * (path, img_list, video, test_account, test_pwd, test_remark, appid_list){
    var componentAccessToken = yield this.getComponentAccessToken()
    var url = this.wxappPrefix + 'security/applysetorderpathinfo?component_access_token=' + componentAccessToken.componentAccessToken

    var data = {
        batch_req: {
            path,
            appid_list
        }
    }

    if (img_list) {
        data.batch_req.img_list = img_list
    }

    if (video) {
        data.batch_req.video = video
    }

    if (test_account) {
        data.batch_req.test_account = test_account
    }

    if (test_pwd) {
        data.batch_req.test_pwd = test_pwd
    }

    if (test_remark) {
        data.batch_req.test_remark = test_remark
    }

    return yield this.request(url, postJSON(data))
  }