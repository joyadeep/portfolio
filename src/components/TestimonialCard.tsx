import Image from 'next/image'
import React from 'react'
import { Card,CardContent } from './ui/card'
import {Quote,User2} from 'lucide-react'
import { Itestimonial } from './Testimonial'

type Props = {
  testimonial:Itestimonial
}

const TestimonialCard = ({testimonial}: Props) => {
  return (
    <Card className='py-5 cursor-pointer hover:shadow-lg dark:bg-slate-950 dark:border-white/60'>
        <CardContent>
    <div className='relative w-20 h-20 mx-auto'>
      {
        !testimonial.image? <User2 size={78} /> :
      <Image src={testimonial.image} alt='' fill className='mx-auto object-cover object-top rounded-full' />
      }
    </div>
    <div className='text-center'>
    <h1 className='text-black dark:text-white text-lg font-medium tracking-tight capitalize'>{testimonial.name}</h1>
    <h3 className='text-sm'>
      {testimonial.designation}
    </h3>
    <h5 className='text-sm text-black/80 dark:text-slate-300'>{testimonial.email}</h5>
    </div>
    <p className=' tracking-tighter text-black/80 dark:text-white text-left '>
        <Quote size={24} className='text-blue-500'/>
    {testimonial.message}
    </p>
        </CardContent>
</Card>
  )
}

export default TestimonialCard