import { fastify } from 'fastify'
import { DBMemory } from './database-in-memory.js'

const server = fastify()

server.post('/videos', (video) => {
  const response = DBMemory.create(video)
  return response;
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