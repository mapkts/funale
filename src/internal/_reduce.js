import _isArrayLike from './_isArrayLike'

function arrayReduce(reducer, seed, list) {
  let idx = -1
  let acc = seed
  const len = list.length
  while (++idx < len) {
    acc = reducer(acc, list[idx])
  }

  return acc
}

function iterableReduce(reducer, seed, iterable) {
  let acc = seed
  let step = iterable.next()
  while (!step.done) {
    acc = reducer(acc, step.value)
    step = iterable.next()
  }

  return acc
}

const iterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator'

export default function _reduce(reducer, seed, iterable) {
  if (_isArrayLike(iterable)) return arrayReduce(reducer, seed, iterable)
  if (typeof iterable[iterator] !== 'undefined') return iterableReduce(reducer, seed, iterable[iterator]())
  if (typeof iterable.next === 'function') return iterableReduce(reducer, seed, iterable)
  if (typeof iterable.reduce === 'function') return iterable.reduce(reducer, seed, iterable)
}
