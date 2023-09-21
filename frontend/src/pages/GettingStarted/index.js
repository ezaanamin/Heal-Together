import React, { useState } from 'react';
import styled from "styled-components"
import logo from "../../images/HealTogether_Logo2_transparent.png";
import { Primary_Profile } from '../../questions/PrimaryProfile';
import { Interest_questions } from '../../questions/Interest_questions';
import { InputLabel, MenuItem, Select } from '@mui/material';
import {FormControl,FormControlLabel,Checkbox} from "@material-ui/core";
import { UserContext } from '../../Context/context';
import { useContext } from 'react';
import SignUpForm from '../../component/SignUpForm';
import { Mental_Health_Insight } from '../../questions/mentalHealthInsight';
import { Coping_Question } from '../../questions/Coping_Question';
const GettingStarted = () => {
  const {Interest_question,setInterest_question,Primary_Profile_question, setPrimary_Profile_question,Mental_health_insight,SetMentalHealthInsight,    Coping,SetCoping}=useContext(UserContext)
  const [questionNo,SetQuestionNo]=useState(0)
  const [questionCheckBox,SetQuestionCheckBox]=useState(-1);


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
const QuestionButton = styled.button`
  background-color: #b9e5e3;
  color: #60a3a0;
  border-color: #b9e5e3;
  height: 50px;
  width: ${props => props.width || '200px'};
  font-size: 20px;
  border-radius: 20px;
  margin-bottom: 20px;
  margin-right: ${props => props.right || 'auto'};
  margin-left: ${props => props.left || 'auto'};
`;


const UpdateAndLogProfileQuestion=(product,value)=>{

  console.log(value,'ezaan');
  console.log(product,'ezaan')
 
 
     setPrimary_Profile_question((prevState) => ({
       ...prevState,
       [value]:product,
     })); 
 
   if(questionNo!=8)
   {
     SetQuestionNo(questionNo+1)
   }
 else if(questionNo==8)
   {
    
    console.log(Primary_Profile_question,'ezaan amin');
    SetQuestionCheckBox(0);
  
   }
 
 
 }


const toggleInterest=(value)=>{
console.log(Interest_question[value],'ezaan');
  setInterest_question((prevState) => ({
    ...prevState,
    [value]: !prevState[value],
  })); 
}

const   ToggleMentalHealth=(value)=>{
  console.log(Mental_health_insight[value],'ezaan');
  SetMentalHealthInsight((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    })); 
  }
  
  const toggleCoping=(value)=>{
    console.log(Coping[value],'ezaan');
    SetCoping((prevState) => ({
        ...prevState,
        [value]: !prevState[value],
      })); 
    }
    
  


const IncrementQuestionCheckBoxAndLog=()=>{

  if(questionCheckBox!=3)
  {
    SetQuestionCheckBox(questionCheckBox+1);
    console.log(questionCheckBox,'ezaan');

  }

}
    return (
        <GettingStarted>
<Logo src={logo}/>
<HeadingGettingStarted >Begin Your Healing Journey Together</HeadingGettingStarted>
<SubHeadingGettingStarted>As you get started, we'll ask you a few thoughtful questions to better understand your needs and experiences. Your answers will help us pair you with others who are on a similar path towards healing. Together, you'll have the opportunity to share, learn, and support each other.</SubHeadingGettingStarted>
<QuestionDiv>  
{
  questionNo<=8 &&   questionCheckBox==-1? 
  <QuestionHeading>{Primary_Profile[questionNo].question}</QuestionHeading>
:null
}
  <QuestionOption>
{Primary_Profile[questionNo].options &&  questionNo<=8 &&   questionCheckBox==-1?  ( 

  
    Primary_Profile[questionNo].options.map((product) => 
    
    
    <QuestionButton width="550px" onClick={()=>UpdateAndLogProfileQuestion(product,Primary_Profile[questionNo].value)}>{product}</QuestionButton>)
  ) : 
  

  null
}

{
  questionNo==2?
  <FormControl sx={{ m: 1, width: 370, mt: 3, }}>

<InputLabel style={{textAlign:"center",marginBottom:10}} id="demo-simple-select-filled-label">Age</InputLabel>

<Select
  style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}
  onChange={(selectedValue) => UpdateAndLogProfileQuestion(selectedValue.target.value,'age')}
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
  questionCheckBox>-1  && questionCheckBox==0?
  <QuestionHeading>{Mental_Health_Insight[questionCheckBox].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox==0 ? (
  Mental_Health_Insight[questionCheckBox].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>ToggleMentalHealth(option.value)}/>}
      checked={Mental_health_insight[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}

{
  questionCheckBox>-1  && questionCheckBox==1?
  <QuestionHeading>{Coping_Question[0].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox==1 ? (
  Coping_Question[0].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>toggleCoping(option.value)}/>}
      checked={Coping[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}
{
  questionCheckBox>-1  && questionCheckBox==2?
  <QuestionHeading>{Interest_questions[0].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox==2 ? (
  Interest_questions[0].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>toggleInterest(option.value)}/>}
      checked={Interest_question[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}


{questionCheckBox>-1 && questionCheckBox!=3 ?

<QuestionButton width="200px"  onClick={(()=>IncrementQuestionCheckBoxAndLog())}>Next</QuestionButton>
:null
}
{
   questionCheckBox==3 ?<SignUpForm/>:null
}

</QuestionOption>
 </QuestionDiv>      
        </GettingStarted>
    );
}

export default GettingStarted;