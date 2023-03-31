const Theatre = require('../model/theatre.model');
function validatetheatreReqBody(req, res, next){
    if(!req.body.name){
        return res.status(400).send({
            msg: 'name field is missing in  creation'
        })
    }

    if(!req.body.description){
        return res.status(400).send({
            msg: 'description field is missing in theatre creation'
        })
    }

    if(!req.body.city){
        return res.status(400).send({
            msg: 'releaseStatus field is missing in theatre creation'
        })
    };
  
    let city = await Theatre.findOne({city:req.body.city});
    
    if(city != null){
        return res.status(400).send({message:"city already exists"});
    };

    if (!req.body.pin) {
            return res.status(400).send({
                message: "Failed! pin is not provided !"
            });
    
    };
  let pin = await Theatre.findOne({pin:req.body.pin});
    
    if(pin != null){
        return res.status(400).send({message:"pin already exists"});
    };

    next();

}



module.exports = {
    validatetheatreReqBody
}
