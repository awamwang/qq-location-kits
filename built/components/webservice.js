"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("../config");
var utils = require("../utils");
function install(Kits) {
    // 逆地址解析
    Kits.prototype.getGeocoder = function (lat, lng) {
        return new Promise(function (resolve, reject) {
            utils.jsonp(config_1.default.webserviceApiRoot + "/geocoder/v1/?location=" + lat + "," + lng + "&output=jsonp&key=" + config_1.default.serviceKey).then(function (response) {
                resolve(response);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
    // 地图距离
    Kits.prototype.getDistance = function (from, to, mode) {
        if (mode === void 0) { mode = 'walking'; }
        return new Promise(function (resolve, reject) {
            utils.jsonp(config_1.default.webserviceApiRoot + "/distance/v1/?mode=" + mode + "&from=" + from + "&to=" + to + "&output=jsonp&key=" + config_1.default.serviceKey).then(function (response) {
                resolve(response);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
    // 行政区划-list
    Kits.prototype.districtList = function () {
        return new Promise(function (resolve, reject) {
            utils.jsonp(config_1.default.webserviceApiRoot + "/district/v1/list?output=jsonp&key=" + config_1.default.serviceKey).then(function (response) {
                resolve(response);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
    // 行政区划-getchildren
    Kits.prototype.districtGetchildren = function (id) {
        return new Promise(function (resolve, reject) {
            utils.jsonp(config_1.default.webserviceApiRoot + "/district/v1/getchildren?id=" + id + "&output=jsonp&key=" + config_1.default.serviceKey).then(function (response) {
                resolve(response);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
    // 行政区划-keyword
    Kits.prototype.districtKeyword = function (keyword) {
        return new Promise(function (resolve, reject) {
            utils.jsonp(config_1.default.webserviceApiRoot + "/district/v1/search?keyword=" + keyword + "&output=jsonp&key=" + config_1.default.serviceKey).then(function (response) {
                resolve(response);
            }).catch(function (data) {
                reject(data);
            });
        });
    };
}
exports.default = install;
