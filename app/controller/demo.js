'use strict'

const Controller = require('egg').Controller

class DemoController extends Controller {
  async index() {
    this.ctx.body = '<h1>Demo</h1>'
  }

  async post() {
    this.ctx.body = this.ctx.request.body
  }

  async time() {
    this.ctx.body = this.app.currentTime()
  }
}

module.exports = DemoController
