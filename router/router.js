const express = require('express');
const router = express.Router();

const cpController = require('../controllers/main.controller');
//http://localhost:4085/api/commodity/price?offset=20&limit=10&filters=fsd
router.get('/commodity/price',cpController.commodityPrice);
module.exports = router;