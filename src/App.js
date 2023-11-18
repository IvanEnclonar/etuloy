import logo from './logo.svg';
import './App.css';
import Chat from './pages/Chat';
import HomePage from './pages/HomePage';
import Signup from './pages/Signup';
import NoPage from './pages/NoPage';
import Plans from './pages/Plans';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="chat" element={<Chat />} />
        <Route path="signup" element={<Signup />} />
        <Route path="plans" element={<Plans />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
