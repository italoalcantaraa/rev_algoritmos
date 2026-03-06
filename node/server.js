import { fastify } from 'fastify'
import { DBMemory } from './database-in-memory.js'

const server = fastify()
const dataBaseMemory = new DBMemory()

server.post('/videos', (request, reply) => {
  const video = request.body
  dataBaseMemory.create(video)

  reply.status(201)
})

server.get('/videos', () => {
  return Array.from(dataBaseMemory.listAll())
})

server.put('/videos/:id', (request, reply) => {
  const { id } = request.params
  const video = request.body

  dataBaseMemory.update(id, video)

  return {
    message: "Vídeo atualizado!"
  }
})

server.delete('/videos/:id', (request, reply) => {
  const { id } = request.params

  dataBaseMemory.delete(id)

  return {
    message: "Vídeo deletado!"
  }
})

server.listen({
  port: 3000
}, (err, address) => {
  if (err) throw err
  console.log(`Servidor rodando em ${address}`)
})