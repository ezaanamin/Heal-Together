import React from 'react';
import logo from "../../images/HealTogether_Logo7.png"
import InputField from '../../component/InputField';
import * as yup from 'yup';
import { Formik, Form } from 'formik';
import {useDispatch } from 'react-redux';
import { Login } from '../../redux/slice/API'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import SignUpModal from '../../component/SignUpModal';
//import RecommendedUser from '../../component/RecommendedUser';
import { UserContext } from '../../contextState/contextState';
import { Container,LoginLogo,LogoContainer,LoginSection,LoginHeading,MainLoginButton,CreateAccountButton } from '../../styles/styles';



const LoginPage = () => {
  const userContext = useContext(UserContext);
const theme = userContext ? userContext.theme : 'light';



    const nav=useNavigate();
  

 

  const dispatch = useDispatch();

const validationSchema = yup.object().shape({
  email: yup.string().email('Enter a valid email').required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be at least 8 characters')
    .required('Password is required'),
}); 











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

  console.log(action.payload.Token)
 localStorage.setItem('Token', JSON.stringify(action.payload.Token));
// localStorage.setItem('UserFirstName', action.payload.firstName);
// localStorage.setItem('UserSurName', action.payload.SurName);
// localStorage.setItem('UserGender', action.payload.gender);
// localStorage.setItem('UserUsername', action.payload.username);

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
       <LoginLogo alt="Logo" src={logo} />
     </LogoContainer>
<LoginSection>

<LoginHeading>Welcome Back</LoginHeading>
<p style={{marginBottom:15,textAlign:"center"}}>Unite, Connect, Heal</p>
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
               <MainLoginButton theme={theme} type="submit">Login</MainLoginButton>
             </Form>
           )}
         </Formik>

         <hr/>


         <CreateAccountButton theme={theme} onClick={SignUp}>Begin Healing Journey</CreateAccountButton>

</LoginSection>
   </Container>


    </>
  );
};

export default LoginPage;