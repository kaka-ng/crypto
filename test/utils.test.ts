
import t from 'tap'
import { randomBytes } from '../lib/utils'

t.plan(1)

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
