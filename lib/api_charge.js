'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 查询可转换的sku列表
 * 
 */
exports.getConvertibleSkus = function * (){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'service-provider/package/get_convertible_skus?access_token=' + token.accessToken
  
    return yield this.request(url)
}

/**
 * 服务商分配资源包
 */
exports.assignPackage = function * (orderId, skuId, receiverAppId, requestId){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'service-provider/package/assign?access_token=' + token.accessToken
    var data = {
        orderId, 
        skuId,
        receiverAppId,
        requestId
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 查询订单列表
 */
exports.queryOrderList = function * (spuId, offset, limit){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'service-provider/order/query_list?access_token=' + token.accessToken
    var data = {
        spuId, 
        offset,
        limit
    }

    return yield this.request(url, postJSON(data))
}

/**
 * 查询订单详情
 * 
 */
exports.getConvertibleSkus = function * (orderId){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'service-provider/order/get?access_token=' + token.accessToken + '&orderId=' + orderId
  
    return yield this.request(url)
}

/**
 * 查询购买资源包的用量情况
 * 
 */
exports.getUsageDetail = function * (spuId, offset, limit){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'usage/get?access_token=' + token.accessToken + '&spuId=' + spuId + '&offset=' + offset + '&limit=' + limit
  
    return yield this.request(url)
}