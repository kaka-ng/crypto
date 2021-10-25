import * as crypto from 'crypto'

export type RandomBytesEncode = BufferEncoding | 'buffer'

export function randomBytes (size: number, encoding?: 'buffer'): Buffer
export function randomBytes (size: number, encoding: BufferEncoding): string
export function randomBytes (size: number, encoding: RandomBytesEncode = 'buffer'): string | Buffer {
  const randomBytes = crypto.randomBytes(size)
  if (encoding === 'buffer') {
    return randomBytes
  } else {
    return randomBytes.toString(encoding)
  }
}
