import { createServer } from 'node:http'

const server = createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Servidor rodando!')
})

const PORT = 3000

server.listen(PORT, () => {
  console.log(`API rodando na porta ${PORT}`)
})