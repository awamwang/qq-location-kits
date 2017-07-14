"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
exports.default = {
    need: {
        geolocation: false,
        geoTools: false,
        webservice: false,
        wxJssdk: false
    },
    webserviceApiRoot: utils.isHttps() ? 'https://apis.map.qq.com/ws' : 'http://apis.map.qq.com/ws',
    serviceKey: null,
    serviceReference: null,
    jsonpMethod: utils.jsonp
};
