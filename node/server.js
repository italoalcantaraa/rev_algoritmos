import { fastify } from 'fastify'

const server = fastify()

server.post('/videos', () => {
  return "POST"
})

server.get('/videos', () => {
  return "GET"
})

server.post('/videos', () => {
  return "POST"
})
server.post('/videos', () => {
  return "POST"
})

server.listen({
  port: 3000
})