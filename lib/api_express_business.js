'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 查询运单轨迹
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getPath.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 */
exports.getExpressBusinessPath = function * (orderId, openid, deliveryId, waybillId) {
  var token = yield this.ensureAccessToken()
  var url = this.expressBusinessPrefix + 'path/get?access_token=' + token.accessToken
  let data = {
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 取消运单
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.cancelOrder.html>
 * @param {String} orderId
 * @param {String} openid
 * @param {String} deliveryId
 * @param {String} waybillId
 */
exports.cancelExpressBusinessOrder = function * (orderId, openid, deliveryId, waybillId) {
  var token = yield this.ensureAccessToken()
  var url = this.expressBusinessPrefix + 'order/cancel?access_token=' + token.accessToken
  let data = {
    order_id: orderId,
    openid: openid,
    delivery_id: deliveryId,
    waybill_id: waybillId
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 获取电子面单余额
 * 详情请见：<https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/Mini_Programs/express/by-business/logistics.getQuota.html>
 * @param {String} deliveryId
 * @param {String} bizId
 */
exports.cancelExpressBusinessOrder = function * (deliveryId, bizId) {
  var token = yield this.ensureAccessToken()
  var url = this.expressBusinessPrefix + 'quota/get?access_token=' + token.accessToken
  let data = {
    delivery_id: deliveryId,
    biz_id: bizId
  }
  return yield this.request(url, postJSON(data))
}