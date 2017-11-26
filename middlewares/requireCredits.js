/**
 * Created by venkateshkoka on 11/21/17.
 */


module.exports = (req,res,next) => {
    if(req.user.credits < 1){
        return res.status(403).send({error: 'Not Enough Credits'});
    }

    next();

}