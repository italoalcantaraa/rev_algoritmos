import { fastify } from 'fastify'
import { DBMemory } from './database-in-memory.js'
import { useParams } from "react-router-dom"

const server = fastify()
const DBMemory = new DBMemory()

server.post('/videos', (video) => {
  DBMemory.create(video)
  
  return {
    message: "Vídeo adicionado!"
  };
})

server.get('/videos', () => {
  return DBMemory.listAll()
})

server.put('/videos/:id', (video) => {
  const { id } = useParams()

  DBMemory.put(id, video)
})

server.delete('/videos/:id', () => {
  const { id } = useParams()

  DBMemory.delete(id)
})

server.listen({
  port: 3000
})