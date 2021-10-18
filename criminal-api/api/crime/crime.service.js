const db = require('../helpers/database');

const Crime = db.Crime;

module.exports = {
    create,
    
}

async function create(crime) {
    const new_crime = Crime(crime);
    let response = {};
    try {
        response = await new_crime.save();
    } catch (err) {
        console.log(err)
        response.error = "There was an issue while creating the user.";
    }
    return response;
}

