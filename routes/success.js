const path = require('path');
const express = require('express');
const rootDir = require('../Util/path');

const router = express.Router();



router.use('/success', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'success.html'));
});
module.exports = router;