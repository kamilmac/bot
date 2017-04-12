const Koa = require('koa');
const app = new Koa();

app.use( async (ctx, next) => {
  console.log('req', ctx.request)
  if (ctx.request.path === '/webhook') {
    ctx.body = 'Hello World';
  }
});

app.listen(3000)