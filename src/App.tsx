import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/reset.css';

import AppThemeProvider from './themes/AppThemeProvider';

import SignupScreen from './pages/SignupScreen';
import HomeScreen from './pages/HomeScreen';

function App() {
  return (
    <AppThemeProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/signup" element={<SignupScreen />} />
        </Routes>
      </BrowserRouter>
    </AppThemeProvider>
  );
}

export default App;
