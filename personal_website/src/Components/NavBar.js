import { useState } from "react";
import { Link } from "react-router-dom";
import Linkedin_icon from 'C:/Users/Mattx/projects/PortfolioSite/personal_website/src/LinkedIn_icon.svg';
import GithubIcon from 'C:/Users/Mattx/projects/PortfolioSite/personal_website/src/GithubIcon.svg';
import menuhamgurger from 'C:/Users/Mattx/projects/PortfolioSite/personal_website/src/menuburger.svg';
const NavBar = (props) => {

    const [showSettings, setShowSettings] = useState(false);
    const [displayOptions, setDisplayOptions] = useState(false);

    const handleDisplayOptions = () => {
        setDisplayOptions(!displayOptions);
    }

    const handleShowSettings = () => {
        setShowSettings(!showSettings);
    }

    const handleLogout = () => {
        props.setLoggedInStatus(false, '', '');
    }

    return ( 
    <div className=""> 
        <div className="pl-5 font-bold  text-2xl md:text-4xl pt-8 border bg-slate-500">
            <div className="grid md:flex md:space-x-4">
                <h1 className="shadow-2xl">Matthew Matriciano</h1>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/matt-matriciano-94b47a243/" target="_blank" className="transform hover:scale-110 transition ease-out duration-100">
                        <img src={Linkedin_icon} alt="linked-in" className="h-8 w-8 mt-1"/>
                    </a>
                    <a href="https://github.com/DennysGuy" target="_blank" className="transform hover:scale-110 transition ease-out duration-100">
                        <img src={GithubIcon} alt="linked-in" className="h-8 w-8 mt-1"/>
                    </a>
                </div>

            </div>
        </div>
        <nav className="mr-[-20px]">
            <div className="flex justify-between">
                <div className="grid">
                    <button onClick={handleDisplayOptions} >
                        <img src={menuhamgurger} className ="w-10 lg:hidden ml-6 mb-6 bg-gray-300 rounded-lg hover:cursor-pointer" />
                    </button>
                    
                    <div className={`${displayOptions ? 'grid space-y-6' : 'hidden'} md:flex`}>
                        <Link to="/" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Biography</Link>
                        <Link to="/prog-projects" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Programming Projects</Link>
                        <Link to="/music" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Music</Link>
                        <Link to="/contact" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Contact</Link>
                    </div>

                   

                </div>
                <div>
                    {props.isLoggedIn && 
                    <div className="flex px-12">
                        <p className="px-12">Welcome {props.username}!</p>
                        <Link to="/AccountSettings" className="hover:underline">Account</Link>
                        <button onClick={handleLogout} className="ml-12 hover:underline">Log out</button>
                    </div>
                    }
                    {!props.isLoggedIn && <Link to="/Login" className="underline px-12">Admin Login</Link>}
                </div>
            </div>

            
        </nav>
    </div> );
}
 
export default NavBar;