import _indexOf from './_indexOf'

export default function _includes(x, xs) {
  return _indexOf(x, xs, 1) >= 0
}
