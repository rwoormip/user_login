const express = require('express')
const router = express.Router()

const cookieParser = require('cookie-parser')
router.use(cookieParser())

const User = require('../../models/user')

router.get('/', (req, res) => {
  const { userId } = req.cookies

  if (!userId) return res.render('index')

  return User.findOne({ _id: userId })
    .lean()
    .then(user => {
      res.render('index', { user })
    })
    .catch(error => console.log(error))
})

router.post('/', (req, res) => {
  const { email, password } = req.body
  const warningMessage = true

  return User.findOne({ email, password })
    .lean()
    .then(user => {
      if (!user) return res.render('index', { warningMessage, email })

      res.cookie('userId', `${ user._id }`)
      res.render('index', { user })
    })
    .catch(error => console.log(error))
})

module.exports = router