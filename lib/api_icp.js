'use strict'

var util = require('./util')
var path = require('path')
var formstream = require('formstream')
const fs = require('co-fs')
var postJSON = util.postJSON

/**
 * 查询人脸核身任务状态
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpVerifyTask.html
 */
exports.queryIcpVerifyTask = function * (task_id){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_verifytask?access_token=' + token.accessToken
    var data = {
        task_id
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 发起小程序管理员人脸核身
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/createIcpVerifyTask.html
 */
exports.createIcpVerifyTask = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'create_icp_verifytask?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 上传小程序备案媒体材料
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/uploadIcpMedia.html
 */
exports.uploadIcpMedia = function * (type, certificate_type, icp_order_field, filepath){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'upload_icp_media?access_token=' + token.accessToken + '&type=' + type + '&certificate_type=' + certificate_type + '&icp_order_field=' + icp_order_field
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
   * 撤回小程序备案申请
   * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/cancelApplyIcpFiling.html
   */
  exports.cancelApplyIcpFiling = function * (){
      var token = yield this.ensureAccessToken()
      var url = this.wxappIcpPrefix + 'cancel_apply_icp_filing?access_token=' + token.accessToken
      var data = {
          
      }
  
      return yield this.request(url, postJSON(data))
}

/**
 * 申请小程序备案
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/applyIcpFiling.html
 */
exports.applyIcpFiling = function * (icp_subject, icp_applets, icp_materials){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'apply_icp_filing?access_token=' + token.accessToken
    var data = {
        icp_subject, 
        icp_applets, 
        icp_materials
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 注销小程序备案
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/cancelIcpfiling.html
 */
exports.cancelIcpfiling = function * (cancel_type){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'cancel_icp_filing?access_token=' + token.accessToken
    var data = {
        cancel_type
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取小程序备案状态及驳回原因
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/getIcpEntranceInfo.html
 */
exports.getIcpEntranceInfo = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'get_icp_entrance_info?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url)
}

/**
 * 获取小程序已备案详情
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/getOnlineIcpOrder.html
 */
exports.getOnlineIcpOrder = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'get_online_icp_order?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取小程序服务内容类型
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpServiceContentTypes.html
 */
exports.queryIcpServiceContentTypes = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_service_content_types?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取证件类型
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpCertificateTypes.html
 */
exports.queryIcpCertificateTypes = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_certificate_types?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取区域信息
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpDistrictCode.html
 */
exports.queryIcpDistrictCode = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_district_code?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取前置审批项类型
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpNrlxTypes.html
 */
exports.queryIcpNrlxTypes = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_nrlx_types?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 获取单位性质
 * https://developers.weixin.qq.com/doc/oplatform/openApi/OpenApiDoc/miniprogram-management/record/queryIcpSubjectTypes.html
 */
exports.queryIcpSubjectTypes = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappIcpPrefix + 'query_icp_subject_types?access_token=' + token.accessToken
    var data = {
        
    }

    return yield this.request(url, postJSON(data))
}