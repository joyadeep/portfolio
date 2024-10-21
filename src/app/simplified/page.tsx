import About from '@/components/simplified/about'
import Experience from '@/components/simplified/experience'
import Mail from '@/components/simplified/mail'
import Skills from '@/components/simplified/skills'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='w-full min-h-screen bg-slate-800 p-5 flex gap-5 flex-wrap'>
        <Experience/>
        <About/>
        <Skills/>
        <Mail/>
    </div>
  )
}

export default page