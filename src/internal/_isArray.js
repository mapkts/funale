const _isArray = x => Object.prototype.toString.call(x) === '[object Array]'
export default Array.isArray || _isArray
