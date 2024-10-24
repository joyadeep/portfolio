import { MailIcon } from 'lucide-react'
import React from 'react'

type Props = {}

const Mail = (props: Props) => {
  return (
    <div className='rounded-lg p-3 col-span-4 row-span-2 flex flex-col gap-1 items-center justify-center bg-slate-100 text-md font-medium text-slate-700'>
      <MailIcon size={30} className='text-red-500'/>
      <p>dev.joyadeep@gmail.com</p>
    </div>
  )
}

export default Mail