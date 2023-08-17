import React from 'react';
import styled from "styled-components"
import logo from "../../images/HealTogether_Logo7.png"
import InputField from '../../component/InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import { useSelector, useDispatch } from 'react-redux';
import { Login } from '../../redux/slice/API'
import { UserContext } from '../../Context/context';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SignUpModal from '../../component/SignUpModal';


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

  const {LoginModal,SetLoginModal,theme, SetSignUpModal,
    UserFirstName, SetUserFirstName,
    UserSurName,SetUserSurName,
    UserGender, SetUserGender,
  
  }=useContext(UserContext)

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
  backgroundColor: theme === 'light' ? '#20B2AA' :
  theme === 'blue' ? '#6ea8d9' :
  theme === 'green' ? '#8fd9a6' :
  theme === 'purple' ? '#b39ed9' : '#20B2AA',
  
  
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

color:#20B2AA 

`
const PurpleColor=styled(Text  )`
color:#20B2AA 



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

color:#20B2AA 

`
const PurpleHeaing=styled(LoginHeading)`
color:#20B2AA 



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
 SetUserFirstName(action.payload.firstName);
 SetUserSurName(action.payload.SurName);
 SetUserGender(action.payload.gender);

 nav('/home')



} else if (Login.rejected.match(action)) {
 alert("Error")
}
});


};


const SignUp=()=>
{

  nav('/getting_started');




}


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