import jwt from "jsonwebtoken"

export const Authentication  = async (token,token_type) => {
let token_key;
  if(token_type=='user')
    {
      token_key=process.env.TOKEN_KEY

    }
if(token_type=="chat")
  {
    token_type=process.env.TOKEN_CHAT_KEY
  }
token=token.replace(/"/g, '');
return new Promise((resolve, reject) => {
    const token_key = process.env.TOKEN_KEY;
    token = token.replace(/"/g, '');

    jwt.verify(token, token_key, (err, decoded) => {
      if (err) {
        console.log(err);
        reject('error');
      } else {
        console.log(decoded.user_id, 'ezaan amin');
        resolve(decoded.user_id);
      }
    });
  });
};


 
