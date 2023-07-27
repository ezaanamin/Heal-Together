import React, { useState, useEffect } from 'react';
import Picker from "@emoji-mart/react";
import data from "@emoji-mart/data";
import TagFacesIcon from '@mui/icons-material/TagFaces';
import styled from "styled-components"

const MegaDraft = () => {
  const StyledPicker = styled(Picker)`
  /* Add your custom styling for the Picker here */
  background-color: #f0f0f0;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  max-height: 200px;
  overflow-y: auto;
`;
  const [textAreaValue, setTextAreaValue] = useState('');
  const [rows, setRows] = useState(10);
  const [row1, setRow1] = useState(1);
  const [showEmoji, setShowEmojiPicker] = useState(false);
  const [text, setText] = useState("");



  const handleTextAreaChange = (event) => {
    setText(event.target.value);
    const rowsData = event.target.value.split('\n');
    const areAllRowsDivisibleBy40 = rowsData.every((row) => row.length % 40 === 0);

    if (areAllRowsDivisibleBy40) {
      setRow1(row1 + 1);
      if (row1 === rows) {
        setRows(rows + 1);
      }
    }
  };

  useEffect(() => {
    const textareaElement = document.getElementById('myTextarea');
    textareaElement.rows = rows;
  }, [rows]);

  const handleEmojiClick = (event, emojiObject) => {
    setTextAreaValue((prevValue) => prevValue + emojiObject.emoji);
  };

  const addEmoji = (e) => {
    const sym = e.unified.split("_");
    const codeArray = [];
    sym.forEach((el) => codeArray.push("0x" + el));
    let emoji = String.fromCodePoint(...codeArray);
    setText(text + emoji);
  };

  const placeholderStyle = {
    /* Add your custom styling for the placeholder here */
    color: '#b2b3b5',
    fontSize:20,
    border:"none",
    outline:"none",
  };
  return (
    <div>
      <textarea
    
        id="myTextarea"
        value={text}
        onChange={(e) => handleTextAreaChange(e)}
        rows={rows}
        cols={40}
        placeholder='Share Your Thoughts, Feel Heard!'
        style={placeholderStyle}

      />

        <TagFacesIcon style={{ position: 'absolute', right: 10, bottom: 150 }} fontSize="large"  onClick={() => setShowEmojiPicker(!showEmoji)} />
      {
        showEmoji?
        <div  style={{ position: 'absolute', right: 10, bottom: 200,height:200}}>
        <Picker
        
        data={data}
        emojiSize={20}
        emojiButtonSize={28}
        onEmojiSelect={addEmoji}
        maxFrequentRows={0}
      />
      </div>
      :
      null


      }

    </div>
  );
};

export default MegaDraft;


