import React, { useContext } from 'react';
import styled from 'styled-components';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { UserContext } from '../Context/context';
import TextField from '@mui/material/TextField';

import { useState,useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../redux/slice/API';
import { useNavigate } from 'react-router-dom';


const LoginInputField = () => {

  const nav=useNavigate();
  const dispatch = useDispatch();

  const LoginInputContainer = styled.div`
    background-color: #E0E0E0FF;
    width: 450px;
    height: 400px;

    @media only screen and (max-width: 600px) {
      width: 550px;
      height: 550px;
    }
  `;

  const LoginForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;

  const LoginButton = styled.button`
    width: 300px;
    height: 40px;
    font-size: 15px;
    background-color: #007bff;
    color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: #007bff;
  `;

  const ForgotPassword = styled.p`
    margin-bottom: 10px;

    &:hover {
      text-decoration: underline;
    }
  `;

  const CreateAccount = styled.button`
    width: 250px;
    height: 40px;
    font-size: 15px;
    background-color: #42b72a;
    color: white;
    margin-bottom: 10px;
    border-radius: 10px;
    border-color: #42b72a;
  `;

  const Errors = styled.p`
    margin-bottom: 10px;
    color: red;
  `;

  const validationSchema = yup.object().shape({
    email: yup.string().email('Enter a valid email').required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be at least 8 characters')
      .required('Password is required'),
  });

  const { SignUpModal, SetSignUpModal } = useContext(UserContext);

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
