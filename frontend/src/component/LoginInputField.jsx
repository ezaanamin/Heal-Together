import React, { useContext } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { UserContext } from '../contextState/contextState';
import TextField from '@mui/material/TextField';
import { useDispatch } from 'react-redux';
import { Login } from '../redux/slice/API';
import { useNavigate } from 'react-router-dom';
import { LoginButton,LoginInputContainer,LoginForm,ForgotPassword,CreateAccount,Errors} from '../styles/styles';

const LoginInputField = () => {
  const nav=useNavigate();
  const dispatch = useDispatch();
  const validationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .required('Password is required'),
  });

  const userContext = useContext(UserContext);
  const { SetSignUpModal  } = userContext;

  const handleOpen = () => {
    SetSignUpModal(true);
  };

  const handleSubmit = (values, { setSubmitting }) => {



    
    // alert(values.email)
    const promise = dispatch(Login({email:values.email,password:values.password}))


          promise.then((action) => {
            if (Login.fulfilled.match(action)) {
            // setverficationEmail("")
             localStorage.setItem('Token', JSON.stringify(action.payload.Token));
             nav('/home')

        
        
            } else if (Login.rejected.match(action)) {
             alert("Error")
            }
          });
    setSubmitting(false);
  };


  

  return (
    <LoginInputContainer>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <LoginForm>
            <Field
              type="email"
              name="email"
              label="Email Address"
              as={TextField}
              
              style={{ marginBottom: 25, width: 400, marginTop: 20 }}
              margin="normal"
              variant="outlined"
            />
            <ErrorMessage name="email" component={Errors} />

            <Field
              type="password"
              name="password"
              label="Password"
              as={TextField}
              style={{ marginBottom: 25, width: 400 }}
              margin="normal"
              variant="outlined"
            />
            <ErrorMessage name="password" component={Errors} />

            <LoginButton type="submit">Login</LoginButton>

            <ForgotPassword>Forgot Password?</ForgotPassword>
            <hr style={{ height: 1, width: 400, backgroundColor: '#D3D3D3', marginBottom: 10 }} />

            <CreateAccount type="button" onClick={handleOpen}>
              Create a new account
            </CreateAccount>
          </LoginForm>
        </Form>
      </Formik>
    </LoginInputContainer>
  );
};

export default LoginInputField;
