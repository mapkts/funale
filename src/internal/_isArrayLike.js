const _isArrayLike = x => x != null && typeof x !== 'function' && typeof x.length === 'number' && (x.length === 0 || x.length > 0 && x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1))
export default _isArrayLike
