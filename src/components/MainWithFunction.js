import React, {useContext} from 'react';
import ThemeContext from '../context/ThemeContext';
import AppTheme from '../Colors';

const Main = () => {
  const theme = useContext(ThemeContext[0]);
  const currentTheme = AppTheme[theme];
  return (
    <main style={{
      padding: '1rem',
      backgroundColor: `${currentTheme.backgroundColor}`,
      color: `${currentTheme.textColor}`
      }}>
        <h1>Heading 1</h1>
        <p>This is Paragraph</p>
        <button>This is Button</button>
    </main>
  );
}

export default Main;
