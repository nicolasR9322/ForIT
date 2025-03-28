var express = require('express');
var router = express.Router();
const { getTasks} = require("../controllers/tasksController")


router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get("/api/tasks", (req, res) => {
  getTasks(req, res); 
});

router.post("/api/tasks", (req, res ) => {
  res.json(tasks)
})

router.put("/api/tasks:id", (req, res ) => {
  res.json(tasks)
})

router.delete("/api/tasks:id", (req, res ) => {
  res.json(tasks)
})

module.exports = router;
