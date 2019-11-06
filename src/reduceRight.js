import _curry3 from './internal/_curry3'

const reduceRight = _curry3((fn, acc, list) => {
  let idx = list.length
  while (--idx >= 0) {
    acc = fn(list[idx], acc)
  }
  return acc
})
export default reduceRight
