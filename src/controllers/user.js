const jwt = require('jsonwebtoken');

const { User } = require('../models');

const generateToken = async (user, secret, expiresIn) => {
    const { id } = user
    return await jwt.sign({ id }, secret, { expiresIn })
}

const signUp = async (req, res) => {
    await User.create(req.body)
        .then((result) => {
            res.json(result)
        })
        .catch(err => {
            res.status(500).json({
                error: err
            });
        });
}

const signIn = async (req, res) => {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    const isValid = await user.matchPassword(password)
    if (!isValid) {
        return res.status(401).send({ message: "Invalid Credentials" })
    }
    const token = await generateToken(user, process.env.JWT_KEY, '8h')
    res.send({ user, token })
}

const getLoginUser = async (req, res) => {
    try {
        const login_user = await User.findById(req.user.userId)
        res.json(login_user);
    }
    catch (err) {
        res.send('Error in Get login user' + err)
    }
}

const getAdminAllUser = async (req, res) => {
    if (req.user.role === 'admin') {
        const user = await User.find()
        res.json(user);
    }
    else {
        res.status(500).json({
            message: "you are not access this record !"
        })
    }
}

const getAdminUser = async (req, res) => {
    if (req.user.role === 'admin') {
        const user = await User.findById(req.params.userId)
        res.json(user);
    }
    else {
        res.status(500).json({
            message: "you are not access this record !"
        })
    }
}

const updateUser = async (req, res) => {
    try {
        const update_user = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true })
        res.json(update_user);
    }
    catch (err) {
        res.send('Error in update user' + err)
    }
}

const deleteUser = async (req, res) => {
    if (req.user.role === 'admin') {
        const delete_user = await User.findByIdAndDelete({ _id: req.params.userId })
        res.json(delete_user);
    }
    else {
        res.status(500).json({
            message: "you are not access this record !"
        })
    }
}

module.exports = {
    signUp,
    signIn,
    getLoginUser,
    deleteUser,
    updateUser,
    getAdminAllUser,
    getAdminUser
}