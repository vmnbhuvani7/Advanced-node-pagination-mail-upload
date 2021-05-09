const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer')
// router.get('/')
const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})

const mailOption = {
    from: 'ap186832@gmail.com',
    to: 'vmn.bhuvani7@gmail.com',
    subject: 'Testing',
    text: 'IT Work'
}

transporter.sendMail(mailOption, (err, data) => {
    if (err) {
        console.log('Error', err);
    } else {
        console.log('Email sent');
    }
})

module.exports = router