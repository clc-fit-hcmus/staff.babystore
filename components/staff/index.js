const express = require('express');
const { getOrderList, getSalaryHistory } = require('./staffController')
const router = express.Router();

const {isLoggedIn} = require('../../utils/login')

router.get('/order-list',isLoggedIn, getOrderList);

router.get('/salary-history', isLoggedIn, getSalaryHistory);

module.exports = router;