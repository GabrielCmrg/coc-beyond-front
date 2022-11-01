import { BrowserRouter, Routes, Route } from 'react-router-dom';

import SignupScreen from './pages/SignupScreen';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<div>Home screen</div>} />
        <Route path="/signup" element={<SignupScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
