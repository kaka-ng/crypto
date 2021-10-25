import t from 'tap'
import * as Bcrypt from '../lib/bcrypt'

t.plan(1)
t.test('bcrypt', function (t) {
  t.plan(7)

  t.test('salt', async function (t) {
    t.plan(1)
    const salt = await Bcrypt.salt()
    t.equal(salt.length, 29)
  })

  t.test('salt(10)', async function (t) {
    t.plan(1)
    const salt = await Bcrypt.salt(10)
    t.equal(salt.length, 29)
  })

  t.test('hash(foo)', async function (t) {
    t.plan(1)
    const hashed = await Bcrypt.hash('foo')
    t.equal(hashed.length, 60)
  })

  t.test('hash(foo, 10)', async function (t) {
    t.plan(1)
    const hashed = await Bcrypt.hash('foo', 10)
    t.equal(hashed.length, 60)
  })

  t.test('hash(foo, salt)', async function (t) {
    t.plan(1)
    const salt = await Bcrypt.salt()
    const hashed = await Bcrypt.hash('foo', salt)
    t.equal(hashed.length, 60)
  })

  t.test('compare(foo, foo)', async function (t) {
    t.plan(1)
    const hashed = await Bcrypt.hash('foo')
    const result = await Bcrypt.compare('foo', hashed)
    t.equal(result, true)
  })

  t.test('compare(bar, foo)', async function (t) {
    t.plan(1)
    const hashed = await Bcrypt.hash('foo')
    const result = await Bcrypt.compare('bar', hashed)
    t.equal(result, false)
  })
})
