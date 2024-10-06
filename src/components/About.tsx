import Link from 'next/link'
import React from 'react'
import {Github,Linkedin} from 'lucide-react'
import Image from 'next/image'
import Timeline from './Timeline'
import Skills from './Skills'


const About = () => {
  return (
    <div id='about' className='min-h-fit md:min-h-screen px-5 md:px-20' >
    <div className=' flex flex-col md:flex-row items-center justify-center  md:justify-between  gap-5'>
    <div className='flex flex-col gap-5'>
        <h1 className='text-4xl tracking-tight font-bold'>My name is Joyadeep. I{"'"}am a frontend developer working and living in Kathmandu.</h1>
        <p className='text-black/70 dark:text-slate-300'>I was born in Taplejung and studied BSc. CSIT at ACHS in Kathmandu. I have worked in different firms as a Frontend Developer.</p>
        
        <div className=' flex gap-5'>
          <Link href={"https://www.linkedin.com/in/joyadeep/"} target='_blank'>
            <Linkedin size={24}  className='text-black/70 hover:text-black dark:text-slate-300 dark:hover:text-black/70 cursor-pointer'/>
          </Link>
          <Link href={"https://github.com/joyadeep"} target='_blank' >
            <Github size={24} className='text-black/70 hover:text-black dark:text-slate-300 dark:hover:text-black/70  cursor-pointer'  />
          </Link>
        </div>
    </div>
    <div className='relative hidden md:block md:w-1/2 h-80 md:h-[400px] 2xl:h-[600px]' >
        <Image src={"/images/me.jpg"} className='object-cover rounded-xl shadow-2xl' style={{borderRadius: "50% 50% 50% 50% / 30% 60% 40% 60%"}} alt='' fill  priority/>
    </div>
    </div>
    <Skills/>
    <Timeline/>
    </div>
  )
}

export default About