import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Pages/AboutMe';
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from 'react-router-dom';
import ProgrammingProjects from './Pages/ProgrammingProjects';
import Music from './Pages/Music';
import Contact from './Pages/Contact';

function App() {
  return (
    <div>
      <Router>
        <NavBar />
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/prog-projects" element={<ProgrammingProjects />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/contact" element={<Contact />}/> 
          </Routes> 
        </main>  
      </Router>
    </div>

  );
}

export default App;
