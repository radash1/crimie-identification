const express = require('express');
const userService = require('./user.service');
const router = express.Router();
const { body, validationResult } = require('express-validator');
var jwt = require('jsonwebtoken');
const { BASE_WEB_URL } = require('../../config');
const { success, error, validation } = require("../helpers/responses");
const bcrypt = require('bcrypt');
const { createToken } = require('../helpers/authMiddleware');

router.post('/login', validate('login'), login)


function validate(method) {
    switch (method) {
        case 'login': {
            return [
                body('email', 'Email doesn\'t exist.').exists(),
                body('password', 'Password doesn\'t exist.').exists(),
                body('email', 'Email is empty.').notEmpty(),
                body('password', 'Password is empty.').notEmpty(),
            ]
        }
        
    }
}


module.exports = router;


async function login(req, res) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        res.status(422).json(validation(errors.array()));
        return;
    }

    let users = await userService.getByUser(req.body.user)
    if (!users.length || !users[0].password) {
        return res.status(404).json(validation([{ msg: "Invalid credentials!" }]))
    }

    if (!bcrypt.compareSync(req.body.password, users[0].password)) {
        return res.status(400).json(validation([{ msg: "Invalid credentials!" }]))
    }

    let token = createToken({ id: users[0]._id });
    users[0].password = undefined

    return res.status(200).json(success("OK", { user: users[0], token }, res.statusCode))
}

