import React from 'react'
import { Skeleton } from './ui/skeleton'
import { Card, CardContent } from './ui/card'


const LoadingSkeleton = () => {
  return (
    <Card>
        <CardContent className="flex flex-col items-center justify-center p-3 gap-2">
      <Skeleton className="h-20 w-20 rounded-full" />
        <Skeleton className="h-4 w-44" />
        <Skeleton className="h-4 w-60" />
        <Skeleton className="h-4 w-56" />
        <Skeleton className="h-36 w-full" />
        </CardContent>
    </Card>
  )
}

export default LoadingSkeleton