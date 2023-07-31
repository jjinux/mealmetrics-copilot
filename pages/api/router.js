const express = require('express');
const { generateInfo } = require('./generateInfo');

const router = express.Router();
router.post('/generateInfo', generateInfo);

module.exports = router;
