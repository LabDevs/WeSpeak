const RSVP = require('../models/RSVP')

const add = (req, res) => {
  const { userId, eventId } = req.body
  RSVP.add(userId, eventId)
    .then(response => res.sendStatus(200))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
}

const getByUser = (req, res) => {
  const { userId } = req.body
  RSVP.getByUser(userId)
    .then(response => res.status(200).json(response))
    .catch(err => {
      console.log(err)
      res.sendStatus(500)
    })
}

module.exports = {
  add,
  getByUser
}
