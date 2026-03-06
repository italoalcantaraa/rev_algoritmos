import { fastify } from 'fastify'

const server = fastify()


const PORT = 3000

server.listen({
  port: 3000
})