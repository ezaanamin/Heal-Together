import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import {useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import VerificationCodeInput from 'react-verification-code-input';
import { ReSendCode,VerfiedUser } from '../../redux/slice/API';
import { Recommended } from '../../redux/slice/API';
const Verification = () => {

  const nav=useNavigate();
  const {
    verficationEmail, ExpireTime,setExpireTime,
    Code,SetCode,SetFirstTimeUser,SetRecommendedUserList,
    Mental_health_insight

  }=useContext(UserContext)
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
    
        if(Code==null)
        {
          setgenerateCode(true);

        }
        return () => {
          clearTimeout(timeout);
        };

     
      }, [Code]);
    
      
  
  
      const handleVerfication=(code)=>{

var Code1 = Number(code);
console.log(typeof Code1, typeof Code)

        if(Code === Code)
        {
          const promise = dispatch(VerfiedUser({email:verficationEmail}))
   


          promise.then((action) => {
            if (VerfiedUser.fulfilled.match(action)) {

              localStorage.setItem('Token', JSON.stringify(action.payload.Token));

 


              const promise1=dispatch(Recommended({Mental_health_insight:Mental_health_insight}))

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
  const promise = dispatch(ReSendCode({email:verficationEmail}))


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
const Verification=styled.div`

background-color: #E6F1F7;
height:100vh;

`

      const VerificationBox=styled.div`

      display: flex;
      justify-content: center;
      align-items: center;
      background-color:#B0D4E8;
      height: 600px;
      width: 600px;
      margin: 150px auto 0;
      flex-direction:column;

      @media only screen and (max-width: 600px) {
        background-color:#f0f2f5;

        width:450px;
        height:450px;
    
      }
      
      
      `

      const VerificationButton=styled.button`
      
      width:300px;
      height:50px;
      color:white;
      background-color:#007BFF;
      margin-top:20px;
      margin-bottom:20px;

      
      `

      const ChangeEmail=styled.p`
      margin-bottom:10px;
      margin-top:20px;
      &:hover {
        text-decoration: underline;
      }
  
  
      `


    return (
      <Verification>
      <VerificationBox>

    <MailIcon style={{fontSize:50,color:"#002D62"}} />


    <h1>VERIFY YOUR EMAIL</h1>

    <p>A verfication code has been sent to</p> <HiddenEmail email={verficationEmail}/>
    <p style={{marginBottom:20}}>Please check your inbox as the verfication code will expire after {ExpireTime} </p>
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
      </Verification>
  
    );
}

export default Verification;
