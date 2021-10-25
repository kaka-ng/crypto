import * as crypto from 'crypto'
import { randomBytes } from './utils'

export function computeKeySize (algorithm: crypto.CipherCCMTypes | crypto.CipherGCMTypes = 'aes-256-gcm'): number {
  switch (algorithm) {
    case 'aes-128-ccm':
    case 'aes-128-gcm':
      return 16
    case 'aes-192-ccm':
    case 'aes-192-gcm':
      return 24
    case 'aes-256-ccm':
    case 'aes-256-gcm':
    default:
      return 32
  }
}

export interface EncryptionResult {
  value: string
  iv: string
  authTag: string
  secret: crypto.BinaryLike
  salt: crypto.BinaryLike
}

export function encrypt (
  token: string,
  algorithm: crypto.CipherCCMTypes | crypto.CipherGCMTypes = 'aes-256-gcm',
  secret: crypto.BinaryLike = randomBytes(32, 'hex'),
  salt: crypto.BinaryLike = randomBytes(32, 'hex')
): EncryptionResult {
  const key: Buffer = crypto.scryptSync(secret, salt, computeKeySize(algorithm))
  const iv: Buffer = Buffer.alloc(16, randomBytes(16), 'binary')
  const cipher: crypto.CipherGCM = crypto.createCipheriv(algorithm, key, iv) as crypto.CipherGCM
  cipher.setAAD(Buffer.from(`${String(secret)}${String(salt)}`))

  let value = cipher.update(token, 'utf8', 'hex')
  value += cipher.final('hex')
  return {
    value: value,
    iv: iv.toString('hex'),
    authTag: cipher.getAuthTag().toString('hex'),
    secret: secret,
    salt: salt
  }
}

export function decrypt (
  encrypted: string,
  iv: Buffer,
  authTag: Buffer,
  algorithm: crypto.CipherCCMTypes | crypto.CipherGCMTypes,
  secret: crypto.BinaryLike,
  salt: crypto.BinaryLike
): string {
  const key: Buffer = crypto.scryptSync(secret, salt, computeKeySize(algorithm))
  const decipher = crypto.createDecipheriv(algorithm, key, iv) as crypto.DecipherGCM
  decipher.setAAD(Buffer.from(`${String(secret)}${String(salt)}`))
  decipher.setAuthTag(authTag)

  let value = decipher.update(encrypted, 'hex', 'utf8')
  value += decipher.final('utf8')
  return value
}
