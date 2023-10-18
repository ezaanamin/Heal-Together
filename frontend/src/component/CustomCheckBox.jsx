import React, { useState } from 'react';
import styled from 'styled-components';
import { useContext } from 'react';
import { UserContext } from '../Context/context';



const CustomCheckbox = () => {
  const [isChecked, setIsChecked] = useState(false);
  const {theme}=useContext(UserContext)
  const LightColor ='gray';
  const BlueColor ='#6ea8d9'
  const GreenColor ='#8fd9a6' 
  const PurpleColor ='#b39ed9';
const MainColor=
theme === 'blue' ? BlueColor :
theme === 'green' ? GreenColor :
theme === 'purple' ? PurpleColor :
theme === 'light' ? LightColor : LightColor;


  const CheckboxContainer = styled.label`
  display: flex;
  align-items: center;
  user-select: none;
  cursor: pointer;
`;

const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
`;

const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  border: 1px solid ;
  background: ${props => (props.checked ? `${MainColor}` : 'white')};
`;

const CheckboxLabel = styled.span`
  margin-left: 8px;
`;




  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  return (
    <CheckboxContainer>
      <HiddenCheckbox checked={isChecked} onChange={handleCheckboxChange} />
      <StyledCheckbox checked={isChecked}>
        {isChecked && <span>&#10003;</span>}
      </StyledCheckbox>
      <CheckboxLabel>Custom Checkbox</CheckboxLabel>
    </CheckboxContainer>
  );
};

export default CustomCheckbox;
