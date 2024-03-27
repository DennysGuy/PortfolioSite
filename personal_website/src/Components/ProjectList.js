import ProjectCard from "./Project-Card";

const ProjectList = ({projects}) => {
    return (  
        <div>
            {projects.map((project) => (
               
                <ProjectCard title={project.title} type={project.type} image={project.image} alt_id={project.alt_id} description={project.description} gitlink={project.githublink} />
                
            ))}
        </div>
    );
}
 
export default ProjectList;