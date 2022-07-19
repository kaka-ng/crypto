import t from 'tap'
import * as crypto from '../lib/index'
import { AES, Base64, md5, randomBytes, Scrypt, sha1, sha224, sha256, sha512 } from '../lib/index'

t.plan(1)
t.test('import', function (t) {
  t.plan(2)

  t.test('import * as', function (t) {
    t.plan(9)
    t.equal('AES' in crypto, true)
    t.equal('Base64' in crypto, true)
    t.equal('Scrypt' in crypto, true)
    t.equal('md5' in crypto, true)
    t.equal('sha1' in crypto, true)
    t.equal('sha224' in crypto, true)
    t.equal('sha256' in crypto, true)
    t.equal('sha512' in crypto, true)
    t.equal('randomBytes' in crypto, true)
  })

  t.test('import {} from', function (t) {
    t.plan(9)
    t.ok(AES)
    t.ok(Base64)
    t.ok(Scrypt)
    t.ok(md5)
    t.ok(sha1)
    t.ok(sha224)
    t.ok(sha256)
    t.ok(sha512)
    t.ok(randomBytes)
  })
})
