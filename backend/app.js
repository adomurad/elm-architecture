const express = require("express");
const compression = require("compression");
const bodyParser = require("body-parser");

module.exports = function () {
    const app = express();
    app.use(compression());
    app.use(bodyParser.json());
    app.use(express.static("frontend"));

    app.get('/:page*?', function serveEntryPage(req, res) {
        res.sendFile('index.html', { 'root': './frontend' });
    });

    app.use(function clientError(req, res, next) {
        var err = new Error('Not Found');
        err.status = 404;
        next(err);
    });

    app.use(function serverError(err, req, res, next) {
        console.error(err.stack);
        res.status(err.status || 500);
        res.json({ message: err.message, error: (process.env.NODE_ENV === 'production') ? {} : err.stack });
    });

    return app;
}