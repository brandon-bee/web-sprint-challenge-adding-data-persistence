// build your `/api/resources` router here
const router = require('express').Router()
const Resources = require('./model')

router.get('/', (req, res, next) => {
  Resources.find()
    .then(resources => {
      res.json(resources)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Resources.createResource(req.body)
    .then(resource => {
      res.status(201).json(resource)
    })
    .catch(next)
})

module.exports = router