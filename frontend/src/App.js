import React, { useState, useEffect } from 'react';
import './App.css';
import Routes from './Routes';
import { UserContext } from './Context/context';




function App() {

useEffect(()=>{
  const GetTheme = () => {
  
    const theme = localStorage.getItem('theme');
    setTheme(theme)
  };

  GetTheme()
},[])
const Primary_Profile_initialState = {
  primary_motivation:"",
  professional_treatment:"",
  comfortable_discussing_mental_health:"",
  connect_with_others:"",
  religious:"",
  received_a_diagnosis:"",
  age:0
};
const Coping_and_Interest_initialState = {
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

const [Coping_and_Interest_question, setCoping_and_Interest_question] = useState(Coping_and_Interest_initialState);
const[Primary_Profile_question, setPrimary_Profile_question]=useState(Primary_Profile_initialState)
  const [SignUpModal, SetSignUpModal] = useState(false);
  const [UserFirstName, SetUserFirstName] = useState("");
  const[UserSurName,SetUserSurName] = useState("");
  const [UserGender, SetUserGender] = useState("")
  const [date, setDate] = useState(new Date());
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [dateError, setDateError] = useState(false);
  const [Code, SetCode] = useState(0);
  const [verficationEmail, setverficationEmail] = useState('');
  const [verficationFirstName, setverficationFirstName] = useState('');
  const [verficationLastName, setverficationLastName] = useState('');
  const [ExpireTime, setExpireTime] = useState(0);
  const [CreatePost, SetCreatePost] = useState(false);
  const [currentTheme,SetCurrentTheme] = useState("");
  const [LoginModal, SetLoginModal] = useState(false);
  const [firstTimeUser,SetFirstTimeUser]=useState(false);
  const [RecommendedUserList,SetRecommendedUserList]=useState([])


  const [theme, setTheme] = useState("light");
  const[ColorTheme, SetColorTheme] = useState(false);

  const userContextValue = {
    UserFirstName, SetUserFirstName,
    UserSurName,SetUserSurName,
    UserGender, SetUserGender,
    firstTimeUser,SetFirstTimeUser,
    SignUpModal,
    SetSignUpModal,
    date,
    setDate,
    day,
    setDay,
    month,
    setMonth,
    year,
    setYear,
    dateError,
    setDateError,
    Code,
    SetCode,
    verficationEmail,
    setverficationEmail,
    ExpireTime,
    setExpireTime,
    verficationFirstName,
    setverficationFirstName,
    verficationLastName,
    setverficationLastName,
    CreatePost,
    SetCreatePost,
    theme, setTheme,
    ColorTheme, SetColorTheme,
    currentTheme,SetCurrentTheme,
    LoginModal, SetLoginModal,
    Coping_and_Interest_question, setCoping_and_Interest_question,
    Primary_Profile_question, setPrimary_Profile_question,
    RecommendedUserList,SetRecommendedUserList
  };


  return (
    <UserContext.Provider value={userContextValue}>


<Routes/>


    </UserContext.Provider>
  );
}

export default App;
