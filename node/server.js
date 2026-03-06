import { fastify } from 'fastify'
import { DBMemory } from './database-in-memory.js'
import { useParams } from "react-router-dom"

const server = fastify()
const dataBaseMemory = new DBMemory()

server.post('/videos', (video) => {
  dataBaseMemory.create(video)
  
  return {
    message: "Vídeo adicionado!"
  };
})

server.get('/videos', () => {
  return dataBaseMemory.listAll()
})

server.put('/videos/:id', (video) => {
  const { id } = useParams()

  dataBaseMemory.put(id, video)
})

server.delete('/videos/:id', () => {
  const { id } = useParams()

  dataBaseMemory.delete(id)
})

server.listen({
  port: 3000
})