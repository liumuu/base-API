'use strict'

const { app, mock, assert } = require('egg-mock/bootstrap')

describe('❤️ test/controller/home.test.js:', () => {
  describe('GET /', () => {
    it('should status 200 and get the body', () => {
      return app.httpRequest().get('/').expect(200).expect('Hello World')
    })
  })
})
