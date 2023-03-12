import React from 'react'
import CardWork from './CardWork'
import {FaRegLightbulb,FaStudiovinari} from 'react-icons/fa'
import {HiOutlineDesktopComputer} from 'react-icons/hi'

const Working = () => {
  return (
      <div className='max-w-[1140px]  m-auto p-6 md:p-16'>
          <div className='p-6 md:p-16 flex items-center gap-2 '>
              <h1 className='text-2xl md:text-4xl font-bold'>What I Do</h1>
              <div className='w-[40px] h-1 bg-black mt-1'/>
          </div>
          <div className='flex flex-col md:flex-row '>
              <CardWork icon={<FaRegLightbulb size={30}/>} title='Creative Designs' lorem='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aut quasi consequatur quibusdam. Adipisci sed minima reiciendis, animi earum'/>
              <CardWork icon={<HiOutlineDesktopComputer size={30}/>} title='Web Development' lorem='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aut quasi consequatur quibusdam. Adipisci sed minima reiciendis, animi earum'/>
              <CardWork icon={<FaStudiovinari size={30}/>} title='Fastest' lorem='Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus aut quasi consequatur quibusdam. Adipisci sed minima reiciendis, animi earum'/>
          </div> 
    </div>
  )
}

export default Working