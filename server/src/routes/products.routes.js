const { Router } = require('express');

const controllers = require('../controllers/products.comtrollers');

const router = Router()

router.post("/addProduct", controllers.addProduct);
router.put("/updateProduct", controllers.updateProduct);
router.delete("/deleteProduct", controllers.deleteProduct);

module.exports = router;