import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from './App.tsx'
import './index.css'
import Home from './Home/Home.tsx';
import About from './Home/User/Landing_Page/About.tsx';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/landing" element={<App />} /> {/* Optional: For a fallback route */}
      </Routes>
    </Router>  
  </StrictMode>,
)
