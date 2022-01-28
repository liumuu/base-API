'use strict'

const { app, mock, assert } = require('egg-mock/bootstrap')

describe('❤️ test/controller/demo.test.js:', () => {
  describe('order:', () => {
    before(() => console.log('order 1'))
    before(() => console.log('order 2'))
    beforeEach(() => console.log('order 3'))
    it('should worker', () => console.log('order 4'))
    afterEach(() => console.log('order 5'))
    after(() => console.log('order 6'))
  })

  describe('ctx:', () => {
    it('should get a ctx', () => {
      const ctx = app.mockContext()

      assert(ctx.method === 'GET')
      assert(ctx.url === '/')
    })

    it('should mock ctx.user', () => {
      const ctx = app.mockContext({
        user: {
          name: 'username',
        },
      })

      assert(ctx.user)
      assert(ctx.user.name === 'username')
    })
  })

  describe('async:', () => {
    it('should redirect', () => {
      return app.httpRequest().get('/').expect(200)
    })

    it('should redirect', (done) => {
      app.httpRequest().get('/').expect(200, done)
    })

    it('should redirect', async () => {
      await app.httpRequest().get('/').expect(200)
    })
  })

  describe('POST/:', () => {
    it('should status 200 and get the request body', () => {
      // ! CSRF token
      app.mockCsrf()

      return app.httpRequest().post('/demo/post').type('form').send({ foo: 'bar' }).expect(200).expect({ foo: 'bar' })
    })
  })
})
