import React from 'react'

interface IService{
    icon?:JSX.Element;
    title?:string;
    description?:string;
}

const ServiceCard = ({icon,title,description}: IService) => {
  return (
    <div className='flex items-center flex-col w-full gap-3'>
    {icon}
    <div className='capitalize text-2xl font-semibold'>{title}</div>
    <p className='text-black/80 dark:text-white/90 text-center'>{description}</p>
</div>
  )
}

export default ServiceCard