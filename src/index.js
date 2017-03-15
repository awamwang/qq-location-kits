import * as utils from './utils'
import init from './init'

if (typeof window === 'undefined') {
  utils.warn('only in browser')
}

function Kits (options) {
  this._init(options)
}

init(Kits)

export default Kits
