import { useState, useEffect } from "react";
import ProjectCard from "../Components/Project-Card";
import useFetch from "../Components/useFetch";
import ProjectList from "../Components/ProjectList";

const ProgrammingProjects = () => {
    //const paragraph = "The UML Editor was developed during my Software Development principles class (CSCD350). The goal for this class project was to work in teams of 5 or 6 while implementing object oriented programming concepts, learn the process of github, and incorporate the agile process. The quarter was partitioned into sprints where we had to satisfy given requirements as well as a 'real world' client who gave us feedback. The first half of the quarter was focused on developing the UML editor in the commandline while the second half was focused on a GUI iteration.";
    /**
     * we can see the use of those variables within useFetch here and we can display information based on the current status of those booleans
     * we can display 'loading' text while the information is currently being retrieve -- the isPending variable will be set to true during this process,
     * and once the process is finished it will be set to false, and the Loading Projects... text will dissapear hopfully being replaced by the list of projects
     * if not, an error message will be displayed.
     */
    const {data: projects, isPending, error} = useFetch('http://localhost:8000/projects');
    return (  
        <div className="">
            <h1 className="page-header hidden lg:block ">Programming Projects</h1>
            <h1 className="page-header lg:hidden">Projects</h1>
            
            <div className="grid justify-center pt-8">
                <p className="max-w-[600px] ml-6 lg:ml-56 ">This is a list of some of my most recent programming projects - personal and school related. 
                    To view a blog for a particular project, click on the title page. You can also view
                    the respective github repository by clicking the github repository link.
                </p>
                <div className="pt-8">
                    {error && <div>{error}</div>}
                    {isPending && <div>Loading Projects...</div>}
                    {projects && <ProjectList projects={projects}/>}
                </div>

            </div>
           
        </div>
    );
}
 
export default ProgrammingProjects;
