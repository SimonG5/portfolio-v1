import React, {useState} from 'react'
import { ProjectCard } from './ProjectCard';
import Projects from '../contents/projects.json'

export const ProjectList = () => {
    const [buttonText,setButtonText] = useState("Show more")
    const [visible,setVisible] = useState(6);

    const toggleShow = () =>{
      if(visible === 6){
        setVisible(Projects.length);
        setButtonText("Show less");
      }
      else{
        setVisible(6);
        setButtonText("Show more");
      }
    }

    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative">Other noteworthy projects</span>
          </h2>
        </div>
        <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
          {Projects.slice(0,visible).map(project =>{
            return(
              <ProjectCard key={project.id} title = {project.title} description = {project.description} link = {project.link} tags = {project.tags}></ProjectCard>
            )
          })}
        </div>
        <div className="text-center">
          <button onClick={toggleShow} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            {buttonText}
          </button>
        </div>
      </div>
    );
  };