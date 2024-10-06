import { Loader2 } from 'lucide-react'
import React from 'react'

type Props = {
  size?:number;
}

const Loading = ({size}: Props) => {
  return (
    <div className='w-full my-5'>
        <Loader2 size={size ?? 52} className='animate-spin mx-auto'/>
    </div>
  )
}

export default Loading