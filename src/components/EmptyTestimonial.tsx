import { Plus } from 'lucide-react'
import React from 'react'

const EmptyTestimonial = () => {
  return (
    <div className='border-2 rounded-md border-dashed border-gray-400 h-80  flex flex-col items-center justify-center px-5'>
        <Plus size={40} onClick={()=>{}}/>
        <h3 className='text-lg font-medium'>No Voices Found</h3>
        <p className='text-sm text-gray-700 text-center'>Have we worked together? Your testimonial not only supports my work but also helps others trust in my skills and expertise.</p>
    </div>
  )
}

export default EmptyTestimonial