import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext } from 'react';
import { UserContext } from '../contextState/contextState';
import logo from "../images/HealTogether_Logo2_transparent.png";
import InputField from './InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {  useDispatch } from 'react-redux';
import { Login } from '../redux/slice/API';
import { getDynamicStyle,MainHeading,Text,Logo,LoginButtonModal,CreateAccountModal } from '../styles/styles';
export default function LoginModal() {
  const dispatch = useDispatch();
  
  const userContext = useContext(UserContext);
  const { SetLoginModal,SetSignUpModal } = userContext;
  const style=getDynamicStyle();
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
const handleClick = (email, password) => {
  // alert(values.email) //for testing
  const promise = dispatch(Login({email:email,password:password}))


  promise.then((action) => {
    if (Login.fulfilled.match(action)) {
     localStorage.setItem('Token', JSON.stringify(action.payload.Token));
     SetLoginModal(false);
    } else if (Login.rejected.match(action)) {
     alert("Error")
    }
  });
};
const SignUp=()=>
{
  SetLoginModal(false);
  SetSignUpModal(true);
}
  return (
    <div>
      <Modal
        open={userContext.LoginModal}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      
      >
    
        <Box sx={{ ...style, width: 300,height:500,borderRadius:10 }}>
        {/* <CloseIcon style={{fontSize:30}} onClick={handleClose}/> */}

    <Logo src={logo}/>

<Text>Fostering Empathy and Mental Health Support</Text>

<MainHeading>Login</MainHeading>
<Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleClick(values.email, values.password);
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values, errors, touched }) => (
              <Form>
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
                <LoginButtonModal theme={userContext.theme} type="submit">Login</LoginButtonModal>
              </Form>
            )}
          </Formik>

          <hr/>
          <CreateAccountModal theme={userContext.theme} onClick={SignUp}>Create Account</CreateAccountModal>
</Box>
      </Modal>
    </div>
  );
}
