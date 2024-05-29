const { Router } = require('express');

const controllers = require('../controllers/merchantLogging.controller');
const { tokenVerifier } = require('../helpers/jwtHelpers');

const router = Router()

router.post("/addMerchant", controllers.addMerchant );
router.post("/verifyMerchant", controllers.verifyMerchant);
router.get("/verifyCookie",tokenVerifier, controllers.verifyCookie );
router.post("/sendOtp", controllers.sendOtp);

module.exports = router;