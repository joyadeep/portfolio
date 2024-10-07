import React from 'react'
import ServiceCard from './ServiceCard'
import {Smartphone,Code, Database} from 'lucide-react'


const Services = () => {
  return (
    <div id='services' className='w-full min-h-screen px-5 md:px-20  flex flex-col justify-center items-center gap-20'>
    <h1 className='text-4xl font-bold capitalize tracking-tighter' >My services</h1>
    <div className=' flex justify-between flex-col md:flex-row w-full 2xl:w-9/12 gap-5'>
     <ServiceCard title={"Prototyping"} description={"Using prototyping services, clients can visualize and test their product's design and functionality."} icon={<Smartphone size={40} className='text-blue-500'/>}  />
     <ServiceCard title={"Frontend development"} description={"In frontend development, I create visual appeal, usability, and accessibility for user interfaces."} icon={<Code size={40} className='text-blue-500'/>}  />
     <ServiceCard title={"Backend development"} description={"In backend development, I craft the core functionality, data handling, and security to support frontend user interfaces and application operations."} icon={<Database size={40} className='text-blue-500'/>}  />
       
   
    </div>
</div>
  )
}

export default Services