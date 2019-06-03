export const capitalize = (value: string): string =>
  value
    .split(' ')
    .map(
      (word: string): string =>
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ')

export const padLeft = (n: string, length: number, z?: string): string => {
  z = z || '0'
  n = n + ''
  return n.length >= length ? n : new Array(length - n.length + 1).join(z) + n
}

export const padRight = (n: string, length: number, z?: string): string => {
  z = z || '0'
  n = n + ''
  return n.length >= length ? n : n + new Array(length - n.length + 1).join(z)
}

export const getDataString = (func: string, arrVals: Array<any>): string => {
  let val = ''
  for (let i = 0; i < arrVals.length; i++) val += padLeft(arrVals[i], 64)
  const data = func + val
  return data
}

export function sanitizeHex (hex: string): string {
  hex = removeHexPrefix(hex)
  hex = hex.length % 2 !== 0 ? '0' + hex : hex
  if (hex) {
    hex = addHexPrefix(hex)
  }
  return hex
}

export function addHexPrefix (hex: string): string {
  if (hex.toLowerCase().substring(0, 2) === '0x') {
    return hex
  }
  return '0x' + hex
}

export function removeHexPrefix (hex: string): string {
  if (hex.toLowerCase().substring(0, 2) === '0x') {
    return hex.substring(2)
  }
  return hex
}
