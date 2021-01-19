const jwt = require('jsonwebtoken')
const SECRET_KEY = process.env.SECRET_KEY

const generateToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY)
}

const decodingToken = (token) => {
  return jwt.verify(token, SECRET_KEY)
}


module.exports = { generateToken, decodingToken }