

module.exports= function f( req , res , next ) {
    if(!req.user.isAdmin)
        return res.send ('you are not Admin ' +req.user.isAdmin )
  next()
}