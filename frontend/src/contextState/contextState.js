import React, { createContext, useState } from 'react';


export const UserContext = createContext();

const Primary_Profile_initialState = {
  primary_motivation:"",
  professional_treatment:"",
  comfortable_discussing_mental_health:"",
  connect_with_others:"",
  religious:"",
  received_a_diagnosis:"",
  age:0
};
const Interest_initialState = {
  copingTechniques: false,
  personalStories: false,
  medication: false,
  reducingStigma: false,
  healthyLifestyle: false,
  spirituality: false,
  otherInterests: false,
};
const coping= {

  meditation: false,
  creativeActivities: false,
  talking_to_friends_family:false,
  exercising:false,
  professional_help:false,
  copingother:false,
};


const mental_health_insight={


  depression: false,
  anxiety: false,
  bipolar: false,
  ptsd: false,
  ocd: false,
  schizophrenia: false,
  eatingDisorders: false,
  other: false,
}

export function UserContextProvider({ children }) {
  const [Interest_question, setInterest_question] = useState(Interest_initialState);
  const [Mental_health_insight, SetMentalHealthInsight] = useState(mental_health_insight);
  const [story, setStory] = useState('');
  const [Coping, SetCoping] = useState(coping);
  const [Primary_Profile_question, setPrimary_Profile_question] = useState(Primary_Profile_initialState);
  const [SignUpModal, SetSignUpModal] = useState(false);
  const [UserFirstName, SetUserFirstName] = useState("");
  const [UserSurName, SetUserSurName] = useState("");
  const [UserGender, SetUserGender] = useState("");
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
  const [currentTheme, SetCurrentTheme] = useState("");
  const [LoginModal, SetLoginModal] = useState(false);
  const [userFriendsModal,SetUserFriendModal]=useState(false);
  const [firstTimeUser, SetFirstTimeUser] = useState(false);
  const [RecommendedUserList, SetRecommendedUserList] = useState([]);
  const [UserProfileModal, SetUserProfileModal] = useState(false);
  const [UserUsername, SetUserUsername] = useState("");
  const [EditProfileModal, SetEditProfileModal] = useState(false);
  const [supportGroupData, setSupportGroupData] = useState(null);
  const [isFlippedcalmingBlueTheme, setFlippedcalmingBlueTheme] = useState(false);
  const [isFlippedsereneGreenTheme, setFlippedsereneGreenTheme] = useState(false);
  const [isFlippedrelaxingPurpleTheme, setFlippedrelaxingPurpleTheme] = useState(false);
  const [isFlippedTranquilTealTheme, setFlippedTranquilTealTheme] = useState(false);
  const [PostContent,SetPostContent]=useState([])




  const [theme, setTheme] = useState("light");
  const [ColorTheme, SetColorTheme] = useState(false);

  const userContextValue = {
    EditProfileModal,
    SetEditProfileModal,
    UserFirstName,
    SetUserFirstName,
    UserSurName,
    SetUserSurName,
    UserGender,
    SetUserGender,
    firstTimeUser,
    SetFirstTimeUser,
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
    theme,
    setTheme,
    ColorTheme,
    SetColorTheme,
    currentTheme,
    SetCurrentTheme,
    LoginModal,
    SetLoginModal,
    Interest_question,
    setInterest_question,
    Primary_Profile_question,
    setPrimary_Profile_question,
    RecommendedUserList,
    SetRecommendedUserList,
    Mental_health_insight,
    SetMentalHealthInsight,
    Coping,
    SetCoping,
    UserProfileModal,
    SetUserProfileModal,
    UserUsername,
    SetUserUsername,
    story, setStory,
    supportGroupData, setSupportGroupData,
    userFriendsModal,SetUserFriendModal,  isFlippedcalmingBlueTheme, setFlippedcalmingBlueTheme,
    isFlippedsereneGreenTheme, setFlippedsereneGreenTheme,
    isFlippedrelaxingPurpleTheme, setFlippedrelaxingPurpleTheme,
    isFlippedTranquilTealTheme, setFlippedTranquilTealTheme,
    PostContent,SetPostContent
  };

  return (
    <UserContext.Provider value={userContextValue}>
      {children}
    </UserContext.Provider>
  );
}
