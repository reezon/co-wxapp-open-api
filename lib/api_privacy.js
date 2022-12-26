'use strict'

var util = require('./util')
var postJSON = util.postJSON
var path = require('path')
var formstream = require('formstream')
const fs = require('co-fs')

/**
 * 配置小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/set_privacy_setting.html>
 */
exports.setPrivacySetting = function * (contact_email, contact_phone, contact_qq, contact_weixin, ext_file_media_id, notice_method, store_expire_timestamp, setting_list, privacy_ver, store_region, sdk_privacy_info_list){
    var token = yield this.ensureAccessToken()
    var url = this.prefix + 'component/setprivacysetting?access_token=' + token.accessToken
    var data = {
        privacy_ver: privacy_ver || 2,
        owner_setting: {
            notice_method
        }
    }

    if (contact_email) {
        data.owner_setting.contact_email = contact_email
    }

    if (contact_phone) {
        data.owner_setting.contact_phone = contact_phone
    }

    if (contact_qq) {
        data.owner_setting.contact_qq = contact_qq
    }

    if (contact_weixin) {
        data.owner_setting.contact_weixin = contact_weixin
    }

    if (ext_file_media_id) {
        data.owner_setting.ext_file_media_id = ext_file_media_id
    }

    if (store_expire_timestamp) {
        data.owner_setting.store_expire_timestamp = store_expire_timestamp
    }

    if (store_region) {
        data.owner_setting.store_region = store_region
    }

    data.setting_list = setting_list

    if (sdk_privacy_info_list) {
        data.sdk_privacy_info_list = sdk_privacy_info_list
    }
  
    return yield this.request(url, postJSON(data))
}

/**
 * 查询小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/get_privacy_setting.html>
 */
exports.getPrivacySetting = function * (privacy_ver){
    var token = yield this.ensureAccessToken()
    var url = this.prefix + 'component/getprivacysetting?access_token=' + token.accessToken
    var data = {
        privacy_ver: privacy_ver || 2
    }
  
    return yield this.request(url, postJSON(data))
}

/**
 * 上传小程序用户隐私保护指引
 * <https://developers.weixin.qq.com/doc/oplatform/Third-party_Platforms/2.0/api/privacy_config/upload_privacy_exfile.html>
 */
exports.uploadPrivacyExtFile = function * (filepath){
    var token = yield this.ensureAccessToken()
    var url = this.prefix + 'component/uploadprivacyextfile?access_token=' + token.accessToken
    var stat = yield fs.stat(filepath)
    var form = formstream()
    form.file('file', filepath, path.basename(filepath), stat.size)
    var opts = {
        method: 'POST',
        headers: form.headers(),
        data: form
    }
    opts.headers.Accept = 'application/json'

    return yield this.request(url, opts)
}
