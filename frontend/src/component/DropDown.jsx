import React, { useState } from "react";
import styled from 'styled-components';
import { UserContext } from "../Context/context";
import { useContext } from "react";
function Dropdown() {
  const [dropdownState, setDropdownState] = useState(false);
  const [dropdownValue, setDropdownValue] = useState("");

  const handleDropdownClick = () => {
    setDropdownState(!dropdownState);
  };

  const handleSetDropdownValue = (value) => {
    setDropdownValue(value);
    setDropdownState(!dropdownState);
  };

  const dropdownContainerStyle = {
    margin: "auto",
    padding: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "5px",
    overflow: "hidden",

  };

  const dropdownStyle = {
    minWidth: "100px",
  };

  const dropdownBtnStyle = {
    fontSize: "16px",
    height: "40px",
    width: "auto",
    padding: "0 30px",
    cursor: "pointer",
    backgroundColor: "transparent",
    border:"none",

  };

  const dropdownItemsStyle = {
    width: "200px",
    position: "absolute",
    marginTop: "5px",
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    padding: "8px 15px",
    borderRadius: "4px",
    backgroundColor: "transparent"
  };

  const dropdownItemStyle = {
    paddingTop: "0px",
    paddingBottom: "0px",
    cursor: "pointer",
  };

  const dropdownLinkStyle = {
    paddingTop: "15px",
    paddingBottom: "15px",
  };

  const isVisibleStyle = {
    visibility: "visible",
  };

  const isHiddenStyle = {
    visibility: "hidden",
  };
  const IconHeading=styled.p`
  margin-left:10px;
 
 
 `


  return (
    <div style={dropdownContainerStyle}>
      <div style={dropdownStyle}>
        <button onClick={handleDropdownClick} style={dropdownBtnStyle}>
        <IconHeading>{dropdownValue === "" ? "More" : dropdownValue}</IconHeading>
        </button>
        <div
          style={{ ...dropdownItemsStyle, ...(dropdownState ? isVisibleStyle : isHiddenStyle) }}
        >
          <div style={dropdownItemStyle}>
            <div
              style={dropdownLinkStyle}
              onClick={() => handleSetDropdownValue("value 01")}
            >
              Item 01
            </div>
          </div>
          <div style={dropdownItemStyle}>
            <div
              style={dropdownLinkStyle}
              onClick={() => handleSetDropdownValue("value 02")}
            >
              Item 02
            </div>
          </div>
          <div style={dropdownItemStyle}>
            <div
              style={dropdownLinkStyle}
              onClick={() => handleSetDropdownValue("value 03")}
            >
              Item 03
            </div>
          </div>
          <div style={dropdownItemStyle}>
            <div
              style={dropdownLinkStyle}
              onClick={() => handleSetDropdownValue("value 04")}
            >
              Item 04
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
