import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import MailIcon from '@mui/icons-material/Mail';
import { UserContext } from "../../contextState/contextState"
import { useContext } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ReSendCode} from '../../redux/slice/API';
import { Formik } from 'formik';
import * as yup from 'yup';
import { VerificationButton,VerificationBox } from '../../styles/styles';

import TextField from '@mui/material/TextField';

const EmailVerification = () => {

  const nav=useNavigate();


  const userContext = useContext(UserContext);
  const {setExpireTime,SetCode} = userContext;
  const [generateCode,setgenerateCode]=useState(false);
  const dispatch = useDispatch();
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
