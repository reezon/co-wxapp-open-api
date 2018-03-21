'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 添加地点
 * @param {String} relatedName 经营资质主体
 * @param {String} relatedCredential 经营资质证件号
 * @param {String} relatedAddress 经营资质地址
 * @param {String} relatedProofMaterial 相关证明材料照片临时素材mediaid
 */
exports.addNearbyPoi = function * (relatedName, relatedCredential, relatedAddress, relatedProofMaterial) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'addnearbypoi?access_token=' + token.accessToken
  var data = {
    related_name: relatedName,
    related_credential: relatedCredential,
    related_address: relatedAddress,
    related_proof_material: relatedProofMaterial
  }
  return yield this.request(url, postJSON(data))
}

/**
 * 删除地点
 * @param {String} poiId 附近地点ID
 */
exports.delNearbyPoi = function * (poiId) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'delnearbypoi?access_token=' + token.accessToken

  var data = {
    poi_id: poiId
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 查看地点列表
 * @param {Number} page 起始页id（从1开始计数）
 * @param {Number} page_rows 每页展示个数（最多1000个）
 */
exports.getNearbyPoiList = function * (page, pageRows) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'getnearbypoilist?access_token=' + token.accessToken

  url += '&page=' + page
  url += '&page_rows' + pageRows

  return yield this.request(url, {dataType: 'json'})
}

/**
 * 展示/取消展示附近小程序
 * @param {String} poiId 附近地点ID
 * @param {Number} status 0：取消展示；1：展示
 */
exports.setNearbyPoiShowStatus = function * (poiId, status) {
  var token = yield this.ensureAccessToken()
  var url = this.wxappPrefix + 'setnearbypoishowstatus?access_token=' + token.accessToken

  var data = {
    poi_id: poiId,
    status: status
  }

  return yield this.request(url, postJSON(data))
}
