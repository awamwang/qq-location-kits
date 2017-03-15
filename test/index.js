var Kits = require('../dist')

var kits = new Kits({
  need: {
    geolocation: true,
    geoTools: true,
    webservice: true,
    wxJssdk: true
  },
  serviceKey: 'QMCBZ-3R33V-CKYPM-UITRH-5CRGH-2UBI3',
  serviceReference: 'niwodai'
})
//
// kits.watchPosition(5, function (location) {
//   console.log(location)
// }, function (err) {
//   console.log(err)
// }, {
//   locationOptions: {
//     canIp: true
//   }
// })

kits.getDistance('39.983171,116.308479', '39.996060,116.353455').then((result) => {
  console.log(result)
})