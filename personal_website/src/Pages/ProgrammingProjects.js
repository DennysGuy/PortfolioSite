import { useState, useEffect } from "react";
import ProjectCard from "../Components/Project-Card";
import useFetch from "../Components/useFetch";
import ProjectList from "../Components/ProjectList";

const ProgrammingProjects = () => {
    //const paragraph = "The UML Editor was developed during my Software Development principles class (CSCD350). The goal for this class project was to work in teams of 5 or 6 while implementing object oriented programming concepts, learn the process of github, and incorporate the agile process. The quarter was partitioned into sprints where we had to satisfy given requirements as well as a 'real world' client who gave us feedback. The first half of the quarter was focused on developing the UML editor in the commandline while the second half was focused on a GUI iteration.";
    
    const {data: projects, isPending, error} = useFetch('http://localhost:8000/projects');
    return (  
        <div class="">
            <h1 class="page-header">Programming Projects</h1>
            <div class="pt-8">
                {error && <div>{error}</div>}
                {isPending && <div>Loading Projects...</div>}
                {projects && <ProjectList projects={projects}/>}
            </div>

        </div>
    );
}
 
export default ProgrammingProjects;
