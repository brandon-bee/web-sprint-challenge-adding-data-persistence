// build your `/api/tasks` router here
const router = require ('express').Router ();
const Tasks = require ('./model');

router.get ('/', (req, res, next) => {
  Tasks.find ()
    .then (tasks => {
      res.json (tasks);
    })
    .catch (next);
});

router.post ('/', (req, res, next) => {
  Tasks.createTask (req.body)
    .then (task => {
      res.status (201).json (task);
    })
    .catch (next);
});

module.exports = router;
