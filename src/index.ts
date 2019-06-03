import fastify from 'fastify'
import helmet from 'fastify-helmet'
import cors from 'fastify-cors'
import config from './config'
import { apiGetFile, apiPostFile } from './example'

const app = fastify({ logger: config.debug })

app.register(helmet)
app.register(cors)

app.get('/hello', (req, res) => {
  res.status(200).send(`Hello World`)
})

app.get('/file', async (req, res) => {
  const fileName = req.query.fileName

  if (!fileName || typeof fileName !== 'string') {
    res.status(500).send({
      success: false,
      error: 'Internal Server Error',
      message: 'Missing or invalid fileName parameter'
    })
  }

  try {
    const file = await apiGetFile(fileName)

    res.status(200).send({
      success: true,
      result: file
    })
  } catch (error) {
    console.error(error)

    res.status(500).send({
      success: false,
      error: 'Internal Server Error',
      message: error.message
    })
  }
})

app.post('/file', async (req, res) => {
  const fileName = req.query.fileName

  if (!fileName || typeof fileName !== 'string') {
    res.status(500).send({
      success: false,
      error: 'Internal Server Error',
      message: 'Missing or invalid fileName parameter'
    })
  }

  try {
    const response = await apiPostFile(fileName, req.body)

    res.status(200).send({
      success: true,
      result: response
    })
  } catch (error) {
    console.error(error)

    res.status(500).send({
      success: false,
      error: 'Internal Server Error',
      message: error.message
    })
  }
})

app.listen(config.port, (err, address) => {
  if (err) throw err
  console.log(`Server listening on ${address}`)
})
