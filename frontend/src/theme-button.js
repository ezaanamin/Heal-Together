import React, { useContext } from 'react';
import { ThemeContext } from '../src/Context/theme-context'

function ThemedButton({ onClick }) {
  const theme = useContext(ThemeContext);

  return (
    <button
      onClick={onClick}
      style={{ background: theme.background, color: theme.foreground }}
    >
      Switch Theme
    </button>
  );
}

export default ThemedButton;
