const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController'); 


router.get('/', authController.getMerchants);


router.post('/create', authController.createMerchant);


router.delete('/:id', authController.deleteMerchant);


module.exports = router;