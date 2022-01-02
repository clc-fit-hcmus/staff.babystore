const express = require('express');
const { getOrderList } = require('./staffController')
const router = express.Router();

const {isLoggedIn} = require('../../utils/login')

router.get('/order-list',isLoggedIn, getOrderList);

module.exports = router;