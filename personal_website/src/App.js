import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Pages/AboutMe';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProgrammingProjects from './Pages/ProgrammingProjects';
import Music from './Pages/Music';
import Contact from './Pages/Contact';
import BlogPage from './Pages/BlogPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/AccountSettings';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginMethod = () => {
    setIsLoggedIn(true);
  }

  return (
    <div>
      <Router>
        <NavBar  isLoggedIn={isLoggedIn}/>
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/prog-projects" element={<ProgrammingProjects />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/blogpage" element={<BlogPage isLoggedin={isLoggedIn}/>}/> 
            <Route path="/Login" element={<LoginPage handleLogin={handleLoginMethod} />}/>
            <Route path="/AccountSettings" element={<AccountPage />}/>
          </Routes> 
        </main>  
      </Router>
    </div>

  );
}

export default App;
