import React, { useContext } from 'react'; import './App.css';
import { ThemeContext } from './ThemeContext';
import ThemeToggleButton from './ThemeToggleButton';

const App = () => {
const { theme } = useContext(ThemeContext);

const appStyles = {
backgroundColor: theme === 'light' ? '#ffffff' : '#333333', color: theme === 'light' ? '#000000' : '#ffffff',
height: '100vh', display: 'flex',
justifyContent: 'center', alignItems: 'center',
flexDirection: 'column',
};

return (
<div style={appStyles}>
<h1>Theme Switcher App</h1>
<ThemeToggleButton />
</div>
);
};

export default App;
