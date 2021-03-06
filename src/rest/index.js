const Router = require('@koa/router');
const installCharactersRouter = require('./_characters');
const installfilmRouter = require('./_films');
const installUserRouter = require('./_user');

/**
 * Install all routes in the given Koa application.
 *
 * @param {Koa} app - The Koa application.
 */
module.exports = (app) => {
  const router = new Router({
    prefix: '/api',
  });

  installUserRouter(router);
  installCharactersRouter(router);
  installfilmRouter(router);

  app.use(router.routes()).use(router.allowedMethods());
};
