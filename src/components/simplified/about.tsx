"use client"
import { cn } from '@/lib/utils'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef } from 'react'

type Props = {}

const About = (props: Props) => {
    const container = useRef(null);
    const box1 = useRef(null);
    const box2 = useRef(null);
    const box3 = useRef(null);
   
    useGSAP(()=>{
       const tl= gsap.timeline({repeat:-1});
    //    tl.to(box1.current,{y:-50,duration:2}) 
    //    tl.to(box2.current,{y:-100,duration:2}) 
    //    tl.to(box3.current,{y:-150,duration:2}) 
    })

    const style = "text-3xl font-bold"
  return (
    <div className='rounded-xl w-96 h-40 bg-slate-100 flex items-center justify-center '>
        <div ref={container} className='flex flex-col items-center justify-center drop-shadow-lg overflow-hidden  w-full h-12'>
        <div ref={box1} className={cn(style,"mt-20")}>Frontend</div>
        <div ref={box2} className={style}>Backend</div>
        <div ref={box3} className={style}>Database</div>
        </div>
    </div>
  )
}

export default About