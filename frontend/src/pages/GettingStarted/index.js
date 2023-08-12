import React, { useState } from 'react';
import { useEffect } from 'react';
import styled from "styled-components"
import logo from "../../images/HEAL TOGETHER-1 (3).png"
import { questions } from '../../getting_started_questions';
import { InputLabel, MenuItem, Select, Button } from '@mui/material';
import { checkboxQuestions } from '../../getting_started_questions/checkbox';
import {FormControl,FormLabel,FormGroup,FormControlLabel,Checkbox} from "@material-ui/core";
import * as yup from 'yup';
import { Formik } from 'formik';
import {  useDispatch } from 'react-redux';
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import { SignUpPost } from '../../redux/slice/API';
import TextField from '@mui/material/TextField';

const GettingStarted = () => {

  const initialStateQuestion = {
    primary_motivation:"",
    professional_treatment:"",
    comfortable_discussing_mental_health:"",
    connect_with_others:"",
    religious:"",
    received_a_diagnosis:"",
    age:0


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
  const {
    day, 
    month,
    year,
    setDateError,
    Code,SetCode,
    verficationEmail,setverficationEmail,
    ExpireTime,setExpireTime,
    verficationFirstName,setverficationFirstName,
    verficationLastName,setverficationLastName,theme
  }=useContext(UserContext)
  const dispatch = useDispatch();

const initialState = {
  depression: false,
  anxiety: false,
  bipolar: false,
  ptsd: false,
  ocd: false,
  schizophrenia: false,
  eatingDisorders: false,
  other: false,
  eating_disorders:false,
  copingTechniques: false,
  personalStories: false,
  medication: false,
  reducingStigma: false,
  healthyLifestyle: false,
  spirituality: false,
  otherInterests: false,
  meditation: false,
  creativeActivities: false,
  talkToFriends: false,
  exercise: false,
  seekingHelp: false,
  otherCoping: false,
  creative_activities:false,
  talking_to_friends_family:false,
  exercising:false,
  professional_help:false,
  copingother:false,
  coping_techniques:false,
  personal_stories:false,
  reducing_stigma:false,
  healthy_lifestyle:false,
};
const [emotionalStates, setEmotionalStates] = useState(initialState);
const[question, setQuestion]=useState(initialStateQuestion)
  const [questionNo,SetQuestionNo]=useState(0)
  const [questionCheckBox,SetQuestionCheckBox]=useState(-1);

  const handle= async(values)=>{

  
      console.log(values)
      const v={
        firstName:values.firstName,
        SurName:values.SurName,
        email:values.email,
        password:values.password,
        gender:values.gender,
        day:day,
        month:month,
        year:year
      }
    
      const promise = dispatch(SignUpPost({values:v,Question1:initialState,Question2:initialStateQuestion}))
    
      promise.then((action) => {
        if (SignUpPost.fulfilled.match(action)) {
          SetCode( action.payload.Code);
          setExpireTime( action.payload.ExpireTime);
          setverficationEmail(values.email)
          setverficationFirstName(values.firstName);
          setverficationLastName(values.SurName);
          
    
    
        } else if (SignUpPost.rejected.match(action)) {
         alert("Error")
        }
      });
    
    
    
    
      }

  const GettingStarted=styled.div`
  
  background-color:#c6e2de;
  width: 100%;
  height: 100vh;

  
  `

  const HeadingGettingStarted = styled.h1`
  color:#8aade2;

  text-align: center;

  margin-top:105px;

  
  
  `
  const SubHeadingGettingStarted = styled.p`
  color: #60a3a0;
  text-align: center;
  margin-top: 15px;
  width: 700px;
  margin: 0 auto; 
`;

const Logo=styled.img`
width:100px;
height:100px;
position: fixed;
left:0;



`

const QuestionDiv=styled.div`

width:600px;

background-color: white;
margin-right:auto;
margin-left:auto;
margin-top:15px;



`
const QuestionHeading=styled.h3`
margin-top:25px;
text-align:center;
margin-bottom:25px;


`

const QuestionOption=styled.div`
display:flex;
flex-direction:column;

`
const OptionCheckbox=styled.div`

display:block;
margin-left:auto;
margin-right:auto;

`
const QuestionOptions=styled.button`
height:50px;
width:550px;
margin-bottom:15px;
background-color:#b9e5e3;
color:#60a3a0;
border-color:#b9e5e3;
border-radius:20px;
font-size:20px;
margin-right:auto;
margin-left:auto;
display:block;


`
const NextButton=styled.button`
background-color:#b9e5e3;
color:#60a3a0;
border-color:#b9e5e3;
height:50px;
width:200px;
font-size:20px;
position:relative;
left:350px;
border-radius:20px;
margin-bottom:20px;

`
const SignUp=styled.div`

display:flex;
flex-direction: row;
margin-top:10px;




`
const RadioFlex=styled.div`

display:flex;
flex-direction: row;
align-items: center;


`

const SignUpButton = styled.button`
  width: 550px;
  height: 45px;
  font-size: 25px;

  background-color: #b9e5e3;
  color: white;
  margin-bottom: 10px;
  border-radius: 10px;
  border-color: #b9e5e3;

  margin: 0 auto;
  display: block;

  &:hover {
    background-color: #9bcfc9;
    border-color: #9bcfc9;
  }
`;







const Errors=styled.p`

margin-bottom:10px;
color:red;



`
const TermsPrivacyPolicy=styled.p`

margin-bottom:10px;



`

const NextQuestion=(product,value)=>{

  console.log(value,'ezaan');
  console.log(product,'ezaan')
 
 
     setQuestion((prevState) => ({
       ...prevState,
       [value]:product,
     })); 
 
   if(questionNo!=8)
   {
     SetQuestionNo(questionNo+1)
   }
   if(questionNo==8)
   {
    
    console.log(question,'ezaan amin');
    SetQuestionCheckBox(0);
  
   }
 
 
 }


const hi=(value)=>{




console.log(emotionalStates[value],'ezaan');
  setEmotionalStates((prevState) => ({
    ...prevState,
    [value]: !prevState[value],
  }));



 
}


const NextCheckBox=()=>{

  if(questionCheckBox!=3)
  {
    SetQuestionCheckBox(questionCheckBox+1);
    console.log(questionCheckBox,'ezaan');

  }

}


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

    return (
        <GettingStarted>

<Logo src={logo}/>

            <HeadingGettingStarted >Begin Your Healing Journey Together</HeadingGettingStarted>
 <SubHeadingGettingStarted>As you get started, we'll ask you a few thoughtful questions to better understand your needs and experiences. Your answers will help us pair you with others who are on a similar path towards healing. Together, you'll have the opportunity to share, learn, and support each other.</SubHeadingGettingStarted>
<QuestionDiv>
  
{
  questionNo<=8 &&   questionCheckBox==-1? 
  <QuestionHeading>{questions[questionNo].question}</QuestionHeading>
:null
}
  <QuestionOption>
{questions[questionNo].options &&  questionNo<=8 &&   questionCheckBox==-1?  ( 

  
    questions[questionNo].options.map((product,index) => 
    
    
    <QuestionOptions onClick={()=>NextQuestion(product,questions[questionNo].value)}>{product}</QuestionOptions>)
  ) : 
  

  null
}

{
  questionNo==2?
  <FormControl sx={{ m: 1, width: 370, mt: 3, }}>

<InputLabel style={{textAlign:"center",marginBottom:10}} id="demo-simple-select-filled-label">Age</InputLabel>

<Select
  style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}
  onChange={(selectedValue) => NextQuestion(selectedValue.target.value,'age')}
>
  {Array.from({ length: 90 }, (_, i) => i + 13).map((dayOption) => (
    <MenuItem key={dayOption} value={dayOption}>
      {dayOption}
    </MenuItem>
  ))}
</Select>
    
          </FormControl>:null


}

{
  questionCheckBox>-1  && questionCheckBox!=3?
  <QuestionHeading>{checkboxQuestions[questionCheckBox].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox!=3 ? (
  checkboxQuestions[questionCheckBox].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>hi(option.value)}/>}
      checked={emotionalStates[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}

{questionCheckBox>-1 && questionCheckBox!=3 ?

<NextButton onClick={(()=>NextCheckBox())}>Next</NextButton>
:null
}


{
   questionCheckBox==3 ?
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
 
  alert("hii")
  handle(values);

  setSubmitting(false);
}}
>



  {({  handleSubmit, setFieldValue,errors, touched }) => (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center',flexDirection:"column" }}>

<h3 style={{marginTop:25}}>You've completed the questionnaire!</h3>

<TextField 
style={{marginBottom:15,width:400,marginTop:20}}  

label="First Name"
id="firstName"
name="firstName"
onChange={(event) => setFieldValue("firstName", event.target.value)} 

margin="normal"
variant="outlined"



/>




<TextField id="outlined-basic" label="Surname" variant="outlined"
style={{marginBottom:15,width:400,marginTop:20}}  
name="SurName"
onChange={(event) => setFieldValue("SurName", event.target.value)} 

margin="normal"


/>




{errors.firstName && touched.firstName ? (
             <Errors>{errors.firstName}</Errors>
           ) : null}

{errors.SurName && touched.SurName ? (
             <Errors>{errors.SurName}</Errors>
           ) : null}



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



<SignUpButton  onClick={handleSubmit} >Sign Up</SignUpButton>

      
      </div>




      )}
  
      </Formik>:

   null

}




</QuestionOption>
 
 
 </QuestionDiv>




      
        </GettingStarted>
    );
}

export default GettingStarted;
