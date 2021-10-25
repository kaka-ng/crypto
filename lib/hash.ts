import * as crypto from 'crypto'

export function hash (
  value: crypto.BinaryLike,
  encoding: crypto.BinaryToTextEncoding = 'hex',
  algorithm = 'sha512'
): string {
  const hash = crypto.createHash(algorithm)
  hash.update(value)
  return hash.digest(encoding)
}

export function md5 (value: string, encoding: crypto.BinaryToTextEncoding = 'hex'): string {
  return hash(value, encoding, 'md5')
}

export function sha1 (value: string, encoding: crypto.BinaryToTextEncoding = 'hex'): string {
  return hash(value, encoding, 'sha1')
}

export function sha224 (value: string, encoding: crypto.BinaryToTextEncoding = 'hex'): string {
  return hash(value, encoding, 'sha224')
}

export function sha256 (value: string, encoding: crypto.BinaryToTextEncoding = 'hex'): string {
  return hash(value, encoding, 'sha256')
}

export function sha512 (value: string, encoding: crypto.BinaryToTextEncoding = 'hex'): string {
  return hash(value, encoding, 'sha512')
}
