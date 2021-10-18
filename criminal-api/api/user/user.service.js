const { Guser } = require('../helpers/database');
const db = require('../helpers/database');
const User = db.User;

module.exports = {
    create,
    getByUser,
    findByToken,
    getById
}

async function create(user) {
    const new_user = User(user);
    let response = {};
    try {
        response = await new_user.save();
    } catch (err) {
        console.log(err)
        response.error = "There was an issue while creating the user.";
    }
    return response;
}

async function getByUser(user) {
    try {
        return await User.find({ user: user })
    } catch(err) {
        throw new Error(err)
    }
}

async function findByToken(token) {
    try {
        return await User.find({ resetToken: token })
    } catch(err) {
        throw new Error(err)
    }
}

async function getById(id) {
    try {
        return await User.findById(id);
    } catch (err) {
        throw new Error(err)
    }
}
