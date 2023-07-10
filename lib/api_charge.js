'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 查询购买资源包的用量情况
 * 
 */
exports.getUsageDetail = function * (spuId, offset, limit){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'usage/get?access_token=' + token.accessToken + '&spuId=' + spuId + '&offset=' + offset + '&limit=' + limit
  
    return yield this.request(url)
}
/**
 * 获取小程序某个付费能力的最近用量数据
 * 
 */
exports.getRecentAverageUsage = function * (spuId){
    var token = yield this.ensureAccessToken()
    var url = this.wxappChargePrefix + 'usage/get_recent_average?access_token=' + token.accessToken + '&spuId=' + spuId
  
    return yield this.request(url)
}