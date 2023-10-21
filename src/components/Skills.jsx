import React, { useEffect, useState } from 'react'
import { BsStarFill,BsStar } from 'react-icons/bs'
import { technical,nonTechnical } from '../data/skills'


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
    <>
      <div className='flex justify-between w-full'>
        <div onClick={()=>{setTechView(true)}} className={`w-1/2 p-2 cursor-pointer text-center text-lg md:text-4xl font-bold rounded-tl-lg rounded-tr-lg ${techView ? 'bg-primaryColor text-white' : 'text-primaryColor'}`}><h2>Technical</h2></div>
        <div onClick={()=>{setTechView(false)}} className={`w-1/2 p-2 cursor-pointer text-center text-lg md:text-4xl font-bold rounded-tl-lg rounded-tr-lg ${techView ? 'text-primaryColor' : 'bg-primaryColor text-white'}`}><h2>Non-Technical</h2></div>
      </div>
      <div className='h-full w-full bg-gray-200 overflow-y-auto border border-primaryColor border-2 rounded-bl-lg rounded-br-lg'>
        {
          skills && skills.length > 0 ? (
            skills.map((skill,index) => (
              <div className='w-full flex justify-between px-5 py-2 mb-5 hover:bg-gray-100' key={index}>
                <div className='w-1/2 px-5'>
                  <h1 className='md:text-2xl font-bold'>{skill.name}</h1>
                </div>
                <div className='w-1/2 px-5 flex justify-end items-center'>
                  {
                    (() => {
                      const stars = [];
                      for (let i = 1; i <= 5; i++) {
                        if (i <= skill.star) {
                          stars.push(<BsStarFill key={i} className='md:text-2xl mx-1 md:mx-3 text-yellow-500' />);
                        } else {
                          stars.push(<BsStar key={i} className='md:text-2xl mx-1 md:mx-3 text-yellow-500' />);
                        }
                      }
                      return stars;
                    })()
                  }
                </div>
              </div>
            ))
          ) : null
        }
      </div>
    </>
  )
}

export default Skills