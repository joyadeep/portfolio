import React from 'react'
import { Card, CardContent } from './ui/card'
import Image from 'next/image'
import { Badge } from './ui/badge'
import Link from 'next/link'
import { Star } from "lucide-react";
import ActionTooltip from './ActionTooltip'
import {Github} from "lucide-react";

type Props = {
    id: number;
    title: string;
    image: string;
    description: string;
    tags: string[];
    link: string;
    star?: boolean;
    github?: string;
}
interface Iproject {
    project: Props;
}

const ProjectCard = ({ project }: Iproject) => {
    return (
        <Card className='w-full relative overflow-hidden  cursor-pointer hover:shadow-lg dark:border-slate-500 dark:hover:shadow-slate-600'>
            {
                project.star && (
                    <ActionTooltip label='Personally Using' align='center' side='top'>
                        <div className='absolute -top-1  pt-3 pb-1 z-10 bg-blue-600  text-center text-sm -left-9  w-[100px] transform -rotate-45 flex items-center justify-center'><Star fill='white'  className='rotate-45 text-white animate-pulse' /></div>
                    </ActionTooltip>
                )
            }
            <Link href={project.link} target='_blank'>
                <CardContent className='px-0 pb-3 '>
                    <div className='relative h-44'>
                        <Image src={project.image} alt='' fill className='object-cover' />
                    </div>
                    <div className='p-2'>
                        <h4 className='text-lg tracking-tight font-semibold'>{project.title}</h4>
                        <p className='text-sm mt-1'>
                            {project.description}
                        </p>
                        
                        
                        <div className='flex gap-2 flex-wrap mt-4'>
                            {
                                project.tags.map((tag, index) => (
                                    <Badge key={index} variant={'outline'} className='rounded-full'>#{tag}</Badge>
                                ))
                            }

                        </div>
                        
                    </div>
                   
                </CardContent>
            </Link>
        </Card>
    )
}

export default ProjectCard