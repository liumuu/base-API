'use strict'

const { Service } = require('egg')

class DemoService extends Service {
  async get(name) {
    const user = name === 'nulluser' ? null : { name: 'username' }

    return await user
  }
}

module.exports = DemoService
