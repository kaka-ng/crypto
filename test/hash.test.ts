
import t from 'tap'
import * as Hash from '../lib/hash'

t.plan(6)

t.test('hash', function (t) {
  t.plan(2)

  t.test('hash(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.hash('foo'),
      'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
    )
  })

  t.test('hash(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.hash('foo', 'base64'),
      '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
    )
  })
})

t.test('md5', function (t) {
  t.plan(2)

  t.test('md5(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.md5('foo'), 'acbd18db4cc2f85cedef654fccc4a4d8')
  })

  t.test('md5(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.md5('foo', 'base64'), 'rL0Y20zC+Fzt72VPzMSk2A==')
  })
})

t.test('sha1', function (t) {
  t.plan(2)

  t.test('sha1(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.sha1('foo'), '0beec7b5ea3f0fdbc95d0dd47f3c5bc275da8a33')
  })

  t.test('sha1(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.sha1('foo', 'base64'), 'C+7Hteo/D9vJXQ3UfzxbwnXaijM=')
  })
})

t.test('sha224', function (t) {
  t.plan(2)

  t.test('sha224(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.sha224('foo'), '0808f64e60d58979fcb676c96ec938270dea42445aeefcd3a4e6f8db')
  })

  t.test('sha224(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.sha224('foo', 'base64'), 'CAj2TmDViXn8tnbJbsk4Jw3qQkRa7vzTpOb42w==')
  })
})

t.test('sha256', function (t) {
  t.plan(2)

  t.test('sha256(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.sha256('foo'), '2c26b46b68ffc68ff99b453c1d30413413422d706483bfa0f98a5e886266e7ae')
  })

  t.test('sha256(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.sha256('foo', 'base64'), 'LCa0a2j/xo/5m0U8HTBBNBNCLXBkg7+g+YpeiGJm564=')
  })
})

t.test('sha512', function (t) {
  t.plan(2)

  t.test('sha512(foo)', function (t) {
    t.plan(1)
    t.equal(Hash.sha512('foo'),
      'f7fbba6e0636f890e56fbbf3283e524c6fa3204ae298382d624741d0dc6638326e282c41be5e4254d8820772c5518a2c5a8c0c7f7eda19594a7eb539453e1ed7'
    )
  })

  t.test('sha512(foo, base64)', function (t) {
    t.plan(1)
    t.equal(Hash.sha512('foo', 'base64'),
      '9/u6bgY2+JDlb7vzKD5STG+jIErimDgtYkdB0NxmODJuKCxBvl5CVNiCB3LFUYosWowMf37aGVlKfrU5RT4e1w=='
    )
  })
})
