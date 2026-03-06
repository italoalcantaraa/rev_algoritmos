import { fastify } from 'fastify'
import {} from './database-in-memory.js'

const server = fastify()

server.post('/videos', () => {
  return "POST"
})

server.get('/videos', () => {
  return "GET"
})

server.put('/videos/:id', () => {
  return "PUT"
})

server.delete('/videos/:id', () => {
  return "DELETE"
})

server.listen({
  port: 3000
})