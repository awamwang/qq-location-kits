"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config_1 = require("./config");
var geolocation_1 = require("./components/geolocation");
var geo_tools_1 = require("./components/geo-tools");
var webservice_1 = require("./components/webservice");
var wx_jssdk_1 = require("./components/wx-jssdk");
function makeConfig(options) {
    config_1.default.need = options.need || config_1.default.need;
    config_1.default.httpMethod = options.httpMethod || config_1.default.httpMethod;
    config_1.default.serviceKey = options.serviceKey || config_1.default.serviceKey;
    config_1.default.serviceReference = options.serviceReference || config_1.default.serviceReference;
    config_1.default.jsonpMethod = options.jsonpMethod || config_1.default.jsonpMethod;
}
function default_1(Kits) {
    Kits.prototype._init = function (options) {
        makeConfig(options);
        if (config_1.default.need.geolocation) {
            geolocation_1.default(Kits);
        }
        if (config_1.default.need.geoTools) {
            geo_tools_1.default(Kits);
        }
        if (config_1.default.need.webservice) {
            webservice_1.default(Kits);
        }
        if (config_1.default.need.wxJssdk) {
            wx_jssdk_1.default(Kits);
        }
    };
}
exports.default = default_1;
