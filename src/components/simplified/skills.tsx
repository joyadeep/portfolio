import Image from 'next/image'
import React from 'react'

type Props = {}

const Skills = (props: Props) => {
  return (
    <div className='rounded-lg bg-slate-100 size-[500px] flex items-center justify-center'>
        <Image src={"/images/mee.jpg"} alt="me" width={80} height={80} className='rounded-full'/>
    </div>
  )
}

export default Skills