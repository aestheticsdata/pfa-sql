"use strict";
var jwt = require('jsonwebtoken');
module.exports = function (res, user) {
    jwt.sign({ id: user.ID }, process.env.JWT_SECRET, { expiresIn: '10h' }, function (err, token) {
        if (err)
            throw err;
        res.json({
            token: token,
            user: {
                id: user.ID,
                name: user.name,
                email: user.email,
                baseCurrency: user.baseCurrency,
                language: user.language,
            }
        });
    });
};
