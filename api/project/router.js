// build your `/api/projects` router here
const router = require('express').Router()
const Projects = require('./model')

router.get('/', (req, res, next) => {
  Projects.find()
    .then(projects => {
      res.json(projects)
    })
    .catch(next)
})

router.post('/', (req, res, next) => {
  Projects.createProject(req.body)
    .then(project => {
      res.status(201).json(project)
    })
    .catch(next)
})


module.exports = router