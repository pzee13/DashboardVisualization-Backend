const express = require('express');
const router = express.Router();
const { getWorldDetails } = require('../controller/dataController');

router.get('/', getWorldDetails);

module.exports = router;
