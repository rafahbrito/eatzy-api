import { Elysia } from 'elysia'

const PORT = 3333
const app = new Elysia()
  .get('/', () => {
    return 'Hello World'
  })

app.listen(PORT, () => {
  console.log(`HTTP server running on ${PORT}`)
})
