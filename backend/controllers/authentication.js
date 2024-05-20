import jwt from "jsonwebtoken"

export const Authentication  = async (token) => {

 const token_key=process.env.TOKEN_KEY
token=token.replace(/"/g, '');


jwt.verify(token, token_key, (err, decoded) => {

    if(err)
        {
            console.log(err)
            return 'error'
        }
    else
    {
        return decoded.user_id
    
        // console.log(decoded.user_id,'ezaan')
    }

})
      

 
}