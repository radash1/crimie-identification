const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../../config');
const { error } = require("../helpers/responses");
const userService = require('../user/user.service');

const openUrls = [
    '/login',
]

function authenticateToken(req, res, next) {
    console.log(req.url)
    if (openUrls.indexOf(req.url) !== -1) {
        return next()
    }

    if (req.url.includes('/user/reset-pw/') || req.url.includes('/doc/')) {
        return next()
    }

    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1]
    if (!token) {
        return res.status(401).json(error("Unauthorized.", 401));
    }

    jwt.verify(token, JWT_SECRET, (err, user) => {
        if (err) {
            return res.status(401).json(error("Unauthorized.", 401));
        }

        req.user = user;
        return next();
    })
}


function createToken(info) {
    return jwt.sign(info, JWT_SECRET);
}

module.exports = {
    authenticateToken,
    createToken,
}
