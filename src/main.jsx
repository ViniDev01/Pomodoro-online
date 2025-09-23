
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css'
import App from './App.jsx';
import PoliticaDePrivacidade from './PoliticaDePrivacidade.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Routes>
      <Route path="/Pomodoro-online" element={<App />} />
      <Route path="/Pomodoro-online/politica-de-privacidade" element={<PoliticaDePrivacidade />} />
    </Routes>
  </BrowserRouter>,
)
