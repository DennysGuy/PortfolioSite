import { Link } from "react-router-dom";
const ProjectCard = (props) => {
    return ( 
    
    <div class="project-card text-black">
        <div class="flex flex-col px-4 pb-4">
            <Link to={props.blogpage}>
            <h2 class="underline italic text-xl font-bold pb-2">{props.title}</h2>
            </Link>
            <img src={props.image} alt={props.alt_id} className="drop-shadow-lg rounded-lg w-52 h-48 object-cover"/>
            <a href={props.gitlink} class="flex justify-center underline md:hidden text-blue-600">github repository</a>
        </div>
        <div class="flex flex-col hidden md:block bg-white m-4 rounded-lg shadow-xl">
            <p class="pt-4 pb-9 pr-4 max-w-[800px] lg:block ml-4">{props.description}</p>
            <div class="flex justify-between">
                <a href={props.gitlink} target = "_blank" class="underline text-blue-500 ml-4">link to github repository</a>
                <span class="italic pr-4 font-bold">{props.type}</span>
            </div> 
        </div>
    </div> 
    
    
    );
}
 
export default ProjectCard;