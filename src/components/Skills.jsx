/* eslint-disable react/no-unknown-property */
import { useEffect, useState } from 'react'
import { technical,nonTechnical } from '../data/skills'
import SkillCard from './SkillCard'


const Skills = () => {
  const [techView,setTechView] = useState(true)
  const [skills, setskills] = useState(technical)


  useEffect(() => {
    if(techView){
      setskills(technical)
    }else{
      setskills(nonTechnical)
    }
  }, [techView])
  

  return (
    <div className='animate-onscroll-trigger md:w-10/12 w-full'>
      <div animation-settings="animate__fadeInLeft" className="animate__onscroll w-full flex items-center justify-between">
        <h2 className="text-5xl font-bold">Skills</h2>
        <div className="p-4">
          <div className="flex md:text-2xl text-sm border-b border-gray-200">
            <button
              className={`px-4 py-2 ${
                techView
                  ? "border-b-2 border-gray-500 text-gray-500"
                  : "text-gray-500"
              }`}
              onClick={() => setTechView(true)}
            >
              Technical
            </button>
            <button
              className={`px-4 py-2 ${
                !techView
                  ? "border-b-2 border-gray-500 text-gray-500"
                  : "text-gray-500"
              }`}
              onClick={() => setTechView(false)}
            >
              Non-Technical
            </button>
          </div>
        </div>
      </div>
      <div animation-settings="animate__fadeInRight" className="animate__onscroll">
        <SkillCard skills={skills} />
      </div>
    </div>
  );
}

export default Skills