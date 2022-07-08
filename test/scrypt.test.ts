import t from 'tap'
import * as Scrypt from '../lib/scrypt'

t.plan(1)
t.test('scrypt', function (t) {
  t.plan(6)

  t.test('hash(foo)', async function (t) {
    t.plan(1)
    const hashed = await Scrypt.hash('foo')
    t.equal(Scrypt.REGEXP.test(hashed), true)
  })

  t.test('hash(foo, 10)', async function (t) {
    t.plan(1)
    const hashed = await Scrypt.hash('foo', 10)
    t.equal(Scrypt.REGEXP.test(hashed), true)
  })

  t.test('hash(foo, 64, 2^15, 8, 2)', async function (t) {
    t.plan(1)
    const hashed = await Scrypt.hash('foo', 64, 32768, 8, 2)
    t.equal(Scrypt.REGEXP.test(hashed), true)
  })

  t.test('compare(foo, foo)', async function (t) {
    t.plan(1)
    const hashed = await Scrypt.hash('foo')
    const result = await Scrypt.compare('foo', hashed)
    t.equal(result, true)
  })

  t.test('compare(bar, foo)', async function (t) {
    t.plan(1)
    const hashed = await Scrypt.hash('foo')
    const result = await Scrypt.compare('bar', hashed)
    t.equal(result, false)
  })

  t.test('compare(bar, invalid)', async function (t) {
    t.plan(1)
    t.rejects(async () => {
      await Scrypt.compare('bar', '$scrypt$')
    }, 'Invalid Scrypt Hash Format.')
  })
})
