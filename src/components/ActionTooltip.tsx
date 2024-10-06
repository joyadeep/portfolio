import React from 'react'
import { Tooltip,TooltipContent,TooltipProvider,TooltipTrigger } from './ui/tooltip'

type Props = {
    label:string;
    children:React.ReactNode;
    side?:"top" | "right" | "bottom" | "left";
    align?:"start" | "center" | "end";
}
const ActionTooltip = ({label,align,children,side}: Props) => {
  return (
    <TooltipProvider>
        <Tooltip delayDuration={50}>
            <TooltipTrigger asChild>
                {children}
            </TooltipTrigger>
            <TooltipContent side={side} align={align}>
                <p className='font-semibold text-sm'>
                    {label}
                </p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  )
}

export default ActionTooltip