import Image from 'next/image'
import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className=' rounded-lg bg-slate-100 col-span-6 row-span-6 flex items-center justify-center'>
        <Image src={"/images/mee.jpg"} alt="me" width={80} height={80} className='rounded-full'/>
       <div className='absolute bg-transparent size-32 rounded-full border border-slate-500 border-dashed'>
        <div className='relative size-8  left-1 top-1 '>
          <Image src={"/images/html.svg"} alt="me" width={80} height={80}/>
        </div>
       </div>

       <div className='absolute bg-transparent size-52 rounded-full border border-slate-500 border-dashed'>
        <div className='relative size-8  left-3.5 top-3.5 '>
          <Image src={"/images/react.svg"} alt="me" width={80} height={80}/>
        </div>
       </div>
       
       <div className='absolute bg-transparent size-72 rounded-full border border-slate-500 border-dashed '>
        <div className='relative size-8  -left-3 top-40 '>
          <Image src={"/images/git.svg"} alt="me" width={80} height={80}/>
        </div>
       </div>
    </div>
  )
}

export default Skills