import React from 'react'
import ProjectItem from './ProjectItem'
import solshieldImg from '../assets/solshield.png'
import ecshopImg from '../assets/ecshop.png'
const Projects = () => {
  return (
    <div id='project' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>My projects</p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={solshieldImg} title='Web3 App' />
            <ProjectItem img={ecshopImg} title='Ecommerce shop App'/>
        </div>
    </div>
  )
}

export default Projects