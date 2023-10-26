import React, { useState } from 'react';
import logo from "../../images/HealTogether_Logo2_transparent.png";
import { Primary_Profile } from '../../questions/PrimaryProfile';
import { Interest_questions } from '../../questions/Interest_questions';
import { InputLabel, MenuItem, Select } from '@mui/material';
import {FormControl,FormControlLabel,Checkbox} from "@material-ui/core";
import { UserContext } from '../../contextState/contextState';
import { useContext } from 'react';
import SignUpForm from '../../component/SignUpForm';
import { Mental_Health_Insight } from '../../questions/mentalHealthInsight';
import { Coping_Question } from '../../questions/Coping_Question';
import { GettingStartedDiv,HeadingGettingStarted,SubHeadingGettingStarted ,GettingStartedLogo,QuestionDiv,QuestionHeading,QuestionOption,QuestionButton} from '../../styles/styles';
const GettingStarted = () => {
  const userContext = useContext(UserContext);
  const { setInterest_question, setPrimary_Profile_question,SetMentalHealthInsight,SetCoping} = userContext;

  const [questionNo,SetQuestionNo]=useState(0)
  const [questionCheckBox,SetQuestionCheckBox]=useState(-1);
const UpdateAndLogProfileQuestion=(product,value)=>{

  console.log(value,'ezaan');
  console.log(product,'ezaan')
 
 
     setPrimary_Profile_question((prevState) => ({
       ...prevState,
       [value]:product,
     })); 
 
   if(questionNo!==8)
   {
     SetQuestionNo(questionNo+1)
   }
 else if(questionNo===8)
   {
    
    console.log(userContext.Primary_Profile_question,'ezaan amin');
    SetQuestionCheckBox(0);
  
   }
 
 
 }


const toggleInterest=(value)=>{
console.log(userContext.Interest_question[value],'ezaan');
  setInterest_question((prevState) => ({
    ...prevState,
    [value]: !prevState[value],
  })); 
}

const   ToggleMentalHealth=(value)=>{
  console.log(userContext.Mental_health_insight[value],'ezaan');
  SetMentalHealthInsight((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    })); 
  }
  
  const toggleCoping=(value)=>{
    console.log(userContext.Coping[value],'ezaan');
    SetCoping((prevState) => ({
        ...prevState,
        [value]: !prevState[value],
      })); 
    }
    
  


const IncrementQuestionCheckBoxAndLog=()=>{

  if(questionCheckBox!==3)
  {
    SetQuestionCheckBox(questionCheckBox+1);
    console.log(questionCheckBox,'ezaan');

  }

}
    return (
        <GettingStartedDiv>
<GettingStartedLogo src={logo}/>
<HeadingGettingStarted >Begin Your Healing Journey Together</HeadingGettingStarted>
<SubHeadingGettingStarted>As you get started, we'll ask you a few thoughtful questions to better understand your needs and experiences. Your answers will help us pair you with others who are on a similar path towards healing. Together, you'll have the opportunity to share, learn, and support each other.</SubHeadingGettingStarted>
<QuestionDiv>  
{
  questionNo<=8 &&   questionCheckBox===-1? 
  <QuestionHeading>{Primary_Profile[questionNo].question}</QuestionHeading>
:null
}
  <QuestionOption>
{Primary_Profile[questionNo].options &&  questionNo<=8 &&   questionCheckBox===-1?  ( 

  
    Primary_Profile[questionNo].options.map((product) => 
    
    
    <QuestionButton width="550px" onClick={()=>UpdateAndLogProfileQuestion(product,Primary_Profile[questionNo].value)}>{product}</QuestionButton>)
  ) : 
  

  null
}

{
  questionNo===2?
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
  questionCheckBox>-1  && questionCheckBox===0?
  <QuestionHeading>{Mental_Health_Insight[questionCheckBox].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox===0 ? (
  Mental_Health_Insight[questionCheckBox].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>ToggleMentalHealth(option.value)}/>}
      checked={userContext.Mental_health_insight[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}

{
  questionCheckBox>-1  && questionCheckBox===1?
  <QuestionHeading>{Coping_Question[0].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox===1 ? (
  Coping_Question[0].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>toggleCoping(option.value)}/>}
      checked={userContext.Coping[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}
{
  questionCheckBox>-1  && questionCheckBox===2?
  <QuestionHeading>{Interest_questions[0].question}</QuestionHeading>
:null
  

}

{  questionCheckBox>-1  && questionCheckBox===2 ? (
  Interest_questions[0].options.map((option, index) => (
 
    <FormControlLabel
      key={index}
      control={<Checkbox  onChange={()=>toggleInterest(option.value)}/>}
      checked={userContext.Interest_question[option.value]}

      label={option.label}
    />
  ))

) : (
  null
)}


{questionCheckBox>-1 && questionCheckBox!==3 ?

<QuestionButton width="200px"  onClick={(()=>IncrementQuestionCheckBoxAndLog())}>Next</QuestionButton>
:null
}
{
   questionCheckBox===3 ?<SignUpForm/>:null
}

</QuestionOption>
 </QuestionDiv>      
        </GettingStartedDiv>
    );
}

export default GettingStarted;