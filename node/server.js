import { createServer } from 'node:http'

const PORT = 3000

const server = createServer((req, res) => {
  res.write("OPA!")
})

server.listen(PORT)