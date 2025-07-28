import express from 'express'
import process from 'process'

process.on('SIGINT', () => {
  console.log('Received SIGINT, shutting down gracefully...')
  process.exit(0)
})

process.on('SIGTERM', () => {
  console.log('Received SIGTERM, shutting down gracefully...')
  process.exit(0)
})


const app = express()

app.get('/', (req, res) => {
  res.send('Hello World')
})

app.listen(3000)