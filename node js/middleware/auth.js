const jwt = require('jsonwebtoken')

module.exports= function f( req , res , next ) {
    const token =
        req.body.token || req.query.token || req.headers["x-auth-token"];
    if (!token)
        return res.send('access denied ')
    try {
        const decodeToken = jwt.verify(token,'key')
        req.user = decodeToken
        next()
    }
    catch (e) {
        res.send( token  + '    wrong Token ')
    }
}