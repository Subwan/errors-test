const jsonServer = require('json-server');
const path = require('path')

const server = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'))
const middlewares = jsonServer.defaults();

server.use(middlewares)
server.use(jsonServer.rewriter({
  '/api/test': '/test'
}));
server.use((req, res, next) => {
  const randomValue = Math.random();

  if (randomValue < 0.3) { 
    next() 
  } else if (randomValue < 0.5) {
    res.sendStatus(401)
  } else if (randomValue) {
    res.sendStatus(409)
  }
})
server.use(router)
server.listen(4000, () => {
  console.log('JSON Server is running')
})