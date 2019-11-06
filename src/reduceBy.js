import _curry4 from './internal/_curry4'
import _has from './internal/_has'
import _reduce from './internal/_reduce'

const reduceBy = _curry4((valueFn, valueAcc, keyFn, list) => {
  return _reduce((acc, cur) => {
    const key = keyFn(cur)
    acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, cur)
    return acc
  }, {}, list)
})
export default reduceBy
