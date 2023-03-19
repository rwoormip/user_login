const db = require('../../config/mongoose')
const User = require('../user')
const users = require('../../users')

db.once('open', () => {
  User.create(users)
    .then(() => {
      console.log('users done')
      db.close()
    })
    .catch(error => console.log(error))
})