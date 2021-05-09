const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const bearerHeader = req.headers.authorization;
    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(' ');
        const bearerToken = bearer[1]
        jwt.verify(bearerToken, process.env.JWT_KEY, (err, user) => {
            if (err) {
                return res.status(401).send({ message: "Invalid token." })
            }
            req.user = user;
            next();
        });
    } else {
        return res.status(401).send({ message: "Token is required!" })
    }
}

module.exports = { auth };