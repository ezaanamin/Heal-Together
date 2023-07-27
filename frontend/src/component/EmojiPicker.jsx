import React from 'react';
import { Picker } from 'emoji-mart';

const EmojiPicker = ({ onSelect }) => {
  return (
    <Picker
      onSelect={onSelect}
      title="Pick your feeling emoji"
      emoji="point_up"
      style={{ position: 'absolute', bottom: '20px', right: '20px' }}
    />
  );
};

export default EmojiPicker;
