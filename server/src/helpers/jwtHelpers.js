const { sign,verify } = require('jsonwebtoken');

const jwtToken = process.env.JWT_TOKEN

const tokenGeneratorForMerchant = ( user )=>{

    const accessToken = sign( {merchant_id:user.merchant_id,email_id:user.email_id},jwtToken,{} );
    return accessToken;

}

const tokenGeneratorForUser = ( user )=>{

    const accessToken = sign( {user_id:user.user_id,email_id:user.email_id},jwtToken,{} );
    return accessToken;

}

const tokenVerifier = ( req,res,next )=>{

    const accessToken = req.cookies[ "access-token" ];
    
    if( !accessToken ){
        res.status(200).json({errorCode:406,message: "No cookie found"});
    }
    else{
        try{
            verify( accessToken,jwtToken,(err,result)=>{
                if(err){
                    res.status(200).json({errorCode:407,message: "Cookie Error"});
                    throw err;
                }
                else{
                    req.cookieData = result; 
                    return next();
                }
            } );
        }
        catch(err){
            res.status(200).json({message: err});
        }
    }

}

module.exports = {
    tokenGeneratorForMerchant,
    tokenGeneratorForUser,
    tokenVerifier
}