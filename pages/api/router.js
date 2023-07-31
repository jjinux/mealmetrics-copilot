const express = require('express');
const { generateInfo } = require('./generateInfo');

const router = express.Router();
router.post('/generateInfo', generateInfo);
router.options("/generateInfo", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Headers", "*");
    res.setHeader("Access-Control-Allow-Methods", "*");
    res.sendStatus(200);
});

module.exports = router;
