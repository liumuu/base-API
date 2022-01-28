'use strict'

module.exports = (app) => {
  const { router, controller } = app

  router.get('/', controller.home.index)

  router.get('/demo', controller.demo.index)
  router.get('/demo/time', controller.demo.time)
  router.post('/demo/post', controller.demo.post)
}
