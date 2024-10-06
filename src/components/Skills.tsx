"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import ActionTooltip from './ActionTooltip'
import { useTheme } from 'next-themes'
import Loading from './Loading'

const images =[
  {label:"HTML",image:"/images/html.svg"},
  {label:"CSS",image:"/images/css.svg"},
  {label:"javascript",image:"/images/javascript.svg"},
  {label:"React",image:"/images/react.svg"},
  {label:"Next",image:"/images/next.svg",dark:"/images/nextDark.svg"},
  {label:"Typescript",image:"/images/typescript.svg"},
  {label:"Tailwind",image:"/images/tailwind.svg"},
  {label:"Redux",image:"/images/redux.svg"},
  {label:"Node.js",image:"/images/node.svg"},
  {label:"ExpressJS",image:"/images/express.svg",dark:"/images/expressDark.svg"},
  {label:"Prisma",image:"/images/prisma.svg",dark:"/images/prismaDark.svg"},
  {label:"MongoDB",image:"/images/mongo.svg"},
  {label:"Git",image:"/images/git.svg"},
  {label:"Docker",image:"/images/docker.svg"},
  {label:"PostgreSQL",image:"/images/postgres.svg"},
  {label:"GraphQL",image:"/images/graphql.svg"}
]

const Skills = () => {
  const [isMounted,setIsMounted]=useState(false);
  const {theme}=useTheme();
  useEffect(()=>{
    setIsMounted(true)
  },[])

  if (!isMounted){
    return <Loading/>
  }

  return (
    <div className='pt-20 pb-10'>
      <div className='grid grid-cols-4 gap-y-14 place-items-center'>
        {
          images.map((image,index)=>(
            <div key={index} className='relative w-12 h-12 cursor-pointer'>
         <ActionTooltip label={image.label} align='center' side='top'>
          <Image alt='' 
          src={
            theme==="dark"?image?.dark||image.image
            :
            image.image} 
          fill className='drop-shadow-lg'/> 
         </ActionTooltip>
        </div>
          ))
        }
      </div>
    </div>
  )
}

export default Skills