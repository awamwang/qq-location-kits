"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../libs/geolocation.min");
var config_1 = require("../config");
var utils = require("../utils");
function init(key, referrer) {
    if (!key || !key.length || !referrer || !referrer.length) {
        utils.warn('缺少开发秘钥信息，申请地址 http://lbs.qq.com/mykey.html');
        utils.exit(1);
    }
    if (typeof qq === 'undefined') {
        utils.warn('可能由于执行环境问题，geolocation中qq变量未能全局注册');
        utils.exit(1);
    }
}
function install(Kits) {
    init(config_1.default.serviceKey, config_1.default.serviceReference);
    Kits.prototype.tools = {};
    // 直线距离计算
    Kits.prototype.tools.computeDistanceBetween = function (from, to) {
        var a = new qq.maps.LatLng(from.lat, from.lng);
        var b = new qq.maps.LatLng(to.lat, to.lng);
        return qq.maps.geometry.spherical.computeDistanceBetween(a, b);
    };
}
exports.default = install;
