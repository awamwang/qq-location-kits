import jsonpFunc from 'jsonp'

const IS_HTTPS = window && (window.location.href.indexOf('https') > -1)

// 处理返回结果

// log、warn
export let warn = function (msg, code) {
  console.log(new Error(msg))
}

export let exit = function (code) {
  throw new Error('exit with code(' + code + ')')
}

export let jsonp = function (url, opts) {
  return new Promise((resolve, reject) => {
    jsonpFunc(url, opts, function (err, data) {   // https://github.com/webmodules/jsonp
      if (err) {
        reject(err)
      } else {
        resolve(data)
      }
    })
  })
}

export let isHttps = function (msg) {
  return IS_HTTPS
}
