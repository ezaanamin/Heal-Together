import React, { useEffect, useState } from 'react';
import logo from "../../images/HealTogether_Logo2_transparent.png";
import { Primary_Profile } from '../../questions/PrimaryProfile';
import { Interest_questions } from '../../questions/Interest_questions';
import { InputLabel, MenuItem, Select } from '@mui/material';
import { FormControl, FormControlLabel, Checkbox } from "@material-ui/core";
import { UserContext } from '../../contextState/contextState';
import { useContext } from 'react';
import SignUpForm from '../../component/SignUpForm';
import { Mental_Health_Insight } from '../../questions/mentalHealthInsight';
import { Coping_Question } from '../../questions/Coping_Question';
import { GettingStartedDiv, HeadingGettingStarted, SubHeadingGettingStarted, GettingStartedLogo, QuestionDiv, QuestionHeading, QuestionOption, QuestionButton,StyledTextarea } from '../../styles/styles';
import { Stepper, Step } from "react-form-stepper";

const GettingStarted = () => {


  const userContext = useContext(UserContext);
  const { setInterest_question, setPrimary_Profile_question, SetMentalHealthInsight, SetCoping,    story, setStory} = userContext;

  const maxWords = 200;
  const [questionNo, SetQuestionNo] = useState(0);
  const [activeStep, setActiveStep] = useState(0);
const [questionCheckBox, SetQuestionCheckBox] = useState(-1);


const handleTextChange = (e) => {
  const inputText = e.target.value;
  const words = inputText.split(' ');

  if (words.length <= maxWords) {
    setStory(inputText);
  }
};
const storyCount = story.split(' ').filter((word) => word !== '').length;
  const UpdateAndLogProfileQuestion = (product, value) => {
    setPrimary_Profile_question((prevState) => ({
      ...prevState,
      [value]: product,
    }));

    if (questionNo !== 8) {
      SetQuestionNo(questionNo + 1);
    } else if (questionNo === 8) {
      SetQuestionCheckBox(0);
    }
  }

  const toggleInterest = (value) => {
    setInterest_question((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  }

  const ToggleMentalHealth = (value) => {
    SetMentalHealthInsight((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  }

  const toggleCoping = (value) => {
    SetCoping((prevState) => ({
      ...prevState,
      [value]: !prevState[value],
    }));
  }

  const IncrementQuestionCheckBoxAndLog = () => {
    if (questionCheckBox !== 4) {
      SetQuestionCheckBox(questionCheckBox + 1);
    }
  }


  useEffect(()=>{

    if(questionCheckBox>-1)
    {

      setActiveStep(1)
    }

    if(questionCheckBox===3)
    {
      setActiveStep(2)

    }
    if(questionCheckBox===4)
    {
      setActiveStep(3)
    }

  },[questionCheckBox])
  return (
    <GettingStartedDiv>
      <GettingStartedLogo src={logo} />
      <HeadingGettingStarted>Begin Your Healing Journey Together</HeadingGettingStarted>
      <SubHeadingGettingStarted>As you get started, we'll ask you a few thoughtful questions to better understand your needs and experiences. Your answers will help us pair you with others who are on a similar path towards healing. Together, you'll have the opportunity to share, learn, and support each other.</SubHeadingGettingStarted>
      <Stepper
  activeStep={activeStep}
  styleConfig={{
    activeBgColor: '#387d3a',
    completedBgColor: '#4caf50',
    inactiveBgColor: '#808080',
  }}
>
  <Step activeColor="black" onClick={() => setActiveStep(0)} label="Basic Profile" />
  <Step onClick={() => setActiveStep(1)} label="Mental Health Insights" />
  <Step   onClick= {() => setActiveStep(2)}  label="Personal Story" />
  <Step onClick={() => setActiveStep(3)} label="Sign-In Details" />
</Stepper>
      <QuestionDiv>

        {questionNo <= 8 && activeStep === 0 && questionCheckBox === -1 ? (
      
            <QuestionHeading>{Primary_Profile[questionNo].question}</QuestionHeading>
   
        ) : null}

        <QuestionOption>
          {Primary_Profile[questionNo].options && questionNo <= 8 && questionCheckBox === -1 ? (
            Primary_Profile[questionNo].options.map((product) => (
              <QuestionButton width="550px" onClick={() => UpdateAndLogProfileQuestion(product, Primary_Profile[questionNo].value)}>{product}</QuestionButton>
            ))
          ) : null}

          {questionNo === 2 ? (
            <FormControl sx={{ m: 1, width: 370, mt: 3 }}>
              <InputLabel style={{ textAlign: "center", marginBottom: 10 }} id="demo-simple-select-filled-label">Age</InputLabel>
              <Select
                style={{ marginBottom: 10, marginLeft: 10, marginRight: 10 }}
                onChange={(selectedValue) => UpdateAndLogProfileQuestion(selectedValue.target.value, 'age')}
              >
                {Array.from({ length: 90 }, (_, i) => i + 13).map((dayOption) => (
                  <MenuItem key={dayOption} value={dayOption}>
                    {dayOption}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          ) : null}

          {questionCheckBox > -1  && activeStep === 1 && questionCheckBox === 0 ? (
            <>
      
              <QuestionHeading>{Mental_Health_Insight[questionCheckBox].question}</QuestionHeading>
            </>
          ) : null}

          {questionCheckBox > -1 &&  activeStep === 1 && questionCheckBox === 0 ? (
            Mental_Health_Insight[questionCheckBox].options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox onChange={() => ToggleMentalHealth(option.value)} />}
                checked={userContext.Mental_health_insight[option.value]}
                label={option.label}
              />
            ))
          ) : null}

          {questionCheckBox > -1  &&  activeStep === 1  && questionCheckBox === 1 ? (
            <QuestionHeading>{Coping_Question[0].question}</QuestionHeading>
          ) : null}

          {questionCheckBox > -1  && questionCheckBox === 1 ? (
            Coping_Question[0].options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox onChange={() => toggleCoping(option.value)} />}
                checked={userContext.Coping[option.value]}
                label={option.label}
              />
            ))
          ) : null}

          {questionCheckBox > -1 && questionCheckBox === 2 ? (
            <QuestionHeading>{Interest_questions[0].question}</QuestionHeading>
          ) : null}

          {questionCheckBox > -1 && questionCheckBox === 2 ? (
            Interest_questions[0].options.map((option, index) => (
              <FormControlLabel
                key={index}
                control={<Checkbox onChange={() => toggleInterest(option.value)} />}
                checked={userContext.Interest_question[option.value]}
                label={option.label}
              />
            ))
          ) : null}
          {questionCheckBox === 3 ? (
            <>
          
        <QuestionHeading>Share Your Healing Journey: Your Story Matters</QuestionHeading>

        <StyledTextarea
        placeholder="Your Healing Story"
        rows="20"
        name="comment[text]"
        id="comment_text"
        cols="40"
        className="ui-autocomplete-input"
        autoComplete="off"
        role="textbox"
        value={story}
        aria-autocomplete="list"
        aria-haspopup="true"
        onChange={handleTextChange}
      ></StyledTextarea>

 <div style={{position:"relative",left:520}}>
 {storyCount}/{maxWords}
 </div>
            </>
          ) : null}
          {questionCheckBox > -1 && questionCheckBox !== 4 ? (
            <QuestionButton width="200px" onClick={() => IncrementQuestionCheckBoxAndLog()}>Next</QuestionButton>
          ) : null}
        
          {questionCheckBox === 4 ? (
            <>
          
              <SignUpForm />
            </>
          ) : null}
</QuestionOption>
 </QuestionDiv>      
        </GettingStartedDiv>
    );
}

export default GettingStarted;