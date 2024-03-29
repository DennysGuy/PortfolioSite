import './App.css';
import NavBar from './Components/NavBar';
import AboutMe from './Pages/AboutMe';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import ProgrammingProjects from './Pages/ProgrammingProjects';
import Music from './Pages/Music';
import Contact from './Pages/Contact';
import BlogPage from './Pages/BlogPages/BlogPage';
import LoginPage from './Pages/LoginPage';
import AccountPage from './Pages/AccountSettings';
import { useState } from 'react';
import CreateBlogPage from './Pages/CreateBlogPages/CreateBlogPage';
import UMLEditorBlog from './Pages/BlogPages/UMLEditorBlog';
import WTCBlog from './Pages/BlogPages/WTCBlog';
import DevilsTreasureBlog from './Pages/BlogPages/DevilsTreasureBlog';
import TetrisBlog from './Pages/BlogPages/TetrisBlog';
import CreateUMLBlogPage from './Pages/CreateBlogPages/CreateUMLBlogPage';
import CreateWTCBlogPage from './Pages/CreateBlogPages/CreateWTCBlogPage';
import CreateDTBlogPage from './Pages/CreateBlogPages/CreateDTBlogPage';
import CreateTetrisBlogPage from './Pages/CreateBlogPages/CreateTetrisBlogPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginMethod = () => {
    setIsLoggedIn(true);
  }

  return (
    <div className="bg-slate-800 text-gray-200">
      <Router>
        <NavBar  isLoggedIn={isLoggedIn}/>
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/prog-projects" element={<ProgrammingProjects />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/Login" element={<LoginPage handleLogin={handleLoginMethod} />}/>
            <Route path="/AccountSettings" element={<AccountPage />}/>
            <Route path="/create-blog-page" element={<CreateBlogPage />}/>
            <Route path="/umleditor-blog" element={<UMLEditorBlog isLoggedIn={isLoggedIn}/>} />
            <Route path="/wtc-blog" element={<WTCBlog isLoggedIn={isLoggedIn} />} />
            <Route path="/devilstreasure-blog" element={<DevilsTreasureBlog isLoggedIn={isLoggedIn} />} />
            <Route path="/tetris-blog" element={<TetrisBlog isLoggedIn={isLoggedIn} />} />
            <Route path="/create-uml-editor-blog" element={<CreateUMLBlogPage />} />
            <Route path="/create-wtc-blog" element={<CreateWTCBlogPage />} />
            <Route path="/create-dt-blog" element={<CreateDTBlogPage />} />
            <Route path="/create-tetris-blog" element={<CreateTetrisBlogPage />} />
          </Routes> 
        </main>  
      </Router>
    </div>

  );
}

export default App;
