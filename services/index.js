const express = require('express')
const app = express()
const PORT = 3000

app.use(express.json())

function validateHeaders(req, res, next) {
  const userId = req.header('User-id')
  const scope = req.header('Scope')

  if (userId !== 'ifabula' || scope !== 'user') {
    return res.status(401).json({
      responseCode: 401,
      responseMessage: 'UNAUTHORIZED'
    })
  }

  next()
}

app.get('/api/data', validateHeaders, (req, res) => {
  res.json({
    responseCode: 200,
    responseMessage: 'GET Success',
    data: {
      message: 'This is GET data',
      timestamp: new Date()
    }
  })
})

app.post('/api/data', validateHeaders, (req, res) => {
  const { name, age } = req.body

  res.json({
    responseCode: 200,
    responseMessage: 'POST Success',
    data: {
      name,
      age,
      receivedAt: new Date()
    }
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`)
})
