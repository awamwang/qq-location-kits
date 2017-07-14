"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../libs/geolocation.min");
var config_1 = require("../config");
var utils = require("../utils");
var geolocation = null;
/**
 * 参数：
 * key：必填，开发密钥(key)，申请地址 http://lbs.qq.com/mykey.html
 * referrer：必填，调用来源，一般为您的应用名称，为了保障对您的服务，请务必填写！例如： referer=mapqq
 */
function init(key, referrer) {
    if (!key || !key.length || !referrer || !referrer.length) {
        utils.warn('缺少开发秘钥信息，申请地址 http://lbs.qq.com/mykey.html');
        utils.exit(1);
    }
    if (typeof qq === 'undefined') {
        utils.warn('可能由于执行环境问题，geolocation中qq变量未能全局注册');
        utils.exit(1);
    }
    if (!geolocation) {
        try {
            geolocation = new qq.maps.Geolocation(key, referrer);
        }
        catch (e) {
            utils.warn('创建定位Geolocation实例出错');
            utils.exit(1);
        }
    }
}
function install(Kits) {
    init(config_1.default.serviceKey, config_1.default.serviceReference);
    // 普通定位
    Kits.prototype.getLocation = function (cb, errorCb, options) {
        geolocation.getLocation(function (location) {
            if (location.adcode && location.city && location.lat && location.lng) {
                cb(location);
            }
            else {
                errorCb('fail-invalid_position');
            }
        }, function () {
            errorCb('fail-error');
        }, options);
    };
    Kits.prototype.getLocationP = function (options) {
        return new Promise(function (resolve, reject) {
            Kits.prototype.getLocation(resolve, reject, options);
        });
    };
    // ip定位
    Kits.prototype.getIpLocation = function (cb, errorCb, options) {
        geolocation.getIpLocation(function (location) {
            if (location.adcode && location.city && location.lat && location.lng) {
                cb(location);
            }
            else {
                errorCb('fail: invalid_position');
            }
        }, function () {
            errorCb('fail: error');
        });
    };
    Kits.prototype.getIpLocationP = function (options) {
        return new Promise(function (resolve, reject) {
            Kits.prototype.getIpLocation(resolve, reject, options);
        });
    };
    // 根据GPS定位，如果未获取到则用ip定位
    /**
     *
     * @param cb
     * @param errorCb
     * @param options options.canIp 支持IP定位 ; options.normalLocationOptions 普通GPS定位可选参数 ; options.ipLocationOptions IP定位可选参数
     */
    Kits.prototype.location = function (cb, errorCb, options) {
        if (options === void 0) { options = {}; }
        Kits.prototype.getLocation(cb, function () {
            if (options.canIp) {
                Kits.prototype.getIpLocation(cb, errorCb, options.ipLocationOptions);
            }
            else {
                errorCb('fail: error');
            }
        }, options.normalLocationOptions);
    };
    Kits.prototype.locationP = function (options) {
        if (options === void 0) { options = {}; }
        return new Promise(function (resolve, reject) {
            Kits.prototype.location(resolve, reject, options);
        });
    };
    // 自带的watchPosition方法
    Kits.prototype.watchPositionOrigin = function (cb, errorCb, options) {
        if (options === void 0) { options = {}; }
        geolocation.watchPosition(cb);
    };
    Kits.prototype.clearWatchOrigin = function () {
        geolocation.clearWatch();
    };
    // 监听位置信息的改变
    var watcher;
    /**
     *
     * @param interTime
     * @param cb
     * @param errorCb
     * @param options firstCb 第一次成功后执行 ; options.locationOptions 定位可选参数
     */
    Kits.prototype.watchPosition = function (interTime, cb, errorCb, options) {
        if (interTime === void 0) { interTime = 10; }
        if (options === void 0) { options = {}; }
        getLocation(true);
        function startWatcher() {
            watcher = window.setInterval(function () {
                getLocation();
            }, interTime * 1000);
        }
        function getLocation(isFirst) {
            Kits.prototype.locationP(options.locationOptions).then(function (location) {
                if (isFirst && options.firstCb) {
                    options.firstCb(location);
                }
                else {
                    cb(location);
                }
                isFirst && startWatcher();
            }).catch(function (err) {
                errorCb(err);
            });
        }
    };
    // 停止监听位置信息的改变
    Kits.prototype.clearWatch = function () {
        if (watcher) {
            window.clearInterval(watcher);
            watcher = null;
        }
    };
}
exports.default = install;
