import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { UserContext } from "../../contextState/contextState"
import { useContext } from 'react';
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VerificationCodeInput from 'react-verification-code-input';
import { ReSendCode,VerfiedUser } from '../../redux/slice/API';
import { Recommended } from '../../redux/slice/API';
import { VerificationButton,VerificationBox,ChangeEmail,VerificationDiv} from '../../styles/styles';
const Verification = () => {
  const nav=useNavigate();

  const userContext = useContext(UserContext);
  const { setExpireTime,SetCode,SetFirstTimeUser,SetRecommendedUserList} = userContext;

  const [generateCode,setgenerateCode]=useState(false);
  const dispatch = useDispatch();


  const HiddenEmail = ({ email }) => {
    const maskEmail = () => {
      const [username, domain] = email.split('@');
      const maskedUsername = username.slice(0, Math.floor(username.length / 2)) + '***';
      return `${maskedUsername}@${domain}`;
    };
  
    return <span>{maskEmail()}</span>;
  };
    useEffect(() => {
        const handleBackButton = (event) => {
          event.preventDefault();
          window.history.forward();
        };
    
        // Disable the back button
        window.history.pushState(null, null, window.location.pathname);
        window.addEventListener('popstate', handleBackButton);
    
        return () => {
          // Re-enable the back button when the component unmounts
          window.removeEventListener('popstate', handleBackButton);
        };
      }, []);

      useEffect(() => {
       
        const timeout = setTimeout(() => {
          SetCode(null);
        }, 30 * 60 * 1000); 
    
        if(userContext.Code==null)
        {
          setgenerateCode(true);

        }
        return () => {
          clearTimeout(timeout);
        };

     
      }, [userContext.Code]);
    
      
  
  
      const handleVerfication=(code)=>{

var Code1 = Number(code);
console.log(typeof Code1, typeof Code)

        if(Code1 === userContext.Code)
        {
          const promise = dispatch(VerfiedUser({email:userContext.verficationEmail}))
   


          promise.then((action) => {
            if (VerfiedUser.fulfilled.match(action)) {

              sessionStorage.setItem('Token', JSON.stringify(action.payload.Token));

 


              const promise1=dispatch(Recommended({Mental_health_insight:userContext.Mental_health_insight}))

              promise1.then((action)=>{

                if (Recommended.fulfilled.match(action)) {

               SetFirstTimeUser(true)
               SetRecommendedUserList(action.payload.data);
            
                nav('/home')


                }
                else if(Recommended.rejected.match(action))
                {
                  alert("Error")
    
                }
                else

                {
                  alert("Error")
                }
                  
              })
            

        
        
            }
       
            
            
            else if (VerfiedUser.rejected.match(action)) {
             alert("Error")
            }
          });
        }
        else
        {
          alert("Error")
        }

      }
   
function changeEmail(){

  nav('/verfication_email')

}

function resendCode()
{
  const promise = dispatch(ReSendCode({email:userContext.verficationEmail}))


  promise.then((action) => {
    if (ReSendCode.fulfilled.match(action)) {
      SetCode( action.payload.Code);
      setExpireTime( action.payload.ExpireTime);
      // setverficationEmail(values.email)
      // setverficationFirstName(values.firstName);
      // setverficationLastName(values.SurName);
    nav('/verification')
      


    } else if (ReSendCode.rejected.match(action)) {
     alert("Error")
    }
  });
}

    return (
    
      <VerificationDiv>
      <VerificationBox>

    <MailIcon style={{fontSize:50,color:"#002D62"}} />


    <h1>VERIFY YOUR EMAIL</h1>

    <p>A verfication code has been sent to</p> <HiddenEmail email={userContext.verficationEmail}/>
    <p style={{marginBottom:20}}>Please check your inbox as the verfication code will expire after {userContext.ExpireTime} </p>
    <VerificationCodeInput
      length={6}
      onComplete={(code) => handleVerfication(code)}

    />



<ChangeEmail onClick={changeEmail}>Didn't receive code yet? Try another email</ChangeEmail>
<VerificationButton onClick={()=>resendCode}       
 >
  Re-Send Code
</VerificationButton>



      </VerificationBox>
      </VerificationDiv>
  
    );
}

export default Verification;
