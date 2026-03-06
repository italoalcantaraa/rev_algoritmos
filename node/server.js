import { createServer } from 'node:http'

const server = createServer((port) => {
  console.log(`API rodando na porta ${port.port}`)
})

server.listen(3000)