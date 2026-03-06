import { fastify } from 'fastify'

const PORT = 3000

const server = fastify()

server.listen({
  port: 3000
})


server.get('/hello', () => {
  return {
    message: "Hello"
  }
})