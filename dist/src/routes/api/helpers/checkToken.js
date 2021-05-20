"use strict";
var jwt = require('jsonwebtoken');
var checkToken = function (req, res, next) {
    var token = req.headers.authorization;
    if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
        token = req.headers.authorization.split(' ')[1];
    }
    if (token) {
        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded) {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: 'Token is not valid'
                });
            }
            else {
                req.decoded = decoded;
                next();
            }
        });
    }
    else {
        return res.json({
            success: false,
            message: 'Auth token is not supplied'
        });
    }
};
module.exports = checkToken;
