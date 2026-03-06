import { fastify } from 'fastify'
import { DBMemory } from './database-in-memory.js'
import { useParams } from "react-router-dom"

const server = fastify()

const useParams = useParams()

server.post('/videos', (video) => {
  DBMemory.create(video)
  
  return {
    message: "Vídeo adicionado!"
  };
})

server.get('/videos', () => {
  return DBMemory.get()
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