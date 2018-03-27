'use strict'

var util = require('./util')
var postJSON = util.postJSON

/**
 * 概况趋势
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，end_date允许设置的最大值为昨日
 */
exports.dailySummaryTrend = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappiddailysummarytrend?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 日趋势
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，end_date允许设置的最大值为昨日
 */
exports.dailyVisitTrend = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappiddailyvisittrend?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 周趋势
 * @param {String} beginDate 开始日期，为周一日期
 * @param {String} endDate 结束日期，为周日日期，限定查询一周数据
 */
exports.weeklyVisitTrend = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappidweeklyvisittrend?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/** * 访问分布
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitDistribution = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappidvisitdistribution?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/** * 日留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.dailyRetainInfo = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappiddailyretaininfo?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 周留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.weeklyRetainInfo = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappidweeklyretaininfo?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/** * 月留存
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.monthlyRetainInfo = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappidmonthlyretaininfo?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 访问页面
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，限定查询1天数据，endDate允许设置的最大值为昨日
 */
exports.visitPage = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappidvisitpage?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}

/**
 * 用户画像
 * @param {String} beginDate 开始日期
 * @param {String} endDate 结束日期，开始日期与结束日期相差的天数限定为0/6/29，分别表示查询最近1/7/30天数据，endDate允许设置的最大值为昨日
 */
exports.userPortrait = function * (beginDate, endDate) {
  var token = yield this.ensureAccessToken()
  var url = this.datacubePrefix + 'getweanalysisappiduserportrait?access_token=' + token.accessToken
  var data = {
    begin_date: beginDate,
    end_date: endDate
  }

  return yield this.request(url, postJSON(data))
}
