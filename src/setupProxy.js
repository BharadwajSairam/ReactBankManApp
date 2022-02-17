const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://bank2070-env-1.eba-29dnbjtn.us-east-1.elasticbeanstalk.com/',
      changeOrigin: true,
    })
  );
};