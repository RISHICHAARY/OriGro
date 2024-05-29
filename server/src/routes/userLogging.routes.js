const { Router } = require('express');

const controllers = require('../controllers/userLogging.controller');
const { tokenVerifier } = require('../helpers/jwtHelpers');

const router = Router()

router.post("/addUser", controllers.addUser );
router.post("/verifyUser", controllers.verifyUser);
router.get("/verifyCookie",tokenVerifier, controllers.verifyCookie );
router.post("/sendOtp", controllers.sendOtp);

module.exports = router;