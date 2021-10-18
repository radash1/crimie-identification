const express = require('express');
const crimeService = require('./crime.service');
const { body, query, validationResult } = require('express-validator');
const { success, error, validation } = require("../helpers/responses");

const router = express.Router();

router.post('/add', add);


module.exports = router;



async function add(req, res) {
    console.log('yyyyyyyy')
    try {
        const errors = validationResult(req);

        if (!errors.isEmpty()) {
            res.status(422).json(validation(errors.array()));
            return;
        }


        let newCrime = await crimeService.create(req.body)
        return res.status(200).json(success("OK", { crime: newCrime}, res.statusCode))
    } catch (e) {
        return res.status(500).json(error(e.message));
    }
}


