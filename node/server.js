import { createServer } from 'node:http'

const PORT = 3000

const server = createServer(() => {
  console.log(`API rodando na porta ${PORT}`)
})

server.listen(PORT)