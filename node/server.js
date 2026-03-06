import { fastify } from 'fastify'

const PORT = 3000

const server = fastify()

server.lister({
  port: 3000
})