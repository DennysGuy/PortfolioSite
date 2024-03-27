import { Link } from "react-router-dom";

const NavBar = () => {
    return ( <div class="">
        <div>
            <h1 class="pl-5 font-bold text-4xl pt-8 border bg-slate-400">Matthew Matriciano</h1>
            <h2></h2>
        </div>
        <nav class="mt-4 mr-[-20px]">
            <Link to="/" className="mx-6 ">Biography</Link>
            <Link to="/prog-projects" class="mx-6  pt-6">Programming Projects</Link>
            <Link to="/music" class="mx-6 pt-6">Music</Link>
            <Link to="/contact" class="mx-6 pt-6">Contact</Link>
        </nav>
    </div> );
}
 
export default NavBar;