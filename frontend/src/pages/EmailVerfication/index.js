import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import styled from 'styled-components';
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReSendCode,VerfiedUser } from '../../redux/slice/API';
import { Formik } from 'formik';
import * as yup from 'yup';


import TextField from '@mui/material/TextField';

const EmailVerification = () => {

  const nav=useNavigate();
  const {
    setExpireTime,
    Code,SetCode,
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
    
      
  
  
      
   
function resendCode(values)
{
  const promise = dispatch(ReSendCode({email:values.email}))


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

      const VerificationBox=styled.div`

      display: flex;
      justify-content: center;
      align-items: center;
      background-color:#f0f2f5;
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
      background-color:#002D62;
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

      const validationSchema = yup.object({
        email: yup
          .string('Enter your email').email()
          .required('email is required'),

    
    
    
      });
    


    return (
      <Formik
      initialValues={{
        email:"",
    
      }}
    
      
    validationSchema={validationSchema}
      
    onSubmit={(values, { setSubmitting }) => {
     
      //handle(values);
      resendCode(values)
    
      setSubmitting(false);
    }}
    
    >
      {({  handleSubmit, setFieldValue,errors, touched }) => (
      <VerificationBox>

    <MailIcon style={{fontSize:50,color:"#002D62"}} />


    <h1>Please Enter your email</h1>



    <TextField 
   sx={{
    '@media (max-width: 600px)': {
 
    },
  }}



style={{marginBottom:15,width:400,marginTop:20}}  
label="Email Address"
id="email"
name="email"
 onChange={(event) => setFieldValue("email", event.target.value)} 

margin="normal"
variant="outlined"
 
 />



<VerificationButton 
     onClick={handleSubmit}      
 >
  Send Code to this Email
</VerificationButton>
</VerificationBox>

      )}
</Formik>


  
    );
}

export default EmailVerification;
