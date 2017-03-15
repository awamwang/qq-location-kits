import * as utils from './utils'

export default {
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
}
