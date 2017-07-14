"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jsonp_1 = require("jsonp");
var IS_HTTPS = window && (window.location.href.indexOf('https') > -1);
// 处理返回结果
// log、warn
exports.warn = function (msg, code) {
    console.log(new Error(msg));
};
exports.exit = function (code) {
    throw new Error('exit with code(' + code + ')');
};
exports.jsonp = function (url, opts) {
    return new Promise(function (resolve, reject) {
        jsonp_1.default(url, opts, function (err, data) {
            if (err) {
                reject(err);
            }
            else {
                resolve(data);
            }
        });
    });
};
exports.isHttps = function (msg) {
    return IS_HTTPS;
};
