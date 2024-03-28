import { Link } from "react-router-dom";

const NavBar = (props) => {
    return ( <div class="">
        <div>
            <h1 class="pl-5 font-bold text-4xl pt-8 border bg-slate-400">Matthew Matriciano</h1>
            <h2></h2>
        </div>
        <nav class="mt-4 mr-[-20px]">
            <div class="flex justify-between">
                <div>
                    <Link to="/" className="mx-6 ">Biography</Link>
                    <Link to="/prog-projects" class="mx-6  pt-6">Programming Projects</Link>
                    <Link to="/music" class="mx-6 pt-6">Music</Link>
                    <Link to="/contact" class="mx-6 pt-6">Contact</Link>
                </div>
                <div>
                    {props.isLoggedIn && 
                    <div class="flex px-12">
                        <p class="px-12">Welcome Admin!</p>
                        <Link to="/AccountSettings" class="underline">Account</Link>
                    </div>
                    }
                    {!props.isLoggedIn && <Link to="/Login" class="underline px-12">Admin Login</Link>}
                </div>
            </div>

            
        </nav>
    </div> );
}
 
export default NavBar;