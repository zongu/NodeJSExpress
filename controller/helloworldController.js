'use strict';

module.exports = function(app) {
    app.route('/helloworld').get((req, res) => {
        res.send('Hello World');
    });
}