// import config from '../config'
import * as utils from '../utils'

function init () {
  if (typeof wx === 'undefined') {
    utils.warn('jssdk wx全局变量不存在，http://qydev.weixin.qq.com/wiki/index.php?title=%E5%BE%AE%E4%BF%A1JS-SDK%E6%8E%A5%E5%8F%A3#.E6.AD.A5.E9.AA.A4.E4.B8.80.EF.BC.9A.E5.BC.95.E5.85.A5JS.E6.96.87.E4.BB.B6')
  }
}

export default function install (Kits) {
  init()

  // 监听位置信息的改变
  let watcher = null
  Kits.prototype.jssdkWatchPosition = (interTime, type = 'gcj02', cb, errCb, options = {}) => {
    getLocation(true)

    function startWatcher () {
      watcher = window.setInterval(function () {
        getLocation()
      }, interTime)
    }

    function getLocation (isFirst) {
      wx.getLocation({
        type: type, // 默认为wgs84的gps坐标，如果要返回直接给openLocation用的火星坐标，可传入'gcj02'
        complete: function (location) {
          if (location.errMsg === 'getLocation:ok') {
            if (isFirst && options.firstCb) {
              options.firstCb(location)
            } else {
              cb(location)
            }

            isFirst && startWatcher()
          } else {
            errCb(location)
          }
        }
      })
    }
  }

  // 停止监听位置信息的改变
  Kits.prototype.jssdkClearWatch = () => {
    if (watcher) {
      window.clearInterval(watcher)
      watcher = null
    }
  }
}
