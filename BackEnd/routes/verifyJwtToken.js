const Jwt = require("jsonwebtoken");



const verifyToken =  ( req, res, next) => {
    const authHeader = req.header.token

    if(authHeader) {
        Jwt.verify(token, process.env.JWT_KEY, (err, user) => {
            if(err) res.status(403).json("Token Not Valid!!")
            req.user = user;
            next()
        })

    } else {
        return res.status(500).json("Token Not Found!! Not Authenticated!!")
    }
}


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken( req, res ,() => {
        if( req.user.id === req.params.id || req.user.isAdmin) {
            next()

        } else {
            res.status(403).json("Access Denied!!!")
        }
    })
}

module.exports = { verifyToken, verifyTokenAndAuthorization };