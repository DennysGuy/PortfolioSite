import ProjectCard from "./Project-Card";

const ProjectList = ({projects}) => {
    return (  
        <div class="grid  justify-center">
            {projects.map((project) => (
                <ProjectCard 
                blogpage={project.blogspage} 
                title={project.title} type={project.platform} 
                image={project.image} alt_id={project.alt_id} 
                description={project.description} 
                gitlink={project.githublink} />
                
            ))}
        </div>
    );
}
 
export default ProjectList;