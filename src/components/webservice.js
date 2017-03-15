import config from '../config'
import * as utils from '../utils'

export default function install (Kits) {
  // 逆地址解析
  Kits.prototype.getGeocoder = (lat, lng) => {
    return new Promise((resolve, reject) => {
      utils.jsonp(`${config.webserviceApiRoot}/geocoder/v1/?location=${lat},${lng}&output=jsonp&key=${config.serviceKey}`).then(response => {
        resolve(response)
      }).catch(data => {
        reject(data)
      })
    })
  }
  // 地图距离
  Kits.prototype.getDistance = (from, to, mode = 'walking') => {
    return new Promise((resolve, reject) => {
      utils.jsonp(`${config.webserviceApiRoot}/distance/v1/?mode=${mode}&from=${from}&to=${to}&output=jsonp&key=${config.serviceKey}`).then(response => {
        resolve(response)
      }).catch(data => {
        reject(data)
      })
    })
  }
  // 行政区划-list
  Kits.prototype.districtList = () => {
    return new Promise((resolve, reject) => {
      utils.jsonp(`${config.webserviceApiRoot}/district/v1/list?output=jsonp&key=${config.serviceKey}`).then(response => {
        resolve(response)
      }).catch(data => {
        reject(data)
      })
    })
  }
  // 行政区划-getchildren
  Kits.prototype.districtGetchildren = (id) => {
    return new Promise((resolve, reject) => {
      utils.jsonp(`${config.webserviceApiRoot}/district/v1/getchildren?id=${id}&output=jsonp&key=${config.serviceKey}`).then(response => {
        resolve(response)
      }).catch(data => {
        reject(data)
      })
    })
  }
  // 行政区划-keyword
  Kits.prototype.districtKeyword = (keyword) => {
    return new Promise((resolve, reject) => {
      utils.jsonp(`${config.webserviceApiRoot}/district/v1/search?keyword=${keyword}&output=jsonp&key=${config.serviceKey}`).then(response => {
        resolve(response)
      }).catch(data => {
        reject(data)
      })
    })
  }
}
