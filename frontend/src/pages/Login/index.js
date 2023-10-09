import React from 'react';
import styled from "styled-components"
import logo from "../../images/HealTogether_Logo7.png"
import InputField from '../../component/InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {useDispatch } from 'react-redux';
import { Login } from '../../redux/slice/API'
import { UserContext } from '../../Context/context';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SignUpModal from '../../component/SignUpModal';
//import RecommendedUser from '../../component/RecommendedUser';


const LoginPage = () => {

    const nav=useNavigate();
    const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-image: ${({ theme }) =>
      `linear-gradient(to right, ${
        theme === 'light'
          ? '#20B2AA 58%'
          : theme === 'blue'
          ? '#6ea8d9 58%'
          : theme === 'green'
          ? '#7dc98f  58%'
          : theme === 'purple'
          ? '#b39ed9 58%'
          : '#20B2AA 58%'
      }, white 50%)`};
    font-family: 'Nanum Gothic', sans-serif;
  
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
  `;

  const LogoContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
  `;

  const Logo = styled.img`
    /* Add any additional styling for the logo here */
  `;

  const LoginSection = styled.div`

  position: relative;
  left:550px;
 
  `;




  const dispatch = useDispatch();

  const {theme, SetUserFirstName,SetUserSurName, SetUserGender,    UserUsername,SetUserUsername}=useContext(UserContext)
const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters')
    .required('Password is required'),
}); 



const LoginHeading=styled.h1`

text-align: center;

margin-bottom:10px;
font-weight:bold;




`





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
background-color: #20B2AA ; 
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
width: 250px;
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
background-color:#20B2AA ;
color: #333333; 

`

const BlueButtonCreate = styled(CreateAccount)`
background-color: #8bb5e8;  
color: #ffffff;

`;
const GreenButtonCreate = styled(CreateAccount)`
background-color: #a8e89e;
color: #ffffff; 
`;


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

  if(action.payload.status==="Wrong Email or User Not Found")
  {
    alert(action.payload.status)
  }

  if(action.payload.status==="Wrong password")
  {
    alert(action.payload.status)
  }
  else
  {

  
 localStorage.setItem('Token', JSON.stringify(action.payload.Token));
localStorage.setItem('UserFirstName', action.payload.firstName);
localStorage.setItem('UserSurName', action.payload.SurName);
localStorage.setItem('UserGender', action.payload.gender);
localStorage.setItem('UserUsername', action.payload.username);

 nav('/home')
  }


} else if (Login.rejected.match(action)) {
 alert("Error")
}
});


};


const SignUp=()=>
{nav('/getting_started');}


  return (
    <>
    
 
        <SignUpModal/>
   
    
    <Container theme={theme}>
      <LogoContainer>
        <Logo src={logo} />
      </LogoContainer>
 <LoginSection>

<LoginHeading>Login</LoginHeading>
<p style={{marginBottom:15}}>Unite, Connect, Heal: Welcome to Heal Together - Your Safe Space to Share and Grow</p>
<Formik
            initialValues={{ email: '', password: '' }}
            validationSchema={validationSchema}
            onSubmit={(values) => {
              handleClick(values.email, values.password);
            }}
          >
            {({ handleChange, values, errors, }) => (
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

                {/* Add the submit button */}
                <MainButton type="submit">Login</MainButton>
              </Form>
            )}
          </Formik>

          <hr/>


          <MainCreate onClick={SignUp}>Begin Healing Journey</MainCreate>

 </LoginSection>
    </Container>
    </>
  );
};

export default LoginPage;