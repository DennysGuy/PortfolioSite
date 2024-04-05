import { useState } from "react";
import { Link } from "react-router-dom";
import Linkedin_icon from '../LinkedIn_icon.svg';
import GithubIcon from '../GithubIcon.svg';
import menuhamgurger from '../menuburger.svg';
import SoundCloudIcon from '../soundcloud-tile.svg';
const NavBar = (props) => {

    /**
     * The Nav Bar does a little more than allow us to navigate the page
     * It will also harbor the admin login, account settings, and log out buttons
     * **Also provides icons containing links to socials
     * 
     */
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
    <div className="w-full"> 
        <div className="pl-5 font-bold  text-2xl md:text-4xl pt-8 border bg-slate-500">
            <div className="grid md:flex md:space-x-4">
                <h1 className="shadow-2xl">Matthew Matriciano</h1>
                <div className="flex space-x-4">
                    <a href="https://www.linkedin.com/in/matt-matriciano-94b47a243/" target="_blank" className="transform hover:scale-110 transition ease-out duration-100">
                        <img src={Linkedin_icon} alt="linked-in" className="h-8 w-8 mt-1"/>
                    </a>
                    <a href="https://soundcloud.com/mmatriks" target="_blank" className="transform hover:scale-110 transition ease-out duration-100">
                        <img src={SoundCloudIcon} alt="linked-in" className="h-8 w-8 mt-1"/>
                    </a>
                    <a href="https://github.com/DennysGuy" target="_blank" className="transform hover:scale-110 transition ease-out duration-100">
                        <img src={GithubIcon} alt="linked-in" className="h-8 w-8 mt-1"/>
                    </a>

                </div>

            </div>
        </div>
        <nav className="mr-[-20px]">
            <div className="flex">
                <div className="grid">
                    <button onClick={handleDisplayOptions} >
                        <img src={menuhamgurger} className =" bg-slate-600 w-10 lg:hidden ml-6 mb-6 rounded-sm hover:cursor-pointer" />
                    </button>
                    
                    <div className={`${displayOptions ? 'grid' : 'hidden'} md:flex`}>
                        <Link to="/" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Biography</Link>
                        <Link to="/prog-projects" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Programming Projects</Link>
                        <Link to="/music" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Music</Link>
                        <Link to="/contact" className="mx-6 hover:underline transform hover:scale-110 ease-out duration-150">Contact</Link>
                    </div>

                </div>
                <div className="px-12">
                    {props.isLoggedIn && 
                    <div className="login-hub">
                        <p className="">Welcome, {props.username}!</p>
                        <Link to="/AccountSettings" className="hover:underline transform hover:scale-110 ease-out duration-150">Account</Link>
                        <button onClick={handleLogout} className="ml-8 hover:underline transform hover:scale-110 ease-out duration-150">Log out</button>
                    </div>
                    }
                    {!props.isLoggedIn && <Link to="/Login" className="hover:underline ">Admin Login</Link>}
                </div>
            </div>
        </nav>
    </div> );
}
 
export default NavBar;