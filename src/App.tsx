import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';

import './assets/reset.css';

import LightTheme from './themes/Light';

import SignupScreen from './pages/SignupScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <ThemeProvider theme={LightTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
