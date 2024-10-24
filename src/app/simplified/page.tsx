import About from '@/components/simplified/about'
import Experience from '@/components/simplified/experience'
import Mail from '@/components/simplified/mail'
import Skills from '@/components/simplified/skills'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full h-screen bg-slate-800 p-5 grid grid-cols-12 grid-rows-12 grid-flow-dense gap-4'>
        {/* <Experience/> */}
        {/* <About/> */}
        {/* <Mail/> */}
        <Skills/>
    </div>
  )
}

export default page