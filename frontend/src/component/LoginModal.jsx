import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../Context/context';
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from "../images/HEAL TOGETHER-1 (3).png";
import InputField from './InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../redux/slice/API';






export default function LoginModal() {
  const dispatch = useDispatch();

      const {LoginModal,SetLoginModal,theme}=useContext(UserContext)

    const style = {
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 100,
      bgcolor: 'background.paper',
      border: '2px solid #000',
      boxShadow: 24,
      pt: 2,
      px: 4,
      pb: 3,
      backgroundColor: theme === 'light' ? '#CCCCCC' :
      theme === 'blue' ? '#5c8fbf' :
      theme === 'green' ? '#7dbf6b' :
      theme === 'purple' ? '#f2e8f5' : '#CCCCCC',
      
      
    };

    const validationSchema = yup.object().shape({
      email: yup.string().email('Enter a valid email').required('Email is required'),
      password: yup
        .string()
        .min(8, 'Password should be at least 8 characters')
        .required('Password is required'),
    }); 
    
    
    const handleClose=()=>{

      SetLoginModal(false);
    }

    const Logo=styled.img`
    
    width:100px;
    height:100px;
    display:block;
    margin-right:auto;
    margin-left:auto;
    
   
    `

    const Text=styled.p`
    text-align:center;
    font-size:18px;
    margin-bottom:10px;
    font-weight:bold;
    
    
    
    
    `
    const GreenColor=styled(Text)`

color:#FFFFFF

`
const BlueColor=styled(Text)`
color:#FFFFFF


`
const LightColor=styled(Text)`

color:#333333

`
const PurpleColor=styled(Text  )`
color:#333333



`

const LoginHeading=styled.h1`

text-align: center;

margin-bottom:10px;
font-weight:bold;




`

const GreenHeading=styled(LoginHeading)`

color:#FFFFFF

`
const BlueHeading=styled(LoginHeading)`
color:#FFFFFF


`
const LightHeading=styled(LoginHeading)`

color:#333333

`
const PurpleHeaing=styled(LoginHeading)`
color:#333333



`

const MainHeading=

theme === 'light' ? LightHeading :
theme === 'blue' ? BlueHeading :
theme === 'green' ? GreenHeading :
theme === 'purple' ? PurpleHeaing :LightHeading 


const MainText =
  theme === 'light' ? LightColor :
  theme === 'blue' ? BlueColor :
  theme === 'green' ? GreenColor :
  theme === 'purple' ? PurpleColor :LightColor 


  const LoginButton=styled.button`
  height:40px;
  width:200px;
  display:block;
  margin-top:10px;
  margin-bottom:10px;
  margin-left:auto;
  margin-right:auto;
  color:white;
  font-weight:bold;

  
  
  
  `
  const BlueButton = styled(LoginButton)`
  background-color: #6ea8d9;
  color: #ffffff; 
`;

const GreenButton = styled(LoginButton)`
  background-color: #8fd9a6; 
  color: #ffffff; 
`;

const LightButton = styled(LoginButton)`
  background-color: #ffffff; 
  color: #333333; 
`;

const PurpleButton = styled(LoginButton)`
  background-color: #b39ed9; 
  color: #333333; 
`;


const MainButton=
theme === 'light' ? LightButton :
theme === 'blue' ? BlueButton :
theme === 'green' ? GreenButton :
theme === 'purple' ? PurpleButton :LightButton 



const CreateAccount = styled.button`
  marginTop: 10px;
  height: 40px;
  width: 200px;
  display: block;
  marginLeft: auto;
  marginRight: auto;
  marginBottom: 10px;
  fontWeight: bold;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  display:block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 10px;


`;

const LightButtonCreate=styled(CreateAccount)`
background-color:#ffffff;
color: #333333; 

`

const BlueButtonCreate = styled(CreateAccount)`
  background-color: #8bb5e8;  
  color: #ffffff;
  
`;

// Serene Green Theme
const GreenButtonCreate = styled(CreateAccount)`
background-color: #a8e89e;
color: #ffffff; 
`;

// Relaxing Purple Theme
const PurpleButtonCreate = styled(CreateAccount)`
 background-color: #c18ae8; 
 color: #333333; 

  
`;
const MainCreate=
theme === 'light' ? LightButtonCreate :
theme === 'blue' ? BlueButtonCreate :
theme === 'green' ? GreenButtonCreate :
theme === 'purple' ? PurpleButtonCreate :LightButtonCreate 


const handleClick = (email, password) => {
  // alert(values.email)
  const promise = dispatch(Login({email:email,password:password}))


  promise.then((action) => {
    if (Login.fulfilled.match(action)) {
    // setverficationEmail("")
     localStorage.setItem('Token', JSON.stringify(action.payload.Token));
     SetLoginModal(false);



    } else if (Login.rejected.match(action)) {
     alert("Error")
    }
  });


};


  return (
    <div>
      <Modal
        open={LoginModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      
      >
    
        <Box sx={{ ...style, width: 300,height:500,borderRadius:10 }}>
        {/* <CloseIcon style={{fontSize:30}} onClick={handleClose}/> */}

    <Logo src={logo}/>

<MainText>Fostering Empathy and Mental Health Support</MainText>

<MainHeading>Login</MainHeading>

<Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              // Call your login function here with values.email and values.password
              handleClick(values.email, values.password);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <Form>
                {/* Replace the Field components with the InputField component */}
                <InputField
                  label="Email"
                  type="email"
                  name="email"
                  changedText={handleChange}
                  value={values.email}
                />
                {
                  errors.email?
                 <p>{errors.email}</p>
                  :null
                }

                <InputField
                  label="Password"
                  type="password"
                  name="password"
                  changedText={handleChange}
                  value={values.password}
                />
                     {
                  errors.password?
                 <p>{errors.password}</p>
                  :null
                }

                {/* Add the submit button */}
                <MainButton type="submit">Login</MainButton>
              </Form>
            )}
          </Formik>

          <hr/>


          <MainCreate>Create Account</MainCreate>



</Box>

  
      </Modal>
    </div>
  );
}
