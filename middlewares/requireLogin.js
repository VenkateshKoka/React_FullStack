/**
 * Created by venkateshkoka on 10/27/17.
 */

module.exports = (req,res,next) => {
    if(!req.user){
        return res.status(401).send({error: 'You must Log in !!'});
    }

    next();

}