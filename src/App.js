import logo from './logo.svg';
import './App.css';
import Chat from './pages/Chat';
import NoPage from './pages/NoPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Chat />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
