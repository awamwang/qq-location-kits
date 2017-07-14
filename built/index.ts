"use strict";
declare function require(path: string): any;

Object.defineProperty(exports, "__esModule", { value: true });
var utils = require("./utils");
var init_1 = require("./init");
if (typeof window === 'undefined') {
    utils.warn('only in browser');
}
function Kits(options) {
    this._init(options);
}
init_1.default(Kits);
exports.default = Kits;
