const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    if(!req.headers.authorization){
    return res.sendStatus(400);
}

const token = req.headers.authorization.split(" ")[1];

jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {

    if(err) {
        return res.status(403).json({
            message: "Invalid token provided"
        })
    }


req.decoded = decoded;
next();
})
}