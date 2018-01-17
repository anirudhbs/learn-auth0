const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const path = require('path')
const jwt = require('express-jwt')
const jwks = require('jwks-rsa')

const app = express()
const PORT = 8080

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(express.static('public'))

const authCheck = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://keep-up.auth0.com/.well-known/jwks.json'
  }),
  audience: 'http://learning-auth0.com',
  issuer: 'https://keep-up.auth0.com/',
  algorithms: ['RS256']
})

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/list', authCheck, (req, res) => {
  const list = [7, 8, 9]
  res.json(list)
})

app.get('/otherlist', (req, res) => {
  const list = [2001, 2002, 2003]
  res.json(list)
})

app.listen(PORT, () => {
  console.log(`listening on port ${PORT}`)
})
