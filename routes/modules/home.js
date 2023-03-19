const express = require('express')
const router = express.Router()

const user = require('../../models/user')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  const warningMessage = true

  return user.findOne({ email, password })
    .lean()
    .then(user => {
      if (user) {
        res.render('index', { user })
      } else {
        res.render('index', { warningMessage, email })
      }
    })
    .catch(error => console.log(error))
})

module.exports = router