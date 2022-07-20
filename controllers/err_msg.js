const path = require('path');

const rootDir = require('../Util/path');


exports.getErrorNotice=(req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', 'page-not-found.html'));
};