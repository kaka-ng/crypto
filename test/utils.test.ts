
import t from 'tap'
import { randomBytes, randomNum, randomUUID } from '../lib/utils'

t.plan(3)

t.test('randomBytes()', function (t) {
  t.plan(2)

  t.test('randomByes(16)', function (t) {
    t.plan(2)
    const result = randomBytes(16)

    t.equal(result instanceof Buffer, true)
    t.equal(result.length, 16)
  })

  t.test('randomByes(16, "hex")', function (t) {
    t.plan(2)
    const result = randomBytes(16, 'hex')

    t.equal(typeof result, 'string')
    t.equal(result.length, 32)
  })
})

t.test('randomNum()', function (t) {
  t.plan(2)

  t.test('randomNum()', function (t) {
    t.plan(2)
    const result = randomNum()

    t.equal(typeof result, 'string')
    t.equal(result.length, 6)
  })

  t.test('randomNum(8)', function (t) {
    t.plan(2)
    const result = randomNum(8)

    t.equal(typeof result, 'string')
    t.equal(result.length, 8)
  })
})

t.test('randomUUID', function (t) {
  t.plan(1)

  t.same(/[a-f0-9]{8}-[a-f0-9]{4}-4[a-f0-9]{3}-[89ab][a-f0-9]{3}-[a-f0-9]{12}/i.test(randomUUID()), true)
})
