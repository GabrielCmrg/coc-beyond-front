import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './assets/reset.css';

import GlobalStyles from './themes/GlobalStyles';

import SignupScreen from './pages/SignupScreen';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<div>Home screen</div>} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
