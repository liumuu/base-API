'use strict'

const { app, mock, assert } = require('egg-mock/bootstrap')

describe('❤️ test/service/demo.test.js:', () => {
  it('should get exists user', async () => {
    const ctx = app.mockContext()

    const user = await ctx.service.demo.get('username')

    assert(user)
    assert(user.name === 'username')
  })

  it('should get null when user not exists', async () => {
    const ctx = app.mockContext()
    const user = await ctx.service.demo.get('nulluser')

    assert(!user)
  })
})
