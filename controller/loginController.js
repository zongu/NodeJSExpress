'use strict';

module.exports = function(app) {
    //// 實作路由
    app.route('/login').post((req, res) => {
        res.json({
            account: req.body.Account,
            password: req.body.Password
        });
    });
}