"use client"
import 'swagger-ui-react/swagger-ui.css';
import {swaggerConfig} from './swagger';
import dynamic from 'next/dynamic';

const DynamicSwaggerUI = dynamic(() => import('swagger-ui-react'), {
    ssr:false,
    loading: () => <p>Loading...</p>,
})

export default function Apidocs(){
   
    return <DynamicSwaggerUI url="/docs.yaml" />
}
