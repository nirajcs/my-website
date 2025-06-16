/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from "react";
import { projectsData } from "../data/projects";

const Projects = () => {
  const listStyle = {
    listStyleType: 'disc',
  }

  const [hovered, setHovered] = useState(null); // Track the currently hovered tile index
  const [projects,setProjects] = useState([])

  useEffect(()=>{
    setProjects(projectsData)
  },[])

  return (
    <>
      <div className='animate-onscroll-trigger w-5/6 my-10 md:hidden'>
        <h2 animation-settings="animate__fadeInLeft" className='animate__onscroll text-5xl font-bold text-white'>Projects</h2>
      </div>
      <div className="animate-onscroll-trigger h-5/6 w-5/6 bg-white rounded-lg flex flex-nowrap overflow-x-auto items-center">
        <div animation-settings="animate__fadeInDown" className="animate__onscroll h-full w-full bg-white rounded-lg flex flex-nowrap overflow-x-auto items-center">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`bg-primaryColor h-5/6 w-5/6 md:w-1/2 lg:w-1/4 mx-5 flex-shrink-0 ${
                hovered === index ? 'p-0 border-2 border-black' : 'p-3 rounded-lg'
              }`} 
            >
              {hovered === index ? ( // Show white div only for the hovered tile
                <div className="w-full h-full bg-white flex justify-center items-center p-5" onMouseLeave={() => setHovered(null)}>
                  <p>{project.description}</p>
                </div>
              ) : (
                <>
                  <div
                    onMouseEnter={() => setHovered(index)}
                    className="w-full h-1/3 bg-white flex items-center justify-center overflow-hidden"
                  ><img className='max-w-full max-h-full object-contain' src={project.image} alt={project.image} /></div>
                  <div className="w-full my-2 text-center">
                    <h1 className="font-medium text-white tracking-widest">{project.name}</h1>
                  </div>
                  <div className="bg-white w-full h-2/6 rounded">
                    <h2 className="m-2 font-bold">Technologies used</h2>
                    <div className="bg-gray-200 ps-5 h-full overflow-y-auto">
                      <ul style={listStyle}>
                        {
                          project.technologies && project.technologies.map((tech,index)=>(
                            <li key={index}>{tech}</li>
                          ))
                        }
                      </ul>
                    </div>
                    <div className="my-2 flex justify-between">
                      {project.git && (
                        <a href={project.git} className="text-white font-medium underline">
                          Github Link
                        </a>
                      )}
                      {project.liveLink && (
                        <a href={project.liveLink} className="text-white font-medium underline">
                          Live Link
                        </a>
                      )}
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
