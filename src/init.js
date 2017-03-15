import config from './config'

import geolocation from './components/geolocation'
import geoTools from './components/geo-tools'
import webservice from './components/webservice'
import wxJssdk from './components/wx-jssdk'

function makeConfig (options) {
  config.need = options.need || config.need
  config.httpMethod = options.httpMethod || config.httpMethod
  config.serviceKey = options.serviceKey || config.serviceKey
  config.serviceReference = options.serviceReference || config.serviceReference
  config.jsonpMethod = options.jsonpMethod || config.jsonpMethod
}

export default function (Kits) {
  Kits.prototype._init = function (options) {
    makeConfig(options)

    if (config.need.geolocation) {
      geolocation(Kits)
    }
    if (config.need.geoTools) {
      geoTools(Kits)
    }
    if (config.need.webservice) {
      webservice(Kits)
    }
    if (config.need.wxJssdk) {
      wxJssdk(Kits)
    }
  }
}
