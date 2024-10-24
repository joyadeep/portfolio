"use client"
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

type Props = {}

const About = (props: Props) => {
    const container = useRef<HTMLDivElement|null>(null);
   
    useGSAP(()=>{
       const tl= gsap.timeline({repeat:-1});
      tl.to(container.current,{y:-40, delay:2})
      .to(container.current,{y:-80, delay:2})
      .to(container.current,{y:0, delay:2})
    })

    const style = "text-3xl font-bold h-10"
  return (
    <div className='rounded-xl col-span-4 row-span-3 bg-slate-100 flex items-center justify-center '>
       <div className='relative overflow-hidden h-10 w-full'>
       <div ref={container} className='absolute  flex flex-col items-center justify-center   w-full  text-blue-600'>
        <div className={style}>Frontend</div>
        <div className={style}>Backend</div>
        <div className={style}>Database</div>
        </div>
       </div>
    </div>
  )
}

export default About