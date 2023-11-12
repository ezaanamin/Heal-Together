import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from "../contextState/contextState"
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import * as yup from 'yup';
import { Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { SignUpPost } from '../redux/slice/API';
import {  useDispatch } from 'react-redux';
import { SignUp,RadioFlex,SignUpButton,Errors,TermsPrivacyPolicy, getDynamicStyle } from '../styles/styles';
export default function SignUpModal() {
  const nav=useNavigate()


  const userContext = useContext(UserContext);
  const { SetSignUpModal, SetCode,setverficationEmail,setExpireTime,setverficationFirstName,setverficationLastName} = userContext;
    const dispatch = useDispatch();
  const handleClose = () => {
    SetSignUpModal(false);
  };
  const validationSchema = yup.object({
    email: yup
      .string('Enter your email').email()
      .required('email is required'),
    password: yup
      .string('Enter your password')
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
      firstName:yup.string().required('First Name is required.'),
      SurName:yup.string().required('Surname Name is required.'),
      gender: yup.string().test('isRequired', 'Please select an option.', value => value !== undefined),



  });

  const style = getDynamicStyle('green');      

  

  const handle= async(values)=>{


  console.log(values)
  const v={
    firstName:values.firstName,
    SurName:values.SurName,
    email:values.email,
    password:values.password,
    gender:values.gender,
    day:userContext.day,
    month:userContext.month,
    year:userContext.year
  }

  const promise = dispatch(SignUpPost({values:v}))

  promise.then((action) => {
    if (SignUpPost.fulfilled.match(action)) {
      SetCode( action.payload.Code);
      setExpireTime( action.payload.ExpireTime);
      setverficationEmail(values.email)
      setverficationFirstName(values.firstName);
      setverficationLastName(values.SurName);
    nav('/verification')
      


    } else if (SignUpPost.rejected.match(action)) {
     alert("Error")
    }
  });




  }

  return (
    <div>
      <Modal
        open={userContext.SignUpModal}
        // onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      
      >
    
        <Box sx={{ ...style, width: 400 }}>
<h1> Welcome to Heal Together!</h1>
<p style={{marginBottom:10}}>Let's create a safe space for you.</p>
<hr/>

<Formik
  initialValues={{
    email:"",
    password:"",
    firstName:"",
    SurName:"",
    gender:"",





  }}

  
validationSchema={validationSchema}
  
onSubmit={(values, { setSubmitting }) => {
 
  handle(values);

  setSubmitting(false);
}}
>



  {({  handleSubmit, setFieldValue,errors, touched }) => (
    <div>
<SignUp>



<TextField style={{marginRight:10}} 
label="First Name"
id="firstName"
name="firstName"
onChange={(event) => setFieldValue("firstName", event.target.value)} 

margin="normal"
variant="outlined"



/>



<TextField id="outlined-basic" label="Surname" variant="outlined"

name="SurName"
onChange={(event) => setFieldValue("SurName", event.target.value)} 

margin="normal"


/>


</SignUp>

<SignUp>
{errors.firstName && touched.firstName ? (
             <Errors>{errors.firstName}</Errors>
           ) : null}

{errors.SurName && touched.SurName ? (
             <Errors>{errors.SurName}</Errors>
           ) : null}
</SignUp>
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
      {errors.email && touched.email ? (
             <Errors>{errors.email}</Errors>
           ) : null}

<TextField style={{marginBottom:15,width:400}} 

id="password"
name="password"
label="Password"
type="password"
margin="normal"
variant="outlined"
onChange={(event) => setFieldValue("password", event.target.value)} 



/>

{errors.password && touched.password ? (
             <Errors>{errors.password}</Errors>
           ) : null}
<h3>Date of Birth</h3>


<h3>Gender</h3>
<RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        name="radio-buttons-group"
        onChange={(event) => setFieldValue("gender", event.target.value)} 

      >
        <RadioFlex>
        <FormControlLabel value="female" control={<Radio />} label="Female" />
        <FormControlLabel value="male" control={<Radio />} label="Male" />
        <FormControlLabel value="other" control={<Radio />} label="Other" />
        </RadioFlex>

        
      </RadioGroup>
      {errors.gender && touched.gender  ? (
             <Errors>{errors.gender}</Errors>
           ) : null
      }

      <TermsPrivacyPolicy>By clicking Sign Up, you agree to our Terms, Privacy Policy and Cookies Policy</TermsPrivacyPolicy>
      
      <SignUpButton  onClick={handleSubmit} >Sign Up</SignUpButton>
      </div>




      )}
  
      </Formik>
        </Box>

  
      </Modal>
    </div>
  );
}
