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
import axios from 'axios';
import EditBlogPostPage from './Pages/EditBlogPost';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (username, password) => {
    fetch(`http://localhost:8000/accounts`)
    .then(response => response.json())
    .then(accounts => {
      let loggedIn = false;
      accounts.forEach(account => {
        if (account.hasOwnProperty('username') && account.hasOwnProperty('password') &&
            account['username'] === username && account['password'] === password) {
          setLoggedInStatus(true, username, password, account['avatar'], account['email']);
          console.log("Login successful!");

          loggedIn = true;
        }
      });
      if (!loggedIn) {
        console.log('Login unsuccessful');
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const setLoggedInStatus = (isLoggedIn, username, password, avatar, email) => {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    localStorage.setItem('avatar', avatar);
    localStorage.setItem('email', email);

    setTimeout(() => {
      window.location.reload();
      
    }, 50);
    
  }

  const getLoggedInStatus = () => {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    return isLoggedIn === 'true';
  }

  const getUsername = () => {
    const username = localStorage.getItem('username');
    return username;
  }

  const getPassword = () => {
    const password = localStorage.getItem('password');
    return password
  }

  const getEmail = () => {
    const email = localStorage.getItem('email');
    return email;
  }
  
  const getAvatar = () => {
    const avatar = localStorage.getItem('avatar');
    return avatar;
  }

  return (
    <div className="bg-slate-800 text-gray-200">
      <Router>
        <NavBar  isLoggedIn={getLoggedInStatus()} username={getUsername()} setLoggedInStatus={setLoggedInStatus} />
        <main className="content">
          <Routes>
            <Route path="/" element={<AboutMe />}/>
            <Route path="/prog-projects" element={<ProgrammingProjects />}/>
            <Route path="/music" element={<Music />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/Login" element={<LoginPage username={username} password={password} setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin} isLoggedIn={getLoggedInStatus()} />}/>
            <Route path="/AccountSettings" element={<AccountPage username={getUsername()} password={getPassword()} avatar={getAvatar()} email={getEmail()} />}/>
            <Route path="/create-blog-page" element={<CreateBlogPage />}/>
            <Route path="/umleditor-blog" element={<UMLEditorBlog isLoggedIn={getLoggedInStatus()}/>} />
            <Route path="/wtc-blog" element={<WTCBlog isLoggedIn={getLoggedInStatus()} />} />
            <Route path="/devilstreasure-blog" element={<DevilsTreasureBlog isLoggedIn={getLoggedInStatus()} />} />
            <Route path="/tetris-blog" element={<TetrisBlog isLoggedIn={getLoggedInStatus()} />} />
            <Route path="/umleditor-blog/createblog" element={<CreateUMLBlogPage author={getUsername()} avatar={getAvatar()} blogPage="/umleditor-blog"/>} />
            <Route path="/wtc-blog/createblog" element={<CreateWTCBlogPage author={getUsername()} avatar={getAvatar()} blogPage="/wtc-blog" />} />
            <Route path="/devilstreasure-blog/createblog" element={<CreateDTBlogPage author={getUsername()} avatar={getAvatar()} blogPage="/devilstreasure-blog" />} />
            <Route path="/tetris-blog/createblog" element={<CreateTetrisBlogPage author={getUsername()} avatar={getAvatar()} blogPage="/tetris-blog" />} />
            <Route exact path="/edit/:blog/:id" element={<EditBlogPostPage />} />
          </Routes> 
        </main>  
      </Router>
    </div>

  );
}

export default App;
