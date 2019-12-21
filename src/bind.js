import _arity from './internal/_arity'
import _curry2 from './internal/_curry2'


/**
 * Creates a function that is bound to a context.
 *
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @example
 *
 * import { bind } from 'funale'
 *
 * const module = { x: 42, getX: function () { return this.x } }
 * const unboundGetX = module.getX
 * const boundGetX = bind(unBoundGetX, module)
 * unboundGetX() // undefined
 * boundGetX() // 42
 */
const bind = _curry2((fn, thisObj) => {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments)
  })
})
export default bind
