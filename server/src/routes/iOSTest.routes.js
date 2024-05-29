const { Router } = require('express');

const controllers = require('../controllers/iOSTest.Controller');
const router = Router()

router.post("/addForm", controllers.addForm);

module.exports = router;