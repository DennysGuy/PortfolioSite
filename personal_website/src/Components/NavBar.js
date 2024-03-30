import { Link } from "react-router-dom";

const NavBar = (props) => {

    const handleLogout = () => {
        props.setLoggedInStatus(false, '', '');
    }

    return ( <div className="">
        <div>
            <h1 className="pl-5 font-bold text-4xl pt-8 border bg-slate-400">Matthew Matriciano</h1>
        </div>
        <nav className="mt-4 mr-[-20px]">
            <div className="flex justify-between">
                <div>
                    <Link to="/" className="mx-6 ">Biography</Link>
                    <Link to="/prog-projects" className="mx-6  pt-6">Programming Projects</Link>
                    <Link to="/music" className="mx-6 pt-6">Music</Link>
                    <Link to="/contact" className="mx-6 pt-6">Contact</Link>
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